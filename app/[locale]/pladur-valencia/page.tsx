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
const pagePath = "/pladur-valencia";

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
    ? "Pladur en Valencia | Instalación, Techos y Reparaciones | THEVULGO"
    : "Drywall / Plasterboard in Valencia | Installation & Repairs | THEVULGO";

  const description = isEs
    ? "Servicios de pladur en Valencia. Instalación de pladur, techos de pladur, falsos techos, reparaciones, parches, grietas y preparación de paredes. Presupuesto por WhatsApp."
    : "Drywall and plasterboard services in Valencia. Plasterboard installation, ceilings, repairs, patches, cracks and wall preparation. Estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "pladur valencia",
          "pladur en valencia",
          "instalacion pladur valencia",
          "instalación pladur valencia",
          "instalador pladur valencia",
          "instaladores de pladur en valencia",
          "techos pladur valencia",
          "falsos techos valencia",
          "reformas pladur valencia",
          "reparacion pladur valencia",
          "paredes pladur valencia",
          "manitas pladur valencia",
        ]
      : [
          "drywall valencia",
          "plasterboard valencia",
          "drywall installation valencia",
          "plasterboard installation valencia",
          "drywall installer valencia",
          "plasterboard ceilings valencia",
          "drywall repair valencia",
          "plasterboard repair valencia",
          "handyman drywall valencia",
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

export default async function PladurValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=handyman`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito un presupuesto para un trabajo de pladur en Valencia. Puedo enviar fotos, medidas y detalles del trabajo."
      : "Hi, I need an estimate for a drywall / plasterboard job in Valencia. I can send photos, measurements and job details."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Techos de pladur Valencia" : "Plasterboard ceilings Valencia",
      desc: isEs
        ? "Techos de pladur, falsos techos, reparaciones y preparación para focos."
        : "Plasterboard ceilings, false ceilings, repairs and spotlight preparation.",
      href: `/${locale}/techos-pladur-valencia`,
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
        ? "Servicio de instalador de pladur para trabajos en vivienda, local u oficina."
        : "Drywall installer service for homes, commercial spaces and offices.",
      href: `/${locale}/instalador-pladur-valencia`,
    },
    {
      title: isEs ? "Reparación de agujeros" : "Small hole repair",
      desc: isEs
        ? "Reparación de agujeros pequeños y daños visibles en pared o techo."
        : "Repair of small holes and visible damage on wall or ceiling.",
      href: `/${locale}/services/drywall/small-hole-repair`,
    },
    {
      title: isEs ? "Reparación de grietas" : "Crack filling",
      desc: isEs
        ? "Relleno, reparación y preparación de grietas en pared o techo."
        : "Filling, repair and preparation of cracks on wall or ceiling.",
      href: `/${locale}/services/drywall/crack-filling`,
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
        ["Reparación pequeña de pladur", "desde 35 €"],
        ["Parche y preparación", "desde 45 €"],
        ["Reparación de techo de pladur", "desde 49 €"],
        ["Instalación básica de pladur", "desde 79 €"],
        ["Techo de pladur / falso techo", "presupuesto"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Small drywall repair", "from €35"],
        ["Patch and preparation", "from €45"],
        ["Drywall ceiling repair", "from €49"],
        ["Basic plasterboard installation", "from €79"],
        ["Plasterboard ceiling / false ceiling", "quote"],
        ["Visit / inspection", "from €49"],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta un trabajo de pladur en Valencia?",
          a: "Depende del tipo de trabajo, metros, altura, materiales, estado de la pared o techo, acabado y dificultad. Las reparaciones pequeñas pueden empezar desde 35 € y trabajos más grandes requieren presupuesto.",
        },
        {
          q: "¿Hacéis techos de pladur y falsos techos?",
          a: "Sí. Podemos revisar trabajos de techos de pladur, falsos techos, reparaciones, cierres, parches y preparación para focos.",
        },
        {
          q: "¿También reparáis pladur dañado?",
          a: "Sí. Reparamos agujeros, grietas, esquinas dañadas, cortes, zonas abiertas, marcas de soportes, daños por estanterías y pequeñas reparaciones de pared o techo.",
        },
        {
          q: "¿Trabajáis en pisos y locales?",
          a: "Sí. Trabajamos en viviendas, pisos de alquiler, oficinas, locales, apartamentos turísticos y pequeños negocios en Valencia y alrededores.",
        },
        {
          q: "¿Puedo enviar fotos por WhatsApp?",
          a: "Sí. Envíanos fotos, vídeo corto, medidas aproximadas, altura y ubicación. Así podemos darte una estimación más clara antes de la visita.",
        },
        {
          q: "¿Incluye pintura?",
          a: "Depende del trabajo. Podemos dejar la zona preparada, parcheada y lijada. Si necesitas pintura, se puede valorar aparte según superficie y acabado.",
        },
      ]
    : [
        {
          q: "How much does drywall work in Valencia cost?",
          a: "It depends on the job type, measurements, height, materials, wall or ceiling condition, finish and difficulty. Small repairs can start from €35 and larger jobs require a quote.",
        },
        {
          q: "Do you install plasterboard ceilings and false ceilings?",
          a: "Yes. We can review plasterboard ceilings, false ceilings, repairs, closures, patches and preparation for spotlights.",
        },
        {
          q: "Do you also repair damaged drywall?",
          a: "Yes. We repair holes, cracks, damaged corners, cutouts, open areas, bracket marks, shelf damage and small wall or ceiling repairs.",
        },
        {
          q: "Do you work in apartments and commercial spaces?",
          a: "Yes. We work in homes, rental apartments, offices, commercial spaces, tourist apartments and small businesses in Valencia and nearby areas.",
        },
        {
          q: "Can I send photos by WhatsApp?",
          a: "Yes. Send photos, a short video, approximate measurements, height and location. This helps us give a clearer estimate before the visit.",
        },
        {
          q: "Is painting included?",
          a: "It depends on the job. We can leave the area patched, sanded and prepared. Painting can be quoted separately depending on surface and finish.",
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
        name: isEs ? "Pladur en Valencia" : "Drywall / Plasterboard in Valencia",
        serviceType: isEs ? "Servicios de pladur" : "Drywall and plasterboard services",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}${pagePath}`,
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
            name: isEs ? "Pladur Valencia" : "Drywall Valencia",
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
                ? "Pladur en Valencia: instalación, techos, falsos techos y reparaciones"
                : "Drywall and plasterboard in Valencia: installation, ceilings and repairs"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO realiza trabajos de pladur en Valencia: instalación de pladur, techos de pladur, falsos techos, reparación de agujeros, grietas, parches, esquinas dañadas y preparación de paredes o techos para dejar un acabado limpio."
                : "THEVULGO provides drywall and plasterboard work in Valencia: plasterboard installation, ceilings, false ceilings, hole repair, cracks, patches, damaged corners and wall or ceiling preparation for a clean finish."}
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
                  title: isEs ? "Trabajo seguro" : "Safe work",
                  text: isEs
                    ? "Revisamos pared, techo, soporte y estado."
                    : "We check wall, ceiling, support and condition.",
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
          {isEs ? "Servicios principales de pladur" : "Main drywall services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Estas páginas internas ayudan a Google a entender mejor el cluster de pladur: techos, instalación, instalador, reparaciones, grietas y parches en Valencia."
            : "These internal pages help Google understand the drywall cluster: ceilings, installation, installer, repairs, cracks and patches in Valencia."}
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
                  ? "¿Qué trabajos de pladur podemos realizar?"
                  : "What drywall jobs can we do?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Un trabajo de pladur puede incluir reparación de agujeros, cierre de huecos, reparación de grietas, preparación de paredes, reparación de techos, instalación básica de placas, pequeños falsos techos, zonas para focos y acabados previos a pintura."
                  : "A drywall job can include hole repair, closing openings, crack repair, wall preparation, ceiling repair, basic board installation, small false ceilings, spotlight areas and pre-painting finish preparation."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Antes de dar precio revisamos fotos, medidas aproximadas, altura, tipo de superficie, estado actual, si hay humedad, cables, focos o estructura existente. Así evitamos sorpresas y damos un presupuesto más claro."
                  : "Before quoting, we check photos, approximate measurements, height, surface type, current condition, possible moisture, cables, spotlights or existing structure. This avoids surprises and gives a clearer estimate."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Instalación de pladur" : "Drywall installation",
                  isEs ? "Techos de pladur" : "Plasterboard ceilings",
                  isEs ? "Falsos techos" : "False ceilings",
                  isEs ? "Reparación de agujeros" : "Hole repair",
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
              isEs ? "Muestra la pared, techo o daño." : "Show the wall, ceiling or damage.",
            ],
            [
              isEs ? "2. Medidas" : "2. Measurements",
              isEs ? "Indica ancho, alto y profundidad." : "Share width, height and depth.",
            ],
            [
              isEs ? "3. Estimación" : "3. Estimate",
              isEs ? "Te damos precio orientativo." : "We give an approximate price.",
            ],
            [
              isEs ? "4. Trabajo" : "4. Work",
              isEs ? "Reparamos, instalamos o preparamos." : "We repair, install or prepare.",
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
                  ? "Un trabajo de pladur mal hecho puede dejar grietas visibles, desniveles, juntas marcadas o fijaciones inseguras. Revisamos el problema, proponemos una solución práctica y buscamos un acabado limpio para vivienda, local u oficina."
                  : "Poor drywall work can leave visible cracks, uneven areas, marked joints or unsafe fixings. We check the issue, suggest a practical solution and aim for a clean finish for homes, commercial spaces or offices."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Hammer, isEs ? "Trabajo práctico" : "Practical work"],
                [Home, isEs ? "Casa y alquiler" : "Homes and rentals"],
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
              ? "¿Necesitas un trabajo de pladur en Valencia?"
              : "Need drywall or plasterboard work in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos de la pared, techo, daño o zona donde quieres instalar pladur. Te diremos qué se puede hacer, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the wall, ceiling, damage or area where you need drywall work. We will tell you what can be done, how much it may cost and when we can come."}
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