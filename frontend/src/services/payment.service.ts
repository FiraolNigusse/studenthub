import api from './api';
import type { CheckoutSessionParams, CheckoutSessionResponse } from '../types/payment.types';

const PaymentService = {
  /**
   * Generates a Stripe checkout session and returns the checkout URL.
   * After success, Stripe will redirect back to the app.
   */
  async createCheckoutSession(params?: CheckoutSessionParams): Promise<CheckoutSessionResponse> {
    const response = await api.post('/payments/create-checkout-session/', params || {});
    return response.data;
  },

  /**
   * Verifying payment status is mostly handled by the backend webhook,
   * but the frontend can check if the user is now premium.
   */
  async getPaymentStatus(sessionId: string): Promise<any> {
    // Optional: add a backend endpoint to check status manually if needed.
    // For now, the user's is_premium status can be re-fetched.
    return Promise.resolve({ sessionId });
  }
};

export default PaymentService;
