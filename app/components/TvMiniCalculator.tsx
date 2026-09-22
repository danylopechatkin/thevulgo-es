"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  LoaderCircle,
  Mail,
  Tv,
} from "lucide-react";
import {
  getClientAttribution,
  trackMarketingEvent,
} from "@/lib/client-attribution";

type TvOption = {
  id: string;
  label: string;
  price: number;
  kind: "base" | "extra";
};
type FormState = {
  name: string;
  email: string;
  phone: string;
  area: string;
  address: string;
  date: string;
  time: string;
};

const TIMES = Array.from(
  { length: 14 },
  (_, index) => `${String(index + 9).padStart(2, "0")}:00`,
);

function madridToday() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const read = (type: string) =>
    parts.find((part) => part.type === type)?.value || "";
  return `${read("year")}-${read("month")}-${read("day")}`;
}

export default function TvMiniCalculator({
  locale,
  options,
}: {
  locale: string;
  options: TvOption[];
}) {
  const es = locale === "es";
  const baseOptions = options.filter((option) => option.kind === "base");
  const extras = options.filter((option) => option.kind === "extra");
  const [baseId, setBaseId] = useState(baseOptions[0]?.id || "");
  const [extraIds, setExtraIds] = useState<string[]>([]);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    area: "",
    address: "",
    date: "",
    time: "",
  });
  const [bookedTimes, setBookedTimes] = useState<string[]>([]);
  const [loadingAvailability, setLoadingAvailability] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const started = useRef(false);
  const today = madridToday();

  const selected = useMemo(
    () =>
      options.filter(
        (option) => option.id === baseId || extraIds.includes(option.id),
      ),
    [options, baseId, extraIds],
  );
  const total = selected.reduce((sum, option) => sum + option.price, 0);
  const availableTimes = TIMES.filter((time) => !bookedTimes.includes(time));

  useEffect(() => {
    if (!form.date) return;
    const controller = new AbortController();
    const load = async () => {
      setLoadingAvailability(true);
      try {
        const response = await fetch(
          `/api/availability?date=${encodeURIComponent(form.date)}&city=Valencia`,
          { cache: "no-store", signal: controller.signal },
        );
        const body = await response.json();
        if (!response.ok) throw new Error(body.error || "availability");
        setBookedTimes(Array.isArray(body.bookedTimes) ? body.bookedTimes : []);
      } catch (cause) {
        if ((cause as Error).name !== "AbortError")
          setError(
            es
              ? "No pudimos cargar las horas disponibles."
              : "We could not load available times.",
          );
      } finally {
        if (!controller.signal.aborted) setLoadingAvailability(false);
      }
    };
    void load();
    return () => controller.abort();
  }, [form.date, es]);

  const markStarted = () => {
    if (started.current) return;
    started.current = true;
    trackMarketingEvent("tv_calculator_started", {
      source: "tv_landing",
      service: "TV Mounting",
    });
  };
  const update = (field: keyof FormState, value: string) => {
    markStarted();
    if (field === "date" && value) {
      trackMarketingEvent("tv_calculator_date_selected", {
        source: "tv_landing",
        service: "TV Mounting",
        metadata: { date: value },
      });
    }
    setForm((current) => ({
      ...current,
      [field]: value,
      ...(field === "date" ? { time: "" } : {}),
    }));
    setError("");
  };
  const toggleExtra = (id: string) => {
    markStarted();
    setExtraIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    if (
      !baseId ||
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.area.trim() ||
      !form.address.trim() ||
      !form.date ||
      !form.time
    ) {
      setError(
        es
          ? "Completa todos los campos para reservar la franja."
          : "Complete every field to request the time slot.",
      );
      return;
    }
    setSubmitting(true);
    try {
      const attribution = getClientAttribution();
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          city: "Valencia",
          area: form.area.trim(),
          houseAddress: form.address.trim(),
          apartmentNumber: "",
          addressDetails: "",
          preferredDate: form.date,
          preferredTime: form.time,
          notes: es
            ? "Solicitud creada mediante el mini calculador de montaje de TV."
            : "Request created through the TV mounting mini calculator.",
          category: es ? "Montaje de TV" : "TV Mounting",
          services: selected.map((option) => ({
            id: option.id,
            label: option.label,
            price: option.price,
            qty: 1,
            subtotal: option.price,
          })),
          subtotal: total,
          total,
          locale,
          sourceUrl: window.location.href,
          attributionSource: "tv_mini_calculator",
          attributionService: "TV Mounting",
          attributionPagePath: window.location.pathname,
          analyticsSessionId: attribution.sessionId,
          landingPage: attribution.landingPage,
          utmSource: attribution.utmSource,
          utmMedium: attribution.utmMedium,
          utmCampaign: attribution.utmCampaign,
          utmTerm: attribution.utmTerm,
          utmContent: attribution.utmContent,
        }),
      });
      const body = await response.json();
      if (!response.ok || !body.success) {
        if (response.status === 409)
          setForm((current) => ({ ...current, time: "" }));
        throw new Error(body.error || "submit");
      }
      trackMarketingEvent("tv_calculator_submitted", {
        source: "tv_landing",
        service: "TV Mounting",
        metadata: { total, date: form.date, time: form.time },
      });
      setSuccess(true);
    } catch (cause) {
      setError(
        cause instanceof Error &&
          cause.message === "This time is already booked"
          ? es
            ? "Esta hora acaba de ocuparse. Elige otra."
            : "That time was just booked. Choose another."
          : es
            ? "No pudimos enviar la solicitud. Inténtalo de nuevo."
            : "We could not send the request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (success)
    return (
      <div
        id="tv-calculator"
        className="rounded-3xl border border-emerald-200 bg-white p-7 shadow-2xl"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-8 w-8 text-emerald-700" />
        </span>
        <h2 className="mt-5 text-3xl font-black">
          {es ? "Solicitud recibida" : "Request received"}
        </h2>
        <p className="mt-3 leading-7 text-neutral-600">
          {es
            ? "Te hemos enviado un email con el resumen. Revisaremos la solicitud y te escribiremos por WhatsApp para confirmar los detalles y la visita."
            : "We sent a summary by email. We will review the request and message you on WhatsApp to confirm the details and visit."}
        </p>
        <div className="mt-5 flex items-center gap-2 rounded-xl bg-yellow-50 p-4 font-bold">
          <Mail className="h-5 w-5" />
          {form.email}
        </div>
      </div>
    );

  return (
    <form
      id="tv-calculator"
      onSubmit={submit}
      className="rounded-3xl border border-yellow-300 bg-white p-5 shadow-2xl sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[.16em] text-yellow-600">
            {es ? "Reserva rápida" : "Quick request"}
          </p>
          <h2 className="mt-2 text-2xl font-black">
            {es ? "Calcula y elige fecha" : "Calculate and choose a date"}
          </h2>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-yellow-400">
          <Tv />
        </span>
      </div>
      <label className="mt-5 block text-sm font-bold">
        {es ? "Tamaño de la TV" : "TV size"}
        <select
          value={baseId}
          onChange={(event) => {
            markStarted();
            setBaseId(event.target.value);
          }}
          className="mt-2 w-full rounded-xl border border-neutral-300 bg-white p-3"
        >
          {baseOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label} · €{option.price}
            </option>
          ))}
        </select>
      </label>
      <fieldset className="mt-5">
        <legend className="text-sm font-bold">
          {es ? "Añadir al mismo trabajo" : "Add to the same job"}
        </legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {extras.map((option) => (
            <label
              key={option.id}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm font-semibold ${extraIds.includes(option.id) ? "border-yellow-500 bg-yellow-50" : "border-neutral-200"}`}
            >
              <input
                type="checkbox"
                checked={extraIds.includes(option.id)}
                onChange={() => toggleExtra(option.id)}
              />
              <span className="flex-1">{option.label}</span>
              <strong>€{option.price}</strong>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="text-sm font-bold">
          {es ? "Nombre" : "Name"}
          <input
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className="mt-2 w-full rounded-xl border border-neutral-300 p-3"
            autoComplete="name"
            required
          />
        </label>
        <label className="text-sm font-bold">
          WhatsApp
          <input
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            className="mt-2 w-full rounded-xl border border-neutral-300 p-3"
            type="tel"
            autoComplete="tel"
            required
          />
        </label>
        <label className="text-sm font-bold">
          Email
          <input
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            className="mt-2 w-full rounded-xl border border-neutral-300 p-3"
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <label className="text-sm font-bold">
          {es ? "Zona / barrio" : "Area"}
          <input
            value={form.area}
            onChange={(event) => update("area", event.target.value)}
            className="mt-2 w-full rounded-xl border border-neutral-300 p-3"
            autoComplete="address-level2"
            required
          />
        </label>
      </div>
      <label className="mt-3 block text-sm font-bold">
        {es ? "Dirección" : "Address"}
        <input
          value={form.address}
          onChange={(event) => update("address", event.target.value)}
          className="mt-2 w-full rounded-xl border border-neutral-300 p-3"
          autoComplete="street-address"
          required
        />
      </label>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="text-sm font-bold">
          {es ? "Fecha preferida" : "Preferred date"}
          <input
            value={form.date}
            min={today}
            onChange={(event) => update("date", event.target.value)}
            className="mt-2 w-full rounded-xl border border-neutral-300 p-3"
            type="date"
            required
          />
        </label>
        <label className="text-sm font-bold">
          {es ? "Hora disponible" : "Available time"}
          <select
            value={form.time}
            onChange={(event) => update("time", event.target.value)}
            disabled={!form.date || loadingAvailability}
            className="mt-2 w-full rounded-xl border border-neutral-300 bg-white p-3 disabled:bg-neutral-100"
            required
          >
            <option value="">
              {loadingAvailability
                ? es
                  ? "Comprobando…"
                  : "Checking…"
                : es
                  ? "Seleccionar hora"
                  : "Choose a time"}
            </option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </label>
      </div>
      {error ? (
        <p
          role="alert"
          className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-bold text-red-700"
        >
          {error}
        </p>
      ) : null}
      <div className="mt-5 flex items-center justify-between rounded-2xl bg-neutral-950 p-4 text-white">
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            {es ? "Total calculado" : "Calculated total"}
          </p>
          <p className="text-3xl font-black">€{total}</p>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-xl bg-yellow-400 px-5 py-3 font-black text-black disabled:opacity-60"
        >
          {submitting ? (
            <LoaderCircle className="animate-spin" />
          ) : es ? (
            "Enviar solicitud"
          ) : (
            "Send request"
          )}
        </button>
      </div>
      <p className="mt-3 flex items-center gap-2 text-xs leading-5 text-neutral-500">
        <CalendarDays className="h-4 w-4 shrink-0" />
        {es
          ? "La franja queda solicitada. Confirmaremos el trabajo y te contactaremos por WhatsApp."
          : "The time slot is requested. We will confirm the work and contact you on WhatsApp."}
      </p>
    </form>
  );
}
