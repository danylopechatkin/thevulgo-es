"use client";

import type { ReactNode } from "react";
import { Activity, BarChart3 } from "lucide-react";

export function CrmHero({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden rounded-[1.75rem] bg-[#111] p-5 text-white shadow-xl sm:rounded-[2rem] sm:p-8">
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div className="min-w-0">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-yellow-400 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.12em] text-black sm:text-[11px] sm:tracking-[.14em]">
            <Activity className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{eyebrow}</span>
          </div>
          <h1 className="mt-4 text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
            {description}
          </p>
        </div>
        {action ? (
          <div className="w-full shrink-0 [&>button]:w-full [&>a]:flex [&>a]:w-full [&>a]:justify-center sm:w-auto sm:[&>button]:w-auto sm:[&>a]:w-auto">
            {action}
          </div>
        ) : null}
      </div>
    </header>
  );
}
export function CrmMetric({
  label,
  value,
  note,
  accent = false,
}: {
  label: string;
  value: string | number;
  note?: string;
  accent?: boolean;
}) {
  return (
    <article
      className={`flex min-h-32 flex-col justify-between rounded-[1.5rem] border p-4 shadow-sm sm:min-h-0 sm:rounded-3xl sm:p-5 ${accent ? "border-yellow-400 bg-yellow-400" : "border-black/5 bg-white"}`}
    >
      <div>
        <p className="text-[10px] font-black uppercase leading-4 tracking-[.1em] text-black/50 sm:text-[11px] sm:tracking-[.12em]">
          {label}
        </p>
        <p className="mt-2 break-words text-2xl font-black tracking-tight sm:text-3xl">
          {value}
        </p>
      </div>
      {note ? (
        <p className="mt-2 text-[11px] font-semibold leading-4 text-black/50 sm:text-xs">
          {note}
        </p>
      ) : null}
    </article>
  );
}
export function CrmPanel({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="min-w-0 overflow-hidden rounded-[1.75rem] border border-black/5 bg-white p-4 shadow-sm sm:rounded-[2rem] sm:p-6">
      <div className="flex min-w-0 items-start gap-3">
        <span className="shrink-0 rounded-xl bg-yellow-100 p-2">
          <BarChart3 className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <h2 className="text-xl font-black leading-tight">{title}</h2>
          {subtitle ? (
            <p className="mt-1 text-sm leading-5 text-gray-500">{subtitle}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-5 min-w-0">{children}</div>
    </section>
  );
}
export function MiniBars({
  items,
}: {
  items: Array<{ label: string; value: number }>;
}) {
  const max = Math.max(1, ...items.map((item) => item.value));
  return (
    <div className="space-y-3">
      {items.slice(0, 8).map((item) => (
        <div key={item.label}>
          <div className="mb-1 flex justify-between gap-3 text-xs font-bold">
            <span className="truncate">{item.label}</span>
            <span>{item.value}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-yellow-400"
              style={{ width: `${(item.value / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
      {!items.length ? (
        <p className="py-8 text-center text-sm text-gray-400">
          Data will appear here automatically.
        </p>
      ) : null}
    </div>
  );
}
export function ActivityBars({
  values,
}: {
  values: Array<{ label: string; value: number }>;
}) {
  const max = Math.max(1, ...values.map((item) => item.value));
  const mobileStart = Math.max(0, values.length - 7);
  if (!values.some((item) => item.value > 0))
    return (
      <div className="flex min-h-28 items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-[#fafaf7] px-4 text-center text-sm font-semibold text-gray-400">
        Activity will appear here automatically.
      </div>
    );
  return (
    <div className="flex h-40 min-w-0 items-end gap-2">
      {values.map((item, index) => (
        <div
          key={item.label}
          className={`${index < mobileStart ? "hidden sm:flex" : "flex"} group min-w-0 flex-1 flex-col items-center justify-end gap-2`}
        >
          <span className="text-[10px] font-black opacity-0 transition group-hover:opacity-100">
            {item.value}
          </span>
          <div
            className="w-full rounded-t-lg bg-gradient-to-t from-yellow-500 to-yellow-300"
            style={{
              height: `${Math.max(item.value ? 8 : 2, (item.value / max) * 110)}px`,
            }}
          />
          <span className="w-full truncate text-center text-[9px] font-bold text-gray-400">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
export function EmptyCrm({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-dashed border-gray-300 bg-[#fafaf7] px-4 py-8 text-center sm:px-5 sm:py-12">
      <div className="mx-auto h-12 w-12 rounded-2xl bg-yellow-100 p-3">
        <Activity className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-black">{title}</h3>
      <p className="mx-auto mt-1 max-w-sm text-sm leading-5 text-gray-500">
        {text}
      </p>
    </div>
  );
}
