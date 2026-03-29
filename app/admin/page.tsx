"use client";

import { useMemo, useState } from "react";

type OrderStatus = "NEW" | "IN_PROGRESS" | "DONE";

type Order = {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  area: string;
  address: string;
  date: string;
  time: string;
  total: number;
  status: OrderStatus;
  emailConfirmationSent: boolean;
  emailReminderSent: boolean;
  emailCompletedSent: boolean;
};

const MOCK_ORDERS: Order[] = [
  {
    id: "TVG-0001",
    fullName: "Juan Perez",
    phone: "+34600111222",
    email: "juan@mail.com",
    city: "Valencia",
    area: "Russafa",
    address: "Calle Cuba 12",
    date: "2026-04-01",
    time: "10:00",
    total: 79,
    status: "NEW",
    emailConfirmationSent: true,
    emailReminderSent: false,
    emailCompletedSent: false,
  },
  {
    id: "TVG-0002",
    fullName: "Maria Lopez",
    phone: "+34600999888",
    email: "maria@mail.com",
    city: "Valencia",
    area: "Benimaclet",
    address: "Av. Primado Reig 55",
    date: "2026-04-01",
    time: "14:00",
    total: 45,
    status: "IN_PROGRESS",
    emailConfirmationSent: true,
    emailReminderSent: true,
    emailCompletedSent: false,
  },
];

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
  const [selected, setSelected] = useState<Order | null>(null);

  // 💰 METRICS
  const metrics = useMemo(() => {
    const total = orders.length;

    const revenue = orders.reduce((sum, o) => sum + o.total, 0);

    const newCount = orders.filter(o => o.status === "NEW").length;
    const progress = orders.filter(o => o.status === "IN_PROGRESS").length;
    const done = orders.filter(o => o.status === "DONE").length;

    return { total, revenue, newCount, progress, done };
  }, [orders]);

  const updateStatus = (id: string, status: OrderStatus) => {
    setOrders(prev =>
      prev.map(o => (o.id === id ? { ...o, status } : o))
    );
  };

  return (
    <div className="min-h-screen bg-white p-6 text-black">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* 🔥 DASHBOARD */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card title="Revenue" value={`€${metrics.revenue}`} />
          <Card title="Orders" value={metrics.total} />
          <Card title="New" value={metrics.newCount} />
          <Card title="In Progress" value={metrics.progress} />
          <Card title="Done" value={metrics.done} />
        </div>

        {/* 📋 TABLE */}
        <div className="rounded-2xl border border-yellow-400 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-yellow-50">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th>Name</th>
                <th>Time</th>
                <th>Total</th>
                <th>Status</th>
                <th>Emails</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="border-t">
                  <td className="p-3">{order.id}</td>
                  <td>{order.fullName}</td>
                  <td>{order.date} {order.time}</td>
                  <td>€{order.total}</td>

                  {/* STATUS */}
                  <td>
                    <select
                      value={order.status}
                      onChange={e =>
                        updateStatus(order.id, e.target.value as OrderStatus)
                      }
                      className="border rounded px-2 py-1"
                    >
                      <option value="NEW">NEW</option>
                      <option value="IN_PROGRESS">IN PROGRESS</option>
                      <option value="DONE">DONE</option>
                    </select>
                  </td>

                  {/* EMAILS */}
                  <td className="text-xs">
                    <div>📩 {order.emailConfirmationSent ? "✔" : "❌"}</div>
                    <div>⏰ {order.emailReminderSent ? "✔" : "❌"}</div>
                    <div>🧾 {order.emailCompletedSent ? "✔" : "❌"}</div>
                  </td>

                  <td>
                    <button
                      onClick={() => setSelected(order)}
                      className="bg-yellow-400 px-3 py-1 rounded"
                    >
                      Open
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 🔥 MODAL */}
        {selected && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-2xl w-[400px] space-y-4">

              <h2 className="text-xl font-bold">{selected.fullName}</h2>

              <div className="text-sm">
                <p>📞 {selected.phone}</p>
                <p>📧 {selected.email}</p>
              </div>

              <div>
                <p className="font-semibold">Address:</p>
                <p>
                  {selected.city}, {selected.area}, {selected.address}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-2 flex-wrap">

                {/* COPY */}
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `${selected.city}, ${selected.area}, ${selected.address}`
                    )
                  }
                  className="border px-3 py-2 rounded"
                >
                  Copy address
                </button>

                {/* MAP */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${selected.city}, ${selected.area}, ${selected.address}`
                  )}`}
                  target="_blank"
                  className="bg-yellow-400 px-3 py-2 rounded"
                >
                  Open map
                </a>

                {/* CALL */}
                <a
                  href={`tel:${selected.phone}`}
                  className="border px-3 py-2 rounded"
                >
                  Call
                </a>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="w-full mt-4 border py-2 rounded"
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

// 🔥 CARD
function Card({ title, value }: { title: string; value: any }) {
  return (
    <div className="border border-yellow-400 rounded-2xl p-4 shadow-sm">
      <div className="text-xs text-gray-500">{title}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}