import { mockDelay } from "./api";

// Mirrors the shape of a Stripe PaymentIntent flow so swapping in the real
// Stripe SDK later only touches this file.
export const paymentService = {
  async createPaymentIntent(amount) {
    return mockDelay({ clientSecret: `pi_mock_${Date.now()}_secret`, amount }, 500);
  },

  async confirmPayment({ method }) {
    if (method === "card") {
      return mockDelay({ status: "succeeded" }, 900);
    }
    return mockDelay({ status: "pending_confirmation" }, 400);
  },
};
