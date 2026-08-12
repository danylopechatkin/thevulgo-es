import { Resend } from "resend";
import type { CalculatedQuote } from "./estimate";
import { formatValenciaDateTime } from "./time";

export type OrderEmailData = {
  id: string;
  orderNumber: number;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  area: string;
  address: string;
  postalCode: string;
  scheduledAt: string;
  notes: string;
  quote: CalculatedQuote;
  depositRequired?: boolean;
  depositAmount?: number;
  source?: "estimate" | "manual";
};

const escapeHtml = (value: unknown) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character] || character,
  );

const money = (value: number) =>
  new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(
    value,
  );

function config() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM || "THEVULGO <info@thevulgo.es>";
  const replyTo = process.env.EMAIL_REPLY_TO || "info@thevulgo.es";
  const businessEmail = process.env.BUSINESS_NOTIFICATION_EMAIL || "info@thevulgo.es";
  if (!apiKey)
    throw new Error("Email server configuration is missing");
  return { resend: new Resend(apiKey), from, replyTo, businessEmail };
}

function serviceRows(quote: CalculatedQuote) {
  return quote.services
    .map(
      (item) =>
        `<tr><td style="padding:14px 0;border-bottom:1px solid #ece9df;color:#202020;font-size:15px;line-height:1.45"><strong>${escapeHtml(item.label)}</strong><br><span style="color:#707070;font-size:13px">Quantity: ${item.qty}</span></td><td style="padding:14px 0 14px 14px;border-bottom:1px solid #ece9df;text-align:right;vertical-align:top;white-space:nowrap;font-size:15px;font-weight:800">${money(item.subtotal)}</td></tr>`,
    )
    .join("");
}

function shell(title: string, preheader: string, content: string) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title></head><body style="margin:0;padding:0;background:#f4f4f0;color:#111;font-family:Arial,Helvetica,sans-serif"><div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHtml(preheader)}</div><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f0"><tr><td align="center" style="padding:28px 12px"><table role="presentation" width="620" cellpadding="0" cellspacing="0" style="width:100%;max-width:620px"><tr><td style="padding:0 0 12px;text-align:center;color:#5f6572;font-size:12px;font-weight:800;letter-spacing:1.7px;text-transform:uppercase">Spain</td></tr><tr><td style="overflow:hidden;border:1px solid #e7c000;border-radius:26px;background:#fff;box-shadow:0 12px 32px rgba(17,17,17,.08)"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="background:#111;padding:28px 30px;color:#fff"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="font-size:23px;font-weight:900;letter-spacing:.3px">THEVULGO</td><td align="right"><span style="display:inline-block;border-radius:999px;background:#facc15;padding:8px 12px;color:#111;font-size:11px;font-weight:900;letter-spacing:.7px;text-transform:uppercase">Spain operations</span></td></tr></table></td></tr><tr><td style="padding:34px 30px"><h1 style="margin:0 0 14px;font-size:30px;line-height:1.12;letter-spacing:-.7px">${escapeHtml(title)}</h1>${content}</td></tr><tr><td style="border-top:1px solid #eee9d9;background:#fffdf5;padding:20px 30px;color:#626262;font-size:12px;line-height:1.6">THEVULGO · Handyman services in Spain<br>Prices are shown in euros (EUR). Appointment times use Europe/Madrid.</td></tr></table></td></tr><tr><td style="padding:18px 12px 0;text-align:center;color:#858585;font-size:11px;line-height:1.5">This transactional email was sent about a THEVULGO service request.</td></tr></table></td></tr></table></body></html>`;
}

function detailRow(label: string, value: string) {
  return `<tr><td style="padding:8px 0;color:#71717a;font-size:13px;font-weight:700;vertical-align:top;width:35%">${escapeHtml(label)}</td><td style="padding:8px 0 8px 14px;color:#111;font-size:14px;font-weight:700;line-height:1.45;vertical-align:top">${escapeHtml(value)}</td></tr>`;
}

