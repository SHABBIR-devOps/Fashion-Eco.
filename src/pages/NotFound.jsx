import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-5 py-24 text-center">
      <p className="font-mono text-xs tracking-widest text-ink-soft mb-3">404</p>
      <h1 className="font-display text-3xl font-semibold mb-3">This page isn't in the collection.</h1>
      <p className="font-body text-sm text-ink-soft mb-8">The page you're looking for may have moved or sold out.</p>
      <Link to="/"><Button>Back to home</Button></Link>
    </div>
  );
}
