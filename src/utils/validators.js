export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || "");
}

export function isValidPassword(value) {
  // at least 8 chars, one letter, one number
  return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value || "");
}

export function isValidPhone(value) {
  return /^\+?[0-9\s-]{7,15}$/.test(value || "");
}

export function isRequired(value) {
  return value !== undefined && value !== null && String(value).trim().length > 0;
}
