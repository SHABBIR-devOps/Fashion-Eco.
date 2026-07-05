import React from "react";

// Slim announcement ticker shown above the Navbar across the whole app.
export default function Header() {
  const message = "FREE SHIPPING OVER $150 · · · SS/04 COLLECTION NOW LIVE · · · 30-DAY RETURNS · · · ";
  return (
    <div className="overflow-hidden border-b border-line bg-ink">
      <div className="flex w-[200%] animate-ticker py-2">
        <span className="font-mono text-[11px] tracking-widest text-white/80 whitespace-nowrap pr-4">{message.repeat(2)}</span>
        <span className="font-mono text-[11px] tracking-widest text-white/80 whitespace-nowrap pr-4">{message.repeat(2)}</span>
      </div>
    </div>
  );
}
