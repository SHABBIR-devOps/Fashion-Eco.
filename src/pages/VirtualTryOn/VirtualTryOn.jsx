import React, { useState } from "react";
import UploadPhoto from "../../components/virtualTryOn/UploadPhoto";
import CameraCapture from "../../components/virtualTryOn/CameraCapture";
import ProductSelector from "../../components/virtualTryOn/ProductSelector";
import TryOnPreview from "../../components/virtualTryOn/TryOnPreview";
import SavedLooks from "../../components/virtualTryOn/SavedLooks";
import AIRecommendation from "../../components/virtualTryOn/AIRecommendation";

export default function VirtualTryOn() {
  const [tab, setTab] = useState("tryon");

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 py-10">
      <p className="font-mono text-xs tracking-widest text-cobalt mb-2">AI VIRTUAL TRY-ON</p>
      <h1 className="font-display text-3xl font-semibold mb-8">See it on you before you buy it.</h1>

      <div className="flex gap-6 border-b border-line mb-10 font-mono text-xs tracking-widest">
        {[
          { id: "tryon", label: "TRY IT ON" },
          { id: "saved", label: "SAVED LOOKS" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`pb-3 border-b-2 -mb-px ${tab === t.id ? "border-ink text-ink" : "border-transparent text-ink-soft"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "tryon" ? (
        <>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <UploadPhoto />
              <CameraCapture />
              <ProductSelector />
            </div>
            <TryOnPreview />
          </div>
          <AIRecommendation />
        </>
      ) : (
        <SavedLooks />
      )}
    </div>
  );
}
