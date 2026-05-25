import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bath,
  CheckCircle2,
  Drill,
  MapPin,
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
    ? "Reparación de Accesorios de Baño en Valencia | Desde 29€ | THEVULGO"
    : "Bathroom Accessory Fixing in Valencia | From €29 | THEVULGO";

  const description = isEs
    ? "Reparación y re-fijación de accesorios de baño en Valencia desde 29€: portarrollos, toalleros, ganchos, soportes y accesorios sueltos."
    : "Bathroom accessory fixing in Valencia from €29: minor repair or re-fixing of holders, hooks, towel rails and loose bathroom accessories.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparar accesorios baño Valencia",
          "accesorio baño suelto Valencia",
          "arreglar toallero Valencia",
          "arreglar portarrollos Valencia",
          "ganchos baño Valencia",
          "soportes baño Valencia",
          "manitas baño Valencia",
        ]
      : [
          "bathroom accessory fixing Valencia",
          "loose bathroom holder Valencia",
          "towel rail repair Valencia",
          "toilet roll holder repair Valencia",
          "bathroom hooks Valencia",
          "bathroom fittings repair Valencia",
          "bathroom handyman Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/bathroom-accessory-fixing`,
      languages: {
        es: `${siteUrl}/es/services/repairs/bathroom-accessory-fixing`,
        en: `${siteUrl}/en/services/repairs/bathroom-accessory-fixing`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/bathroom-accessory-fixing`,
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

export default async function BathroomAccessoryFixingPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/bathroom-accessory-fixing`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para reparar o volver a fijar un accesorio de baño en Valencia."
      : "Hi, I would like an estimate for fixing or re-fixing a bathroom accessory in Valencia."
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
          q: "¿Qué accesorios de baño podéis reparar o volver a fijar?",
          a: "Podemos revisar y volver a fijar portarrollos, toalleros, ganchos, soportes, pequeños estantes, accesorios de ducha y piezas sueltas cuando el estado de la pared y del accesorio lo permite.",
        },
        {
          q: "¿Cuánto cuesta reparar un accesorio de baño en Valencia?",
          a: "El servicio empieza desde 29€. El precio final depende del tipo de accesorio, pared, anclajes existentes, estado de los agujeros y material necesario.",
        },
        {
          q: "¿Podéis arreglar un toallero o portarrollos suelto?",
          a: "Sí. En muchos casos se puede reapretar, reforzar o volver a fijar si la pieza no está rota y la pared permite una fijación segura.",
        },
        {
          q: "¿Trabajáis en azulejo o pared de baño?",
          a: "Sí, pero se revisa cada caso. En azulejo hay que trabajar con cuidado para evitar daños y elegir la fijación adecuada.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general del baño, una foto de cerca del accesorio suelto, la zona de fijación y si puedes un vídeo corto mostrando el movimiento.",
        },
      ]
    : [
        {
          q: "What bathroom accessories can be fixed or re-fixed?",
          a: "Toilet roll holders, towel rails, hooks, brackets, small shelves, shower accessories and loose fittings can be checked and re-fixed where the wall and accessory condition allow it.",
        },
        {
          q: "How much does bathroom accessory fixing cost in Valencia?",
          a: "The service starts from €29. Final price depends on accessory type, wall type, existing anchors, hole condition and required material.",
        },
        {
          q: "Can you fix a loose towel rail or toilet roll holder?",
          a: "Yes. In many cases it can be tightened, reinforced or re-fixed if the part is not broken and the wall allows safe fixing.",
        },
        {
          q: "Do you work on bathroom tiles?",
          a: "Yes, but each case is checked first. Tile work needs care to avoid damage and to choose the correct fixing.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the bathroom, one close-up photo of the loose accessory, the fixing area and if possible a short video showing the movement.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Reparación de accesorios de baño en Valencia"
      : "Bathroom accessory fixing in Valencia",
    description: isEs
      ? "Reparación menor y re-fijación de portarrollos, toalleros, ganchos, soportes y accesorios de baño sueltos en Valencia."
      : "Minor repair and re-fixing of holders, hooks, towel rails, brackets and loose bathroom accessories in Valencia.",
    serviceType: isEs
      ? "Reparación de accesorios de baño"
      : "Bathroom accessory fixing",
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
        name: isEs ? "Reparaciones" : "Repairs",
        item: `${siteUrl}/${locale}/services/repairs`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isEs
          ? "Reparación de accesorios de baño"
          : "Bathroom accessory fixing",
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
        "Toalleros, ganchos y soportes",
        "Re-fijación de accesorios sueltos",
        "Baños, duchas y zonas de lavabo",
      ]
    : [
        "From €29",
        "Towel rails, hooks and holders",
        "Re-fixing loose accessories",
        "Bathrooms, showers and sink areas",
      ];

  const included = isEs
    ? [
        "Revisión del accesorio y zona de fijación",
        "Comprobación de tornillos, tacos o anclajes",
        "Reapriete o re-fijación simple cuando es posible",
        "Corrección de accesorios sueltos o inestables",
        "Trabajo cuidadoso alrededor de azulejos y superficies visibles",
        "Presupuesto claro según fotos, vídeo y alcance",
      ]
    : [
        "Check of the accessory and fixing area",
        "Inspection of screws, plugs or anchors",
        "Simple tightening or re-fixing where possible",
        "Correction of loose or unstable accessories",
        "Careful work around tiles and visible surfaces",
        "Clear estimate based on photos, video and scope",
      ];

  const related = isEs
    ? [
        {
          title: "Servicios de baño",
          href: `/${locale}/services/bathroom`,
        },
        {
          title: "Instalación de tacos y anclajes",
          href: `/${locale}/services/repairs/wall-anchor-installation`,
        },
        {
          title: "Sellado de juntas y huecos",
          href: `/${locale}/services/repairs/sealing-gap-filling`,
        },
        {
          title: "Reparaciones en Valencia",
          href: `/${locale}/services/repairs`,
        },
      ]
    : [
        {
          title: "Bathroom services",
          href: `/${locale}/services/bathroom`,
        },
        {
          title: "Wall anchor installation",
          href: `/${locale}/services/repairs/wall-anchor-installation`,
        },
        {
          title: "Sealing & gap filling",
          href: `/${locale}/services/repairs/sealing-gap-filling`,
        },
        {
          title: "Repairs in Valencia",
          href: `/${locale}/services/repairs`,
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
                ? "THEVULGO • Reparaciones en Valencia"
                : "THEVULGO • Repairs in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs
                ? "Reparación de accesorios de baño"
                : "Bathroom accessory fixing"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Reparación menor o re-fijación de portarrollos, toalleros, ganchos, soportes y accesorios de baño sueltos. Ideal para mejorar estabilidad y uso diario."
                : "Minor repair or re-fixing of holders, hooks, towel rails and bathroom accessories. Ideal for improving stability and everyday use."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
              >
                {isEs
                  ? "Pedir presupuesto por WhatsApp"
                  : "Get estimate by WhatsApp"}
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
              <Bath className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 29€" : "From €29"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Accesorio más firme. Baño más cómodo. Mejor acabado."
                  : "Firmer accessory. Easier bathroom use. Cleaner finish."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Revisamos la pieza, pared, azulejo y fijaciones para corregir accesorios sueltos cuando el caso permite una reparación segura."
                  : "We check the part, wall, tile and fixings to correct loose accessories when the case allows a safe repair."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Toalleros" : "Towel rails",
                  text: isEs ? "Ajuste y re-fijación" : "Adjustment and re-fixing",
                  icon: Bath,
                },
                {
                  title: isEs ? "Ganchos" : "Hooks",
                  text: isEs ? "Piezas sueltas" : "Loose fittings",
                  icon: Wrench,
                },
                {
                  title: isEs ? "Anclajes" : "Anchors",
                  text: isEs ? "Revisión básica" : "Basic check",
                  icon: ShieldCheck,
                },
                {
                  title: isEs ? "Azulejo" : "Tile areas",
                  text: isEs ? "Trabajo cuidadoso" : "Careful work",
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
              title: isEs ? "Accesorio suelto" : "Loose accessory",
              text: isEs
                ? "Revisión de portarrollos, toalleros, ganchos o soportes que se mueven o no quedan firmes."
                : "Checking toilet roll holders, towel rails, hooks or holders that move or do not stay firm.",
            },
            {
              title: isEs ? "Mejor fijación" : "Better fixing",
              text: isEs
                ? "Correcciones simples para mejorar estabilidad y uso diario sin cambiar todo el accesorio."
                : "Simple corrections to improve stability and everyday use without replacing the full accessory.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y vídeo para valorar pared, azulejo, pieza y sistema de fijación."
                : "Send photos and video to review the wall, tile, part and fixing system.",
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
            ? "Re-fijación de portarrollos, toalleros, ganchos y accesorios de baño"
            : "Re-fixing toilet roll holders, towel rails, hooks and bathroom accessories"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Un accesorio de baño suelto puede parecer un detalle pequeño, pero molesta todos los días y puede terminar dañando el azulejo, la pared o la pieza. Muchas veces se puede mejorar con reapriete, nuevos tacos o una re-fijación sencilla."
              : "A loose bathroom accessory can seem like a small detail, but it is annoying every day and can eventually damage the tile, wall or fitting. In many cases it can be improved with tightening, new plugs or simple re-fixing."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza reparación de accesorios de baño en Valencia para pisos, casas, apartamentos de alquiler, baños principales, aseos pequeños y zonas de ducha o lavabo."
              : "THEVULGO provides bathroom accessory fixing in Valencia for apartments, homes, rental properties, main bathrooms, small toilets and shower or sink areas."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos del accesorio, la zona de fijación y un vídeo corto mostrando el movimiento. Así se puede valorar si basta con ajustar o si hace falta cambiar anclajes."
              : "Before confirming, you can send photos of the accessory, the fixing area and a short video showing the movement. This helps check whether tightening is enough or if anchors need replacement."}
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
              ? "Envía fotos para valorar la fijación"
              : "Send photos to check the fixing"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, una foto de cerca del accesorio y un vídeo corto mostrando cómo se mueve."
              : "To estimate the price, send a general photo, a close-up photo of the accessory and a short video showing how it moves."}
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
              ? "¿Tienes un accesorio de baño suelto?"
              : "Do you have a loose bathroom accessory?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos y un vídeo corto. Te damos un presupuesto claro antes de empezar."
              : "Send photos and a short video. Get a clear estimate before the work starts."}
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