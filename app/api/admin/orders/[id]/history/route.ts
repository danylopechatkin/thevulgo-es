import { getAdminSession } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { z } from "zod";

export const dynamic = "force-dynamic";

const idSchema = z.string().uuid();

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const session = await getAdminSession();
  if (!session)
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const parsedId = idSchema.safeParse((await context.params).id);
  if (!parsedId.success)
    return Response.json({ error: "Invalid order ID" }, { status: 400 });

  const { data, error } = await getSupabaseAdmin()
    .from("order_change_history")
    .select("id, changed_at, change_type, previous_data, new_data")
    .eq("order_id", parsedId.data)
    .order("changed_at", { ascending: false });

  return error
    ? Response.json({ error: error.message }, { status: 500 })
    : Response.json({ history: data || [] });
}
