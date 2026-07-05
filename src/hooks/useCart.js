import { useCartStore } from "../store/cartStore";

export function useCart() {
  const { items, isOpen, openCart, closeCart, addItem, updateQty, removeItem, clearCart } = useCartStore();
  const subtotal = items.reduce((sum, it) => sum + (it.salePrice ?? it.price) * it.qty, 0);
  const count = items.reduce((sum, it) => sum + it.qty, 0);
  return { items, isOpen, openCart, closeCart, addItem, updateQty, removeItem, clearCart, subtotal, count };
}
