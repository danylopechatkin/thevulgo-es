import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Drill,
  MapPin,
  ShieldCheck,
  Sparkles,
  Square,
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
    ? "Reinstalación de Espejos en Valencia | Desde 35€ | THEVULGO"
    : "Mirror Re-mounting in Valencia | From €35 | THEVULGO";

  const description = isEs
    ? "Reinstalación y ajuste de espejos en Valencia desde 35€. Re-fijación, ajuste y corrección de espejos y pequeños accesorios de pared."
    : "Mirror re-mounting in Valencia from €35. Adjustment and re-fixing of mirrors and small wall accessories with clean, safe mounting.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reinstalar espejo Valencia",
          "ajustar espejo Valencia",
          "espejo suelto Valencia",
          "volver a montar espejo Valencia",
          "fijar espejo pared Valencia",
          "reparar espejo pared Valencia",
          "manitas espejo Valencia",
        ]
      : [
          "mirror remounting Valencia",
          "mirror re fixing Valencia",
          "loose mirror repair Valencia",
          "mirror adjustment Valencia",
          "wall mirror mounting Valencia",
          "small wall accessory fixing Valencia",
          "handyman mirror Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/mirror-remounting`,
      languages: {
        es: `${siteUrl}/es/services/repairs/mirror-remounting`,
        en: `${siteUrl}/en/services/repairs/mirror-remounting`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/mirror-remounting`,
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

export default async function MirrorRemountingPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/mirror-remounting`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para ajustar o volver a fijar un espejo en Valencia."
      : "Hi, I would like an estimate for mirror re-mounting or adjustment in Valencia."
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
          q: "¿Qué incluye la reinstalación de un espejo?",
          a: "Incluye revisión del espejo, pared, soportes o fijaciones existentes, ajuste, re-fijación o reposicionamiento simple cuando el caso lo permite.",
        },
        {
          q: "¿Cuánto cuesta volver a fijar un espejo en Valencia?",
          a: "El servicio empieza desde 35€. El precio final depende del tamaño del espejo, peso, tipo de pared, sistema de fijación, acceso y material necesario.",
        },
        {
          q: "¿Podéis arreglar un espejo que está suelto?",
          a: "Sí. En muchos casos se puede volver a fijar o ajustar un espejo suelto si el espejo, la pared y los puntos de fijación permiten una instalación segura.",
        },
        {
          q: "¿También trabajáis con accesorios pequeños de pared?",
          a: "Sí. Este servicio puede incluir pequeños accesorios de pared como colgadores, piezas decorativas, soportes ligeros y elementos similares.",
        },
        {
          q: "¿Trabajáis con paredes de pladur?",
          a: "Sí, pero depende del peso del espejo y del tipo de anclaje. En pladur puede hacer falta una fijación específica.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general del espejo, fotos de la parte trasera o soportes si puedes, foto de la pared y medidas aproximadas.",
        },
      ]
    : [
        {
          q: "What is included in mirror re-mounting?",
          a: "It includes checking the mirror, wall, existing brackets or fixings, adjustment, re-fixing or simple repositioning where suitable.",
        },
        {
          q: "How much does mirror re-mounting cost in Valencia?",
          a: "The service starts from €35. Final price depends on mirror size, weight, wall type, fixing system, access and required material.",
        },
        {
          q: "Can you fix a loose mirror?",
          a: "Yes. In many cases a loose mirror can be re-fixed or adjusted if the mirror, wall and fixing points allow safe installation.",
        },
        {
          q: "Do you also work with small wall accessories?",
          a: "Yes. This service can include small wall accessories such as hooks, decorative pieces, light brackets and similar items.",
        },
        {
          q: "Do you work with drywall walls?",
          a: "Yes, but it depends on mirror weight and anchor type. Drywall may require a specific fixing.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the mirror, photos of the back or brackets if possible, one photo of the wall and approximate measurements.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Reinstalación de espejos en Valencia"
      : "Mirror re-mounting in Valencia",
    description: isEs
      ? "Ajuste, re-fijación y reposicionamiento simple de espejos y pequeños accesorios de pared en Valencia."
      : "Adjustment, re-fixing and simple repositioning of mirrors and small wall accessories in Valencia.",
    serviceType: isEs ? "Reinstalación de espejos" : "Mirror re-mounting",
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
        name: isEs ? "Reparaciones" : "Repairs",
        item: `${siteUrl}/${locale}/services/repairs`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isEs ? "Reinstalación de espejos" : "Mirror re-mounting",
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
        "Espejos sueltos o mal alineados",
        "Re-fijación y ajuste",
        "Pequeños accesorios de pared",
      ]
    : [
        "From €35",
        "Loose or misaligned mirrors",
        "Re-fixing and adjustment",
        "Small wall accessories",
      ];

  const included = isEs
    ? [
        "Revisión del espejo, pared y fijaciones",
        "Comprobación de soportes o anclajes existentes",
        "Re-fijación simple cuando es posible",
        "Ajuste o reposicionamiento básico",
        "Revisión de estabilidad y alineación",
        "Presupuesto claro según fotos, medidas y alcance",
      ]
    : [
        "Check of mirror, wall and fixings",
        "Inspection of existing brackets or anchors",
        "Simple re-fixing where possible",
        "Basic adjustment or repositioning",
        "Stability and alignment check",
        "Clear estimate based on photos, measurements and scope",
      ];

  const related = isEs
    ? [
        { title: "Instalación de tacos y anclajes", href: `/${locale}/services/repairs/wall-anchor-installation` },
        { title: "Reparaciones en Valencia", href: `/${locale}/services/repairs` },
        { title: "Pladur y paredes", href: `/${locale}/services/drywall` },
        { title: "Servicios handyman", href: `/${locale}/services` },
      ]
    : [
        { title: "Wall anchor installation", href: `/${locale}/services/repairs/wall-anchor-installation` },
        { title: "Repairs in Valencia", href: `/${locale}/services/repairs` },
        { title: "Drywall and walls", href: `/${locale}/services/drywall` },
        { title: "Handyman services", href: `/${locale}/services` },
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
                ? "THEVULGO • Reparaciones en Valencia"
                : "THEVULGO • Repairs in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Reinstalación de espejos" : "Mirror re-mounting"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Ajuste o re-fijación de espejos y pequeños accesorios de pared. Ideal cuando el espejo está suelto, mal alineado o necesita volver a montarse con más seguridad."
                : "Adjustment or re-fixing of mirrors and small wall accessories. Ideal when a mirror is loose, misaligned or needs to be mounted again more securely."}
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
                href={`/${locale}/services/repairs`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400"
              >
                {isEs ? "Ver reparaciones" : "View repairs"}
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
              <Square className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 35€" : "From €35"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Espejo más firme. Mejor alineación. Montaje más seguro."
                  : "Firmer mirror. Better alignment. Safer mounting."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Revisamos el espejo, los soportes y la pared para corregir la fijación cuando el caso permite un ajuste seguro."
                  : "We check the mirror, brackets and wall to correct the fixing when the situation allows a safe adjustment."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Espejos" : "Mirrors",
                  text: isEs ? "Ajuste y re-fijación" : "Adjustment and re-fixing",
                  icon: Square,
                },
                {
                  title: isEs ? "Anclajes" : "Anchors",
                  text: isEs ? "Revisión básica" : "Basic check",
                  icon: ShieldCheck,
                },
                {
                  title: isEs ? "Accesorios" : "Accessories",
                  text: isEs ? "Piezas de pared pequeñas" : "Small wall pieces",
                  icon: Wrench,
                },
                {
                  title: isEs ? "Montaje" : "Mounting",
                  text: isEs ? "Más limpio y seguro" : "Cleaner and safer",
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
              title: isEs ? "Espejo suelto" : "Loose mirror",
              text: isEs
                ? "Revisión de espejos que se mueven, quedan mal apoyados o no se sienten firmes."
                : "Checking mirrors that move, sit poorly or do not feel firmly fixed.",
            },
            {
              title: isEs ? "Mejor fijación" : "Better fixing",
              text: isEs
                ? "Correcciones sencillas para mejorar anclajes, soportes y estabilidad visible."
                : "Simple corrections to improve anchors, brackets and visible stability.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos, medidas y peso aproximado para valorar pared, fijación y alcance."
                : "Send photos, measurements and approximate weight to review wall, fixing and scope.",
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
            ? "Ajuste y re-fijación de espejos y pequeños accesorios de pared"
            : "Adjustment and re-fixing of mirrors and small wall accessories"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Un espejo suelto, inclinado o mal fijado puede ser incómodo y poco seguro. En muchos casos no hace falta sustituirlo: se puede revisar el sistema de fijación, mejorar los anclajes o ajustar la posición."
              : "A loose, tilted or poorly fixed mirror can be inconvenient and unsafe. In many cases it does not need replacement: the fixing system can be checked, anchors improved or position adjusted."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza re-fijación de espejos en Valencia para baños, entradas, dormitorios, salones, pisos de alquiler, mudanzas y pequeños accesorios de pared."
              : "THEVULGO provides mirror re-mounting in Valencia for bathrooms, hallways, bedrooms, living rooms, rental apartments, move-ins and small wall accessories."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos del espejo, pared, soportes y medidas aproximadas. Así se puede valorar si basta con ajustar o si hace falta instalar nuevos anclajes."
              : "Before confirming, you can send photos of the mirror, wall, brackets and approximate measurements. This helps check whether adjustment is enough or if new anchors are needed."}
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
              ? "Envía fotos para valorar la fijación"
              : "Send photos to check the fixing"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, fotos de los soportes o parte trasera, medidas aproximadas y tipo de pared."
              : "To estimate the price, send a general photo, photos of the brackets or back side, approximate measurements and wall type."}
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
              ? "¿Necesitas volver a fijar un espejo?"
              : "Need a mirror re-mounted?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos del espejo y la pared. Te damos un presupuesto claro antes de empezar."
              : "Send photos of the mirror and wall. Get a clear estimate before the work starts."}
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