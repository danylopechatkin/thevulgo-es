"use client";

import { useState } from "react";
import Link from "next/link";
import { BadgeCheck, CheckCircle2, Fan, ImagePlus, Loader2, MapPin, Phone, Send, X } from "lucide-react";

const packages = [
  { count: 1, price: 45 },
  { count: 2, price: 85 },
  { count: 3, price: 125 },
];

async function compressPhoto(file: File) {
  const source = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
  const image = await new Promise<HTMLImageElement>((resolve, reject) => {
    const element = new Image();
    element.onload = () => resolve(element);
    element.onerror = reject;
    element.src = source;
  });
  const maxSide = 1400;
  const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(image.width * scale);
  canvas.height = Math.round(image.height * scale);
  canvas.getContext("2d")?.drawImage(image, 0, 0, canvas.width, canvas.height);
  let quality = 0.78;
  let result = canvas.toDataURL("image/jpeg", quality);
  while (result.length > 950_000 && quality > 0.42) {
    quality -= 0.08;
    result = canvas.toDataURL("image/jpeg", quality);
  }
  if (result.length > 1_050_000) throw new Error("Photo too large");
  return result;
}

function validPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 9 && digits.length <= 15;
}

export default function FanLeadForm({ locale }: { locale: string }) {
  const isEs = locale === "es";
  const [fanCount, setFanCount] = useState(1);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    area: "",
    installationType: "",
    fanPurchased: "",
    contactTime: "",
    notes: "",
    website: "",
  });
  const [sending, setSending] = useState(false);
  const [processingPhotos, setProcessingPhotos] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [clientEmailSent, setClientEmailSent] = useState(true);
  const [submissionKey] = useState(() =>
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
  );
  const selectedPackage = packages.find((item) => item.count === fanCount)!;

  const update = (field: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    if (!validPhone(form.phone)) {
      setError(isEs ? "Introduce un teléfono válido de 9 a 15 números." : "Enter a valid phone number with 9 to 15 digits.");
      return;
    }
    if (!privacyAccepted) {
      setError(isEs ? "Debes aceptar la política de privacidad." : "You must accept the privacy policy.");
      return;
    }
    setSending(true);
    try {
      const params = new URLSearchParams(window.location.search);
      const attribution = {
        gclid: params.get("gclid") || "",
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
        utm_term: params.get("utm_term") || "",
        utm_content: params.get("utm_content") || "",
        landing_page: window.location.pathname,
        referrer: document.referrer,
        captured_at: new Date().toISOString(),
      };
      const hasCampaignData = Object.entries(attribution).some(
        ([key, value]) => key !== "landing_page" && key !== "referrer" && Boolean(value),
      );
      if (hasCampaignData) localStorage.setItem("thevulgo_fan_attribution", JSON.stringify(attribution));
      let savedAttribution: typeof attribution | null = null;
      try {
        const stored = JSON.parse(localStorage.getItem("thevulgo_fan_attribution") || "null");
        const capturedAt = new Date(stored?.captured_at || 0).getTime();
        if (stored && Date.now() - capturedAt <= 30 * 24 * 60 * 60 * 1000) savedAttribution = stored;
      } catch {
        localStorage.removeItem("thevulgo_fan_attribution");
      }
      const response = await fetch("/api/fan-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, fanCount, locale, photos, privacyAccepted, submissionKey, attribution: savedAttribution || attribution }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error);
      setClientEmailSent(result.clientEmailSent !== false);
      setSent(true);
      setSuccessModalOpen(true);
    } catch {
      setError(isEs
        ? "No se pudo enviar. Revisa los datos o escríbenos por WhatsApp."
        : "We could not send it. Check your details or contact us on WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  const addPhotos = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    event.target.value = "";
    if (!files.length) return;
    if (photos.length + files.length > 4) {
      setError(isEs ? "Puedes añadir un máximo de 4 fotos." : "You can add up to 4 photos.");
      return;
    }
    setProcessingPhotos(true);
    setError("");
    try {
      const compressed = await Promise.all(files.map(compressPhoto));
      setPhotos((current) => [...current, ...compressed]);
    } catch {
      setError(isEs ? "Una foto es demasiado grande o no se puede leer." : "One photo is too large or cannot be read.");
    } finally {
      setProcessingPhotos(false);
    }
  };

  if (sent) {
    return (
      <section id="fan-quote" className="scroll-mt-24 border-y border-yellow-300 bg-yellow-50 px-6 py-14">
        {successModalOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="fan-success-title"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
          >
            <div className="w-full max-w-md overflow-hidden rounded-[2rem] border-2 border-yellow-400 bg-white shadow-2xl">
              <div className="bg-yellow-400 px-6 py-7 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-green-600 text-white shadow-lg">
                  <CheckCircle2 className="h-11 w-11" />
                </div>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-black/60">
                  {isEs ? "Enviado correctamente" : "Sent successfully"}
                </p>
                <h2 id="fan-success-title" className="mt-2 text-3xl font-black text-black">
                  {isEs ? "¡Solicitud recibida!" : "Request received!"}
                </h2>
              </div>

              <div className="p-6 text-center sm:p-8">
                <div className="rounded-2xl border border-yellow-300 bg-yellow-50 p-4">
                  <p className="text-sm font-bold text-neutral-600">
                    {fanCount} {isEs ? (fanCount === 1 ? "ventilador" : "ventiladores") : (fanCount === 1 ? "fan" : "fans")}
                  </p>
                  <p className="mt-1 text-3xl font-black">{selectedPackage.price} €</p>
                </div>
                <p className="mt-5 text-base leading-7 text-neutral-700">
                  {isEs
                    ? `Gracias, ${form.fullName}. Revisaremos la información y te contactaremos por WhatsApp o teléfono para confirmar la instalación.`
                    : `Thank you, ${form.fullName}. We will review the information and contact you by WhatsApp or phone to confirm the installation.`}
                </p>
                {form.email && clientEmailSent && (
                  <p className="mt-3 text-sm font-semibold text-green-700">
                    {isEs ? "También te hemos enviado una confirmación por email." : "We have also sent you an email confirmation."}
                  </p>
                )}
                {!clientEmailSent && (
                  <p className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm font-bold text-amber-900">
                    {isEs ? "La solicitud está guardada, aunque el email de confirmación no pudo enviarse." : "Your request is saved, although the confirmation email could not be sent."}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => setSuccessModalOpen(false)}
                  className="mt-6 w-full rounded-xl bg-black px-6 py-4 text-base font-black text-white shadow-lg transition hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isEs ? "Entendido" : "Done"}
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="mx-auto max-w-3xl rounded-[2rem] border-2 border-yellow-400 bg-white p-8 text-center shadow-xl sm:p-12">
          <CheckCircle2 className="mx-auto h-16 w-16 text-green-600" />
          <h2 className="mt-5 text-3xl font-black">{isEs ? "Solicitud recibida" : "Request received"}</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg leading-8 text-neutral-600">
            {isEs
              ? "Ya aparece en nuestra CRM. Revisaremos los datos y te contactaremos por WhatsApp o teléfono para confirmar la instalación."
              : "It is now in our CRM. We will review it and contact you by WhatsApp or phone to confirm the installation."}
          </p>
          {!clientEmailSent && (
            <p className="mx-auto mt-5 max-w-xl rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm font-bold text-amber-900">
              {isEs ? "La solicitud está guardada, pero no pudimos enviar el email de confirmación. Te contactaremos igualmente." : "Your request is saved, but we could not send the confirmation email. We will still contact you."}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section id="fan-quote" className="scroll-mt-20 border-y border-yellow-300 bg-yellow-50 px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-2 text-xs font-black uppercase tracking-wider shadow-sm">
            <Fan className="h-4 w-4 text-yellow-500" />
            {isEs ? "Presupuesto rápido" : "Quick estimate"}
          </div>
          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
            {isEs ? "¿Cuántos ventiladores quieres instalar?" : "How many fans do you need installed?"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 sm:text-lg">
            {isEs ? "Elige el pack, déjanos tus datos y te contactamos para confirmar los detalles." : "Choose your package, leave your details and we will contact you to confirm everything."}
          </p>
        </div>

        <form onSubmit={submit} className="mt-9 rounded-[2rem] border-2 border-yellow-400 bg-white p-5 shadow-2xl sm:p-8">
          <div className="grid gap-3 sm:grid-cols-3">
            {packages.map((item) => {
              const active = item.count === fanCount;
              return (
                <button
                  key={item.count}
                  type="button"
                  onClick={() => setFanCount(item.count)}
                  className={`relative rounded-2xl border-2 p-5 text-left transition active:scale-[0.98] ${active ? "border-black bg-yellow-400 shadow-lg" : "border-neutral-200 bg-white hover:border-yellow-400"}`}
                >
                  {active && <BadgeCheck className="absolute right-4 top-4 h-5 w-5" />}
                  <span className="block text-sm font-bold text-neutral-600">{item.count} {isEs ? (item.count === 1 ? "ventilador" : "ventiladores") : (item.count === 1 ? "fan" : "fans")}</span>
                  <span className="mt-2 block text-3xl font-black">{item.price} €</span>
                  <span className="mt-1 block text-xs font-semibold text-neutral-600">{isEs ? "Precio del pack" : "Package price"}</span>
                </button>
              );
            })}
          </div>

          <div className="my-7 h-px bg-yellow-200" />

          <div className="grid gap-5 md:grid-cols-2">
            <Field label={isEs ? "Nombre" : "Name"} required>
              <input required value={form.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder={isEs ? "Tu nombre" : "Your name"} className="input-style" />
            </Field>
            <Field label={isEs ? "Teléfono / WhatsApp" : "Phone / WhatsApp"} required>
              <div className="relative"><Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" /><input required type="tel" inputMode="tel" minLength={9} maxLength={24} value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+34 600 000 000" className="input-style pl-11" /></div>
            </Field>
            <Field label={isEs ? "Zona o municipio" : "Area or town"} required>
              <div className="relative"><MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" /><input required value={form.area} onChange={(e) => update("area", e.target.value)} placeholder={isEs ? "Ej. Benimaclet, Mislata..." : "E.g. Benimaclet, Mislata..."} className="input-style pl-11" /></div>
            </Field>
            <Field label={isEs ? "Email (opcional)" : "Email (optional)"}>
              <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="email@example.com" className="input-style" />
            </Field>
            <Field label={isEs ? "¿Qué hay ahora en el techo?" : "What is currently on the ceiling?"}>
              <select value={form.installationType} onChange={(e) => update("installationType", e.target.value)} className="input-style">
                <option value="">{isEs ? "Seleccionar" : "Select"}</option>
                <option>{isEs ? "Una lámpara" : "A light fixture"}</option>
                <option>{isEs ? "Otro ventilador" : "Another ceiling fan"}</option>
                <option>{isEs ? "Punto eléctrico vacío" : "Empty electrical point"}</option>
                <option>{isEs ? "No lo sé" : "Not sure"}</option>
              </select>
            </Field>
            <Field label={isEs ? "¿Ya tienes el ventilador?" : "Have you bought the fan?"}>
              <select value={form.fanPurchased} onChange={(e) => update("fanPurchased", e.target.value)} className="input-style">
                <option value="">{isEs ? "Seleccionar" : "Select"}</option>
                <option>{isEs ? "Sí, ya lo tengo" : "Yes, I have it"}</option>
                <option>{isEs ? "Todavía no" : "Not yet"}</option>
                <option>{isEs ? "Necesito ayuda para elegir" : "I need help choosing"}</option>
              </select>
            </Field>
            <Field label={isEs ? "Mejor momento para contactarte" : "Best time to contact you"}>
              <select value={form.contactTime} onChange={(e) => update("contactTime", e.target.value)} className="input-style">
                <option value="">{isEs ? "Cualquier momento" : "Any time"}</option>
                <option>{isEs ? "Por la mañana" : "Morning"}</option>
                <option>{isEs ? "Por la tarde" : "Afternoon"}</option>
                <option>{isEs ? "Por la noche" : "Evening"}</option>
              </select>
            </Field>
            <Field label={isEs ? "Comentario (opcional)" : "Notes (optional)"}>
              <input value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder={isEs ? "Modelo, tipo de techo u otro detalle" : "Model, ceiling type or other detail"} className="input-style" />
            </Field>
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-300 bg-yellow-50/60 p-4 sm:p-5">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="font-extrabold">{isEs ? "Fotos del techo y del ventilador" : "Photos of the ceiling and fan"}</p>
                <p className="mt-1 text-xs leading-5 text-neutral-600">{isEs ? "Opcional · hasta 4 fotos · las reducimos antes de enviarlas" : "Optional · up to 4 photos · compressed before upload"}</p>
              </div>
              <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-black bg-white px-4 py-3 text-sm font-black transition hover:bg-yellow-400">
                {processingPhotos ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImagePlus className="h-4 w-4" />}
                {processingPhotos ? (isEs ? "Preparando..." : "Preparing...") : (isEs ? "Añadir fotos" : "Add photos")}
                <input type="file" accept="image/*" multiple disabled={processingPhotos || photos.length >= 4} onChange={addPhotos} className="sr-only" />
              </label>
            </div>
            {photos.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {photos.map((photo, index) => (
                  <div key={`${photo.slice(-30)}-${index}`} className="relative aspect-square overflow-hidden rounded-xl border border-yellow-300 bg-white">
                    <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${photo})` }} />
                    <button type="button" onClick={() => setPhotos((current) => current.filter((_, itemIndex) => itemIndex !== index))} aria-label={isEs ? "Eliminar foto" : "Remove photo"} className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-lg"><X className="h-4 w-4" /></button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl border border-neutral-200 p-4 text-sm leading-6 text-neutral-700">
            <input required type="checkbox" checked={privacyAccepted} onChange={(event) => setPrivacyAccepted(event.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-yellow-400" />
            <span>{isEs ? "Acepto que THEVULGO use mis datos y fotos para responder y gestionar esta solicitud." : "I agree that THEVULGO may use my details and photos to respond to and manage this request."} {" "}<Link href={`/${locale}/privacy`} target="_blank" className="font-bold underline decoration-yellow-400 decoration-2 underline-offset-2">{isEs ? "Política de privacidad" : "Privacy policy"}</Link>.</span>
          </label>

          <input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} className="hidden" aria-hidden="true" />

          {error && <p className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700">{error}</p>}

          <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-2xl bg-neutral-950 p-5 text-white sm:flex-row">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">{isEs ? "Precio seleccionado" : "Selected price"}</p>
              <p className="mt-1 text-3xl font-black">{selectedPackage.price} €</p>
            </div>
            <button disabled={sending || processingPhotos} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-black text-black transition hover:scale-[1.02] disabled:opacity-60 sm:w-auto">
              {sending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              {sending ? (isEs ? "Enviando..." : "Sending...") : (isEs ? "Enviar solicitud" : "Send request")}
            </button>
          </div>
          <p className="mt-4 text-center text-xs leading-5 text-neutral-500">
            {isEs ? "Sin pago ahora. Revisamos la información y confirmamos contigo antes de reservar." : "No payment now. We review the information and confirm with you before booking."}
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-sm font-extrabold">{label}{required && <span className="text-yellow-600"> *</span>}</span>{children}</label>;
}