function orderSummary(order: OrderEmailData, orderLabel: string) {
  const location = [order.address, order.area, order.city, order.postalCode]
    .filter(Boolean)
    .join(", ");
  const deposit = order.depositRequired
    ? `<div style="margin-top:18px;border:1px solid #e7c000;border-radius:16px;background:#fff9d8;padding:16px 18px;color:#111;font-size:14px;line-height:1.55"><strong>Deposit: ${money(order.depositAmount || 0)}</strong><br>THEVULGO will provide secure payment instructions separately.</div>`
    : `<div style="margin-top:18px;border-radius:16px;background:#f4f4f0;padding:16px 18px;color:#343434;font-size:14px;line-height:1.55"><strong>Payment after the work</strong><br>Pay by secure link or cash after the service is completed.</div>`;

  return `<div style="margin:22px 0;border-radius:18px;background:#f7f7f4;padding:16px 18px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${detailRow("Order", orderLabel)}${detailRow("Customer", order.fullName)}${detailRow("Phone", order.phone)}${detailRow("Email", order.email || "—")}${detailRow("Service address", location)}${detailRow("Appointment", `${formatValenciaDateTime(order.scheduledAt)} (Madrid time)`)}${detailRow("Category", order.quote.category)}</table></div><div style="margin-top:18px;border:1px solid #e7c000;border-radius:18px;padding:4px 18px 16px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${serviceRows(order.quote)}<tr><td style="padding:18px 0 2px;font-size:17px;font-weight:900">Total</td><td style="padding:18px 0 2px;text-align:right;white-space:nowrap;font-size:19px;font-weight:900">${money(order.quote.total)}</td></tr></table></div>${deposit}${order.notes ? `<div style="margin-top:18px"><p style="margin:0 0 6px;color:#71717a;font-size:12px;font-weight:900;letter-spacing:.8px;text-transform:uppercase">Notes</p><p style="margin:0;color:#333;font-size:14px;line-height:1.55">${escapeHtml(order.notes)}</p></div>` : ""}`;
}

export function renderCustomerOrderConfirmation(
  order: OrderEmailData,
  replyTo: string,
) {
  const orderLabel = `TVG-ES-${String(order.orderNumber).padStart(5, "0")}`;
  const manual = order.source === "manual";
  const customerTitle = manual
    ? "Your service request is confirmed"
    : "We received your estimate request";
  const subject = `${manual ? "THEVULGO booking confirmation" : "We received your estimate request"} · ${orderLabel}`;
  const html = shell(
    customerTitle,
    `${orderLabel} · ${formatValenciaDateTime(order.scheduledAt)} · ${money(order.quote.total)}`,
    `<p style="margin:0 0 12px;font-size:17px;line-height:1.6">Hi ${escapeHtml(order.fullName)},</p><p style="margin:0;color:#4b5563;font-size:15px;line-height:1.7">${manual ? "Your THEVULGO service request has been added to our Spain schedule. Please review the details below." : "We received your handyman estimate request for Spain. We will review the scope and contact you if any detail needs clarification."}</p>${orderSummary(order, orderLabel)}<div style="margin-top:24px;border-top:1px solid #ece9df;padding-top:20px"><p style="margin:0 0 14px;color:#4b5563;font-size:14px;line-height:1.6">Need to change the address, appointment or scope? Reply to this email and include your order number.</p><a href="mailto:${escapeHtml(replyTo)}?subject=${encodeURIComponent(`Change request for ${orderLabel}`)}" style="display:inline-block;border-radius:13px;background:#facc15;padding:14px 20px;color:#111;text-decoration:none;font-size:14px;font-weight:900">Reply about this order</a></div>`,
  );
  return { subject, html };
}

export async function sendCustomerOrderConfirmation(order: OrderEmailData) {
  if (!order.email) return { customerId: null, customerError: null };
  const { resend, from, replyTo, businessEmail } = config();
  const rendered = renderCustomerOrderConfirmation(order, replyTo);
  const customer = await resend.emails.send({
    from,
    to: [order.email],
    bcc:
      order.email.toLowerCase() === businessEmail.toLowerCase()
        ? undefined
        : [businessEmail],
    replyTo,
    subject: rendered.subject,
    html: rendered.html,
    tags: [
      { name: "email_kind", value: "customer_confirmation" },
      { name: "order_id", value: order.id },
    ],
  });
  return {
    customerId: customer.data?.id || null,
    customerError: customer.error?.message || null,
  };
}

export async function sendNewOrderEmails(order: OrderEmailData) {
  const { resend, from, replyTo, businessEmail } = config();
  const orderLabel = `TVG-ES-${String(order.orderNumber).padStart(5, "0")}`;
  const summary = orderSummary(order, orderLabel);
  const manual = order.source === "manual";

  const admin = await resend.emails.send({
    from,
    to: [businessEmail],
    replyTo: order.email || replyTo,
    subject: `${manual ? "New manual Spanish order" : "New Spanish estimate"} ${orderLabel} · ${order.fullName}`,
    html: shell(
      manual ? "New manual order created" : "New estimate request",
      `${orderLabel} · ${order.fullName} · ${money(order.quote.total)}`,
      `<p style="margin:0;color:#555;font-size:15px;line-height:1.65">${manual ? "A manual order was created in the Spanish CRM." : "A customer submitted a new estimate request."}</p>${summary}`,
    ),
  });

  const { customerId, customerError } =
    await sendCustomerOrderConfirmation(order);
  return {
    adminId: admin.data?.id || null,
    adminError: admin.error?.message || null,
    customerId,
    customerError,
  };
}

