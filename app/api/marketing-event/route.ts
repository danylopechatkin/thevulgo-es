import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { z } from "zod";
import { cityFromTrackedPath } from "@/lib/crmCities";
import { isAllowedSiteOrigin } from "@/lib/siteOrigin";

const eventSchema = z.object({
  eventName: z.enum([
    "page_view",
    "page_exit",
    "scroll_depth",
    "cta_click",
    "whatsapp_click",
    "estimate_click",
    "estimate_started",
    "estimate_step",
    "estimate_submitted",
    "order_confirmed",
    "order_completed",
  ]),
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
  landingPage: z.string().regex(/^\//).max(300),
  referrer: z.string().url().max(1000).optional(),
  deviceType: z.enum(["mobile", "tablet", "desktop"]),
  durationMs: z.number().int().min(0).max(86400000).optional(),
  scrollDepth: z.number().int().min(0).max(100).optional(),
  metadata: z.record(z.union([z.string(), z.number(), z.boolean(), z.null()])).optional(),
});

export async function POST(request: Request) {
  try {
    const parsed = eventSchema.safeParse(await request.json());
    if (!parsed.success) return Response.json({ ok: false }, { status: 400 });
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
      p_referrer: value.referrer || null,
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
      p_metadata: value.metadata || {},
    });
    if (!error) {
      const city = cityFromTrackedPath(value.pagePath);
      await Promise.all([
        database.from("marketing_events").update({ city }).eq("event_id", value.eventId),
        database.from("analytics_sessions").update({ city }).eq("session_id", value.sessionId),
      ]);
    }
    return Response.json({ ok: !error });
  } catch {
    return Response.json({ ok: false }, { status: 204 });
  }
}
