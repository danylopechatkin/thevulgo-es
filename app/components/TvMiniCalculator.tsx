"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
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
import { marketWhatsAppHref } from "@/lib/marketLinks";

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
type SubmittedRequest = FormState & {
  service: string;
  price: number;
};

const TV_BOOKING_SUCCESS_EVENT = "thevulgo:tv-booking-success";

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
  const [baseId, setBaseId] = useState(baseOptions[0]?.id || "");
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
  const [submittedRequest, setSubmittedRequest] =
    useState<SubmittedRequest | null>(null);
  const started = useRef(false);
  const today = madridToday();

  useEffect(() => {
    trackMarketingEvent("calculator_view", { source: "tv_landing", service: "tv_standard_mount", metadata: { calculator_type: "tv_mini", locale } });
  }, [locale]);

  const selected = baseOptions.filter((option) => option.id === baseId);
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
    trackMarketingEvent("calculator_started", {
      source: "tv_landing",
      service: "tv_standard_mount",
      metadata: { calculator_type: "tv_mini", locale },
    });
  };
  const update = (field: keyof FormState, value: string) => {
    markStarted();
    if (field === "date" && value) {
      trackMarketingEvent("schedule_completed", {
        source: "tv_landing",
        service: "TV Mounting",
        metadata: { calculator_type: "tv_mini", locale },
      });
    }
    setForm((current) => ({
      ...current,
      [field]: value,
      ...(field === "date" ? { time: "" } : {}),
    }));
    setError("");
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
    trackMarketingEvent("booking_submit_attempt", { source: "tv_landing", service: baseId, metadata: { calculator_type: "tv_mini", locale, current_price: total, quantity: 1 } });
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
          visitorId: attribution.visitorId,
          gclid: attribution.gclid,
          firstTouch: attribution.firstTouch,
          lastTouch: attribution.lastTouch,
          deviceType: attribution.deviceType,
          serviceCategory: "tv",
          serviceId: baseId,
          displayedPrice: total,
          selectedPrice: total,
        }),
      });
      const body = await response.json();
      if (!response.ok || !body.success) {
        if (response.status === 409)
          setForm((current) => ({ ...current, time: "" }));
        throw new Error(body.error || "submit");
      }
      trackMarketingEvent("booking_completed", {
        source: "tv_landing",
        service: baseId,
        metadata: { calculator_type: "tv_mini", value: total, currency: "EUR", locale },
      });
      setSubmittedRequest({
        ...form,
        service: selected[0]?.label || (es ? "Montaje de TV" : "TV mounting"),
        price: total,
      });
      setSuccess(true);
      window.dispatchEvent(
        new CustomEvent(TV_BOOKING_SUCCESS_EVENT, { detail: true }),
      );
    } catch (cause) {
      trackMarketingEvent("booking_submit_failed", { source: "tv_landing", service: baseId, metadata: { calculator_type: "tv_mini", error_type: "api_failure", endpoint: "/api/send", locale } });
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

  const startAnotherRequest = () => {
    setSuccess(false);
    setSubmittedRequest(null);
    setError("");
    window.dispatchEvent(
      new CustomEvent(TV_BOOKING_SUCCESS_EVENT, { detail: false }),
    );
  };

  const formattedDate = submittedRequest?.date
    ? new Intl.DateTimeFormat(es ? "es-ES" : "en-GB", {
        day: "numeric",
        month: "long",
      }).format(new Date(`${submittedRequest.date}T12:00:00`))
    : "";

  const successWhatsAppHref = marketWhatsAppHref({
    locale,
    market: "valencia",
    serviceName: es ? "montaje de TV" : "TV mounting",
  });

  if (success && submittedRequest)
    return (
      <div
        id="tv-calculator"
        className="h-fit rounded-[1.75rem] border-2 border-yellow-400 bg-white p-5 shadow-2xl sm:p-6"
      >
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-100">
            <CheckCircle2 className="h-6 w-6 text-emerald-700" />
          </span>
          <div className="min-w-0">
            <h2 className="text-2xl font-black leading-tight">
              {es ? "Solicitud recibida" : "Request received"}
            </h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              {es
                ? `¡Perfecto, ${submittedRequest.name}! Ya tenemos tu solicitud. Te escribiremos por WhatsApp para confirmar los detalles de la visita.`
                : `Perfect, ${submittedRequest.name}! We have your request. We will message you on WhatsApp to confirm the visit details.`}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="font-black">{es ? "Montaje de TV" : "TV mounting"}</p>
              <p className="mt-0.5 text-sm text-neutral-600">
                {submittedRequest.service.replace(
                  /Instalación de TV |TV installation /i,
                  "",
                )}
              </p>
            </div>
            <p className="shrink-0 text-xl font-black">€{submittedRequest.price}</p>
          </div>
          <div className="mt-3 grid gap-2 border-t border-neutral-200 pt-3 text-sm font-semibold text-neutral-700">
            <p className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 shrink-0 text-yellow-600" />
              <span className="capitalize">{formattedDate}</span> · {submittedRequest.time}
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600" />
              <span className="break-words">{submittedRequest.location}, Valencia</span>
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-2 text-sm font-bold text-neutral-700 sm:grid-cols-3 sm:gap-3">
          <p className="flex items-center gap-2 text-emerald-700">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            {es ? "Solicitud recibida" : "Request received"}
          </p>
          <p className="flex items-center gap-2 before:text-yellow-600 before:content-['→']">
            {es ? "Confirmación por WhatsApp" : "WhatsApp confirmation"}
          </p>
          <p className="flex items-center gap-2 before:text-yellow-600 before:content-['→']">
            {es ? "Visita del técnico" : "Technician visit"}
          </p>
        </div>

        <a
          href={successWhatsAppHref}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3.5 font-black text-black shadow-sm transition hover:bg-yellow-300"
        >
          {es ? "Abrir WhatsApp" : "Open WhatsApp"}
          <ArrowRight className="h-5 w-5" />
        </a>

        <div className="mt-4 flex min-w-0 items-start gap-2 rounded-xl bg-yellow-50 p-3 text-sm">
          <Mail className="mt-0.5 h-4 w-4 shrink-0" />
          <div className="min-w-0">
            <p className="text-neutral-600">
              {es ? "Resumen enviado a" : "Summary sent to"}
            </p>
            <p className="break-all font-bold">{submittedRequest.email}</p>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-neutral-500">
          {es ? "¿Has cometido un error?" : "Made a mistake?"}{" "}
          <button
            type="button"
            onClick={startAnotherRequest}
            className="font-bold text-neutral-950 underline decoration-yellow-400 underline-offset-4"
          >
            {es ? "Enviar otra solicitud" : "Send another request"}
          </button>
        </p>
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

      <div className="mt-4 grid min-w-0 grid-cols-1 gap-3 border-t border-yellow-200 pt-4 sm:grid-cols-2">
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

export function TvHeroWhatsAppCta({
  locale,
  href,
}: {
  locale: string;
  href: string;
}) {
  const es = locale === "es";
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleSuccess = (event: Event) => {
      setSubmitted(Boolean((event as CustomEvent<boolean>).detail));
    };
    window.addEventListener(TV_BOOKING_SUCCESS_EVENT, handleSuccess);
    return () =>
      window.removeEventListener(TV_BOOKING_SUCCESS_EVENT, handleSuccess);
  }, []);

  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
    >
      {submitted
        ? es
          ? "¿Necesitas añadir algo? Escríbenos por WhatsApp"
          : "Need to add something? Message us on WhatsApp"
        : es
          ? "Pedir presupuesto por WhatsApp"
          : "Request a quote on WhatsApp"}
      <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
    </a>
  );
}
