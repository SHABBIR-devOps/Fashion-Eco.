// Cart is primarily managed client-side by store/cartStore.js (with
// localStorage persistence) since it does not require a signed-in user.
// This service exists for the moment a cart needs to sync to an account
// on the backend (e.g. merging a guest cart at login time).
import { mockDelay } from "./api";

export const cartService = {
  async syncCart(cartItems) {
    // POST /cart/sync in production
    return mockDelay({ synced: true, count: cartItems.length }, 250);
  },
};
