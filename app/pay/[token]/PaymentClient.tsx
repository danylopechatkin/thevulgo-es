"use client";

import { CheckCircle2, CreditCard, LoaderCircle, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function PaymentClient({
  token,
  amount,
  orderLabel,
  completed,
  status,
}: {
  token: string;
  amount: number;
  orderLabel: string;
  completed: boolean;
  status?: string;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const success = completed || status === "success";

  useEffect(() => {
    void fetch("/api/payments/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
      keepalive: true,
    }).catch(() => undefined);
  }, [token]);

  async function pay() {
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/paypal/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Payment could not start");
      window.location.assign(body.approvalUrl);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Payment could not start");
      setBusy(false);
    }
  }

  if (success)
    return (
      <div className="text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-600" />
        <h1 className="mt-5 text-4xl font-black">Payment received</h1>
        <p className="mt-3 text-gray-600">
          {orderLabel} has been securely verified. A receipt was emailed and
          THEVULGO was notified.
        </p>
        <div className="mt-6 rounded-3xl bg-emerald-50 p-5 text-2xl font-black text-emerald-800">
          C${amount.toFixed(2)} paid
        </div>
      </div>
    );

  return (
    <div>
      <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[.16em] text-yellow-700">
        <ShieldCheck className="h-5 w-5" /> Secure THEVULGO payment
      </div>
      <h1 className="mt-5 text-4xl font-black">Complete your payment</h1>
      <p className="mt-3 leading-7 text-gray-600">
        You will continue to PayPal&apos;s secure hosted checkout. PayPal may
        offer PayPal or an eligible debit or credit card option.
      </p>
      <div className="mt-7 rounded-3xl bg-[#f5f5f1] p-5">
        <div className="flex justify-between gap-4 text-sm text-gray-500">
          <span>Order</span><b className="text-black">{orderLabel}</b>
        </div>
        <div className="mt-4 flex items-end justify-between gap-4 border-t border-black/10 pt-4">
          <b>Amount due</b><strong className="text-3xl">C${amount.toFixed(2)}</strong>
        </div>
      </div>
      {status === "cancelled" && (
        <p className="mt-4 rounded-2xl bg-yellow-50 p-4 text-sm font-bold text-yellow-900">
          Payment was cancelled. No charge was made.
        </p>
      )}
      {error && <p className="mt-4 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">{error}</p>}
      <button
        type="button"
        onClick={() => void pay()}
        disabled={busy}
        className="mt-6 flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-6 text-lg font-black shadow-lg transition hover:bg-yellow-300 disabled:opacity-60"
      >
        {busy ? <LoaderCircle className="h-6 w-6 animate-spin" /> : <CreditCard className="h-6 w-6" />}
        {busy ? "Opening secure checkout…" : `Pay C$${amount.toFixed(2)}`}
      </button>
      <p className="mt-5 text-center text-xs leading-5 text-gray-500">
        THEVULGO never receives or stores your card details. The amount is
        verified server-to-server before the order is marked paid.
      </p>
    </div>
  );
}
