import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <h2 className="font-display text-xl font-semibold mb-6">Settings</h2>
      <div className="flex items-center justify-between border border-line p-4 max-w-sm">
        <div>
          <p className="font-body text-sm">Dark mode</p>
          <p className="font-mono text-[11px] text-ink-soft">Currently {theme === "dark" ? "on" : "off"}</p>
        </div>
        <button
          onClick={toggleTheme}
          role="switch"
          aria-checked={theme === "dark"}
          className={`w-11 h-6 rounded-full relative transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt ${theme === "dark" ? "bg-ink" : "bg-line"}`}
        >
          <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${theme === "dark" ? "translate-x-5" : "translate-x-0.5"}`} />
        </button>
      </div>
    </div>
  );
}
