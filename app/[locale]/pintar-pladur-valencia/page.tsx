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
  MapPin,
  MessageCircle,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Wrench,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const pagePath = "/pintar-pladur-valencia";

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
    ? "Pintar Pladur en Valencia | Lijado, Preparación y Acabado | THEVULGO"
    : "Painting Drywall in Valencia | Sanding, Preparation & Finish | THEVULGO";

  const description = isEs
    ? "Pintar pladur en Valencia. Preparación de paredes y techos de pladur, masilla, lijado, reparación de juntas, parches y acabado para viviendas, oficinas y locales."
    : "Drywall painting in Valencia. Preparation of plasterboard walls and ceilings, filler, sanding, joint repair, patches and finishing for homes, offices and commercial spaces.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "pintar pladur valencia",
          "pintura pladur valencia",
          "pintar pared pladur valencia",
          "pintar techo pladur valencia",
          "preparar pladur para pintar valencia",
          "lijar pladur valencia",
          "masillar pladur valencia",
          "lijar y pintar pladur valencia",
          "pintar falso techo pladur valencia",
          "pintar tabique pladur valencia",
          "pintores pladur valencia",
          "acabado pladur valencia",
          "pladur valencia",
          "reparacion pladur valencia",
          "presupuesto pladur valencia",
          "empresa pladur valencia",
          "reformas pladur valencia",
        ]
      : [
          "paint drywall valencia",
          "drywall painting valencia",
          "plasterboard painting valencia",
          "paint plasterboard wall valencia",
          "paint plasterboard ceiling valencia",
          "prepare drywall for painting valencia",
          "sand drywall valencia",
          "drywall filler valencia",
          "drywall finishing valencia",
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

export default async function PintarPladurValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=handyman`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito presupuesto para pintar pladur en Valencia. Puedo enviar fotos, medidas y detalles del trabajo."
      : "Hi, I need a quote for painting drywall / plasterboard in Valencia. I can send photos, measurements and job details."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const services = isEs
    ? [
        "Pintar paredes de pladur",
        "Pintar techos de pladur",
        "Preparar pladur para pintar",
        "Masillar juntas de pladur",
        "Lijar pladur antes de pintar",
        "Reparar parches antes de pintar",
        "Pintar falso techo de pladur",
        "Pintar tabiques de pladur",
        "Corrección de marcas visibles",
        "Preparación de esquinas",
        "Acabado para vivienda",
        "Acabado para local u oficina",
      ]
    : [
        "Painting drywall walls",
        "Painting plasterboard ceilings",
        "Preparing drywall for painting",
        "Filling drywall joints",
        "Sanding drywall before painting",
        "Repairing patches before painting",
        "Painting plasterboard false ceilings",
        "Painting drywall partitions",
        "Correction of visible marks",
        "Corner preparation",
        "Finish for homes",
        "Finish for shops or offices",
      ];

  const prices = isEs
    ? [
        ["Preparación pequeña", "desde 35 €"],
        ["Parche + masilla + lijado", "desde 45 €"],
        ["Preparar zona para pintar", "desde 49 €"],
        ["Pintar reparación pequeña", "presupuesto"],
        ["Pintar pared de pladur", "presupuesto"],
        ["Pintar techo de pladur", "presupuesto"],
        ["Pintar falso techo", "presupuesto"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Small preparation", "from €35"],
        ["Patch + filler + sanding", "from €45"],
        ["Prepare area for painting", "from €49"],
        ["Paint small repair", "quote"],
        ["Paint drywall wall", "quote"],
        ["Paint plasterboard ceiling", "quote"],
        ["Paint false ceiling", "quote"],
        ["Visit / inspection", "from €49"],
      ];

  const factors = isEs
    ? [
        "Metros cuadrados",
        "Estado del pladur",
        "Si hay juntas visibles",
        "Si hay parches o grietas",
        "Tipo de pintura necesaria",
        "Color actual y color nuevo",
        "Altura y acceso",
        "Preparación y lijado",
        "Número de manos de pintura",
      ]
    : [
        "Square meters",
        "Drywall condition",
        "Visible joints",
        "Patches or cracks",
        "Required paint type",
        "Current color and new color",
        "Height and access",
        "Preparation and sanding",
        "Number of paint coats",
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
      title: isEs ? "Reparación Pladur Valencia" : "Drywall Repair Valencia",
      desc: isEs
        ? "Reparación de agujeros, grietas, golpes y zonas dañadas."
        : "Repair of holes, cracks, impact damage and damaged areas.",
      href: `/${locale}/reparacion-pladur-valencia`,
    },
    {
      title: isEs ? "Presupuesto Pladur Valencia" : "Drywall Quote Valencia",
      desc: isEs
        ? "Pide precio según fotos, medidas, altura y acabado."
        : "Request a price based on photos, measurements, height and finish.",
      href: `/${locale}/presupuesto-pladur-valencia`,
    },
    {
      title: isEs ? "Falso Techo Pladur Valencia" : "Plasterboard False Ceiling Valencia",
      desc: isEs
        ? "Instalación y reparación de falsos techos de pladur."
        : "Installation and repair of plasterboard false ceilings.",
      href: `/${locale}/falso-techo-pladur-valencia`,
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
  ];

  const useCases = [
    {
      icon: Home,
      title: isEs ? "Viviendas y pisos" : "Homes and apartments",
      text: isEs
        ? "Pintura y preparación de pladur en habitaciones, salones, pasillos, techos y zonas reparadas."
        : "Painting and preparation of drywall in bedrooms, living rooms, corridors, ceilings and repaired areas.",
    },
    {
      icon: Store,
      title: isEs ? "Locales y oficinas" : "Shops and offices",
      text: isEs
        ? "Acabado de pladur para locales comerciales, oficinas, tiendas, bares y pequeños negocios."
        : "Drywall finishing for commercial spaces, offices, shops, bars and small businesses.",
    },
    {
      icon: Paintbrush,
      title: isEs ? "Preparación antes de pintar" : "Preparation before painting",
      text: isEs
        ? "Masilla, lijado, corrección de juntas, parches y preparación para que la pintura quede más limpia."
        : "Filler, sanding, joint correction, patches and preparation so the paint finish looks cleaner.",
    },
  ];

  const faqs = isEs
    ? [
        {
          q: "¿Se puede pintar directamente sobre pladur?",
          a: "Sí, pero el resultado depende de la preparación. Normalmente conviene revisar juntas, masilla, lijado, polvo, imprimación y estado del pladur antes de pintar.",
        },
        {
          q: "¿Cuánto cuesta pintar pladur en Valencia?",
          a: "Depende de metros cuadrados, estado del pladur, altura, preparación, número de manos, color y si hay que reparar juntas o parches antes de pintar.",
        },
        {
          q: "¿Preparáis pladur antes de pintar?",
          a: "Sí. Podemos masillar, lijar, reparar parches, corregir juntas visibles y dejar la zona preparada para pintura según el acabado necesario.",
        },
        {
          q: "¿Pintáis techos de pladur?",
          a: "Sí. Podemos valorar pintura de techos de pladur, falsos techos, zonas reparadas y preparación previa para que el acabado quede más limpio.",
        },
        {
          q: "¿Pintáis paredes de pladur?",
          a: "Sí. Pintamos paredes de pladur, tabiques, zonas reparadas y paredes interiores según medidas, estado y acabado deseado.",
        },
        {
          q: "¿La reparación de pladur incluye pintura?",
          a: "No siempre. Algunas reparaciones incluyen preparación, masilla y lijado. La pintura se puede valorar aparte según superficie, color y acabado.",
        },
        {
          q: "¿Puedo enviar fotos por WhatsApp?",
          a: "Sí. Envía fotos generales, fotos de cerca, medidas aproximadas, altura, estado actual y explica si necesitas preparar, pintar o ambas cosas.",
        },
        {
          q: "¿Trabajáis con viviendas, oficinas y locales?",
          a: "Sí. Trabajamos en pisos, viviendas, oficinas, locales comerciales, bares, restaurantes, tiendas y pequeños negocios en Valencia.",
        },
      ]
    : [
        {
          q: "Can drywall be painted directly?",
          a: "Yes, but the result depends on preparation. It is usually best to check joints, filler, sanding, dust, primer and drywall condition before painting.",
        },
        {
          q: "How much does it cost to paint drywall in Valencia?",
          a: "It depends on square meters, drywall condition, height, preparation, number of coats, color and whether joints or patches need repair before painting.",
        },
        {
          q: "Do you prepare drywall before painting?",
          a: "Yes. We can fill, sand, repair patches, correct visible joints and prepare the area for painting depending on the required finish.",
        },
        {
          q: "Do you paint plasterboard ceilings?",
          a: "Yes. We can quote painting of plasterboard ceilings, false ceilings, repaired areas and preparation before painting for a cleaner finish.",
        },
        {
          q: "Do you paint drywall walls?",
          a: "Yes. We paint drywall walls, partitions, repaired areas and interior walls depending on measurements, condition and desired finish.",
        },
        {
          q: "Does drywall repair include painting?",
          a: "Not always. Some repairs include preparation, filler and sanding. Painting can be quoted separately depending on surface, color and finish.",
        },
        {
          q: "Can I send photos by WhatsApp?",
          a: "Yes. Send general photos, close-up photos, approximate measurements, height, current condition and explain whether you need preparation, painting or both.",
        },
        {
          q: "Do you work with homes, offices and shops?",
          a: "Yes. We work in apartments, homes, offices, commercial spaces, bars, restaurants, shops and small businesses in Valencia.",
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
          ? "Pintar pladur en Valencia"
          : "Painting drywall and plasterboard in Valencia",
        serviceType: isEs
          ? "Pintura, lijado y preparación de pladur"
          : "Painting, sanding and preparation of drywall",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}${pagePath}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios para pintar pladur en Valencia"
            : "Drywall painting services in Valencia",
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
            name: isEs ? "Pintar Pladur Valencia" : "Paint Drywall Valencia",
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
                ? "Pintar pladur en Valencia"
                : "Painting drywall and plasterboard in Valencia"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Pintura y preparación de pladur en Valencia: paredes, techos, falsos techos, tabiques, parches, juntas, masilla, lijado y acabado limpio para viviendas, oficinas y locales."
                : "Drywall painting and preparation in Valencia: walls, ceilings, false ceilings, partitions, patches, joints, filler, sanding and clean finish for homes, offices and shops."}
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
                  icon: Paintbrush,
                  title: isEs ? "Pintura de pladur" : "Drywall painting",
                  text: isEs
                    ? "Paredes, techos, tabiques y zonas reparadas."
                    : "Walls, ceilings, partitions and repaired areas.",
                },
                {
                  icon: Hammer,
                  title: isEs ? "Preparación previa" : "Initial preparation",
                  text: isEs
                    ? "Masilla, lijado, juntas y parches."
                    : "Filler, sanding, joints and patches.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Superficie preparada para mejor resultado."
                    : "Surface prepared for a better result.",
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
          {isEs ? "Servicios para pintar pladur" : "Drywall painting services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Pintar pladur no es solo pasar pintura. Para que el acabado quede limpio, muchas veces hay que revisar juntas, masilla, lijado, polvo, parches, grietas y preparación previa."
            : "Painting drywall is not only applying paint. For a clean finish, it is often necessary to check joints, filler, sanding, dust, patches, cracks and preparation beforehand."}
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
                  ? "¿Cuánto cuesta pintar pladur?"
                  : "How much does painting drywall cost?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El precio para pintar pladur en Valencia depende de los metros cuadrados, estado del pladur, si hay que masillar, lijar, reparar juntas, aplicar imprimación, número de manos de pintura, altura y acceso."
                  : "The price for painting drywall in Valencia depends on square meters, drywall condition, whether filler, sanding, joint repair, primer, number of paint coats, height and access are needed."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Para dar una estimación necesitamos fotos, medidas aproximadas, altura, estado actual y saber si quieres solo preparar, solo pintar o hacer preparación + pintura."
                  : "To give an estimate, we need photos, approximate measurements, height, current condition and whether you need only preparation, only painting or preparation + painting."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Paredes de pladur" : "Drywall walls",
                  isEs ? "Techos de pladur" : "Plasterboard ceilings",
                  isEs ? "Falsos techos" : "False ceilings",
                  isEs ? "Parches reparados" : "Repaired patches",
                  isEs ? "Masilla y lijado" : "Filler and sanding",
                  isEs ? "Preparación para pintura" : "Preparation for paint",
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
                  ? "Los precios son orientativos. El precio final depende de superficie, estado, pintura, preparación, altura y tiempo necesario."
                  : "Prices are indicative. Final price depends on surface, condition, paint, preparation, height and required time."}
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
            ? "Dos trabajos de pintura sobre pladur pueden tener precios muy diferentes. El acabado depende mucho de la preparación previa, estado de la superficie y cantidad de manos de pintura."
            : "Two drywall painting jobs can have very different prices. The final result depends heavily on preparation, surface condition and number of paint coats."}
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
                  ? "Preparar bien el pladur antes de pintar"
                  : "Preparing drywall properly before painting"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Si el pladur no está bien preparado, la pintura puede marcar juntas, parches, golpes, rayas o zonas con diferente textura. Por eso revisamos la superficie, masillamos donde hace falta, lijamos y dejamos la zona lista para un acabado más limpio."
                  : "If drywall is not properly prepared, paint can highlight joints, patches, impact marks, scratches or areas with different texture. That is why we check the surface, apply filler where needed, sand and leave the area ready for a cleaner finish."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Paintbrush, isEs ? "Pintura" : "Painting"],
                [Hammer, isEs ? "Masilla" : "Filler"],
                [Sparkles, isEs ? "Lijado" : "Sanding"],
                [ShieldCheck, isEs ? "Preparación" : "Preparation"],
              ].map(([Icon, title]) => {
                const LucideIcon = Icon as typeof Paintbrush;
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
          {isEs
            ? "Pintura para viviendas, oficinas y locales"
            : "Painting for homes, offices and commercial spaces"}
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
                  ? "Fotos generales y de cerca del pladur."
                  : "General and close-up photos of the drywall.",
              ],
              [
                isEs ? "2. Indica medidas" : "2. Share measurements",
                isEs
                  ? "Ancho, alto, techo o pared, y altura."
                  : "Width, height, ceiling or wall, and working height.",
              ],
              [
                isEs ? "3. Explica el acabado" : "3. Explain finish",
                isEs
                  ? "Solo preparar, solo pintar o preparación + pintura."
                  : "Preparation only, painting only or preparation + painting.",
              ],
              [
                isEs ? "4. Revisamos estado" : "4. We check condition",
                isEs
                  ? "Juntas, parches, grietas, polvo y textura."
                  : "Joints, patches, cracks, dust and texture.",
              ],
              [
                isEs ? "5. Presupuesto" : "5. Quote",
                isEs
                  ? "Damos orientación o recomendamos visita."
                  : "We give guidance or recommend a visit.",
              ],
              [
                isEs ? "6. Trabajo" : "6. Work",
                isEs
                  ? "Preparamos, pintamos y dejamos la zona limpia."
                  : "We prepare, paint and leave the area clean.",
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
            ? "Este cluster conecta búsquedas de pladur en Valencia: pintar pladur, reparación, presupuesto, empresa, reformas y falsos techos."
            : "This cluster connects drywall searches in Valencia: drywall painting, repair, quote, company, renovation and false ceilings."}
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
              ? "¿Necesitas pintar pladur en Valencia?"
              : "Need drywall painting in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos de la pared, techo, falso techo o zona de pladur. Te diremos qué preparación hace falta, qué datos faltan, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the wall, ceiling, false ceiling or drywall area. We will tell you what preparation is needed, what information is missing, how much it may cost and when we can come."}
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