export async function sendReminderEmail(order: {
  full_name: string;
  email: string;
  category: string;
  scheduled_at: string;
  city: string;
  area: string;
  address: string;
}) {
  const { resend, from, replyTo } = config();
  const result = await resend.emails.send({
    from,
    to: [order.email],
    replyTo,
    subject: "Please confirm: your THEVULGO service is coming up",
    html: shell(
      "Please confirm your appointment",
      `THEVULGO service reminder · ${formatValenciaDateTime(order.scheduled_at)}`,
      `<p>Hi ${escapeHtml(order.full_name)},</p><p>Your ${escapeHtml(order.category)} service is scheduled for <b>${escapeHtml(formatValenciaDateTime(order.scheduled_at))}</b> Madrid time.</p><p>${escapeHtml(`${order.address}, ${order.area}, ${order.city}`)}</p><p>Please reply to confirm. If you need to change or cancel, reply or contact THEVULGO on WhatsApp at least 24 hours before the appointment so we can try to reschedule.</p>`,
    ),
  });
  if (result.error) throw new Error(result.error.message);
  return result.data?.id || null;
}

type CompletedOrderEmailData = OrderEmailData & {
  paymentMethod?: "paypal" | "e_transfer" | "cash" | "other" | null;
};

export function renderCompletedOrderEmail(
  order: CompletedOrderEmailData,
  replyTo: string,
) {
  const orderLabel = `TVG-ES-${String(order.orderNumber).padStart(5, "0")}`;
  const location = [order.address, order.area, order.city, order.postalCode]
    .filter(Boolean)
    .join(", ");
  const paymentLabel = order.paymentMethod
      ? {
          paypal: "PayPal / card",
          e_transfer: "Bank transfer / Bizum",
        cash: "Cash",
        other: "Other arrangement",
      }[order.paymentMethod]
    : "As arranged with THEVULGO";
  const summary = `<div style="margin:22px 0;border-radius:18px;background:#f7f7f4;padding:16px 18px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${detailRow("Order", orderLabel)}${detailRow("Service", order.quote.category)}${detailRow("Service address", location)}${detailRow("Appointment", `${formatValenciaDateTime(order.scheduledAt)} (Madrid time)`)}</table></div><div style="margin-top:18px;border:1px solid #e7c000;border-radius:18px;padding:4px 18px 16px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${serviceRows(order.quote)}<tr><td style="padding:18px 0 2px;font-size:17px;font-weight:900">Final total</td><td style="padding:18px 0 2px;text-align:right;white-space:nowrap;font-size:19px;font-weight:900">${money(order.quote.total)}</td></tr></table></div><div style="margin-top:18px;border-radius:16px;background:#f4f4f0;padding:16px 18px;color:#343434;font-size:14px;line-height:1.55"><strong>Payment method</strong><br>${escapeHtml(paymentLabel)}</div>`;
  return {
    subject: `Your THEVULGO service is complete · ${orderLabel}`,
    html: shell(
      "Your service is complete",
      `${orderLabel} · Service completed · ${money(order.quote.total)}`,
      `<p style="margin:0 0 12px;font-size:17px;line-height:1.6">Hi ${escapeHtml(order.fullName)},</p><p style="margin:0;color:#4b5563;font-size:15px;line-height:1.7">Thank you for choosing THEVULGO. Your Spain operations service has been marked complete. Here is the final summary for your records.</p>${summary}<div style="margin-top:24px;border-top:1px solid #ece9df;padding-top:20px"><p style="margin:0 0 14px;color:#4b5563;font-size:14px;line-height:1.6">Have a question about the completed work? Reply to this email and include your order number.</p><a href="mailto:${escapeHtml(replyTo)}?subject=${encodeURIComponent(`Question about completed order ${orderLabel}`)}" style="display:inline-block;border-radius:13px;background:#facc15;padding:14px 20px;color:#111;text-decoration:none;font-size:14px;font-weight:900">Reply about this service</a></div>`,
    ),
  };
}

export async function sendCompletedOrderEmail(
  order: OrderEmailData & {
    paymentMethod?: "paypal" | "e_transfer" | "cash" | "other" | null;
  },
) {
  const { resend, from, replyTo, businessEmail } = config();
  const rendered = renderCompletedOrderEmail(order, replyTo);
  const result = await resend.emails.send({
    from,
    to: [order.email],
    bcc:
      order.email.toLowerCase() === businessEmail.toLowerCase()
        ? undefined
        : [businessEmail],
    replyTo,
    subject: rendered.subject,
    html: rendered.html,
    tags: [
      { name: "email_kind", value: "completed_order" },
      { name: "order_id", value: order.id },
    ],
  });
  if (result.error) throw new Error(result.error.message);
  return result.data?.id || null;
}

