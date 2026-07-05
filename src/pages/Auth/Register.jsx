import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useAuth } from "../../hooks/useAuth";
import { isValidEmail, isValidPassword } from "../../utils/validators";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const { register, status } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    if (!isValidEmail(form.email)) return setError("Enter a valid email address.");
    if (!isValidPassword(form.password)) return setError("Password needs 8+ characters, with a letter and a number.");
    try {
      await register(form);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="max-w-sm mx-auto px-5 py-16">
      <h1 className="font-display text-3xl font-semibold mb-8 text-center">Create your account</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input label="Full name" required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
        <Input label="Email" type="email" required value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
        <Input label="Password" type="password" required value={form.password} onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))} />
        {error && <p className="text-clay text-xs font-body">{error}</p>}
        <Button type="submit" className="w-full" size="lg" loading={status === "loading"}>Create account</Button>
      </form>
      <p className="text-center mt-5 font-mono text-[11px] text-ink-soft">
        Already have an account? <Link to="/login" className="text-ink underline">Log in</Link>
      </p>
    </div>
  );
}
