import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { authService } from "../../services/authService";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const res = await authService.forgotPassword(email);
    setMessage(res.message);
    setLoading(false);
  }

  return (
    <div className="max-w-sm mx-auto px-5 py-16">
      <h1 className="font-display text-3xl font-semibold mb-3 text-center">Reset your password</h1>
      <p className="font-body text-sm text-ink-soft text-center mb-8">Enter your email and we'll send you a reset link.</p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input label="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button type="submit" className="w-full" size="lg" loading={loading}>Send reset link</Button>
      </form>
      {message && <p className="font-body text-sm text-cobalt mt-5 text-center">{message}</p>}
      <p className="text-center mt-5 font-mono text-[11px] text-ink-soft">
        <Link to="/login" className="text-ink underline">Back to login</Link>
      </p>
    </div>
  );
}
