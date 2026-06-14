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
const pagePath = "/instalacion-pladur-valencia";

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
    ? "Instalación de Pladur Valencia | Techos, Paredes y Tabiques | THEVULGO"
    : "Plasterboard Installation Valencia | Ceilings, Walls & Repairs | THEVULGO";

  const description = isEs
    ? "Instalación de pladur en Valencia para techos, paredes, tabiques, falsos techos, cierres y reparaciones. Presupuesto rápido por WhatsApp."
    : "Plasterboard and drywall installation in Valencia for ceilings, walls, partitions, false ceilings, closures and repairs. Estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "instalacion pladur valencia",
          "instalación pladur valencia",
          "instalar pladur valencia",
          "montaje pladur valencia",
          "trabajos pladur valencia",
          "pladur valencia",
          "pladur en valencia",
          "techos pladur valencia",
          "falsos techos valencia",
          "paredes pladur valencia",
          "tabiques pladur valencia",
          "instalador pladur valencia",
        ]
      : [
          "plasterboard installation valencia",
          "drywall installation valencia",
          "drywall installer valencia",
          "plasterboard ceilings valencia",
          "drywall walls valencia",
          "false ceilings valencia",
          "drywall repair valencia",
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

export default async function InstalacionPladurValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=handyman`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito un presupuesto para instalación de pladur en Valencia. Puedo enviar fotos, medidas y detalles del trabajo."
      : "Hi, I need an estimate for plasterboard / drywall installation in Valencia. I can send photos, measurements and job details."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Pladur Valencia" : "Drywall / Plasterboard Valencia",
      desc: isEs
        ? "Servicios generales de pladur, instalación, reparación y preparación."
        : "General drywall and plasterboard services, installation, repair and preparation.",
      href: `/${locale}/pladur-valencia`,
    },
    {
      title: isEs ? "Instalador de pladur Valencia" : "Drywall installer Valencia",
      desc: isEs
        ? "Servicio de instalador de pladur para vivienda, local u oficina."
        : "Drywall installer service for homes, commercial spaces and offices.",
      href: `/${locale}/instalador-pladur-valencia`,
    },
    {
      title: isEs ? "Techos de pladur Valencia" : "Plasterboard ceilings Valencia",
      desc: isEs
        ? "Techos de pladur, reparaciones, preparación para focos y acabados."
        : "Plasterboard ceilings, repairs, spotlight preparation and finishing.",
      href: `/${locale}/techos-pladur-valencia`,
    },
    {
      title: isEs ? "Falsos techos Valencia" : "False ceilings Valencia",
      desc: isEs
        ? "Falsos techos de pladur, cierres, focos, parches y reparación."
        : "Plasterboard false ceilings, closures, spotlights, patches and repair.",
      href: `/${locale}/falsos-techos-valencia`,
    },
    {
      title: isEs ? "Paredes de pladur Valencia" : "Plasterboard walls Valencia",
      desc: isEs
        ? "Paredes, tabiques, cierres y trabajos interiores de pladur."
        : "Walls, partitions, closures and interior plasterboard work.",
      href: `/${locale}/paredes-pladur-valencia`,
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
        ["Instalación básica de pladur", "desde 79 €"],
        ["Pared o cierre pequeño de pladur", "desde 89 €"],
        ["Techo de pladur / falso techo", "presupuesto"],
        ["Reparación o modificación", "desde 49 €"],
        ["Preparación para focos", "desde 49 €"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Basic plasterboard installation", "from €79"],
        ["Small plasterboard wall or closure", "from €89"],
        ["Plasterboard ceiling / false ceiling", "quote"],
        ["Repair or modification", "from €49"],
        ["Spotlight preparation", "from €49"],
        ["Visit / inspection", "from €49"],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta instalar pladur en Valencia?",
          a: "Depende del tipo de instalación, metros, altura, materiales, estructura, acceso, acabado y dificultad. Los trabajos pequeños pueden empezar desde 79 €, pero techos, paredes o tabiques completos requieren presupuesto.",
        },
        {
          q: "¿Instaláis techos de pladur?",
          a: "Sí. Podemos revisar instalación de techos de pladur, falsos techos, reparaciones, cierres, parches y preparación para focos.",
        },
        {
          q: "¿Hacéis paredes y tabiques de pladur?",
          a: "Sí. Podemos valorar paredes, tabiques, cierres, trasdosados sencillos y modificaciones interiores de pladur según medidas y estado del espacio.",
        },
        {
          q: "¿También reparáis pladur ya instalado?",
          a: "Sí. Reparamos agujeros, grietas, cortes, zonas abiertas, daños visibles, marcas de soportes y pequeñas modificaciones.",
        },
        {
          q: "¿Trabajáis en viviendas, oficinas y locales?",
          a: "Sí. Trabajamos en pisos, viviendas, apartamentos de alquiler, oficinas, locales comerciales y pequeños negocios en Valencia y alrededores.",
        },
        {
          q: "¿Qué necesito enviar para pedir presupuesto?",
          a: "Envíanos fotos, vídeo corto, medidas aproximadas, altura, ubicación, tipo de trabajo y acabado deseado. Así podemos darte una estimación más clara antes de la visita.",
        },
      ]
    : [
        {
          q: "How much does plasterboard installation in Valencia cost?",
          a: "It depends on job type, measurements, height, materials, structure, access, finish and difficulty. Small jobs can start from €79, but full ceilings, walls or partitions require a quote.",
        },
        {
          q: "Do you install plasterboard ceilings?",
          a: "Yes. We can review plasterboard ceiling installation, false ceilings, repairs, closures, patches and spotlight preparation.",
        },
        {
          q: "Do you build plasterboard walls and partitions?",
          a: "Yes. We can review walls, partitions, small closures and interior plasterboard modifications depending on measurements and space condition.",
        },
        {
          q: "Do you also repair existing drywall?",
          a: "Yes. We repair holes, cracks, cutouts, open areas, visible damage, bracket marks and small modifications.",
        },
        {
          q: "Do you work in homes, offices and commercial spaces?",
          a: "Yes. We work in homes, rental apartments, offices, commercial spaces and small businesses in Valencia and nearby areas.",
        },
        {
          q: "What should I send to request an estimate?",
          a: "Send photos, a short video, approximate measurements, height, location, job type and desired finish. This helps us give a clearer estimate before the visit.",
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
          ? "Instalación de pladur en Valencia"
          : "Plasterboard installation in Valencia",
        serviceType: isEs
          ? "Instalación de pladur"
          : "Plasterboard and drywall installation",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}${pagePath}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de instalación de pladur en Valencia"
            : "Plasterboard installation services in Valencia",
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
            name: isEs
              ? "Instalación Pladur Valencia"
              : "Plasterboard Installation Valencia",
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
                ? "Instalación de pladur en Valencia para techos, paredes y reformas interiores"
                : "Plasterboard installation in Valencia for ceilings, walls and interior work"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO realiza instalación de pladur en Valencia para techos, paredes, tabiques, falsos techos, cierres, reparaciones y modificaciones interiores. Revisamos fotos, medidas y estado del espacio para darte un presupuesto claro por WhatsApp."
                : "THEVULGO provides plasterboard and drywall installation in Valencia for ceilings, walls, partitions, false ceilings, closures, repairs and interior modifications. We check photos, measurements and space condition to give you a clear estimate by WhatsApp."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-lg transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs
                  ? "Pedir presupuesto por WhatsApp"
                  : "Request estimate by WhatsApp"}
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
                    ? "Revisamos pared, techo, soporte y estado."
                    : "We check wall, ceiling, support and condition.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Preparación, fijación, parche y orden."
                    : "Preparation, fixing, patching and tidy work.",
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
          {isEs
            ? "Servicios de instalación de pladur"
            : "Plasterboard installation services"}
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
                  ? "¿Qué puede incluir la instalación de pladur?"
                  : "What can plasterboard installation include?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "La instalación de pladur puede incluir techos, falsos techos, paredes, tabiques, cierres de huecos, trasdosados sencillos, preparación para focos, modificaciones interiores y reparaciones de zonas ya existentes."
                  : "Plasterboard installation can include ceilings, false ceilings, walls, partitions, opening closures, simple lining work, spotlight preparation, interior modifications and repairs of existing areas."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Antes de dar precio revisamos medidas aproximadas, altura, tipo de superficie, estructura existente, acceso, materiales necesarios, acabado deseado y si hay cables, focos o humedad."
                  : "Before quoting, we check approximate measurements, height, surface type, existing structure, access, required materials, desired finish and whether there are cables, spotlights or moisture."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Instalación de pladur" : "Plasterboard installation",
                  isEs ? "Techos de pladur" : "Plasterboard ceilings",
                  isEs ? "Falsos techos" : "False ceilings",
                  isEs ? "Paredes y tabiques" : "Walls and partitions",
                  isEs ? "Cierres y modificaciones" : "Closures and modifications",
                  isEs ? "Reparación de pladur" : "Drywall repair",
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
                  ? "El precio final depende de metros, materiales, altura, acceso, acabado, dificultad y tiempo necesario."
                  : "Final price depends on measurements, materials, height, access, finish, difficulty and time required."}
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
              isEs
                ? "Muestra la zona donde quieres instalar pladur."
                : "Show the area where you want plasterboard installed.",
            ],
            [
              isEs ? "2. Medidas" : "2. Measurements",
              isEs
                ? "Indica ancho, alto, largo y altura del techo."
                : "Share width, height, length and ceiling height.",
            ],
            [
              isEs ? "3. Estimación" : "3. Estimate",
              isEs
                ? "Te damos precio orientativo antes de la visita."
                : "We give an approximate price before the visit.",
            ],
            [
              isEs ? "4. Instalación" : "4. Installation",
              isEs
                ? "Instalamos, reparamos o modificamos según el caso."
                : "We install, repair or modify depending on the case.",
            ],
            [
              isEs ? "5. Acabado" : "5. Finish",
              isEs
                ? "Dejamos la zona preparada y revisada."
                : "We leave the area prepared and checked.",
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
                  ? "Una instalación de pladur mal ejecutada puede dejar juntas visibles, desniveles, grietas, fijaciones débiles o problemas con focos y cables. Revisamos el trabajo, proponemos una solución práctica y buscamos un acabado limpio."
                  : "Poor plasterboard installation can leave visible joints, uneven areas, cracks, weak fixings or issues with spotlights and cables. We check the job, suggest a practical solution and aim for a clean finish."}
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
              ? "¿Necesitas instalar pladur en Valencia?"
              : "Need plasterboard installation in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos de la zona, medidas aproximadas, altura y tipo de trabajo. Te diremos qué se puede hacer, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the area, approximate measurements, height and job type. We will tell you what can be done, how much it may cost and when we can come."}
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