"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ImagePlus,
  LoaderCircle,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import {
  getClientAttribution,
  trackMarketingEvent,
} from "@/lib/client-attribution";
import { buildWhatsAppHref } from "@/lib/commercial";

type SelectedPhoto = { file: File; preview: string };
type ContactDetails = {
  name: string;
  phone: string;
  address: string;
  email: string;
};

const PHOTO_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_PHOTOS = 5;
const MAX_PHOTO_SIZE = 6 * 1024 * 1024;

export default function HomeQuickRequestCard({
  locale,
  city,
}: {
  locale: string;
  city: string;
}) {
  const es = locale === "es";
  const [step, setStep] = useState<1 | 2 | "success">(1);
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState<SelectedPhoto[]>([]);
  const photosRef = useRef<SelectedPhoto[]>([]);
  const [contact, setContact] = useState<ContactDetails>({
    name: "",
    phone: "",
    address: "",
    email: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    photosRef.current = photos;
  }, [photos]);

  useEffect(() => () => {
    photosRef.current.forEach((photo) => URL.revokeObjectURL(photo.preview));
  }, []);

  const whatsappHref = buildWhatsAppHref("handyman", locale, city);

  const addPhotos = (files: FileList | null) => {
    const selected = Array.from(files || []);
    const remaining = MAX_PHOTOS - photos.length;
    const invalid = selected.find(
      (file) => !PHOTO_TYPES.has(file.type) || file.size > MAX_PHOTO_SIZE,
    );
    if (invalid) {
      setError(
        es
          ? "Usa fotos JPG, PNG o WebP de hasta 6 MB."
          : "Use JPG, PNG or WebP photos up to 6 MB.",
      );
    } else if (selected.length > remaining) {
      setError(
        es ? "Puedes añadir hasta 5 fotos." : "You can add up to 5 photos.",
      );
    } else {
      setError("");
    }
    const accepted = selected
      .filter(
        (file) => PHOTO_TYPES.has(file.type) && file.size <= MAX_PHOTO_SIZE,
      )
      .slice(0, remaining)
      .map((file) => ({ file, preview: URL.createObjectURL(file) }));
    setPhotos((current) => [...current, ...accepted]);
  };

  const continueToContact = () => {
    if (!description.trim()) {
      setError(
        es
          ? "Cuéntanos brevemente qué necesitas."
          : "Briefly tell us what you need.",
      );
      return;
    }
    setError("");
    setStep(2);
    trackMarketingEvent("details_completed", {
      source: "homepage",
      service: "homepage_quick_request",
      metadata: { calculator_type: "homepage_quick_request", locale },
    });
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!contact.name.trim() || !contact.phone.trim() || !contact.address.trim()) {
      setError(
        es
          ? "Completa nombre, WhatsApp y dirección."
          : "Complete your name, WhatsApp and address.",
      );
      return;
    }

    setSubmitting(true);
    setError("");
    trackMarketingEvent("booking_submit_attempt", {
      source: "homepage",
      service: "homepage_quick_request",
      metadata: { calculator_type: "homepage_quick_request", locale },
    });

    try {
      const attribution = getClientAttribution();
      const payload = {
        fullName: contact.name.trim(),
        phone: contact.phone.trim(),
        email: contact.email.trim(),
        city,
        area: "",
        houseAddress: contact.address.trim(),
        apartmentNumber: "",
        addressDetails: "",
        notes: description.trim(),
        category: "Manitas",
        services: [
          {
            id: "homepage-quick-request",
            label: es ? "Solicitud desde la web" : "Website request",
            price: 0,
            qty: 1,
            description: description.trim(),
          },
        ],
        locale,
        sourceUrl: window.location.href,
        attributionSource: "homepage_quick_request",
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
        serviceId: "homepage_quick_request",
        ctaId: "home_hero_quick_request",
      };
      const requestBody = new FormData();
      requestBody.append("payload", JSON.stringify(payload));
      photos.forEach(({ file }) => requestBody.append("photos", file));

      const response = await fetch("/api/send", {
        method: "POST",
        body: requestBody,
      });
      const body = await response.json();
      if (!response.ok || !body.success) throw new Error(body.error || "submit");

      setStep("success");
      trackMarketingEvent("booking_completed", {
        source: "homepage",
        service: "homepage_quick_request",
        metadata: { calculator_type: "homepage_quick_request", locale },
      });
    } catch {
      setError(
        es
          ? "No pudimos enviar la solicitud. Inténtalo de nuevo."
          : "We could not send the request. Please try again.",
      );
      trackMarketingEvent("booking_submit_failed", {
        source: "homepage",
        service: "homepage_quick_request",
        metadata: {
          calculator_type: "homepage_quick_request",
          error_type: "api_failure",
          endpoint: "/api/send",
          locale,
        },
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (step === "success") {
    return (
      <div className="flex min-h-[430px] flex-col justify-center rounded-3xl bg-neutral-950 p-7 text-white shadow-2xl md:p-9">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-6 w-6 text-emerald-700" />
        </span>
        <h2 className="mt-5 text-3xl font-black">
          {es ? "Solicitud recibida" : "Request received"}
        </h2>
        <p className="mt-3 leading-7 text-neutral-300">
          {es
            ? `Gracias, ${contact.name}. Revisaremos tu solicitud y te escribiremos por WhatsApp para darte presupuesto.`
            : `Thank you, ${contact.name}. We will review your request and message you on WhatsApp with a quote.`}
        </p>
        {photos.length ? (
          <p className="mt-4 text-sm font-bold text-neutral-300">
            {es ? "Fotos recibidas" : "Photos received"}: {photos.length}
          </p>
        ) : null}
        <a
          href={whatsappHref}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-black text-black transition hover:bg-yellow-300"
        >
          <MessageCircle className="h-5 w-5 text-yellow-600" />
          {es ? "Abrir WhatsApp" : "Open WhatsApp"}
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-[430px] rounded-3xl bg-neutral-950 p-6 text-white shadow-2xl md:p-8">
      <div className="flex items-center gap-3">
        <Sparkles className="h-6 w-6 shrink-0 text-[#ffcc00]" />
        <div>
          <p className="text-[10px] font-black uppercase tracking-[.16em] text-yellow-400">
            {es ? `Paso ${step} de 2` : `Step ${step} of 2`}
          </p>
          <h2 className="text-2xl font-black">
            {step === 1
              ? es
                ? "¿Varias cosas pendientes?"
                : "Several jobs on your list?"
              : es
                ? "Tus datos"
                : "Your details"}
          </h2>
        </div>
      </div>

      {step === 1 ? (
        <div className="mt-5">
          <p className="text-sm text-neutral-300">
            {es
              ? "Cuéntanos qué necesitas y te damos presupuesto."
              : "Tell us what you need and we will prepare a quote."}
          </p>
          <label className="mt-4 block text-xs font-bold">
            {es ? "¿Qué necesitas hacer?" : "What do you need done?"}
            <textarea
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
                setError("");
              }}
              rows={4}
              maxLength={1200}
              className="mt-1.5 h-28 w-full resize-none rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm font-normal text-white outline-none transition placeholder:text-neutral-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              placeholder={
                es
                  ? "Ej. montar una TV, reparar una pared y colgar dos estanterías..."
                  : "E.g. mount a TV, repair a wall and hang two shelves..."
              }
            />
          </label>

          <div className="mt-3 rounded-xl border border-neutral-800 bg-neutral-900/70 p-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold">
                  {es ? "Añadir fotos" : "Add photos"}
                </p>
                <p className="text-[10px] text-neutral-400">
                  {es ? "Opcional · Hasta 5 fotos" : "Optional · Up to 5 photos"}
                </p>
              </div>
              <label className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-xl bg-white text-black transition hover:bg-yellow-300">
                <ImagePlus className="h-5 w-5" />
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  multiple
                  disabled={photos.length >= MAX_PHOTOS}
                  className="sr-only"
                  onChange={(event) => {
                    addPhotos(event.target.files);
                    event.target.value = "";
                  }}
                />
              </label>
            </div>
            {photos.length ? (
              <div className="mt-3 grid grid-cols-5 gap-2">
                {photos.map((photo, index) => (
                  <div key={photo.preview} className="relative aspect-square overflow-hidden rounded-lg border border-neutral-700">
                    <Image src={photo.preview} alt={es ? `Foto ${index + 1}` : `Photo ${index + 1}`} fill unoptimized className="object-cover" />
                    <button
                      type="button"
                      aria-label={es ? `Eliminar foto ${index + 1}` : `Remove photo ${index + 1}`}
                      onClick={() => {
                        URL.revokeObjectURL(photo.preview);
                        setPhotos((current) => current.filter((item) => item !== photo));
                      }}
                      className="absolute right-0.5 top-0.5 grid h-6 w-6 place-items-center rounded-full bg-black/85 text-white"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {error ? <p role="alert" className="mt-3 text-xs font-bold text-red-300">{error}</p> : null}
          <button
            type="button"
            onClick={continueToContact}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-black text-black transition hover:bg-yellow-300"
          >
            {es ? "Continuar" : "Continue"}
            <ArrowRight className="h-5 w-5 text-yellow-600" />
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-xs font-bold">
              {es ? "Nombre *" : "Name *"}
              <input value={contact.name} onChange={(event) => setContact((current) => ({ ...current, name: event.target.value }))} className="mt-1.5 h-12 w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 text-sm text-white outline-none focus:border-yellow-400" autoComplete="name" required />
            </label>
            <label className="text-xs font-bold">
              WhatsApp *
              <input value={contact.phone} onChange={(event) => setContact((current) => ({ ...current, phone: event.target.value }))} className="mt-1.5 h-12 w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 text-sm text-white outline-none focus:border-yellow-400" type="tel" inputMode="tel" autoComplete="tel" required />
            </label>
            <label className="text-xs font-bold sm:col-span-2">
              {es ? "Zona o dirección *" : "Area or address *"}
              <input value={contact.address} onChange={(event) => setContact((current) => ({ ...current, address: event.target.value }))} className="mt-1.5 h-12 w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 text-sm text-white outline-none focus:border-yellow-400" autoComplete="street-address" required />
            </label>
            <label className="text-xs font-bold sm:col-span-2">
              Email <span className="font-normal text-neutral-400">({es ? "opcional" : "optional"})</span>
              <input value={contact.email} onChange={(event) => setContact((current) => ({ ...current, email: event.target.value }))} className="mt-1.5 h-12 w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 text-sm text-white outline-none focus:border-yellow-400" type="email" autoComplete="email" />
            </label>
          </div>

          {error ? <p role="alert" className="mt-3 text-xs font-bold text-red-300">{error}</p> : null}
          <button type="submit" disabled={submitting} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-black text-black transition hover:bg-yellow-300 disabled:opacity-60">
            {submitting ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <>{es ? "Solicitar presupuesto" : "Request quote"}<ArrowRight className="h-5 w-5 text-yellow-600" /></>}
          </button>
          <p className="mt-2 text-center text-[10px] leading-4 text-neutral-400">
            {es ? "Sin pago ahora · Te escribimos por WhatsApp para confirmar los detalles." : "No payment now · We will message you on WhatsApp to confirm the details."}
          </p>
          <p className="mt-1 text-center text-[10px] leading-4 text-neutral-500">
            {es ? "Al enviar, aceptas nuestra" : "By sending, you accept our"}{" "}
            <Link href={`/${locale}/privacy`} target="_blank" className="underline decoration-yellow-400 underline-offset-2">
              {es ? "Política de privacidad" : "Privacy Policy"}
            </Link>
          </p>
          <button type="button" onClick={() => { setStep(1); setError(""); }} className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-neutral-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> {es ? "Volver" : "Back"}
          </button>
        </form>
      )}
    </div>
  );
}
