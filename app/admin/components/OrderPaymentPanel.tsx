"use client";

import {
  CheckCircle2,
  Copy,
  Eye,
  LoaderCircle,
  Mail,
  MousePointerClick,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type PaymentRequestSummary = {
  id: string;
  status: string;
  amount: number;
  created_at: string;
  email_delivery_status?: string | null;
  email_recipient?: string | null;
  email_sent_at?: string | null;
  email_delivered_at?: string | null;
  email_opened_at?: string | null;
  email_clicked_at?: string | null;
  payment_link_clicked_at?: string | null;
  email_error?: string | null;
  paypal_order_id?: string | null;
  paypal_capture_id?: string | null;
  completed_at?: string | null;
  failed_at?: string | null;
  refunded_at?: string | null;
  error_message?: string | null;
};

type PaymentEventSummary = {
  id: string;
  payment_request_id?: string | null;
  event_type: string;
  status?: string | null;
  amount?: number | null;
  currency?: string | null;
  created_at: string;
};

function madridTime(value?: string | null) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("en-IE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Madrid",
  }).format(new Date(value));
}

export default function OrderPaymentPanel({
  orderId,
  paymentStatus,
  paidAmount,
}: {
  orderId: string;
  paymentStatus?: string | null;
  paidAmount?: number | null;
}) {
  const [requests, setRequests] = useState<PaymentRequestSummary[]>([]);
  const [events, setEvents] = useState<PaymentEventSummary[]>([]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [currentPaymentStatus, setCurrentPaymentStatus] = useState(paymentStatus);
  const [currentPaidAmount, setCurrentPaidAmount] = useState(paidAmount);
  const load = useCallback(async (showBusy = false) => {
    if (showBusy) {
      setBusy(true);
      setMessage("");
    }
    try {
      const response = await fetch(`/api/admin/payments?orderId=${orderId}`, {
        cache: "no-store",
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(body.error || "Could not refresh payment status");
      }
      setRequests(body.requests || []);
      setEvents(body.events || []);
      if (body.order) {
        setCurrentPaymentStatus(body.order.payment_status);
        setCurrentPaidAmount(body.order.paid_amount);
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not refresh payment status");
    } finally {
      if (showBusy) setBusy(false);
    }
  }, [orderId]);
  useEffect(() => {
    const timer = window.setTimeout(() => void load(), 0);
    return () => window.clearTimeout(timer);
  }, [load]);
  const hasEmailedLink = requests.some((item) => Boolean(item.email_sent_at));

  async function create(sendEmail: boolean) {
    setBusy(true);
    setMessage("");
    const action = sendEmail && hasEmailedLink
      ? "resend_customer_link"
      : "create_customer_link";
    try {
      const response = await fetch("/api/admin/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, orderId, sendEmail }),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(body.error || "Could not create payment link");
      }
      await navigator.clipboard.writeText(body.url).catch(() => {});
      setMessage(sendEmail
        ? hasEmailedLink
          ? "A new secure payment link was emailed to the customer and copied."
          : "Payment link emailed to the customer and copied."
        : "Payment link copied.");
      await load();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not create payment link");
    } finally {
      setBusy(false);
    }
  }
  const emailLabel = hasEmailedLink ? "Resend payment link" : "Email payment link";
  return (
    <section className="rounded-[1.5rem] border border-yellow-300 bg-gradient-to-br from-yellow-50 via-white to-white p-4 shadow-sm sm:col-span-2 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-yellow-700" /><b className="text-lg">Customer payment</b></div>
          <p className="mt-1 max-w-2xl text-sm text-gray-600">Create a unique PayPal checkout link, email it to the customer and verify every payment event from the server.</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-black uppercase ${currentPaymentStatus === "paid" ? "bg-emerald-100 text-emerald-800" : "bg-yellow-100 text-yellow-800"}`}>{currentPaymentStatus || "unpaid"}</span>
      </div>
      {currentPaymentStatus === "paid" ? <div className="mt-4 flex items-center gap-2 rounded-2xl bg-emerald-100 p-4 font-black text-emerald-800"><CheckCircle2 className="h-5 w-5" /> Paid and verified · €{Number(currentPaidAmount || 0).toFixed(2)}</div> : <div className="mt-4 grid gap-2 sm:grid-cols-2"><button type="button" disabled={busy} onClick={() => void create(true)} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 font-black disabled:opacity-50">{busy ? <LoaderCircle className="h-4 w-4 animate-spin" /> : hasEmailedLink ? <RefreshCw className="h-4 w-4" /> : <Mail className="h-4 w-4" />} {emailLabel}</button><button type="button" disabled={busy} onClick={() => void create(false)} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border bg-white px-4 font-black disabled:opacity-50"><Copy className="h-4 w-4" /> Copy payment link</button></div>}
      {message && <p className="mt-3 text-sm font-bold">{message}</p>}
      {requests.length > 0 && <div className="mt-5 space-y-3">
        <div className="flex items-center justify-between gap-3">
          <b className="text-sm">Payment-link activity</b>
          <button type="button" disabled={busy} onClick={() => void load(true)} className="flex min-h-10 items-center gap-2 rounded-xl border bg-white px-3 text-xs font-black disabled:opacity-50">{busy ? <LoaderCircle className="h-3.5 w-3.5 animate-spin" /> : <RefreshCw className="h-3.5 w-3.5" />} Refresh status</button>
        </div>
        {requests.slice(0, 12).map((item, index) => {
          const failed = item.email_delivery_status === "failed" || Boolean(item.email_error);
          const requestEvents = events.filter((event) => event.payment_request_id === item.id);
          return <div key={item.id} className="rounded-2xl border border-gray-100 bg-white px-4 py-4 text-xs shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2"><span className="font-bold text-gray-500">Link #{requests.length - index} · {madridTime(item.created_at)}</span><b className={item.status === "completed" ? "text-emerald-700" : item.status === "failed" ? "text-red-700" : "text-yellow-700"}>{item.status} · €{Number(item.amount).toFixed(2)}</b></div>
            {item.email_recipient && <p className="mt-2 break-all text-gray-600">Customer: {item.email_recipient}</p>}
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.email_sent_at && <span className="rounded-full bg-blue-50 px-2 py-1 font-bold text-blue-700">Sent</span>}
              {item.email_delivered_at && <span className="rounded-full bg-emerald-50 px-2 py-1 font-bold text-emerald-700">Delivered</span>}
              {item.email_opened_at && <span className="flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 font-bold text-violet-700"><Eye className="h-3 w-3" /> Email opened</span>}
              {item.email_clicked_at && <span className="flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 font-bold text-indigo-700"><MousePointerClick className="h-3 w-3" /> Email link clicked</span>}
              {item.payment_link_clicked_at && <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 font-bold text-emerald-800"><ShieldCheck className="h-3 w-3" /> Payment page opened</span>}
              {failed && <span className="rounded-full bg-red-50 px-2 py-1 font-bold text-red-700">Email failed</span>}
            </div>
            <div className="mt-3 grid gap-2 text-gray-600 sm:grid-cols-2">
              {item.email_sent_at && <p><b className="text-gray-900">Email sent:</b> {madridTime(item.email_sent_at)}</p>}
              {item.email_delivered_at && <p><b className="text-gray-900">Delivered:</b> {madridTime(item.email_delivered_at)}</p>}
              {item.email_opened_at && <p><b className="text-gray-900">Opened:</b> {madridTime(item.email_opened_at)}</p>}
              {item.email_clicked_at && <p><b className="text-gray-900">Email clicked:</b> {madridTime(item.email_clicked_at)}</p>}
              {item.payment_link_clicked_at && <p><b className="text-gray-900">Checkout opened:</b> {madridTime(item.payment_link_clicked_at)}</p>}
              {item.completed_at && <p><b className="text-gray-900">Payment completed:</b> {madridTime(item.completed_at)}</p>}
            </div>
            {(item.paypal_order_id || item.paypal_capture_id) && <div className="mt-3 rounded-xl bg-gray-50 p-3 font-mono text-[11px] text-gray-600">
              {item.paypal_order_id && <p className="break-all">PayPal order: {item.paypal_order_id}</p>}
              {item.paypal_capture_id && <p className="mt-1 break-all">Capture: {item.paypal_capture_id}</p>}
            </div>}
            {requestEvents.length > 0 && <div className="mt-3 border-t pt-3">
              <b className="text-gray-900">Verified PayPal history</b>
              <div className="mt-2 space-y-1.5">{requestEvents.map((event) => <div key={event.id} className="flex flex-wrap justify-between gap-2 rounded-lg bg-gray-50 px-2.5 py-2"><span>{event.event_type.replaceAll("_", " ")}</span><span className="font-bold">{event.status || "recorded"} · {madridTime(event.created_at)}</span></div>)}</div>
            </div>}
            {item.email_error && <p className="mt-2 text-red-700">{item.email_error}</p>}
            {item.error_message && <p className="mt-2 text-red-700">PayPal: {item.error_message}</p>}
          </div>;
        })}
      </div>}
      {requests.length === 0 && <div className="mt-4 rounded-2xl border border-dashed border-gray-300 bg-white/70 p-5 text-center text-sm text-gray-500">No payment link has been created for this order yet.</div>}
    </section>
  );
}
