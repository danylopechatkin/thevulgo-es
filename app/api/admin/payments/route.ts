import { getAdminSession } from "@/lib/admin-auth";
import { sendCustomerPaymentLinkEmail } from "@/lib/emails";
import { createPaymentLink, recordPaymentLinkEmailResult } from "@/lib/payment-service";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { z } from "zod";

const schema = z.object({
  action: z.enum(["create_customer_link", "resend_customer_link", "mark_payout_paid"]),
  orderId: z.string().uuid().optional(),
  sendEmail: z.boolean().optional(),
  ledgerIds: z.array(z.string().uuid()).optional(),
});

export async function GET(request: Request) {
  if (!(await getAdminSession()))
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  const orderId = new URL(request.url).searchParams.get("orderId");
  const admin = getSupabaseAdmin();
  const requestsQuery = admin
    .from("payment_requests")
    .select("*, orders(id, order_number, full_name, category, email, total, paid_amount, payment_status), worker_profiles:worker_id(full_name, email)")
    .order("created_at", { ascending: false })
    .limit(300);
  const eventsQuery = admin
    .from("payment_events")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(500);
  const [
    { data: requests, error: requestsError },
    { data: events, error: eventsError },
    { data: ledger, error: ledgerError },
    { data: cash, error: cashError },
    { data: order, error: orderError },
  ] = await Promise.all([
    orderId ? requestsQuery.eq("order_id", orderId) : requestsQuery,
    orderId ? eventsQuery.eq("order_id", orderId) : eventsQuery,
    admin.from("worker_financial_ledger").select("*, worker_profiles:worker_id(full_name, email), orders(order_number, category)").order("created_at", { ascending: false }).limit(500),
    admin.from("worker_cash_records").select("*, worker_assignments(worker_id, worker_profiles(full_name, email), orders(order_number, full_name))").order("collected_at", { ascending: false }).limit(300),
    orderId
      ? admin
          .from("orders")
          .select("id, email, total, paid_amount, payment_status")
          .eq("id", orderId)
          .maybeSingle()
      : Promise.resolve({ data: null, error: null }),
  ]);
  const error = requestsError || eventsError || ledgerError || cashError || orderError;
  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({
    requests: requests || [],
    events: events || [],
    ledger: ledger || [],
    cash: cash || [],
    order,
  });
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "Invalid payment action" }, { status: 400 });
  const admin = getSupabaseAdmin();
  if (parsed.data.action === "mark_payout_paid") {
    const ids = parsed.data.ledgerIds || [];
    if (!ids.length) return Response.json({ error: "No ledger entries selected" }, { status: 400 });
    const now = new Date().toISOString();
    const { error } = await admin.from("worker_financial_ledger").update({ status: "paid", settled_at: now }).in("id", ids).eq("entry_type", "online_job_earning");
    return error ? Response.json({ error: error.message }, { status: 500 }) : Response.json({ ok: true });
  }

  if (!parsed.data.orderId) return Response.json({ error: "Order is required" }, { status: 400 });
  const { data: order } = await admin.from("orders").select("id, order_number, full_name, email, total, paid_amount, payment_status").eq("id", parsed.data.orderId).maybeSingle();
  if (!order) return Response.json({ error: "Order not found" }, { status: 404 });
  if (order.payment_status === "paid") return Response.json({ error: "Order is already paid" }, { status: 409 });
  if (parsed.data.sendEmail && !order.email) {
    return Response.json(
      { error: "Add the customer's email before sending a payment link." },
      { status: 400 },
    );
  }
  const { data: assignment } = await admin.from("worker_assignments").select("id, worker_id").eq("order_id", order.id).is("access_revoked_at", null).maybeSingle();
  const amount = Math.max(0, Number(order.total) - Number(order.paid_amount || 0));
  const link = await createPaymentLink({
    orderId: order.id,
    assignmentId: assignment?.id,
    workerId: assignment?.worker_id,
    purpose: "customer_order",
    payerKind: "customer",
    amount,
    metadata: { created_by: session.user.id, source: "admin_crm" },
  });
  let emailId: string | null = null;
  let emailError: string | null = null;
  if (parsed.data.sendEmail && order.email) {
    try {
      emailId = await sendCustomerPaymentLinkEmail({
        orderId: order.id,
        paymentRequestId: link.request.id,
        orderNumber: Number(order.order_number),
        customerName: order.full_name,
        customerEmail: order.email,
        amount,
        paymentUrl: link.emailUrl,
      });
      await recordPaymentLinkEmailResult({ paymentRequestId: link.request.id, recipient: order.email, emailId });
    } catch (error) {
      emailError = error instanceof Error ? error.message : "Payment email failed";
      await recordPaymentLinkEmailResult({ paymentRequestId: link.request.id, recipient: order.email, error: emailError }).catch(() => {});
    }
  }
  const crmEvent = emailError
    ? "payment_link_email_failed"
    : parsed.data.sendEmail
      ? parsed.data.action === "resend_customer_link"
        ? "payment_link_reemailed"
        : "payment_link_emailed"
      : "payment_link_created";
  await admin.from("order_change_history").insert({
    order_id: order.id,
    order_number: order.order_number,
    changed_by: session.user.id,
    change_type: "updated",
    new_data: { crm_event: crmEvent, payment_request_id: link.request.id, amount, email: order.email, email_id: emailId, error: emailError, event_at: new Date().toISOString() },
  });
  if (emailError) return Response.json({ error: `Payment link created, but the email failed: ${emailError}`, url: link.url, paymentRequest: link.request }, { status: 502 });
  return Response.json({ url: link.url, paymentRequest: link.request, emailId });
}
