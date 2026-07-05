import React from "react";
import { ChevronDown } from "lucide-react";

export default function Select({ label, options = [], className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="font-mono text-[11px] tracking-widest text-ink-soft dark:text-paper/60">{label.toUpperCase()}</label>}
      <div className="relative">
        <select
          className={`appearance-none w-full bg-transparent border-b border-line dark:border-dark-line pr-6 pb-2 text-sm font-body focus-visible:outline-none focus:border-ink dark:focus:border-paper cursor-pointer ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown size={14} className="absolute right-0 top-1 pointer-events-none text-ink-soft" />
      </div>
    </div>
  );
}
