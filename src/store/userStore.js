import { create } from "zustand";

const STORAGE_KEY = "forme_profile";
const load = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");

export const useUserStore = create((set, get) => ({
  profile: load() || { phone: "", avatar: "", addresses: [] },

  updateProfile(patch) {
    const next = { ...get().profile, ...patch };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    set({ profile: next });
  },

  addAddress(address) {
    const next = { ...get().profile, addresses: [...get().profile.addresses, { id: `addr-${Date.now()}`, ...address }] };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    set({ profile: next });
  },

  removeAddress(id) {
    const next = { ...get().profile, addresses: get().profile.addresses.filter((a) => a.id !== id) };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    set({ profile: next });
  },
}));
