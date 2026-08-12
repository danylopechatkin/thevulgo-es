import { getAdminSession } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const admin = await getAdminSession();
  if (!admin) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey)
    return Response.json(
      { error: "Google Maps is not configured" },
      { status: 503 },
    );
  const body = await request.json();
  const origin = body.useStartAddress
    ? process.env.ADMIN_START_ADDRESS?.trim()
    : String(body.origin || "").trim();
  const destination = String(body.destination || "").trim();
  if (!origin || !destination)
    return Response.json(
      { error: "Both addresses are required" },
      { status: 400 },
    );
  const response = await fetch(
    "https://routes.googleapis.com/directions/v2:computeRoutes",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "routes.duration,routes.localizedValues.duration",
      },
      body: JSON.stringify({
        origin: { address: origin },
        destination: { address: destination },
        travelMode: "TRANSIT",
        languageCode: "en",
        units: "METRIC",
      }),
      cache: "no-store",
    },
  );
  if (!response.ok)
    return Response.json(
      { error: "Google could not calculate this transit route" },
      { status: 502 },
    );
  const data = (await response.json()) as {
    routes?: Array<{
      duration?: string;
      localizedValues?: { duration?: { text?: string } };
    }>;
  };
  const route = data.routes?.[0];
  const seconds = Number(route?.duration?.match(/^([\d.]+)s$/)?.[1]);
  if (!route || !Number.isFinite(seconds))
    return Response.json(
      { error: "No public transit route was found" },
      { status: 404 },
    );
  const mapsUrl = new URL("https://www.google.com/maps/dir/");
  mapsUrl.searchParams.set("api", "1");
  mapsUrl.searchParams.set("origin", origin);
  mapsUrl.searchParams.set("destination", destination);
  mapsUrl.searchParams.set("travelmode", "transit");
  return Response.json({
    durationMinutes: Math.max(1, Math.round(seconds / 60)),
    durationText:
      route.localizedValues?.duration?.text ||
      `About ${Math.round(seconds / 60)} min`,
    mapsUrl: mapsUrl.toString(),
  });
}
