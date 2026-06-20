import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Euro,
  Hammer,
  Home,
  Lightbulb,
  MapPin,
  MessageCircle,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Wrench,
  Zap,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const pagePath = "/falso-techo-pladur-valencia";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Falso Techo de Pladur en Valencia | Instalación y Presupuesto | THEVULGO"
    : "Plasterboard False Ceiling in Valencia | Installation & Quote | THEVULGO";

  const description = isEs
    ? "Instalación y reparación de falso techo de pladur en Valencia. Techos de pladur, preparación para focos, registros, remates y presupuesto por WhatsApp."
    : "Installation and repair of plasterboard false ceilings in Valencia. Drywall ceilings, spotlight preparation, access panels, finishing details and WhatsApp quote.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "falso techo pladur valencia",
          "falsos techos pladur valencia",
          "falso techo de pladur valencia",
          "instalar falso techo pladur valencia",
          "instalacion falso techo pladur valencia",
          "instalación falso techo pladur valencia",
          "precio falso techo pladur valencia",
          "presupuesto falso techo pladur valencia",
          "techo pladur valencia",
          "techos pladur valencia",
          "techo de pladur valencia",
          "falsos techos valencia",
          "pladur valencia",
          "empresa pladur valencia",
          "reformas pladur valencia",
          "techo registrable valencia",
          "reparacion pladur techo valencia",
        ]
      : [
          "plasterboard false ceiling valencia",
          "drywall false ceiling valencia",
          "false ceiling valencia",
          "drywall ceiling valencia",
          "plasterboard ceiling valencia",
          "false ceiling installation valencia",
          "drywall ceiling quote valencia",
          "plasterboard ceiling repair valencia",
        ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}${pagePath}`,
      languages: {
        es: `${baseUrl}/es${pagePath}`,
        en: `${baseUrl}/en${pagePath}`,
        "x-default": `${baseUrl}/es${pagePath}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}${pagePath}`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function FalsoTechoPladurValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=handyman`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito presupuesto para un falso techo de pladur en Valencia. Puedo enviar fotos, medidas y detalles del trabajo."
      : "Hi, I need a quote for a plasterboard false ceiling in Valencia. I can send photos, measurements and job details."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const services = isEs
    ? [
        "Instalación de falso techo de pladur",
        "Reparación de techo de pladur",
        "Preparación para focos empotrados",
        "Cierre de huecos en techo",
        "Remates y acabado de juntas",
        "Masillado y lijado",
        "Preparación para pintura",
        "Revisión de techo existente",
        "Pequeños techos decorativos",
        "Falsos techos para viviendas",
        "Falsos techos para locales",
        "Registros y acceso técnico",
      ]
    : [
        "Plasterboard false ceiling installation",
        "Drywall ceiling repair",
        "Preparation for recessed spotlights",
        "Closing ceiling openings",
        "Joint finishing details",
        "Filler and sanding",
        "Preparation for painting",
        "Existing ceiling inspection",
        "Small decorative ceilings",
        "False ceilings for homes",
        "False ceilings for shops",
        "Access panels and technical access",
      ];

  const prices = isEs
    ? [
        ["Revisión / visita", "desde 49 €"],
        ["Reparación pequeña de techo", "desde 49 €"],
        ["Parche + lijado básico", "desde 45 €"],
        ["Preparación para focos", "presupuesto"],
        ["Falso techo pequeño", "presupuesto"],
        ["Falso techo completo", "presupuesto"],
        ["Techo registrable", "presupuesto"],
        ["Preparación para pintura", "presupuesto"],
      ]
    : [
        ["Visit / inspection", "from €49"],
        ["Small ceiling repair", "from €49"],
        ["Patch + basic sanding", "from €45"],
        ["Spotlight preparation", "quote"],
        ["Small false ceiling", "quote"],
        ["Complete false ceiling", "quote"],
        ["Suspended ceiling", "quote"],
        ["Preparation for painting", "quote"],
      ];

  const moneyLinks = [
    {
      title: isEs ? "Pladur Valencia" : "Drywall Valencia",
      desc: isEs
        ? "Página principal del servicio de pladur en Valencia."
        : "Main drywall and plasterboard service page in Valencia.",
      href: `/${locale}/pladur-valencia`,
    },
    {
      title: isEs ? "Presupuesto Pladur Valencia" : "Drywall Quote Valencia",
      desc: isEs
        ? "Pide presupuesto según fotos, medidas, altura y acabado."
        : "Request a quote based on photos, measurements, height and finish.",
      href: `/${locale}/presupuesto-pladur-valencia`,
    },
    {
      title: isEs ? "Empresa Pladur Valencia" : "Drywall Company Valencia",
      desc: isEs
        ? "Servicio de pladur para viviendas, locales, oficinas y negocios."
        : "Drywall service for homes, shops, offices and businesses.",
      href: `/${locale}/empresa-pladur-valencia`,
    },
    {
      title: isEs ? "Reformas Pladur Valencia" : "Plasterboard Renovations Valencia",
      desc: isEs
        ? "Reformas interiores con pladur, techos, tabiques y reparaciones."
        : "Interior drywall renovations, ceilings, partitions and repairs.",
      href: `/${locale}/reformas-pladur-valencia`,
    },
    {
      title: isEs ? "Reparación Pladur Valencia" : "Drywall Repair Valencia",
      desc: isEs
        ? "Reparación de agujeros, grietas, golpes y zonas dañadas."
        : "Repair of holes, cracks, impact damage and damaged areas.",
      href: `/${locale}/reparacion-pladur-valencia`,
    },
    {
      title: isEs ? "Tabiques Pladur Valencia" : "Drywall Partitions Valencia",
      desc: isEs
        ? "Tabiques, divisiones interiores y cierres con pladur."
        : "Partitions, interior divisions and plasterboard closures.",
      href: `/${locale}/tabiques-pladur-valencia`,
    },
  ];

  const factors = isEs
    ? [
        "Metros cuadrados del techo",
        "Altura de trabajo",
        "Estado del techo actual",
        "Tipo de estructura necesaria",
        "Número de focos o puntos de luz",
        "Necesidad de registros",
        "Acabado y preparación para pintura",
        "Acceso al espacio de trabajo",
        "Materiales y tiempo necesario",
      ]
    : [
        "Ceiling square meters",
        "Working height",
        "Current ceiling condition",
        "Required frame type",
        "Number of spotlights or light points",
        "Need for access panels",
        "Finish and paint preparation",
        "Access to work area",
        "Materials and required time",
      ];

  const useCases = [
    {
      icon: Home,
      title: isEs ? "Viviendas y pisos" : "Homes and apartments",
      text: isEs
        ? "Falsos techos para mejorar estética, preparar iluminación, cerrar huecos o renovar una zona interior."
        : "False ceilings to improve appearance, prepare lighting, close openings or renovate an interior area.",
    },
    {
      icon: Store,
      title: isEs ? "Locales comerciales" : "Commercial spaces",
      text: isEs
        ? "Techos de pladur para tiendas, bares, restaurantes, oficinas y pequeños negocios."
        : "Plasterboard ceilings for shops, bars, restaurants, offices and small businesses.",
    },
    {
      icon: Lightbulb,
      title: isEs ? "Focos e iluminación" : "Spotlights and lighting",
      text: isEs
        ? "Preparación para focos empotrados, puntos de luz, registros y remates limpios."
        : "Preparation for recessed spotlights, light points, access panels and clean finishing.",
    },
  ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta un falso techo de pladur en Valencia?",
          a: "Depende de metros, altura, estructura, número de focos, registros, acabado y dificultad. Por eso normalmente se valora con fotos, medidas o visita.",
        },
        {
          q: "¿Podéis instalar falso techo de pladur en un piso?",
          a: "Sí. Podemos valorar falsos techos de pladur para pisos, viviendas, apartamentos de alquiler y pequeñas reformas interiores.",
        },
        {
          q: "¿Hacéis falsos techos para locales y oficinas?",
          a: "Sí. Trabajamos en locales comerciales, oficinas, tiendas, bares, restaurantes y pequeños negocios en Valencia y alrededores.",
        },
        {
          q: "¿Se pueden preparar focos en el falso techo?",
          a: "Sí. Podemos valorar preparación para focos, puntos de luz, registros y remates, según el estado del techo y la instalación existente.",
        },
        {
          q: "¿También reparáis techos de pladur?",
          a: "Sí. Reparamos agujeros, grietas, cortes, zonas dañadas, juntas visibles y partes abiertas en techos de pladur.",
        },
        {
          q: "¿El presupuesto incluye pintura?",
          a: "Depende del trabajo. Podemos dejar el techo preparado, masillado y lijado. La pintura se puede valorar aparte según superficie y acabado.",
        },
        {
          q: "¿Puedo enviar fotos por WhatsApp?",
          a: "Sí. Envía fotos generales, fotos de cerca, medidas aproximadas, altura del techo y explica si quieres focos, registros o solo reparación.",
        },
        {
          q: "¿Trabajáis cerca de Valencia?",
          a: "Sí. Trabajamos en Valencia ciudad y zonas cercanas como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera y Gandía según disponibilidad.",
        },
      ]
    : [
        {
          q: "How much does a plasterboard false ceiling cost in Valencia?",
          a: "It depends on size, height, framing, number of spotlights, access panels, finish and difficulty. That is why it is usually estimated with photos, measurements or a visit.",
        },
        {
          q: "Can you install a plasterboard false ceiling in an apartment?",
          a: "Yes. We can quote plasterboard false ceilings for apartments, homes, rental properties and small interior renovation projects.",
        },
        {
          q: "Do you install false ceilings for shops and offices?",
          a: "Yes. We work in commercial spaces, offices, shops, bars, restaurants and small businesses in Valencia and nearby areas.",
        },
        {
          q: "Can spotlights be prepared in the false ceiling?",
          a: "Yes. We can quote preparation for spotlights, light points, access panels and finishing details depending on the ceiling condition and existing installation.",
        },
        {
          q: "Do you also repair plasterboard ceilings?",
          a: "Yes. We repair holes, cracks, cutouts, damaged areas, visible joints and open parts in plasterboard ceilings.",
        },
        {
          q: "Does the quote include painting?",
          a: "It depends on the job. We can leave the ceiling prepared, filled and sanded. Painting can be quoted separately depending on surface and finish.",
        },
        {
          q: "Can I send photos by WhatsApp?",
          a: "Yes. Send general photos, close-up photos, approximate measurements, ceiling height and explain whether you need spotlights, access panels or only repair.",
        },
        {
          q: "Do you work near Valencia?",
          a: "Yes. We work in Valencia city and nearby areas such as Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera and Gandía depending on availability.",
        },
      ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        name: "THEVULGO",
        url: baseUrl,
        telephone: `+${phone}`,
        priceRange: "€€",
        areaServed: areas,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Valencia",
          addressCountry: "ES",
        },
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/${locale}${pagePath}#service`,
        name: isEs
          ? "Falso techo de pladur en Valencia"
          : "Plasterboard false ceiling in Valencia",
        serviceType: isEs
          ? "Instalación y reparación de falso techo de pladur"
          : "Installation and repair of plasterboard false ceilings",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}${pagePath}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de falso techo de pladur en Valencia"
            : "Plasterboard false ceiling services in Valencia",
          itemListElement: moneyLinks.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title,
              url: `${baseUrl}${item.href}`,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${baseUrl}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: isEs ? "Falso Techo Pladur Valencia" : "Plasterboard False Ceiling Valencia",
            item: `${baseUrl}/${locale}${pagePath}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-white text-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-b from-yellow-50 via-white to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-500" />
              THEVULGO • Valencia & nearby
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              {isEs
                ? "Falso techo de pladur en Valencia"
                : "Plasterboard false ceiling in Valencia"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Instalación y reparación de falsos techos de pladur en Valencia para viviendas, pisos, locales y oficinas. Preparación para focos, registros, cierre de huecos, remates, masillado, lijado y acabado limpio."
                : "Installation and repair of plasterboard false ceilings in Valencia for homes, apartments, shops and offices. Spotlight preparation, access panels, closing openings, finishing details, filler, sanding and clean finish."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-lg transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Pedir presupuesto por WhatsApp" : "Request estimate by WhatsApp"}
              </a>

              <Link
                href={estimateHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-4 font-bold shadow-sm transition hover:scale-105"
              >
                {isEs ? "Abrir formulario" : "Open estimate form"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Ruler,
                  title: isEs ? "Medición previa" : "Initial measuring",
                  text: isEs
                    ? "Fotos, medidas, altura y estado del techo."
                    : "Photos, measurements, height and ceiling condition.",
                },
                {
                  icon: Lightbulb,
                  title: isEs ? "Focos y registros" : "Lights and access",
                  text: isEs
                    ? "Preparación para luz, registros y remates."
                    : "Preparation for lighting, access panels and details.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Masilla, lijado y preparación correcta."
                    : "Filler, sanding and correct preparation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-yellow-300 bg-white p-5 shadow-md"
                >
                  <item.icon className="mb-3 h-6 w-6 text-yellow-500" />
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Servicios de falso techo de pladur" : "Plasterboard false ceiling services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Un falso techo de pladur puede mejorar la estética, ocultar instalaciones, preparar iluminación, cerrar huecos o renovar un espacio interior. Valoramos cada trabajo según medidas, altura, estructura y acabado necesario."
            : "A plasterboard false ceiling can improve appearance, hide installations, prepare lighting, close openings or renovate an interior space. We quote each job based on measurements, height, framing and required finish."}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-yellow-300 bg-white p-5 shadow-md"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
              <span className="font-semibold leading-7">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-black">
                {isEs
                  ? "¿Cuánto cuesta un falso techo de pladur?"
                  : "How much does a plasterboard false ceiling cost?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El precio de un falso techo de pladur en Valencia depende de los metros cuadrados, altura, estructura, si hay focos, registros, remates, acabado, acceso al espacio y estado del techo actual."
                  : "The price of a plasterboard false ceiling in Valencia depends on square meters, height, framing, whether there are spotlights, access panels, finishing details, finish, access and current ceiling condition."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Para dar una estimación necesitamos fotos generales del techo, medidas aproximadas, altura, explicación del acabado deseado y saber si necesitas puntos de luz, focos empotrados o registros de acceso."
                  : "To give an estimate, we need general photos of the ceiling, approximate measurements, height, desired finish and whether you need light points, recessed spotlights or access panels."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Metros del techo" : "Ceiling size",
                  isEs ? "Altura y acceso" : "Height and access",
                  isEs ? "Focos o luces" : "Spotlights or lights",
                  isEs ? "Registros técnicos" : "Access panels",
                  isEs ? "Masilla y lijado" : "Filler and sanding",
                  isEs ? "Preparación para pintura" : "Paint preparation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-xl">
              <h3 className="flex items-center gap-2 text-xl font-black">
                <Euro className="h-6 w-6 text-yellow-500" />
                {isEs ? "Precios orientativos" : "Guide prices"}
              </h3>

              <div className="mt-5 space-y-3">
                {prices.map(([name, price]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between gap-4 rounded-xl bg-yellow-50 p-4"
                  >
                    <span className="font-semibold">{name}</span>
                    <span className="text-right font-black">{price}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-neutral-600">
                {isEs
                  ? "Los precios son orientativos. El precio final depende de medidas, materiales, altura, estructura, acabado y tiempo necesario."
                  : "Prices are indicative. Final price depends on measurements, materials, height, framing, finish and required time."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Factores que influyen en el presupuesto" : "Factors that affect the quote"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Dos techos pueden parecer iguales, pero tener precios diferentes según el acceso, la altura, el acabado y las instalaciones que haya que preparar."
            : "Two ceilings can look similar but have different prices depending on access, height, finish and the installations that need preparation."}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {factors.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-md"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
              <span className="font-semibold leading-7">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black">
                {isEs
                  ? "Falsos techos para viviendas, oficinas y locales"
                  : "False ceilings for homes, offices and commercial spaces"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Un falso techo de pladur sirve para renovar una estancia, ocultar instalaciones, preparar iluminación o mejorar el acabado visual. También puede ser útil en locales comerciales y oficinas donde se necesita una solución práctica y limpia."
                  : "A plasterboard false ceiling can renovate a room, hide installations, prepare lighting or improve the visual finish. It can also be useful in shops and offices where a practical and clean solution is needed."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Home, isEs ? "Viviendas" : "Homes"],
                [Building2, isEs ? "Oficinas" : "Offices"],
                [Store, isEs ? "Locales" : "Shops"],
                [Lightbulb, isEs ? "Iluminación" : "Lighting"],
              ].map(([Icon, title]) => {
                const LucideIcon = Icon as typeof Home;
                return (
                  <div
                    key={String(title)}
                    className="rounded-2xl border border-yellow-400 bg-neutral-900 p-5"
                  >
                    <LucideIcon className="mb-4 h-6 w-6 text-yellow-400" />
                    <h3 className="font-bold">{String(title)}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Usos habituales del falso techo de pladur" : "Common uses of plasterboard false ceilings"}
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-md"
            >
              <item.icon className="mb-4 h-7 w-7 text-yellow-500" />
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-black">
            {isEs ? "Cómo funciona" : "How it works"}
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                isEs ? "1. Envía fotos" : "1. Send photos",
                isEs
                  ? "Fotos generales del techo y fotos de cerca."
                  : "General ceiling photos and close-up photos.",
              ],
              [
                isEs ? "2. Indica medidas" : "2. Share measurements",
                isEs
                  ? "Ancho, largo, altura y zona exacta."
                  : "Width, length, height and exact area.",
              ],
              [
                isEs ? "3. Explica luces" : "3. Explain lighting",
                isEs
                  ? "Indica si quieres focos, puntos de luz o registros."
                  : "Tell us if you need spotlights, light points or access panels.",
              ],
              [
                isEs ? "4. Revisamos dificultad" : "4. We check difficulty",
                isEs
                  ? "Estructura, acceso, acabado y materiales."
                  : "Frame, access, finish and materials.",
              ],
              [
                isEs ? "5. Presupuesto" : "5. Quote",
                isEs
                  ? "Damos orientación o recomendamos visita."
                  : "We give guidance or recommend a visit.",
              ],
              [
                isEs ? "6. Instalación" : "6. Installation",
                isEs
                  ? "Realizamos el trabajo y dejamos la zona limpia."
                  : "We complete the work and leave the area clean.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-md"
              >
                <h3 className="font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Páginas relacionadas de pladur" : "Related drywall pages"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Este cluster conecta las búsquedas de pladur en Valencia: presupuesto, empresa, reformas, reparación, tabiques y falsos techos."
            : "This cluster connects drywall searches in Valencia: quote, company, renovation, repair, partitions and false ceilings."}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {moneyLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-yellow-300 bg-white p-6 shadow-md transition hover:scale-105 hover:shadow-xl"
            >
              <Wrench className="mb-4 h-6 w-6 text-yellow-500" />
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-neutral-700">{item.desc}</p>
              <div className="mt-5 inline-flex items-center gap-2 font-bold text-neutral-950">
                {isEs ? "Ver servicio" : "View service"}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-black">
            {isEs ? "Zonas de servicio en Valencia" : "Service areas in Valencia"}
          </h2>

          <p className="mt-4 max-w-3xl text-neutral-700">
            {isEs
              ? "Trabajamos en Valencia ciudad y zonas cercanas. Si no estás seguro si cubrimos tu zona, envía tu ubicación por WhatsApp."
              : "We work in Valencia city and nearby areas. If you are not sure whether we cover your area, send your location by WhatsApp."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-semibold"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-black">{faq.q}</h3>
              <p className="mt-3 leading-7 text-neutral-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-yellow-400 bg-yellow-400 p-8 shadow-2xl lg:p-12">
          <h2 className="text-3xl font-black">
            {isEs
              ? "¿Necesitas un falso techo de pladur en Valencia?"
              : "Need a plasterboard false ceiling in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos del techo, medidas aproximadas, altura y detalles de focos o registros. Te diremos qué se puede hacer, qué datos faltan, cuánto puede costar y cuándo podemos ir."
              : "Send ceiling photos, approximate measurements, height and details about spotlights or access panels. We will tell you what can be done, what information is missing, how much it may cost and when we can come."}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 font-bold text-white shadow-lg transition hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>

            <Link
              href={estimateHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-black bg-white px-6 py-4 font-bold text-black shadow-sm transition hover:scale-105"
            >
              {isEs ? "Pedir presupuesto" : "Request estimate"}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}