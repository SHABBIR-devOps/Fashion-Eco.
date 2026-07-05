import { create } from "zustand";

const STORAGE_KEY = "forme_cart";
const load = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
const persist = (items) => localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

export const useCartStore = create((set, get) => ({
  items: load(),
  isOpen: false,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  addItem(product, size, qty = 1) {
    const items = [...get().items];
    const idx = items.findIndex((it) => it.id === product.id && it.size === size);
    if (idx > -1) {
      items[idx] = { ...items[idx], qty: items[idx].qty + qty };
    } else {
      items.push({
        id: product.id,
        name: product.name,
        image: product.images?.[0] || product.img,
        price: product.price,
        salePrice: product.salePrice ?? null,
        size,
        qty,
      });
    }
    persist(items);
    set({ items, isOpen: true });
  },

  updateQty(id, size, delta) {
    const items = get()
      .items.map((it) => (it.id === id && it.size === size ? { ...it, qty: Math.max(1, it.qty + delta) } : it))
      .filter((it) => it.qty > 0);
    persist(items);
    set({ items });
  },

  removeItem(id, size) {
    const items = get().items.filter((it) => !(it.id === id && it.size === size));
    persist(items);
    set({ items });
  },

  clearCart() {
    persist([]);
    set({ items: [] });
  },

  get subtotal() {
    return get().items.reduce((sum, it) => sum + (it.salePrice ?? it.price) * it.qty, 0);
  },

  get count() {
    return get().items.reduce((sum, it) => sum + it.qty, 0);
  },
}));
