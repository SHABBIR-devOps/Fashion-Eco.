import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

// Real axios instance, wired for when the Express/MongoDB backend is live.
// Every mock service below is written to be swapped for a call through
// this client without changing any component code.
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("forme_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// small helper so mock services can simulate network latency consistently
export const mockDelay = (data, ms = 400) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));
