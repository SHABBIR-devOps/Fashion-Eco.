import React from "react";
import { X, Plus, Minus } from "lucide-react";
import { formatPrice } from "../../utils/formatPrice";
import { useCart } from "../../hooks/useCart";

export default function CartItem({ item }) {
  const { updateQty, removeItem } = useCart();
  return (
    <li className="py-5 flex gap-4">
      <img src={item.image} alt={item.name} className="w-20 h-24 object-cover flex-shrink-0" />
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between gap-2">
          <p className="font-body text-sm">{item.name}</p>
          <button onClick={() => removeItem(item.id, item.size)} aria-label={`Remove ${item.name}`} className="text-ink-soft hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt">
            <X size={15} />
          </button>
        </div>
        <p className="font-mono text-[11px] text-ink-soft mt-1">Size {item.size}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-line">
            <button onClick={() => updateQty(item.id, item.size, -1)} className="p-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt" aria-label="Decrease quantity">
              <Minus size={13} />
            </button>
            <span className="font-mono text-xs w-6 text-center">{item.qty}</span>
            <button onClick={() => updateQty(item.id, item.size, 1)} className="p-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt" aria-label="Increase quantity">
              <Plus size={13} />
            </button>
          </div>
          <span className="font-mono text-sm">{formatPrice((item.salePrice ?? item.price) * item.qty)}</span>
        </div>
      </div>
    </li>
  );
}
