import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CircleDot,
  DoorOpen,
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
    ? "Reparación de Golpes de Manilla en Pared en Valencia | Desde 29€ | THEVULGO"
    : "Door Handle Wall Damage Repair in Valencia | From €29 | THEVULGO";

  const description = isEs
    ? "Reparación de marcas, golpes y abolladuras en pared causadas por manillas de puerta o impactos en Valencia desde 29€. Relleno y alisado local."
    : "Door handle wall damage repair in Valencia from €29. Repair of wall marks and dents caused by handles or impact with local filling and smoothing.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparar golpe manilla pared Valencia",
          "marca manilla puerta pared Valencia",
          "abolladura pared Valencia",
          "golpe puerta pared Valencia",
          "reparar pared por manilla Valencia",
          "rellenar golpe pared Valencia",
          "reparación pared Valencia",
        ]
      : [
          "door handle wall damage repair Valencia",
          "door handle mark wall repair Valencia",
          "wall dent repair Valencia",
          "door impact wall repair Valencia",
          "handle damage wall Valencia",
          "small wall impact repair Valencia",
          "drywall repair Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/door-handle-wall-damage-repair`,
      languages: {
        es: `${siteUrl}/es/services/drywall/door-handle-wall-damage-repair`,
        en: `${siteUrl}/en/services/drywall/door-handle-wall-damage-repair`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/door-handle-wall-damage-repair`,
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

export default async function DoorHandleWallDamageRepairPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/door-handle-wall-damage-repair`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para reparar una marca o golpe de manilla en pared en Valencia."
      : "Hi, I would like an estimate for door handle wall damage repair in Valencia."
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
          q: "¿Qué incluye la reparación de golpes de manilla en pared?",
          a: "Incluye revisión del daño, preparación básica, relleno de la marca o abolladura, alisado local y mejora visible de la zona. La pintura se valora aparte.",
        },
        {
          q: "¿Cuánto cuesta reparar una marca de manilla en Valencia?",
          a: "El servicio empieza desde 29€. El precio final depende del tamaño del golpe, profundidad, tipo de pared, acabado esperado y si hace falta pintura.",
        },
        {
          q: "¿Podéis reparar abolladuras causadas por puertas?",
          a: "Sí. Se pueden reparar marcas pequeñas o medianas causadas por manillas, pomos, topes de puerta, impactos o golpes contra la pared.",
        },
        {
          q: "¿Incluye pintura?",
          a: "Normalmente la pintura se valora aparte. Si tienes pintura original, se puede revisar un retoque más discreto después del relleno.",
        },
        {
          q: "¿Sirve para pladur o pared de yeso?",
          a: "Sí. Se puede trabajar en pladur, yeso y paredes interiores similares, según profundidad y estado del daño.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, una foto de cerca del golpe y medidas aproximadas de la marca o abolladura.",
        },
      ]
    : [
        {
          q: "What is included in door handle wall damage repair?",
          a: "It includes checking the damage, basic preparation, filling the mark or dent, local smoothing and visible improvement of the area. Painting is reviewed separately.",
        },
        {
          q: "How much does door handle mark repair cost in Valencia?",
          a: "The service starts from €29. Final price depends on impact size, depth, wall type, expected finish and whether painting is needed.",
        },
        {
          q: "Can you repair dents caused by doors?",
          a: "Yes. Small or medium marks caused by door handles, knobs, door stops, impact or hits against the wall can be repaired.",
        },
        {
          q: "Is painting included?",
          a: "Painting is usually reviewed separately. If you have original paint, a more discreet touch-up can be discussed after filling.",
        },
        {
          q: "Is this suitable for drywall or plaster walls?",
          a: "Yes. Drywall, plaster and similar interior walls can be repaired depending on damage depth and condition.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, one close-up photo of the impact and approximate measurements of the mark or dent.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Reparación de golpes de manilla en pared en Valencia"
      : "Door handle wall damage repair in Valencia",
    description: isEs
      ? "Reparación de marcas, golpes y abolladuras en pared causadas por manillas de puerta, pomos o impactos en Valencia."
      : "Repair of wall marks and dents caused by door handles, knobs or impact in Valencia.",
    serviceType: isEs
      ? "Reparación de golpes de manilla en pared"
      : "Door handle wall damage repair",
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
          ? "Reparación de golpes de manilla"
          : "Door handle wall damage repair",
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
        "Desde 29€",
        "Marcas de manilla o pomo",
        "Golpes y abolladuras pequeñas",
        "Relleno y alisado local",
      ]
    : [
        "From €29",
        "Handle or knob marks",
        "Small dents and impact marks",
        "Local filling and smoothing",
      ];

  const included = isEs
    ? [
        "Revisión de la marca o abolladura",
        "Preparación básica de la zona dañada",
        "Relleno del golpe o marca visible",
        "Alisado local para mejorar el acabado",
        "Preparación para pintura cuando aplica",
        "Presupuesto claro según fotos, medidas y alcance",
      ]
    : [
        "Check of the mark or dent",
        "Basic preparation of the damaged area",
        "Filling of the visible impact or mark",
        "Local smoothing to improve finish",
        "Preparation for painting where applicable",
        "Clear estimate based on photos, measurements and scope",
      ];

  const related = isEs
    ? [
        {
          title: "Reparación media de pared",
          href: `/${locale}/services/drywall/medium-wall-patching`,
        },
        {
          title: "Reparación de agujeros pequeños",
          href: `/${locale}/services/drywall/small-hole-repair`,
        },
        {
          title: "Reparación de esquinas",
          href: `/${locale}/services/drywall/corner-repair`,
        },
        {
          title: "Pladur y paredes",
          href: `/${locale}/services/drywall`,
        },
      ]
    : [
        {
          title: "Medium wall patching",
          href: `/${locale}/services/drywall/medium-wall-patching`,
        },
        {
          title: "Small hole repair",
          href: `/${locale}/services/drywall/small-hole-repair`,
        },
        {
          title: "Corner repair",
          href: `/${locale}/services/drywall/corner-repair`,
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
                ? "Reparación de golpes de manilla en pared"
                : "Door handle wall damage repair"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Reparación de marcas, golpes y abolladuras causadas por manillas, pomos, topes de puerta o impactos contra la pared."
                : "Repair of wall marks and dents caused by handles, knobs, door stops or impact against the wall."}
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
              <DoorOpen className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 29€" : "From €29"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Golpe reparado. Pared más lisa. Mejor acabado."
                  : "Impact repaired. Smoother wall. Cleaner finish."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal para marcas circulares o abolladuras pequeñas detrás de puertas."
                  : "Ideal for circular marks or small dents behind doors."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Manillas" : "Handles",
                  text: isEs ? "Marcas visibles" : "Visible marks",
                  icon: DoorOpen,
                },
                {
                  title: isEs ? "Golpes" : "Impact",
                  text: isEs ? "Abolladuras pequeñas" : "Small dents",
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
              title: isEs ? "Golpes de puerta" : "Door impact marks",
              text: isEs
                ? "Para marcas de manillas, pomos, topes o impactos repetidos contra la pared."
                : "For handle, knob, door stop or repeated impact marks against the wall.",
            },
            {
              title: isEs ? "Relleno y alisado" : "Filling and smoothing",
              text: isEs
                ? "Corrección local para mejorar la zona visible antes de pintar o retocar."
                : "Local correction to improve the visible area before painting or touch-up.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos para valorar profundidad, tamaño y acabado esperado."
                : "Send photos to review depth, size and expected finish.",
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
            ? "Reparación de marcas y abolladuras causadas por puertas"
            : "Repair of wall marks and dents caused by doors"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Las manillas y pomos de puertas pueden dejar marcas circulares, abolladuras o golpes visibles en la pared, sobre todo cuando la puerta se abre contra la misma zona todos los días."
              : "Door handles and knobs can leave circular marks, dents or visible impact damage on the wall, especially when the door opens against the same area every day."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza reparación de daños de manilla en Valencia para pisos, casas, alquileres, habitaciones, pasillos, oficinas y zonas donde la pared necesita una mejora visible."
              : "THEVULGO provides door handle wall damage repair in Valencia for apartments, homes, rentals, rooms, hallways, offices and areas where the wall needs visible improvement."}
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
            {isEs ? "Desde 29€" : "From €29"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos del golpe o marca"
              : "Send photos of the dent or mark"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, una foto de cerca y medidas aproximadas del daño."
              : "To estimate the price, send a general photo, close-up photo and approximate damage measurements."}
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
              ? "¿Necesitas reparar una marca de manilla en pared?"
              : "Need a door handle wall mark repaired?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos del daño. Te damos un presupuesto claro antes de empezar."
              : "Send photos of the damage. Get a clear estimate before the work starts."}
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
