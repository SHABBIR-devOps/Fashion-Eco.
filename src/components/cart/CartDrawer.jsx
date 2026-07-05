import React from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import CartItem from "./CartItem";
import { formatPrice } from "../../utils/formatPrice";
import Button from "../common/Button";

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal } = useCart();
  const navigate = useNavigate();

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={closeCart}
      />
      <div
        className={`absolute right-0 top-0 bottom-0 w-full sm:w-[420px] bg-paper dark:bg-dark-surface shadow-xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-line dark:border-dark-line">
          <h2 className="font-display text-xl font-semibold">Your bag</h2>
          <button onClick={closeCart} className="p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt" aria-label="Close bag">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto fm-scrollbar px-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <p className="font-display text-lg mb-2">Nothing here yet.</p>
              <p className="font-body text-sm text-ink-soft max-w-[220px]">
                Pieces you add will collect here, ready to check out whenever you are.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-line">
              {items.map((it) => (
                <CartItem key={`${it.id}-${it.size}`} item={it} />
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-line dark:border-dark-line px-6 py-5">
            <div className="flex justify-between font-body text-sm mb-1">
              <span className="text-ink-soft">Subtotal</span>
              <span className="font-mono">{formatPrice(subtotal)}</span>
            </div>
            <p className="font-mono text-[10px] text-ink-soft mb-4">Shipping and taxes calculated at checkout</p>
            <Button
              className="w-full"
              size="lg"
              onClick={() => {
                closeCart();
                navigate("/checkout");
              }}
            >
              Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
