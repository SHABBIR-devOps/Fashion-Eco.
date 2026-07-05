import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="border-t border-line mt-20 bg-ink text-white/85">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <p className="font-display text-2xl font-semibold text-white">FORME</p>
            <p className="font-body text-sm text-white/60 mt-3 max-w-xs">
              Notes on new pieces, restocks, and how things are made. No noise.
            </p>
            <form
              className="mt-4 flex border-b border-white/30 max-w-xs"
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="you@email.com"
                className="bg-transparent flex-1 font-body text-sm py-2 outline-none placeholder:text-white/40"
              />
              <button type="submit" className="font-mono text-xs tracking-wide pb-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                {sent ? "SENT" : "JOIN"}
              </button>
            </form>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-widest text-white/50 mb-4">SHOP</p>
            <ul className="space-y-2 font-body text-sm text-white/80">
              <li><Link to="/category/men">Men</Link></li>
              <li><Link to="/category/women">Women</Link></li>
              <li><Link to="/category/kids">Kids</Link></li>
              <li><Link to="/category/accessories">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-widest text-white/50 mb-4">COMPANY</p>
            <ul className="space-y-2 font-body text-sm text-white/80">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-widest text-white/50 mb-4">HELP</p>
            <ul className="space-y-2 font-body text-sm text-white/80">
              <li><Link to="/orders">Track an order</Link></li>
              <li><Link to="/contact">Shipping &amp; returns</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-2 mt-12 pt-6 border-t border-white/15 font-mono text-[11px] text-white/40">
          <span>© {new Date().getFullYear()} FORME STUDIO</span>
          <span>Made to be worn, not shelved.</span>
        </div>
      </div>
    </footer>
  );
}
