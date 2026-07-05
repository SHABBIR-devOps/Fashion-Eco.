import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="border-t border-line bg-paper-alt">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Get 10% off your first order</h2>
        <p className="font-body text-sm text-ink-soft mb-6">Notes on new pieces, restocks, and how things are made.</p>
        <form
          className="flex max-w-sm mx-auto border-b border-ink"
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setSent(true);
          }}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="you@email.com"
            className="flex-1 bg-transparent font-body text-sm py-2.5 outline-none placeholder:text-ink-soft"
          />
          <button type="submit" className="font-mono text-xs tracking-wide px-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt">
            {sent ? "SENT" : "JOIN"}
          </button>
        </form>
      </div>
    </section>
  );
}
