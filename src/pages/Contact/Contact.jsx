import React, { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="max-w-lg mx-auto px-5 md:px-8 py-16">
      <h1 className="font-display text-3xl font-semibold mb-2">Get in touch</h1>
      <p className="font-body text-sm text-ink-soft mb-8">Questions about sizing, an order, or anything else — we read every message.</p>
      {sent ? (
        <p className="font-body text-sm text-cobalt">Thanks — we'll get back to you within one business day.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input label="Name" required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
          <Input label="Email" type="email" required value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[11px] tracking-widest text-ink-soft">MESSAGE</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full bg-transparent border-b border-line text-sm font-body py-2 outline-none resize-none"
            />
          </div>
          <Button type="submit" className="w-full" size="lg">Send message</Button>
        </form>
      )}
    </div>
  );
}
