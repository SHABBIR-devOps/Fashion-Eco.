import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

export default function ShippingAddress({ onSubmit, defaultValues = {} }) {
  const [form, setForm] = useState({
    fullName: "", address: "", city: "", postalCode: "", phone: "", ...defaultValues,
  });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <Input label="Full name" required value={form.fullName} onChange={update("fullName")} />
      <Input label="Street address" required value={form.address} onChange={update("address")} />
      <div className="grid grid-cols-2 gap-4">
        <Input label="City" required value={form.city} onChange={update("city")} />
        <Input label="Postal code" required value={form.postalCode} onChange={update("postalCode")} />
      </div>
      <Input label="Phone" type="tel" required value={form.phone} onChange={update("phone")} />
      <Button type="submit" className="w-full" size="lg">Continue to payment</Button>
    </form>
  );
}
