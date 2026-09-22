"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  Send,
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
  location: string;
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
    location: "",
    date: "",
    time: "",
  });
  const [bookedTimes, setBookedTimes] = useState<string[]>([]);
  const [loadingAvailability, setLoadingAvailability] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
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
      !form.location.trim() ||
      !form.date ||
      !form.time ||
      !privacyAccepted
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
          area: form.location.trim(),
          houseAddress: form.location.trim(),
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
      className="rounded-[1.75rem] border-2 border-yellow-400 bg-white p-4 shadow-2xl sm:p-5"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-yellow-400">
          <Tv className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-black uppercase tracking-[.16em] text-yellow-600">
            {es ? "Reserva rápida · 2 minutos" : "Quick request · 2 minutes"}
          </p>
          <h2 className="text-xl font-black leading-tight">
            {es ? "Elige tu montaje de TV" : "Choose your TV installation"}
          </h2>
        </div>
      </div>

      <fieldset className="mt-4">
        <legend className="sr-only">
          {es ? "Tamaño de la TV" : "TV size"}
        </legend>
        <div className="grid grid-cols-2 gap-2">
          {baseOptions.map((option) => {
            const active = option.id === baseId;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  markStarted();
                  setBaseId(option.id);
                }}
                className={`relative rounded-2xl border-2 p-3 text-left transition active:scale-[.98] ${active ? "border-black bg-yellow-400 shadow-md" : "border-neutral-200 hover:border-yellow-400"}`}
              >
                {active ? (
                  <BadgeCheck className="absolute right-3 top-3 h-4 w-4" />
                ) : null}
                <span className="block pr-5 text-xs font-bold leading-4 text-neutral-600">
                  {option.label.replace(
                    /Instalación de TV |TV installation /i,
                    "",
                  )}
                </span>
                <strong className="mt-1 block text-2xl font-black">
                  €{option.price}
                </strong>
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="mt-4 border-t border-yellow-200 pt-4">
        <legend className="px-1 text-xs font-black uppercase tracking-wide text-neutral-500">
          {es ? "Extras opcionales" : "Optional extras"}
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {extras.map((option) => (
            <label
              key={option.id}
              className={`flex cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold transition ${extraIds.includes(option.id) ? "border-yellow-500 bg-yellow-50" : "border-neutral-200 hover:border-yellow-400"}`}
            >
              <input
                type="checkbox"
                checked={extraIds.includes(option.id)}
                onChange={() => toggleExtra(option.id)}
                className="h-4 w-4 accent-yellow-400"
              />
              <span>{option.label}</span>
              <strong>€{option.price}</strong>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-4 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block min-w-0 text-xs font-extrabold">
          {es ? "Nombre *" : "Name *"}
          <input
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className="input-style mt-1.5"
            placeholder={es ? "Tu nombre" : "Your name"}
            autoComplete="name"
            required
          />
        </label>
        <label className="block min-w-0 text-xs font-extrabold">
          WhatsApp *
          <span className="relative mt-1.5 block min-w-0">
            <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              value={form.phone}
              onChange={(event) => update("phone", event.target.value)}
              className="input-style pl-10"
              placeholder="+34 600 000 000"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
            />
          </span>
        </label>
        <label className="block min-w-0 text-xs font-extrabold">
          Email *
          <input
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            className="input-style mt-1.5"
            placeholder="email@example.com"
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <label className="block min-w-0 text-xs font-extrabold">
          {es ? "Zona o dirección *" : "Area or address *"}
          <span className="relative mt-1.5 block min-w-0">
            <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              value={form.location}
              onChange={(event) => update("location", event.target.value)}
              className="input-style pl-10"
              placeholder={
                es ? "Ej. Benimaclet, Mislata…" : "E.g. Benimaclet, Mislata…"
              }
              autoComplete="street-address"
              required
            />
          </span>
        </label>
        <label className="block min-w-0 text-xs font-extrabold">
          {es ? "Fecha preferida *" : "Preferred date *"}
          <input
            value={form.date}
            min={today}
            onChange={(event) => update("date", event.target.value)}
            className="input-style mt-1.5 block"
            type="date"
            required
          />
        </label>
        <label className="block min-w-0 text-xs font-extrabold">
          {es ? "Hora disponible *" : "Available time *"}
          <select
            value={form.time}
            onChange={(event) => update("time", event.target.value)}
            disabled={!form.date || loadingAvailability}
            className="input-style mt-1.5 disabled:bg-neutral-100"
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

      <label className="mt-3 flex w-full min-w-0 cursor-pointer items-start gap-2 rounded-xl border border-neutral-200 p-3 text-[11px] leading-4 text-neutral-600">
        <input
          type="checkbox"
          checked={privacyAccepted}
          onChange={(event) => setPrivacyAccepted(event.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-yellow-400"
          required
        />
        <span className="min-w-0 flex-1">
          {es
            ? "Acepto el uso de mis datos para gestionar esta solicitud."
            : "I agree to the use of my details to manage this request."}{" "}
          <a
            href={`/${locale}/privacy`}
            target="_blank"
            className="font-bold underline decoration-yellow-400 underline-offset-2"
          >
            {es ? "Privacidad" : "Privacy"}
          </a>
        </span>
      </label>

      {error ? (
        <p
          role="alert"
          className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-bold text-red-700"
        >
          {error}
        </p>
      ) : null}
      <div className="mt-4 grid w-full min-w-0 grid-cols-[minmax(0,1fr)_minmax(150px,1.35fr)] items-center gap-3 rounded-2xl bg-neutral-950 p-3.5 text-white">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            {es ? "Precio seleccionado" : "Selected price"}
          </p>
          <p className="text-2xl font-black">€{total}</p>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-14 min-w-0 w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-3 py-3 text-center text-sm font-black leading-tight text-black transition hover:scale-[1.02] disabled:opacity-60"
        >
          {submitting ? (
            <LoaderCircle className="h-5 w-5 animate-spin" />
          ) : es ? (
            <>
              <Send className="h-4 w-4" /> Solicitar montaje
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Request installation
            </>
          )}
        </button>
      </div>
      <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-[10px] leading-4 text-neutral-500">
        <CalendarDays className="h-4 w-4 shrink-0" />
        {es
          ? "Sin pago ahora. Confirmamos contigo por WhatsApp."
          : "No payment now. We confirm with you on WhatsApp."}
      </p>
    </form>
  );
}
