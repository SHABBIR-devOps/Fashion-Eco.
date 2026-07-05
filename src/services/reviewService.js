import { REVIEWS } from "../data/mockData";
import { mockDelay } from "./api";

export const reviewService = {
  async getReviews(productId) {
    return mockDelay(REVIEWS[productId] || []);
  },

  async addReview(productId, review) {
    const newReview = { id: `r-${Date.now()}`, date: new Date().toISOString().slice(0, 10), ...review };
    REVIEWS[productId] = [newReview, ...(REVIEWS[productId] || [])];
    return mockDelay(newReview, 350);
  },
};
