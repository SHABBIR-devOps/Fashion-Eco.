import { useAuthStore } from "../store/authStore";

export function useAuth() {
  const { user, token, status, error, login, register, logout } = useAuthStore();
  return { user, token, status, error, login, register, logout, isAuthenticated: Boolean(token) };
}
