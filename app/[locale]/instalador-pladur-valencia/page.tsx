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
    ? "Instalador de Pladur en Valencia | Techos, Paredes y Reparaciones | THEVULGO"
    : "Drywall Installer in Valencia | Ceilings, Walls & Repairs | THEVULGO";

  const description = isEs
    ? "Instalador de pladur en Valencia para paredes, techos, trasdosados, reparaciones, agujeros, estanterías, soportes y preparación limpia. Presupuesto por WhatsApp."
    : "Drywall installer in Valencia for walls, ceilings, repairs, holes, shelves, brackets and clean preparation. Estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "instalador pladur valencia",
          "instalador de pladur en valencia",
          "pladur valencia",
          "instalacion pladur valencia",
          "instalaciones de pladur valencia",
          "techos pladur valencia",
          "paredes pladur valencia",
          "reparacion pladur valencia",
          "montador pladur valencia",
          "manitas pladur valencia",
        ]
      : [
          "drywall installer valencia",
          "drywall installation valencia",
          "plasterboard installer valencia",
          "drywall repair valencia",
          "drywall ceilings valencia",
          "drywall walls valencia",
          "handyman drywall valencia",
        ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/instalador-pladur-valencia`,
      languages: {
        es: `${baseUrl}/es/instalador-pladur-valencia`,
        en: `${baseUrl}/en/instalador-pladur-valencia`,
        "x-default": `${baseUrl}/es/instalador-pladur-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/instalador-pladur-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function InstaladorPladurValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=drywall`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito un instalador de pladur en Valencia. Quiero pedir presupuesto para una pared, techo o reparación."
      : "Hi, I need a drywall installer in Valencia. I’d like to request an estimate for a wall, ceiling or repair."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Instalación de pladur" : "Drywall installation",
      desc: isEs
        ? "Paredes, techos, trasdosados y pequeños trabajos de pladur."
        : "Walls, ceilings, linings and small drywall jobs.",
      href: `/${locale}/instalacion-pladur-valencia`,
    },
    {
      title: isEs ? "Techos de pladur" : "Drywall ceilings",
      desc: isEs
        ? "Techos falsos, reparaciones, preparación y acabado limpio."
        : "False ceilings, repairs, preparation and clean finish.",
      href: `/${locale}/techos-pladur-valencia`,
    },
    {
      title: isEs ? "Paredes de pladur" : "Drywall walls",
      desc: isEs
        ? "Tabiques, trasdosados, cerramientos ligeros y ajustes."
        : "Partitions, wall linings, light enclosures and adjustments.",
      href: `/${locale}/paredes-pladur-valencia`,
    },
    {
      title: isEs ? "Reparación de pladur" : "Drywall repair",
      desc: isEs
        ? "Agujeros, grietas, golpes, anclajes dañados y parches."
        : "Holes, cracks, impact damage, damaged anchors and patches.",
      href: `/${locale}/reparacion-pladur-valencia`,
    },
    {
      title: isEs ? "Montaje de TV" : "TV mounting",
      desc: isEs
        ? "Instalación segura de soportes TV en pared de pladur o ladrillo."
        : "Safe TV bracket installation on drywall or brick walls.",
      href: `/${locale}/montaje-tv-valencia`,
    },
    {
      title: isEs ? "Instalación de estanterías" : "Shelf installation",
      desc: isEs
        ? "Fijación segura en pared, tacos correctos y acabado nivelado."
        : "Secure wall fixing, correct anchors and level finish.",
      href: `/${locale}/services/furniture/instalacion-estanterias-valencia`,
    },
  ];

  const prices = isEs
    ? [
        ["Reparación pequeña de pladur", "desde 49 €"],
        ["Tapar agujeros o golpes", "desde 49 €"],
        ["Instalación de pared de pladur", "desde 120 €"],
        ["Techo falso de pladur", "según m²"],
        ["Refuerzo para TV / estantería", "desde 59 €"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Small drywall repair", "from €49"],
        ["Cover holes or damage", "from €49"],
        ["Drywall wall installation", "from €120"],
        ["False drywall ceiling", "by m²"],
        ["Reinforcement for TV / shelf", "from €59"],
        ["Visit / inspection", "from €49"],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta un instalador de pladur en Valencia?",
          a: "Depende del tipo de trabajo, metros, materiales, altura, acabado y estado de la zona. Las reparaciones pequeñas suelen empezar desde 49 €, y los trabajos más grandes se calculan por caso o por m².",
        },
        {
          q: "¿Hacéis reparaciones pequeñas de pladur?",
          a: "Sí. Podemos reparar agujeros, golpes, grietas, zonas dañadas por anclajes, cortes mal hechos y pequeñas superficies antes de pintar.",
        },
        {
          q: "¿Se puede colgar una TV o estantería en pared de pladur?",
          a: "Sí, pero hay que revisar el tipo de pared, peso, soporte y puntos de fijación. En muchos casos usamos tacos específicos, refuerzos o soluciones adaptadas para evitar daños.",
        },
        {
          q: "¿Hacéis techos falsos de pladur?",
          a: "Sí, podemos valorar techos falsos, reparaciones de techo, registros, zonas dañadas y preparación para iluminación, siempre según medidas y dificultad.",
        },
        {
          q: "¿Puedo enviar fotos por WhatsApp?",
          a: "Sí. Envía fotos, medidas aproximadas, ubicación y una breve explicación. Así podemos darte una estimación más clara antes de la visita.",
        },
        {
          q: "¿En qué zonas trabajáis?",
          a: "Trabajamos en Valencia ciudad y zonas cercanas como Campanar, Ruzafa, Benimaclet, Patraix, Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera y Gandía.",
        },
      ]
    : [
        {
          q: "How much does a drywall installer in Valencia cost?",
          a: "It depends on the job type, meters, materials, height, finish and current condition. Small repairs usually start from €49, while larger jobs are estimated case by case or by m².",
        },
        {
          q: "Do you do small drywall repairs?",
          a: "Yes. We can repair holes, impact damage, cracks, damaged anchor points, bad cuts and small surfaces before painting.",
        },
        {
          q: "Can a TV or shelf be mounted on drywall?",
          a: "Yes, but the wall type, weight, bracket and fixing points must be checked. In many cases we use specific anchors, reinforcement or adapted solutions to avoid damage.",
        },
        {
          q: "Do you install false drywall ceilings?",
          a: "Yes, we can assess false ceilings, ceiling repairs, access panels, damaged areas and preparation for lighting depending on measurements and difficulty.",
        },
        {
          q: "Can I send photos by WhatsApp?",
          a: "Yes. Send photos, approximate measurements, location and a short explanation so we can give a clearer estimate before the visit.",
        },
        {
          q: "Which areas do you cover?",
          a: "We work in Valencia city and nearby areas including Campanar, Ruzafa, Benimaclet, Patraix, Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera and Gandía.",
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
        "@id": `${baseUrl}/${locale}/instalador-pladur-valencia#service`,
        name: isEs
          ? "Instalador de pladur en Valencia"
          : "Drywall installer in Valencia",
        serviceType: isEs
          ? "Instalador de pladur"
          : "Drywall installer",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}/instalador-pladur-valencia`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de pladur en Valencia"
            : "Drywall services in Valencia",
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
              ? "Instalador de pladur Valencia"
              : "Drywall installer Valencia",
            item: `${baseUrl}/${locale}/instalador-pladur-valencia`,
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
                ? "Instalador de pladur en Valencia para paredes, techos y reparaciones limpias"
                : "Drywall installer in Valencia for walls, ceilings and clean repairs"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO realiza trabajos de pladur en Valencia: reparación de agujeros, paredes de pladur, techos falsos, refuerzos para TV o estanterías, preparación antes de pintar y pequeños ajustes. Trabajo limpio, presupuesto claro y atención rápida por WhatsApp."
                : "THEVULGO handles drywall work in Valencia: hole repairs, drywall walls, false ceilings, reinforcement for TVs or shelves, preparation before painting and small adjustments. Clean work, clear estimate and fast WhatsApp response."}
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
                  title: isEs ? "Respuesta rápida" : "Fast response",
                  text: isEs
                    ? "Envía fotos y recibe una estimación clara."
                    : "Send photos and get a clear estimate.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Fijación segura" : "Safe fixing",
                  text: isEs
                    ? "Revisamos pared, peso, tacos y refuerzos."
                    : "We check wall type, weight, anchors and reinforcement.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Cortes, parches y preparación ordenada."
                    : "Neat cuts, patches and preparation.",
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
          {isEs ? "Servicios de pladur" : "Drywall services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Estas páginas internas refuerzan el SEO local y ayudan al cliente a elegir exactamente el tipo de trabajo de pladur que necesita."
            : "These internal pages strengthen local SEO and help the customer choose the exact drywall job they need."}
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
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-black">
                {isEs
                  ? "¿Qué hace un instalador de pladur?"
                  : "What does a drywall installer do?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Un instalador de pladur se encarga de montar, reparar y preparar superficies ligeras como tabiques, trasdosados, techos falsos, cajones, registros y zonas dañadas. También puede revisar si una pared de pladur permite fijar una TV, estantería o mueble."
                  : "A drywall installer handles installation, repair and preparation of light surfaces such as partitions, wall linings, false ceilings, boxes, access panels and damaged areas. They can also check whether a drywall wall can support a TV, shelf or furniture item."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Antes de empezar, revisamos medidas, estructura, tipo de pared, peso, materiales necesarios y acabado esperado. Así evitamos sorpresas y elegimos la solución correcta para cada vivienda o local."
                  : "Before starting, we check measurements, structure, wall type, weight, required materials and expected finish. This avoids surprises and helps choose the right solution for each home or commercial space."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Reparación de agujeros" : "Hole repair",
                  isEs ? "Techos falsos" : "False ceilings",
                  isEs ? "Paredes y tabiques" : "Walls and partitions",
                  isEs ? "Refuerzos para fijaciones" : "Reinforcement for fixings",
                  isEs ? "Preparación antes de pintar" : "Preparation before painting",
                  isEs ? "Acabado limpio" : "Clean finish",
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
                  ? "El precio final depende de los metros, estado de la zona, materiales, altura, acceso, pintura y nivel de acabado."
                  : "Final price depends on meters, current condition, materials, height, access, painting and finish level."}
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
                ? "Muestra la pared, techo o daño por WhatsApp."
                : "Show the wall, ceiling or damage by WhatsApp.",
            ],
            [
              isEs ? "2. Medidas" : "2. Measurements",
              isEs
                ? "Indica medidas aproximadas y ubicación."
                : "Share approximate measurements and location.",
            ],
            [
              isEs ? "3. Estimación" : "3. Estimate",
              isEs
                ? "Te damos precio orientativo o visita."
                : "We give a guide price or arrange a visit.",
            ],
            [
              isEs ? "4. Trabajo limpio" : "4. Clean work",
              isEs
                ? "Realizamos la reparación o instalación."
                : "We complete the repair or installation.",
            ],
            [
              isEs ? "5. Revisión final" : "5. Final check",
              isEs
                ? "Comprobamos acabado, fijación y limpieza."
                : "We check finish, fixing and cleaning.",
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
                  ? "El pladur necesita una instalación limpia y una fijación correcta. No se trata solo de tapar un agujero, sino de revisar soporte, peso, materiales, acabado y durabilidad."
                  : "Drywall needs clean installation and correct fixing. It is not just about covering a hole, but checking support, weight, materials, finish and durability."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Hammer, isEs ? "Trabajo práctico" : "Practical work"],
                [Home, isEs ? "Viviendas y locales" : "Homes and premises"],
                [Zap, isEs ? "Soluciones rápidas" : "Fast solutions"],
                [Star, isEs ? "Acabado profesional" : "Professional finish"],
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
              ? "¿Necesitas un instalador de pladur en Valencia?"
              : "Need a drywall installer in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos por WhatsApp y te diremos qué se puede hacer, qué materiales hacen falta, cuánto puede costar y cuándo podemos ir."
              : "Send photos by WhatsApp and we will tell you what can be done, what materials are needed, how much it may cost and when we can come."}
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