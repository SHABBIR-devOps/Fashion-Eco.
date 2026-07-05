import React, { useState } from "react";

const VALID_CODES = { FORME10: 0.1, WELCOME15: 0.15 };

export default function CouponBox({ onApply }) {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState(null);

  function handleApply(e) {
    e.preventDefault();
    const discount = VALID_CODES[code.trim().toUpperCase()];
    if (discount) {
      onApply(discount);
      setMessage({ type: "success", text: `Code applied — ${discount * 100}% off.` });
    } else {
      setMessage({ type: "error", text: "That code isn't valid or has expired." });
    }
  }

  return (
    <form onSubmit={handleApply} className="mt-4">
      <div className="flex border-b border-line">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Discount code"
          className="flex-1 bg-transparent text-sm font-body py-2 outline-none placeholder:text-ink-soft"
        />
        <button type="submit" className="font-mono text-xs tracking-wide px-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt">
          APPLY
        </button>
      </div>
      {message && (
        <p className={`font-mono text-[11px] mt-2 ${message.type === "success" ? "text-cobalt" : "text-clay"}`}>{message.text}</p>
      )}
    </form>
  );
}
