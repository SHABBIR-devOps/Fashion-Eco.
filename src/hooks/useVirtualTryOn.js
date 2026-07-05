import { useTryOnStore } from "../store/tryOnStore";

export function useVirtualTryOn() {
  const store = useTryOnStore();
  return store;
}
