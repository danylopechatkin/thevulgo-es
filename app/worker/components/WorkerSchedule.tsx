"use client";

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

export type WorkerScheduleJob = {
  id: string;
  accessToken: string;
  orderNumber: number;
  date: string;
  time: string;
  area: string;
  city: string;
  category: string;
  share: number;
  status: string;
};

type View = "day" | "week" | "month";

const keyOf = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const parseDate = (value: string) => {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day || 1, 12);
};

const torontoToday = () => {
  const parts = new Intl.DateTimeFormat("en-IE", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts();
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
};

const moveDate = (value: string, days: number) => {
  const date = parseDate(value);
  date.setDate(date.getDate() + days);
  return keyOf(date);
};

const startOfWeek = (value: string) => {
  const date = parseDate(value);
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7));
  return keyOf(date);
};

const moveMonth = (value: string, amount: number) => {
  const date = parseDate(`${value.slice(0, 7)}-01`);
  date.setMonth(date.getMonth() + amount);
  return keyOf(date);
};

const money = (value: number) =>
  new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(Number(value || 0));

const statusStyle = (status: string) => {
  if (status.includes("complete")) return "bg-emerald-100 text-emerald-800";
  if (status.includes("progress") || status.includes("arrived"))
    return "bg-violet-100 text-violet-800";
  if (status.includes("accept")) return "bg-blue-100 text-blue-800";
  return "bg-yellow-100 text-yellow-900";
};

