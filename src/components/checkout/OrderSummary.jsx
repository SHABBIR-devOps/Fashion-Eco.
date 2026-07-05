import React from "react";
import { formatPrice } from "../../utils/formatPrice";

export default function OrderSummary({ items, subtotal, shipping = 0 }) {
  return (
    <div className="border border-line p-6">
      <h3 className="font-display text-lg font-semibold mb-4">Your order</h3>
      <ul className="divide-y divide-line">
        {items.map((it) => (
          <li key={`${it.id}-${it.size}`} className="py-3 flex justify-between text-sm font-body">
            <span>{it.name} <span className="text-ink-soft font-mono text-xs">× {it.qty}</span></span>
            <span className="font-mono">{formatPrice((it.salePrice ?? it.price) * it.qty)}</span>
          </li>
        ))}
      </ul>
      <div className="pt-4 mt-2 border-t border-line space-y-1 font-body text-sm">
        <div className="flex justify-between"><span className="text-ink-soft">Subtotal</span><span className="font-mono">{formatPrice(subtotal)}</span></div>
        <div className="flex justify-between"><span className="text-ink-soft">Shipping</span><span className="font-mono">{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
        <div className="flex justify-between font-semibold pt-1"><span>Total</span><span className="font-mono">{formatPrice(subtotal + shipping)}</span></div>
      </div>
    </div>
  );
}
