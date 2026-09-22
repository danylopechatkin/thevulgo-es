import Link from "next/link";
import { Check, ChefHat, MessageCircle, Ruler, Wrench } from "lucide-react";
import AvailabilityBadge from "@/app/components/AvailabilityBadge";
import KitchenEstimator from "@/app/components/KitchenEstimator";
import MobileStickyCta from "@/app/components/MobileStickyCta";
import RelatedJobs from "@/app/components/RelatedJobs";
import { buildWhatsAppHref } from "@/lib/commercial";
import { getCatalogServices } from "@/lib/serviceCatalog";

export default function KitchenCommercialPage({ locale }: { locale: string }) {
  const es = locale === "es";
  const services = getCatalogServices("Kitchen");
  const basePrice = services[0]?.price ?? 49;
  const whatsapp = buildWhatsAppHref("kitchen", locale);
  const inclusions = es
    ? [
        "Montaje y nivelado de módulos",
        "Ajuste de puertas y frentes",
        "Fijación segura a pared",
        "Recortes y remates acordados",
        "Instalación de accesorios",
      ]
    : [
        "Cabinet assembly and levelling",
        "Door and front adjustments",
        "Secure wall fixing",
        "Agreed cut-outs and finishing",
        "Accessory installation",
      ];
  return (
    <main className="bg-white text-neutral-950">
      <section className="border-b border-neutral-200 bg-[radial-gradient(circle_at_80%_10%,#fff1a6,transparent_40%)]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <AvailabilityBadge locale={locale} />
          <p className="mt-6 text-sm font-black uppercase tracking-widest">
            THEVULGO · VALENCIA
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            {es
              ? "Montaje de cocinas en Valencia"
              : "Kitchen assembly in Valencia"}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
            {es
              ? "Montamos módulos, frentes, encimeras y accesorios. Envíanos el plano y fotos para recibir un alcance y precio claros."
              : "Cabinets, fronts, worktops and accessories assembled with care. Send the plan and photos for a clear scope and price."}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsapp}
              data-event="kitchen_plan_click"
              data-service="kitchen"
              data-cta-location="hero"
              className="rounded-xl bg-[#ffcc00] px-6 py-4 text-center font-black"
            >
              <MessageCircle className="mr-2 inline" size={19} />
              {es ? "Enviar plano por WhatsApp" : "Send your plan on WhatsApp"}
            </a>
            <a
              href="#kitchen-estimator"
              className="rounded-xl border border-neutral-300 px-6 py-4 text-center font-bold"
            >
              {es ? "Calcular orientación" : "Get an estimate"}
            </a>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
        <div>
          <ChefHat size={34} />
          <h2 className="mt-4 text-3xl font-black">
            {es ? "Qué podemos montar" : "What we can assemble"}
          </h2>
          <div className="mt-6 space-y-3">
            {inclusions.map((item) => (
              <p key={item} className="flex gap-3">
                <Check className="shrink-0 text-emerald-600" size={20} />
                {item}
              </p>
            ))}
          </div>
          <p className="mt-7 rounded-xl bg-neutral-100 p-4 text-sm text-neutral-700">
            {es
              ? "Fontanería, gas y conexiones eléctricas especiales se confirman por separado cuando requieren un profesional autorizado."
              : "Plumbing, gas and specialist electrical connections are confirmed separately when a licensed professional is required."}
          </p>
        </div>
        <div className="grid gap-4">
          <div className="rounded-2xl border border-neutral-200 p-6">
            <Ruler />
            <h3 className="mt-4 text-xl font-black">
              {es ? "Antes de la visita" : "Before the visit"}
            </h3>
            <p className="mt-2 text-neutral-600">
              {es
                ? "Plano, lista de módulos, fotos del espacio y estado de las tomas."
                : "Plan, unit list, room photos and the position of services."}
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6">
            <Wrench />
            <h3 className="mt-4 text-xl font-black">
              {es ? "Precio sin sorpresas" : "No-surprise scope"}
            </h3>
            <p className="mt-2 text-neutral-600">
              {es
                ? "Acordamos qué está incluido antes de empezar."
                : "We agree what is included before work starts."}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <KitchenEstimator locale={locale} basePrice={basePrice} />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          {es ? "Precios de trabajos pequeños" : "Small kitchen job prices"}
        </h2>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {services.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-neutral-200 p-4"
            >
              <span className="pr-4 font-semibold">
                {es ? item.labelEs : item.label}
              </span>
              <strong className="whitespace-nowrap">
                {(es ? item.priceLabelEs : item.priceLabel) || `€${item.price}`}
              </strong>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <RelatedJobs locale={locale} />
        </div>
        <p className="mt-8 text-sm text-neutral-500">
          {es ? "¿Buscas otro servicio?" : "Looking for another service?"}{" "}
          <Link className="font-bold text-black underline" href={`/${locale}`}>
            {es ? "Ver todos los servicios" : "See all services"}
          </Link>
        </p>
      </section>
      <MobileStickyCta
        href={whatsapp}
        locale={locale}
        servicesHref="#kitchen-estimator"
      />
    </main>
  );
}
