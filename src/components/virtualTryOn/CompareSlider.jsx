import React, { useState } from "react";

export default function CompareSlider({ before, after }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden select-none">
      <img src={after} alt="Try-on result" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt="Original photo" className="w-full h-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} />
      </div>
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="w-0.5 h-full bg-white" />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-x-0 bottom-3 w-[90%] mx-[5%] accent-cobalt"
        aria-label="Compare before and after"
      />
    </div>
  );
}
