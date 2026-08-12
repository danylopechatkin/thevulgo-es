export type ClientAttribution = {
  sessionId: string;
  visitorId: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  landingPage: string;
  referrer?: string;
  deviceType: "mobile" | "tablet" | "desktop";
};

const key = "thevulgo_marketing_attribution";
const sessionKey = "thevulgo_analytics_session";
const sessionTimeoutMs = 30 * 60 * 1000;

function deviceType(): ClientAttribution["deviceType"] {
  const width = window.innerWidth;
  return width < 768 ? "mobile" : width < 1100 ? "tablet" : "desktop";
}

export function getClientAttribution(): ClientAttribution {
  const params = new URLSearchParams(window.location.search);
  const saved = (() => {
    try {
      return JSON.parse(localStorage.getItem(key) || "{}");
    } catch {
      return {};
    }
  })() as Partial<ClientAttribution>;
  const session = (() => {
    try {
      return JSON.parse(sessionStorage.getItem(sessionKey) || "{}") as {
        id?: string;
        lastActivity?: number;
      };
    } catch {
      return {};
    }
  })();
  const now = Date.now();
  const sessionId =
    session.id && now - Number(session.lastActivity || 0) < sessionTimeoutMs
      ? session.id
      : crypto.randomUUID();
  sessionStorage.setItem(
    sessionKey,
    JSON.stringify({ id: sessionId, lastActivity: now }),
  );
  const attribution: ClientAttribution = {
    sessionId,
    visitorId: saved.visitorId || crypto.randomUUID(),
    utmSource: params.get("utm_source") || saved.utmSource,
    utmMedium: params.get("utm_medium") || saved.utmMedium,
    utmCampaign: params.get("utm_campaign") || saved.utmCampaign,
    utmTerm: params.get("utm_term") || saved.utmTerm,
    utmContent: params.get("utm_content") || saved.utmContent,
    landingPage: saved.landingPage || window.location.pathname,
    referrer: saved.referrer || document.referrer || undefined,
    deviceType: deviceType(),
  };
  localStorage.setItem(key, JSON.stringify(attribution));
  return attribution;
}

export function trackMarketingEvent(
  eventName: string,
  values: {
    source?: string;
    service?: string;
    durationMs?: number;
    scrollDepth?: number;
    metadata?: Record<string, string | number | boolean | null>;
    pagePath?: string;
  } = {},
) {
  const attribution = getClientAttribution();
  const payload = JSON.stringify({
    eventName,
    eventId: crypto.randomUUID(),
    pagePath: values.pagePath || window.location.pathname,
    source: values.source || null,
    service: values.service || null,
    durationMs: values.durationMs,
    scrollDepth: values.scrollDepth,
    metadata: values.metadata || {},
    ...attribution,
  });
  const adEvent =
    eventName === "whatsapp_click"
      ? "contact"
      : eventName === "estimate_submitted"
        ? "generate_lead"
        : eventName === "estimate_click"
          ? "begin_checkout"
          : "page_view";
  const adWindow = window as Window & { gtag?: (...args: unknown[]) => void };
  adWindow.gtag?.("event", adEvent, {
    source: values.source,
    service: values.service,
    campaign: attribution.utmCampaign,
  });
  if (navigator.sendBeacon)
    return navigator.sendBeacon(
      "/api/marketing-event",
      new Blob([payload], { type: "application/json" }),
    );
  void fetch("/api/marketing-event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  });
}
