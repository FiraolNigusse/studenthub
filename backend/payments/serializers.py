from rest_framework import serializers
from .models import Payment


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ('id', 'stripe_checkout_session_id', 'amount', 'currency', 'status', 'created_at')
        read_only_fields = ('id', 'stripe_checkout_session_id', 'amount', 'currency', 'status', 'created_at')


class CreateCheckoutSessionSerializer(serializers.Serializer):
    price_id = serializers.CharField(
        required=False,
        help_text='Stripe Price ID. If not provided, defaults to the configured premium price.',
    )
