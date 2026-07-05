import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const { login, status } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    try {
      await login(form);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="max-w-sm mx-auto px-5 py-16">
      <h1 className="font-display text-3xl font-semibold mb-8 text-center">Welcome back</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input label="Email" type="email" required value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
        <Input label="Password" type="password" required value={form.password} onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))} />
        {error && <p className="text-clay text-xs font-body">{error}</p>}
        <Button type="submit" className="w-full" size="lg" loading={status === "loading"}>Log in</Button>
      </form>
      <div className="flex justify-between mt-5 font-mono text-[11px] text-ink-soft">
        <Link to="/forgot-password" className="hover:text-ink">Forgot password?</Link>
        <Link to="/register" className="hover:text-ink">Create an account</Link>
      </div>
    </div>
  );
}
