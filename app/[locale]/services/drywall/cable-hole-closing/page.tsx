import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Cable,
  CheckCircle2,
  CircleDot,
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
    ? "Cerrar Agujeros de Cables en Valencia | Desde 29€ | THEVULGO"
    : "Cable Hole Closing in Valencia | From €29 | THEVULGO";

  const description = isEs
    ? "Cierre y alisado de pequeños agujeros de cables o cableado en paredes en Valencia desde 29€. Reparación limpia tras instalaciones o cambios de cableado."
    : "Cable hole closing in Valencia from €29. Closing and smoothing small cable or wiring openings in walls after installations or wiring changes.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "cerrar agujero cable pared Valencia",
          "reparar agujero cable Valencia",
          "tapar agujero cableado Valencia",
          "cerrar hueco cable pared Valencia",
          "reparación pared cables Valencia",
          "pladur reparación cables Valencia",
          "manitas pared Valencia",
        ]
      : [
          "cable hole closing Valencia",
          "repair cable hole wall Valencia",
          "close wiring opening Valencia",
          "wall cable hole repair Valencia",
          "drywall cable hole repair Valencia",
          "small wall opening repair Valencia",
          "drywall repair Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/cable-hole-closing`,
      languages: {
        es: `${siteUrl}/es/services/drywall/cable-hole-closing`,
        en: `${siteUrl}/en/services/drywall/cable-hole-closing`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/cable-hole-closing`,
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

export default async function CableHoleClosingPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/cable-hole-closing`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para cerrar agujeros de cables en pared en Valencia."
      : "Hi, I would like an estimate for closing cable holes in walls in Valencia."
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
          q: "¿Qué incluye cerrar agujeros de cables?",
          a: "Incluye revisión del agujero, preparación básica, cierre o relleno del hueco, alisado local y mejora visible de la pared. La pintura se valora aparte.",
        },
        {
          q: "¿Cuánto cuesta cerrar un agujero de cable en Valencia?",
          a: "El servicio empieza desde 29€. El precio final depende del tamaño del hueco, tipo de pared, número de agujeros, acabado esperado y si hace falta pintura.",
        },
        {
          q: "¿Sirve para agujeros de TV, internet o cableado antiguo?",
          a: "Sí. Es útil para pequeños huecos de cables de TV, internet, instalaciones multimedia, cableado retirado o cambios de setup.",
        },
        {
          q: "¿Incluye pintura?",
          a: "Normalmente la pintura se valora aparte. Si tienes pintura original, se puede revisar un retoque más discreto después del cierre y alisado.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, una foto de cerca del agujero y medidas aproximadas del hueco.",
        },
      ]
    : [
        {
          q: "What is included in cable hole closing?",
          a: "It includes checking the hole, basic preparation, closing or filling the opening, local smoothing and visible wall improvement. Painting is reviewed separately.",
        },
        {
          q: "How much does cable hole closing cost in Valencia?",
          a: "The service starts from €29. Final price depends on opening size, wall type, number of holes, expected finish and whether painting is needed.",
        },
        {
          q: "Is this suitable for TV, internet or old wiring holes?",
          a: "Yes. It is useful for small holes from TV cables, internet wiring, media installations, removed wiring or setup changes.",
        },
        {
          q: "Is painting included?",
          a: "Painting is usually reviewed separately. If you have original paint, a more discreet touch-up can be discussed after closing and smoothing.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, one close-up photo of the hole and approximate measurements of the opening.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Cerrar agujeros de cables en Valencia" : "Cable hole closing in Valencia",
    description: isEs
      ? "Cierre y alisado de pequeños agujeros de cables o cableado en paredes interiores en Valencia."
      : "Closing and smoothing small cable or wiring openings in interior walls in Valencia.",
    serviceType: isEs ? "Cerrar agujeros de cables" : "Cable hole closing",
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
      price: "29",
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
      { "@type": "ListItem", position: 4, name: isEs ? "Cerrar agujeros de cables" : "Cable hole closing", item: pageUrl },
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
    ? ["Desde 29€", "Agujeros de cables", "Cierre y alisado", "Mejor acabado visible"]
    : ["From €29", "Cable holes", "Closing and smoothing", "Cleaner visible finish"];

  const included = isEs
    ? [
        "Revisión del agujero o hueco de cable",
        "Preparación básica de la zona",
        "Cierre o relleno del hueco pequeño",
        "Alisado local para mejorar el acabado",
        "Preparación para pintura cuando aplica",
        "Presupuesto claro según fotos, tamaño y alcance",
      ]
    : [
        "Check of the cable hole or opening",
        "Basic preparation of the area",
        "Closing or filling of the small opening",
        "Local smoothing to improve finish",
        "Preparation for painting where applicable",
        "Clear estimate based on photos, size and scope",
      ];

  const related = isEs
    ? [
        { title: "Reparación de recortes en pladur", href: `/${locale}/services/drywall/drywall-cutout-repair` },
        { title: "Reparación pared soporte TV", href: `/${locale}/services/drywall/tv-bracket-wall-repair` },
        { title: "Reparación de agujeros pequeños", href: `/${locale}/services/drywall/small-hole-repair` },
        { title: "Pladur y paredes", href: `/${locale}/services/drywall` },
      ]
    : [
        { title: "Drywall cutout repair", href: `/${locale}/services/drywall/drywall-cutout-repair` },
        { title: "TV bracket wall repair", href: `/${locale}/services/drywall/tv-bracket-wall-repair` },
        { title: "Small hole repair", href: `/${locale}/services/drywall/small-hole-repair` },
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
              {isEs ? "Cerrar agujeros de cables" : "Cable hole closing"}{" "}
              <span className="text-yellow-500">{isEs ? "en Valencia" : "in Valencia"}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Cierre y alisado de pequeños agujeros de cables o cableado en paredes interiores después de instalaciones, cambios de setup o retirada de cables."
                : "Closing and smoothing small cable or wiring openings in interior walls after installations, setup changes or cable removal."}
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
              <Cable className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 29€" : "From €29"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs ? "Hueco cerrado. Pared más limpia. Mejor acabado." : "Opening closed. Cleaner wall. Better finish."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal para pequeños huecos de TV, internet, cableado antiguo o instalaciones retiradas."
                  : "Ideal for small openings from TV, internet, old wiring or removed installations."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { title: isEs ? "Cables" : "Cables", text: isEs ? "Huecos pequeños" : "Small openings", icon: Cable },
                { title: isEs ? "Agujeros" : "Holes", text: isEs ? "Cierre local" : "Local closing", icon: CircleDot },
                { title: isEs ? "Relleno" : "Filling", text: isEs ? "Corrección limpia" : "Clean correction", icon: Wrench },
                { title: isEs ? "Acabado" : "Finish", text: isEs ? "Más liso" : "Smoother result", icon: Sparkles },
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
              title: isEs ? "Después de retirar cables" : "After cable removal",
              text: isEs
                ? "Para pequeños huecos de cableado, TV, internet o instalaciones multimedia."
                : "For small openings from wiring, TV, internet or media installations.",
            },
            {
              title: isEs ? "Cierre y alisado" : "Closing and smoothing",
              text: isEs
                ? "Corrección local para mejorar la pared antes de pintar o retocar."
                : "Local correction to improve the wall before painting or touch-up.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos para valorar tamaño, pared y acabado esperado."
                : "Send photos to review size, wall type and expected finish.",
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
            ? "Cierre de pequeños huecos de cableado en paredes interiores"
            : "Closing small wiring openings in interior walls"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Después de retirar cables, cambiar una instalación multimedia o mover un setup de TV/internet, la pared puede quedar con pequeños huecos visibles. Este servicio está pensado para cerrar esos puntos y dejar la zona más limpia."
              : "After removing cables, changing a media installation or moving a TV/internet setup, the wall can be left with small visible openings. This service is designed to close those points and leave the area cleaner."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza cierre de agujeros de cables en Valencia para pisos, casas, alquileres, oficinas, mudanzas, cambios de decoración y preparación antes de pintar o entregar."
              : "THEVULGO provides cable hole closing in Valencia for apartments, homes, rentals, offices, move-outs, decoration changes and preparation before painting or handover."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar una foto general y una foto de cerca del hueco. Así se puede valorar si basta con rellenar y alisar o si hace falta un parche más amplio."
              : "Before confirming, you can send a general photo and a close-up photo of the opening. This helps review whether filling and smoothing is enough or if a wider patch is needed."}
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
            {isEs ? "Desde 29€" : "From €29"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs ? "Envía fotos del hueco de cable" : "Send photos of the cable hole"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, una foto de cerca y medidas aproximadas del hueco."
              : "To estimate the price, send a general photo, close-up photo and approximate measurements of the opening."}
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
            {isEs ? "¿Necesitas cerrar un agujero de cable?" : "Need a cable hole closed?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos del hueco. Te damos un presupuesto claro antes de empezar."
              : "Send photos of the opening. Get a clear estimate before the work starts."}
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