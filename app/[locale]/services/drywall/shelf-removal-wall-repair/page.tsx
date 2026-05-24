import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CircleDot,
  Hammer,
  MapPin,
  Paintbrush,
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
    ? "Reparación de Pared Tras Quitar Estantes en Valencia | Desde 35€ | THEVULGO"
    : "Shelf Removal Wall Repair in Valencia | From €35 | THEVULGO";

  const description = isEs
    ? "Reparación de pared tras quitar estantes en Valencia desde 35€. Relleno de agujeros de tacos, tornillos, anclajes y daños de montaje."
    : "Shelf removal wall repair in Valencia from €35. Repair of shelf anchor points, screws and mounting damage with filling and smoothing.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparar pared quitar estante Valencia",
          "agujeros estante pared Valencia",
          "reparar agujeros tornillos Valencia",
          "marcas estantería pared Valencia",
          "rellenar agujeros tacos Valencia",
          "reparación pared Valencia",
          "pladur reparación Valencia",
        ]
      : [
          "shelf removal wall repair Valencia",
          "shelf anchor holes repair Valencia",
          "repair wall after shelf removal Valencia",
          "screw holes wall repair Valencia",
          "mounting damage repair Valencia",
          "drywall repair Valencia",
          "wall repair Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/shelf-removal-wall-repair`,
      languages: {
        es: `${siteUrl}/es/services/drywall/shelf-removal-wall-repair`,
        en: `${siteUrl}/en/services/drywall/shelf-removal-wall-repair`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/shelf-removal-wall-repair`,
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

export default async function ShelfRemovalWallRepairPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/shelf-removal-wall-repair`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para reparar la pared después de quitar estantes en Valencia."
      : "Hi, I would like an estimate for wall repair after shelf removal in Valencia."
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
          q: "¿Qué incluye la reparación de pared tras quitar estantes?",
          a: "Incluye revisión de agujeros, tacos, tornillos y marcas de montaje, preparación básica, relleno de puntos dañados, alisado local y mejora visible de la pared.",
        },
        {
          q: "¿Cuánto cuesta reparar la pared después de quitar un estante?",
          a: "El servicio empieza desde 35€. El precio final depende del número de agujeros, tamaño del daño, tipo de pared, acabado esperado y si hace falta pintura.",
        },
        {
          q: "¿Podéis reparar agujeros de tacos y tornillos?",
          a: "Sí. Se pueden rellenar y alisar agujeros de tacos, tornillos, anclajes y marcas de montaje de estanterías o soportes.",
        },
        {
          q: "¿Sirve para pladur o pared de yeso?",
          a: "Sí. Se puede trabajar en pladur, yeso y paredes interiores similares, siempre según el tamaño y profundidad del daño.",
        },
        {
          q: "¿Incluye pintura?",
          a: "La pintura normalmente se valora aparte. Si tienes pintura original, se puede revisar un retoque más discreto después del relleno.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, fotos de cerca de los agujeros o marcas y confirma si los estantes ya están retirados.",
        },
      ]
    : [
        {
          q: "What is included in shelf removal wall repair?",
          a: "It includes checking holes, plugs, screws and mounting marks, basic preparation, filling damaged points, local smoothing and visible wall improvement.",
        },
        {
          q: "How much does wall repair after shelf removal cost?",
          a: "The service starts from €35. Final price depends on number of holes, damage size, wall type, expected finish and whether painting is needed.",
        },
        {
          q: "Can you repair wall plug and screw holes?",
          a: "Yes. Wall plug holes, screw holes, anchors and shelf mounting marks can be filled and smoothed.",
        },
        {
          q: "Is this suitable for drywall or plaster walls?",
          a: "Yes. Drywall, plaster and similar interior walls can be repaired depending on the size and depth of the damage.",
        },
        {
          q: "Is painting included?",
          a: "Painting is usually reviewed separately. If you have original paint, a more discreet touch-up can be discussed after filling.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, close-up photos of the holes or marks and confirm whether the shelves have already been removed.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Reparación de pared tras quitar estantes en Valencia"
      : "Shelf removal wall repair in Valencia",
    description: isEs
      ? "Reparación de agujeros de tacos, tornillos, anclajes y daños de montaje tras quitar estantes en Valencia."
      : "Repair of shelf anchor points, screws, wall plug holes and mounting damage after shelf removal in Valencia.",
    serviceType: isEs
      ? "Reparación de pared tras quitar estantes"
      : "Shelf removal wall repair",
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
      price: "35",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEs ? "Inicio" : "Home",
        item: `${siteUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEs ? "Servicios" : "Services",
        item: `${siteUrl}/${locale}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isEs ? "Pladur y paredes" : "Drywall and walls",
        item: `${siteUrl}/${locale}/services/drywall`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isEs
          ? "Reparación tras quitar estantes"
          : "Shelf removal wall repair",
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const heroPoints = isEs
    ? [
        "Desde 35€",
        "Agujeros de estantes y soportes",
        "Tacos, tornillos y anclajes",
        "Relleno y alisado local",
      ]
    : [
        "From €35",
        "Shelf and bracket holes",
        "Plugs, screws and anchors",
        "Local filling and smoothing",
      ];

  const included = isEs
    ? [
        "Revisión de agujeros y marcas de montaje",
        "Preparación básica de la zona afectada",
        "Relleno de tacos, tornillos o anclajes",
        "Alisado local para mejorar el acabado visible",
        "Preparación para pintura cuando aplica",
        "Presupuesto claro según fotos, cantidad y alcance",
      ]
    : [
        "Check of holes and mounting marks",
        "Basic preparation of the affected area",
        "Filling of plugs, screws or anchors",
        "Local smoothing to improve visible finish",
        "Preparation for painting where applicable",
        "Clear estimate based on photos, quantity and scope",
      ];

  const related = isEs
    ? [
        {
          title: "Reparación de agujeros de tacos",
          href: `/${locale}/services/drywall/anchor-hole-repair`,
        },
        {
          title: "Reparación de agujeros pequeños",
          href: `/${locale}/services/drywall/small-hole-repair`,
        },
        {
          title: "Preparación de pared para retoques",
          href: `/${locale}/services/drywall/wall-touch-up-prep`,
        },
        {
          title: "Pladur y paredes",
          href: `/${locale}/services/drywall`,
        },
      ]
    : [
        {
          title: "Anchor hole repair",
          href: `/${locale}/services/drywall/anchor-hole-repair`,
        },
        {
          title: "Small hole repair",
          href: `/${locale}/services/drywall/small-hole-repair`,
        },
        {
          title: "Wall touch-up prep",
          href: `/${locale}/services/drywall/wall-touch-up-prep`,
        },
        {
          title: "Drywall and walls",
          href: `/${locale}/services/drywall`,
        },
      ];

  return (
    <main className="min-h-screen bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-white">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-black text-neutral-900 shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-600" />
              {isEs
                ? "THEVULGO • Pladur y paredes en Valencia"
                : "THEVULGO • Drywall and walls in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs
                ? "Reparación de pared tras quitar estantes"
                : "Shelf removal wall repair"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Reparación de agujeros de tacos, tornillos, anclajes y daños de montaje después de retirar estantes, baldas o soportes."
                : "Repair of shelf anchor points, screws and mounting damage after removing shelves, wall shelves or brackets."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
              >
                {isEs ? "Pedir presupuesto por WhatsApp" : "Get estimate by WhatsApp"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <Link
                href={`/${locale}/services/drywall`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400"
              >
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
              <Hammer className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 35€" : "From €35"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Estante retirado. Agujeros cerrados. Pared más limpia."
                  : "Shelf removed. Holes closed. Cleaner wall."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal antes de entregar un piso, cambiar decoración o preparar la pared para pintar."
                  : "Ideal before handover, changing decoration or preparing the wall for painting."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Estantes" : "Shelves",
                  text: isEs ? "Marcas retiradas" : "Removal marks",
                  icon: Hammer,
                },
                {
                  title: isEs ? "Agujeros" : "Holes",
                  text: isEs ? "Tacos y tornillos" : "Plugs and screws",
                  icon: CircleDot,
                },
                {
                  title: isEs ? "Relleno" : "Filling",
                  text: isEs ? "Corrección local" : "Local correction",
                  icon: Wrench,
                },
                {
                  title: isEs ? "Acabado" : "Finish",
                  text: isEs ? "Más limpio" : "Cleaner result",
                  icon: Sparkles,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 shadow-sm"
                >
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
              title: isEs ? "Después de quitar estantes" : "After shelf removal",
              text: isEs
                ? "Para paredes con agujeros de baldas, soportes, tacos, tornillos o anclajes."
                : "For walls with shelf holes, brackets, plugs, screws or anchors.",
            },
            {
              title: isEs ? "Daños de montaje" : "Mounting damage",
              text: isEs
                ? "Corrección de marcas visibles que quedan después de retirar una instalación."
                : "Correction of visible marks left after removing a wall installation.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos para valorar número de puntos, tipo de pared y acabado esperado."
                : "Send photos to review number of points, wall type and expected finish.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
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
            ? "Restauración de pared después de retirar estantes o baldas"
            : "Wall restoration after removing shelves or wall brackets"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Al quitar estantes o baldas, la pared suele quedar con agujeros de tacos, tornillos, anclajes y marcas de montaje. Aunque parezcan detalles pequeños, se notan mucho en una pared limpia o antes de entregar un piso."
              : "When shelves or wall brackets are removed, the wall is often left with plug holes, screw holes, anchors and mounting marks. Even when small, these details stand out on a clean wall or before handover."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza reparación de pared tras quitar estantes en Valencia para pisos, casas, alquileres, mudanzas, cambios de decoración y preparación antes de pintura o entrega."
              : "THEVULGO provides shelf removal wall repair in Valencia for apartments, homes, rentals, move-outs, decoration changes and preparation before painting or handover."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos generales y de cerca. Así se puede valorar si basta con rellenar y alisar o si hace falta una reparación más amplia."
              : "Before confirming, you can send general and close-up photos. This helps review whether filling and smoothing is enough or if wider repair work is needed."}
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
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm"
              >
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
            {isEs ? "Desde 35€" : "From €35"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos de la pared y los puntos"
              : "Send photos of the wall and points"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, fotos de cerca y confirma si los estantes ya están retirados."
              : "To estimate the price, send a general photo, close-up photos and confirm whether the shelves have already been removed."}
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 font-black text-white shadow-md transition hover:scale-105"
          >
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
            <span
              key={area}
              className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 font-bold text-neutral-900"
            >
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
              <details
                key={item.q}
                className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm"
              >
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
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
            >
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
            {isEs
              ? "¿Necesitas reparar la pared después de quitar estantes?"
              : "Need the wall repaired after shelf removal?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos de la pared. Te damos un presupuesto claro antes de empezar."
              : "Send photos of the wall. Get a clear estimate before the work starts."}
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 font-black text-white shadow-xl transition hover:scale-105"
          >
            {isEs ? "Pedir presupuesto ahora" : "Get estimate now"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}