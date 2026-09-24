import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { z } from "zod";
import { cityFromTrackedPath } from "@/lib/crmCities";
import { isAllowedSiteOrigin } from "@/lib/siteOrigin";
import { analyticsEventNameSchema, sanitizeAnalyticsMetadata } from "@/lib/analytics/events";
import { sanitizeReferrer } from "@/lib/analytics/channel";

const eventSchema = z.object({
  eventName: analyticsEventNameSchema,
  eventId: z.string().uuid(),
  sessionId: z.string().uuid(),
  visitorId: z.string().uuid(),
  pagePath: z.string().regex(/^\//).max(300),
  service: z.string().max(160).nullable().optional(),
  source: z.string().max(100).nullable().optional(),
  utmSource: z.string().max(120).optional(),
  utmMedium: z.string().max(120).optional(),
  utmCampaign: z.string().max(160).optional(),
  utmTerm: z.string().max(160).optional(),
  utmContent: z.string().max(160).optional(),
  gclid: z.string().max(300).optional(),
  landingPage: z.string().regex(/^\//).max(300),
  referrer: z.string().url().max(1000).optional(),
  deviceType: z.enum(["mobile", "tablet", "desktop"]),
  durationMs: z.number().int().min(0).max(86400000).optional(),
  scrollDepth: z.number().int().min(0).max(100).optional(),
  metadata: z
    .record(z.union([z.string(), z.number(), z.boolean(), z.null()]))
    .optional(),
  firstTouch: z.object({ source: z.string().max(80), medium: z.string().max(120).optional(), campaign: z.string().max(160).optional(), referrer: z.string().max(500).optional(), landingPage: z.string().max(300), seenAt: z.string().max(50) }),
  lastTouch: z.object({ source: z.string().max(80), medium: z.string().max(120).optional(), campaign: z.string().max(160).optional(), referrer: z.string().max(500).optional(), landingPage: z.string().max(300), seenAt: z.string().max(50) }),
});

export async function POST(request: Request) {
  try {
    const raw = await request.json();
    const parsed = eventSchema.safeParse(raw);
    if (!parsed.success) {
      const database = getSupabaseAdmin();
      await database.from("analytics_event_rejections").insert({ event_name: String(raw?.eventName || "unknown").slice(0, 100), reason: "payload_validation", page_path: typeof raw?.pagePath === "string" ? raw.pagePath.slice(0,300) : null });
      return Response.json({ ok: false }, { status: 400 });
    }
    const origin = request.headers.get("origin");
    if (!isAllowedSiteOrigin(origin))
      return Response.json({ ok: false }, { status: 403 });
    const value = parsed.data;
    const database = getSupabaseAdmin();
    const { error } = await database.rpc("record_first_party_event", {
      p_event_id: value.eventId,
      p_session_id: value.sessionId,
      p_visitor_id: value.visitorId,
      p_event_name: value.eventName,
      p_page_path: value.pagePath,
      p_landing_page: value.landingPage,
      p_referrer: sanitizeReferrer(value.referrer) || null,
      p_service: value.service || null,
      p_source: value.source || null,
      p_utm_source: value.utmSource || null,
      p_utm_medium: value.utmMedium || null,
      p_utm_campaign: value.utmCampaign || null,
      p_utm_term: value.utmTerm || null,
      p_utm_content: value.utmContent || null,
      p_duration_ms: value.durationMs || null,
      p_scroll_depth: value.scrollDepth || null,
      p_device_type: value.deviceType,
      p_metadata: sanitizeAnalyticsMetadata(value.metadata || {}),
      p_gclid: value.gclid || null,
      p_first_touch: value.firstTouch,
      p_last_touch: value.lastTouch,
    });
    if (!error) {
      const city = cityFromTrackedPath(value.pagePath);
      await Promise.all([
        database
          .from("marketing_events")
          .update({ city })
          .eq("event_id", value.eventId),
        database
          .from("analytics_sessions")
          .update({ city })
          .eq("session_id", value.sessionId),
      ]);
    }
    if (error) {
      await database.from("analytics_event_rejections").insert({ event_name: value.eventName, reason: String(error.code || "database_rejected").slice(0,100), page_path: value.pagePath });
      return Response.json({ ok: false }, { status: 503 });
    }
    return Response.json({ ok: true });
  } catch {
    return new Response(null, { status: 204 });
  }
}
