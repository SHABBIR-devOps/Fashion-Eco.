import React from "react";
import { CATEGORIES } from "../../data/mockData";
import { Link } from "react-router-dom";

export default function FeaturedCollection() {
  const featured = CATEGORIES.slice(0, 4);
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-semibold">Shop by category</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {featured.map((c) => (
          <Link key={c.id} to={`/category/${c.id}`} className="relative group overflow-hidden">
            <img src={c.image} alt={c.name} className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-body text-sm tracking-wide">{c.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
