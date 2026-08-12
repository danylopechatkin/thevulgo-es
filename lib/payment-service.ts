import "server-only";
import { createHash, randomBytes, randomUUID, timingSafeEqual } from "crypto";
import { getSupabaseAdmin } from "./supabase-admin";
import { sendPaymentCompletedEmails } from "./emails";

export const hashPaymentToken = (token: string) => createHash("sha256").update(token).digest("hex");

export async function createPaymentLink(input: {
  orderId: string;
  assignmentId?: string | null;
  workerId?: string | null;
  purpose: "customer_order" | "worker_cash_remittance";
  payerKind: "customer" | "worker";
  amount: number;
  metadata?: Record<string, unknown>;
}) {
  const amount = Math.round(input.amount * 100) / 100;
  if (!Number.isFinite(amount) || amount <= 0) throw new Error("Payment amount must be greater than zero");
  const token = randomBytes(32).toString("base64url");
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from("payment_requests").insert({
    order_id: input.orderId,
    assignment_id: input.assignmentId || null,
    worker_id: input.workerId || null,
    purpose: input.purpose,
    payer_kind: input.payerKind,
    token_hash: hashPaymentToken(token),
    amount,
    currency: "EUR",
    idempotency_key: randomUUID(),
    metadata: input.metadata || {},
  }).select("*").single();
  if (error) throw new Error(error.message);
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.thevulgo.es").replace(/\/$/, "");
  const url = `${siteUrl}/pay/${token}`;

  return {
    request: data,
    token,
    url,
    emailUrl: url,
  };
}

export async function recordPaymentLinkEmailResult(input: {
  paymentRequestId: string;
  recipient: string;
  emailId?: string | null;
  error?: string | null;
}) {
  const now = new Date().toISOString();
  const admin = getSupabaseAdmin();
  const { error } = await admin
    .from("payment_requests")
    .update({
      email_id: input.emailId || null,
      email_recipient: input.recipient,
      email_delivery_status: input.error ? "failed" : "accepted",
      email_sent_at: input.error ? null : now,
      email_last_event_at: now,
      email_error: input.error || null,
    })
    .eq("id", input.paymentRequestId);
  if (error) throw new Error(error.message);
}

export async function getPaymentByToken(token: string) {
  const admin = getSupabaseAdmin();
  const tokenHash = hashPaymentToken(token);
  const { data, error } = await admin.from("payment_requests")
    .select("*, orders(id, order_number, full_name, email, category, total, payment_status)")
    .eq("token_hash", tokenHash).maybeSingle();
  if (error) throw new Error(error.message);
  if (data) {
    const expected = Buffer.from(data.token_hash, "hex");
    const received = Buffer.from(tokenHash, "hex");
    if (expected.length !== received.length || !timingSafeEqual(expected, received)) {
      return null;
    }
  }
  return data;
}

export async function recordPaymentEvent(input: {
  paymentRequestId?: string | null;
  orderId?: string | null;
  assignmentId?: string | null;
  providerEventId?: string | null;
  eventType: string;
  status: string;
  amount?: number | null;
  currency?: string | null;
  metadata?: Record<string, unknown>;
}) {
  const admin = getSupabaseAdmin();
  const row = {
    payment_request_id: input.paymentRequestId || null,
    order_id: input.orderId || null,
    assignment_id: input.assignmentId || null,
    provider_event_id: input.providerEventId || null,
    event_type: input.eventType,
    status: input.status,
    amount: input.amount ?? null,
    currency: input.currency || null,
    metadata: input.metadata || {},
  };
  const query = input.providerEventId
    ? admin
        .from("payment_events")
        .upsert(row, { onConflict: "provider_event_id", ignoreDuplicates: true })
    : admin.from("payment_events").insert(row);
  const { error } = await query;
  if (error) throw new Error(error.message);
}

