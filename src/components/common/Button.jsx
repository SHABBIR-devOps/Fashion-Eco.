import React from "react";

const VARIANTS = {
  primary: "bg-ink text-white hover:bg-ink/90 dark:bg-paper dark:text-ink",
  accent: "bg-cobalt text-white hover:bg-cobalt-dark",
  outline: "border border-line text-ink hover:border-ink dark:text-paper dark:border-dark-line",
  ghost: "text-ink-soft hover:text-ink dark:text-paper/70 dark:hover:text-paper",
};

const SIZES = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-5 py-2.5",
  lg: "text-sm px-6 py-3.5",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      disabled={disabled || loading}
      className={`font-body tracking-wide inline-flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt focus-visible:outline-offset-2 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {loading ? "Please wait…" : children}
    </button>
  );
}
