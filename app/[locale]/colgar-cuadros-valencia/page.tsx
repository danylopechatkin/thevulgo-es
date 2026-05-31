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
    ? "Colgar Cuadros en Valencia | Instalación Segura y Nivelada | THEVULGO"
    : "Picture Hanging in Valencia | Safe and Level Installation | THEVULGO";

  const description = isEs
    ? "Servicio para colgar cuadros en Valencia. Instalación de cuadros, marcos, láminas, decoración de pared, espejos ligeros y fijación segura. Presupuesto por WhatsApp."
    : "Picture hanging service in Valencia. Installation of pictures, frames, prints, wall decor, light mirrors and secure fixing. Estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "colgar cuadros valencia",
          "colgar cuadro valencia",
          "instalar cuadros valencia",
          "montaje cuadros valencia",
          "fijar cuadros pared valencia",
          "colgar cuadros en pared valencia",
          "instalacion cuadros valencia",
          "manitas cuadros valencia",
          "colgar marcos valencia",
          "colgar laminas valencia",
          "decoracion pared valencia",
          "colgar espejo ligero valencia",
          "manitas valencia",
        ]
      : [
          "picture hanging valencia",
          "hang pictures valencia",
          "frame hanging valencia",
          "wall art installation valencia",
          "picture installation valencia",
          "wall decor installation valencia",
          "light mirror hanging valencia",
          "handyman picture hanging valencia",
          "handyman valencia",
        ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/colgar-cuadros-valencia`,
      languages: {
        es: `${baseUrl}/es/colgar-cuadros-valencia`,
        en: `${baseUrl}/en/colgar-cuadros-valencia`,
        "x-default": `${baseUrl}/es/colgar-cuadros-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/colgar-cuadros-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function ColgarCuadrosValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=handyman`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito colgar cuadros en Valencia. Quiero pedir presupuesto y puedo enviar fotos de los cuadros, pared y medidas."
      : "Hi, I need picture hanging in Valencia. I’d like to request an estimate and can send photos of the pictures, wall and measurements."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Manitas en Valencia" : "Handyman in Valencia",
      desc: isEs
        ? "Montaje, reparaciones, instalaciones y trabajos pequeños."
        : "Assembly, repairs, installations and small jobs.",
      href: `/${locale}/handyman-valencia`,
    },
    {
      title: isEs ? "Montaje de estanterías" : "Shelf assembly",
      desc: isEs
        ? "Estanterías, baldas, librerías y fijación segura a pared."
        : "Shelving units, shelves, bookcases and secure wall fixing.",
      href: `/${locale}/montaje-estanterias-valencia`,
    },
    {
      title: isEs ? "Fijación de muebles a pared" : "Wall furniture fixing",
      desc: isEs
        ? "Fijación segura para muebles altos, armarios y estanterías."
        : "Secure fixing for tall furniture, wardrobes and shelves.",
      href: `/${locale}/fijacion-muebles-pared-valencia`,
    },
    {
      title: isEs ? "Colgar TV" : "TV wall mounting",
      desc: isEs
        ? "TV en pared con soporte fijo, inclinable o articulado."
        : "Wall-mounted TV with fixed, tilting or full motion bracket.",
      href: `/${locale}/colgar-tv-valencia`,
    },
    {
      title: isEs ? "Montaje de TV" : "TV mounting",
      desc: isEs
        ? "Instalación de televisores en pared con acabado limpio."
        : "TV wall installation with a clean finish.",
      href: `/${locale}/montaje-tv-valencia`,
    },
    {
      title: isEs ? "Instalación de soporte TV" : "TV bracket installation",
      desc: isEs
        ? "Soportes fijos, inclinables y articulados para televisión."
        : "Fixed, tilting and full motion TV brackets.",
      href: `/${locale}/instalacion-soporte-tv-valencia`,
    },
  ];

  const prices = isEs
    ? [
        ["Colgar 1 cuadro pequeño", "desde 29 €"],
        ["Colgar varios cuadros", "desde 39 €"],
        ["Composición de cuadros", "desde 49 €"],
        ["Cuadro grande o pesado", "desde 49 €"],
        ["Espejo ligero / decoración", "según trabajo"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Hang 1 small picture", "from €29"],
        ["Hang several pictures", "from €39"],
        ["Picture wall composition", "from €49"],
        ["Large or heavy picture", "from €49"],
        ["Light mirror / decor", "by job"],
        ["Visit / inspection", "from €49"],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta colgar cuadros en Valencia?",
          a: "Depende del número de cuadros, tamaño, peso, tipo de pared, altura, composición y fijaciones necesarias. Un trabajo pequeño suele empezar desde 29–39 €.",
        },
        {
          q: "¿Podéis colgar varios cuadros alineados?",
          a: "Sí. Podemos colgar varios cuadros en línea, en composición, tipo galería o siguiendo una distribución concreta para que queden nivelados y proporcionados.",
        },
        {
          q: "¿Se pueden colgar cuadros en pared de pladur?",
          a: "Sí, pero hay que revisar peso, tipo de pladur y fijaciones. Para cuadros ligeros usamos soluciones adecuadas, y para piezas pesadas valoramos refuerzo o fijación especial.",
        },
        {
          q: "¿También colgáis espejos ligeros?",
          a: "Sí. Podemos colgar espejos ligeros, láminas, marcos, decoración de pared y pequeños elementos decorativos. Para espejos pesados es mejor enviar fotos y medidas.",
        },
        {
          q: "¿Puedo enviar fotos por WhatsApp?",
          a: "Sí. Envía fotos de los cuadros, pared, medidas aproximadas, altura deseada y si quieres una composición concreta. Así podemos darte una estimación más clara.",
        },
        {
          q: "¿En qué zonas trabajáis?",
          a: "Trabajamos en Valencia ciudad y zonas cercanas como Campanar, Ruzafa, Benimaclet, Patraix, Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera y Gandía.",
        },
      ]
    : [
        {
          q: "How much does picture hanging in Valencia cost?",
          a: "It depends on number of pictures, size, weight, wall type, height, layout and required fixings. A small job usually starts from €29–39.",
        },
        {
          q: "Can you hang several pictures aligned?",
          a: "Yes. We can hang several pictures in a line, as a gallery wall, in a composition or following a specific layout so they stay level and balanced.",
        },
        {
          q: "Can pictures be hung on drywall?",
          a: "Yes, but weight, drywall type and fixings must be checked. For light pictures we use suitable solutions, and for heavy pieces we assess reinforcement or special fixing.",
        },
        {
          q: "Do you also hang light mirrors?",
          a: "Yes. We can hang light mirrors, prints, frames, wall decor and small decorative items. For heavy mirrors, it is best to send photos and measurements.",
        },
        {
          q: "Can I send photos by WhatsApp?",
          a: "Yes. Send photos of the pictures, wall, approximate measurements, desired height and whether you want a specific composition. This helps us give a clearer estimate.",
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
        "@id": `${baseUrl}/${locale}/colgar-cuadros-valencia#service`,
        name: isEs
          ? "Colgar cuadros en Valencia"
          : "Picture hanging in Valencia",
        serviceType: isEs ? "Colgar cuadros" : "Picture hanging",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}/colgar-cuadros-valencia`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios para colgar cuadros en Valencia"
            : "Picture hanging services in Valencia",
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
              ? "Colgar cuadros Valencia"
              : "Picture hanging Valencia",
            item: `${baseUrl}/${locale}/colgar-cuadros-valencia`,
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
                ? "Colgar cuadros en Valencia con instalación segura, limpia y nivelada"
                : "Picture hanging in Valencia with safe, clean and level installation"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO ayuda a colgar cuadros en Valencia: cuadros pequeños y grandes, marcos, láminas, composiciones de pared, decoración y espejos ligeros. Trabajo limpio, fijación adecuada y presupuesto claro por WhatsApp."
                : "THEVULGO helps with picture hanging in Valencia: small and large pictures, frames, prints, wall compositions, decor and light mirrors. Clean work, suitable fixing and clear estimate by WhatsApp."}
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
                    ? "Envía fotos, medidas y ubicación."
                    : "Send photos, measurements and location.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Fijación segura" : "Safe fixing",
                  text: isEs
                    ? "Revisamos pared, peso y anclajes."
                    : "We check wall, weight and anchors.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Nivelado limpio" : "Clean leveling",
                  text: isEs
                    ? "Cuadros alineados y acabado ordenado."
                    : "Aligned pictures and neat finish.",
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
            ? "Servicios relacionados con fijación en pared"
            : "Related wall fixing services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Estas páginas internas refuerzan el SEO local y conectan colgar cuadros con manitas, fijación de muebles, estanterías, TV y otros trabajos de pared."
            : "These internal pages strengthen local SEO and connect picture hanging with handyman, furniture fixing, shelves, TV and other wall jobs."}
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
                  ? "¿Qué revisamos antes de colgar cuadros?"
                  : "What do we check before hanging pictures?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Antes de colgar cuadros revisamos el peso, tamaño, tipo de pared, altura deseada, composición, distancia entre piezas y tipo de fijación. Esto ayuda a evitar agujeros innecesarios, cuadros torcidos o fijaciones débiles."
                  : "Before hanging pictures, we check weight, size, wall type, desired height, layout, distance between pieces and fixing type. This helps avoid unnecessary holes, crooked pictures or weak fixings."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Trabajamos con cuadros, marcos, láminas, decoración de pared, composiciones tipo galería y espejos ligeros para viviendas, habitaciones, apartamentos Airbnb, oficinas, locales y pequeños negocios en Valencia."
                  : "We work with pictures, frames, prints, wall decor, gallery wall layouts and light mirrors for homes, rooms, Airbnb apartments, offices, commercial spaces and small businesses in Valencia."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Cuadros y marcos" : "Pictures and frames",
                  isEs ? "Láminas decorativas" : "Decorative prints",
                  isEs ? "Composición de pared" : "Gallery wall layout",
                  isEs ? "Pared de ladrillo o pladur" : "Brick or drywall wall",
                  isEs ? "Espejos ligeros" : "Light mirrors",
                  isEs ? "Nivelación y medidas" : "Leveling and measuring",
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
                  ? "El precio final depende del número de piezas, tamaño, peso, tipo de pared, altura, composición, fijaciones y tiempo necesario."
                  : "Final price depends on number of pieces, size, weight, wall type, height, layout, fixings and time required."}
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
                ? "Muestra cuadros, pared y medidas."
                : "Show pictures, wall and measurements.",
            ],
            [
              isEs ? "2. Revisamos" : "2. We check",
              isEs
                ? "Peso, pared, altura y composición."
                : "Weight, wall, height and layout.",
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
                ? "Medimos, fijamos y nivelamos."
                : "We measure, fix and level.",
            ],
            [
              isEs ? "5. Revisión final" : "5. Final check",
              isEs
                ? "Comprobamos alineación y acabado."
                : "We check alignment and finish.",
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
                  ? "Colgar cuadros parece sencillo, pero una mala medida puede dejar piezas torcidas, agujeros mal colocados o una composición desequilibrada. Cuidamos la altura, nivelación, fijación y acabado visual."
                  : "Hanging pictures can look simple, but poor measuring can leave pieces crooked, holes misplaced or a layout unbalanced. We take care of height, leveling, fixing and visual finish."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Hammer, isEs ? "Montaje preciso" : "Precise mounting"],
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
              ? "¿Necesitas colgar cuadros en Valencia?"
              : "Need picture hanging in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos de los cuadros, pared, medidas y composición por WhatsApp. Te diremos qué se puede hacer, cuánto puede costar y cuándo podemos ir."
              : "Send photos of the pictures, wall, measurements and layout by WhatsApp. We will tell you what can be done, how much it may cost and when we can come."}
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