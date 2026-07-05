import React from "react";
import { BRANDS } from "../../data/mockData";

export default function TopBrands() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 border-t border-line">
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">Brands we carry</h2>
      <div className="flex flex-wrap gap-x-12 gap-y-6">
        {BRANDS.map((b) => (
          <span key={b.id} className="font-display text-xl md:text-2xl text-ink-soft hover:text-ink transition-colors cursor-default">
            {b.name}
          </span>
        ))}
      </div>
    </section>
  );
}
