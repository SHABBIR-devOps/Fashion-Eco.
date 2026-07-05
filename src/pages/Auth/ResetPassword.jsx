import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { authService } from "../../services/authService";
import { isValidPassword } from "../../utils/validators";

export default function ResetPassword() {
  const [form, setForm] = useState({ email: "", newPassword: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    if (!isValidPassword(form.newPassword)) return setError("Password needs 8+ characters, with a letter and a number.");
    setLoading(true);
    try {
      await authService.resetPassword(form);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-sm mx-auto px-5 py-16">
      <h1 className="font-display text-3xl font-semibold mb-8 text-center">Set a new password</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input label="Email" type="email" required value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
        <Input label="New password" type="password" required value={form.newPassword} onChange={(e) => setForm((f) => ({ ...f, newPassword: e.target.value }))} />
        {error && <p className="text-clay text-xs font-body">{error}</p>}
        <Button type="submit" className="w-full" size="lg" loading={loading}>Update password</Button>
      </form>
    </div>
  );
}
