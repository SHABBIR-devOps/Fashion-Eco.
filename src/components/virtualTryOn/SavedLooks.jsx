import React from "react";
import { X } from "lucide-react";
import { useVirtualTryOn } from "../../hooks/useVirtualTryOn";
import EmptyState from "../common/EmptyState";
import { Shirt } from "lucide-react";

export default function SavedLooks() {
  const { savedLooks, removeLook } = useVirtualTryOn();

  if (savedLooks.length === 0) {
    return <EmptyState icon={<Shirt size={28} />} title="No saved looks yet" subtitle="Generate a try-on and save it to build your gallery." />;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {savedLooks.map((look) => (
        <div key={look.id} className="relative group">
          <img src={look.resultUrl} alt={`Saved look with ${look.product?.name}`} className="w-full aspect-[3/4] object-cover" />
          <button
            onClick={() => removeLook(look.id)}
            className="absolute top-2 right-2 p-1.5 bg-white/85 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt"
            aria-label="Remove saved look"
          >
            <X size={13} />
          </button>
          <p className="font-mono text-[10px] mt-1 truncate">{look.product?.name}</p>
        </div>
      ))}
    </div>
  );
}