export async function sendWorkerAssignmentEmail(data: {
  workerId: string;
  workerName: string;
  workerEmail: string;
  jobLink: string;
  orderNumber: number;
  customerName: string;
  address: string;
  area: string;
  city: string;
  postalCode: string;
  scheduledAt: string;
  category: string;
  services: Array<{ label?: string; qty?: number; subtotal?: number }>;
  total: number;
  workerShare: number;
}) {
  const { resend, from, replyTo } = config();
  const orderLabel = `TVG-ES-${String(data.orderNumber).padStart(5, "0")}`;
  const acceptLink = `${data.jobLink}?decision=accept`;
  const declineLink = `${data.jobLink}?decision=decline`;
  const rows = data.services
    .map(
      (service) =>
        `<tr><td style="padding:10px 14px">${escapeHtml(service.label || "Service")} × ${Number(service.qty || 1)}</td><td style="padding:10px 14px;text-align:right;font-weight:700">${money(Number(service.subtotal || 0))}</td></tr>`,
    )
    .join("");
  const html = shell(
    "A new job has been assigned to you",
    `${orderLabel} · ${formatValenciaDateTime(data.scheduledAt)} · Your share ${money(data.workerShare)}`,
    `<p>Hi ${escapeHtml(data.workerName)},</p><p>You have been assigned a THEVULGO Spain operations job. Review the details and respond using one of the secure buttons below. Your response will be saved securely.</p><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:22px 0"><tr><td bgcolor="#facc15" style="border-radius:12px;text-align:center"><a href="${escapeHtml(acceptLink)}" target="_blank" style="display:block;background:#facc15;color:#111;padding:16px 18px;border-radius:12px;font-weight:800;text-decoration:none;text-align:center">Accept job</a></td></tr><tr><td style="height:12px"></td></tr><tr><td bgcolor="#ffffff" style="border:1px solid #fecaca;border-radius:12px;text-align:center"><a href="${escapeHtml(declineLink)}" target="_blank" style="display:block;background:#fff;color:#b91c1c;padding:15px 18px;border-radius:12px;font-weight:800;text-decoration:none;text-align:center">Cannot accept</a></td></tr></table><div style="margin:0 0 22px;border-radius:12px;background:#f7f7f4;padding:14px 16px;font-size:12px;line-height:1.6;color:#6b7280;word-break:break-all"><strong style="color:#111">If a button does not open:</strong><br>Accept: <a href="${escapeHtml(acceptLink)}" target="_blank" style="color:#8a6500">${escapeHtml(acceptLink)}</a><br>Cannot accept: <a href="${escapeHtml(declineLink)}" target="_blank" style="color:#b91c1c">${escapeHtml(declineLink)}</a></div><p style="font-size:13px;color:#6b7280">You may be asked to sign in before your response is saved. Sign in with the same worker email that received this message. Customer email and phone are kept private; use the job portal to contact THEVULGO if needed.</p><p><b>Order:</b> ${orderLabel}</p><p><b>Customer:</b> ${escapeHtml(data.customerName)}</p><p><b>Location:</b> ${escapeHtml(`${data.address}, ${data.area}, ${data.city}, ${data.postalCode}`)}</p><p><b>Appointment:</b> ${escapeHtml(formatValenciaDateTime(data.scheduledAt))} (Madrid time)</p><p><b>Category:</b> ${escapeHtml(data.category)}</p><table width="100%" style="margin-top:18px;border:1px solid #facc15;border-radius:12px">${rows}<tr><td style="padding:12px 14px;border-top:1px solid #ddd;font-weight:800">Order total</td><td style="padding:12px 14px;border-top:1px solid #ddd;text-align:right;font-weight:800">${money(data.total)}</td></tr><tr><td style="padding:12px 14px;font-weight:800">Your contractor share (50%)</td><td style="padding:12px 14px;text-align:right;font-weight:800">${money(data.workerShare)}</td></tr></table><p>Your access ends automatically after the job is completed and payment has been recorded.</p>`,
  );
  const result = await resend.emails.send({
    from,
    to: [data.workerEmail],
    replyTo,
    subject: `New assigned job ${orderLabel} · THEVULGO Spain operations`,
    html,
    tags: [
      { name: "email_kind", value: "worker_assignment" },
      { name: "worker_id", value: data.workerId },
    ],
  });
  if (result.error) throw new Error(result.error.message);
  return result.data?.id || null;
}

