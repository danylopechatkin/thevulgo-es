import { getAdminSession } from "@/lib/admin-auth";
import { sendCustomerOrderConfirmation } from "@/lib/emails";
import { orderRowToEmailData } from "@/lib/order-email-data";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export async function POST(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const admin = await getAdminSession();
  if (!admin) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await context.params;
  const database = getSupabaseAdmin();
  const { data: order, error } = await database
    .from("orders")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !order)
    return Response.json({ error: "Order not found" }, { status: 404 });
  if (!order.email)
    return Response.json(
      { error: "Add a valid customer email before sending confirmation" },
      { status: 400 },
    );

  try {
    const delivery = await sendCustomerOrderConfirmation(
      orderRowToEmailData(order, "manual"),
    );

    const sentAt = delivery.customerError ? null : new Date().toISOString();
    const emailFields = {
      customer_email_status: delivery.customerError ? "failed" : "sent",
      customer_email_id: delivery.customerId,
      customer_email_sent_at: sentAt,
      email_error: delivery.customerError,
    };
    await database.from("orders").update(emailFields).eq("id", id);

    if (delivery.customerError)
      return Response.json(
        { error: delivery.customerError, ...emailFields },
        { status: 502 },
      );
    return Response.json({ success: true, ...emailFields });
  } catch (sendError) {
    const message =
      sendError instanceof Error ? sendError.message : "Email delivery failed";
    await database
      .from("orders")
      .update({ customer_email_status: "failed", email_error: message })
      .eq("id", id);
    return Response.json({ error: message }, { status: 500 });
  }
}
