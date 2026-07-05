import React from "react";
import { Check } from "lucide-react";
import { formatDate } from "../../utils/formatDate";

export default function OrderTracker({ steps = [] }) {
  return (
    <ol className="space-y-0">
      {steps.map((step, i) => (
        <li key={step.label} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center border ${step.done ? "bg-cobalt border-cobalt text-white" : "border-line text-ink-soft"}`}>
              {step.done ? <Check size={13} /> : <span className="font-mono text-[10px]">{i + 1}</span>}
            </div>
            {i < steps.length - 1 && <div className={`w-px flex-1 min-h-[28px] ${step.done ? "bg-cobalt" : "bg-line"}`} />}
          </div>
          <div className="pb-8">
            <p className={`font-body text-sm ${step.done ? "text-ink" : "text-ink-soft"}`}>{step.label}</p>
            {step.date && <p className="font-mono text-[11px] text-ink-soft">{formatDate(step.date)}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
