import { sendCustomerPaymentLinkEmail } from "@/lib/emails";
import { createPaymentLink, recordPaymentLinkEmailResult } from "@/lib/payment-service";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { getWorkerSession } from "@/lib/worker-auth";
import { z } from "zod";

const actionSchema = z.discriminatedUnion("action", [
  z.object({ action: z.literal("send_customer_link") }),
  z.object({ action: z.literal("create_cash_remittance_link") }),
  z.object({
    action: z.literal("record_cash"),
    cashAmount: z.number().positive().max(100000),
  }),
]);

async function assignmentForWorker(id: string, workerId: string) {
  return getSupabaseAdmin()
    .from("worker_assignments")
    .select(
      "id, order_id, worker_id, worker_share, response_status, access_revoked_at, orders(id, order_number, full_name, email, total, paid_amount, payment_status, payment_method)",
    )
    .eq("id", id)
    .eq("worker_id", workerId)
    .maybeSingle();
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getWorkerSession();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const admin = getSupabaseAdmin();
  const { data: assignment } = await assignmentForWorker(id, session.user.id);
  if (!assignment)
    return Response.json({ error: "Assignment not found" }, { status: 404 });
  const [{ data: requests }, { data: cash }, { data: ledger }] =
    await Promise.all([
      admin
        .from("payment_requests")
        .select("id, purpose, amount, status, completed_at, expires_at, created_at")
        .eq("assignment_id", id)
        .order("created_at", { ascending: false }),
      admin.from("worker_cash_records").select("*").eq("assignment_id", id).maybeSingle(),
      admin
        .from("worker_financial_ledger")
        .select("id, entry_type, amount, status, due_at, settled_at, created_at")
        .eq("assignment_id", id)
        .order("created_at", { ascending: false }),
    ]);
  const order = Array.isArray(assignment.orders)
    ? assignment.orders[0]
    : assignment.orders;
  return Response.json({
    requests: requests || [],
    cash,
    ledger: ledger || [],
    order: order
      ? {
          paymentStatus: order.payment_status,
          paidAmount: Number(order.paid_amount || 0),
          paymentMethod: order.payment_method,
        }
      : null,
  });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getWorkerSession();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = actionSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success)
    return Response.json({ error: "Invalid payment action" }, { status: 400 });
  const { id } = await params;
  const admin = getSupabaseAdmin();
  const { data: assignment } = await assignmentForWorker(id, session.user.id);
  if (!assignment)
    return Response.json({ error: "Assignment not found" }, { status: 404 });
  if (assignment.access_revoked_at || assignment.response_status !== "accepted")
    return Response.json(
      { error: "Accept this active assignment before recording payment." },
      { status: 409 },
    );
  const order = Array.isArray(assignment.orders)
    ? assignment.orders[0]
    : assignment.orders;
  if (!order) return Response.json({ error: "Order not found" }, { status: 404 });
  if (order.payment_status === "paid")
    return Response.json({ error: "This order is already paid." }, { status: 409 });

  if (parsed.data.action === "create_cash_remittance_link") {
    const { data: cash } = await admin
      .from("worker_cash_records")
      .select("cash_amount, company_amount_due, remittance_status")
      .eq("assignment_id", assignment.id)
      .maybeSingle();
    if (!cash || cash.remittance_status === "remitted")
      return Response.json({ error: "No outstanding cash balance." }, { status: 409 });
    const companyDue = Number(cash.company_amount_due || Number(cash.cash_amount) / 2);
    const link = await createPaymentLink({
      orderId: order.id,
      assignmentId: assignment.id,
      workerId: assignment.worker_id,
      purpose: "worker_cash_remittance",
      payerKind: "worker",
      amount: companyDue,
      metadata: { source: "worker_portal", cash_collected: Number(cash.cash_amount), replacement_link: true },
    });
    await admin.from("worker_cash_records").update({ remittance_payment_request_id: link.request.id }).eq("assignment_id", assignment.id);
    return Response.json({ ok: true, url: link.url, companyDue });
  }

  if (parsed.data.action === "send_customer_link") {
    if (!order.email)
      return Response.json(
        { error: "The customer has no email address. Ask THEVULGO for help." },
        { status: 409 },
      );
    const amount = Math.max(0, Number(order.total) - Number(order.paid_amount || 0));
    const link = await createPaymentLink({
      orderId: order.id,
      assignmentId: assignment.id,
      workerId: assignment.worker_id,
      purpose: "customer_order",
      payerKind: "customer",
      amount,
      metadata: { source: "worker_portal", created_by: session.user.id },
    });
    let emailId: string | null = null;
    let emailError: string | null = null;
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
      await recordPaymentLinkEmailResult({
        paymentRequestId: link.request.id,
        recipient: order.email,
        emailId,
      });
    } catch (error) {
      emailError = error instanceof Error ? error.message : "Payment email failed";
      await recordPaymentLinkEmailResult({
        paymentRequestId: link.request.id,
        recipient: order.email,
        error: emailError,
      }).catch(() => {});
    }
    const now = new Date().toISOString();
    await Promise.all([
      admin.from("worker_activity_events").insert({
        worker_id: assignment.worker_id,
        event_type: "customer_payment_link_sent",
        detail: `Payment link emailed for TVG-ES-${String(order.order_number).padStart(5, "0")}.`,
        metadata: { order_id: order.id, assignment_id: assignment.id, payment_request_id: link.request.id, email_id: emailId },
      }),
      admin.from("order_change_history").insert({
        order_id: order.id,
        order_number: order.order_number,
        change_type: "updated",
        new_data: { crm_event: emailError ? "worker_payment_link_email_failed" : "worker_payment_link_emailed", worker_id: assignment.worker_id, payment_request_id: link.request.id, email: order.email, email_id: emailId, error: emailError, event_at: now },
      }),
    ]);
    if (emailError)
      return Response.json(
        { error: `Payment link created, but the email failed: ${emailError}`, url: link.url },
        { status: 502 },
      );
    return Response.json({ ok: true, url: link.url, emailId });
  }

  const cashAmount = Math.round(parsed.data.cashAmount * 100) / 100;
  const companyDue = Math.round(cashAmount * 50) / 100;
  const workerKept = cashAmount - companyDue;
  const dueAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
  const link = await createPaymentLink({
    orderId: order.id,
    assignmentId: assignment.id,
    workerId: assignment.worker_id,
    purpose: "worker_cash_remittance",
    payerKind: "worker",
    amount: companyDue,
    metadata: { source: "worker_portal", cash_collected: cashAmount },
  });
  const reviewRequired = Math.abs(cashAmount - Number(order.total)) > 0.009;
  const now = new Date().toISOString();
  const { error: cashError } = await admin.from("worker_cash_records").upsert(
    {
      assignment_id: assignment.id,
      cash_amount: cashAmount,
      collected_at: now,
      remittance_due_at: dueAt,
      remittance_status: reviewRequired ? "review_required" : "due",
      company_amount_due: companyDue,
      remittance_payment_request_id: link.request.id,
      admin_note: reviewRequired
        ? `Cash amount differs from order total €${Number(order.total).toFixed(2)}.`
        : "",
    },
    { onConflict: "assignment_id" },
  );
  if (cashError) return Response.json({ error: cashError.message }, { status: 500 });
  await Promise.all([
    admin.from("orders").update({
      payment_method: "cash",
      payment_provider: "cash",
      payment_status: "cash_collected",
      paid_amount: cashAmount,
      payment_received_at: now,
    }).eq("id", order.id),
    admin.from("worker_financial_ledger").upsert({
      worker_id: assignment.worker_id,
      assignment_id: assignment.id,
      order_id: order.id,
      entry_type: "cash_job_share",
      amount: workerKept,
      status: "settled",
      settled_at: now,
      metadata: { cash_collected: cashAmount, company_due: companyDue },
    }, { onConflict: "assignment_id,entry_type" }),
    admin.from("worker_activity_events").insert({
      worker_id: assignment.worker_id,
      event_type: "cash_collected",
      detail: `€${cashAmount.toFixed(2)} cash recorded; €${companyDue.toFixed(2)} due within 24 hours.`,
      metadata: { order_id: order.id, assignment_id: assignment.id, payment_request_id: link.request.id },
    }),
    admin.from("order_change_history").insert({
      order_id: order.id,
      order_number: order.order_number,
      change_type: "updated",
      new_data: { crm_event: "worker_cash_collected", worker_id: assignment.worker_id, cash_amount: cashAmount, company_due: companyDue, remittance_due_at: dueAt, event_at: now },
    }),
  ]);
  return Response.json({ ok: true, url: link.url, cashAmount, companyDue, workerKept, dueAt, reviewRequired });
}
