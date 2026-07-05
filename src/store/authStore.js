import { create } from "zustand";
import { authService } from "../services/authService";

export const useAuthStore = create((set, get) => ({
  user: authService.getStoredUser(),
  token: authService.getStoredToken(),
  status: "idle", // idle | loading | error
  error: null,

  async login(credentials) {
    set({ status: "loading", error: null });
    try {
      const { user, token } = await authService.login(credentials);
      set({ user, token, status: "idle" });
      return user;
    } catch (err) {
      set({ status: "error", error: err.message });
      throw err;
    }
  },

  async register(payload) {
    set({ status: "loading", error: null });
    try {
      const user = await authService.register(payload);
      set({ status: "idle" });
      return user;
    } catch (err) {
      set({ status: "error", error: err.message });
      throw err;
    }
  },

  async logout() {
    await authService.logout();
    set({ user: null, token: null });
  },

  isAuthenticated: () => Boolean(get().token),
}));
