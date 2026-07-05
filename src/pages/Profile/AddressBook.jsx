import React, { useState } from "react";
import { useUserStore } from "../../store/userStore";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { X } from "lucide-react";

export default function AddressBook() {
  const { profile, addAddress, removeAddress } = useUserStore();
  const [form, setForm] = useState({ label: "", address: "", city: "" });

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.address) return;
    addAddress(form);
    setForm({ label: "", address: "", city: "" });
  }

  return (
    <div>
      <h2 className="font-display text-xl font-semibold mb-6">Address book</h2>
      <div className="space-y-3 mb-8">
        {profile.addresses.length === 0 && <p className="text-sm text-ink-soft">No saved addresses yet.</p>}
        {profile.addresses.map((a) => (
          <div key={a.id} className="border border-line p-4 flex justify-between items-start">
            <div className="font-body text-sm">
              <p className="font-semibold">{a.label || "Address"}</p>
              <p className="text-ink-soft">{a.address}, {a.city}</p>
            </div>
            <button onClick={() => removeAddress(a.id)} aria-label="Remove address"><X size={15} /></button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 border-t border-line pt-6">
        <Input label="Label" placeholder="Home, Office…" value={form.label} onChange={(e) => setForm((f) => ({ ...f, label: e.target.value }))} />
        <Input label="Address" required value={form.address} onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))} />
        <Input label="City" required value={form.city} onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))} />
        <Button type="submit">Save address</Button>
      </form>
    </div>
  );
}
