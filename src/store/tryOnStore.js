import { create } from "zustand";
import { virtualTryOnService } from "../services/virtualTryOnService";

const SAVED_KEY = "forme_saved_looks";
const loadSaved = () => JSON.parse(localStorage.getItem(SAVED_KEY) || "[]");

export const useTryOnStore = create((set, get) => ({
  photoUrl: null,
  selectedProduct: null,
  resultUrl: null,
  status: "idle", // idle | generating | done | error
  savedLooks: loadSaved(),

  setPhoto: (url) => set({ photoUrl: url, resultUrl: null }),
  setSelectedProduct: (product) => set({ selectedProduct: product, resultUrl: null }),

  async generate() {
    const { photoUrl, selectedProduct } = get();
    set({ status: "generating" });
    try {
      const { resultUrl } = await virtualTryOnService.generateTryOn({ photoUrl, product: selectedProduct });
      set({ resultUrl, status: "done" });
    } catch (err) {
      set({ status: "error" });
    }
  },

  saveLook() {
    const { photoUrl, resultUrl, selectedProduct } = get();
    if (!resultUrl) return;
    const look = { id: `look-${Date.now()}`, photoUrl, resultUrl, product: selectedProduct };
    const savedLooks = [look, ...get().savedLooks];
    localStorage.setItem(SAVED_KEY, JSON.stringify(savedLooks));
    set({ savedLooks });
  },

  removeLook(id) {
    const savedLooks = get().savedLooks.filter((l) => l.id !== id);
    localStorage.setItem(SAVED_KEY, JSON.stringify(savedLooks));
    set({ savedLooks });
  },

  reset: () => set({ photoUrl: null, selectedProduct: null, resultUrl: null, status: "idle" }),
}));
