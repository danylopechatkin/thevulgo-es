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
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  Zap,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const pagePath = "/reformas-pladur-valencia";

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
    ? "Reformas de Pladur en Valencia | Techos, Tabiques y Reparaciones | THEVULGO"
    : "Plasterboard Renovations in Valencia | Ceilings, Partitions & Repairs | THEVULGO";

  const description = isEs
    ? "Reformas de pladur en Valencia para pisos, viviendas, locales y oficinas. Instalación de pladur, tabiques, falsos techos, reparaciones, parches, lijado y preparación para pintura."
    : "Plasterboard renovation services in Valencia for apartments, homes, shops and offices. Drywall installation, partitions, false ceilings, repairs, patches, sanding and preparation for painting.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reformas pladur valencia",
          "reforma pladur valencia",
          "reformas de pladur en valencia",
          "pladur valencia",
          "instalacion pladur valencia",
          "instalación pladur valencia",
          "empresa pladur valencia",
          "presupuesto pladur valencia",
          "tabiques pladur valencia",
          "falso techo pladur valencia",
          "falsos techos pladur valencia",
          "reparacion pladur valencia",
          "reparación pladur valencia",
          "pintar pladur valencia",
          "techo registrable valencia",
          "paredes pladur valencia",
          "manitas pladur valencia",
        ]
      : [
          "plasterboard renovation valencia",
          "drywall renovation valencia",
          "drywall valencia",
          "plasterboard valencia",
          "drywall installation valencia",
          "plasterboard ceilings valencia",
          "drywall partitions valencia",
          "drywall repair valencia",
          "drywall quote valencia",
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

export default async function ReformasPladurValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=handyman`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito un presupuesto para una reforma de pladur en Valencia. Puedo enviar fotos, medidas y detalles del trabajo."
      : "Hi, I need an estimate for a plasterboard / drywall renovation in Valencia. I can send photos, measurements and job details."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const services = isEs
    ? [
        "Reformas de pladur en viviendas",
        "Reformas de pladur en locales",
        "Tabiques de pladur",
        "Falsos techos de pladur",
        "Techos registrables",
        "Reparación de pladur dañado",
        "Cierre de huecos y rozas",
        "Preparación para pintura",
        "Parches, lijado y acabado",
        "Instalación para focos y luces",
        "Reparación de esquinas",
        "Refuerzo para soportes y muebles",
      ]
    : [
        "Plasterboard renovations for homes",
        "Plasterboard renovations for shops",
        "Drywall partitions",
        "Plasterboard false ceilings",
        "Suspended ceilings",
        "Damaged drywall repair",
        "Closing openings and channels",
        "Preparation for painting",
        "Patches, sanding and finishing",
        "Preparation for spotlights",
        "Corner repair",
        "Reinforcement for brackets and furniture",
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
      title: isEs ? "Presupuesto pladur Valencia" : "Drywall quote Valencia",
      desc: isEs
        ? "Pide precio para trabajos de pladur según fotos, medidas y acabado."
        : "Request a drywall quote based on photos, measurements and finish.",
      href: `/${locale}/presupuesto-pladur-valencia`,
    },
    {
      title: isEs ? "Empresa de pladur Valencia" : "Drywall company Valencia",
      desc: isEs
        ? "Servicio para viviendas, pisos, oficinas, locales y pequeños negocios."
        : "Service for homes, apartments, offices, shops and small businesses.",
      href: `/${locale}/empresa-pladur-valencia`,
    },
    {
      title: isEs ? "Falso techo pladur Valencia" : "Plasterboard false ceiling Valencia",
      desc: isEs
        ? "Instalación, reparación y preparación de falsos techos de pladur."
        : "Installation, repair and preparation of plasterboard false ceilings.",
      href: `/${locale}/falso-techo-pladur-valencia`,
    },
    {
      title: isEs ? "Reparación pladur Valencia" : "Drywall repair Valencia",
      desc: isEs
        ? "Agujeros, grietas, esquinas, zonas dañadas y parches."
        : "Holes, cracks, corners, damaged areas and patches.",
      href: `/${locale}/reparacion-pladur-valencia`,
    },
    {
      title: isEs ? "Tabiques pladur Valencia" : "Drywall partitions Valencia",
      desc: isEs
        ? "Divisiones interiores, cierres y pequeñas reformas con pladur."
        : "Interior divisions, closures and small plasterboard renovations.",
      href: `/${locale}/tabiques-pladur-valencia`,
    },
  ];

  const prices = isEs
    ? [
        ["Revisión / visita", "desde 49 €"],
        ["Reparación pequeña de pladur", "desde 35 €"],
        ["Parche + lijado básico", "desde 45 €"],
        ["Reparación de techo", "desde 49 €"],
        ["Tabique pequeño de pladur", "presupuesto"],
        ["Falso techo de pladur", "presupuesto"],
        ["Techo registrable", "presupuesto"],
        ["Preparación para pintura", "presupuesto"],
      ]
    : [
        ["Visit / inspection", "from €49"],
        ["Small drywall repair", "from €35"],
        ["Patch + basic sanding", "from €45"],
        ["Ceiling repair", "from €49"],
        ["Small drywall partition", "quote"],
        ["Plasterboard false ceiling", "quote"],
        ["Suspended ceiling", "quote"],
        ["Preparation for painting", "quote"],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta una reforma de pladur en Valencia?",
          a: "Depende de metros, materiales, altura, estructura, acabado, dificultad y si hace falta pintura. Las reparaciones pequeñas pueden empezar desde 35 €, pero una reforma de pladur completa necesita presupuesto.",
        },
        {
          q: "¿Hacéis reformas de pladur en pisos y locales?",
          a: "Sí. Trabajamos en pisos, viviendas, oficinas, locales, apartamentos turísticos y pequeños negocios en Valencia y alrededores.",
        },
        {
          q: "¿Podéis hacer tabiques de pladur?",
          a: "Sí. Podemos valorar tabiques de pladur, cierres interiores, divisiones de espacios y pequeñas reformas con estructura metálica y placas de pladur.",
        },
        {
          q: "¿Hacéis falsos techos de pladur?",
          a: "Sí. Podemos revisar instalación o reparación de falsos techos de pladur, preparación para focos, cierres, registros y remates.",
        },
        {
          q: "¿También reparáis pladur dañado?",
          a: "Sí. Reparamos agujeros, grietas, esquinas rotas, cortes, daños por soportes de TV, estanterías, golpes y zonas abiertas.",
        },
        {
          q: "¿Incluye pintura?",
          a: "Depende del trabajo. Podemos dejar la zona preparada, parcheada y lijada. La pintura se puede valorar aparte según superficie y acabado.",
        },
        {
          q: "¿Puedo pedir presupuesto por WhatsApp?",
          a: "Sí. Envía fotos, vídeo corto, medidas aproximadas, altura, ubicación y explica qué quieres hacer. Así podemos darte una estimación más clara.",
        },
        {
          q: "¿Trabajáis fuera de Valencia ciudad?",
          a: "Sí. Cubrimos Valencia ciudad y zonas cercanas como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera y Gandía según disponibilidad.",
        },
      ]
    : [
        {
          q: "How much does a plasterboard renovation in Valencia cost?",
          a: "It depends on measurements, materials, height, structure, finish, difficulty and whether painting is needed. Small repairs can start from €35, but a full plasterboard renovation requires a quote.",
        },
        {
          q: "Do you do plasterboard renovations in apartments and shops?",
          a: "Yes. We work in apartments, homes, offices, shops, tourist apartments and small businesses in Valencia and nearby areas.",
        },
        {
          q: "Can you build drywall partitions?",
          a: "Yes. We can quote drywall partitions, interior closures, room divisions and small renovations with metal frame and plasterboard panels.",
        },
        {
          q: "Do you install plasterboard false ceilings?",
          a: "Yes. We can review installation or repair of plasterboard false ceilings, spotlight preparation, closures, access panels and finishing.",
        },
        {
          q: "Do you repair damaged drywall?",
          a: "Yes. We repair holes, cracks, broken corners, cutouts, TV bracket damage, shelf damage, impact damage and open areas.",
        },
        {
          q: "Is painting included?",
          a: "It depends on the job. We can leave the area patched, sanded and prepared. Painting can be quoted separately depending on surface and finish.",
        },
        {
          q: "Can I request a quote by WhatsApp?",
          a: "Yes. Send photos, a short video, approximate measurements, height, location and explain what you need. This helps us give a clearer estimate.",
        },
        {
          q: "Do you work outside Valencia city?",
          a: "Yes. We cover Valencia city and nearby areas such as Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera and Gandía depending on availability.",
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
          ? "Reformas de pladur en Valencia"
          : "Plasterboard renovations in Valencia",
        serviceType: isEs
          ? "Reformas de pladur, tabiques, falsos techos y reparaciones"
          : "Plasterboard renovations, partitions, false ceilings and repairs",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}${pagePath}`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de reformas de pladur en Valencia"
            : "Plasterboard renovation services in Valencia",
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
            name: isEs ? "Reformas Pladur Valencia" : "Plasterboard Renovations Valencia",
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
                ? "Reformas de pladur en Valencia para pisos, locales y oficinas"
                : "Plasterboard renovations in Valencia for homes, shops and offices"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO realiza reformas de pladur en Valencia: tabiques, falsos techos, techos registrables, reparación de pladur dañado, cierre de huecos, preparación para pintura, parches, lijado y pequeños trabajos de renovación interior."
                : "THEVULGO provides plasterboard and drywall renovation services in Valencia: partitions, false ceilings, suspended ceilings, damaged drywall repair, closing openings, preparation for painting, patches, sanding and small interior renovation work."}
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
                  title: isEs ? "Medimos y revisamos" : "Measure and check",
                  text: isEs
                    ? "Fotos, vídeo, medidas y estado actual."
                    : "Photos, video, measurements and current condition.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Solución práctica" : "Practical solution",
                  text: isEs
                    ? "Pladur, estructura, reparación o acabado."
                    : "Drywall, frame, repair or finishing.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Preparación, lijado y zona ordenada."
                    : "Preparation, sanding and tidy area.",
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
          {isEs ? "Servicios de reformas de pladur" : "Plasterboard renovation services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Hacemos trabajos de pladur para mejorar, reparar o dividir espacios interiores. Podemos valorar reformas pequeñas, reparaciones puntuales y trabajos más completos según fotos, medidas y estado de la zona."
            : "We provide drywall and plasterboard work to improve, repair or divide interior spaces. We can quote small renovations, specific repairs and more complete jobs based on photos, measurements and the condition of the area."}
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
                  ? "¿Qué incluye una reforma de pladur?"
                  : "What does a plasterboard renovation include?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Una reforma de pladur puede incluir instalación de placas, estructura metálica, reparación de paredes o techos, cierre de huecos, creación de tabiques, falso techo, preparación para focos, lijado, masillado y preparación previa a pintura."
                  : "A drywall renovation can include board installation, metal framing, wall or ceiling repair, closing openings, building partitions, false ceilings, spotlight preparation, sanding, filling and preparation before painting."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Antes de empezar revisamos el estado de la pared o techo, la altura, el acceso, si hay cables, humedad, instalaciones existentes, tipo de acabado necesario y si el trabajo requiere materiales especiales."
                  : "Before starting, we check the condition of the wall or ceiling, height, access, possible cables, moisture, existing installations, required finish and whether the job needs special materials."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Tabiques interiores" : "Interior partitions",
                  isEs ? "Falsos techos" : "False ceilings",
                  isEs ? "Techos registrables" : "Suspended ceilings",
                  isEs ? "Reparación de daños" : "Damage repair",
                  isEs ? "Preparación para pintura" : "Preparation for painting",
                  isEs ? "Remates y acabados" : "Finishing details",
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
                  ? "El precio final depende de metros, materiales, altura, acceso, estructura, acabado, pintura y tiempo necesario."
                  : "Final price depends on measurements, materials, height, access, framing, finish, painting and time required."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Páginas relacionadas de pladur" : "Related drywall pages"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Este cluster ayuda a Google a entender que THEVULGO trabaja pladur en Valencia desde varias intenciones de búsqueda: presupuesto, empresa, reformas, falsos techos, reparación y tabiques."
            : "This cluster helps Google understand that THEVULGO works with drywall in Valencia across several search intents: quote, company, renovation, false ceilings, repair and partitions."}
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

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black">
                {isEs ? "Reformas limpias, prácticas y seguras" : "Clean, practical and safe renovations"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "El pladur mal instalado puede dejar grietas, juntas visibles, techos desnivelados, paredes débiles o acabados difíciles de pintar. Por eso revisamos la zona, elegimos una solución práctica y explicamos el trabajo antes de empezar."
                  : "Poor drywall work can leave cracks, visible joints, uneven ceilings, weak walls or finishes that are difficult to paint. That is why we check the area, choose a practical solution and explain the work before starting."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Hammer, isEs ? "Reformas pequeñas" : "Small renovations"],
                [Home, isEs ? "Pisos y locales" : "Homes and shops"],
                [Paintbrush, isEs ? "Listo para pintar" : "Ready for paint"],
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
          {isEs ? "Cómo funciona" : "How it works"}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {[
            [
              isEs ? "1. Envía fotos" : "1. Send photos",
              isEs ? "Pared, techo, daño o zona a reformar." : "Wall, ceiling, damage or area to renovate.",
            ],
            [
              isEs ? "2. Medidas" : "2. Measurements",
              isEs ? "Ancho, alto, profundidad y altura." : "Width, height, depth and access height.",
            ],
            [
              isEs ? "3. Revisión" : "3. Review",
              isEs ? "Vemos materiales, dificultad y acabado." : "We check materials, difficulty and finish.",
            ],
            [
              isEs ? "4. Presupuesto" : "4. Quote",
              isEs ? "Te damos precio orientativo o visita." : "We give an estimate or arrange a visit.",
            ],
            [
              isEs ? "5. Reforma" : "5. Work",
              isEs ? "Hacemos el trabajo y dejamos limpio." : "We complete the work and leave it clean.",
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
            {isEs ? "Trabajos habituales con pladur" : "Common drywall renovation jobs"}
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Home,
                title: isEs ? "Viviendas y pisos" : "Homes and apartments",
                text: isEs
                  ? "Pequeñas reformas interiores, cierres, reparaciones, paredes dañadas, zonas abiertas y preparación para pintura."
                  : "Small interior renovations, closures, repairs, damaged walls, open areas and preparation for painting.",
              },
              {
                icon: Zap,
                title: isEs ? "Locales y oficinas" : "Shops and offices",
                text: isEs
                  ? "Divisiones, techos, registros, reparación de daños visibles y preparación de zonas para uso comercial."
                  : "Partitions, ceilings, access panels, visible damage repair and preparation of areas for commercial use.",
              },
              {
                icon: Star,
                title: isEs ? "Acabados y remates" : "Finishes and details",
                text: isEs
                  ? "Masilla, lijado, parche, remates, esquinas, grietas y preparación para dejar una superficie más limpia."
                  : "Filler, sanding, patches, finishing details, corners, cracks and preparation for a cleaner surface.",
              },
            ].map((item) => (
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
          {isEs ? "Zonas de servicio en Valencia" : "Service areas in Valencia"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Trabajamos en Valencia ciudad y zonas cercanas. Si no sabes si cubrimos tu zona, envía tu ubicación por WhatsApp."
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
              ? "¿Necesitas una reforma de pladur en Valencia?"
              : "Need a plasterboard renovation in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos de la pared, techo o zona que quieres reformar. Te diremos qué se puede hacer, qué datos faltan, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the wall, ceiling or area you want to renovate. We will tell you what can be done, what details are missing, how much it may cost and when we can come."}
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