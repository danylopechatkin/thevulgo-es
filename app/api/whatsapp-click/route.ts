import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { z } from "zod";
import { cityFromTrackedPath } from "@/lib/crmCities";
import { isAllowedSiteOrigin } from "@/lib/siteOrigin";
import { sanitizeReferrer } from "@/lib/analytics/channel";
import { sanitizeAnalyticsMetadata } from "@/lib/analytics/events";

async function recordRejection(eventName: string, reason: string, pagePath?: string) {
  try {
    await getSupabaseAdmin().from("analytics_event_rejections").insert({
      event_name: eventName.slice(0, 100),
      reason: reason.slice(0, 100),
      page_path: pagePath?.slice(0, 300) || null,
    });
  } catch {
    // The monitoring write must not conceal the original delivery outcome.
  }
}

const clickSchema = z.object({
  source: z.string().trim().min(1).max(100),
  service: z.string().trim().max(160).nullable().optional(),
  pagePath: z.string().trim().regex(/^\//).max(300),
  messageType: z.string().trim().min(1).max(60),
  clickId: z.string().uuid(), eventId: z.string().uuid(), contactReference: z.string().regex(/^[A-Z0-9-]{4,32}$/),
  sessionId: z.string().uuid(), visitorId: z.string().uuid(),
  utmSource: z.string().max(120).optional(),
  utmMedium: z.string().max(120).optional(),
  utmCampaign: z.string().max(160).optional(),
  utmTerm: z.string().max(160).optional(), utmContent: z.string().max(160).optional(), gclid: z.string().max(300).optional(),
  landingPage: z.string().regex(/^\//).max(300), referrer: z.string().max(500).optional(),
  deviceType: z.enum(["mobile", "tablet", "desktop"]), locale: z.enum(["es", "en", "unknown"]), market: z.string().trim().min(1).max(80).optional(),
  serviceCategory: z.string().max(80), ctaId: z.string().max(160), ctaPlacement: z.string().max(100), promoId: z.string().max(120).nullable().optional(),
  firstTouch: z.object({ source: z.string(), medium: z.string().optional(), campaign: z.string().optional(), referrer: z.string().optional(), landingPage: z.string(), seenAt: z.string() }),
  lastTouch: z.object({ source: z.string(), medium: z.string().optional(), campaign: z.string().optional(), referrer: z.string().optional(), landingPage: z.string(), seenAt: z.string() }),
});

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
    const result = clickSchema.safeParse(raw);
    if (!result.success) {
      await recordRejection("whatsapp_click", "payload_validation");
      return Response.json({ ok: false, status: "not_recorded" }, { status: 400 });
    }
    const origin = request.headers.get("origin");
    if (!isAllowedSiteOrigin(origin)) {
      await recordRejection("whatsapp_click", "origin_rejected", result.data.pagePath);
      return Response.json({ ok: false, status: "not_recorded" }, { status: 403 });
    }
    const value = result.data;
    const database = getSupabaseAdmin();
    const { data, error } = await database.rpc("record_whatsapp_click_event", {
      p_event_id: value.eventId, p_session_id: value.sessionId, p_visitor_id: value.visitorId,
      p_click_id: value.clickId, p_contact_reference: value.contactReference,
      p_source: value.source, p_service: value.service || null, p_page_path: value.pagePath,
      p_message_type: value.messageType, p_landing_page: value.landingPage,
      p_referrer: sanitizeReferrer(value.referrer) || null,
      p_utm_source: value.utmSource || null, p_utm_medium: value.utmMedium || null, p_utm_campaign: value.utmCampaign || null,
      p_utm_term: value.utmTerm || null, p_utm_content: value.utmContent || null, p_city: cityFromTrackedPath(value.pagePath),
      p_market: value.market || null, p_device_type: value.deviceType, p_locale: value.locale,
      p_service_category: value.serviceCategory, p_cta_id: value.ctaId, p_cta_placement: value.ctaPlacement,
      p_promo_id: value.promoId || null, p_gclid: value.gclid || null, p_first_touch: value.firstTouch, p_last_touch: value.lastTouch,
      p_metadata: sanitizeAnalyticsMetadata({ click_id: value.clickId, contact_reference: value.contactReference, cta_id: value.ctaId,
        cta_placement: value.ctaPlacement, service_category: value.serviceCategory, service_id: value.service || "other", locale: value.locale, promo_id: value.promoId || null }),
    });
    if (error) {
      await recordRejection("whatsapp_click", String(error.code || "database_rejected"), value.pagePath);
      console.error("WhatsApp click tracking failed", { code: error.code, message: error.message });
      return Response.json({ ok: false, status: "delivery_unknown" }, { status: 503 });
    }
    return Response.json({ ok: true, status: data?.outcome === "duplicate" ? "duplicate" : "recorded", clickId: value.clickId, reference: value.contactReference });
  } catch (error) {
    const pagePath = typeof raw === "object" && raw && "pagePath" in raw && typeof raw.pagePath === "string" ? raw.pagePath : undefined;
    await recordRejection("whatsapp_click", "server_exception", pagePath);
    console.error("WhatsApp click tracking exception", error);
    return Response.json({ ok: false, status: "delivery_unknown" }, { status: 500 });
  }
}
