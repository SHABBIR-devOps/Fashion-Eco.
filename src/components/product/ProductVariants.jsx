import React from "react";

export default function ProductVariants({ sizes = [], colors = [], selectedSize, selectedColor, onSizeChange, onColorChange, onOpenSizeGuide }) {
  return (
    <div className="space-y-6">
      {colors.length > 0 && (
        <div>
          <p className="font-mono text-[11px] tracking-widest text-ink-soft mb-2">COLOR</p>
          <div className="flex gap-2">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => onColorChange(c)}
                aria-label={`Select color ${c}`}
                className={`w-8 h-8 rounded-full border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt ${
                  selectedColor === c ? "border-ink" : "border-transparent"
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="font-mono text-[11px] tracking-widest text-ink-soft">SIZE</p>
          {onOpenSizeGuide && (
            <button onClick={onOpenSizeGuide} className="font-mono text-[11px] underline text-ink-soft hover:text-ink">
              Size guide
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => onSizeChange(s)}
              className={`font-mono text-[12px] px-3 py-2 border focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt ${
                selectedSize === s ? "bg-ink text-white border-ink" : "border-line hover:border-ink"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
