export interface CheckoutSessionParams {
  price_id?: string;
}

export interface CheckoutSessionResponse {
  checkout_url: string;
  session_id: string;
}

export interface StripeErrorResponse {
  error: string;
}
