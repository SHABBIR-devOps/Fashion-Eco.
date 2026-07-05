import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ compact = false, onClose }) {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!value.trim()) return;
    navigate(`/shop?q=${encodeURIComponent(value.trim())}`);
    onClose?.();
  }

  return (
    <form onSubmit={handleSubmit} className={`flex items-center gap-2 border-b border-line ${compact ? "pb-1" : "pb-2"}`}>
      <Search size={16} className="text-ink-soft" />
      <input
        autoFocus={!compact}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search pieces, fabrics, colors…"
        className="flex-1 bg-transparent text-sm font-body outline-none placeholder:text-ink-soft"
      />
      {onClose && (
        <button type="button" onClick={onClose} aria-label="Close search" className="p-1">
          <X size={16} />
        </button>
      )}
    </form>
  );
}
