import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({ open, onClose, title, children, maxWidth = "max-w-lg" }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className={`relative bg-paper dark:bg-dark-surface w-full ${maxWidth} max-h-[90vh] overflow-y-auto fm-scrollbar p-6 md:p-8 animate-scale-in`}>
        <div className="flex items-center justify-between mb-6">
          {title && <h2 className="font-display text-xl font-semibold">{title}</h2>}
          <button onClick={onClose} className="ml-auto p-1 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt" aria-label="Close">
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
