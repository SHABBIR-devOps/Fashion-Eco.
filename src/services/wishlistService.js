import { mockDelay } from "./api";

// Wishlist persistence lives in store/wishlistStore.js via localStorage.
// This service is the seam for syncing that list to a user account.
export const wishlistService = {
  async syncWishlist(ids) {
    return mockDelay({ synced: true, count: ids.length }, 250);
  },
};
