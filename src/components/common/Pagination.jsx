import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Pagination">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="p-2 border border-line disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt"
        aria-label="Previous page"
      >
        <ChevronLeft size={15} />
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          aria-current={p === page ? "page" : undefined}
          className={`w-9 h-9 font-mono text-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt ${
            p === page ? "bg-ink text-white" : "border border-line hover:border-ink"
          }`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="p-2 border border-line disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt"
        aria-label="Next page"
      >
        <ChevronRight size={15} />
      </button>
    </nav>
  );
}
