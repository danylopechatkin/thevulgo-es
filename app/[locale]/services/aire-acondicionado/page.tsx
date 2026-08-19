import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Wind } from "lucide-react";
import { getCatalogServices } from "@/lib/serviceCatalog";

type Props = { params: Promise<{ locale: string }> };
const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs
    ? "Aire acondicionado en Valencia | Reparación, limpieza e instalación | THEVULGO"
    : "Air Conditioning in Valencia | Repair, Cleaning & Installation | THEVULGO";
  const description = isEs
    ? "Diagnóstico, reparación, limpieza, mantenimiento, recarga de gas e instalación de aire acondicionado en Valencia. Precios claros desde 49 €."
    : "Air conditioning diagnostics, repair, cleaning, maintenance, refrigerant recharge and installation in Valencia. Clear prices from €49.";

  return {
    title,
    description,
    keywords: isEs
      ? ["reparación aire acondicionado Valencia", "limpieza aire acondicionado Valencia", "instalación aire acondicionado Valencia", "recarga gas aire acondicionado Valencia"]
      : ["air conditioning repair Valencia", "AC cleaning Valencia", "AC installation Valencia", "refrigerant recharge Valencia"],
    alternates: { canonical: `${baseUrl}/${locale}/services/aire-acondicionado`, languages: { es: `${baseUrl}/es/services/aire-acondicionado`, en: `${baseUrl}/en/services/aire-acondicionado` } },
  };
}

export default async function AirConditioningPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const services = getCatalogServices("Air Conditioning");
  const pageUrl = `${baseUrl}/${locale}/services/aire-acondicionado`;
  const groups = [
    { title: isEs ? "Diagnóstico y reparación" : "Diagnostics & repair", ids: ["ac-diagnostic", "ac-not-cooling", "ac-not-heating", "ac-not-starting", "ac-water-leak", "ac-drain-unclogging", "ac-electrical-fault", "ac-capacitor", "ac-fan-motor", "ac-control-board", "ac-emergency"] },
    { title: isEs ? "Limpieza y mantenimiento" : "Cleaning & maintenance", ids: ["ac-basic-cleaning", "ac-deep-indoor-cleaning", "ac-disinfection", "ac-indoor-outdoor-cleaning", "ac-two-splits-cleaning", "ac-three-splits-cleaning", "ac-annual-service", "ac-ducted-maintenance", "ac-duct-cleaning"] },
    { title: isEs ? "Gas y fugas" : "Refrigerant & leaks", ids: ["ac-pressure-check", "ac-leak-detection", "ac-r32-recharge", "ac-r410a-recharge", "ac-leak-repair-recharge"] },
    { title: isEs ? "Instalación y sustitución" : "Installation & replacement", ids: ["ac-split-install", "ac-multisplit-2", "ac-multisplit-3", "ac-ducted-install", "ac-preinstall", "ac-commissioning", "ac-removal", "ac-replace-split", "ac-relocate", "ac-extra-line", "ac-extra-trunking", "ac-wall-bracket", "ac-condensate-pump", "ac-wifi-module"] },
    { title: isEs ? "Negocios" : "Commercial", ids: ["ac-commercial-diagnostic", "ac-business-maintenance"] },
  ];
  const serviceJsonLd = { "@context": "https://schema.org", "@type": "Service", name: isEs ? "Aire acondicionado en Valencia" : "Air conditioning in Valencia", url: pageUrl, areaServed: "Valencia", provider: { "@type": "HomeAndConstructionBusiness", name: "THEVULGO", telephone: "+34610076942", url: baseUrl }, hasOfferCatalog: { "@type": "OfferCatalog", itemListElement: services.map((service) => ({ "@type": "Offer", price: service.price, priceCurrency: "EUR", itemOffered: { "@type": "Service", name: isEs ? service.labelEs : service.label } })) } };

  return <main className="min-h-screen bg-white px-4 py-16 text-black sm:py-24">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    <section className="mx-auto max-w-6xl">
      <div className="rounded-3xl border border-yellow-400 bg-yellow-50/50 p-8 text-center shadow-xl sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400"><Wind /></div>
        <p className="mt-5 text-sm font-bold uppercase tracking-wider text-yellow-700">THEVULGO · Valencia</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{isEs ? "Aire acondicionado sin sorpresas" : "Air conditioning, no surprises"}</h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-neutral-700">{isEs ? "Diagnóstico, reparación, limpieza, recarga de gas e instalación. Selecciona el servicio y recibe una confirmación antes de la visita." : "Diagnostics, repair, cleaning, refrigerant recharge and installation. Choose a service and receive confirmation before the visit."}</p>
        <Link href={`/${locale}/estimate?category=air-conditioning`} className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 font-black shadow-lg transition hover:scale-[1.02]">{isEs ? "Pedir presupuesto" : "Get an estimate"}<ArrowRight className="h-5 w-5" /></Link>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {groups.map((group) => <section key={group.title} className="rounded-3xl border border-neutral-200 p-6 shadow-sm"><h2 className="text-2xl font-black">{group.title}</h2><ul className="mt-5 space-y-3">{group.ids.map((id) => { const service = services.find((item) => item.id === id); if (!service) return null; const price = isEs ? service.priceLabelEs || `desde ${service.price} €` : service.priceLabel || `from €${service.price}`; return <li key={id} className="flex items-start justify-between gap-4 border-b border-neutral-100 pb-3"><span className="flex gap-2 font-medium"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />{isEs ? service.labelEs : service.label}</span><strong className="shrink-0 text-sm">{price}</strong></li>; })}</ul></section>)}
      </div>
    </section>
  </main>;
}