export default function WorkerSchedule({ jobs }: { jobs: WorkerScheduleJob[] }) {
  const today = useMemo(() => torontoToday(), []);
  const initialDay = useMemo(
    () =>
      jobs
        .filter((job) => job.date >= today)
        .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`))[0]
        ?.date || today,
    [jobs, today],
  );
  const [selectedDay, setSelectedDay] = useState(initialDay);
  const [view, setView] = useState<View>("day");

  const jobsByDay = useMemo(() => {
    const result = new Map<string, WorkerScheduleJob[]>();
    jobs.forEach((job) => {
      const list = result.get(job.date) || [];
      list.push(job);
      result.set(job.date, list);
    });
    result.forEach((list) => list.sort((a, b) => a.time.localeCompare(b.time)));
    return result;
  }, [jobs]);

  const weekDays = useMemo(() => {
    const start = startOfWeek(selectedDay);
    return Array.from({ length: 7 }, (_, index) => moveDate(start, index));
  }, [selectedDay]);

  const monthDays = useMemo(() => {
    const first = `${selectedDay.slice(0, 7)}-01`;
    const start = startOfWeek(first);
    return Array.from({ length: 42 }, (_, index) => moveDate(start, index));
  }, [selectedDay]);

  const selectedJobs = jobsByDay.get(selectedDay) || [];
  const monthJobs = jobs.filter((job) =>
    job.date.startsWith(selectedDay.slice(0, 7)),
  );

  const move = (direction: -1 | 1) => {
    setSelectedDay((current) =>
      view === "day"
        ? moveDate(current, direction)
        : view === "week"
          ? moveDate(current, direction * 7)
          : moveMonth(current, direction),
    );
  };

  const title =
    view === "day"
      ? parseDate(selectedDay).toLocaleDateString("en-IE", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })
      : view === "week"
        ? `${parseDate(weekDays[0]).toLocaleDateString("en-IE", { month: "short", day: "numeric" })} – ${parseDate(weekDays[6]).toLocaleDateString("en-IE", { month: "short", day: "numeric" })}`
        : parseDate(selectedDay).toLocaleDateString("en-IE", {
            month: "long",
            year: "numeric",
          });

  const openDay = (day: string) => {
    setSelectedDay(day);
    setView("day");
  };

  return (
    <section className="mt-5 overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5">
      <div className="bg-[#111] p-5 text-white sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-yellow-400 text-black">
              <CalendarDays className="h-6 w-6" />
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.16em] text-yellow-400">
                My Spain schedule
              </p>
              <h2 className="mt-1 text-2xl font-black">Work calendar</h2>
              <p className="mt-1 text-sm text-white/55">
                Your assigned jobs in Europe/Madrid time.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:flex">
            <div className="rounded-2xl bg-white/10 px-4 py-2.5">
              <p className="text-[9px] font-black uppercase tracking-wider text-white/45">
                Scheduled
              </p>
              <p className="font-black">{jobs.length} jobs</p>
            </div>
            <div className="rounded-2xl bg-yellow-400 px-4 py-2.5 text-black">
              <p className="text-[9px] font-black uppercase tracking-wider text-black/50">
                Month share
              </p>
              <p className="font-black">
                {money(monthJobs.reduce((sum, job) => sum + job.share, 0))}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-3 rounded-2xl bg-[#f0f0ec] p-1">
          {(["day", "week", "month"] as View[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setView(item)}
              className={`rounded-xl py-3 text-sm font-black capitalize transition ${view === item ? "bg-black text-white shadow-md" : "text-gray-500"}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label={`Previous ${view}`}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-black/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="min-w-0 text-center">
            <p className="truncate text-base font-black capitalize sm:text-xl">{title}</p>
            <button
              type="button"
              onClick={() => setSelectedDay(today)}
              className="mt-1 text-[10px] font-black uppercase tracking-wider text-[#a86400]"
            >
              Go to today
            </button>
          </div>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label={`Next ${view}`}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-black/10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {view === "day" ? (
          <DayView jobs={selectedJobs} />
        ) : view === "week" ? (
          <div className="mt-5 grid gap-2 md:grid-cols-7">
            {weekDays.map((day) => {
              const dayJobs = jobsByDay.get(day) || [];
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => openDay(day)}
                  className={`rounded-2xl border p-3 text-left ${day === today ? "border-yellow-400 bg-yellow-50" : "border-black/10 bg-[#fafaf8]"}`}
                >
                  <p className="text-[10px] font-black uppercase text-gray-400">
                    {parseDate(day).toLocaleDateString("en-IE", { weekday: "short" })}
                  </p>
                  <p className="mt-1 text-xl font-black">{parseDate(day).getDate()}</p>
                  <p className="mt-2 text-xs font-bold text-gray-500">
                    {dayJobs.length} job{dayJobs.length === 1 ? "" : "s"}
                  </p>
                  <div className="mt-2 flex gap-1">
                    {dayJobs.slice(0, 4).map((job) => (
                      <span key={job.id} className="h-2 w-2 rounded-full bg-yellow-400" />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mt-5">
            <div className="grid grid-cols-7 gap-1">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                <div key={`${day}-${index}`} className="py-1 text-center text-[10px] font-black text-gray-400">
                  {day}
                </div>
              ))}
              {monthDays.map((day) => {
                const count = (jobsByDay.get(day) || []).length;
                const inMonth = day.startsWith(selectedDay.slice(0, 7));
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => openDay(day)}
                    className={`relative aspect-square rounded-xl text-xs font-black ${day === today ? "bg-yellow-400" : inMonth ? "bg-[#f2f2ee]" : "text-gray-300"}`}
                  >
                    {parseDate(day).getDate()}
                    {count ? (
                      <span className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-black" />
                    ) : null}
                  </button>
                );
              })}
            </div>
            <p className="mt-4 rounded-2xl bg-yellow-50 p-3 text-center text-xs font-bold text-[#7b5000]">
              Tap a date to open that day and its assigned jobs.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function DayView({ jobs }: { jobs: WorkerScheduleJob[] }) {
  return (
    <div className="mt-5 space-y-3">
      {jobs.length ? (
        jobs.map((job) => (
          <Link
            key={job.id}
            href={`/worker/jobs/${job.accessToken}`}
            className="block overflow-hidden rounded-[1.6rem] border border-yellow-300 bg-[#fffdf7] shadow-sm transition active:scale-[.99] sm:hover:-translate-y-0.5 sm:hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-3 border-b border-black/5 p-4 sm:p-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.14em] text-[#a86400]">
                  TVG-ES-{String(job.orderNumber).padStart(5, "0")}
                </p>
                <p className="mt-1 text-2xl font-black">{job.time || "Time TBD"}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase ${statusStyle(job.status)}`}>
                {job.status.replaceAll("_", " ")}
              </span>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-[1fr_auto] sm:p-5">
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-sm font-bold">
                  <Clock3 className="h-4 w-4 text-[#a86400]" /> {job.category || "Assigned service"}
                </p>
                <p className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-[#a86400]" /> {[job.area, job.city].filter(Boolean).join(", ")}
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-black px-4 py-3 text-white">
                <WalletCards className="h-4 w-4 text-yellow-400" />
                <div>
                  <p className="text-[9px] font-black uppercase text-white/50">Your share</p>
                  <p className="font-black text-yellow-400">{money(job.share)}</p>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="rounded-[1.6rem] border border-dashed border-black/15 bg-[#fafaf8] px-5 py-10 text-center">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-yellow-100">
            <CalendarDays className="h-5 w-5" />
          </span>
          <p className="mt-3 font-black">No assigned work this day</p>
          <p className="mt-1 text-sm text-gray-500">Use the arrows to review another day.</p>
        </div>
      )}
    </div>
  );
}
