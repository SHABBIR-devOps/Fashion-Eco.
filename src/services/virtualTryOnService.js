import { mockDelay } from "./api";

export const virtualTryOnService = {
  // Simulates an AI try-on render. Swap this for a call to your
  // image-generation/try-on model endpoint; keep the same return shape
  // ({ resultUrl }) so TryOnPreview.jsx needs no changes.
  async generateTryOn({ photoUrl, product }) {
    if (!photoUrl || !product) throw new Error("A photo and a product are required.");
    return mockDelay({ resultUrl: photoUrl, productId: product.id }, 1400);
  },

  async getAIRecommendations(profile) {
    // Would call a recommendation model keyed on body type / past orders.
    return mockDelay([], 300);
  },
};
