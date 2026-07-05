import { useWishlistStore } from "../store/wishlistStore";

export function useWishlist() {
  const { items, toggle, isWishlisted, remove } = useWishlistStore();
  return { items, toggle, isWishlisted, remove, count: items.length };
}
