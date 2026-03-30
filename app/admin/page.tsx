"use client";

import { formatMadridDateTime } from "@/lib/time";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

type OrderStatus = "new" | "in_progress" | "done";

type ServiceItem = {
  label?: string;
  qty?: number;
  price?: number;
  subtotal?: number;
};

type Order = {
  id: string;
  order_number: number | null;
  full_name: string;
  phone: string;
  email: string;
  city: string;
  area: string;
  address: string;
  preferred_date: string | null;
  preferred_time: string;
  subtotal: number;
  iva: number;
  total: number;
  status: OrderStatus;
  email_sent: boolean;
  reminder_sent: boolean;
  completed_email_sent: boolean;
  category?: string;
  services?: ServiceItem[];
  notes?: string;
  internal_notes?: string;
  scheduled_at?: string;
  referral_code?: string | null;
  completed_at?: string | null;
};

export default function AdminPage() {
  const [internalNotes, setInternalNotes] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [selected, setSelected] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCompleting, setIsCompleting] = useState(false);
  const [showCompleteConfirm, setShowCompleteConfirm] = useState(false);

  const loadOrders = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("LOAD ORDERS ERROR:", error);
      setLoading(false);
      return;
    }

    setOrders((data as Order[]) || []);
    setLoading(false);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  useEffect(() => {
    if (selected) {
      setInternalNotes(selected.internal_notes || "");
    }
  }, [selected]);

  const metrics = useMemo(() => {
    const totalOrders = orders.length;

    const grossRevenue = orders.reduce(
      (sum, o) => sum + Number(o.total || 0),
      0
    );

    const ivaReserve = orders.reduce(
      (sum, o) => sum + Number(o.iva || 0),
      0
    );

    const netRevenue = orders.reduce(
      (sum, o) => sum + Number(o.subtotal || 0),
      0
    );

    const newCount = orders.filter((o) => o.status === "new").length;
    const progress = orders.filter((o) => o.status === "in_progress").length;
    const done = orders.filter((o) => o.status === "done").length;

    return {
      totalOrders,
      grossRevenue,
      ivaReserve,
      netRevenue,
      newCount,
      progress,
      done,
    };
  }, [orders]);

  const updateStatus = async (id: string, status: OrderStatus) => {
    const { error } = await supabase
      .from("orders")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("UPDATE STATUS ERROR:", error);
      return;
    }

    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status } : o))
    );

    if (selected?.id === id) {
      setSelected((prev) => (prev ? { ...prev, status } : prev));
    }
  };

  const saveInternalNotes = async () => {
    if (!selected) return;

    const { error } = await supabase
      .from("orders")
      .update({ internal_notes: internalNotes })
      .eq("id", selected.id);

    if (error) {
      console.error("SAVE INTERNAL NOTES ERROR:", error);
      return;
    }

    setOrders((prev) =>
      prev.map((o) =>
        o.id === selected.id ? { ...o, internal_notes: internalNotes } : o
      )
    );

    setSelected((prev) =>
      prev ? { ...prev, internal_notes: internalNotes } : prev
    );
  };

  const completeOrder = async () => {
    if (!selected) return;

    try {
      setIsCompleting(true);

      const response = await fetch("/api/orders/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: selected.id,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to complete order");
      }

      setOrders((prev) =>
  prev.map((o) =>
    o.id === selected.id
      ? {
          ...o,
          status: "done",
          completed_email_sent: true,
          referral_code: result.referralCode || o.referral_code,
          completed_at: result.completedAt || o.completed_at,
        }
      : o
  )
);

setSelected((prev) =>
  prev
    ? {
        ...prev,
        status: "done",
        completed_email_sent: true,
        referral_code: result.referralCode || prev.referral_code,
        completed_at: result.completedAt || prev.completed_at,
      }
    : prev
);

      setShowCompleteConfirm(false);
    } catch (error) {
      console.error("COMPLETE ORDER ERROR:", error);
    } finally {
      setIsCompleting(false);
    }
  };

  const formatOrderId = (order: Order) => {
    if (order.order_number) {
      return `TVG-${String(order.order_number).padStart(4, "0")}`;
    }
    return order.id.slice(0, 8).toUpperCase();
  };

  const formatStatusLabel = (status: OrderStatus) => {
    if (status === "new") return "NEW";
    if (status === "in_progress") return "IN PROGRESS";
    return "DONE";
  };

  return (
    <div className="min-h-screen bg-white p-6 text-black">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-7">
          <MetricCard
            title="Gross booked"
            value={`€${metrics.grossRevenue.toFixed(2)}`}
            subtitle="Total including IVA"
          />

          <MetricCard
            title="IVA reserve"
            value={`€${metrics.ivaReserve.toFixed(2)}`}
            subtitle="Set aside for tax"
          />

          <MetricCard
            title="Net revenue"
            value={`€${metrics.netRevenue.toFixed(2)}`}
            subtitle="Before other expenses"
          />

          <MetricCard
            title="Orders"
            value={metrics.totalOrders}
            subtitle="All orders"
          />

          <StatusCard title="New" value={metrics.newCount} />
          <StatusCard title="In Progress" value={metrics.progress} />
          <StatusCard title="Done" value={metrics.done} />
        </div>

        <div className="overflow-hidden rounded-[28px] border border-yellow-400 bg-white shadow-xl">
          <div className="border-b border-yellow-400 bg-gradient-to-r from-yellow-50 via-[#fffdf4] to-white px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500">
                  Orders
                </p>
                <h2 className="mt-1 text-xl font-extrabold tracking-tight text-black">
                  Current booking list
                </h2>
              </div>

              <div className="rounded-2xl border border-yellow-400 bg-yellow-50 px-4 py-2 text-sm font-semibold text-black shadow-sm">
                {orders.length} active
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-[#fffdf4]">
                <tr className="border-b border-yellow-400">
                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    ID
                  </th>
                  <th className="px-4 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Client
                  </th>
                  <th className="px-4 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Schedule
                  </th>
                  <th className="px-4 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Pricing
                  </th>
                  <th className="px-4 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Status
                  </th>
                  <th className="px-4 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Emails
                  </th>
                  <th className="px-6 py-4 text-right text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} className="p-6 text-center text-gray-500">
                      Loading orders...
                    </td>
                  </tr>
                ) : orders.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-6 text-center text-gray-500">
                      No orders yet
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-gray-100 transition-colors duration-150 hover:bg-yellow-50/40"
                    >
                      <td className="px-6 py-5 align-top">
                        <div className="font-extrabold text-black">
                          {formatOrderId(order)}
                        </div>
                      </td>

                      <td className="px-4 py-5 align-top">
                        <div className="flex flex-col">
                          <span className="font-bold text-black">
                            {order.full_name}
                          </span>
                          <span className="mt-1 text-xs text-gray-500">
                            {order.city || "—"}, {order.area || "—"}
                          </span>
                        </div>
                      </td>

                      <td className="px-4 py-5 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-black">
                            {order.scheduled_at
                              ? formatMadridDateTime(order.scheduled_at).full
                              : "—"}
                          </span>
                        </div>
                      </td>

                      <td className="px-4 py-5 align-top">
                        <div className="flex flex-col">
                          <span className="text-base font-extrabold text-black">
                            €{Number(order.total || 0).toFixed(2)}
                          </span>
                          <span className="mt-1 text-xs text-gray-500">
                            Net €{Number(order.subtotal || 0).toFixed(2)}
                          </span>
                        </div>
                      </td>

                      <td className="px-4 py-5 align-top">
                        <select
                          value={order.status}
                          onChange={(e) =>
                            updateStatus(
                              order.id,
                              e.target.value as OrderStatus
                            )
                          }
                          className="min-w-[140px] rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-black outline-none transition focus:border-yellow-400"
                        >
                          <option value="new">NEW</option>
                          <option value="in_progress">IN PROGRESS</option>
                          <option value="done">DONE</option>
                        </select>
                      </td>

                      <td className="px-4 py-5 align-top">
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center gap-2">
                            <span>📩</span>
                            <span
                              className={
                                order.email_sent
                                  ? "font-semibold text-green-600"
                                  : "font-semibold text-red-500"
                              }
                            >
                              {order.email_sent ? "Sent" : "No"}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span>⏰</span>
                            <span
                              className={
                                order.reminder_sent
                                  ? "font-semibold text-green-600"
                                  : "font-semibold text-red-500"
                              }
                            >
                              {order.reminder_sent ? "Sent" : "No"}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span>🧾</span>
                            <span
                              className={
                                order.completed_email_sent
                                  ? "font-semibold text-green-600"
                                  : "font-semibold text-red-500"
                              }
                            >
                              {order.completed_email_sent ? "Sent" : "No"}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5 align-top text-right">
                        <button
                          onClick={() => setSelected(order)}
                          className="rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-extrabold text-black shadow-sm transition hover:scale-[1.03] hover:shadow-md"
                        >
                          Open
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
            <div className="w-full max-w-[95vw] sm:max-w-[760px] lg:max-w-[1120px] h-[90vh] flex flex-col rounded-3xl bg-white p-4 sm:p-5 lg:p-5 shadow-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Order details
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold text-black">
                    {selected.full_name}
                  </h2>
                </div>

                <div className="rounded-2xl border border-yellow-400 bg-yellow-50 px-3 py-2 text-sm font-bold text-black">
                  {formatStatusLabel(selected.status)}
                </div>
              </div>

              <div className="mt-5 flex-1 overflow-y-auto grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 pr-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-3 text-sm xl:col-span-2">
                  <div className="space-y-2">
                    <p>📞 {selected.phone || "—"}</p>
                    <p>📧 {selected.email || "—"}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Order
                  </p>
                  <p className="mt-2 font-bold text-black">
                    {formatOrderId(selected)}
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Address
                  </p>
                  <p className="mt-2 text-sm text-black">
                    {selected.city || "—"}, {selected.area || "—"},{" "}
                    {selected.address || "—"}
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Schedule
                  </p>
                  <p className="mt-2 text-sm text-black">
                    {selected.scheduled_at
                      ? formatMadridDateTime(selected.scheduled_at).full
                      : "—"}
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Category
                  </p>
                  <p className="mt-2 text-sm font-semibold text-black">
                    {selected.category || "—"}
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Referral code
                  </p>
                  <p className="mt-2 text-sm font-extrabold text-black">
                    {selected.referral_code || "Not generated yet"}
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-3">
  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
    Completed at
  </p>
  <p className="mt-2 text-sm font-semibold text-black">
    {selected.completed_at
      ? formatMadridDateTime(selected.completed_at).full
      : "Not completed yet"}
  </p>
</div>

                <div className="rounded-2xl border border-gray-200 bg-white p-3 xl:col-span-2">
  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
    Services
  </p>

  <div className="mt-2 max-h-[260px] overflow-y-auto pr-2 space-y-1">
    {Array.isArray(selected.services) && selected.services.length > 0 ? (
      selected.services.map((item: ServiceItem, index: number) => (
        <div
          key={index}
          className="flex items-start justify-between gap-3 border-b border-gray-100 py-2 last:border-b-0"
        >
          <div className="flex min-w-0 flex-col">
            <span className="text-sm font-semibold text-black break-words">
              {item.label}
            </span>
            <span className="text-xs text-gray-500">
              {item.qty} × €{item.price}
            </span>
          </div>

          <span className="shrink-0 text-sm font-bold text-black">
            €{Number(item.subtotal || 0).toFixed(2)}
          </span>
        </div>
      ))
    ) : (
      <p className="text-sm text-gray-500">No services listed</p>
    )}
  </div>
</div>

                <div className="rounded-2xl border border-gray-200 bg-white p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Client notes
                  </p>
                  <p className="mt-2 whitespace-pre-line text-sm text-black">
                    {selected.notes || "No client notes"}
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-3 xl:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Internal notes
                  </p>

                  <textarea
                    value={internalNotes}
                    onChange={(e) => setInternalNotes(e.target.value)}
                    placeholder="What to bring, tools, wall type, access notes, materials..."
                    className="mt-2 min-h-[72px] w-full resize-none rounded-xl border border-gray-300 px-3 py-2 text-sm text-black outline-none transition focus:border-yellow-400"
                  />

                  <button
                    onClick={saveInternalNotes}
                    className="mt-2 rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-extrabold text-black shadow-sm transition hover:scale-[1.02]"
                  >
                    Save internal notes
                  </button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 xl:grid-cols-[1.4fr_0.9fr]">
                <div className="rounded-2xl border border-yellow-400 bg-yellow-50/60 p-4">
                  <p className="font-semibold text-black">Pricing</p>

                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Net revenue</span>
                      <span className="font-semibold text-black">
                        €{Number(selected.subtotal || 0).toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">IVA reserve</span>
                      <span className="font-semibold text-black">
                        €{Number(selected.iva || 0).toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-t border-yellow-400 pt-2">
                      <span className="font-bold text-black">Gross total</span>
                      <span className="text-base font-extrabold text-black">
                        €{Number(selected.total || 0).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Actions
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(
                          `${selected.city || ""}, ${selected.area || ""}, ${selected.address || ""}`
                        )
                      }
                      className="rounded-2xl border border-gray-300 px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-50"
                    >
                      Copy address
                    </button>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        `${selected.city || ""}, ${selected.area || ""}, ${selected.address || ""}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-extrabold text-black transition hover:scale-[1.02]"
                    >
                      Open map
                    </a>

                    <a
                      href={`tel:${selected.phone}`}
                      className="rounded-2xl border border-gray-300 px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-50"
                    >
                      Call
                    </a>

                    {selected.status !== "done" && (
                      <button
                        onClick={() => setShowCompleteConfirm(true)}
                        className="rounded-2xl bg-black px-4 py-2 text-sm font-extrabold text-white transition hover:scale-[1.02]"
                      >
                        Mark as done
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() => setSelected(null)}
                    className="mt-4 w-full rounded-2xl border border-gray-300 py-3 text-sm font-bold text-black transition hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showCompleteConfirm && selected && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                Confirm action
              </p>

              <h3 className="mt-2 text-2xl font-extrabold text-black">
                Complete this order?
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                This will:
              </p>

              <div className="mt-3 space-y-2 text-sm text-black">
                <p>• Change status to Done</p>
                <p>• Send completed email to the client</p>
                <p>• Generate referral code</p>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setShowCompleteConfirm(false)}
                  disabled={isCompleting}
                  className="flex-1 rounded-2xl border border-gray-300 bg-white py-3 text-sm font-bold text-black transition hover:bg-gray-50 disabled:opacity-60"
                >
                  Cancel
                </button>

                <button
                  onClick={completeOrder}
                  disabled={isCompleting}
                  className="flex-1 rounded-2xl bg-black py-3 text-sm font-extrabold text-white transition hover:opacity-90 disabled:opacity-60"
                >
                  {isCompleting ? "Completing..." : "Yes, complete"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: React.ReactNode;
  subtitle: string;
}) {
  return (
    <div className="rounded-3xl border border-yellow-400 bg-white p-5 shadow-md transition-all duration-200 hover:-translate-y-[1px] hover:shadow-xl">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
        {title}
      </p>

      <div className="mt-3 text-4xl font-extrabold tracking-tight text-black">
        {value}
      </div>

      <p className="mt-3 text-xs leading-5 text-gray-500">{subtitle}</p>
    </div>
  );
}

function StatusCard({
  title,
  value,
}: {
  title: string;
  value: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-yellow-400 bg-[#fffdf6] p-5 shadow-md transition-all duration-200 hover:-translate-y-[1px] hover:shadow-xl">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
        {title}
      </p>
      <div className="mt-3 text-4xl font-extrabold tracking-tight text-black">
        {value}
      </div>
    </div>
  );
}