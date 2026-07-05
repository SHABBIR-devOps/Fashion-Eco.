import { create } from "zustand";
import { orderService } from "../services/orderService";

export const useOrderStore = create((set) => ({
  orders: [],
  status: "idle",
  activeOrder: null,

  async fetchOrders() {
    set({ status: "loading" });
    const orders = await orderService.getOrders();
    set({ orders, status: "idle" });
  },

  async fetchOrderById(id) {
    set({ status: "loading" });
    const order = await orderService.getOrderById(id);
    set({ activeOrder: order, status: "idle" });
    return order;
  },

  async placeOrder(payload) {
    const order = await orderService.createOrder(payload);
    set((state) => ({ orders: [order, ...state.orders] }));
    return order;
  },
}));
