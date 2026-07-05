import React from "react";

export default function Loader({ label = "Loading", size = 22 }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12" role="status" aria-live="polite">
      <span
        className="inline-block rounded-full border-2 border-line border-t-ink dark:border-dark-line dark:border-t-paper animate-spin"
        style={{ width: size, height: size }}
      />
      <span className="font-mono text-[11px] tracking-widest text-ink-soft dark:text-paper/60">{label.toUpperCase()}</span>
    </div>
  );
}
