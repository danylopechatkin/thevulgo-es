import { getAdminSession } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { z } from "zod";

const schema = z.object({
  orderNumber: z.number().int().min(10001).max(999999999),
});

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session)
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = schema.safeParse(await request.json());
  if (!parsed.success)
    return Response.json({ error: "Invalid order number" }, { status: 400 });

  const database = getSupabaseAdmin();
  const { data: existing, error: existingError } = await database
    .from("orders")
    .select("id, order_number")
    .eq("order_number", parsed.data.orderNumber)
    .maybeSingle();
  if (existingError)
    return Response.json({ error: existingError.message }, { status: 500 });
  if (existing)
    return Response.json(
      { error: "This order already exists and was not changed." },
      { status: 409 },
    );

  const { data: deleted, error: historyError } = await database
    .from("order_change_history")
    .select("id, order_id, previous_data, changed_at")
    .eq("order_number", parsed.data.orderNumber)
    .eq("change_type", "deleted")
    .order("changed_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (historyError)
    return Response.json({ error: historyError.message }, { status: 500 });
  if (!deleted?.previous_data)
    return Response.json(
      { error: "No deleted-order snapshot was found." },
      { status: 404 },
    );

  const snapshot = {
    ...(deleted.previous_data as Record<string, unknown>),
    id: deleted.order_id,
    order_number: parsed.data.orderNumber,
    updated_at: new Date().toISOString(),
  };
  const { data: restored, error: restoreError } = await database
    .from("orders")
    .insert(snapshot)
    .select("id, order_number, full_name, total, status")
    .single();
  if (restoreError)
    return Response.json({ error: restoreError.message }, { status: 500 });

  await database.from("order_change_history").insert({
    order_id: restored.id,
    order_number: restored.order_number,
    changed_by: session.user.id,
    change_type: "updated",
    new_data: {
      crm_event: "deleted_order_restored",
      source_history_id: deleted.id,
      restored_without_email: true,
      event_at: new Date().toISOString(),
    },
  });

  return Response.json({ order: restored, emailSent: false });
}
