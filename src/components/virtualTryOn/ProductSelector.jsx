import React from "react";
import { PRODUCTS } from "../../data/mockData";
import { formatPrice } from "../../utils/formatPrice";
import { useVirtualTryOn } from "../../hooks/useVirtualTryOn";

export default function ProductSelector() {
  const { selectedProduct, setSelectedProduct } = useVirtualTryOn();

  return (
    <div>
      <p className="font-mono text-[11px] tracking-widest text-ink-soft mb-3">CHOOSE A PIECE TO TRY ON</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-80 overflow-y-auto fm-scrollbar pr-1">
        {PRODUCTS.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedProduct(p)}
            className={`text-left border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt ${
              selectedProduct?.id === p.id ? "border-ink" : "border-transparent"
            }`}
          >
            <img src={p.images[0]} alt={p.name} className="w-full aspect-[3/4] object-cover" />
            <p className="font-mono text-[10px] mt-1 truncate">{p.name}</p>
            <p className="font-mono text-[10px] text-ink-soft">{formatPrice(p.salePrice ?? p.price)}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
