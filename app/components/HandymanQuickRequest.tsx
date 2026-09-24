"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ImagePlus,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import {
  getClientAttribution,
  trackMarketingEvent,
} from "@/lib/client-attribution";
import { marketWhatsAppHref } from "@/lib/marketLinks";

type FormState = {
  description: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  date: string;
  time: string;
  flexibleSchedule: boolean;
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

const emptyForm: FormState = {
  description: "",
  name: "",
  phone: "",
  email: "",
  location: "",
  date: "",
  time: "",
  flexibleSchedule: false,
};

type SelectedPhoto = { file: File; preview: string };
const PHOTO_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_PHOTOS = 5;
const MAX_PHOTO_SIZE = 6 * 1024 * 1024;

export default function HandymanQuickRequest({ locale }: { locale: string }) {
  const es = locale === "es";
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submittedRequest, setSubmittedRequest] = useState<FormState | null>(null);
  const [photos, setPhotos] = useState<SelectedPhoto[]>([]);
  const [bookedTimes, setBookedTimes] = useState<string[]>([]);
  const [loadingAvailability, setLoadingAvailability] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const started = useRef(false);
  const photosRef = useRef<SelectedPhoto[]>([]);
  const today = madridToday();

  useEffect(() => {
    photosRef.current = photos;
  }, [photos]);

  useEffect(() => () => {
    photosRef.current.forEach((photo) => URL.revokeObjectURL(photo.preview));
  }, []);

  useEffect(() => {
    trackMarketingEvent("calculator_view", {
      source: "handyman_landing",
      service: "handyman_quick_request",
      metadata: { calculator_type: "handyman_quick_request", locale },
    });
  }, [locale]);

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
        if ((cause as Error).name !== "AbortError") {
          setError(
            es
              ? "No pudimos cargar las horas disponibles."
              : "We could not load available times.",
          );
        }
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
      source: "handyman_landing",
      service: "handyman_quick_request",
      metadata: { calculator_type: "handyman_quick_request", locale },
    });
  };

  const update = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    markStarted();
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
      !form.description.trim() ||
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.location.trim() ||
      !form.date ||
      !form.time ||
      !privacyAccepted
    ) {
      setError(
        es
          ? "Completa todos los campos para enviar la solicitud."
          : "Complete every field to send the request.",
      );
      return;
    }

    setSubmitting(true);
    trackMarketingEvent("booking_submit_attempt", {
      source: "handyman_landing",
      service: "handyman_quick_request",
      metadata: { calculator_type: "handyman_quick_request", locale },
    });

    try {
      const attribution = getClientAttribution();
      const payload = {
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
        flexibleSchedule: form.flexibleSchedule,
        notes: form.description.trim(),
        category: "Manitas",
        services: [
          {
            id: "handyman-quick-request",
            label: es ? "Servicio de manitas" : "Handyman service",
            price: 0,
            qty: 1,
            description: form.description.trim(),
            flexible_schedule: form.flexibleSchedule,
          },
        ],
        locale,
        sourceUrl: window.location.href,
        attributionSource: "handyman_quick_request",
        attributionService: "Handyman",
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
        serviceCategory: "handyman",
        serviceId: "handyman_quick_request",
        ctaId: "handyman_hero_quick_request",
      };
      const requestBody = new FormData();
      requestBody.append("payload", JSON.stringify(payload));
      photos.forEach(({ file }) => requestBody.append("photos", file));
      const response = await fetch("/api/send", {
        method: "POST",
        body: requestBody,
      });
      const body = await response.json();
      if (!response.ok || !body.success) {
        if (response.status === 409) {
          setForm((current) => ({ ...current, time: "" }));
        }
        throw new Error(body.error || "submit");
      }

      setSubmittedRequest({
        ...form,
        description: form.description.trim(),
        name: form.name.trim(),
        email: form.email.trim(),
        location: form.location.trim(),
      });
      trackMarketingEvent("booking_completed", {
        source: "handyman_landing",
        service: "handyman_quick_request",
        metadata: { calculator_type: "handyman_quick_request", locale },
      });
    } catch (cause) {
      trackMarketingEvent("booking_submit_failed", {
        source: "handyman_landing",
        service: "handyman_quick_request",
        metadata: {
          calculator_type: "handyman_quick_request",
          error_type: "api_failure",
          endpoint: "/api/send",
          locale,
        },
      });
      setError(
        cause instanceof Error && cause.message === "This time is already booked"
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

  const formattedDate = submittedRequest?.date
    ? new Intl.DateTimeFormat(es ? "es-ES" : "en-GB", {
        day: "numeric",
        month: "long",
      }).format(new Date(`${submittedRequest.date}T12:00:00`))
    : "";
  const whatsappHref = marketWhatsAppHref({
    locale,
    market: "valencia",
    serviceName: es ? "un servicio de manitas" : "a handyman service",
  });
  const availableTimes = TIMES.filter((time) => !bookedTimes.includes(time));

  if (submittedRequest) {
    return (
      <div className="h-fit rounded-[1.75rem] border-2 border-yellow-400 bg-white p-5 shadow-2xl sm:p-6">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-100">
            <CheckCircle2 className="h-6 w-6 text-emerald-700" />
          </span>
          <div className="min-w-0">
            <h2 className="text-2xl font-black">
              {es ? "Solicitud recibida" : "Request received"}
            </h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              {es
                ? `¡Perfecto, ${submittedRequest.name}! Ya tenemos los detalles de tu solicitud. La revisaremos y te escribiremos por WhatsApp.`
                : `Perfect, ${submittedRequest.name}! We have your request details. We will review them and message you on WhatsApp.`}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
          <p className="font-black">
            {es ? "Servicio de manitas" : "Handyman service"}
          </p>
          <p className="mt-1 line-clamp-3 break-words text-sm leading-5 text-neutral-600">
            {submittedRequest.description}
          </p>
          <div className="mt-3 grid gap-2 border-t border-neutral-200 pt-3 text-sm font-semibold text-neutral-700">
            <p className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 shrink-0 text-yellow-600" />
              {submittedRequest.flexibleSchedule ? (
                es ? "Horario flexible" : "Flexible schedule"
              ) : (
                <><span className="capitalize">{formattedDate}</span> · {submittedRequest.time}</>
              )}
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600" />
              <span className="break-words">{submittedRequest.location}, Valencia</span>
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-2 text-sm font-bold text-neutral-700 sm:grid-cols-3">
          <p className="flex items-center gap-2 text-emerald-700">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            {es ? "Solicitud recibida" : "Request received"}
          </p>
          <p className="before:mr-2 before:text-yellow-600 before:content-['→']">
            {es ? "Revisamos el trabajo" : "We review the job"}
          </p>
          <p className="before:mr-2 before:text-yellow-600 before:content-['→']">
            {es ? "Presupuesto por WhatsApp" : "Quote by WhatsApp"}
          </p>
        </div>

        <a
          href={whatsappHref}
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
            onClick={() => {
              setSubmittedRequest(null);
              setError("");
            }}
            className="font-bold text-neutral-950 underline decoration-yellow-400 underline-offset-4"
          >
            {es ? "Enviar otra solicitud" : "Send another request"}
          </button>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-[1.75rem] border-2 border-yellow-400 bg-white p-4 shadow-2xl sm:p-5 lg:-translate-y-5"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-yellow-400">
          <Wrench className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[11px] font-black uppercase tracking-[.16em] text-yellow-600">
            {es ? "Reserva rápida · 2 minutos" : "Quick request · 2 minutes"}
          </p>
          <h2 className="text-xl font-black leading-tight">
            {es ? "Cuéntanos qué necesitas" : "Tell us what you need"}
          </h2>
        </div>
      </div>

      <label className="mt-4 block text-xs font-extrabold">
        {es ? "¿Qué necesitas reparar o instalar? *" : "What do you need repaired or installed? *"}
        <textarea
          value={form.description}
          onChange={(event) => update("description", event.target.value)}
          rows={3}
          maxLength={1200}
          className="mt-1.5 h-24 w-full resize-y rounded-xl border border-neutral-300 bg-white px-4 py-3 text-base font-normal text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100"
          placeholder={
            es
              ? "Ej. Necesito reparar un agujero en pladur y volver a colocar una estantería."
              : "E.g. I need a hole in drywall repaired and a shelf put back up."
          }
          required
        />
      </label>

      <div className="mt-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-extrabold">
              {es ? "Fotos del trabajo" : "Job photos"}
            </p>
            <p className="mt-0.5 text-[11px] leading-4 text-neutral-500">
              {es
                ? "Opcional, pero nos ayuda a darte un presupuesto más preciso."
                : "Optional, but it helps us give you a more accurate quote."}
            </p>
          </div>
          <label className="inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-neutral-950 bg-white px-4 py-2 text-xs font-black transition hover:border-yellow-500 disabled:opacity-50">
            <ImagePlus className="h-4 w-4" />
            {es ? "+ Añadir fotos" : "+ Add photos"}
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              className="sr-only"
              disabled={photos.length >= MAX_PHOTOS}
              onChange={(event) => {
                const selected = Array.from(event.target.files || []);
                const remaining = MAX_PHOTOS - photos.length;
                const invalid = selected.find(
                  (file) =>
                    !PHOTO_TYPES.has(file.type) || file.size > MAX_PHOTO_SIZE,
                );
                if (invalid) {
                  setError(
                    es
                      ? "Usa fotos JPG, PNG o WebP de hasta 6 MB."
                      : "Use JPG, PNG or WebP photos up to 6 MB.",
                  );
                } else if (selected.length > remaining) {
                  setError(
                    es
                      ? "Puedes añadir hasta 5 fotos."
                      : "You can add up to 5 photos.",
                  );
                }
                const accepted = selected
                  .filter(
                    (file) =>
                      PHOTO_TYPES.has(file.type) && file.size <= MAX_PHOTO_SIZE,
                  )
                  .slice(0, remaining)
                  .map((file) => ({ file, preview: URL.createObjectURL(file) }));
                setPhotos((current) => [...current, ...accepted]);
                event.target.value = "";
              }}
            />
          </label>
        </div>
        {photos.length ? (
          <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
            {photos.map((photo, index) => (
              <div key={photo.preview} className="relative aspect-square overflow-hidden rounded-xl border border-neutral-200 bg-white">
                <Image src={photo.preview} alt={es ? `Foto ${index + 1}` : `Photo ${index + 1}`} fill unoptimized className="object-cover" />
                <button
                  type="button"
                  aria-label={es ? `Eliminar foto ${index + 1}` : `Remove photo ${index + 1}`}
                  onClick={() => {
                    URL.revokeObjectURL(photo.preview);
                    setPhotos((current) => current.filter((item) => item !== photo));
                  }}
                  className="absolute right-1 top-1 grid h-7 w-7 place-items-center rounded-full bg-neutral-950 text-white shadow"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-3 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block min-w-0 text-xs font-extrabold">
          {es ? "Nombre *" : "Name *"}
          <input className="input-style mt-1.5" value={form.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" required />
        </label>
        <label className="block min-w-0 text-xs font-extrabold">
          WhatsApp *
          <span className="relative mt-1.5 block">
            <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input className="input-style pl-10" value={form.phone} onChange={(event) => update("phone", event.target.value)} type="tel" inputMode="tel" autoComplete="tel" required />
          </span>
        </label>
        <label className="block min-w-0 text-xs font-extrabold">
          Email *
          <input className="input-style mt-1.5" value={form.email} onChange={(event) => update("email", event.target.value)} type="email" autoComplete="email" required />
        </label>
        <label className="block min-w-0 text-xs font-extrabold">
          {es ? "Zona o dirección *" : "Area or address *"}
          <span className="relative mt-1.5 block">
            <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input className="input-style pl-10" value={form.location} onChange={(event) => update("location", event.target.value)} autoComplete="street-address" required />
          </span>
        </label>
        <label className="block min-w-0 text-xs font-extrabold">
          {es ? "Fecha preferida *" : "Preferred date *"}
          <input className="input-style tv-date-input mt-1.5 block" value={form.date} min={today} onChange={(event) => update("date", event.target.value)} type="date" required />
        </label>
        <label className="block min-w-0 text-xs font-extrabold">
          {es ? "Hora disponible *" : "Available time *"}
          <select className="input-style mt-1.5 disabled:bg-neutral-100" value={form.time} onChange={(event) => update("time", event.target.value)} disabled={!form.date || loadingAvailability} required>
            <option value="">{loadingAvailability ? (es ? "Comprobando…" : "Checking…") : es ? "Seleccionar hora" : "Choose a time"}</option>
            {availableTimes.map((time) => <option key={time} value={time}>{time}</option>)}
          </select>
        </label>
      </div>

      <label className="mt-3 flex cursor-pointer items-center gap-2 rounded-xl border border-neutral-200 p-3 text-xs font-semibold text-neutral-700">
        <input type="checkbox" checked={form.flexibleSchedule} onChange={(event) => update("flexibleSchedule", event.target.checked)} className="h-4 w-4 shrink-0 accent-yellow-400" />
        {es ? "Soy flexible con la fecha y hora" : "I am flexible with the date and time"}
      </label>

      <label className="mt-3 flex cursor-pointer items-start gap-2 rounded-xl border border-neutral-200 p-3 text-[11px] leading-4 text-neutral-600">
        <input type="checkbox" checked={privacyAccepted} onChange={(event) => setPrivacyAccepted(event.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-yellow-400" required />
        <span>
          {es ? "Acepto el uso de mis datos para gestionar esta solicitud." : "I agree to the use of my details to manage this request."}{" "}
          <a href={`/${locale}/privacy`} target="_blank" className="font-bold underline decoration-yellow-400 underline-offset-2">{es ? "Privacidad" : "Privacy"}</a>
        </span>
      </label>

      {error ? <p role="alert" className="mt-3 rounded-xl bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p> : null}

      <div className="mt-4 grid gap-3 rounded-2xl bg-neutral-950 p-3.5 text-white sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            {es ? "Presupuesto personalizado" : "Personal quote"}
          </p>
          <p className="mt-1 text-xs leading-5 text-neutral-300">
            {es ? "Te confirmaremos el precio antes de realizar el trabajo." : "We will confirm the price before carrying out the work."}
          </p>
        </div>
        <button type="submit" disabled={submitting} className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 text-sm font-black text-black transition hover:bg-yellow-300 disabled:opacity-60 sm:w-auto">
          {submitting ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <><Send className="h-4 w-4" />{es ? "Solicitar presupuesto" : "Request quote"}</>}
        </button>
      </div>
      <p className="mt-2 text-center text-[10px] leading-4 text-neutral-500">
        {es ? "Sin pago ahora. Revisamos tu solicitud y te escribimos por WhatsApp." : "No payment now. We review your request and message you on WhatsApp."}
      </p>
    </form>
  );
}
