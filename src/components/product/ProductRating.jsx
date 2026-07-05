import React from "react";
import { Star } from "lucide-react";

export default function ProductRating({ rating = 0, reviewCount, size = 13 }) {
  const full = Math.round(rating);
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={size} fill={i < full ? "#17150F" : "none"} color="#17150F" className="dark:hidden" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={`d-${i}`} size={size} fill={i < full ? "#F5F3EE" : "none"} color="#F5F3EE" className="hidden dark:block" />
        ))}
      </div>
      {reviewCount != null && <span className="font-mono text-[11px] text-ink-soft dark:text-paper/60">({reviewCount})</span>}
    </div>
  );
}
