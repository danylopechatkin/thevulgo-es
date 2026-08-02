import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll() {},
      },
    }
  );

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  return Boolean(
    !error &&
      user?.email &&
      adminEmail &&
      user.email.trim().toLowerCase() === adminEmail
  );
}

function parseDurationSeconds(value: unknown) {
  if (typeof value !== "string") return null;
  const match = value.match(/^([\d.]+)s$/);
  return match ? Number(match[1]) : null;
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Google transit estimates are not configured yet." },
      { status: 503 }
    );
  }

  const body = (await request.json()) as {
    origin?: string;
    destination?: string;
    arrivalTime?: string;
  };
  const origin = body.origin?.trim();
  const destination = body.destination?.trim();

  if (!origin || !destination) {
    return NextResponse.json(
      { error: "Both client addresses are required." },
      { status: 400 }
    );
  }

  const routeBody: Record<string, unknown> = {
    origin: { address: origin },
    destination: { address: destination },
    travelMode: "TRANSIT",
    languageCode: "en",
    units: "METRIC",
    transitPreferences: { routingPreference: "FEWER_TRANSFERS" },
  };

  if (body.arrivalTime) {
    const arrivalTime = new Date(body.arrivalTime);
    const now = Date.now();
    const earliest = now - 7 * 24 * 60 * 60 * 1000;
    const latest = now + 100 * 24 * 60 * 60 * 1000;
    if (
      !Number.isNaN(arrivalTime.getTime()) &&
      arrivalTime.getTime() >= earliest &&
      arrivalTime.getTime() <= latest
    ) {
      routeBody.arrivalTime = arrivalTime.toISOString();
    }
  }

  const response = await fetch(
    "https://routes.googleapis.com/directions/v2:computeRoutes",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "routes.duration,routes.localizedValues.duration",
      },
      body: JSON.stringify(routeBody),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const details = await response.text();
    console.error("Google Routes API error", response.status, details);
    return NextResponse.json(
      { error: "Google could not calculate this transit route." },
      { status: 502 }
    );
  }

  const data = (await response.json()) as {
    routes?: Array<{
      duration?: string;
      localizedValues?: { duration?: { text?: string } };
    }>;
  };
  const route = data.routes?.[0];
  const seconds = parseDurationSeconds(route?.duration);

  if (!route || seconds === null) {
    return NextResponse.json(
      { error: "No public transport route was found." },
      { status: 404 }
    );
  }

  const durationMinutes = Math.max(1, Math.round(seconds / 60));
  const mapsUrl = new URL("https://www.google.com/maps/dir/");
  mapsUrl.searchParams.set("api", "1");
  mapsUrl.searchParams.set("origin", origin);
  mapsUrl.searchParams.set("destination", destination);
  mapsUrl.searchParams.set("travelmode", "transit");

  return NextResponse.json({
    durationMinutes,
    durationText:
      route.localizedValues?.duration?.text || `About ${durationMinutes} min`,
    mapsUrl: mapsUrl.toString(),
  });
}