export async function sendWorkerAssignmentResponseEmail(data: {
  workerId: string;
  workerName: string;
  workerEmail: string;
  response: "accepted" | "declined";
  jobLink: string;
  orderNumber: number;
  scheduledAt: string;
  address: string;
  area: string;
  city: string;
  postalCode: string;
  total: number;
  workerShare: number;
}) {
  const { resend, from, replyTo } = config();
  const orderLabel = `TVG-ES-${String(data.orderNumber).padStart(5, "0")}`;
  const accepted = data.response === "accepted";
  const location = [data.address, data.area, data.city, data.postalCode]
    .filter(Boolean)
    .join(", ");
  const content = accepted
    ? `<p style="margin:0;color:#4b5563;font-size:15px;line-height:1.7">Your acceptance has been recorded successfully. This job is now assigned to you.</p><div style="margin:22px 0;border-radius:18px;background:#f7f7f4;padding:16px 18px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${detailRow("Order", orderLabel)}${detailRow("Appointment", `${formatValenciaDateTime(data.scheduledAt)} (Madrid time)`)}${detailRow("Location", location)}${detailRow("Order total", money(data.total))}${detailRow("Your expected 50% share", money(data.workerShare))}</table></div><div style="text-align:center"><a href="${escapeHtml(data.jobLink)}" style="display:inline-block;border-radius:14px;background:#facc15;padding:15px 24px;color:#111;text-decoration:none;font-size:15px;font-weight:900">Open assigned job</a></div><p style="margin:20px 0 0;color:#6b7280;font-size:13px;line-height:1.6">Keep the job status updated in the protected portal. Customer phone and email remain private.</p>`
    : `<p style="margin:0;color:#4b5563;font-size:15px;line-height:1.7">Your response has been recorded successfully. You are no longer assigned to this job and no further action is required.</p><div style="margin:22px 0;border-radius:18px;background:#f7f7f4;padding:16px 18px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${detailRow("Order", orderLabel)}${detailRow("Appointment", `${formatValenciaDateTime(data.scheduledAt)} (Madrid time)`)}${detailRow("Response", "Cannot accept")}</table></div><div style="border-radius:16px;background:#111;padding:17px 18px;color:#fff;font-size:13px;line-height:1.65"><strong style="color:#facc15">Response confirmed</strong><br>THEVULGO has been notified and can reassign the order.</div>`;
  const title = accepted
    ? "Job accepted successfully"
    : "Job decline confirmed";
  const result = await resend.emails.send({
    from,
    to: [data.workerEmail],
    replyTo,
    subject: `${accepted ? "Job accepted" : "Cannot accept confirmed"} · ${orderLabel} · THEVULGO`,
    html: shell(
      title,
      `${orderLabel} · Your ${accepted ? "acceptance" : "decline"} is recorded`,
      `<p style="margin:0 0 12px;font-size:17px;line-height:1.6">Hi ${escapeHtml(data.workerName)},</p>${content}`,
    ),
    tags: [
      { name: "email_kind", value: "worker_assignment_response" },
      { name: "worker_id", value: data.workerId },
    ],
  });
  if (result.error) throw new Error(result.error.message);
  return result.data?.id || null;
}

export async function sendWorkerUnassignmentEmail(data: {
  workerId: string;
  workerName: string;
  workerEmail: string;
  assignmentId: string;
  orderNumber: number;
  reason: "unassigned" | "reassigned";
}) {
  const { resend, from, replyTo } = config();
  const orderLabel = `TVG-ES-${String(data.orderNumber).padStart(5, "0")}`;
  const changed = data.reason === "reassigned";
  const result = await resend.emails.send({
    from,
    to: [data.workerEmail],
    replyTo,
    subject: `Assignment removed · ${orderLabel} · THEVULGO`,
    html: shell(
      "This job is no longer assigned to you",
      `${orderLabel} · Your access has been closed`,
      `<p style="margin:0 0 12px;font-size:17px;line-height:1.6">Hi ${escapeHtml(data.workerName)},</p><p style="margin:0;color:#4b5563;font-size:15px;line-height:1.7">${changed ? "THEVULGO has assigned this job to another contractor." : "THEVULGO has removed this job from your assigned work."} Your protected access to this order is now closed and no further action is required.</p><div style="margin:22px 0;border-radius:18px;background:#f7f7f4;padding:16px 18px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${detailRow("Order", orderLabel)}${detailRow("Assignment status", "Removed")}${detailRow("Portal access", "Closed")}</table></div><div style="border-radius:16px;background:#111;padding:17px 18px;color:#fff;font-size:13px;line-height:1.65"><strong style="color:#facc15">No action required</strong><br>This change applies only to this assignment. Other active jobs in your worker portal are not affected.</div>`,
    ),
    tags: [
      { name: "email_kind", value: "worker_unassignment" },
      { name: "worker_id", value: data.workerId },
      { name: "assignment_id", value: data.assignmentId },
    ],
  });
  if (result.error) throw new Error(result.error.message);
  return result.data?.id || null;
}

