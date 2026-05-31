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
    ? "Home Cinema en Valencia | Proyector, Pantalla, TV y Sonido | THEVULGO"
    : "Home Cinema in Valencia | Projector, Screen, TV & Sound | THEVULGO";

  const description = isEs
    ? "Instalación de home cinema en Valencia. Proyectores, pantallas, TV en pared, soportes, soundbar, cableado limpio y ajuste básico. Presupuesto por WhatsApp."
    : "Home cinema installation in Valencia. Projectors, screens, wall-mounted TVs, brackets, soundbar, clean cabling and basic setup. Estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "home cinema valencia",
          "instalacion home cinema valencia",
          "instalación home cinema valencia",
          "home theater valencia",
          "instalacion proyector valencia",
          "instalacion proyectores valencia",
          "instalar proyector techo valencia",
          "montaje proyector valencia",
          "instalacion pantalla proyector valencia",
          "montaje tv valencia",
          "instalacion soporte tv valencia",
          "instalacion soundbar valencia",
          "cableado limpio tv valencia",
        ]
      : [
          "home cinema valencia",
          "home cinema installation valencia",
          "home theater valencia",
          "home theater installation valencia",
          "projector installation valencia",
          "ceiling projector installation valencia",
          "projector screen installation valencia",
          "tv mounting valencia",
          "tv bracket installation valencia",
          "soundbar installation valencia",
          "clean cabling tv valencia",
        ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/home-cinema-valencia`,
      languages: {
        es: `${baseUrl}/es/home-cinema-valencia`,
        en: `${baseUrl}/en/home-cinema-valencia`,
        "x-default": `${baseUrl}/es/home-cinema-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/home-cinema-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function HomeCinemaValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=tv`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito instalación de home cinema en Valencia. Quiero pedir presupuesto y puedo enviar fotos del espacio, TV, proyector, pantalla o soundbar."
      : "Hi, I need home cinema installation in Valencia. I’d like to request an estimate and can send photos of the space, TV, projector, screen or soundbar."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Instalación de proyectores" : "Projector installation",
      desc: isEs
        ? "Proyectores en techo o pared, soporte, pantalla y ajustes."
        : "Ceiling or wall projectors, bracket, screen and setup.",
      href: `/${locale}/instalacion-proyectores-valencia`,
    },
    {
      title: isEs ? "Instalar proyector en techo" : "Ceiling projector installation",
      desc: isEs
        ? "Fijación segura, alineación, altura y distancia de proyección."
        : "Secure fixing, alignment, height and projection distance.",
      href: `/${locale}/instalar-proyector-techo-valencia`,
    },
    {
      title: isEs ? "Montaje de proyector" : "Projector mounting",
      desc: isEs
        ? "Montaje de soporte, orientación, enfoque y cableado ordenado."
        : "Bracket mounting, orientation, focus and tidy cabling.",
      href: `/${locale}/montaje-proyector-valencia`,
    },
    {
      title: isEs ? "Montaje de TV" : "TV mounting",
      desc: isEs
        ? "TV en pared, soporte fijo o articulado y cableado limpio."
        : "Wall-mounted TV, fixed or articulated bracket and clean cabling.",
      href: `/${locale}/montaje-tv-valencia`,
    },
    {
      title: isEs ? "Instalación de soporte TV" : "TV bracket installation",
      desc: isEs
        ? "Soportes de TV fijos, inclinables o articulados."
        : "Fixed, tilting or articulated TV brackets.",
      href: `/${locale}/instalacion-soporte-tv-valencia`,
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
        ["Instalación básica home cinema", "desde 79 €"],
        ["Instalación de proyector", "desde 59 €"],
        ["Proyector en techo con soporte", "desde 79 €"],
        ["Instalación de pantalla", "desde 49 €"],
        ["Montaje de TV / soundbar", "desde 49 €"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Basic home cinema installation", "from €79"],
        ["Projector installation", "from €59"],
        ["Ceiling projector with bracket", "from €79"],
        ["Screen installation", "from €49"],
        ["TV / soundbar mounting", "from €49"],
        ["Visit / inspection", "from €49"],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta instalar un home cinema en Valencia?",
          a: "Depende de si incluye proyector, pantalla, TV, soundbar, soportes, cableado, altura, distancia de proyección y ajustes. Una instalación básica suele empezar desde 79 €.",
        },
        {
          q: "¿Instaláis proyectores y pantallas?",
          a: "Sí. Podemos instalar proyectores en techo o pared, pantallas manuales, fijas o enrollables, revisar medidas, altura, alineación y soporte.",
        },
        {
          q: "¿También montáis TV y soundbar?",
          a: "Sí. Podemos montar una TV en pared, instalar soporte fijo o articulado, colocar soundbar y organizar cables para un acabado más limpio.",
        },
        {
          q: "¿Podéis ocultar los cables?",
          a: "Podemos organizar cables, instalar canaletas y buscar una solución visual limpia. Ocultar cables completamente depende del tipo de pared, techo e instalación existente.",
        },
        {
          q: "¿Trabajáis con apartamentos Airbnb?",
          a: "Sí. Instalamos soluciones de TV, proyector y home cinema para viviendas, apartamentos turísticos, oficinas, locales y pequeños negocios.",
        },
        {
          q: "¿Puedo enviar fotos por WhatsApp?",
          a: "Sí. Envía fotos del espacio, TV, proyector, pantalla, soporte, pared, techo y distancia aproximada. Así podemos darte una estimación más clara.",
        },
      ]
    : [
        {
          q: "How much does home cinema installation in Valencia cost?",
          a: "It depends on whether it includes projector, screen, TV, soundbar, brackets, cabling, height, projection distance and setup. A basic installation usually starts from €79.",
        },
        {
          q: "Do you install projectors and screens?",
          a: "Yes. We can install projectors on ceilings or walls, manual, fixed or roll-up screens, checking measurements, height, alignment and bracket.",
        },
        {
          q: "Do you also mount TVs and soundbars?",
          a: "Yes. We can mount a TV on the wall, install a fixed or articulated bracket, place a soundbar and organize cables for a cleaner finish.",
        },
        {
          q: "Can you hide the cables?",
          a: "We can organize cables, install cable channels and find a clean visible solution. Full cable concealment depends on wall type, ceiling and existing installation.",
        },
        {
          q: "Do you work with Airbnb apartments?",
          a: "Yes. We install TV, projector and home cinema solutions for homes, tourist apartments, offices, commercial spaces and small businesses.",
        },
        {
          q: "Can I send photos by WhatsApp?",
          a: "Yes. Send photos of the space, TV, projector, screen, bracket, wall, ceiling and approximate distance. This helps us give a clearer estimate.",
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
        "@id": `${baseUrl}/${locale}/home-cinema-valencia#service`,
        name: isEs
          ? "Instalación de home cinema en Valencia"
          : "Home cinema installation in Valencia",
        serviceType: isEs
          ? "Instalación de home cinema"
          : "Home cinema installation",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}/home-cinema-valencia`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de home cinema en Valencia"
            : "Home cinema services in Valencia",
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
            name: isEs ? "Home cinema Valencia" : "Home cinema Valencia",
            item: `${baseUrl}/${locale}/home-cinema-valencia`,
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
                ? "Home cinema en Valencia con proyector, pantalla, TV y sonido bien instalado"
                : "Home cinema in Valencia with projector, screen, TV and sound properly installed"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO instala soluciones de home cinema en Valencia: proyectores en techo o pared, pantallas, TV en pared, soportes, soundbar, cableado más limpio y ajustes básicos para dejar tu espacio listo para ver películas, series o presentaciones."
                : "THEVULGO installs home cinema solutions in Valencia: ceiling or wall projectors, screens, wall-mounted TVs, brackets, soundbars, cleaner cabling and basic setup to make your space ready for movies, series or presentations."}
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
                    ? "Envía fotos del espacio y equipos."
                    : "Send photos of the space and equipment.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Instalación segura" : "Safe installation",
                  text: isEs
                    ? "Revisamos pared, techo, soportes y peso."
                    : "We check wall, ceiling, brackets and weight.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Cableado más ordenado y ajuste final."
                    : "Tidier cabling and final setup.",
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
            ? "Servicios relacionados con home cinema"
            : "Related home cinema services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Estas páginas internas ayudan a Google a entender que THEVULGO cubre instalación de proyectores, pantallas, TV, soportes, soundbar y soluciones audiovisuales en Valencia."
            : "These internal pages help Google understand that THEVULGO covers projector, screen, TV, bracket, soundbar and audiovisual installation services in Valencia."}
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
                  ? "¿Qué incluye una instalación de home cinema?"
                  : "What does a home cinema installation include?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Una instalación de home cinema puede incluir proyector, pantalla, TV en pared, soporte, soundbar, altavoces básicos, canaletas, organización de cables y ajuste inicial de imagen. Antes de empezar revisamos medidas, distancia, altura, tipo de pared o techo y ubicación de enchufes."
                  : "A home cinema installation can include projector, screen, wall-mounted TV, bracket, soundbar, basic speakers, cable channels, cable organization and initial image setup. Before starting, we check measurements, distance, height, wall or ceiling type and socket location."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Trabajamos en salones, dormitorios, oficinas, aulas, apartamentos Airbnb, locales y pequeños negocios en Valencia. El objetivo es dejar una instalación estable, cómoda de usar y con un acabado visual más limpio."
                  : "We work in living rooms, bedrooms, offices, classrooms, Airbnb apartments, commercial spaces and small businesses in Valencia. The goal is to leave a stable installation that is comfortable to use and visually cleaner."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Proyector en techo" : "Ceiling projector",
                  isEs ? "Pantalla de proyector" : "Projector screen",
                  isEs ? "TV en pared" : "Wall-mounted TV",
                  isEs ? "Soundbar" : "Soundbar",
                  isEs ? "Cableado limpio" : "Clean cabling",
                  isEs ? "Ajuste básico" : "Basic setup",
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
                  ? "El precio final depende de equipos, soportes, altura, tipo de pared o techo, pantalla, cableado, dificultad y tiempo necesario."
                  : "Final price depends on equipment, brackets, height, wall or ceiling type, screen, cabling, difficulty and time required."}
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
                ? "Muestra espacio, TV, proyector y pantalla."
                : "Show space, TV, projector and screen.",
            ],
            [
              isEs ? "2. Medidas" : "2. Measurements",
              isEs
                ? "Indica distancia, altura y ubicación."
                : "Share distance, height and location.",
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
                ? "Montamos soportes, pantalla y equipos."
                : "We mount brackets, screen and equipment.",
            ],
            [
              isEs ? "5. Ajuste final" : "5. Final setup",
              isEs
                ? "Comprobamos imagen, sonido y limpieza."
                : "We check image, sound and finish.",
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
                  ? "Un home cinema mal instalado puede tener cables visibles, imagen descentrada, soportes inseguros o equipos incómodos de usar. Cuidamos la fijación, la alineación, el orden y el acabado final."
                  : "A poorly installed home cinema can have visible messy cables, off-center image, unsafe brackets or equipment that is uncomfortable to use. We take care of fixing, alignment, organization and final finish."}
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
              ? "¿Necesitas instalar un home cinema en Valencia?"
              : "Need home cinema installation in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos del espacio, proyector, TV, pantalla, soporte o soundbar por WhatsApp. Te diremos qué se puede hacer, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the space, projector, TV, screen, bracket or soundbar by WhatsApp. We will tell you what can be done, how much it may cost and when we can come."}
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