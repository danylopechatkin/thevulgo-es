import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CircleDot,
  MapPin,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Tv,
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
    ? "Reparación de Pared Tras Quitar Soporte TV en Valencia | Desde 39€ | THEVULGO"
    : "TV Bracket Wall Repair in Valencia | From €39 | THEVULGO";

  const description = isEs
    ? "Reparación de pared después de quitar soporte de TV en Valencia desde 39€. Relleno de agujeros, marcas de bracket, alisado y preparación para retoque."
    : "TV bracket wall repair in Valencia from €39. Wall restoration after TV bracket removal or media setup changes with hole filling and smoothing.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparar pared soporte TV Valencia",
          "agujeros soporte TV Valencia",
          "quitar soporte TV reparar pared Valencia",
          "marcas bracket TV Valencia",
          "reparar pared después TV Valencia",
          "rellenar agujeros TV Valencia",
          "pladur reparación TV Valencia",
        ]
      : [
          "TV bracket wall repair Valencia",
          "repair wall after TV mount Valencia",
          "TV mount holes repair Valencia",
          "bracket marks wall repair Valencia",
          "wall restoration after TV removal Valencia",
          "drywall repair TV bracket Valencia",
          "TV mounting wall repair Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/tv-bracket-wall-repair`,
      languages: {
        es: `${siteUrl}/es/services/drywall/tv-bracket-wall-repair`,
        en: `${siteUrl}/en/services/drywall/tv-bracket-wall-repair`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/tv-bracket-wall-repair`,
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

export default async function TvBracketWallRepairPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/tv-bracket-wall-repair`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para reparar la pared después de quitar un soporte de TV en Valencia."
      : "Hi, I would like an estimate for wall repair after TV bracket removal in Valencia."
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
          q: "¿Qué incluye la reparación de pared tras quitar un soporte de TV?",
          a: "Incluye revisión de agujeros y marcas, preparación básica, relleno de puntos de fijación, alisado local y mejora visible de la pared. La pintura se valora aparte.",
        },
        {
          q: "¿Cuánto cuesta reparar una pared después de quitar un bracket de TV?",
          a: "El servicio empieza desde 39€. El precio final depende del número de agujeros, tamaño de las marcas, tipo de pared, acabado esperado y si hace falta pintura.",
        },
        {
          q: "¿Podéis reparar agujeros grandes de tacos o tornillos de TV?",
          a: "Sí. Se pueden rellenar y alisar agujeros de tacos, tornillos y marcas de soporte. Si el daño es grande, puede necesitar parcheado más amplio.",
        },
        {
          q: "¿Sirve para cambios de media setup o cableado?",
          a: "Sí. Este servicio es útil después de mover una TV, retirar un soporte, cambiar una instalación multimedia o cerrar marcas visibles de una configuración anterior.",
        },
        {
          q: "¿Incluye pintura?",
          a: "La pintura normalmente se valora aparte. Si tienes pintura original, se puede revisar la posibilidad de retoque más discreto.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, fotos de cerca de los agujeros o marcas y explica si el soporte ya está retirado.",
        },
      ]
    : [
        {
          q: "What is included in TV bracket wall repair?",
          a: "It includes checking holes and marks, basic preparation, filling fixing points, local smoothing and visible wall improvement. Painting is reviewed separately.",
        },
        {
          q: "How much does wall repair after TV bracket removal cost?",
          a: "The service starts from €39. Final price depends on number of holes, mark size, wall type, expected finish and whether painting is needed.",
        },
        {
          q: "Can you repair large wall plug or screw holes from a TV mount?",
          a: "Yes. Wall plug holes, screw holes and bracket marks can be filled and smoothed. If damage is larger, wider patching may be needed.",
        },
        {
          q: "Is this useful after media setup changes?",
          a: "Yes. This service is useful after moving a TV, removing a bracket, changing a media setup or closing visible marks from a previous installation.",
        },
        {
          q: "Is painting included?",
          a: "Painting is usually reviewed separately. If you have the original paint, a more discreet touch-up can be discussed.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, close-up photos of the holes or marks and explain whether the bracket has already been removed.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Reparación de pared tras quitar soporte de TV en Valencia"
      : "TV bracket wall repair in Valencia",
    description: isEs
      ? "Restauración de pared después de retirar soporte de TV, agujeros de tacos, marcas de bracket o cambios de media setup en Valencia."
      : "Wall restoration after TV bracket removal, wall plug holes, bracket marks or media setup changes in Valencia.",
    serviceType: isEs ? "Reparación de pared tras soporte TV" : "TV bracket wall repair",
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
      price: "39",
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
        name: isEs ? "Reparación pared soporte TV" : "TV bracket wall repair",
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
        "Desde 39€",
        "Agujeros de soporte TV",
        "Marcas de bracket y media setup",
        "Relleno y alisado local",
      ]
    : [
        "From €39",
        "TV bracket holes",
        "Bracket and media setup marks",
        "Local filling and smoothing",
      ];

  const included = isEs
    ? [
        "Revisión de agujeros y marcas del soporte",
        "Preparación básica de la zona afectada",
        "Relleno de puntos de fijación",
        "Alisado local para mejorar el acabado visible",
        "Preparación para pintura cuando aplica",
        "Presupuesto claro según fotos, cantidad y alcance",
      ]
    : [
        "Check of bracket holes and marks",
        "Basic preparation of the affected area",
        "Filling of fixing points",
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
          title: "Montaje de TV",
          href: `/${locale}/services/tv-mounting`,
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
          title: "TV mounting",
          href: `/${locale}/services/tv-mounting`,
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
                ? "Reparación de pared tras soporte TV"
                : "TV bracket wall repair"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Restauración de pared después de retirar un soporte de TV, cambiar una instalación multimedia o cerrar agujeros y marcas visibles."
                : "Wall restoration after TV bracket removal, media setup changes or closing visible holes and bracket marks."}
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
              <Tv className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 39€" : "From €39"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Soporte retirado. Agujeros cerrados. Pared más limpia."
                  : "Bracket removed. Holes closed. Cleaner wall."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal después de mover una TV, cambiar un media setup o preparar la pared para una nueva instalación."
                  : "Ideal after moving a TV, changing a media setup or preparing the wall for a new installation."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "TV bracket" : "TV bracket",
                  text: isEs ? "Marcas retiradas" : "Removal marks",
                  icon: Tv,
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
              title: isEs ? "Después de retirar TV" : "After TV removal",
              text: isEs
                ? "Para paredes con agujeros de bracket, tacos, tornillos y marcas visibles."
                : "For walls with bracket holes, wall plugs, screws and visible marks.",
            },
            {
              title: isEs ? "Media setup changes" : "Media setup changes",
              text: isEs
                ? "Útil después de mover una TV, cambiar cables o reorganizar la pared multimedia."
                : "Useful after moving a TV, changing cables or reorganizing the media wall.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos para valorar cantidad de agujeros, tipo de pared y acabado esperado."
                : "Send photos to review number of holes, wall type and expected finish.",
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
            ? "Restauración de pared después de quitar un soporte de TV"
            : "Wall restoration after removing a TV bracket"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Al retirar un soporte de TV, la pared suele quedar con agujeros de tacos, marcas de tornillos, zonas presionadas o señales visibles del bracket. Aunque el daño sea pequeño, se nota mucho porque normalmente está en una pared principal."
              : "When a TV bracket is removed, the wall is often left with wall plug holes, screw marks, pressure marks or visible bracket traces. Even if the damage is small, it stands out because it is usually on a main wall."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza reparación de pared tras soporte TV en Valencia para pisos, casas, alquileres, mudanzas, cambios de setup multimedia y preparación antes de instalar una nueva TV."
              : "THEVULGO provides TV bracket wall repair in Valencia for apartments, homes, rentals, move-outs, media setup changes and preparation before installing a new TV."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos de la pared y de las marcas. Así se puede valorar si basta con rellenar y alisar o si hace falta un parche más amplio."
              : "Before confirming, you can send photos of the wall and marks. This helps review whether filling and smoothing is enough or if a wider patch is needed."}
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
            {isEs ? "Desde 39€" : "From €39"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos de la pared y las marcas"
              : "Send photos of the wall and marks"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, fotos de cerca y confirma si el soporte ya está retirado."
              : "To estimate the price, send a general photo, close-up photos and confirm whether the bracket is already removed."}
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
              ? "¿Necesitas reparar la pared después de quitar una TV?"
              : "Need the wall repaired after removing a TV?"}
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