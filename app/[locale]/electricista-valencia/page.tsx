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
    ? "Electricista en Valencia | Enchufes, Interruptores y Lámparas | THEVULGO"
    : "Electrician in Valencia | Outlets, Switches & Lights | THEVULGO";

  const description = isEs
    ? "Electricista en Valencia para cambio de enchufes, interruptores, lámparas, apliques, tiras LED, extractores y pequeñas instalaciones eléctricas. Presupuesto por WhatsApp."
    : "Electrician in Valencia for outlet replacement, switches, lights, wall lamps, LED strips, extractor fans and small electrical jobs. Estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "electricista valencia",
          "electricista en valencia",
          "electricista domicilio valencia",
          "electricista urgente valencia",
          "electricista cerca de mi valencia",
          "cambio enchufe valencia",
          "cambio interruptor valencia",
          "instalacion lampara valencia",
          "instalacion lamparas valencia",
          "instalacion tira led valencia",
          "montaje electrico basico valencia",
          "electricista barato valencia",
          "pequeños trabajos electricos valencia",
        ]
      : [
          "electrician valencia",
          "electrician in valencia",
          "home electrician valencia",
          "urgent electrician valencia",
          "outlet replacement valencia",
          "switch replacement valencia",
          "light installation valencia",
          "led strip installation valencia",
          "small electrical jobs valencia",
          "basic electrical work valencia",
        ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/electricista-valencia`,
      languages: {
        es: `${baseUrl}/es/electricista-valencia`,
        en: `${baseUrl}/en/electricista-valencia`,
        "x-default": `${baseUrl}/es/electricista-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/electricista-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function ElectricistaValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=electrical`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito un electricista en Valencia. Quiero pedir presupuesto para un enchufe, interruptor, lámpara o pequeño trabajo eléctrico."
      : "Hi, I need an electrician in Valencia. I’d like to request an estimate for an outlet, switch, light or small electrical job."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Cambio de enchufe" : "Outlet replacement",
      desc: isEs
        ? "Sustitución de enchufes dañados, antiguos o sueltos."
        : "Replacement of damaged, old or loose outlets.",
      href: `/${locale}/cambio-enchufe-valencia`,
    },
    {
      title: isEs ? "Cambio de interruptor" : "Switch replacement",
      desc: isEs
        ? "Interruptores de luz, mecanismos, tapas y pequeños ajustes."
        : "Light switches, mechanisms, covers and small adjustments.",
      href: `/${locale}/cambio-interruptor-valencia`,
    },
    {
      title: isEs ? "Instalación de lámparas" : "Light installation",
      desc: isEs
        ? "Lámparas de techo, apliques, plafones y luminarias básicas."
        : "Ceiling lights, wall lights, ceiling fixtures and basic lamps.",
      href: `/${locale}/instalacion-lampara-valencia`,
    },
    {
      title: isEs ? "Montaje eléctrico básico" : "Basic electrical work",
      desc: isEs
        ? "Pequeños trabajos eléctricos no complejos para vivienda y local."
        : "Small non-complex electrical jobs for homes and businesses.",
      href: `/${locale}/montaje-electrico-basico-valencia`,
    },
    {
      title: isEs ? "Instalación de tira LED" : "LED strip installation",
      desc: isEs
        ? "Tiras LED, iluminación decorativa y pequeños ajustes de luz."
        : "LED strips, decorative lighting and small lighting adjustments.",
      href: `/${locale}/instalacion-tira-led-valencia`,
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
        ["Cambio de enchufe", "desde 35 €"],
        ["Cambio de interruptor", "desde 35 €"],
        ["Instalación de lámpara", "desde 39 €"],
        ["Instalación de aplique", "desde 39 €"],
        ["Instalación de tira LED", "según trabajo"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Outlet replacement", "from €35"],
        ["Switch replacement", "from €35"],
        ["Light installation", "from €39"],
        ["Wall light installation", "from €39"],
        ["LED strip installation", "by job"],
        ["Visit / inspection", "from €49"],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta un electricista en Valencia?",
          a: "Depende del trabajo, materiales, tiempo, acceso y dificultad. Los trabajos pequeños como cambio de enchufe o interruptor suelen empezar desde 35 €, y una visita o revisión desde 49 €.",
        },
        {
          q: "¿Hacéis trabajos eléctricos urgentes?",
          a: "Cuando hay disponibilidad, sí. Para trabajos urgentes, envía fotos, ubicación y una descripción clara por WhatsApp para revisar si podemos ayudarte rápido.",
        },
        {
          q: "¿Cambiáis enchufes e interruptores?",
          a: "Sí. Podemos sustituir enchufes, interruptores, tapas, mecanismos dañados o antiguos y pequeños elementos eléctricos no complejos.",
        },
        {
          q: "¿Instaláis lámparas de techo y apliques?",
          a: "Sí. Instalamos lámparas de techo, plafones, apliques de pared y luminarias básicas, revisando fijación, altura y conexión.",
        },
        {
          q: "¿Puedo enviar fotos por WhatsApp?",
          a: "Sí. Lo mejor es enviar fotos del enchufe, interruptor, lámpara, cuadro o zona de trabajo. Así podemos darte una estimación más clara.",
        },
        {
          q: "¿En qué zonas trabajáis?",
          a: "Trabajamos en Valencia ciudad y zonas cercanas como Campanar, Ruzafa, Benimaclet, Patraix, Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera y Gandía.",
        },
      ]
    : [
        {
          q: "How much does an electrician in Valencia cost?",
          a: "It depends on the job, materials, time, access and difficulty. Small jobs like outlet or switch replacement usually start from €35, and a visit or inspection from €49.",
        },
        {
          q: "Do you do urgent electrical jobs?",
          a: "When availability allows, yes. For urgent jobs, send photos, location and a clear description by WhatsApp so we can check if we can help quickly.",
        },
        {
          q: "Do you replace outlets and switches?",
          a: "Yes. We can replace outlets, switches, covers, damaged or old mechanisms and small non-complex electrical elements.",
        },
        {
          q: "Do you install ceiling lights and wall lights?",
          a: "Yes. We install ceiling lights, ceiling fixtures, wall lights and basic lamps, checking fixing, height and connection.",
        },
        {
          q: "Can I send photos by WhatsApp?",
          a: "Yes. It is best to send photos of the outlet, switch, light, panel or work area. This helps us give a clearer estimate.",
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
        "@id": `${baseUrl}/${locale}/electricista-valencia#service`,
        name: isEs ? "Electricista en Valencia" : "Electrician in Valencia",
        serviceType: isEs
          ? "Servicios eléctricos básicos"
          : "Basic electrical services",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}/electricista-valencia`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de electricista en Valencia"
            : "Electrician services in Valencia",
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
            name: isEs ? "Electricista Valencia" : "Electrician Valencia",
            item: `${baseUrl}/${locale}/electricista-valencia`,
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
                ? "Electricista en Valencia para enchufes, interruptores, lámparas y pequeños trabajos eléctricos"
                : "Electrician in Valencia for outlets, switches, lights and small electrical jobs"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO ayuda con trabajos eléctricos básicos en Valencia: cambio de enchufes, interruptores, instalación de lámparas, apliques, tiras LED, extractores y pequeños ajustes eléctricos. Trabajo limpio, respuesta rápida y presupuesto claro por WhatsApp."
                : "THEVULGO helps with basic electrical work in Valencia: outlet replacement, switches, light installation, wall lights, LED strips, extractor fans and small electrical adjustments. Clean work, fast response and clear estimate by WhatsApp."}
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
                    ? "Envía fotos y recibe una estimación clara."
                    : "Send photos and get a clear estimate.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Trabajo seguro" : "Safe work",
                  text: isEs
                    ? "Revisamos conexión, estado y materiales."
                    : "We check connection, condition and materials.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Instalación ordenada y sin sorpresas."
                    : "Neat installation with no surprises.",
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
          {isEs ? "Servicios eléctricos principales" : "Main electrical services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Estas páginas internas ayudan a Google a entender la estructura del sitio y ayudan al cliente a encontrar exactamente el trabajo eléctrico que necesita."
            : "These internal pages help Google understand the site structure and help the client find the exact electrical job they need."}
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
                  ? "¿Qué tipo de trabajos eléctricos hacemos?"
                  : "What kind of electrical jobs do we do?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Realizamos pequeños trabajos eléctricos no complejos para viviendas, habitaciones, apartamentos Airbnb, oficinas, locales y pequeños negocios en Valencia. Antes de empezar revisamos el estado del punto eléctrico, materiales necesarios, acceso y solución más adecuada."
                  : "We carry out small non-complex electrical jobs for homes, rooms, Airbnb apartments, offices, commercial spaces and small businesses in Valencia. Before starting, we check the electrical point condition, required materials, access and the most suitable solution."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Podemos ayudarte con enchufes, interruptores, lámparas, apliques, plafones, tiras LED, extractores, tapas, mecanismos y pequeños ajustes eléctricos del día a día."
                  : "We can help with outlets, switches, lights, wall lights, ceiling fixtures, LED strips, extractor fans, covers, mechanisms and everyday small electrical adjustments."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Cambio de enchufes" : "Outlet replacement",
                  isEs ? "Cambio de interruptores" : "Switch replacement",
                  isEs ? "Instalación de lámparas" : "Light installation",
                  isEs ? "Apliques y plafones" : "Wall lights and fixtures",
                  isEs ? "Tiras LED" : "LED strips",
                  isEs ? "Pequeños ajustes eléctricos" : "Small electrical adjustments",
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
                  ? "El precio final depende del trabajo, materiales, acceso, estado de la instalación, dificultad y tiempo necesario."
                  : "Final price depends on the job, materials, access, installation condition, difficulty and time required."}
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
                ? "Muestra enchufe, interruptor o lámpara."
                : "Show outlet, switch or light.",
            ],
            [
              isEs ? "2. Explica el problema" : "2. Explain the issue",
              isEs
                ? "Indica qué ocurre y dónde está."
                : "Tell us what happens and where it is.",
            ],
            [
              isEs ? "3. Estimación" : "3. Estimate",
              isEs
                ? "Te damos precio antes de empezar."
                : "We give the price before starting.",
            ],
            [
              isEs ? "4. Trabajo limpio" : "4. Clean work",
              isEs
                ? "Realizamos el cambio o instalación."
                : "We complete replacement or installation.",
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
                  ? "En electricidad básica no se trata solo de cambiar una pieza. Revisamos estado, conexión, fijación, materiales y funcionamiento final para evitar sorpresas y dejar un acabado limpio."
                  : "Basic electrical work is not just about replacing a part. We check condition, connection, fixing, materials and final function to avoid surprises and leave a clean finish."}
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
              ? "¿Necesitas un electricista en Valencia?"
              : "Need an electrician in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos por WhatsApp y te diremos qué se puede hacer, qué materiales pueden hacer falta, cuánto puede costar y cuándo podemos ir."
              : "Send photos by WhatsApp and we will tell you what can be done, what materials may be needed, how much it may cost and when we can come."}
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