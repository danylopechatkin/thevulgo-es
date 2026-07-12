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

type ManualService = {
  label: string;
  price: number;
  qty: number;
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

const MANUAL_CATEGORIES = [
  "TV Mounting",
  "Electrical",
  "Plumbing",
  "Furniture Assembly",
  "Drywall",
  "Repairs",
  "Doors & Hardware",
  "Smart Home",
  "Kitchen",
  "Bathroom",
  "Move-In Setup",
  "Exterior",
];
const MADRID_TIME_ZONE = "Europe/Madrid";

function getMadridDateKey(date: Date) {

  return new Intl.DateTimeFormat("en-CA", {

    timeZone: MADRID_TIME_ZONE,

    year: "numeric",

    month: "2-digit",

    day: "2-digit",

  }).format(date);

}

function getMonthDate(monthKey: string) {

  const [year, month] = monthKey.split("-").map(Number);

  return new Date(Date.UTC(year, month - 1, 1, 12, 0, 0));

}

export default function AdminClient() {
  const [internalNotes, setInternalNotes] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [selected, setSelected] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  const [calendarMonth, setCalendarMonth] = useState(() =>
  getMadridDateKey(new Date()).slice(0, 7)
);

  const [isCompleting, setIsCompleting] = useState(false);
  const [showCompleteConfirm, setShowCompleteConfirm] = useState(false);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const [showManualForm, setShowManualForm] = useState(false);
  const [isCreatingManual, setIsCreatingManual] = useState(false);

  const [manualOrder, setManualOrder] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "Valencia",
    area: "",
    houseAddress: "",
    apartmentNumber: "",
    addressDetails: "",
    preferredDate: "",
    preferredTime: "",
    category: "Furniture Assembly",
    notes: "",
  });

  const [manualServices, setManualServices] = useState<ManualService[]>([
    {
      label: "Servicio manual",
      price: 49,
      qty: 1,
    },
  ]);

  const manualSubtotal = useMemo(() => {
    return manualServices.reduce(
      (sum, item) => sum + Number(item.price || 0) * Number(item.qty || 0),
      0
    );
  }, [manualServices]);

  const manualIva = Number((manualSubtotal * 0.21).toFixed(2));
  const manualTotal = Number((manualSubtotal + manualIva).toFixed(2));

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);

      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("LOGOUT ERROR:", error);
        return;
      }

      window.location.href = "/admin-login";
    } catch (err) {
      console.error("LOGOUT EXCEPTION:", err);
    } finally {
      setIsLoggingOut(false);
    }
  };

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

  const ordersByDate = useMemo(() => {
  const grouped = new Map<string, Order[]>();

  orders.forEach((order) => {
    if (!order.preferred_date) return;

    const existingOrders = grouped.get(order.preferred_date) || [];
    existingOrders.push(order);
    grouped.set(order.preferred_date, existingOrders);
  });

  grouped.forEach((dayOrders) => {
    dayOrders.sort((a, b) =>
      String(a.preferred_time || "").localeCompare(
        String(b.preferred_time || "")
      )
    );
  });

  return grouped;
}, [orders]);

const calendarDays = useMemo(() => {
  const [year, month] = calendarMonth.split("-").map(Number);

  const firstDayOfMonth = new Date(
    Date.UTC(year, month - 1, 1, 12, 0, 0)
  );

  const daysInMonth = new Date(
    Date.UTC(year, month, 0, 12, 0, 0)
  ).getUTCDate();

  // Переводим воскресенье = 0 в формат:
  // понедельник = 0, вторник = 1 ... воскресенье = 6
  const mondayBasedWeekday = (firstDayOfMonth.getUTCDay() + 6) % 7;

  // Количество ячеек: 35 или 42, чтобы показать полные недели
  const totalCalendarCells =
    Math.ceil((mondayBasedWeekday + daysInMonth) / 7) * 7;

  const calendarStartDate = new Date(
    Date.UTC(
      year,
      month - 1,
      1 - mondayBasedWeekday,
      12,
      0,
      0
    )
  );

  return Array.from({ length: totalCalendarCells }).map((_, index) => {
    const date = new Date(calendarStartDate);
    date.setUTCDate(calendarStartDate.getUTCDate() + index);

    const dateKey = getMadridDateKey(date);
    const cellMonthKey = dateKey.slice(0, 7);

    return {
      date,
      dateKey,
      isCurrentMonth: cellMonthKey === calendarMonth,
      isToday: dateKey === getMadridDateKey(new Date()),
      orders: ordersByDate.get(dateKey) || [],
    };
  });
}, [calendarMonth, ordersByDate]);

