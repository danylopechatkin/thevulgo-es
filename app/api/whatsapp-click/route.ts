import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { z } from "zod";
import { cityFromTrackedPath } from "@/lib/crmCities";
import { isAllowedSiteOrigin } from "@/lib/siteOrigin";
import { sanitizeReferrer } from "@/lib/analytics/channel";
import { sanitizeAnalyticsMetadata } from "@/lib/analytics/events";

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
  deviceType: z.enum(["mobile", "tablet", "desktop"]), locale: z.enum(["es", "en", "unknown"]),
  serviceCategory: z.string().max(80), ctaId: z.string().max(160), ctaPlacement: z.string().max(100), promoId: z.string().max(120).nullable().optional(),
  firstTouch: z.object({ source: z.string(), medium: z.string().optional(), campaign: z.string().optional(), referrer: z.string().optional(), landingPage: z.string(), seenAt: z.string() }),
  lastTouch: z.object({ source: z.string(), medium: z.string().optional(), campaign: z.string().optional(), referrer: z.string().optional(), landingPage: z.string(), seenAt: z.string() }),
});

export async function POST(request: Request) {
  try {
    const result = clickSchema.safeParse(await request.json());
    if (!result.success) return Response.json({ ok: false }, { status: 400 });
    const origin = request.headers.get("origin");
    if (!isAllowedSiteOrigin(origin))
      return Response.json({ ok: false }, { status: 403 });
    const value = result.data;
    const database = getSupabaseAdmin();
    const { error } = await database
      .from("whatsapp_clicks")
      .insert({
        click_id: value.clickId, source: value.source, service: value.service || null,
        page_path: value.pagePath, current_page: value.pagePath, message_type: value.messageType,
        session_id: value.sessionId, visitor_id: value.visitorId, landing_page: value.landingPage,
        utm_source: value.utmSource || null, utm_medium: value.utmMedium || null, utm_campaign: value.utmCampaign || null,
        city: cityFromTrackedPath(value.pagePath), service_category: value.serviceCategory, service_id: value.service,
        locale: value.locale, cta_id: value.ctaId, cta_placement: value.ctaPlacement,
        first_touch_source: value.firstTouch.source, last_touch_source: value.lastTouch.source,
        referrer: sanitizeReferrer(value.referrer) || null, device_type: value.deviceType,
        promo_id: value.promoId || null, contact_reference: value.contactReference, attribution_confidence: "deterministic",
      });
    if (error && error.code !== "23505") console.error("WhatsApp click tracking failed", error.code);
    const { error: eventError } = await database.rpc("record_first_party_event", {
      p_event_id: value.eventId, p_session_id: value.sessionId, p_visitor_id: value.visitorId,
      p_event_name: "whatsapp_click", p_page_path: value.pagePath, p_landing_page: value.landingPage,
      p_referrer: sanitizeReferrer(value.referrer) || null, p_service: value.service || null, p_source: value.source,
      p_utm_source: value.utmSource || null, p_utm_medium: value.utmMedium || null, p_utm_campaign: value.utmCampaign || null,
      p_utm_term: value.utmTerm || null, p_utm_content: value.utmContent || null, p_duration_ms: null, p_scroll_depth: null,
      p_device_type: value.deviceType, p_gclid: value.gclid || null, p_first_touch: value.firstTouch, p_last_touch: value.lastTouch,
      p_metadata: sanitizeAnalyticsMetadata({ click_id: value.clickId, contact_reference: value.contactReference, cta_id: value.ctaId,
        cta_placement: value.ctaPlacement, service_category: value.serviceCategory, service_id: value.service || "other", locale: value.locale, promo_id: value.promoId || null }),
    });
    return Response.json({ ok: (!error || error.code === "23505") && !eventError, clickId: value.clickId, reference: value.contactReference });
  } catch {
    return Response.json({ ok: false }, { status: 204 });
  }
}