export async function sendCustomerPaymentLinkEmail(data: {
  orderId: string;
  paymentRequestId: string;
  orderNumber: number;
  customerName: string;
  customerEmail: string;
  amount: number;
  paymentUrl: string;
}) {
  const { resend, from, replyTo, businessEmail } = config();
  const orderLabel = `TVG-ES-${String(data.orderNumber).padStart(5, "0")}`;
  const result = await resend.emails.send({
    from,
    to: [data.customerEmail],
    bcc: data.customerEmail.toLowerCase() === businessEmail.toLowerCase() ? undefined : [businessEmail],
    replyTo,
    subject: `Secure payment link · ${orderLabel} · THEVULGO`,
    html: shell(
      "Your secure payment link",
      `${orderLabel} · ${money(data.amount)} payable securely with PayPal`,
      `<p style="margin:0 0 12px;font-size:17px;line-height:1.6">Hi ${escapeHtml(data.customerName)},</p><p style="margin:0;color:#4b5563;font-size:15px;line-height:1.7">Use the secure button below to pay THEVULGO for your Spain operations service. PayPal may offer PayPal or eligible card checkout options on its hosted payment page.</p><div style="margin:22px 0;border-radius:18px;background:#f7f7f4;padding:16px 18px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${detailRow("Order", orderLabel)}${detailRow("Amount due", money(data.amount))}${detailRow("Currency", "euros (EUR)")}</table></div><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center"><table role="presentation" cellpadding="0" cellspacing="0"><tr><td bgcolor="#facc15" style="border-radius:14px"><a href="${escapeHtml(data.paymentUrl)}" target="_blank" style="display:block;border:1px solid #facc15;border-radius:14px;padding:16px 28px;color:#111111;text-decoration:none;font-size:16px;font-weight:900;line-height:20px">Pay securely</a></td></tr></table></td></tr></table><div style="margin:18px 0 0;border-radius:14px;background:#fff8d8;padding:14px 16px;color:#4b5563;font-size:13px;line-height:1.6"><strong style="color:#111">Button not opening?</strong><br>Copy and paste this secure address into Safari or Chrome:<br><a href="${escapeHtml(data.paymentUrl)}" target="_blank" style="color:#075985;word-break:break-all">${escapeHtml(data.paymentUrl)}</a></div><p style="margin:20px 0 0;color:#6b7280;font-size:13px;line-height:1.6">This link is unique to this order. Do not forward it. THEVULGO never asks you to send card details by email or WhatsApp.</p>`,
    ),
    tags: [
      { name: "email_kind", value: "customer_payment_link" },
      { name: "order_id", value: data.orderId },
      { name: "payment_request_id", value: data.paymentRequestId },
    ],
  });
  if (result.error) throw new Error(result.error.message);
  return result.data?.id || null;
}

export async function sendPaymentCompletedEmails(data: {
  orderId: string;
  orderNumber: number;
  customerName: string;
  customerEmail?: string | null;
  workerName?: string | null;
  workerEmail?: string | null;
  amount: number;
  captureId: string;
  purpose: "customer_order" | "worker_cash_remittance";
}) {
  const { resend, from, replyTo, businessEmail } = config();
  const orderLabel = `TVG-ES-${String(data.orderNumber).padStart(5, "0")}`;
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.thevulgo.es").replace(/\/$/, "");
  const common = `<div style="margin:22px 0;border-radius:18px;background:#f7f7f4;padding:16px 18px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${detailRow("Order", orderLabel)}${detailRow("Amount", money(data.amount))}${detailRow("Status", "Paid and server-verified")}${detailRow("PayPal capture", data.captureId)}</table></div>`;
  const sends: Promise<unknown>[] = [];
  if (data.purpose === "customer_order" && data.customerEmail) sends.push(resend.emails.send({
    from, to: [data.customerEmail], replyTo,
    subject: `Payment received · ${orderLabel} · THEVULGO`,
    html: shell("Payment received", `${orderLabel} · ${money(data.amount)} paid`, `<p style="margin:0 0 12px;font-size:17px;line-height:1.6">Hi ${escapeHtml(data.customerName)},</p><p style="margin:0;color:#4b5563;font-size:15px;line-height:1.7">Thank you. Your payment has been received and securely verified.</p>${common}`),
    tags: [{ name: "email_kind", value: "customer_payment_completed" }, { name: "order_id", value: data.orderId }],
  }));
  if (data.workerEmail) sends.push(resend.emails.send({
    from, to: [data.workerEmail], replyTo,
    subject: `${data.purpose === "worker_cash_remittance" ? "Cash remittance received" : "Customer payment received"} · ${orderLabel}`,
    html: shell(data.purpose === "worker_cash_remittance" ? "Your cash remittance is complete" : "The customer has paid", `${orderLabel} · Payment verified`, `<p style="margin:0 0 12px;font-size:17px;line-height:1.6">Hi ${escapeHtml(data.workerName || "contractor")},</p><p style="margin:0;color:#4b5563;font-size:15px;line-height:1.7">${data.purpose === "worker_cash_remittance" ? "THEVULGO received the company portion of the cash payment. Your remittance obligation for this order is complete." : "The customer payment was received and verified. Great work — your contractor share is now recorded for the next Monday payout review."}</p>${common}`),
    tags: [{ name: "email_kind", value: "worker_payment_completed" }, { name: "order_id", value: data.orderId }],
  }));
  sends.push(resend.emails.send({
    from, to: [businessEmail], replyTo,
    subject: `PAID ${orderLabel} · ${money(data.amount)} · THEVULGO Spain`,
    html: shell("Order payment confirmed", `${orderLabel} · ${money(data.amount)} verified`, `<p style="margin:0;color:#4b5563;font-size:15px;line-height:1.7">A payment was confirmed by the PayPal server and recorded in the Spanish CRM.</p>${common}<div style="text-align:center"><a href="${escapeHtml(`${siteUrl}/admin?order=${data.orderId}`)}" style="display:inline-block;border-radius:14px;background:#facc15;padding:15px 24px;color:#111;text-decoration:none;font-size:15px;font-weight:900">Open order in CRM</a></div>`),
    tags: [{ name: "email_kind", value: "business_payment_completed" }, { name: "order_id", value: data.orderId }],
  }));
  const results = await Promise.all(sends);
  const errors = results.flatMap((result) => {
    const value = result as { error?: { message?: string } | null };
    return value.error?.message ? [value.error.message] : [];
  });
  if (errors.length) throw new Error(errors.join("; "));
}

