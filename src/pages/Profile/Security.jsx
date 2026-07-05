import React, { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { isValidPassword } from "../../utils/validators";

export default function Security() {
  const [form, setForm] = useState({ current: "", next: "" });
  const [message, setMessage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValidPassword(form.next)) return setMessage({ type: "error", text: "New password needs 8+ characters, with a letter and a number." });
    setMessage({ type: "success", text: "Password updated." });
    setForm({ current: "", next: "" });
  }

  return (
    <div>
      <h2 className="font-display text-xl font-semibold mb-6">Security</h2>
      <form onSubmit={handleSubmit} className="space-y-5 max-w-sm">
        <Input label="Current password" type="password" required value={form.current} onChange={(e) => setForm((f) => ({ ...f, current: e.target.value }))} />
        <Input label="New password" type="password" required value={form.next} onChange={(e) => setForm((f) => ({ ...f, next: e.target.value }))} />
        {message && <p className={`text-xs font-body ${message.type === "error" ? "text-clay" : "text-cobalt"}`}>{message.text}</p>}
        <Button type="submit">Update password</Button>
      </form>
    </div>
  );
}
