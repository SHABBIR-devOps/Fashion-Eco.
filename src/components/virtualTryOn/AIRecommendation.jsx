import React from "react";
import { PRODUCTS } from "../../data/mockData";
import ProductCard from "../product/ProductCard";

// Placeholder recommendation logic: surfaces top-rated pieces as a stand-in
// for a real model call (see virtualTryOnService.getAIRecommendations).
export default function AIRecommendation() {
  const recs = [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 4);
  return (
    <section className="mt-10">
      <p className="font-mono text-[11px] tracking-widest text-ink-soft mb-4">RECOMMENDED FOR YOUR FIT</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
        {recs.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
