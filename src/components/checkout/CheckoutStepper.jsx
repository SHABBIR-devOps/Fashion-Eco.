import React from "react";
import { Check } from "lucide-react";

export default function CheckoutStepper({ steps, activeStep }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      {steps.map((step, i) => {
        const done = i < activeStep;
        const active = i === activeStep;
        return (
          <div key={step} className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs border ${
                  done ? "bg-ink text-white border-ink" : active ? "border-ink text-ink" : "border-line text-ink-soft"
                }`}
              >
                {done ? <Check size={14} /> : i + 1}
              </div>
              <span className={`font-mono text-[10px] tracking-wide ${active ? "text-ink" : "text-ink-soft"}`}>{step}</span>
            </div>
            {i < steps.length - 1 && <div className="w-10 h-px bg-line" />}
          </div>
        );
      })}
    </div>
  );
}
