import { getAdminSession } from "@/lib/admin-auth";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

async function checkEmailStatus(
  request: Request,
  context: { params: Promise<{ id: string }> },
  persist: boolean,
) {
  const admin = await getAdminSession();
  if (!admin) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await context.params;
  const completed =
    new URL(request.url).searchParams.get("kind") === "completed";
  const database = getSupabaseAdmin();
  const { data: order, error } = await database
    .from("orders")
    .select(
      "customer_email_id, customer_email_status, customer_email_delivery_status, completed_email_id, completed_email_status, completed_email_delivery_status",
    )
    .eq("id", id)
    .single();
  if (error || !order)
    return Response.json({ error: "Order not found" }, { status: 404 });
  const emailId = completed
    ? order.completed_email_id
    : order.customer_email_id;
  const storedStatus = completed
    ? order.completed_email_status
    : order.customer_email_status;
  const storedDeliveryStatus = completed
    ? order.completed_email_delivery_status
    : order.customer_email_delivery_status;
  if (!emailId)
    return Response.json(
      { error: "No Resend email ID is recorded for this order" },
      { status: 400 },
    );

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey)
    return Response.json(
      { error: "Resend server configuration is missing" },
      { status: 503 },
    );

  const { data, error: resendError } = await new Resend(apiKey).emails.get(
    emailId,
  );
  if (resendError || !data)
    return Response.json(
      { error: resendError?.message || "Could not retrieve email status" },
      { status: 502 },
    );

  const checkedAt = new Date().toISOString();
  const status = data.last_event || storedDeliveryStatus || storedStatus;

  if (persist && status && status !== storedDeliveryStatus) {
    const prefix = completed ? "completed_email" : "customer_email";
    const updates: Record<string, string | null> = {
      [`${prefix}_delivery_status`]: status,
      [`${prefix}_last_event_at`]: checkedAt,
    };
    if (status === "delivered") updates[`${prefix}_delivered_at`] = checkedAt;
    if (status === "opened") updates[`${prefix}_opened_at`] = checkedAt;
    if (status === "bounced") updates[`${prefix}_bounced_at`] = checkedAt;
    if (["failed", "bounced", "suppressed", "complained"].includes(status)) {
      updates[`${prefix}_status`] = "failed";
      updates[`${prefix}_delivery_error`] = `Resend status: ${status}`;
    } else if (["sent", "delivered", "opened", "clicked"].includes(status)) {
      updates[`${prefix}_status`] = "sent";
      updates[`${prefix}_delivery_error`] = null;
    }
    const { error: updateError } = await database
      .from("orders")
      .update(updates)
      .eq("id", id);
    if (updateError)
      return Response.json(
        {
          error: `Status was found but could not be saved: ${updateError.message}`,
        },
        { status: 500 },
      );
  }

  return Response.json({
    success: true,
    status,
    checkedAt,
    savedToHistory: persist && status !== storedDeliveryStatus,
    emailId: data.id,
    subject: data.subject,
    recipients: data.to,
  });
}

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  return checkEmailStatus(request, context, false);
}

export async function POST(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  return checkEmailStatus(request, context, true);
}
