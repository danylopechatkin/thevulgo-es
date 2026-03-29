"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

type OrderStatus = "new" | "in_progress" | "done";

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
  total: number;
  status: OrderStatus;
  email_sent: boolean;
  reminder_sent: boolean;
  completed_email_sent: boolean;
};

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selected, setSelected] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

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

    setOrders(data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const metrics = useMemo(() => {
    const total = orders.length;
    const revenue = orders.reduce((sum, o) => sum + Number(o.total || 0), 0);

    const newCount = orders.filter((o) => o.status === "new").length;
    const progress = orders.filter((o) => o.status === "in_progress").length;
    const done = orders.filter((o) => o.status === "done").length;

    return { total, revenue, newCount, progress, done };
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
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          <Card title="Revenue" value={`€${metrics.revenue.toFixed(2)}`} />
          <Card title="Orders" value={metrics.total} />
          <Card title="New" value={metrics.newCount} />
          <Card title="In Progress" value={metrics.progress} />
          <Card title="Done" value={metrics.done} />
        </div>

        <div className="overflow-hidden rounded-2xl border border-yellow-400">
          <table className="w-full text-sm">
            <thead className="bg-yellow-50">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="text-left">Name</th>
                <th className="text-left">Time</th>
                <th className="text-left">Total</th>
                <th className="text-left">Status</th>
                <th className="text-left">Emails</th>
                <th className="text-left"></th>
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
                  <tr key={order.id} className="border-t">
                    <td className="p-3">{formatOrderId(order)}</td>
                    <td>{order.full_name}</td>
                    <td>
                      {order.preferred_date || "—"}{" "}
                      {order.preferred_time || ""}
                    </td>
                    <td>€{Number(order.total || 0).toFixed(2)}</td>

                    <td>
                      <select
                        value={order.status}
                        onChange={(e) =>
                          updateStatus(order.id, e.target.value as OrderStatus)
                        }
                        className="rounded border px-2 py-1"
                      >
                        <option value="new">NEW</option>
                        <option value="in_progress">IN PROGRESS</option>
                        <option value="done">DONE</option>
                      </select>
                    </td>

                    <td className="text-xs">
                      <div>📩 {order.email_sent ? "✔" : "❌"}</div>
                      <div>⏰ {order.reminder_sent ? "✔" : "❌"}</div>
                      <div>🧾 {order.completed_email_sent ? "✔" : "❌"}</div>
                    </td>

                    <td>
                      <button
                        onClick={() => setSelected(order)}
                        className="rounded bg-yellow-400 px-3 py-1"
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

        {selected && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[420px] space-y-4 rounded-2xl bg-white p-6">
              <h2 className="text-xl font-bold">{selected.full_name}</h2>

              <div className="text-sm">
                <p>📞 {selected.phone || "—"}</p>
                <p>📧 {selected.email || "—"}</p>
              </div>

              <div>
                <p className="font-semibold">Order:</p>
                <p>{formatOrderId(selected)}</p>
              </div>

              <div>
                <p className="font-semibold">Status:</p>
                <p>{formatStatusLabel(selected.status)}</p>
              </div>

              <div>
                <p className="font-semibold">Address:</p>
                <p>
                  {selected.city || "—"}, {selected.area || "—"},{" "}
                  {selected.address || "—"}
                </p>
              </div>

              <div>
                <p className="font-semibold">Schedule:</p>
                <p>
                  {selected.preferred_date || "—"}{" "}
                  {selected.preferred_time || ""}
                </p>
              </div>

              <div>
                <p className="font-semibold">Total:</p>
                <p>€{Number(selected.total || 0).toFixed(2)}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `${selected.city || ""}, ${selected.area || ""}, ${selected.address || ""}`
                    )
                  }
                  className="rounded border px-3 py-2"
                >
                  Copy address
                </button>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${selected.city || ""}, ${selected.area || ""}, ${selected.address || ""}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-yellow-400 px-3 py-2"
                >
                  Open map
                </a>

                <a
                  href={`tel:${selected.phone}`}
                  className="rounded border px-3 py-2"
                >
                  Call
                </a>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-4 w-full rounded border py-2"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Card({ title, value }: { title: string; value: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-yellow-400 p-4 shadow-sm">
      <div className="text-xs text-gray-500">{title}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}