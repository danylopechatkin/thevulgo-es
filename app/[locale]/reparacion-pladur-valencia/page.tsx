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
  Zap,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const pagePath = "/reparacion-pladur-valencia";

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
    ? "Reparación de Pladur en Valencia | Agujeros, Grietas y Techos | THEVULGO"
    : "Drywall Repair in Valencia | Holes, Cracks and Ceilings | THEVULGO";

  const description = isEs
    ? "Reparación de pladur en Valencia. Arreglamos agujeros, grietas, golpes, esquinas dañadas, techos de pladur, parches, masilla, lijado y preparación para pintura."
    : "Drywall repair in Valencia. We fix holes, cracks, impact damage, damaged corners, plasterboard ceilings, patches, filler, sanding and preparation for painting.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparacion pladur valencia",
          "reparación pladur valencia",
          "reparar pladur valencia",
          "reparar agujero pladur valencia",
          "reparacion agujero pladur valencia",
          "reparación agujero pladur valencia",
          "reparacion techo pladur valencia",
          "reparación techo pladur valencia",
          "reparacion pared pladur valencia",
          "reparación pared pladur valencia",
          "arreglar pladur valencia",
          "parche pladur valencia",
          "grietas pladur valencia",
          "agujeros pladur valencia",
          "pladur valencia",
          "empresa pladur valencia",
          "presupuesto pladur valencia",
          "reformas pladur valencia",
        ]
      : [
          "drywall repair valencia",
          "plasterboard repair valencia",
          "drywall hole repair valencia",
          "plasterboard hole repair valencia",
          "drywall ceiling repair valencia",
          "drywall wall repair valencia",
          "drywall patch valencia",
          "drywall cracks valencia",
          "plasterboard repair company valencia",
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

export default async function ReparacionPladurValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=handyman`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito reparar pladur en Valencia. Puedo enviar fotos del daño, medidas y detalles."
      : "Hi, I need drywall / plasterboard repair in Valencia. I can send photos of the damage, measurements and details."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const services = isEs
    ? [
        "Reparación de agujeros en pladur",
        "Reparación de grietas en pladur",
        "Reparación de techo de pladur",
        "Reparación de pared de pladur",
        "Parches de pladur",
        "Masilla y lijado",
        "Reparación de esquinas dañadas",
        "Daños por golpes",
        "Daños por soportes de TV",
        "Daños por estanterías",
        "Cierre de cortes y huecos",
        "Preparación para pintura",
      ]
    : [
        "Drywall hole repair",
        "Drywall crack repair",
        "Plasterboard ceiling repair",
        "Drywall wall repair",
        "Drywall patches",
        "Filler and sanding",
        "Damaged corner repair",
        "Impact damage repair",
        "TV bracket damage repair",
        "Shelf damage repair",
        "Closing cuts and openings",
        "Preparation for painting",
      ];

  const prices = isEs
    ? [
        ["Reparación pequeña de pladur", "desde 35 €"],
        ["Parche + masilla", "desde 45 €"],
        ["Parche + lijado básico", "desde 45 €"],
        ["Reparación de techo", "desde 49 €"],
        ["Reparación de grietas", "desde 39 €"],
        ["Reparación de esquina dañada", "presupuesto"],
        ["Daño grande o zona abierta", "presupuesto"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Small drywall repair", "from €35"],
        ["Patch + filler", "from €45"],
        ["Patch + basic sanding", "from €45"],
        ["Ceiling repair", "from €49"],
        ["Crack repair", "from €39"],
        ["Damaged corner repair", "quote"],
        ["Large damage or open area", "quote"],
        ["Visit / inspection", "from €49"],
      ];

  const damageTypes = isEs
    ? [
        "Agujeros pequeños",
        "Agujeros medianos",
        "Grietas visibles",
        "Golpes en pared",
        "Esquinas rotas",
        "Techo dañado",
        "Marcas de soporte de TV",
        "Daños por estanterías",
        "Cortes mal cerrados",
        "Zonas abiertas",
        "Juntas visibles",
        "Superficie irregular",
      ]
    : [
        "Small holes",
        "Medium holes",
        "Visible cracks",
        "Wall impact damage",
        "Broken corners",
        "Damaged ceiling",
        "TV bracket marks",
        "Shelf damage",
        "Poorly closed cutouts",
        "Open areas",
        "Visible joints",
        "Uneven surface",
      ];

  const requiredInfo = isEs
    ? [
        "Fotos generales de la pared o techo",
        "Fotos de cerca del daño",
        "Medidas aproximadas del agujero o grieta",
        "Altura de la zona de trabajo",
        "Ubicación en Valencia o alrededores",
        "Si necesitas pintura o solo reparación",
        "Si hay humedad o daño antiguo",
        "Si hay cables, focos o instalaciones cerca",
      ]
    : [
        "General photos of the wall or ceiling",
        "Close-up photos of the damage",
        "Approximate size of the hole or crack",
        "Working height",
        "Location in Valencia or nearby areas",
        "Whether you need painting or only repair",
        "Whether there is moisture or old damage",
        "Whether there are cables, lights or installations nearby",
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
        ? "Pide precio según fotos, medidas y tipo de reparación."
        : "Request a price based on photos, measurements and repair type.",
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
        ? "Reformas interiores con pladur, reparaciones, techos y tabiques."
        : "Interior drywall renovations, repairs, ceilings and partitions.",
      href: `/${locale}/reformas-pladur-valencia`,
    },
    {
      title: isEs ? "Falso Techo Pladur Valencia" : "Plasterboard False Ceiling Valencia",
      desc: isEs
        ? "Instalación y reparación de falsos techos de pladur."
        : "Installation and repair of plasterboard false ceilings.",
      href: `/${locale}/falso-techo-pladur-valencia`,
    },
    {
      title: isEs ? "Tabiques Pladur Valencia" : "Drywall Partitions Valencia",
      desc: isEs
        ? "Tabiques, divisiones interiores y cierres con pladur."
        : "Partitions, interior divisions and plasterboard closures.",
      href: `/${locale}/tabiques-pladur-valencia`,
    },
  ];

  const useCases = [
    {
      icon: Home,
      title: isEs ? "Pisos y viviendas" : "Apartments and homes",
      text: isEs
        ? "Reparamos pladur en paredes, techos, habitaciones, pasillos, salones, cocinas y zonas interiores."
        : "We repair drywall on walls, ceilings, bedrooms, corridors, living rooms, kitchens and interior areas.",
    },
    {
      icon: Store,
      title: isEs ? "Locales y oficinas" : "Shops and offices",
      text: isEs
        ? "Reparaciones visibles en locales, oficinas, tiendas, bares, restaurantes y pequeños negocios."
        : "Visible repairs in commercial spaces, offices, shops, bars, restaurants and small businesses.",
    },
    {
      icon: Paintbrush,
      title: isEs ? "Preparado para pintar" : "Ready for painting",
      text: isEs
        ? "Podemos dejar la zona parcheada, masillada, lijada y preparada para pintar según el acabado necesario."
        : "We can leave the area patched, filled, sanded and ready for painting depending on the required finish.",
    },
  ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta reparar pladur en Valencia?",
          a: "Depende del tamaño del daño, si es pared o techo, altura, acabado y si hay que pintar. Una reparación pequeña puede empezar desde 35 €, pero daños grandes necesitan presupuesto.",
        },
        {
          q: "¿Reparáis agujeros en pladur?",
          a: "Sí. Reparamos agujeros pequeños y medianos, daños por golpes, soportes de TV, estanterías, cortes y zonas abiertas en paredes o techos de pladur.",
        },
        {
          q: "¿Reparáis grietas en pladur?",
          a: "Sí. Podemos rellenar, masillar, lijar y preparar grietas visibles. Si la grieta aparece por movimiento o humedad, conviene revisar la causa antes.",
        },
        {
          q: "¿Reparáis techos de pladur?",
          a: "Sí. Reparamos agujeros, grietas, juntas visibles, zonas abiertas y daños en techos de pladur. Para techos normalmente necesitamos fotos y altura aproximada.",
        },
        {
          q: "¿La reparación incluye pintura?",
          a: "Depende del trabajo. Podemos dejar la zona preparada, masillada y lijada. La pintura se puede valorar aparte según superficie, color y acabado.",
        },
        {
          q: "¿Puedo enviar fotos por WhatsApp?",
          a: "Sí. Envía fotos generales, fotos de cerca, medidas aproximadas, altura y explica si necesitas solo reparación o también pintura.",
        },
        {
          q: "¿Trabajáis con particulares y empresas?",
          a: "Sí. Trabajamos en pisos, viviendas, oficinas, locales comerciales, bares, restaurantes, tiendas y pequeños negocios en Valencia.",
        },
        {
          q: "¿Cuándo hace falta una visita?",
          a: "Si el daño es grande, hay humedad, el techo está abierto, hay instalaciones cerca o no se puede valorar bien por fotos, recomendamos una visita.",
        },
      ]
    : [
        {
          q: "How much does drywall repair cost in Valencia?",
          a: "It depends on damage size, whether it is a wall or ceiling, height, finish and whether painting is needed. A small repair can start from €35, but large damage needs a quote.",
        },
        {
          q: "Do you repair holes in drywall?",
          a: "Yes. We repair small and medium holes, impact damage, TV bracket damage, shelf damage, cutouts and open areas in drywall walls or ceilings.",
        },
        {
          q: "Do you repair cracks in drywall?",
          a: "Yes. We can fill, sand and prepare visible cracks. If the crack is caused by movement or moisture, the cause should be checked first.",
        },
        {
          q: "Do you repair plasterboard ceilings?",
          a: "Yes. We repair holes, cracks, visible joints, open areas and damage in plasterboard ceilings. For ceilings, we usually need photos and approximate height.",
        },
        {
          q: "Does the repair include painting?",
          a: "It depends on the job. We can leave the area prepared, filled and sanded. Painting can be quoted separately depending on surface, color and finish.",
        },
        {
          q: "Can I send photos by WhatsApp?",
          a: "Yes. Send general photos, close-up photos, approximate measurements, height and explain whether you need only repair or also painting.",
        },
        {
          q: "Do you work with private clients and businesses?",
          a: "Yes. We work in apartments, homes, offices, commercial spaces, bars, restaurants, shops and small businesses in Valencia.",
        },
        {
          q: "When is a visit needed?",
          a: "If the damage is large, there is moisture, the ceiling is open, there are installations nearby or it cannot be estimated properly from photos, we recommend a visit.",
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
          ? "Reparación de pladur en Valencia"
          : "Drywall and plasterboard repair in Valencia",
        serviceType: isEs
          ? "Reparación de pladur, agujeros, grietas, techos y paredes"
          : "Drywall repair, holes, cracks, ceilings and walls",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}${pagePath}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de reparación de pladur en Valencia"
            : "Drywall repair services in Valencia",
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
            name: isEs ? "Reparación Pladur Valencia" : "Drywall Repair Valencia",
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
                ? "Reparación de pladur en Valencia"
                : "Drywall and plasterboard repair in Valencia"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Reparamos pladur en Valencia: agujeros, grietas, golpes, esquinas dañadas, techos de pladur, paredes abiertas, marcas de soportes, parches, masilla, lijado y preparación para pintura."
                : "We repair drywall and plasterboard in Valencia: holes, cracks, impact damage, damaged corners, plasterboard ceilings, open walls, bracket marks, patches, filler, sanding and preparation for painting."}
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
                  icon: Wrench,
                  title: isEs ? "Agujeros y grietas" : "Holes and cracks",
                  text: isEs
                    ? "Reparación, parche, masilla y lijado."
                    : "Repair, patch, filler and sanding.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Paredes y techos" : "Walls and ceilings",
                  text: isEs
                    ? "Pladur dañado en vivienda, local u oficina."
                    : "Damaged drywall in homes, shops or offices.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Preparación correcta para pintar."
                    : "Correct preparation before painting.",
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
          {isEs ? "Servicios de reparación de pladur" : "Drywall repair services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Hacemos reparaciones de pladur para dejar la zona más limpia, segura y preparada para el siguiente paso. Según el daño, podemos hacer parche, masilla, lijado, refuerzo o preparación para pintura."
            : "We repair drywall to leave the area cleaner, safer and ready for the next step. Depending on the damage, we can patch, fill, sand, reinforce or prepare for painting."}
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
                  ? "¿Cuánto cuesta reparar pladur?"
                  : "How much does drywall repair cost?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El precio de reparar pladur depende del tamaño del daño, si está en pared o techo, altura, si hay que reforzar, masillar, lijar, preparar para pintura o igualar la superficie."
                  : "Drywall repair price depends on damage size, whether it is on a wall or ceiling, height, whether reinforcement, filler, sanding, paint preparation or surface matching is needed."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Para darte una estimación más clara necesitamos fotos generales, fotos de cerca, medidas aproximadas y saber si quieres solo reparación o también pintura."
                  : "To give a clearer estimate, we need general photos, close-up photos, approximate measurements and to know whether you need only repair or also painting."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Tamaño del daño" : "Damage size",
                  isEs ? "Pared o techo" : "Wall or ceiling",
                  isEs ? "Altura y acceso" : "Height and access",
                  isEs ? "Masilla y lijado" : "Filler and sanding",
                  isEs ? "Preparación para pintura" : "Paint preparation",
                  isEs ? "Estado actual" : "Current condition",
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
                  ? "Los precios son orientativos. El precio final depende de daño, medidas, altura, acceso, acabado y tiempo necesario."
                  : "Prices are indicative. Final price depends on damage, measurements, height, access, finish and required time."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Tipos de daños que reparamos" : "Types of damage we repair"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "El pladur puede dañarse por golpes, humedad, soportes, estanterías, reformas anteriores o cortes mal cerrados. Cada reparación necesita una solución diferente."
            : "Drywall can be damaged by impacts, moisture, brackets, shelves, previous renovations or poorly closed cutouts. Each repair needs a different solution."}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {damageTypes.map((item) => (
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
                  ? "Reparación de pladur para paredes y techos"
                  : "Drywall repair for walls and ceilings"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Una reparación mal hecha puede dejar bultos, juntas visibles, grietas que vuelven a salir o una superficie difícil de pintar. Por eso revisamos el daño, preparamos la zona y buscamos un acabado limpio según el estado actual."
                  : "A poor repair can leave bumps, visible joints, cracks that come back or a surface that is difficult to paint. That is why we check the damage, prepare the area and aim for a clean finish based on the current condition."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Hammer, isEs ? "Parches" : "Patches"],
                [Wrench, isEs ? "Reparación" : "Repair"],
                [Paintbrush, isEs ? "Preparación" : "Preparation"],
                [Sparkles, isEs ? "Acabado limpio" : "Clean finish"],
              ].map(([Icon, title]) => {
                const LucideIcon = Icon as typeof Hammer;
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
            ? "Qué necesitamos para valorar la reparación"
            : "What we need to quote the repair"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Para trabajos de reparación de pladur, las fotos ayudan mucho. Envía una foto general para ver la zona y una foto de cerca para ver el daño."
            : "For drywall repair jobs, photos help a lot. Send a general photo to show the area and a close-up photo to show the damage."}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {requiredInfo.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-yellow-300 bg-white p-5 shadow-md"
            >
              <CheckCircle2 className="mb-3 h-5 w-5 text-yellow-500" />
              <span className="font-semibold leading-7">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-black">
            {isEs
              ? "Reparaciones para viviendas, oficinas y locales"
              : "Repairs for homes, offices and commercial spaces"}
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-md"
              >
                <item.icon className="mb-4 h-7 w-7 text-yellow-500" />
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Cómo funciona" : "How it works"}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            [
              isEs ? "1. Envía fotos" : "1. Send photos",
              isEs
                ? "Fotos generales y fotos de cerca del daño."
                : "General photos and close-up photos of the damage.",
            ],
            [
              isEs ? "2. Indica medidas" : "2. Share measurements",
              isEs
                ? "Tamaño aproximado del agujero, grieta o zona dañada."
                : "Approximate size of the hole, crack or damaged area.",
            ],
            [
              isEs ? "3. Explica acabado" : "3. Explain finish",
              isEs
                ? "Solo reparar, preparar para pintar o incluir pintura."
                : "Repair only, prepare for painting or include painting.",
            ],
            [
              isEs ? "4. Revisamos" : "4. We review",
              isEs
                ? "Vemos dificultad, altura, acceso y materiales."
                : "We check difficulty, height, access and materials.",
            ],
            [
              isEs ? "5. Presupuesto" : "5. Quote",
              isEs
                ? "Damos precio orientativo o recomendamos visita."
                : "We give an approximate price or recommend a visit.",
            ],
            [
              isEs ? "6. Reparación" : "6. Repair",
              isEs
                ? "Reparamos, preparamos y dejamos la zona limpia."
                : "We repair, prepare and leave the area clean.",
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
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-black">
            {isEs ? "Páginas relacionadas de pladur" : "Related drywall pages"}
          </h2>

          <p className="mt-4 max-w-3xl text-neutral-700">
            {isEs
              ? "Este cluster conecta búsquedas de pladur en Valencia: reparación, presupuesto, empresa, reformas, falsos techos y tabiques."
              : "This cluster connects drywall searches in Valencia: repair, quote, company, renovation, false ceilings and partitions."}
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
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
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-yellow-400 bg-yellow-400 p-8 shadow-2xl lg:p-12">
          <h2 className="text-3xl font-black">
            {isEs
              ? "¿Necesitas reparar pladur en Valencia?"
              : "Need drywall repair in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos del agujero, grieta, golpe, techo o pared dañada. Te diremos qué se puede hacer, qué datos faltan, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the hole, crack, impact damage, ceiling or damaged wall. We will tell you what can be done, what details are missing, how much it may cost and when we can come."}
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