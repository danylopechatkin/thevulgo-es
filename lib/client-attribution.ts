import type { AcceptedAnalyticsEventName, AnalyticsMetadata } from "@/lib/analytics/events";
import { normalizeEventName, sanitizeAnalyticsMetadata } from "@/lib/analytics/events";
import { classifyChannel, sanitizeReferrer, type AcquisitionChannel } from "@/lib/analytics/channel";
import { firstPartyAnalyticsAllowed, readConsent } from "@/lib/analytics/consent";
import { localeFromPath, resolveServiceTaxonomy } from "@/lib/analytics/taxonomy";

type Touch = { source: AcquisitionChannel; medium?: string; campaign?: string; referrer?: string; landingPage: string; seenAt: string };
export type ClientAttribution = {
  sessionId: string; visitorId: string;
  utmSource?: string; utmMedium?: string; utmCampaign?: string; utmTerm?: string; utmContent?: string; gclid?: string;
  landingPage: string; referrer?: string; deviceType: "mobile" | "tablet" | "desktop";
  firstTouch: Touch; lastTouch: Touch;
};

const key = "thevulgo_marketing_attribution_v2";
const legacyKey = "thevulgo_marketing_attribution";
const sessionKey = "thevulgo_analytics_session";
const sessionTimeoutMs = 30 * 60 * 1000;
const deviceType = (): ClientAttribution["deviceType"] => window.innerWidth < 768 ? "mobile" : window.innerWidth < 1100 ? "tablet" : "desktop";
const readSaved = (): Partial<ClientAttribution> => { try { return JSON.parse(localStorage.getItem(key) || localStorage.getItem(legacyKey) || "{}"); } catch { return {}; } };

export function getClientAttribution(): ClientAttribution {
  const params = new URLSearchParams(window.location.search);
  const saved = readSaved();
  const now = Date.now();
  const session = (() => { try { return JSON.parse(sessionStorage.getItem(sessionKey) || "{}"); } catch { return {}; } })() as { id?: string; lastActivity?: number; landingPage?: string };
  const sessionId = session.id && now - Number(session.lastActivity || 0) < sessionTimeoutMs ? session.id : crypto.randomUUID();
  const sessionLanding = sessionId === session.id ? session.landingPage || window.location.pathname : window.location.pathname;
  sessionStorage.setItem(sessionKey, JSON.stringify({ id: sessionId, lastActivity: now, landingPage: sessionLanding }));
  const currentReferrer = sanitizeReferrer(document.referrer);
  const incomingUtmSource = params.get("utm_source") || undefined;
  const incomingUtmMedium = params.get("utm_medium") || undefined;
  const incomingGclid = params.get("gclid") || undefined;
  const meaningfulTouch = Boolean(incomingUtmSource || incomingGclid || currentReferrer && !currentReferrer.includes(window.location.host));
  const touch: Touch = { source: classifyChannel({ utmSource: incomingUtmSource, utmMedium: incomingUtmMedium, gclid: incomingGclid, referrer: currentReferrer }), medium: incomingUtmMedium, campaign: params.get("utm_campaign") || undefined, referrer: currentReferrer, landingPage: window.location.pathname, seenAt: new Date(now).toISOString() };
  const attribution: ClientAttribution = {
    sessionId, visitorId: saved.visitorId || crypto.randomUUID(),
    utmSource: incomingUtmSource || saved.utmSource, utmMedium: incomingUtmMedium || saved.utmMedium,
    utmCampaign: params.get("utm_campaign") || saved.utmCampaign, utmTerm: params.get("utm_term") || saved.utmTerm,
    utmContent: params.get("utm_content") || saved.utmContent, gclid: incomingGclid || saved.gclid,
    landingPage: sessionLanding, referrer: currentReferrer || saved.referrer, deviceType: deviceType(),
    firstTouch: saved.firstTouch || touch, lastTouch: meaningfulTouch ? touch : saved.lastTouch || touch,
  };
  if (firstPartyAnalyticsAllowed()) localStorage.setItem(key, JSON.stringify(attribution));
  return attribution;
}

export type TrackValues = { source?: string; service?: string; ctaId?: string; ctaPlacement?: string; durationMs?: number; scrollDepth?: number; metadata?: AnalyticsMetadata; pagePath?: string };

export function trackMarketingEvent(eventName: AcceptedAnalyticsEventName, values: TrackValues = {}) {
  if (!firstPartyAnalyticsAllowed()) return false;
  const attribution = getClientAttribution();
  const name = normalizeEventName(eventName);
  const pagePath = values.pagePath || window.location.pathname;
  const taxonomy = resolveServiceTaxonomy(pagePath, values.service);
  const metadata = sanitizeAnalyticsMetadata({ ...values.metadata, locale: localeFromPath(pagePath), service_category: taxonomy.category, service_id: taxonomy.serviceId, cta_id: values.ctaId || null, cta_placement: values.ctaPlacement || null, legacy_event_name: name === eventName ? null : eventName });
  const payload = JSON.stringify({ eventName: name, eventId: crypto.randomUUID(), pagePath, source: values.source || null, service: taxonomy.serviceId, durationMs: values.durationMs, scrollDepth: values.scrollDepth, metadata, ...attribution });
  if (readConsent()?.advertising) {
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    const adEvent = name === "booking_completed" || name === "lead_created" ? "generate_lead" : name === "estimate_click" ? "begin_checkout" : null;
    if (adEvent) gtag?.("event", adEvent, { source: values.source, service: taxonomy.serviceId, campaign: attribution.utmCampaign });
  }
  const debug = process.env.NODE_ENV !== "production" && process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true";
  if (debug) {
    window.dispatchEvent(new CustomEvent("thevulgo:analytics-debug", { detail: { eventName: name, payload: JSON.parse(payload), status: "sending" } }));
    void fetch("/api/marketing-event", { method: "POST", headers: { "Content-Type": "application/json" }, body: payload, keepalive: true }).then(async response => window.dispatchEvent(new CustomEvent("thevulgo:analytics-debug", { detail: { eventName: name, status: response.ok ? "accepted" : "rejected", httpStatus: response.status } })));
    return true;
  }
  if (navigator.sendBeacon) return navigator.sendBeacon("/api/marketing-event", new Blob([payload], { type: "application/json" }));
  void fetch("/api/marketing-event", { method: "POST", headers: { "Content-Type": "application/json" }, body: payload, keepalive: true });
  return true;
}
