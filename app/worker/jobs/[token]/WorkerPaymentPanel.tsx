"use client";

import { Banknote, CheckCircle2, CreditCard, LoaderCircle, Mail } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type PaymentState = {
  requests: Array<{ id: string; purpose: string; amount: number; status: string; created_at: string }>;
  cash: null | { cash_amount: number; company_amount_due: number; remittance_status: string; remittance_due_at: string; remittance_payment_request_id: string | null };
  ledger: Array<{ id: string; entry_type: string; amount: number; status: string }>;
  order: null | { paymentStatus: string; paidAmount: number; paymentMethod: string | null };
};

const money = (value: number) =>
  new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(value);

export default function WorkerPaymentPanel({ assignmentId, orderTotal, accepted }: { assignmentId: string; orderTotal: number; accepted: boolean }) {
  const [state, setState] = useState<PaymentState>({ requests: [], cash: null, ledger: [], order: null });
  const [cashAmount, setCashAmount] = useState(orderTotal.toFixed(2));
  const [showCash, setShowCash] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [remittanceUrl, setRemittanceUrl] = useState("");

  const load = useCallback(async () => {
    const response = await fetch(`/api/worker/assignments/${assignmentId}/payments`, { cache: "no-store" });
    if (response.ok) setState(await response.json());
  }, [assignmentId]);
  useEffect(() => {
    let active = true;
    fetch(`/api/worker/assignments/${assignmentId}/payments`, {
      cache: "no-store",
    })
      .then(async (response) => ({ response, body: await response.json() }))
      .then(({ response, body }) => {
        if (active && response.ok) setState(body);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [assignmentId]);

  async function action(body: Record<string, unknown>) {
    setBusy(true);
    setMessage("");
    const response = await fetch(`/api/worker/assignments/${assignmentId}/payments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    setBusy(false);
    if (!response.ok) return setMessage(result.error || "Payment action failed.");
    if (body.action === "send_customer_link")
      setMessage("Secure payment link emailed to the customer. THEVULGO can see this action.");
    else if (body.action === "record_cash") {
      if (result.url) setRemittanceUrl(result.url);
      setMessage("Cash recorded. Use the secure button below to send the company share within 24 hours.");
    } else {
      if (result.url) setRemittanceUrl(result.url);
      setMessage("A new secure remittance link is ready.");
    }
    await load();
  }

  const remittance = state.cash
    ? state.requests.find((request) => request.id === state.cash?.remittance_payment_request_id)
    : null;
  const paid =
    state.order?.paymentStatus === "paid" ||
    state.requests.some(
      (request) =>
        request.purpose === "customer_order" && request.status === "completed",
    );

  return (
    <section className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-xs font-black">06</span>
        <h2 className="text-xl font-black sm:text-2xl">Customer payment</h2>
      </div>
      <p className="mt-3 text-sm leading-6 text-gray-600">Send a secure PayPal/card checkout link or record the exact cash received. Card details are never visible to you or THEVULGO.</p>
      {paid ? (
        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 font-black text-emerald-800"><CheckCircle2 className="h-5 w-5" /> Customer payment verified</div>
      ) : (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <button disabled={busy || !accepted} onClick={() => void action({ action: "send_customer_link" })} className="flex min-h-16 items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-4 font-black disabled:opacity-40"><Mail className="h-5 w-5" /> Email payment link</button>
          <button disabled={busy || !accepted} onClick={() => setShowCash((value) => !value)} className="flex min-h-16 items-center justify-center gap-2 rounded-2xl border border-gray-300 px-4 font-black disabled:opacity-40"><Banknote className="h-5 w-5" /> Record cash</button>
        </div>
      )}
      {showCash && !state.cash ? (
        <div className="mt-4 rounded-2xl border border-yellow-300 bg-yellow-50 p-4">
          <label className="text-sm font-black">Exact cash received (EUR)<input type="number" min="0.01" step="0.01" value={cashAmount} onChange={(event) => setCashAmount(event.target.value)} className="mt-2 min-h-12 w-full rounded-xl border bg-white px-4 text-lg" /></label>
          <p className="mt-3 text-sm leading-6 text-gray-700">Keep your 50% share. Send the company&apos;s 50% through the secure PayPal link within 24 hours. An unpaid cash balance can place Monday payouts on hold.</p>
          <button disabled={busy || Number(cashAmount) <= 0} onClick={() => void action({ action: "record_cash", cashAmount: Number(cashAmount) })} className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-black px-4 font-black text-white disabled:opacity-40">{busy ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <Banknote className="h-5 w-5" />} Confirm cash received</button>
        </div>
      ) : null}
      {state.cash ? (
        <div className="mt-4 rounded-2xl bg-[#f5f5f1] p-4">
          <div className="grid grid-cols-2 gap-3 text-sm"><div><span className="text-gray-500">Cash received</span><b className="mt-1 block text-lg">{money(Number(state.cash.cash_amount))}</b></div><div><span className="text-gray-500">Company share</span><b className="mt-1 block text-lg">{money(Number(state.cash.company_amount_due))}</b></div></div>
          <p className="mt-3 text-xs font-bold uppercase text-gray-500">Status: {state.cash.remittance_status.replaceAll("_", " ")} · due {new Date(state.cash.remittance_due_at).toLocaleString("en-IE", { timeZone: "Europe/Madrid" })}</p>
          {remittance?.status === "completed" ? <div className="mt-3 rounded-xl bg-emerald-100 p-3 font-black text-emerald-800">Company share received</div> : remittanceUrl ? <a href={remittanceUrl} target="_blank" rel="noreferrer" className="mt-3 flex min-h-14 items-center justify-center rounded-xl bg-yellow-400 px-4 text-center font-black">Send company share securely</a> : <button disabled={busy} onClick={() => void action({ action: "create_cash_remittance_link" })} className="mt-3 min-h-14 w-full rounded-xl bg-yellow-400 px-4 font-black disabled:opacity-40">Open secure remittance link</button>}
        </div>
      ) : null}
      {message ? <p className={`mt-4 rounded-2xl p-4 text-sm font-bold ${message.includes("failed") || message.includes("Could") ? "bg-red-50 text-red-700" : "bg-emerald-50 text-emerald-800"}`}>{message}</p> : null}
      {busy ? <p className="mt-3 flex items-center gap-2 text-sm font-bold text-gray-500"><LoaderCircle className="h-4 w-4 animate-spin" /> Saving securely…</p> : null}
      <div className="mt-4 flex items-center gap-2 text-xs text-gray-500"><CreditCard className="h-4 w-4" /> Online earnings are recorded for Monday payout review.</div>
    </section>
  );
}
