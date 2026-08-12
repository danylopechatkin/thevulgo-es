import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { z } from "zod";
import { cityFromTrackedPath } from "@/lib/crmCities";
import { isAllowedSiteOrigin } from "@/lib/siteOrigin";

const clickSchema = z.object({
  source: z.string().trim().min(1).max(100),
  service: z.string().trim().max(160).nullable().optional(),
  pagePath: z.string().trim().regex(/^\//).max(300),
  category: z.string().trim().min(1).max(60),
  sessionId: z.string().uuid().optional(),
  utmSource: z.string().max(120).optional(),
  utmMedium: z.string().max(120).optional(),
  utmCampaign: z.string().max(160).optional(),
});

export async function POST(request: Request) {
  try {
    const result = clickSchema.safeParse(await request.json());
    if (!result.success) return Response.json({ ok: false }, { status: 400 });
    const origin = request.headers.get("origin");
    if (!isAllowedSiteOrigin(origin))
      return Response.json({ ok: false }, { status: 403 });
    const {
      source,
      service,
      pagePath,
      category,
      sessionId,
      utmSource,
      utmMedium,
      utmCampaign,
    } = result.data;
    const { error } = await getSupabaseAdmin()
      .from("estimate_clicks")
      .insert({
        source,
        service: service || null,
        page_path: pagePath,
        category,
        session_id: sessionId || null,
        utm_source: utmSource || null,
        utm_medium: utmMedium || null,
        utm_campaign: utmCampaign || null,
        city: cityFromTrackedPath(pagePath),
      });
    if (error) console.error("Estimate click tracking failed", error.code);
    return Response.json({ ok: !error });
  } catch {
    return Response.json({ ok: false }, { status: 204 });
  }
}
