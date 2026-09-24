export type AcquisitionChannel = "google_organic" | "bing_organic" | "google_ads" | "direct" | "referral" | "social" | "other";

export function sanitizeReferrer(value?: string | null): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return `${url.protocol}//${url.host}${url.pathname}`.slice(0, 500);
  } catch { return undefined; }
}

export function classifyChannel(input: { utmSource?: string; utmMedium?: string; gclid?: string; referrer?: string }): AcquisitionChannel {
  const source = (input.utmSource || "").toLowerCase();
  const medium = (input.utmMedium || "").toLowerCase();
  if (input.gclid || source === "google" && /(cpc|ppc|paid)/.test(medium)) return "google_ads";
  if (/(facebook|instagram|linkedin|tiktok|youtube|social)/.test(`${source} ${medium}`)) return "social";
  if (source && !["direct", "(direct)"].includes(source)) return "other";
  if (!input.referrer) return "direct";
  try {
    const host = new URL(input.referrer).hostname.toLowerCase();
    if (host.includes("google.")) return "google_organic";
    if (host.includes("bing.com")) return "bing_organic";
    if (/(facebook|instagram|linkedin|tiktok|youtube)/.test(host)) return "social";
    return "referral";
  } catch { return "other"; }
}
