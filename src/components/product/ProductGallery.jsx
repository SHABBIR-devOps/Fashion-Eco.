import React, { useState } from "react";

export default function ProductGallery({ images = [], alt }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="bg-paper-alt dark:bg-dark-surface overflow-hidden mb-3">
        <img src={images[active]} alt={alt} className="w-full aspect-[3/4] object-cover" />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              className={`w-16 h-20 overflow-hidden border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt ${
                i === active ? "border-ink" : "border-transparent"
              }`}
              aria-label={`Show image ${i + 1}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
