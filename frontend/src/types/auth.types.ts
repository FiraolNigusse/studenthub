export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  is_premium: boolean;
  stripe_customer_id: string | null;
}

export interface Tokens {
  access: string;
  refresh: string;
}

export interface AuthResponse {
  user: User;
  tokens: Tokens;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  password_confirm: string;
  first_name: string;
  last_name: string;
}
