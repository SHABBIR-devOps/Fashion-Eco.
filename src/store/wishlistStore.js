import { create } from "zustand";

const STORAGE_KEY = "forme_wishlist";
const load = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
const persist = (items) => localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

export const useWishlistStore = create((set, get) => ({
  items: load(), // full product objects

  toggle(product) {
    const exists = get().items.some((p) => p.id === product.id);
    const items = exists ? get().items.filter((p) => p.id !== product.id) : [...get().items, product];
    persist(items);
    set({ items });
  },

  isWishlisted(id) {
    return get().items.some((p) => p.id === id);
  },

  remove(id) {
    const items = get().items.filter((p) => p.id !== id);
    persist(items);
    set({ items });
  },
}));
