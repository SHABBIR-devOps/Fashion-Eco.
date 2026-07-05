import React, { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";

// Thin convenience wrapper around the auth store, exposed as context so
// deeply nested components can consume it without prop drilling.
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used within an AuthProvider");
  return ctx;
}
