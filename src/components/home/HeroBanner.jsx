import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="relative border-b border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-0">
        <div className="order-2 md:order-1 flex flex-col justify-center py-12 md:py-24 relative">
          <span className="hidden md:block absolute -left-2 top-1/2 -translate-y-1/2 -rotate-90 font-mono text-[11px] tracking-[0.3em] text-ink-soft whitespace-nowrap">
            SS/04 — COLLECTION
          </span>
          <p className="font-mono text-xs tracking-widest text-cobalt mb-4 md:pl-10">NO. 04 — STRUCTURE &amp; EASE</p>
          <h1 className="font-display text-[13vw] leading-[0.92] md:text-6xl md:leading-[0.95] font-semibold tracking-tight md:pl-10 max-w-lg">
            Cut for how you actually move.
          </h1>
          <p className="font-body text-[15px] text-ink-soft mt-6 max-w-sm md:pl-10">
            Architectural tailoring and elevated basics, built from natural fibers and finished to hold their shape past a first wash.
          </p>
          <div className="mt-8 md:pl-10 flex items-center gap-4">
            <Link to="/shop" className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-white font-body text-sm tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt">
              Shop the collection <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 relative min-h-[46vh] md:min-h-[640px]">
          <img
            src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1200&q=80"
            alt="Model wearing the Kestrel wool overcoat from the FORME collection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 font-mono text-[11px] px-3 py-1.5 text-white bg-cobalt">
            KESTREL OVERCOAT — ASH CHARCOAL
          </div>
        </div>
      </div>
    </section>
  );
}