const calendarMonthTitle = useMemo(() => {
  return getMonthDate(calendarMonth).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}, [calendarMonth]);

const changeCalendarMonth = (offset: number) => {
  setCalendarMonth((currentMonth) => {
    const [year, month] = currentMonth.split("-").map(Number);

    const newDate = new Date(
      Date.UTC(year, month - 1 + offset, 1, 12, 0, 0)
    );

    return `${newDate.getUTCFullYear()}-${String(
      newDate.getUTCMonth() + 1
    ).padStart(2, "0")}`;
  });
};

const goToCurrentMonth = () => {
  setCalendarMonth(getMadridDateKey(new Date()).slice(0, 7));
};
  const createManualOrder = async () => {
    if (!manualOrder.fullName.trim()) {
      alert("Client name is required");
      return;
    }

    if (!manualOrder.phone.trim() && !manualOrder.email.trim()) {
      alert("Phone or email is required");
      return;
    }

    if (!manualOrder.area.trim()) {
      alert("Area is required");
      return;
    }

    if (!manualOrder.houseAddress.trim()) {
      alert("Address is required");
      return;
    }

    if (!manualOrder.preferredDate || !manualOrder.preferredTime) {
      alert("Date and time are required");
      return;
    }

    const cleanServices = manualServices
      .filter((s) => s.label.trim() && Number(s.price) > 0 && Number(s.qty) > 0)
      .map((s) => ({
        id: s.label.toLowerCase().replace(/\s+/g, "-"),
        label: s.label.trim(),
        price: Number(s.price),
        qty: Number(s.qty),
        subtotal: Number(s.price) * Number(s.qty),
        badge: "Manual",
      }));

    if (cleanServices.length === 0) {
      alert("Add at least one service");
      return;
    }

    const subtotal = Number(
      cleanServices.reduce((sum, item) => sum + item.subtotal, 0).toFixed(2)
    );

    const iva = Number((subtotal * 0.21).toFixed(2));
    const total = Number((subtotal + iva).toFixed(2));

    const scheduledAt = new Date(
      `${manualOrder.preferredDate}T${manualOrder.preferredTime}:00+02:00`
    ).toISOString();

    try {
      setIsCreatingManual(true);

      const { error } = await supabase.from("orders").insert([
        {
          full_name: manualOrder.fullName.trim(),
          email: manualOrder.email.trim(),
          phone: manualOrder.phone.trim(),
          city: manualOrder.city.trim() || "Valencia",
          area: manualOrder.area.trim(),
          address: manualOrder.houseAddress.trim(),
          apartment: manualOrder.apartmentNumber.trim(),
          address_details: manualOrder.addressDetails.trim(),
          category: manualOrder.category,
          services: cleanServices,
          subtotal,
          iva,
          total,
          status: "new",
          preferred_date: manualOrder.preferredDate,
          preferred_time: manualOrder.preferredTime,
          scheduled_at: scheduledAt,
          notes: manualOrder.notes.trim(),
          email_sent: false,
          reminder_sent: false,
          completed_email_sent: false,
          referral_code: null,
          locale: "es",
        },
      ]);

      if (error) {
        console.error("CREATE MANUAL ORDER ERROR:", error);
        alert("Error creating manual order");
        return;
      }

      setManualOrder({
        fullName: "",
        email: "",
        phone: "",
        city: "Valencia",
        area: "",
        houseAddress: "",
        apartmentNumber: "",
        addressDetails: "",
        preferredDate: "",
        preferredTime: "",
        category: "Furniture Assembly",
        notes: "",
      });

      setManualServices([
        {
          label: "Servicio manual",
          price: 49,
          qty: 1,
        },
      ]);

      setShowManualForm(false);
      await loadOrders();
    } finally {
      setIsCreatingManual(false);
    }
  };

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

  const openDeleteConfirm = (order: Order) => {
    setSelected(order);
    setShowDeleteConfirm(true);
  };

  const deleteOrder = async () => {
    if (!selected) return;

    try {
      setIsDeleting(true);

      const { error } = await supabase
        .from("orders")
        .delete()
        .eq("id", selected.id);

      if (error) {
        console.error("DELETE ORDER ERROR:", error);
        alert("Error deleting order");
        return;
      }

      setOrders((prev) => prev.filter((o) => o.id !== selected.id));
      setSelected(null);
      setShowDeleteConfirm(false);
    } catch (error) {
      console.error("DELETE ORDER EXCEPTION:", error);
    } finally {
      setIsDeleting(false);
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

  const updateOrderSchedule = async () => {
  if (!selected) return;

  const cleanDate = selected.preferred_date;
  const cleanTime = selected.preferred_time?.slice(0, 5);

  if (!cleanDate || !cleanTime) {
    alert("Date and time are required");
    return;
  }

  const scheduledAt = new Date(`${cleanDate}T${cleanTime}:00+02:00`).toISOString();

  const updatedOrder = {
    ...selected,
    preferred_date: cleanDate,
    preferred_time: cleanTime,
    scheduled_at: scheduledAt,
  };

  const { data, error } = await supabase
    .from("orders")
    .update({
      preferred_date: cleanDate,
      preferred_time: cleanTime,
      scheduled_at: scheduledAt,
    })
    .eq("id", selected.id)
    .select("*")
    .single();

  if (error) {
    console.error("UPDATE SCHEDULE ERROR:", error);
    alert("Error updating schedule");
    return;
  }

  const freshOrder = (data as Order) || updatedOrder;

  setOrders((prev) =>
    prev.map((order) => (order.id === selected.id ? freshOrder : order))
  );

  setSelected(freshOrder);

  alert("Schedule updated");
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
        <div className="flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setShowManualForm(true)}
            className="rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-extrabold text-black shadow-md transition hover:scale-[1.02] hover:shadow-lg"
          >
            + Add manual order
          </button>

          <button
            type="button"
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-extrabold text-black shadow-sm transition hover:bg-gray-50 hover:shadow-md disabled:opacity-60"
          >
            {isLoggingOut ? "Signing out..." : "Log out"}
          </button>
        </div>

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

        <div className="rounded-[28px] border border-yellow-400 bg-white p-4 shadow-xl sm:p-6">
  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500">
        Calendar
      </p>

      <h2 className="mt-1 text-2xl font-extrabold capitalize tracking-tight text-black">
        {calendarMonthTitle}
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        {calendarDays
          .filter((day) => day.isCurrentMonth)
          .reduce((sum, day) => sum + day.orders.length, 0)}{" "}
        bookings this month
      </p>
    </div>

    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => changeCalendarMonth(-1)}
        className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-black shadow-sm transition hover:border-yellow-400 hover:bg-yellow-50"
      >
        ← Previous
      </button>

      <button
        type="button"
        onClick={goToCurrentMonth}
        className="rounded-xl bg-yellow-400 px-4 py-2 text-sm font-extrabold text-black shadow-sm transition hover:scale-[1.02]"
      >
        Today
      </button>

      <button
        type="button"
        onClick={() => changeCalendarMonth(1)}
        className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-black shadow-sm transition hover:border-yellow-400 hover:bg-yellow-50"
      >
        Next →
      </button>
    </div>
  </div>

  <div className="mt-6 overflow-x-auto">
    <div className="min-w-[1050px]">
      <div className="grid grid-cols-7 gap-2">
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
          (weekday) => (
            <div
              key={weekday}
              className="rounded-xl bg-[#fffdf4] px-3 py-3 text-center text-xs font-extrabold uppercase tracking-wide text-gray-500"
            >
              {weekday}
            </div>
          )
        )}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-2">
        {calendarDays.map((day) => (
          <div
            key={day.dateKey}
            className={`min-h-[190px] rounded-2xl border p-3 transition ${
              day.isToday
                ? "border-black bg-yellow-50 shadow-md"
                : day.isCurrentMonth
                ? "border-gray-200 bg-[#fffdf6]"
                : "border-gray-100 bg-gray-50/70"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-extrabold ${
                  day.isToday
                    ? "bg-black text-white"
                    : day.isCurrentMonth
                    ? "text-black"
                    : "text-gray-400"
                }`}
              >
                {day.date.getUTCDate()}
              </div>

              {day.orders.length > 0 && (
                <span className="rounded-full bg-yellow-400 px-2 py-1 text-[10px] font-extrabold text-black">
                  {day.orders.length}
                </span>
              )}
            </div>

            <div className="mt-3 max-h-[145px] space-y-2 overflow-y-auto pr-1">
              {day.orders.length === 0 ? (
                day.isCurrentMonth && (
                  <p className="text-xs text-gray-400">Free</p>
                )
              ) : (
                day.orders.map((order) => (
                  <button
                    key={order.id}
                    type="button"
                    onClick={() => setSelected(order)}
                    className="w-full rounded-xl border border-yellow-400 bg-white p-2.5 text-left shadow-sm transition hover:bg-yellow-50 hover:shadow-md"
                  >
                    <p className="truncate text-xs font-extrabold text-black">
                      {order.preferred_time?.slice(0, 5) || "—"}{" "}
                      {order.full_name}
                    </p>

                    <p className="mt-1 truncate text-[11px] text-gray-500">
                      {order.area || order.city || "—"}
                    </p>

                    <div className="mt-1 flex items-center justify-between gap-2">
                      <span className="truncate text-[10px] font-semibold uppercase text-gray-400">
                        {formatStatusLabel(order.status)}
                      </span>

                      <span className="shrink-0 text-[11px] font-extrabold text-black">
                        €{Number(order.total || 0).toFixed(2)}
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
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
                            {order.preferred_date && order.preferred_time
  ? `${order.preferred_date} ${order.preferred_time.slice(0, 5)}`
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
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setSelected(order)}
                            className="rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-extrabold text-black shadow-sm transition hover:scale-[1.03] hover:shadow-md"
                          >
                            Open
                          </button>

                          <button
                            onClick={() => openDeleteConfirm(order)}
                            className="rounded-2xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-extrabold text-red-600 shadow-sm transition hover:bg-red-100"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {showManualForm && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4">
            <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Manual booking
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold text-black">
                    Add WhatsApp client
                  </h2>
                </div>

                <button
                  onClick={() => setShowManualForm(false)}
                  disabled={isCreatingManual}
                  className="rounded-2xl border border-gray-300 px-4 py-2 text-sm font-bold text-black transition hover:bg-gray-50 disabled:opacity-60"
                >
                  Close
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <AdminInput
                  label="Client name"
                  value={manualOrder.fullName}
                  onChange={(v) =>
                    setManualOrder({ ...manualOrder, fullName: v })
                  }
                  placeholder="Antonio Cicuendez"
                />

                <AdminInput
                  label="Phone"
                  value={manualOrder.phone}
                  onChange={(v) => setManualOrder({ ...manualOrder, phone: v })}
                  placeholder="+34 ..."
                />

                <AdminInput
                  label="Email"
                  value={manualOrder.email}
                  onChange={(v) => setManualOrder({ ...manualOrder, email: v })}
                  placeholder="client@email.com"
                />

                <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
                  <label className="mb-2 block text-sm font-bold text-black">
                    Category
                  </label>
                  <select
                    value={manualOrder.category}
                    onChange={(e) =>
                      setManualOrder({
                        ...manualOrder,
                        category: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-yellow-400"
                  >
                    {MANUAL_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <AdminInput
                  label="City"
                  value={manualOrder.city}
                  onChange={(v) => setManualOrder({ ...manualOrder, city: v })}
                  placeholder="Valencia"
                />

                <AdminInput
                  label="Area"
                  value={manualOrder.area}
                  onChange={(v) => setManualOrder({ ...manualOrder, area: v })}
                  placeholder="Patraix, Campanar, Arrancapins..."
                />

                <div className="md:col-span-2">
                  <AdminInput
                    label="Address"
                    value={manualOrder.houseAddress}
                    onChange={(v) =>
                      setManualOrder({ ...manualOrder, houseAddress: v })
                    }
                    placeholder="Street, number"
                  />
                </div>

                <AdminInput
                  label="Apartment / floor"
                  value={manualOrder.apartmentNumber}
                  onChange={(v) =>
                    setManualOrder({
                      ...manualOrder,
                      apartmentNumber: v,
                    })
                  }
                  placeholder="Floor, door, apartment"
                />

                <AdminInput
                  label="Address details"
                  value={manualOrder.addressDetails}
                  onChange={(v) =>
                    setManualOrder({
                      ...manualOrder,
                      addressDetails: v,
                    })
                  }
                  placeholder="Parking, intercom, access..."
                />

                <AdminInput
                  label="Date"
                  type="date"
                  value={manualOrder.preferredDate}
                  onChange={(v) =>
                    setManualOrder({
                      ...manualOrder,
                      preferredDate: v,
                    })
                  }
                />

                <AdminInput
                  label="Time"
                  type="time"
                  value={manualOrder.preferredTime}
                  onChange={(v) =>
                    setManualOrder({
                      ...manualOrder,
                      preferredTime: v,
                    })
                  }
                />

                <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm md:col-span-2">
                  <label className="mb-2 block text-sm font-bold text-black">
                    Client notes
                  </label>
                  <textarea
                    value={manualOrder.notes}
                    onChange={(e) =>
                      setManualOrder({
                        ...manualOrder,
                        notes: e.target.value,
                      })
                    }
                    placeholder="What the client needs, photos, details, tools..."
                    className="min-h-[110px] w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-yellow-400"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-yellow-400 bg-yellow-50/40 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-extrabold text-black">Services</h3>
                    <p className="mt-1 text-xs text-gray-500">
                      Same format as website calculator: label, price, qty,
                      subtotal.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setManualServices([
                        ...manualServices,
                        { label: "", price: 0, qty: 1 },
                      ])
                    }
                    className="rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-extrabold text-black shadow-sm transition hover:scale-[1.02]"
                  >
                    + Add service
                  </button>
                </div>

                <div className="mt-4 space-y-3">
                  {manualServices.map((service, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 gap-3 rounded-2xl border border-gray-200 bg-white p-3 md:grid-cols-[1fr_120px_100px_100px]"
                    >
                      <input
                        value={service.label}
                        onChange={(e) => {
                          const next = [...manualServices];
                          next[index].label = e.target.value;
                          setManualServices(next);
                        }}
                        placeholder="Service name"
                        className="rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-yellow-400"
                      />

                      <input
                        type="number"
                        value={service.price}
                        onChange={(e) => {
                          const next = [...manualServices];
                          next[index].price = Number(e.target.value);
                          setManualServices(next);
                        }}
                        placeholder="Price"
                        className="rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-yellow-400"
                      />

                      <input
                        type="number"
                        value={service.qty}
                        onChange={(e) => {
                          const next = [...manualServices];
                          next[index].qty = Number(e.target.value);
                          setManualServices(next);
                        }}
                        placeholder="Qty"
                        className="rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-yellow-400"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setManualServices((prev) =>
                            prev.filter((_, i) => i !== index)
                          )
                        }
                        className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-bold text-red-600 transition hover:bg-red-100"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-yellow-400 bg-white p-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>€{manualSubtotal.toFixed(2)}</span>
                  </div>

                  <div className="mt-2 flex justify-between text-sm text-gray-600">
                    <span>IVA 21%</span>
                    <span>€{manualIva.toFixed(2)}</span>
                  </div>

                  <div className="mt-2 flex justify-between border-t border-yellow-400 pt-3 text-lg font-extrabold text-black">
                    <span>Total</span>
                    <span>€{manualTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setShowManualForm(false)}
                  disabled={isCreatingManual}
                  className="rounded-2xl border border-gray-300 px-5 py-3 text-sm font-bold text-black transition hover:bg-gray-50 disabled:opacity-60"
                >
                  Cancel
                </button>

                <button
                  onClick={createManualOrder}
                  disabled={isCreatingManual}
                  className="rounded-2xl bg-black px-5 py-3 text-sm font-extrabold text-white transition hover:opacity-90 disabled:opacity-60"
                >
                  {isCreatingManual ? "Creating..." : "Create order"}
                </button>
              </div>
            </div>
          </div>
        )}

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

  <div className="mt-2 grid grid-cols-1 gap-2">
    <input
      type="date"
      value={selected.preferred_date || ""}
      onChange={(e) =>
        setSelected((prev) =>
          prev ? { ...prev, preferred_date: e.target.value } : prev
        )
      }
      className="rounded-xl border border-gray-300 px-3 py-2 text-sm text-black outline-none focus:border-yellow-400"
    />

    <input
      type="time"
     value={selected.preferred_time?.slice(0, 5) || ""}
      onChange={(e) =>
        setSelected((prev) =>
          prev ? { ...prev, preferred_time: e.target.value } : prev
        )
      }
      className="rounded-xl border border-gray-300 px-3 py-2 text-sm text-black outline-none focus:border-yellow-400"
    />

    <button
      onClick={updateOrderSchedule}
      className="rounded-xl bg-yellow-400 px-3 py-2 text-sm font-extrabold text-black transition hover:scale-[1.02]"
    >
      Save schedule
    </button>
  </div>
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
                  `${selected.city || ""}, ${selected.area || ""}, ${
                    selected.address || ""
                  }`
                )
              }
              className="rounded-2xl border border-gray-300 px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-50"
            >
              Copy address
            </button>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${selected.city || ""}, ${selected.area || ""}, ${
                  selected.address || ""
                }`
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

          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="mt-3 w-full rounded-2xl border border-red-300 bg-red-50 py-3 text-sm font-extrabold text-red-600 transition hover:bg-red-100"
          >
            🗑 Delete order
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

      <p className="mt-3 text-sm leading-7 text-gray-600">This will:</p>

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

{showDeleteConfirm && selected && (
  <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4">
    <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-red-500">
        Warning
      </p>

      <h3 className="mt-2 text-2xl font-extrabold text-black">
        Delete this order?
      </h3>

      <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4">
        <p className="font-bold text-black">{selected.full_name}</p>

        <p className="mt-1 text-sm text-gray-600">
          {selected.phone || "No phone"}
        </p>

        <p className="mt-1 text-sm text-gray-600">
          €{Number(selected.total || 0).toFixed(2)}
        </p>
      </div>

      <p className="mt-5 text-sm text-gray-600">
        This action cannot be undone.
      </p>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => setShowDeleteConfirm(false)}
          disabled={isDeleting}
          className="flex-1 rounded-2xl border border-gray-300 bg-white py-3 text-sm font-bold text-black transition hover:bg-gray-50 disabled:opacity-60"
        >
          Cancel
        </button>

        <button
          onClick={deleteOrder}
          disabled={isDeleting}
          className="flex-1 rounded-2xl bg-red-600 py-3 text-sm font-extrabold text-white transition hover:bg-red-700 disabled:opacity-60"
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  );
}

function AdminInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
      <label className="mb-2 block text-sm font-bold text-black">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-yellow-400"
      />
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