export async function sendWorkerQuestionEmail(data: {
  workerId: string;
  workerName: string;
  workerEmail: string;
  assignmentId: string;
  orderNumber: number;
  question: string;
}) {
  const { resend, from, businessEmail } = config();
  const orderLabel = `TVG-ES-${String(data.orderNumber).padStart(5, "0")}`;
  const html = shell(
    "Contractor question",
    `${orderLabel} · Question from ${data.workerName}`,
    `<p style="margin:0;color:#4b5563;font-size:15px;line-height:1.7"><strong>${escapeHtml(data.workerName)}</strong> sent a question from the protected contractor portal.</p><div style="margin:22px 0;border-radius:18px;background:#f7f7f4;padding:16px 18px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${detailRow("Order", orderLabel)}${detailRow("Contractor", data.workerName)}${detailRow("Contractor email", data.workerEmail)}</table></div><div style="border:1px solid #e7c000;border-radius:18px;background:#fffdf5;padding:20px;color:#111;font-size:16px;line-height:1.65"><strong>Question</strong><br>${escapeHtml(data.question).replaceAll("\n", "<br>")}</div><p style="margin:20px 0 0;color:#6b7280;font-size:13px">The question and email delivery status are saved in THEVULGO CRM.</p>`,
  );
  const result = await resend.emails.send({
    from,
    to: [businessEmail],
    replyTo: data.workerEmail,
    subject: `Worker question · ${orderLabel} · ${data.workerName}`,
    html,
    tags: [
      { name: "email_kind", value: "worker_question" },
      { name: "worker_id", value: data.workerId },
      { name: "assignment_id", value: data.assignmentId },
    ],
  });
  if (result.error) throw new Error(result.error.message);
  return result.data?.id || null;
}

export function renderWorkerInvitationEmail(data: {
  fullName: string;
  email: string;
  phone: string;
  residentialAddress: string;
  onboardingUrl: string;
  expiresAt: string;
}) {
  const profileRows = [
    detailRow("Name", data.fullName),
    detailRow("Portal email", data.email),
    detailRow("Phone", data.phone || "Not recorded"),
    detailRow("Residential address", data.residentialAddress || "Not recorded"),
    detailRow("Contractor share", "50% of each assigned job"),
  ].join("");
  const expiry = new Intl.DateTimeFormat("en-IE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Madrid",
  }).format(new Date(data.expiresAt));

  return {
    subject: "Create your THEVULGO contractor password",
    html: shell(
      "Your contractor profile is ready",
      `Welcome ${data.fullName} · Create your secure password`,
      `<p style="margin:0 0 12px;font-size:17px;line-height:1.6">Hi ${escapeHtml(data.fullName)},</p><p style="margin:0;color:#4b5563;font-size:15px;line-height:1.7">THEVULGO has created your private contractor profile for Spain operations assignments. Please review the information entered by the administrator and create your own password.</p><div style="margin:22px 0;border-radius:18px;background:#f7f7f4;padding:16px 18px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${profileRows}</table></div><div style="margin:24px 0;text-align:center"><a href="${escapeHtml(data.onboardingUrl)}" target="_blank" rel="noopener noreferrer" style="display:inline-block;border-radius:14px;background:#facc15;padding:15px 24px;color:#111;text-decoration:none;font-size:15px;font-weight:900">Review profile &amp; create password</a><p style="margin:14px 0 0;color:#6b7280;font-size:12px;line-height:1.6">If the button does not open, use this secure link:<br><a href="${escapeHtml(data.onboardingUrl)}" target="_blank" rel="noopener noreferrer" style="color:#2563eb;text-decoration:underline;word-break:break-all">Open password setup</a></p></div><div style="border-radius:16px;background:#111;padding:17px 18px;color:#fff;font-size:13px;line-height:1.65"><strong style="color:#facc15">Private, one-time link</strong><br>This link expires ${escapeHtml(expiry)} Madrid time and stops working after your password is created. Do not forward it.</div><p style="margin:20px 0 0;color:#6b7280;font-size:13px;line-height:1.6">If any profile information is incorrect, do not create a password. Reply to this email so THEVULGO can correct it.</p>`,
    ),
  };
}

