import React, { useEffect, useState } from "react";
import { productService } from "../../services/productService";
import ProductCard from "../product/ProductCard";

function useCountdown(hours = 6) {
  const [remaining, setRemaining] = useState(hours * 3600);
  useEffect(() => {
    const id = setInterval(() => setRemaining((r) => (r > 0 ? r - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(remaining / 3600)).padStart(2, "0");
  const m = String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");
  const s = String(remaining % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

export default function FlashSale() {
  const [products, setProducts] = useState([]);
  const countdown = useCountdown(6);

  useEffect(() => {
    productService.getFlashSaleProducts().then(setProducts);
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="border-t border-line" style={{ background: "#EDEAE2" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Flash sale</h2>
          <div className="font-mono text-xs tracking-widest px-3 py-1.5 bg-clay text-white">ENDS IN {countdown}</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
