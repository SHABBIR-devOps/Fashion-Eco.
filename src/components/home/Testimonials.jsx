import React from "react";
import { TESTIMONIALS } from "../../data/mockData";
import ProductRating from "../product/ProductRating";

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 border-t border-line">
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">What customers say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="border border-line p-6">
            <ProductRating rating={t.rating} />
            <p className="font-body text-sm text-ink-soft mt-3 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <p className="font-mono text-[11px] mt-4 text-ink-soft">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
