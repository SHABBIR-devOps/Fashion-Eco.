import { ORDERS } from "../data/mockData";
import { mockDelay } from "./api";

export const orderService = {
  async createOrder({ items, shipping, payment, total }) {
    const order = {
      id: `ORD-${Math.floor(10000 + Math.random() * 89999)}`,
      date: new Date().toISOString().slice(0, 10),
      status: "Processing",
      total,
      items,
      shipping,
      payment,
      tracking: [
        { label: "Order placed", date: new Date().toISOString().slice(0, 10), done: true },
        { label: "Processing", date: "", done: false },
        { label: "Shipped", date: "", done: false },
        { label: "Out for delivery", date: "", done: false },
        { label: "Delivered", date: "", done: false },
      ],
    };
    return mockDelay(order, 700);
  },

  async getOrders() {
    return mockDelay(ORDERS);
  },

  async getOrderById(id) {
    const order = ORDERS.find((o) => o.id === id);
    if (!order) throw new Error("Order not found.");
    return mockDelay(order);
  },
};
