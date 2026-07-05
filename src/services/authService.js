import { mockDelay } from "./api";

const USERS_KEY = "forme_mock_users";
const TOKEN_KEY = "forme_token";
const CURRENT_USER_KEY = "forme_current_user";

function readUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}
function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export const authService = {
  async register({ name, email, password }) {
    const users = readUsers();
    if (users.some((u) => u.email === email)) {
      throw new Error("An account with this email already exists.");
    }
    const user = { id: `usr-${Date.now()}`, name, email, password, role: "customer" };
    users.push(user);
    writeUsers(users);
    return mockDelay({ id: user.id, name, email, role: user.role });
  },

  async login({ email, password }) {
    const users = readUsers();
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) throw new Error("Invalid email or password.");
    const token = `mock-token-${user.id}`;
    localStorage.setItem(TOKEN_KEY, token);
    const publicUser = { id: user.id, name: user.name, email: user.email, role: user.role };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(publicUser));
    return mockDelay({ user: publicUser, token });
  },

  async logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(CURRENT_USER_KEY);
    return mockDelay({ success: true }, 150);
  },

  async forgotPassword(email) {
    // In production this triggers a real email with a reset link.
    return mockDelay({ message: `If an account exists for ${email}, a reset link has been sent.` }, 500);
  },

  async resetPassword({ email, newPassword }) {
    const users = readUsers();
    const idx = users.findIndex((u) => u.email === email);
    if (idx === -1) throw new Error("No account found for this email.");
    users[idx].password = newPassword;
    writeUsers(users);
    return mockDelay({ message: "Password updated. You can now log in." });
  },

  getStoredUser() {
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  },

  getStoredToken() {
    return localStorage.getItem(TOKEN_KEY);
  },
};
