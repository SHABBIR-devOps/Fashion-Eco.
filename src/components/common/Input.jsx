import React from "react";

export default function Input({ label, error, icon, className = "", id, ...props }) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="font-mono text-[11px] tracking-widest text-ink-soft dark:text-paper/60">
          {label.toUpperCase()}
        </label>
      )}
      <div className="relative">
        {icon && <span className="absolute left-0 top-1/2 -translate-y-1/2 text-ink-soft">{icon}</span>}
        <input
          id={inputId}
          className={`w-full bg-transparent border-b border-line dark:border-dark-line focus-visible:outline-none focus:border-ink dark:focus:border-paper py-2 text-sm font-body ${icon ? "pl-6" : ""} ${
            error ? "border-clay" : ""
          } ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-clay text-xs font-body">{error}</p>}
    </div>
  );
}
