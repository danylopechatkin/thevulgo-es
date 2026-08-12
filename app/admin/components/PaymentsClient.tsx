"use client";

import {
  Banknote,
  CheckCircle2,
  ChevronRight,
  Clock3,
  CreditCard,
  LoaderCircle,
  RefreshCw,
  WalletCards,
  X,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import AdminNav from "./AdminNav";
import OrderPaymentPanel from "./OrderPaymentPanel";

type RelatedOrder = {
  id?: string;
  order_number?: number;
  full_name?: string;
  category?: string;
  email?: string | null;
  total?: number;
  paid_amount?: number | null;
  payment_status?: string | null;
};
type RelatedWorker = { full_name?: string; email?: string };
type PaymentRequest = {
  id: string;
  purpose: string;
  amount: number;
  status: string;
  created_at: string;
  completed_at?: string | null;
  email_sent_at?: string | null;
  email_delivered_at?: string | null;
  email_opened_at?: string | null;
  email_clicked_at?: string | null;
  orders?: RelatedOrder | RelatedOrder[] | null;
};
type LedgerEntry = {
  id: string;
  worker_id: string;
  entry_type: string;
  amount: number;
  status: string;
  created_at: string;
  worker_profiles?: RelatedWorker | RelatedWorker[] | null;
  orders?: RelatedOrder | RelatedOrder[] | null;
};
type CashRecord = {
  assignment_id: string;
  cash_amount: number;
  company_amount_due?: number | null;
  remittance_status: string;
  remittance_due_at: string;
  amount_remitted?: number | null;
  worker_assignments?: {
    worker_profiles?: RelatedWorker | RelatedWorker[] | null;
    orders?: RelatedOrder | RelatedOrder[] | null;
  } | Array<{
    worker_profiles?: RelatedWorker | RelatedWorker[] | null;
    orders?: RelatedOrder | RelatedOrder[] | null;
  }> | null;
};
type PaymentsData = {
  requests: PaymentRequest[];
  ledger: LedgerEntry[];
  cash: CashRecord[];
};

const money = (value: number) =>
  new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(Number(value || 0));

const first = <T,>(value: T | T[] | null | undefined) =>
  Array.isArray(value) ? value[0] : value;

export default function PaymentsClient() {
  const [data, setData] = useState<PaymentsData>({
    requests: [],
    ledger: [],
    cash: [],
  });
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [loadedAt, setLoadedAt] = useState(0);
  const [selectedRequest, setSelectedRequest] = useState<PaymentRequest | null>(
    null,
  );

  const load = useCallback(async () => {
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch("/api/admin/payments", { cache: "no-store" });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(body.error || "Could not load payments");
      }
      setData(body);
      setLoadedAt(Date.now());
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Could not load payments",
      );
    } finally {
      setBusy(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => void load(), 0);
    return () => window.clearTimeout(timer);
  }, [load]);

  const stats = useMemo(
    () => ({
      received: data.requests
        .filter((item) => item.status === "completed")
        .reduce((sum, item) => sum + Number(item.amount), 0),
      pending: data.requests
        .filter((item) => ["created", "approved", "pending"].includes(item.status))
        .reduce((sum, item) => sum + Number(item.amount), 0),
      payroll: data.ledger
        .filter(
          (item) =>
            item.entry_type === "online_job_earning" && item.status === "pending",
        )
        .reduce((sum, item) => sum + Number(item.amount), 0),
      cashDue: data.cash
        .filter((item) => item.remittance_status !== "remitted")
        .reduce((sum, item) => sum + Number(item.company_amount_due || 0), 0),
    }),
    [data],
  );

  const payrollGroups = useMemo(() => {
    const groups = new Map<
      string,
      { worker: RelatedWorker; ids: string[]; amount: number; entries: number }
    >();
    data.ledger
      .filter(
        (entry) =>
          entry.entry_type === "online_job_earning" && entry.status === "pending",
      )
      .forEach((entry) => {
        const worker = first(entry.worker_profiles) || {};
        const current = groups.get(entry.worker_id) || {
          worker,
          ids: [],
          amount: 0,
          entries: 0,
        };
        current.ids.push(entry.id);
        current.amount += Number(entry.amount);
        current.entries += 1;
        groups.set(entry.worker_id, current);
      });
    return [...groups.entries()];
  }, [data.ledger]);

  async function markPaid(ids: string[]) {
    setBusy(true);
    setMessage("");
    const response = await fetch("/api/admin/payments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "mark_payout_paid", ledgerIds: ids }),
    });
    const body = await response.json();
    setBusy(false);
    if (!response.ok) return setMessage(body.error || "Payout could not be saved");
    setMessage("Monday payout marked as paid and saved in the financial ledger.");
    await load();
  }

  return (
    <main className="min-h-screen bg-[#f4f4f0] px-3 py-5 text-[#111] sm:px-6 sm:py-8">
      <div className="mx-auto max-w-7xl space-y-5">
        <AdminNav />
        <section className="overflow-hidden rounded-[2rem] bg-[#111] p-7 text-white shadow-xl sm:p-10">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[.16em] text-yellow-400">
            <WalletCards className="h-5 w-5" /> Spain operations finance
          </div>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            Payments command centre
          </h1>
          <p className="mt-3 max-w-3xl text-gray-400">
            Verified PayPal captures, cash remittances and Monday contractor
            payouts in one audit-ready view.
          </p>
        </section>

        {message ? (
          <p className="rounded-2xl bg-white p-4 font-bold shadow-sm">{message}</p>
        ) : null}

        <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            ["Verified received", stats.received, CheckCircle2],
            ["Payment links open", stats.pending, CreditCard],
            ["Monday payroll", stats.payroll, Clock3],
            ["Cash due to company", stats.cashDue, Banknote],
          ].map(([label, value, Icon], index) => {
            const CardIcon = Icon as typeof CheckCircle2;
            return (
              <article
                key={String(label)}
                className={`rounded-[1.7rem] p-5 shadow-sm ring-1 ring-black/5 ${index === 0 ? "bg-yellow-400" : "bg-white"}`}
              >
                <CardIcon className="h-6 w-6" />
                <p className="mt-5 text-[10px] font-black uppercase tracking-[.13em] text-gray-600">
                  {String(label)}
                </p>
                <strong className="mt-1 block text-2xl font-black sm:text-3xl">
                  {money(Number(value))}
                </strong>
              </article>
            );
          })}
        </section>

        <section className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[.15em] text-yellow-700">
                Weekly contractor payouts
              </p>
              <h2 className="mt-1 text-2xl font-black">Ready for Monday</h2>
            </div>
            <span className="rounded-full bg-[#f4f4f0] px-4 py-2 text-xs font-black uppercase text-gray-600">
              {payrollGroups.length} workers
            </span>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {payrollGroups.length ? (
              payrollGroups.map(([workerId, group]) => (
                <article key={workerId} className="rounded-3xl bg-[#f7f7f4] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <b className="text-lg">{group.worker.full_name || "Contractor"}</b>
                      <p className="text-sm text-gray-500">{group.worker.email}</p>
                    </div>
                    <strong className="text-xl">{money(group.amount)}</strong>
                  </div>
                  <p className="mt-3 text-xs font-bold uppercase text-gray-500">
                    {group.entries} verified online job{group.entries === 1 ? "" : "s"}
                  </p>
                  <button
                    type="button"
                    disabled={busy}
                    onClick={() => void markPaid(group.ids)}
                    className="mt-4 min-h-12 w-full rounded-xl bg-black px-4 font-black text-white disabled:opacity-50"
                  >
                    Mark Monday payout paid
                  </button>
                </article>
              ))
            ) : (
              <p className="rounded-2xl border border-dashed p-8 text-center text-gray-500 md:col-span-2">
                No online contractor earnings are waiting for payout.
              </p>
            )}
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[.15em] text-yellow-700">
              Cash control
            </p>
            <h2 className="mt-1 text-2xl font-black">24-hour remittances</h2>
          </div>
          <div className="mt-6 grid gap-3">
            {data.cash.length ? (
              data.cash.map((record) => {
                const assignment = first(record.worker_assignments);
                const worker = first(assignment?.worker_profiles);
                const order = first(assignment?.orders);
                const overdue =
                  record.remittance_status !== "remitted" &&
                  new Date(record.remittance_due_at).getTime() < loadedAt;
                return (
                  <article
                    key={record.assignment_id}
                    className={`grid gap-3 rounded-2xl p-4 sm:grid-cols-[1fr_auto_auto] sm:items-center ${overdue ? "bg-red-50 ring-1 ring-red-200" : "bg-[#f7f7f4]"}`}
                  >
                    <div>
                      <b>
                        TVG-ES-{String(order?.order_number || "").padStart(5, "0")}
                      </b>
                      <p className="text-sm text-gray-500">
                        {worker?.full_name || "Contractor"} · cash {money(record.cash_amount)}
                      </p>
                    </div>
                    <strong>Due {money(Number(record.company_amount_due || 0))}</strong>
                    <span className={`rounded-full px-3 py-1 text-center text-xs font-black uppercase ${record.remittance_status === "remitted" ? "bg-emerald-100 text-emerald-800" : overdue ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-900"}`}>
                      {overdue ? "overdue" : record.remittance_status.replaceAll("_", " ")}
                    </span>
                  </article>
                );
              })
            ) : (
              <p className="rounded-2xl border border-dashed p-8 text-center text-gray-500">
                Cash collections will appear here.
              </p>
            )}
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[.15em] text-yellow-700">
                Transaction ledger
              </p>
              <h2 className="mt-1 text-2xl font-black">Payment activity</h2>
            </div>
            <button
              type="button"
              disabled={busy}
              onClick={() => void load()}
              className="flex min-h-11 items-center gap-2 rounded-xl border px-4 font-black disabled:opacity-50"
            >
              {busy ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
              Refresh
            </button>
          </div>
          <div className="mt-6 grid gap-3">
            {data.requests.length ? (
              data.requests.map((item) => {
                const order = first(item.orders);
                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setSelectedRequest(item)}
                    className="grid w-full gap-3 rounded-2xl bg-[#f7f7f4] p-4 text-left transition hover:bg-yellow-50 hover:ring-1 hover:ring-yellow-300 sm:grid-cols-[1fr_auto_auto_auto] sm:items-center"
                  >
                    <div>
                      <b>
                        TVG-ES-{String(order?.order_number || "").padStart(5, "0")}
                      </b>
                      <p className="text-sm text-gray-500">
                        {item.purpose.replaceAll("_", " ")} · {order?.full_name}
                      </p>
                    </div>
                    <strong>{money(item.amount)}</strong>
                    <span className={`rounded-full px-3 py-1 text-center text-xs font-black uppercase ${item.status === "completed" ? "bg-emerald-100 text-emerald-800" : item.status === "failed" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-900"}`}>
                      {item.status}
                    </span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                );
              })
            ) : (
              <p className="rounded-2xl border border-dashed p-8 text-center text-gray-500">
                Payment transactions will appear here.
              </p>
            )}
          </div>
        </section>
      </div>

      {selectedRequest ? (() => {
        const order = first(selectedRequest.orders);
        return (
          <div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/65 p-0 backdrop-blur-sm sm:items-center sm:p-5"
            role="dialog"
            aria-modal="true"
            aria-label="Payment details"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedRequest(null);
            }}
          >
            <section className="max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-t-[2rem] bg-[#f4f4f0] shadow-2xl sm:rounded-[2rem]">
              <header className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-[2rem] bg-[#111] p-6 text-white sm:p-8">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.15em] text-yellow-400">
                    Payment record
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    TVG-ES-{String(order?.order_number || "").padStart(5, "0")}
                  </h2>
                  <p className="mt-1 text-sm text-gray-400">
                    {order?.full_name || "Customer"} · {money(selectedRequest.amount)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedRequest(null)}
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/25 bg-white/5"
                  aria-label="Close payment details"
                >
                  <X className="h-5 w-5" />
                </button>
              </header>

              <div className="space-y-4 p-4 sm:p-7">
                <section className="grid grid-cols-2 gap-3 rounded-[1.5rem] bg-white p-4 shadow-sm sm:grid-cols-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[.12em] text-gray-500">Status</p>
                    <b className="mt-1 block capitalize">{selectedRequest.status}</b>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[.12em] text-gray-500">Purpose</p>
                    <b className="mt-1 block capitalize">{selectedRequest.purpose.replaceAll("_", " ")}</b>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[.12em] text-gray-500">Customer email</p>
                    <b className="mt-1 block break-all text-sm">{order?.email || "Not recorded"}</b>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[.12em] text-gray-500">Link created</p>
                    <b className="mt-1 block text-sm">{new Date(selectedRequest.created_at).toLocaleString("en-IE", { timeZone: "Europe/Madrid" })}</b>
                  </div>
                </section>

                {order?.id ? (
                  <OrderPaymentPanel
                    orderId={order.id}
                    paymentStatus={order.payment_status}
                    paidAmount={order.paid_amount}
                  />
                ) : (
                  <p className="rounded-2xl bg-red-50 p-4 font-bold text-red-700">
                    This payment is not connected to an available order.
                  </p>
                )}
              </div>
            </section>
          </div>
        );
      })() : null}
    </main>
  );
}
