import React from "react";

export default function EmptyState({ icon, title, subtitle, action }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6">
      {icon && <div className="mb-4 text-ink-soft">{icon}</div>}
      <p className="font-display text-xl mb-2">{title}</p>
      {subtitle && <p className="font-body text-sm text-ink-soft max-w-xs">{subtitle}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
