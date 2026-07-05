import { create } from "zustand";
import { productService } from "../services/productService";

export const useProductStore = create((set) => ({
  products: [],
  status: "idle",
  filters: { category: "all", sort: "featured", query: "" },

  setFilters(patch) {
    set((state) => ({ filters: { ...state.filters, ...patch } }));
  },

  async fetchProducts(overrideFilters) {
    set({ status: "loading" });
    try {
      const filters = overrideFilters || useProductStore.getState().filters;
      const products = await productService.getProducts(filters);
      set({ products, status: "idle" });
    } catch (err) {
      set({ status: "error" });
    }
  },
}));
