import React from "react";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const TABS = [
  { to: "/profile", label: "Overview", end: true },
  { to: "/profile/addresses", label: "Address book" },
  { to: "/profile/looks", label: "Saved looks" },
  { to: "/profile/security", label: "Security" },
  { to: "/profile/settings", label: "Settings" },
];

export default function Profile() {
  const { user, isAuthenticated, logout } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-10">
      <h1 className="font-display text-3xl font-semibold mb-1">Hi, {user?.name?.split(" ")[0] || "there"}</h1>
      <p className="font-mono text-xs text-ink-soft mb-8">{user?.email}</p>

      <div className="flex gap-10">
        <nav className="w-48 flex-shrink-0 flex flex-col gap-3 font-body text-sm">
          {TABS.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) => (isActive ? "font-semibold" : "text-ink-soft hover:text-ink")}
            >
              {tab.label}
            </NavLink>
          ))}
          <button onClick={logout} className="text-left text-clay mt-4 font-mono text-[11px] tracking-widest">
            LOG OUT
          </button>
        </nav>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
