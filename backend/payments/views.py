import stripe
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from decouple import config
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny

from .models import Payment
from .serializers import CreateCheckoutSessionSerializer

stripe.api_key = config('STRIPE_SECRET_KEY')


class CreateCheckoutSessionView(APIView):
    """
    Creates a Stripe Checkout Session for the authenticated user
    to upgrade to premium.
    """
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = CreateCheckoutSessionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = request.user

        # Create or retrieve Stripe customer
        if not user.stripe_customer_id:
            customer = stripe.Customer.create(
                email=user.email,
                metadata={'user_id': user.id},
            )
            user.stripe_customer_id = customer.id
            user.save(update_fields=['stripe_customer_id'])

        price_id = serializer.validated_data.get('price_id') or config('STRIPE_PRICE_ID')

        try:
            checkout_session = stripe.checkout.Session.create(
                customer=user.stripe_customer_id,
                payment_method_types=['card'],
                line_items=[{
                    'price': price_id,
                    'quantity': 1,
                }],
                mode='payment',
                success_url=config('FRONTEND_URL') + '/payment/success?session_id={CHECKOUT_SESSION_ID}',
                cancel_url=config('FRONTEND_URL') + '/payment/cancel',
                metadata={
                    'user_id': user.id,
                },
            )

            # Store payment record
            Payment.objects.create(
                user=user,
                stripe_checkout_session_id=checkout_session.id,
                amount=0,  # Will be updated by webhook
                status=Payment.Status.PENDING,
            )

            return Response({
                'checkout_url': checkout_session.url,
                'session_id': checkout_session.id,
            }, status=status.HTTP_201_CREATED)

        except stripe.error.StripeError as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_400_BAD_REQUEST,
            )


@method_decorator(csrf_exempt, name='dispatch')
class StripeWebhookView(APIView):
    """
    Handles Stripe webhook events.
    This endpoint is called by Stripe when payment events occur.
    """
    permission_classes = [AllowAny]

    def post(self, request):
        payload = request.body
        sig_header = request.META.get('HTTP_STRIPE_SIGNATURE')
        webhook_secret = config('STRIPE_WEBHOOK_SECRET')

        try:
            event = stripe.Webhook.construct_event(
                payload, sig_header, webhook_secret
            )
        except ValueError:
            return Response(
                {'error': 'Invalid payload'},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except stripe.error.SignatureVerificationError:
            return Response(
                {'error': 'Invalid signature'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Handle the event
        if event['type'] == 'checkout.session.completed':
            session = event['data']['object']
            self._handle_checkout_completed(session)
        elif event['type'] == 'checkout.session.expired':
            session = event['data']['object']
            self._handle_checkout_expired(session)

        return Response({'status': 'ok'}, status=status.HTTP_200_OK)

    def _handle_checkout_completed(self, session):
        """Mark payment as completed and user as premium."""
        try:
            payment = Payment.objects.get(
                stripe_checkout_session_id=session['id']
            )
            payment.stripe_payment_intent_id = session.get('payment_intent')
            payment.amount = (session.get('amount_total', 0) or 0) / 100
            payment.status = Payment.Status.COMPLETED
            payment.save()

            # Mark user as premium
            user = payment.user
            user.is_premium = True
            user.save(update_fields=['is_premium'])

        except Payment.DoesNotExist:
            pass

    def _handle_checkout_expired(self, session):
        """Mark payment as cancelled if session expired."""
        try:
            payment = Payment.objects.get(
                stripe_checkout_session_id=session['id']
            )
            payment.status = Payment.Status.CANCELLED
            payment.save(update_fields=['status'])
        except Payment.DoesNotExist:
            pass
