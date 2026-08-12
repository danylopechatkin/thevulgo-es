"use client";

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
} from "lucide-react";
import { useMemo, useState } from "react";

type CalendarOrder = {
  id: string;
  order_number: number;
  full_name: string;
  preferred_date: string;
  preferred_time: string;
  category: string;
  area: string;
  city: string;
  total: number;
  status: "new" | "confirmed" | "in_progress" | "completed" | "done" | "cancelled";
};

const statusNames: Record<CalendarOrder["status"], string> = {
  new: "New",
  confirmed: "Confirmed",
  in_progress: "In progress",
  completed: "Completed",
  done: "Completed",
  cancelled: "Cancelled",
};

const statusStyles: Record<CalendarOrder["status"], string> = {
  new: "bg-yellow-100 text-yellow-900",
  confirmed: "bg-blue-100 text-blue-800",
  in_progress: "bg-violet-100 text-violet-800",
  completed: "bg-emerald-100 text-emerald-800",
  done: "bg-emerald-100 text-emerald-800",
  cancelled: "bg-red-100 text-red-700",
};

const dateKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const torontoToday = () => {
  const parts = new Intl.DateTimeFormat("en-IE", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts();
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${value.year}-${value.month}-${value.day}`;
};

const parseDate = (value: string) => {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day || 1, 12);
};

const monthTitle = (month: string) =>
  parseDate(`${month}-01`).toLocaleDateString("en-IE", {
    month: "long",
    year: "numeric",
  });

const dayTitle = (day: string) =>
  parseDate(day).toLocaleDateString("en-IE", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

const orderNumber = (order: CalendarOrder) =>
  `TVG-ES-${String(order.order_number).padStart(5, "0")}`;

const money = (value: number) =>
  new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

function moveDay(day: string, amount: number) {
  const next = parseDate(day);
  next.setDate(next.getDate() + amount);
  return dateKey(next);
}

function moveMonth(month: string, amount: number) {
  const next = parseDate(`${month}-01`);
  next.setMonth(next.getMonth() + amount);
  return dateKey(next).slice(0, 7);
}

export default function OrdersCalendar({
  orders,
  onOpenOrder,
}: {
  orders: CalendarOrder[];
  onOpenOrder: (order: CalendarOrder) => void;
}) {
  const today = useMemo(() => torontoToday(), []);
  const [month, setMonth] = useState(today.slice(0, 7));
  const [selectedDay, setSelectedDay] = useState(today);
  const [mobileView, setMobileView] = useState<"day" | "month">("day");

  const ordersByDay = useMemo(() => {
    const grouped = new Map<string, CalendarOrder[]>();
    for (const order of orders) {
      if (!order.preferred_date) continue;
      const list = grouped.get(order.preferred_date) || [];
      list.push(order);
      grouped.set(order.preferred_date, list);
    }
    for (const list of grouped.values()) {
      list.sort((a, b) =>
        (a.preferred_time || "99:99").localeCompare(b.preferred_time || "99:99"),
      );
    }
    return grouped;
  }, [orders]);

  const monthDays = useMemo(() => {
    const first = parseDate(`${month}-01`);
    const mondayOffset = (first.getDay() + 6) % 7;
    const start = new Date(first);
    start.setDate(first.getDate() - mondayOffset);
    return Array.from({ length: 42 }, (_, index) => {
      const value = new Date(start);
      value.setDate(start.getDate() + index);
      return {
        key: dateKey(value),
        day: value.getDate(),
        currentMonth: value.getMonth() === first.getMonth(),
      };
    });
  }, [month]);

  const selectedOrders = ordersByDay.get(selectedDay) || [];
  const visibleMonthOrders = orders.filter((order) =>
    order.preferred_date?.startsWith(month),
  );
  const activeMonthOrders = visibleMonthOrders.filter(
    (order) => order.status !== "cancelled",
  );

  const selectDay = (day: string, closeMonth = false) => {
    setSelectedDay(day);
    setMonth(day.slice(0, 7));
    if (closeMonth) setMobileView("day");
  };

  const goToday = () => selectDay(today);

  return (
    <section className="overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-sm sm:rounded-[2rem]">
      <div className="border-b border-black/5 p-4 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-yellow-100">
              <CalendarDays className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[.16em] text-[#a86400]">
                Spain schedule
              </p>
              <h2 className="text-2xl font-black tracking-tight">Operations calendar</h2>
              <p className="text-sm text-gray-500">All times use Europe/Madrid.</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:flex">
            <div className="rounded-2xl bg-[#f5f5f1] px-4 py-2.5">
              <p className="text-[10px] font-black uppercase tracking-wider text-gray-500">Jobs</p>
              <p className="font-black">{activeMonthOrders.length}</p>
            </div>
            <div className="rounded-2xl bg-[#f5f5f1] px-4 py-2.5">
              <p className="text-[10px] font-black uppercase tracking-wider text-gray-500">Booked EUR</p>
              <p className="font-black">
                {money(activeMonthOrders.reduce((sum, order) => sum + Number(order.total), 0))}
              </p>
            </div>
            <div className="rounded-2xl bg-black px-4 py-2.5 text-white">
              <p className="text-[10px] font-black uppercase tracking-wider text-white/55">Today</p>
              <p className="font-black">{(ordersByDay.get(today) || []).length} jobs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden p-5 md:block lg:p-6">
        <CalendarToolbar
          title={monthTitle(month)}
          onPrevious={() => setMonth((value) => moveMonth(value, -1))}
          onNext={() => setMonth((value) => moveMonth(value, 1))}
          onToday={goToday}
        />
        <div className="mt-5 grid grid-cols-7 overflow-hidden rounded-2xl border border-black/10">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day} className="border-b border-black/10 bg-[#f5f5f1] px-3 py-2 text-center text-[11px] font-black uppercase tracking-wider text-gray-500">
              {day}
            </div>
          ))}
          {monthDays.map((day, index) => {
            const dayOrders = ordersByDay.get(day.key) || [];
            return (
              <div
                key={day.key}
                className={`min-h-32 border-black/10 p-2 ${index % 7 !== 6 ? "border-r" : ""} ${index < 35 ? "border-b" : ""} ${day.currentMonth ? "bg-white" : "bg-[#fafaf8]"}`}
              >
                <button
                  type="button"
                  onClick={() => selectDay(day.key)}
                  aria-label={`Open ${dayTitle(day.key)}`}
                  className={`grid h-8 w-8 place-items-center rounded-full text-xs font-black ${day.key === today ? "bg-yellow-400" : day.currentMonth ? "text-black hover:bg-yellow-100" : "text-gray-300"}`}
                >
                  {day.day}
                </button>
                <div className="mt-1 max-h-24 space-y-1.5 overflow-y-auto pr-0.5">
                  {dayOrders.map((order) => (
                    <button
                      key={order.id}
                      type="button"
                      onClick={() => onOpenOrder(order)}
                      className="block w-full rounded-xl border border-black/5 bg-[#f6f6f2] px-2 py-1.5 text-left transition hover:border-yellow-400 hover:bg-yellow-50"
                    >
                      <span className="flex items-center gap-1 text-[10px] font-black">
                        <span className="text-[#a86400]">{order.preferred_time?.slice(0, 5) || "TBD"}</span>
                        <span className="min-w-0 truncate">{order.full_name}</span>
                      </span>
                      <span className="mt-0.5 block truncate text-[9px] text-gray-500">{order.category}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-4 md:hidden">
        <div className="grid grid-cols-2 rounded-2xl bg-[#f1f1ed] p-1">
          <button type="button" onClick={() => setMobileView("day")} className={`rounded-xl py-2.5 text-sm font-black ${mobileView === "day" ? "bg-black text-white shadow" : "text-gray-500"}`}>
            Day
          </button>
          <button type="button" onClick={() => setMobileView("month")} className={`rounded-xl py-2.5 text-sm font-black ${mobileView === "month" ? "bg-black text-white shadow" : "text-gray-500"}`}>
            Month
          </button>
        </div>

        {mobileView === "day" ? (
          <div className="mt-4">
            <CalendarToolbar
              title={dayTitle(selectedDay)}
              onPrevious={() => selectDay(moveDay(selectedDay, -1))}
              onNext={() => selectDay(moveDay(selectedDay, 1))}
              onToday={goToday}
              compact
            />
            <p className="mt-3 text-xs font-bold uppercase tracking-wider text-gray-400">
              {selectedOrders.length} appointment{selectedOrders.length === 1 ? "" : "s"}
            </p>
            <div className="mt-3 space-y-3">
              {selectedOrders.length ? selectedOrders.map((order) => (
                <button
                  key={order.id}
                  type="button"
                  onClick={() => onOpenOrder(order)}
                  className="w-full overflow-hidden rounded-[1.5rem] border border-yellow-300 bg-[#fafaf7] text-left shadow-sm transition active:scale-[.99]"
                >
                  <div className="flex items-start justify-between gap-3 border-b border-black/5 p-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#a86400]">{orderNumber(order)}</p>
                      <p className="mt-1 text-xl font-black">{order.preferred_time?.slice(0, 5) || "Time TBD"}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase ${statusStyles[order.status]}`}>
                      {statusNames[order.status]}
                    </span>
                  </div>
                  <div className="space-y-2 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="min-w-0 truncate font-black">{order.full_name}</p>
                      <p className="shrink-0 font-black">{money(order.total)}</p>
                    </div>
                    <p className="flex items-center gap-2 text-sm text-gray-600"><Clock3 className="h-4 w-4" />{order.category}</p>
                    <p className="flex items-center gap-2 text-sm text-gray-600"><MapPin className="h-4 w-4" />{[order.area, order.city].filter(Boolean).join(", ")}</p>
                  </div>
                </button>
              )) : (
                <div className="rounded-[1.5rem] border border-dashed border-gray-300 bg-[#fafaf8] px-5 py-10 text-center">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-yellow-100"><CalendarDays className="h-5 w-5" /></span>
                  <p className="mt-3 font-black">No appointments</p>
                  <p className="mt-1 text-sm text-gray-500">This day is clear in the Spain schedule.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-4">
            <CalendarToolbar
              title={monthTitle(month)}
              onPrevious={() => setMonth((value) => moveMonth(value, -1))}
              onNext={() => setMonth((value) => moveMonth(value, 1))}
              onToday={goToday}
              compact
            />
            <div className="mt-4 grid grid-cols-7 gap-1">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                <div key={`${day}-${index}`} className="py-1 text-center text-[10px] font-black text-gray-400">{day}</div>
              ))}
              {monthDays.map((day) => {
                const count = (ordersByDay.get(day.key) || []).length;
                return (
                  <button
                    key={day.key}
                    type="button"
                    onClick={() => selectDay(day.key, true)}
                    className={`relative aspect-square rounded-xl text-xs font-black ${day.key === selectedDay ? "bg-black text-white" : day.key === today ? "bg-yellow-400 text-black" : day.currentMonth ? "bg-[#f5f5f1] text-black" : "text-gray-300"}`}
                  >
                    {day.day}
                    {count ? <span className={`absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full ${day.key === selectedDay ? "bg-yellow-400" : "bg-black"}`} /> : null}
                  </button>
                );
              })}
            </div>
            <p className="mt-4 rounded-2xl bg-yellow-50 p-3 text-center text-xs font-bold text-[#7b5000]">Tap a date to open its daily schedule.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function CalendarToolbar({
  title,
  onPrevious,
  onNext,
  onToday,
  compact = false,
}: {
  title: string;
  onPrevious: () => void;
  onNext: () => void;
  onToday: () => void;
  compact?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <button type="button" onClick={onPrevious} aria-label="Previous date" className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-black/10 bg-white hover:border-yellow-400">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <div className="min-w-0 text-center">
        <p className={`${compact ? "text-base" : "text-xl"} truncate font-black capitalize`}>{title}</p>
        <button type="button" onClick={onToday} className="mt-0.5 text-[10px] font-black uppercase tracking-wider text-[#a86400]">Go to today</button>
      </div>
      <button type="button" onClick={onNext} aria-label="Next date" className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-black/10 bg-white hover:border-yellow-400">
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
