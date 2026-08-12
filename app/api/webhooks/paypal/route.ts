import { verifyPayPalWebhook } from "@/lib/paypal";
import {
  completePayment,
  recordPaymentEvent,
  sendCompletedPaymentNotifications,
} from "@/lib/payment-service";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

type PayPalWebhookResource = {
  id?: string;
  supplementary_data?: { related_ids?: { order_id?: string } };
  links?: Array<{ rel?: string; href?: string }>;
  amount?: { value?: string; currency_code?: string };
  status_details?: { reason?: string };
};

type PayPalWebhookEvent = {
  id?: string;
  event_type?: string;
  resource?: PayPalWebhookResource;
};

function relatedOrderId(resource: PayPalWebhookResource) {
  return (
    resource?.supplementary_data?.related_ids?.order_id ||
    resource?.links
      ?.find((link) => link.rel === "up")
      ?.href?.split("/")
      ?.pop() ||
    ""
  );
}

export async function POST(request: Request) {
  const event = (await request.json().catch(() => null)) as PayPalWebhookEvent | null;
  if (!event || !(await verifyPayPalWebhook(request.headers, event)))
    return Response.json({ error: "Invalid PayPal signature" }, { status: 401 });
  const type = String(event.event_type || "unknown");
  const resource = event.resource || {};
  const paypalOrderId = relatedOrderId(resource);
  const admin = getSupabaseAdmin();
  const { data: payment } = paypalOrderId
    ? await admin
        .from("payment_requests")
        .select("*")
        .eq("paypal_order_id", paypalOrderId)
        .maybeSingle()
    : { data: null };
  if (!payment) return Response.json({ received: true });

  if (type === "PAYMENT.CAPTURE.COMPLETED") {
    const result = await completePayment({
      paymentRequestId: payment.id,
      paypalOrderId,
      captureId: String(resource.id),
      amount: Number(resource.amount?.value || 0),
      currency: String(resource.amount?.currency_code || ""),
      providerEventId: String(event.id),
    });
    if (!result.duplicate)
      await sendCompletedPaymentNotifications({
        paymentRequest: result.request,
        captureId: String(resource.id),
        amount: Number(resource.amount?.value || 0),
      });
  } else {
    const status = type.includes("DENIED") || type.includes("DECLINED")
      ? "failed"
      : type.includes("REFUNDED") || type.includes("REVERSED")
        ? "refunded"
        : type.includes("PENDING")
          ? "pending"
          : "approved";
    await admin
      .from("payment_requests")
      .update({ status, error_message: resource.status_details?.reason || null })
      .eq("id", payment.id)
      .neq("status", status === "refunded" ? "refunded" : "completed");
    if (status === "refunded") {
      await admin
        .from("orders")
        .update({ payment_status: "refunded" })
        .eq("id", payment.order_id);
    }
    await recordPaymentEvent({
      paymentRequestId: payment.id,
      orderId: payment.order_id,
      assignmentId: payment.assignment_id,
      providerEventId: String(event.id),
      eventType: type,
      status,
      amount: Number(resource.amount?.value || 0) || null,
      currency: resource.amount?.currency_code || null,
    });
  }
  return Response.json({ received: true });
}
