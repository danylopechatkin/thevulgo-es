import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date")?.trim() || "";

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return Response.json(
      { success: false, error: "Invalid date" },
      { status: 400 }
    );
  }

  const { data, error } = await supabaseAdmin
    .from("orders")
    .select("preferred_time")
    .eq("preferred_date", date)
    .not("preferred_time", "is", null);

  if (error) {
    console.error("AVAILABILITY API ERROR:", error);
    return Response.json(
      { success: false, error: "Could not load availability" },
      { status: 500 }
    );
  }

  const bookedTimes = Array.from(
    new Set(
      (data || [])
        .map((order) => order.preferred_time?.slice(0, 5))
        .filter((time): time is string => Boolean(time))
    )
  ).sort();

  return Response.json(
    { success: true, date, bookedTimes },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
