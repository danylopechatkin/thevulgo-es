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
    ? "Instalar Lámpara en Valencia | Techo, Apliques y Plafones | THEVULGO"
    : "Light Installation in Valencia | Ceiling Lights, Wall Lights & Fixtures | THEVULGO";

  const description = isEs
    ? "Servicio para instalar lámpara en Valencia. Instalación de lámparas de techo, apliques, plafones, colgantes, tiras LED y pequeños trabajos eléctricos. Presupuesto por WhatsApp."
    : "Light installation service in Valencia. Ceiling lights, wall lights, fixtures, pendant lights, LED strips and small electrical jobs. Estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "instalar lampara valencia",
          "instalar lámpara valencia",
          "instalacion lampara valencia",
          "instalación lámpara valencia",
          "instalar lampara techo valencia",
          "instalacion lamparas valencia",
          "instalar aplique pared valencia",
          "instalacion plafon valencia",
          "cambio lampara techo valencia",
          "electricista lamparas valencia",
          "electricista valencia",
          "manitas lamparas valencia",
        ]
      : [
          "install light valencia",
          "light installation valencia",
          "ceiling light installation valencia",
          "wall light installation valencia",
          "pendant light installation valencia",
          "ceiling fixture installation valencia",
          "electrician light installation valencia",
          "handyman lights valencia",
        ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/instalar-lampara-valencia`,
      languages: {
        es: `${baseUrl}/es/instalar-lampara-valencia`,
        en: `${baseUrl}/en/instalar-lampara-valencia`,
        "x-default": `${baseUrl}/es/instalar-lampara-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/instalar-lampara-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function InstalarLamparaValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=electrical`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito instalar una lámpara en Valencia. Quiero pedir presupuesto y puedo enviar fotos de la lámpara, techo o punto de luz."
      : "Hi, I need to install a light in Valencia. I’d like to request an estimate and can send photos of the light, ceiling or electrical point."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Instalación de lámparas" : "Light installation",
      desc: isEs
        ? "Lámparas de techo, colgantes, plafones y luminarias básicas."
        : "Ceiling lights, pendant lights, fixtures and basic lamps.",
      href: `/${locale}/instalacion-lampara-valencia`,
    },
    {
      title: isEs ? "Instalación de apliques" : "Wall light installation",
      desc: isEs
        ? "Apliques de pared, luces decorativas y puntos de luz."
        : "Wall lights, decorative lights and light points.",
      href: `/${locale}/instalacion-apliques-pared-valencia`,
    },
    {
      title: isEs ? "Cambio de lámpara de techo" : "Ceiling light replacement",
      desc: isEs
        ? "Sustitución de lámparas antiguas por nuevas."
        : "Replacement of old ceiling lights with new ones.",
      href: `/${locale}/cambio-lampara-techo-valencia`,
    },
    {
      title: isEs ? "Instalación de tira LED" : "LED strip installation",
      desc: isEs
        ? "Tiras LED, iluminación decorativa y pequeños ajustes."
        : "LED strips, decorative lighting and small adjustments.",
      href: `/${locale}/instalacion-tira-led-valencia`,
    },
    {
      title: isEs ? "Electricista en Valencia" : "Electrician in Valencia",
      desc: isEs
        ? "Enchufes, interruptores, lámparas y trabajos eléctricos básicos."
        : "Outlets, switches, lights and basic electrical jobs.",
      href: `/${locale}/electricista-valencia`,
    },
    {
      title: isEs ? "Manitas en Valencia" : "Handyman in Valencia",
      desc: isEs
        ? "Montaje, reparaciones, instalaciones y mantenimiento del hogar."
        : "Assembly, repairs, installations and home maintenance.",
      href: `/${locale}/handyman-valencia`,
    },
  ];

  const prices = isEs
    ? [
        ["Instalar lámpara sencilla", "desde 39 €"],
        ["Instalar plafón", "desde 39 €"],
        ["Instalar aplique de pared", "desde 39 €"],
        ["Cambiar lámpara de techo", "desde 39 €"],
        ["Instalar lámpara colgante", "desde 49 €"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Simple light installation", "from €39"],
        ["Ceiling fixture installation", "from €39"],
        ["Wall light installation", "from €39"],
        ["Ceiling light replacement", "from €39"],
        ["Pendant light installation", "from €49"],
        ["Visit / inspection", "from €49"],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta instalar una lámpara en Valencia?",
          a: "Depende del tipo de lámpara, altura, peso, estado del punto de luz, fijación, materiales y dificultad. Una instalación sencilla suele empezar desde 39 €.",
        },
        {
          q: "¿Instaláis lámparas de techo?",
          a: "Sí. Instalamos lámparas de techo, plafones, colgantes, luminarias básicas y sustitución de lámparas antiguas por nuevas.",
        },
        {
          q: "¿Instaláis apliques de pared?",
          a: "Sí. Podemos instalar apliques de pared, luces decorativas, pequeños puntos de luz y revisar la fijación según el tipo de pared.",
        },
        {
          q: "¿Puedo enviar fotos por WhatsApp?",
          a: "Sí. Envía fotos de la lámpara, techo, punto de luz, altura y zona de instalación. Así podemos darte una estimación más clara.",
        },
        {
          q: "¿Necesito comprar materiales antes?",
          a: "Normalmente necesitas tener la lámpara. Según el caso pueden hacer falta tacos, tornillos, clemas, regleta, soporte o pequeñas piezas de fijación.",
        },
        {
          q: "¿En qué zonas trabajáis?",
          a: "Trabajamos en Valencia ciudad y zonas cercanas como Campanar, Ruzafa, Benimaclet, Patraix, Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera y Gandía.",
        },
      ]
    : [
        {
          q: "How much does light installation in Valencia cost?",
          a: "It depends on light type, height, weight, condition of the light point, fixing, materials and difficulty. A simple installation usually starts from €39.",
        },
        {
          q: "Do you install ceiling lights?",
          a: "Yes. We install ceiling lights, fixtures, pendant lights, basic lamps and replace old lights with new ones.",
        },
        {
          q: "Do you install wall lights?",
          a: "Yes. We can install wall lights, decorative lights, small light points and check fixing depending on wall type.",
        },
        {
          q: "Can I send photos by WhatsApp?",
          a: "Yes. Send photos of the light, ceiling, light point, height and installation area. This helps us give a clearer estimate.",
        },
        {
          q: "Do I need to buy materials first?",
          a: "Usually you need to have the light. Depending on the case, anchors, screws, connectors, terminal blocks, brackets or small fixing parts may be needed.",
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
        "@id": `${baseUrl}/${locale}/instalar-lampara-valencia#service`,
        name: isEs
          ? "Instalar lámpara en Valencia"
          : "Light installation in Valencia",
        serviceType: isEs
          ? "Instalación de lámparas"
          : "Light installation",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}/instalar-lampara-valencia`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios para instalar lámparas en Valencia"
            : "Light installation services in Valencia",
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
              ? "Instalar lámpara Valencia"
              : "Light installation Valencia",
            item: `${baseUrl}/${locale}/instalar-lampara-valencia`,
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
                ? "Instalar lámpara en Valencia con fijación segura y acabado limpio"
                : "Light installation in Valencia with safe fixing and clean finish"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO instala lámparas en Valencia: lámparas de techo, plafones, apliques de pared, lámparas colgantes, tiras LED y sustitución de luminarias antiguas. Trabajo limpio, respuesta rápida y presupuesto claro por WhatsApp."
                : "THEVULGO installs lights in Valencia: ceiling lights, ceiling fixtures, wall lights, pendant lights, LED strips and replacement of old fixtures. Clean work, fast response and clear estimate by WhatsApp."}
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
                    ? "Envía fotos de lámpara, techo y punto de luz."
                    : "Send photos of the light, ceiling and light point.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Instalación segura" : "Safe installation",
                  text: isEs
                    ? "Revisamos fijación, peso y conexión."
                    : "We check fixing, weight and connection.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Lámpara centrada, estable y funcionando."
                    : "Light centered, stable and working.",
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
            ? "Servicios relacionados con lámparas e iluminación"
            : "Related light and electrical services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Estas páginas internas ayudan a reforzar el SEO local y conectan la instalación de lámparas con electricista, apliques, tiras LED y pequeños trabajos eléctricos."
            : "These internal pages strengthen local SEO and connect light installation with electrician, wall lights, LED strips and small electrical jobs."}
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
                  ? "¿Qué revisamos antes de instalar una lámpara?"
                  : "What do we check before installing a light?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Antes de instalar una lámpara revisamos el punto de luz, el tipo de techo o pared, peso de la lámpara, fijación, altura, conexión y materiales necesarios. Así evitamos instalaciones inestables, lámparas torcidas o conexiones mal preparadas."
                  : "Before installing a light, we check the light point, ceiling or wall type, light weight, fixing, height, connection and required materials. This helps avoid unstable installations, crooked lights or poorly prepared connections."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Trabajamos con lámparas de techo, plafones, lámparas colgantes, apliques de pared, luces de baño, tiras LED y pequeños cambios de iluminación para viviendas, apartamentos Airbnb, oficinas y locales en Valencia."
                  : "We work with ceiling lights, fixtures, pendant lights, wall lights, bathroom lights, LED strips and small lighting changes for homes, Airbnb apartments, offices and commercial spaces in Valencia."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Lámparas de techo" : "Ceiling lights",
                  isEs ? "Plafones" : "Ceiling fixtures",
                  isEs ? "Apliques de pared" : "Wall lights",
                  isEs ? "Lámparas colgantes" : "Pendant lights",
                  isEs ? "Tiras LED" : "LED strips",
                  isEs ? "Cambio de luminaria" : "Light replacement",
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
                  ? "El precio final depende del tipo de lámpara, altura, peso, fijación, materiales, acceso, conexión y dificultad."
                  : "Final price depends on light type, height, weight, fixing, materials, access, connection and difficulty."}
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
                ? "Muestra lámpara, techo y punto de luz."
                : "Show light, ceiling and light point.",
            ],
            [
              isEs ? "2. Revisamos" : "2. We check",
              isEs
                ? "Peso, fijación, altura y conexión."
                : "Weight, fixing, height and connection.",
            ],
            [
              isEs ? "3. Estimación" : "3. Estimate",
              isEs
                ? "Te damos precio antes de empezar."
                : "We give the price before starting.",
            ],
            [
              isEs ? "4. Instalación" : "4. Installation",
              isEs
                ? "Fijamos, conectamos y ajustamos."
                : "We fix, connect and adjust.",
            ],
            [
              isEs ? "5. Revisión final" : "5. Final check",
              isEs
                ? "Comprobamos funcionamiento y acabado."
                : "We check function and finish.",
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
                  ? "Una lámpara mal instalada puede quedar torcida, inestable o con una conexión incorrecta. Cuidamos la fijación, el punto de luz, la altura, el acabado y el funcionamiento final."
                  : "A poorly installed light can be crooked, unstable or incorrectly connected. We take care of fixing, the light point, height, finish and final function."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Hammer, isEs ? "Montaje práctico" : "Practical installation"],
                [Home, isEs ? "Casa y Airbnb" : "Homes and Airbnb"],
                [Zap, isEs ? "Respuesta rápida" : "Fast response"],
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
              ? "¿Necesitas instalar una lámpara en Valencia?"
              : "Need light installation in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos de la lámpara, techo, punto de luz y zona de instalación por WhatsApp. Te diremos qué se puede hacer, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the light, ceiling, light point and installation area by WhatsApp. We will tell you what can be done, how much it may cost and when we can come."}
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