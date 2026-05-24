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
    ? "Enlucido Localizado de Pared en Valencia | Desde 49€ | THEVULGO"
    : "Skim Coat Area Repair in Valencia | From €49 | THEVULGO";

  const description = isEs
    ? "Enlucido localizado y corrección de zonas irregulares en Valencia desde 49€. Trabajo de skim coat en parches, zonas reparadas y pequeñas secciones desiguales."
    : "Skim coat area repair in Valencia from €49. Localized skim work for patched zones, repaired wall areas and uneven small sections.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "enlucido localizado Valencia",
          "skim coat Valencia",
          "alisar pared reparada Valencia",
          "corregir pared irregular Valencia",
          "enlucir zona pared Valencia",
          "preparar pared para pintar Valencia",
          "pladur y paredes Valencia",
        ]
      : [
          "skim coat area repair Valencia",
          "localized skim coat Valencia",
          "skim coat patched wall Valencia",
          "uneven wall section repair Valencia",
          "wall smoothing Valencia",
          "drywall skim repair Valencia",
          "wall prep Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/skim-coat-area-repair`,
      languages: {
        es: `${siteUrl}/es/services/drywall/skim-coat-area-repair`,
        en: `${siteUrl}/en/services/drywall/skim-coat-area-repair`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/skim-coat-area-repair`,
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

export default async function SkimCoatAreaRepairPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/skim-coat-area-repair`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para enlucido localizado o corrección de una zona irregular de pared en Valencia."
      : "Hi, I would like an estimate for localized skim coat area repair in Valencia."
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
          q: "¿Qué incluye el enlucido localizado?",
          a: "Incluye revisión de la zona, preparación básica, aplicación localizada de material, alisado y mejora visible de una sección pequeña o reparada de pared.",
        },
        {
          q: "¿Cuánto cuesta un skim coat localizado en Valencia?",
          a: "El servicio empieza desde 49€. El precio final depende del tamaño de la zona, estado de la pared, número de capas, material necesario y acabado esperado.",
        },
        {
          q: "¿Sirve para zonas parcheadas?",
          a: "Sí. Es ideal para zonas reparadas, parches, marcas antiguas, secciones desiguales o superficies que necesitan quedar más uniformes antes de pintar.",
        },
        {
          q: "¿Es un enlucido completo de toda la pared?",
          a: "No. Esta página está enfocada en trabajo localizado. Un enlucido completo o una reforma amplia se valora aparte.",
        },
        {
          q: "¿Incluye pintura?",
          a: "La pintura se valora aparte. Este servicio se centra en preparar y alisar la superficie para un acabado posterior más limpio.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, fotos de cerca de la zona irregular y medidas aproximadas del área que quieres corregir.",
        },
      ]
    : [
        {
          q: "What is included in localized skim coat repair?",
          a: "It includes checking the area, basic preparation, localized material application, smoothing and visible improvement of a small or repaired wall section.",
        },
        {
          q: "How much does localized skim coat work cost in Valencia?",
          a: "The service starts from €49. Final price depends on area size, wall condition, number of coats, required material and expected finish.",
        },
        {
          q: "Is this suitable for patched zones?",
          a: "Yes. It is ideal for repaired areas, patches, old marks, uneven sections or surfaces that need to look more uniform before painting.",
        },
        {
          q: "Is this full-wall skim coating?",
          a: "No. This page focuses on localized work. Full-wall skim coating or larger renovation work is quoted separately.",
        },
        {
          q: "Is painting included?",
          a: "Painting is reviewed separately. This service focuses on preparing and smoothing the surface for a cleaner later finish.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, close-up photos of the uneven area and approximate measurements of the section you want corrected.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Enlucido localizado de pared en Valencia"
      : "Skim coat area repair in Valencia",
    description: isEs
      ? "Trabajo localizado de enlucido y alisado para zonas parcheadas, reparadas o pequeñas secciones irregulares de pared en Valencia."
      : "Localized skim work and smoothing for patched zones, repaired areas or uneven small wall sections in Valencia.",
    serviceType: isEs ? "Enlucido localizado" : "Skim coat area repair",
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
      price: "49",
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
        name: isEs ? "Enlucido localizado" : "Skim coat area repair",
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
        "Desde 49€",
        "Zonas parcheadas o irregulares",
        "Enlucido localizado",
        "Preparación para acabado limpio",
      ]
    : [
        "From €49",
        "Patched or uneven zones",
        "Localized skim work",
        "Prep for a cleaner finish",
      ];

  const included = isEs
    ? [
        "Revisión de la zona irregular o parcheada",
        "Preparación básica de la superficie",
        "Aplicación localizada de material de alisado",
        "Alisado para mejorar la transición visual",
        "Preparación para pintura o acabado posterior",
        "Presupuesto claro según fotos, medidas y alcance",
      ]
    : [
        "Check of the uneven or patched area",
        "Basic surface preparation",
        "Localized application of smoothing material",
        "Smoothing to improve visual transition",
        "Preparation for later painting or finish",
        "Clear estimate based on photos, measurements and scope",
      ];

  const related = isEs
    ? [
        {
          title: "Preparación y nivelación básica",
          href: `/${locale}/services/drywall/wall-levelling-prep`,
        },
        {
          title: "Preparación de pared para retoques",
          href: `/${locale}/services/drywall/wall-touch-up-prep`,
        },
        {
          title: "Reparación media de pared",
          href: `/${locale}/services/drywall/medium-wall-patching`,
        },
        {
          title: "Pladur y paredes",
          href: `/${locale}/services/drywall`,
        },
      ]
    : [
        {
          title: "Wall levelling prep",
          href: `/${locale}/services/drywall/wall-levelling-prep`,
        },
        {
          title: "Wall touch-up prep",
          href: `/${locale}/services/drywall/wall-touch-up-prep`,
        },
        {
          title: "Medium wall patching",
          href: `/${locale}/services/drywall/medium-wall-patching`,
        },
        {
          title: "Drywall and walls",
          href: `/${locale}/services/drywall`,
        },
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
              {isEs
                ? "THEVULGO • Pladur y paredes en Valencia"
                : "THEVULGO • Drywall and walls in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Enlucido localizado de pared" : "Skim coat area repair"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Trabajo localizado de enlucido para zonas parcheadas, reparadas o pequeñas secciones irregulares que necesitan un acabado más uniforme."
                : "Localized skim work for patched zones, repaired areas or uneven small sections that need a more uniform finish."}
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
              <Layers3 className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 49€" : "From €49"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Zona más lisa. Transición más limpia. Mejor acabado."
                  : "Smoother area. Cleaner transition. Better finish."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal después de parches, reparaciones locales o pequeñas irregularidades que se notan en la pared."
                  : "Ideal after patches, local repairs or small irregularities that remain visible on the wall."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Enlucido" : "Skim coat",
                  text: isEs ? "Trabajo localizado" : "Localized work",
                  icon: Layers3,
                },
                {
                  title: isEs ? "Alisado" : "Smoothing",
                  text: isEs ? "Mejor transición" : "Better transition",
                  icon: Paintbrush,
                },
                {
                  title: isEs ? "Parches" : "Patches",
                  text: isEs ? "Zonas reparadas" : "Repaired zones",
                  icon: ShieldCheck,
                },
                {
                  title: isEs ? "Medidas" : "Area",
                  text: isEs ? "Según tamaño" : "Based on size",
                  icon: Ruler,
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
              title: isEs ? "Zonas parcheadas" : "Patched zones",
              text: isEs
                ? "Para áreas donde una reparación anterior se nota o necesita mejor transición."
                : "For areas where a previous repair remains visible or needs a better transition.",
            },
            {
              title: isEs ? "Secciones irregulares" : "Uneven sections",
              text: isEs
                ? "Corrección localizada para pequeñas zonas con textura o superficie desigual."
                : "Localized correction for small areas with uneven texture or surface.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y medidas para valorar tamaño, material y acabado esperado."
                : "Send photos and measurements to review size, material and expected finish.",
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
            ? "Enlucido localizado para zonas reparadas o pequeñas secciones desiguales"
            : "Localized skim coat for repaired areas or small uneven sections"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Después de reparar una pared, a veces queda una transición visible entre la zona nueva y la superficie antigua. El enlucido localizado ayuda a suavizar esa zona para que el acabado se vea más uniforme."
              : "After repairing a wall, there can be a visible transition between the new patch and the old surface. Localized skim work helps smooth that area so the finish looks more uniform."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza skim coat localizado en Valencia para pisos, casas, alquileres, habitaciones, zonas de move-out, paredes parcheadas y pequeñas secciones que necesitan preparación antes de pintar."
              : "THEVULGO provides localized skim coat work in Valencia for apartments, homes, rentals, rooms, move-out areas, patched walls and small sections that need preparation before painting."}
          </p>

          <p>
            {isEs
              ? "Este servicio no es un enlucido completo de toda la pared. Está pensado para zonas concretas donde se busca una superficie más limpia antes del acabado final."
              : "This service is not full-wall skim coating. It is designed for specific areas where a cleaner surface is needed before the final finish."}
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
            {isEs ? "Desde 49€" : "From €49"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos de la zona a alisar"
              : "Send photos of the area to smooth"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, fotos de cerca y medidas aproximadas de la zona."
              : "To estimate the price, send a general photo, close-up photos and approximate measurements of the area."}
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
              ? "¿Necesitas alisar una zona reparada?"
              : "Need a repaired area smoothed?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos y medidas aproximadas. Te damos un presupuesto claro antes de empezar."
              : "Send photos and approximate measurements. Get a clear estimate before the work starts."}
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