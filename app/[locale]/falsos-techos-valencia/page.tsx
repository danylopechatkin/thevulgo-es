import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Euro,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
  Wrench,
  Zap,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const pagePath = "/falsos-techos-valencia";

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
    ? "Falsos Techos Valencia | Techos de Pladur e Instalación | THEVULGO"
    : "False Ceilings Valencia | Plasterboard Ceiling Installation | THEVULGO";

  const description = isEs
    ? "Falsos techos en Valencia. Instalación y reparación de techos de pladur, preparación para focos, cierres, parches y acabados. Presupuesto por WhatsApp."
    : "False ceilings in Valencia. Plasterboard ceiling installation and repair, spotlight preparation, closures, patches and finishing. Estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "falsos techos valencia",
          "falsos techos en valencia",
          "techos falsos valencia",
          "techos falsos en valencia",
          "techos pladur valencia",
          "techo pladur valencia",
          "instalacion falso techo valencia",
          "instalación falso techo valencia",
          "instalador falso techo valencia",
          "pladur valencia",
          "instalador pladur valencia",
        ]
      : [
          "false ceilings valencia",
          "false ceiling installation valencia",
          "plasterboard ceilings valencia",
          "drywall ceilings valencia",
          "plasterboard ceiling repair valencia",
          "drywall installer valencia",
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

export default async function FalsosTechosValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=handyman`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito un presupuesto para un falso techo / techo de pladur en Valencia. Puedo enviar fotos, medidas y detalles."
      : "Hi, I need an estimate for a false ceiling / plasterboard ceiling in Valencia. I can send photos, measurements and details."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Techos de pladur Valencia" : "Plasterboard ceilings Valencia",
      desc: isEs
        ? "Techos de pladur, reparaciones, preparación para focos y acabados."
        : "Plasterboard ceilings, repairs, spotlight preparation and finishing.",
      href: `/${locale}/techos-pladur-valencia`,
    },
    {
      title: isEs ? "Pladur Valencia" : "Drywall / Plasterboard Valencia",
      desc: isEs
        ? "Servicios generales de pladur, reparación, instalación y preparación."
        : "General drywall and plasterboard services, repair, installation and preparation.",
      href: `/${locale}/pladur-valencia`,
    },
    {
      title: isEs ? "Instalación de pladur Valencia" : "Plasterboard installation Valencia",
      desc: isEs
        ? "Instalación de pladur, cierres, paredes, techos y pequeños trabajos."
        : "Drywall installation, closures, walls, ceilings and small jobs.",
      href: `/${locale}/instalacion-pladur-valencia`,
    },
    {
      title: isEs ? "Instalador de pladur Valencia" : "Drywall installer Valencia",
      desc: isEs
        ? "Servicio de instalador de pladur para vivienda, local u oficina."
        : "Drywall installer service for homes, commercial spaces and offices.",
      href: `/${locale}/instalador-pladur-valencia`,
    },
    {
      title: isEs ? "Reparación de techo" : "Ceiling repair",
      desc: isEs
        ? "Reparación de agujeros, cortes, grietas y daños en techo."
        : "Repair of holes, cutouts, cracks and ceiling damage.",
      href: `/${locale}/services/drywall/ceiling-spot-patching`,
    },
    {
      title: isEs ? "Servicios de pladur" : "Drywall services",
      desc: isEs
        ? "Categoría completa de trabajos de pladur y reparación de paredes."
        : "Full category of drywall and wall repair services.",
      href: `/${locale}/services/drywall`,
    },
  ];

  const prices = isEs
    ? [
        ["Reparación pequeña en falso techo", "desde 49 €"],
        ["Preparación para foco / parche", "desde 49 €"],
        ["Cierre o reparación de hueco", "desde 59 €"],
        ["Instalación básica de techo de pladur", "desde 79 €"],
        ["Falso techo completo", "presupuesto"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Small false ceiling repair", "from €49"],
        ["Spotlight preparation / patch", "from €49"],
        ["Closure or hole repair", "from €59"],
        ["Basic plasterboard ceiling installation", "from €79"],
        ["Full false ceiling", "quote"],
        ["Visit / inspection", "from €49"],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta hacer un falso techo en Valencia?",
          a: "Depende de los metros, altura, estructura, materiales, iluminación, acceso, acabado y dificultad. Las reparaciones pequeñas pueden empezar desde 49 €, pero un falso techo completo requiere presupuesto.",
        },
        {
          q: "¿Hacéis falsos techos de pladur?",
          a: "Sí. Podemos revisar instalación, reparación, cierres, parches, preparación para focos y trabajos relacionados con techos de pladur.",
        },
        {
          q: "¿Podéis preparar el falso techo para focos?",
          a: "Sí. Podemos revisar el techo, la ubicación de los focos, huecos, cables y preparar o reparar zonas de techo de pladur cuando sea posible.",
        },
        {
          q: "¿Reparáis falsos techos ya existentes?",
          a: "Sí. Reparamos agujeros, grietas, cortes, zonas abiertas, daños visibles y pequeños desperfectos en falsos techos de pladur.",
        },
        {
          q: "¿Trabajáis en pisos, locales y oficinas?",
          a: "Sí. Trabajamos en viviendas, pisos de alquiler, oficinas, locales comerciales, apartamentos turísticos y pequeños negocios en Valencia y alrededores.",
        },
        {
          q: "¿Qué necesito enviar para pedir presupuesto?",
          a: "Envíanos fotos del techo, vídeo corto, medidas aproximadas, altura, ubicación, si hay focos o cables, y qué acabado quieres conseguir.",
        },
      ]
    : [
        {
          q: "How much does a false ceiling in Valencia cost?",
          a: "It depends on measurements, height, structure, materials, lighting, access, finish and difficulty. Small repairs can start from €49, but a full false ceiling requires a quote.",
        },
        {
          q: "Do you install plasterboard false ceilings?",
          a: "Yes. We can review installation, repair, closures, patches, spotlight preparation and work related to plasterboard ceilings.",
        },
        {
          q: "Can you prepare the false ceiling for spotlights?",
          a: "Yes. We can check the ceiling, spotlight location, openings, cables and prepare or repair plasterboard ceiling areas where possible.",
        },
        {
          q: "Do you repair existing false ceilings?",
          a: "Yes. We repair holes, cracks, cutouts, open areas, visible damage and small issues in plasterboard false ceilings.",
        },
        {
          q: "Do you work in apartments, shops and offices?",
          a: "Yes. We work in homes, rental apartments, offices, commercial spaces, tourist apartments and small businesses in Valencia and nearby areas.",
        },
        {
          q: "What should I send to request an estimate?",
          a: "Send photos of the ceiling, a short video, approximate measurements, height, location, whether there are spotlights or cables, and the finish you want.",
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
        name: isEs ? "Falsos techos en Valencia" : "False ceilings in Valencia",
        serviceType: isEs
          ? "Instalación y reparación de falsos techos"
          : "False ceiling installation and repair",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}${pagePath}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de falsos techos en Valencia"
            : "False ceiling services in Valencia",
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
            name: isEs ? "Falsos Techos Valencia" : "False Ceilings Valencia",
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
                ? "Falsos techos en Valencia: instalación, pladur y reparaciones"
                : "False ceilings in Valencia: installation, plasterboard and repairs"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO realiza trabajos de falsos techos en Valencia: techos de pladur, reparación de agujeros, preparación para focos, cierres, parches, grietas y acabados previos a pintura."
                : "THEVULGO provides false ceiling work in Valencia: plasterboard ceilings, hole repair, spotlight preparation, closures, patches, cracks and pre-painting finish preparation."}
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
                  icon: Clock3,
                  title: isEs ? "Presupuesto rápido" : "Fast estimate",
                  text: isEs
                    ? "Envía fotos, vídeo y medidas aproximadas."
                    : "Send photos, video and approximate measurements.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Instalación segura" : "Safe installation",
                  text: isEs
                    ? "Revisamos techo, estructura y soporte."
                    : "We check ceiling, structure and support.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Parche, preparación, lijado y orden."
                    : "Patch, preparation, sanding and tidy work.",
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
          {isEs ? "Servicios relacionados con falsos techos" : "Related false ceiling services"}
        </h2>

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
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-black">
                {isEs
                  ? "¿Qué puede incluir un falso techo?"
                  : "What can a false ceiling job include?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Un falso techo puede servir para mejorar el acabado visual, preparar iluminación, cerrar huecos, cubrir zonas dañadas, bajar una parte del techo o reparar una instalación existente."
                  : "A false ceiling can improve the visual finish, prepare lighting, close openings, cover damaged areas, lower part of the ceiling or repair an existing installation."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Antes de dar precio revisamos fotos, medidas, altura, estado actual, estructura, cables, focos, acceso y acabado necesario. Así podemos valorar si es una reparación pequeña o un trabajo completo."
                  : "Before quoting, we check photos, measurements, height, current condition, structure, cables, spotlights, access and required finish. This helps us assess whether it is a small repair or a full job."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Falsos techos" : "False ceilings",
                  isEs ? "Techos de pladur" : "Plasterboard ceilings",
                  isEs ? "Preparación para focos" : "Spotlight preparation",
                  isEs ? "Cierre de huecos" : "Opening closures",
                  isEs ? "Grietas y parches" : "Cracks and patches",
                  isEs ? "Preparación para pintura" : "Preparation for painting",
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
                    className="flex items-center justify-between rounded-xl bg-yellow-50 p-4"
                  >
                    <span className="font-semibold">{name}</span>
                    <span className="font-black">{price}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-neutral-600">
                {isEs
                  ? "El precio final depende de metros, materiales, altura, acceso, iluminación, acabado, dificultad y tiempo necesario."
                  : "Final price depends on measurements, materials, height, access, lighting, finish, difficulty and time required."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Cómo funciona" : "How it works"}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {[
            [
              isEs ? "1. Envía fotos" : "1. Send photos",
              isEs ? "Muestra el techo y la zona." : "Show the ceiling and area.",
            ],
            [
              isEs ? "2. Medidas" : "2. Measurements",
              isEs ? "Indica largo, ancho y altura." : "Share length, width and height.",
            ],
            [
              isEs ? "3. Estimación" : "3. Estimate",
              isEs ? "Te damos precio orientativo." : "We give an approximate price.",
            ],
            [
              isEs ? "4. Trabajo" : "4. Work",
              isEs ? "Instalamos, reparamos o preparamos." : "We install, repair or prepare.",
            ],
            [
              isEs ? "5. Acabado" : "5. Finish",
              isEs ? "Dejamos la zona limpia y revisada." : "We leave the area clean and checked.",
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

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black">
                {isEs ? "Por qué elegir THEVULGO" : "Why choose THEVULGO"}
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Un falso techo mal preparado puede dejar grietas, desniveles, juntas visibles o problemas con focos y soportes. Revisamos el trabajo, proponemos una solución práctica y buscamos un acabado limpio."
                  : "A poorly prepared false ceiling can leave cracks, uneven areas, visible joints or issues with spotlights and supports. We check the job, suggest a practical solution and aim for a clean finish."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Hammer, isEs ? "Trabajo práctico" : "Practical work"],
                [Home, isEs ? "Casa y local" : "Homes and shops"],
                [Zap, isEs ? "Respuesta rápida" : "Fast response"],
                [Star, isEs ? "Acabado limpio" : "Clean finish"],
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
              ? "¿Necesitas un falso techo en Valencia?"
              : "Need a false ceiling in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos del techo, medidas aproximadas, altura y zona de Valencia. Te diremos qué se puede hacer, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the ceiling, approximate measurements, height and Valencia area. We will tell you what can be done, how much it may cost and when we can come."}
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