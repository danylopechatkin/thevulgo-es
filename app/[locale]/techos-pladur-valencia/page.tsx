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
    ? "Techos de Pladur en Valencia | Instalación y Reparación | THEVULGO"
    : "Drywall Ceilings in Valencia | Installation & Repair | THEVULGO";

  const description = isEs
    ? "Techos de pladur en Valencia para falsos techos, reparaciones, registros, iluminación, zonas dañadas y acabados limpios. Presupuesto por WhatsApp."
    : "Drywall ceilings in Valencia for false ceilings, repairs, access panels, lighting preparation, damaged areas and clean finishes. Estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "techos pladur valencia",
          "techo pladur valencia",
          "falso techo pladur valencia",
          "instalacion techo pladur valencia",
          "reparacion techo pladur valencia",
          "instalador pladur valencia",
          "pladur valencia",
          "techo falso valencia",
        ]
      : [
          "drywall ceilings valencia",
          "false ceiling valencia",
          "plasterboard ceiling valencia",
          "drywall ceiling repair valencia",
          "drywall installer valencia",
        ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/techos-pladur-valencia`,
      languages: {
        es: `${baseUrl}/es/techos-pladur-valencia`,
        en: `${baseUrl}/en/techos-pladur-valencia`,
        "x-default": `${baseUrl}/es/techos-pladur-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/techos-pladur-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function TechosPladurValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=drywall`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito presupuesto para un techo de pladur en Valencia. Puedo enviar fotos y medidas."
      : "Hi, I need an estimate for a drywall ceiling in Valencia. I can send photos and measurements."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Instalador de pladur" : "Drywall installer",
      desc: isEs
        ? "Paredes, techos, reparaciones y pequeños trabajos de pladur."
        : "Walls, ceilings, repairs and small drywall jobs.",
      href: `/${locale}/instalador-pladur-valencia`,
    },
    {
      title: isEs ? "Instalación de pladur" : "Drywall installation",
      desc: isEs
        ? "Tabiques, trasdosados, techos falsos y acabados limpios."
        : "Partitions, wall linings, false ceilings and clean finishes.",
      href: `/${locale}/instalacion-pladur-valencia`,
    },
    {
      title: isEs ? "Paredes de pladur" : "Drywall walls",
      desc: isEs
        ? "Paredes interiores, separaciones, trasdosados y ajustes."
        : "Interior walls, partitions, linings and adjustments.",
      href: `/${locale}/paredes-pladur-valencia`,
    },
    {
      title: isEs ? "Reparación de pladur" : "Drywall repair",
      desc: isEs
        ? "Agujeros, grietas, golpes, humedades antiguas y parches."
        : "Holes, cracks, impact damage, old humidity marks and patches.",
      href: `/${locale}/reparacion-pladur-valencia`,
    },
    {
      title: isEs ? "Instalación de lámparas" : "Light installation",
      desc: isEs
        ? "Preparación e instalación de lámparas en techo."
        : "Preparation and installation of ceiling lights.",
      href: `/${locale}/instalacion-lampara-valencia`,
    },
    {
      title: isEs ? "Manitas en Valencia" : "Handyman in Valencia",
      desc: isEs
        ? "Montaje, reparaciones e instalaciones para vivienda y local."
        : "Assembly, repairs and installations for homes and businesses.",
      href: `/${locale}/handyman-valencia`,
    },
  ];

  const prices = isEs
    ? [
        ["Reparación pequeña de techo", "desde 49 €"],
        ["Tapar agujero en techo", "desde 49 €"],
        ["Registro o acceso en techo", "desde 59 €"],
        ["Falso techo de pladur", "según m²"],
        ["Preparación para iluminación", "según trabajo"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Small ceiling repair", "from €49"],
        ["Cover ceiling hole", "from €49"],
        ["Ceiling access panel", "from €59"],
        ["False drywall ceiling", "by m²"],
        ["Lighting preparation", "by job"],
        ["Visit / inspection", "from €49"],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta hacer un techo de pladur en Valencia?",
          a: "Depende de los metros, altura, estructura, materiales, iluminación, registros y nivel de acabado. Las reparaciones pequeñas suelen empezar desde 49 €, y los falsos techos se valoran por m² o por trabajo.",
        },
        {
          q: "¿Hacéis reparación de techos de pladur?",
          a: "Sí. Podemos reparar agujeros, grietas, golpes, zonas abiertas, cortes mal hechos y partes dañadas antes de pintar.",
        },
        {
          q: "¿Se puede preparar el techo para lámparas o focos?",
          a: "Sí. Podemos valorar la preparación para iluminación, registros, pasos de cable y pequeñas adaptaciones según el estado del techo.",
        },
        {
          q: "¿Puedo enviar fotos por WhatsApp?",
          a: "Sí. Envía fotos del techo, medidas aproximadas, altura y ubicación. Así podemos darte una estimación más clara.",
        },
        {
          q: "¿Trabajáis en pisos, locales y Airbnb?",
          a: "Sí. Trabajamos en viviendas, habitaciones, apartamentos turísticos, oficinas, locales y pequeños negocios en Valencia.",
        },
        {
          q: "¿En qué zonas trabajáis?",
          a: "Trabajamos en Valencia ciudad y zonas cercanas como Campanar, Ruzafa, Benimaclet, Patraix, Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera y Gandía.",
        },
      ]
    : [
        {
          q: "How much does a drywall ceiling cost in Valencia?",
          a: "It depends on meters, height, structure, materials, lighting, access panels and finish level. Small repairs usually start from €49, and false ceilings are estimated by m² or by job.",
        },
        {
          q: "Do you repair drywall ceilings?",
          a: "Yes. We can repair holes, cracks, impact damage, open areas, bad cuts and damaged parts before painting.",
        },
        {
          q: "Can the ceiling be prepared for lights or spotlights?",
          a: "Yes. We can assess lighting preparation, access panels, cable paths and small adaptations depending on the ceiling condition.",
        },
        {
          q: "Can I send photos by WhatsApp?",
          a: "Yes. Send photos of the ceiling, approximate measurements, height and location so we can give a clearer estimate.",
        },
        {
          q: "Do you work in homes, premises and Airbnb apartments?",
          a: "Yes. We work in homes, rooms, tourist apartments, offices, commercial spaces and small businesses in Valencia.",
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
        "@id": `${baseUrl}/${locale}/techos-pladur-valencia#service`,
        name: isEs
          ? "Techos de pladur en Valencia"
          : "Drywall ceilings in Valencia",
        serviceType: isEs ? "Techos de pladur" : "Drywall ceilings",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}/techos-pladur-valencia`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de techos de pladur en Valencia"
            : "Drywall ceiling services in Valencia",
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
            name: isEs ? "Techos de pladur Valencia" : "Drywall ceilings Valencia",
            item: `${baseUrl}/${locale}/techos-pladur-valencia`,
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
                ? "Techos de pladur en Valencia para falsos techos, reparaciones e iluminación"
                : "Drywall ceilings in Valencia for false ceilings, repairs and lighting"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO realiza trabajos de techos de pladur en Valencia: falsos techos, reparación de agujeros, registros, preparación para iluminación, zonas dañadas y acabados limpios. Envía fotos por WhatsApp y recibe una estimación clara."
                : "THEVULGO handles drywall ceiling work in Valencia: false ceilings, hole repairs, access panels, lighting preparation, damaged areas and clean finishes. Send photos by WhatsApp and get a clear estimate."}
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
                  title: isEs ? "Respuesta rápida" : "Fast response",
                  text: isEs
                    ? "Envía fotos, medidas y ubicación."
                    : "Send photos, measurements and location.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Instalación segura" : "Safe installation",
                  text: isEs
                    ? "Revisamos estructura, altura y fijación."
                    : "We check structure, height and fixing.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Preparación ordenada antes de pintar."
                    : "Neat preparation before painting.",
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
          {isEs ? "Servicios relacionados con pladur" : "Related drywall services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Conectamos esta página con servicios relacionados para reforzar el SEO local y ayudar al cliente a encontrar la solución exacta."
            : "We connect this page with related services to strengthen local SEO and help the customer find the exact solution."}
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
                {isEs ? "¿Qué incluye un techo de pladur?" : "What does a drywall ceiling include?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Un techo de pladur puede servir para mejorar el acabado de una habitación, ocultar instalaciones, preparar iluminación, crear registros o reparar zonas dañadas. Antes de trabajar revisamos medidas, altura, estructura y materiales necesarios."
                  : "A drywall ceiling can improve the finish of a room, hide installations, prepare lighting, create access panels or repair damaged areas. Before working, we check measurements, height, structure and required materials."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "También podemos valorar reparaciones pequeñas: agujeros en techo, cortes abiertos, golpes, grietas o partes que necesitan dejarse listas antes de pintar."
                  : "We can also assess small repairs: ceiling holes, open cuts, impact damage, cracks or areas that need to be prepared before painting."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Falsos techos" : "False ceilings",
                  isEs ? "Reparación de agujeros" : "Hole repair",
                  isEs ? "Registros de acceso" : "Access panels",
                  isEs ? "Preparación para iluminación" : "Lighting preparation",
                  isEs ? "Cortes y ajustes" : "Cuts and adjustments",
                  isEs ? "Acabado antes de pintar" : "Finish before painting",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
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
                  <div key={name} className="flex items-center justify-between rounded-xl bg-yellow-50 p-4">
                    <span className="font-semibold">{name}</span>
                    <span className="font-black">{price}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-neutral-600">
                {isEs
                  ? "El precio final depende de metros, altura, estructura, materiales, iluminación, registros y acabado."
                  : "Final price depends on meters, height, structure, materials, lighting, access panels and finish."}
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
            [isEs ? "1. Envía fotos" : "1. Send photos", isEs ? "Muestra el techo por WhatsApp." : "Show the ceiling by WhatsApp."],
            [isEs ? "2. Medidas" : "2. Measurements", isEs ? "Indica medidas y altura aproximada." : "Share approximate size and height."],
            [isEs ? "3. Valoración" : "3. Assessment", isEs ? "Revisamos dificultad y materiales." : "We check difficulty and materials."],
            [isEs ? "4. Trabajo limpio" : "4. Clean work", isEs ? "Realizamos instalación o reparación." : "We complete installation or repair."],
            [isEs ? "5. Revisión final" : "5. Final check", isEs ? "Comprobamos acabado y limpieza." : "We check finish and cleaning."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-md">
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
                  ? "Un techo de pladur necesita una ejecución limpia, medidas correctas y revisión de la estructura. Cuidamos el espacio, explicamos la solución y dejamos el trabajo preparado para el siguiente paso."
                  : "A drywall ceiling needs clean execution, correct measurements and structural checking. We respect the space, explain the solution and leave the job ready for the next step."}
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
                  <div key={String(title)} className="rounded-2xl border border-yellow-400 bg-neutral-900 p-5">
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
            <span key={area} className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-semibold">
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
              <div key={faq.q} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
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
            {isEs ? "¿Necesitas un techo de pladur en Valencia?" : "Need a drywall ceiling in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos por WhatsApp y te diremos qué se puede hacer, qué materiales hacen falta, cuánto puede costar y cuándo podemos ir."
              : "Send photos by WhatsApp and we will tell you what can be done, what materials are needed, how much it may cost and when we can come."}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 font-bold text-white shadow-lg transition hover:scale-105">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>

            <Link href={estimateHref} className="inline-flex items-center justify-center gap-2 rounded-xl border border-black bg-white px-6 py-4 font-bold text-black shadow-sm transition hover:scale-105">
              {isEs ? "Pedir presupuesto" : "Request estimate"}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}