import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Layers3,
  MapPin,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Parche y Lijado de Pared en Valencia | Desde 45€ | THEVULGO"
    : "Patch and Sand Finish in Valencia | From €45 | THEVULGO";

  const description = isEs
    ? "Parcheado y lijado de pared en Valencia desde 45€. Reparación localizada con acabado más liso y mejor preparación para pintura."
    : "Patch and sand finish in Valencia from €45. Localized patch work finished with sanding for smoother, more paint-ready results.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "parche y lijado pared Valencia",
          "lijar parche pared Valencia",
          "preparar pared para pintar Valencia",
          "reparación pared lijado Valencia",
          "alisar reparación pared Valencia",
          "acabado pared Valencia",
          "pladur reparación Valencia",
        ]
      : [
          "patch and sand finish Valencia",
          "wall patch sanding Valencia",
          "paint ready wall repair Valencia",
          "drywall patch sanding Valencia",
          "smooth wall patch Valencia",
          "wall repair finish Valencia",
          "drywall repair Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/patch-and-sand-finish`,
      languages: {
        es: `${siteUrl}/es/services/drywall/patch-and-sand-finish`,
        en: `${siteUrl}/en/services/drywall/patch-and-sand-finish`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/patch-and-sand-finish`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PatchAndSandFinishPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/patch-and-sand-finish`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para parche y lijado de pared en Valencia."
      : "Hi, I would like an estimate for patch and sand finish in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const areas = [
    "Valencia",
    "Campanar",
    "Ruzafa",
    "Benimaclet",
    "Patraix",
    "El Carmen",
    "Extramurs",
    "Mislata",
    "Burjassot",
    "Paterna",
    "Torrent",
    "Sagunto",
    "Cullera",
    "Gandía",
  ];

  const faqItems = isEs
    ? [
        {
          q: "¿Qué incluye el servicio de parche y lijado?",
          a: "Incluye revisión de la zona, preparación básica, parcheado localizado, lijado del área reparada y mejora visible para dejar la superficie más preparada para pintura.",
        },
        {
          q: "¿Cuánto cuesta parchear y lijar una pared en Valencia?",
          a: "El servicio empieza desde 45€. El precio final depende del tamaño del parche, estado de la pared, número de zonas, capas necesarias y acabado esperado.",
        },
        {
          q: "¿El resultado queda listo para pintar?",
          a: "El objetivo es dejar la zona más preparada para pintura. El acabado final depende del estado de la pared, textura existente, color y pintura posterior.",
        },
        {
          q: "¿Incluye pintura?",
          a: "La pintura se valora aparte. Este servicio se centra en parchear, lijar y preparar mejor la superficie.",
        },
        {
          q: "¿Sirve para paredes de pladur o yeso?",
          a: "Sí. Se puede trabajar en pladur, yeso y paredes interiores similares, según el tipo de daño y superficie.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, fotos de cerca de la zona dañada y medidas aproximadas del área a reparar.",
        },
      ]
    : [
        {
          q: "What is included in patch and sand finish?",
          a: "It includes checking the area, basic preparation, localized patching, sanding of the repaired area and visible improvement to make the surface more paint-ready.",
        },
        {
          q: "How much does patch and sand finish cost in Valencia?",
          a: "The service starts from €45. Final price depends on patch size, wall condition, number of areas, required coats and expected finish.",
        },
        {
          q: "Will the result be ready for painting?",
          a: "The goal is to make the area more prepared for painting. Final appearance depends on wall condition, existing texture, color and later paint work.",
        },
        {
          q: "Is painting included?",
          a: "Painting is reviewed separately. This service focuses on patching, sanding and better surface preparation.",
        },
        {
          q: "Is this suitable for drywall or plaster walls?",
          a: "Yes. Drywall, plaster and similar interior walls can be repaired depending on damage type and surface condition.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, close-up photos of the damaged area and approximate measurements of the area to repair.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Parche y lijado de pared en Valencia" : "Patch and sand finish in Valencia",
    description: isEs
      ? "Parcheado localizado con lijado para preparar mejor la pared antes de pintura en Valencia."
      : "Localized patch work finished with sanding for smoother, more paint-ready results in Valencia.",
    serviceType: isEs ? "Parche y lijado de pared" : "Patch and sand finish",
    url: pageUrl,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "THEVULGO",
      url: siteUrl,
      telephone: "+34610076942",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valencia",
        addressRegion: "Valencia",
        addressCountry: "ES",
      },
    },
    areaServed: areas,
    offers: {
      "@type": "Offer",
      price: "45",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${siteUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: isEs ? "Servicios" : "Services", item: `${siteUrl}/${locale}/services` },
      { "@type": "ListItem", position: 3, name: isEs ? "Pladur y paredes" : "Drywall and walls", item: `${siteUrl}/${locale}/services/drywall` },
      { "@type": "ListItem", position: 4, name: isEs ? "Parche y lijado" : "Patch and sand finish", item: pageUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const heroPoints = isEs
    ? ["Desde 45€", "Parche localizado", "Lijado incluido", "Mejor preparación para pintura"]
    : ["From €45", "Localized patching", "Sanding included", "Better paint-ready prep"];

  const included = isEs
    ? [
        "Revisión de la zona dañada o parcheada",
        "Preparación básica de la superficie",
        "Parcheado localizado según el daño",
        "Lijado del área reparada",
        "Preparación para pintura o retoque posterior",
        "Presupuesto claro según fotos, medidas y alcance",
      ]
    : [
        "Check of the damaged or patched area",
        "Basic surface preparation",
        "Localized patching based on the damage",
        "Sanding of the repaired area",
        "Preparation for later painting or touch-up",
        "Clear estimate based on photos, measurements and scope",
      ];

  const related = isEs
    ? [
        { title: "Preparación de pared para retoques", href: `/${locale}/services/drywall/wall-touch-up-prep` },
        { title: "Enlucido localizado", href: `/${locale}/services/drywall/skim-coat-area-repair` },
        { title: "Reparación media de pared", href: `/${locale}/services/drywall/medium-wall-patching` },
        { title: "Pladur y paredes", href: `/${locale}/services/drywall` },
      ]
    : [
        { title: "Wall touch-up prep", href: `/${locale}/services/drywall/wall-touch-up-prep` },
        { title: "Skim coat area repair", href: `/${locale}/services/drywall/skim-coat-area-repair` },
        { title: "Medium wall patching", href: `/${locale}/services/drywall/medium-wall-patching` },
        { title: "Drywall and walls", href: `/${locale}/services/drywall` },
      ];

  return (
    <main className="min-h-screen bg-white text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-white">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-black text-neutral-900 shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-600" />
              {isEs ? "THEVULGO • Pladur y paredes en Valencia" : "THEVULGO • Drywall and walls in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Parche y lijado de pared" : "Patch and sand finish"}{" "}
              <span className="text-yellow-500">{isEs ? "en Valencia" : "in Valencia"}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Parcheado localizado con lijado para conseguir una superficie más lisa y mejor preparada para pintura o retoque."
                : "Localized patch work finished with sanding for a smoother surface and better paint-ready result."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300">
                {isEs ? "Pedir presupuesto por WhatsApp" : "Get estimate by WhatsApp"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <Link href={`/${locale}/services/drywall`} className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400">
                {isEs ? "Ver pladur y paredes" : "View drywall services"}
              </Link>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-neutral-700 sm:grid-cols-2">
              {heroPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-4 shadow-2xl md:p-6">
            <div className="rounded-2xl bg-yellow-400 p-8 text-black shadow-md">
              <Paintbrush className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 45€" : "From €45"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs ? "Parche reparado. Lijado limpio. Mejor base para pintar." : "Patch repaired. Clean sanding. Better base for paint."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal para zonas reparadas que necesitan quedar más suaves antes del acabado final."
                  : "Ideal for repaired areas that need to be smoother before the final finish."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { title: isEs ? "Parche" : "Patch", text: isEs ? "Reparación local" : "Local repair", icon: Layers3 },
                { title: isEs ? "Lijado" : "Sanding", text: isEs ? "Más liso" : "Smoother finish", icon: Paintbrush },
                { title: isEs ? "Acabado" : "Finish", text: isEs ? "Preparado para pintar" : "Paint-ready prep", icon: Sparkles },
                { title: isEs ? "Medidas" : "Area", text: isEs ? "Según tamaño" : "Based on size", icon: Ruler },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 shadow-sm">
                  <item.icon className="h-6 w-6 text-yellow-500" />
                  <p className="mt-3 font-black">{item.title}</p>
                  <p className="mt-1 text-sm text-neutral-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: isEs ? "Parche localizado" : "Localized patch",
              text: isEs
                ? "Para zonas dañadas, reparadas o irregulares que necesitan mejor acabado."
                : "For damaged, repaired or uneven areas that need a better finish.",
            },
            {
              title: isEs ? "Lijado incluido" : "Sanding included",
              text: isEs
                ? "Lijado del área reparada para preparar mejor la superficie antes de pintura."
                : "Sanding of the repaired area to better prepare the surface before paint.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y medidas para valorar tamaño, capas necesarias y acabado esperado."
                : "Send photos and measurements to review size, needed coats and expected finish.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <BadgeCheck className="h-8 w-8 text-yellow-500" />
              <h2 className="mt-4 text-xl font-black">{item.title}</h2>
              <p className="mt-3 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10 md:px-8">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          {isEs
            ? "Parcheado con lijado para una mejor preparación antes de pintura"
            : "Patch work with sanding for better paint-ready preparation"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Cuando una pared se repara, el parche puede quedar visible si la zona no se lija y prepara correctamente. Este servicio combina reparación localizada con lijado para mejorar la transición y preparar mejor la superficie."
              : "When a wall is repaired, the patch can remain visible if the area is not sanded and prepared properly. This service combines localized repair with sanding to improve the transition and better prepare the surface."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza parche y lijado en Valencia para pisos, casas, alquileres, oficinas, habitaciones, zonas de move-out y paredes que necesitan quedar más listas antes de pintar."
              : "THEVULGO provides patch and sand finish in Valencia for apartments, homes, rentals, offices, rooms, move-out areas and walls that need to be more ready before painting."}
          </p>

          <p>
            {isEs
              ? "Este servicio no incluye pintura por defecto. Está enfocado en dejar la zona reparada más lisa y mejor preparada para el acabado final."
              : "This service does not include painting by default. It focuses on making the repaired area smoother and better prepared for the final finish."}
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Qué incluye el servicio" : "What is included"}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                <p className="font-bold text-neutral-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            {isEs ? "Desde 45€" : "From €45"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs ? "Envía fotos de la zona a reparar" : "Send photos of the repair area"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, fotos de cerca y medidas aproximadas del área."
              : "To estimate the price, send a general photo, close-up photos and approximate measurements of the area."}
          </p>

          <a href={whatsappUrl} className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 font-black text-white shadow-md transition hover:scale-105">
            {isEs ? "Pedir precio por WhatsApp" : "Request price by WhatsApp"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs ? "Zonas donde trabajamos" : "Areas we serve"}
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {areas.map((area) => (
            <span key={area} className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 font-bold text-neutral-900">
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
          </h2>

          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-black">
                  {item.q}
                </summary>
                <p className="mt-4 leading-7 text-neutral-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs ? "Servicios relacionados" : "Related services"}
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {related.map((item) => (
            <Link key={item.title} href={item.href} className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
              <p className="text-xl font-black">{item.title}</p>
              <p className="mt-3 inline-flex items-center font-bold text-neutral-700 group-hover:text-black">
                {isEs ? "Ver servicio" : "View service"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-yellow-400 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="text-4xl font-black tracking-tight">
            {isEs ? "¿Necesitas parchear y lijar una pared?" : "Need a wall patched and sanded?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos de la zona. Te damos un presupuesto claro antes de empezar."
              : "Send photos of the area. Get a clear estimate before the work starts."}
          </p>

          <a href={whatsappUrl} className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 font-black text-white shadow-xl transition hover:scale-105">
            {isEs ? "Pedir presupuesto ahora" : "Get estimate now"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}