import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { CATEGORIES } from "../../data/mockData";

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute left-0 top-0 bottom-0 w-72 bg-paper dark:bg-dark-surface shadow-xl p-6 flex flex-col animate-slide-up">
        <div className="flex items-center justify-between mb-8">
          <span className="font-display text-xl font-semibold">FORME</span>
          <button onClick={onClose} className="p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt" aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-5 font-body uppercase text-sm tracking-wide">
          <Link to="/shop" onClick={onClose} className="text-ink-soft hover:text-ink">All products</Link>
          {CATEGORIES.map((c) => (
            <Link key={c.id} to={`/category/${c.id}`} onClick={onClose} className="text-ink-soft hover:text-ink">
              {c.name}
            </Link>
          ))}
          <Link to="/virtual-try-on" onClick={onClose} className="text-cobalt">Virtual Try-On</Link>
        </nav>
      </div>
    </div>
  );
}