export async function sendWorkerInvitationEmail(data: {
  workerId: string;
  fullName: string;
  email: string;
  phone: string;
  residentialAddress: string;
  onboardingUrl: string;
  expiresAt: string;
}) {
  const { resend, from, replyTo } = config();
  const rendered = renderWorkerInvitationEmail(data);
  const result = await resend.emails.send({
    from,
    to: [data.email],
    replyTo,
    subject: rendered.subject,
    html: rendered.html,
    tags: [
      { name: "email_kind", value: "worker_invitation" },
      { name: "worker_id", value: data.workerId },
    ],
  });
  return {
    emailId: result.data?.id || null,
    error: result.error?.message || null,
  };
}

export function renderWorkerWelcomeEmail(data: {
  fullName: string;
  email: string;
  portalUrl: string;
}) {
  return {
    subject: `Welcome to THEVULGO, ${data.fullName}`,
    html: shell(
      "Your secure access is ready",
      `${data.fullName} · Password created successfully`,
      `<p style="margin:0 0 12px;font-size:17px;line-height:1.6">Hi ${escapeHtml(data.fullName)},</p><p style="margin:0;color:#4b5563;font-size:15px;line-height:1.7">Your password was created successfully. Welcome to the THEVULGO independent contractor network for Valencia &amp; the Spain.</p><div style="margin:22px 0;border:1px solid #e7c000;border-radius:18px;background:#fffdf5;padding:18px"><p style="margin:0 0 7px;color:#71717a;font-size:12px;font-weight:900;letter-spacing:.8px;text-transform:uppercase">Your portal email</p><p style="margin:0;font-size:17px;font-weight:900">${escapeHtml(data.email)}</p></div><div style="margin:18px 0;border-radius:18px;background:#f4f4f0;padding:18px;color:#333;font-size:14px;line-height:1.7"><strong>What happens next</strong><br>When THEVULGO assigns you a job, you will receive a separate email with the appointment details and a protected job link. Your contractor share is 50% of the assigned order total.</div><div style="margin:24px 0;text-align:center"><a href="${escapeHtml(data.portalUrl)}" style="display:inline-block;border-radius:14px;background:#facc15;padding:15px 24px;color:#111;font-size:15px;font-weight:900;text-decoration:none">Open worker portal</a></div><p style="margin:0;color:#6b7280;font-size:13px;line-height:1.6">Sign in with your portal email and the password you created. You will see only the jobs assigned to you. Never share your password or job links with another person.</p>`,
    ),
  };
}

export async function sendWorkerWelcomeEmail(data: {
  workerId: string;
  fullName: string;
  email: string;
}) {
  const { resend, from, replyTo } = config();
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.thevulgo.es").replace(/\/$/, "");
  const rendered = renderWorkerWelcomeEmail({
    ...data,
    portalUrl: `${siteUrl}/worker-login`,
  });
  const result = await resend.emails.send({
    from,
    to: [data.email],
    replyTo,
    subject: rendered.subject,
    html: rendered.html,
    tags: [
      { name: "email_kind", value: "worker_welcome" },
      { name: "worker_id", value: data.workerId },
    ],
  });
  return {
    emailId: result.data?.id || null,
    error: result.error?.message || null,
  };
}

export function renderWorkerAccountRemovedEmail(data: {
  fullName: string;
}) {
  return {
    subject: "Your THEVULGO contractor access has been closed",
    html: shell(
      "Your contractor access has been closed",
      "THEVULGO contractor portal access update",
      `<p style="margin:0 0 12px;font-size:17px;line-height:1.6">Hi ${escapeHtml(data.fullName)},</p><p style="margin:0;color:#4b5563;font-size:15px;line-height:1.7">Your independent contractor access to the THEVULGO portal has been closed. You can no longer sign in or open assigned-job links.</p><div style="margin:22px 0;border-radius:18px;background:#f7f7f4;padding:18px;color:#333;font-size:14px;line-height:1.7"><strong>Need help or believe this was sent in error?</strong><br>Reply directly to this email and the THEVULGO team will review your access.</div><p style="margin:0;color:#6b7280;font-size:13px;line-height:1.6">Thank you for the work completed with THEVULGO Spain operations.</p>`,
    ),
  };
}

export async function sendWorkerAccountRemovedEmail(data: {
  workerId: string;
  fullName: string;
  email: string;
}) {
  const { resend, from, replyTo } = config();
  const rendered = renderWorkerAccountRemovedEmail(data);
  const result = await resend.emails.send({
    from,
    to: [data.email],
    replyTo,
    subject: rendered.subject,
    html: rendered.html,
    tags: [
      { name: "email_kind", value: "worker_account_removed" },
      { name: "worker_id", value: data.workerId },
    ],
  });
  return {
    emailId: result.data?.id || null,
    error: result.error?.message || null,
  };
}
