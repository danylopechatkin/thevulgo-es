export type ConsentState = { essential: true; analytics: boolean; advertising: boolean; updatedAt: string };
export const CONSENT_KEY = "thevulgo_consent_v1";

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try { return JSON.parse(localStorage.getItem(CONSENT_KEY) || "null") as ConsentState | null; } catch { return null; }
}

export function saveConsent(value: Pick<ConsentState, "analytics" | "advertising">) {
  const consent: ConsentState = { essential: true, ...value, updatedAt: new Date().toISOString() };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("thevulgo:consent", { detail: consent }));
  return consent;
}

export function firstPartyAnalyticsAllowed() {
  if (process.env.NEXT_PUBLIC_FIRST_PARTY_ANALYTICS_MODE === "legitimate_interest") return true;
  return readConsent()?.analytics === true;
}