export async function completePayment(input: {
  paymentRequestId: string;
  paypalOrderId: string;
  captureId: string;
  amount: number;
  currency: string;
  providerEventId?: string | null;
}) {
  if (input.currency !== "EUR") {
    throw new Error("Only Spanish-dollar payments are accepted");
  }
  const admin = getSupabaseAdmin();
  const { data: request, error } = await admin.from("payment_requests").select("*").eq("id", input.paymentRequestId).single();
  if (error || !request) throw new Error("Payment request not found");
  if (request.status === "completed") return { request, duplicate: true };
  if (request.currency !== input.currency || Math.abs(Number(request.amount) - input.amount) > 0.009)
    throw new Error("PayPal amount or currency did not match the payment request");

  const now = new Date().toISOString();
  const { data: updated, error: updateError } = await admin.from("payment_requests").update({
    status: "completed", paypal_order_id: input.paypalOrderId,
    paypal_capture_id: input.captureId, completed_at: now, error_message: null,
  }).eq("id", request.id).neq("status", "completed").select("*").maybeSingle();
  if (updateError) throw new Error(updateError.message);
  if (!updated) return { request, duplicate: true };

  await admin
    .from("orders")
    .update(
      request.purpose === "worker_cash_remittance"
        ? {
            payment_method: "cash",
            payment_provider: "cash",
            payment_status: "paid",
            payment_verified_at: now,
          }
        : {
            payment_method: "paypal",
            payment_provider: "paypal",
            payment_status: "paid",
            paid_amount: input.amount,
            payment_received_at: now,
            payment_verified_at: now,
            paypal_capture_id: input.captureId,
          },
    )
    .eq("id", request.order_id);

  if (request.purpose === "worker_cash_remittance" && request.assignment_id) {
    await admin.from("worker_cash_records").update({
      remittance_status: "remitted", amount_remitted: input.amount,
      remitted_at: now, remittance_payment_request_id: request.id,
    }).eq("assignment_id", request.assignment_id);
    if (request.worker_id) await admin.from("worker_financial_ledger").upsert({
      worker_id: request.worker_id, assignment_id: request.assignment_id,
      order_id: request.order_id, payment_request_id: request.id,
      entry_type: "cash_company_remittance", amount: input.amount,
      status: "settled", settled_at: now,
    }, { onConflict: "payment_request_id,entry_type" });
  } else if (request.worker_id && request.assignment_id) {
    const { data: assignment } = await admin.from("worker_assignments").select("worker_share").eq("id", request.assignment_id).maybeSingle();
    if (assignment) await admin.from("worker_financial_ledger").upsert({
      worker_id: request.worker_id, assignment_id: request.assignment_id,
      order_id: request.order_id, payment_request_id: request.id,
      entry_type: "online_job_earning", amount: Number(assignment.worker_share || 0),
      status: "pending", metadata: { payout_day: "Monday" },
    }, { onConflict: "payment_request_id,entry_type" });
  }

  await Promise.all([
    recordPaymentEvent({ paymentRequestId: request.id, orderId: request.order_id, assignmentId: request.assignment_id, providerEventId: input.providerEventId || input.captureId, eventType: "PAYMENT.CAPTURE.COMPLETED", status: "completed", amount: input.amount, currency: input.currency, metadata: { paypal_order_id: input.paypalOrderId, capture_id: input.captureId } }),
    admin.from("order_change_history").insert({ order_id: request.order_id, change_type: "updated", new_data: { crm_event: request.purpose === "worker_cash_remittance" ? "worker_cash_remittance_paid" : "paypal_payment_completed", payment_request_id: request.id, amount: input.amount, currency: input.currency, capture_id: input.captureId, event_at: now } }),
  ]);
  return { request: updated, duplicate: false };
}

export async function sendCompletedPaymentNotifications(input: {
  paymentRequest: {
    id: string;
    order_id: string;
    worker_id?: string | null;
    assignment_id?: string | null;
    purpose: "customer_order" | "worker_cash_remittance";
  };
  captureId: string;
  amount: number;
}) {
  const admin = getSupabaseAdmin();
  const { data: order } = await admin
    .from("orders")
    .select("id, order_number, full_name, email")
    .eq("id", input.paymentRequest.order_id)
    .maybeSingle();
  if (!order) return;

  let worker: { full_name: string; email: string } | null = null;
  if (input.paymentRequest.worker_id) {
    const { data } = await admin
      .from("worker_profiles")
      .select("full_name, email")
      .eq("user_id", input.paymentRequest.worker_id)
      .maybeSingle();
    worker = data;
  }

  try {
    await sendPaymentCompletedEmails({
      orderId: order.id,
      orderNumber: Number(order.order_number),
      customerName: order.full_name,
      customerEmail: order.email,
      workerName: worker?.full_name,
      workerEmail: worker?.email,
      amount: input.amount,
      captureId: input.captureId,
      purpose: input.paymentRequest.purpose,
    });
    await Promise.all([
      recordPaymentEvent({
        paymentRequestId: input.paymentRequest.id,
        orderId: order.id,
        assignmentId: input.paymentRequest.assignment_id,
        eventType: "PAYMENT.NOTIFICATIONS.SENT",
        status: "sent",
        amount: input.amount,
        currency: "EUR",
        metadata: {
          customer: Boolean(order.email),
          worker: Boolean(worker?.email),
          business: true,
        },
      }),
      admin.from("order_change_history").insert({
        order_id: order.id,
        order_number: order.order_number,
        change_type: "updated",
        new_data: {
          crm_event: "payment_notifications_sent",
          customer_email: Boolean(order.email),
          worker_email: Boolean(worker?.email),
          business_email: true,
          event_at: new Date().toISOString(),
        },
      }),
    ]);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Payment email delivery failed";
    await Promise.all([
      recordPaymentEvent({
        paymentRequestId: input.paymentRequest.id,
        orderId: order.id,
        assignmentId: input.paymentRequest.assignment_id,
        eventType: "PAYMENT.NOTIFICATIONS.FAILED",
        status: "failed",
        amount: input.amount,
        currency: "EUR",
        metadata: { error: message },
      }),
      admin.from("order_change_history").insert({
        order_id: order.id,
        order_number: order.order_number,
        change_type: "updated",
        new_data: {
          crm_event: "payment_notifications_failed",
          error: message,
          event_at: new Date().toISOString(),
        },
      }),
    ]);
  }
}
