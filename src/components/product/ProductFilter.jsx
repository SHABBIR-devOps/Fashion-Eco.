import React from "react";
import { CATEGORIES, BRANDS } from "../../data/mockData";
import { SIZES_APPAREL } from "../../utils/constants";

export default function ProductFilter({ filters, onChange }) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="font-mono text-[11px] tracking-widest text-ink-soft mb-3">CATEGORY</p>
        <ul className="space-y-2 font-body text-sm">
          <li>
            <button onClick={() => onChange({ category: "all" })} className={filters.category === "all" ? "font-semibold" : "text-ink-soft hover:text-ink"}>
              All
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button onClick={() => onChange({ category: c.id })} className={filters.category === c.id ? "font-semibold" : "text-ink-soft hover:text-ink"}>
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-mono text-[11px] tracking-widest text-ink-soft mb-3">BRAND</p>
        <ul className="space-y-2 font-body text-sm">
          {BRANDS.map((b) => (
            <li key={b.id}>
              <button onClick={() => onChange({ brand: filters.brand === b.id ? undefined : b.id })} className={filters.brand === b.id ? "font-semibold" : "text-ink-soft hover:text-ink"}>
                {b.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-mono text-[11px] tracking-widest text-ink-soft mb-3">SIZE</p>
        <div className="flex flex-wrap gap-2">
          {SIZES_APPAREL.map((s) => {
            const active = filters.sizes?.includes(s);
            return (
              <button
                key={s}
                onClick={() => {
                  const current = filters.sizes || [];
                  const next = active ? current.filter((x) => x !== s) : [...current, s];
                  onChange({ sizes: next });
                }}
                className={`font-mono text-[11px] px-2.5 py-1.5 border ${active ? "bg-ink text-white border-ink" : "border-line hover:border-ink"}`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
