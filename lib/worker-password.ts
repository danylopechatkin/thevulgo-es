export const WORKER_PASSWORD_POLICY_VERSION = "2026-08-09";

export const workerPasswordRules = [
  "At least 8 characters total",
  "At least 6 letters",
  "At least 1 number",
  "At least 1 special character",
] as const;

export function validateWorkerPassword(password: string) {
  const letters = password.match(/[A-Za-z]/g)?.length || 0;
  return {
    length: password.length >= 8,
    letters: letters >= 6,
    number: /\d/.test(password),
    symbol: /[^A-Za-z\d\s]/.test(password),
  };
}

export function isValidWorkerPassword(password: string) {
  return Object.values(validateWorkerPassword(password)).every(Boolean);
}
