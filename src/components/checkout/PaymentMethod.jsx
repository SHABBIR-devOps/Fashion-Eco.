import React, { useState } from "react";
import { PAYMENT_METHODS } from "../../utils/constants";
import Button from "../common/Button";
import Input from "../common/Input";

export default function PaymentMethod({ onSubmit }) {
  const [method, setMethod] = useState(PAYMENT_METHODS[0].id);
  const [card, setCard] = useState({ number: "", expiry: "", cvc: "" });

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ method, card: method === "card" ? card : undefined });
      }}
    >
      <div className="space-y-2">
        {PAYMENT_METHODS.map((m) => (
          <label key={m.id} className={`flex items-center gap-3 border p-3.5 cursor-pointer ${method === m.id ? "border-ink" : "border-line"}`}>
            <input type="radio" name="payment" checked={method === m.id} onChange={() => setMethod(m.id)} className="accent-cobalt" />
            <span className="font-body text-sm">{m.label}</span>
          </label>
        ))}
      </div>

      {method === "card" && (
        <div className="space-y-4">
          <Input label="Card number" required value={card.number} onChange={(e) => setCard((c) => ({ ...c, number: e.target.value }))} placeholder="4242 4242 4242 4242" />
          <div className="grid grid-cols-2 gap-4">
            <Input label="Expiry" required value={card.expiry} onChange={(e) => setCard((c) => ({ ...c, expiry: e.target.value }))} placeholder="MM/YY" />
            <Input label="CVC" required value={card.cvc} onChange={(e) => setCard((c) => ({ ...c, cvc: e.target.value }))} placeholder="123" />
          </div>
        </div>
      )}

      <Button type="submit" className="w-full" size="lg">Review order</Button>
    </form>
  );
}
