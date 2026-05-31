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
    ? "Montaje de Muebles en Valencia | IKEA, Armarios, Camas y Estanterías | THEVULGO"
    : "Furniture Assembly in Valencia | IKEA, Wardrobes, Beds & Shelves | THEVULGO";

  const description = isEs
    ? "Montaje de muebles en Valencia. Armarios, camas, cómodas, mesas, escritorios, estanterías, muebles IKEA y fijación segura. Presupuesto por WhatsApp."
    : "Furniture assembly in Valencia. Wardrobes, beds, drawers, tables, desks, shelves, IKEA furniture and secure wall fixing. Estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "montaje muebles valencia",
          "montaje de muebles valencia",
          "montador muebles valencia",
          "montar muebles valencia",
          "montaje muebles ikea valencia",
          "montaje armarios valencia",
          "montaje cama valencia",
          "montaje estanterias valencia",
          "montaje escritorios valencia",
          "montaje mesas valencia",
          "montaje comodas valencia",
          "instalacion muebles valencia",
          "fijacion muebles pared valencia",
          "manitas muebles valencia",
        ]
      : [
          "furniture assembly valencia",
          "furniture assembler valencia",
          "ikea furniture assembly valencia",
          "wardrobe assembly valencia",
          "bed assembly valencia",
          "shelf assembly valencia",
          "desk assembly valencia",
          "table assembly valencia",
          "drawer assembly valencia",
          "wall furniture fixing valencia",
          "handyman furniture valencia",
        ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/montaje-muebles-valencia`,
      languages: {
        es: `${baseUrl}/es/montaje-muebles-valencia`,
        en: `${baseUrl}/en/montaje-muebles-valencia`,
        "x-default": `${baseUrl}/es/montaje-muebles-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/montaje-muebles-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function MontajeMueblesValenciaPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=furniture`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito montaje de muebles en Valencia. Quiero pedir presupuesto y puedo enviar fotos, medidas o modelo del mueble."
      : "Hi, I need furniture assembly in Valencia. I’d like to request an estimate and can send photos, measurements or the furniture model."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Montaje de muebles IKEA" : "IKEA furniture assembly",
      desc: isEs
        ? "Montaje de muebles IKEA con acabado limpio y ordenado."
        : "IKEA furniture assembly with a clean and neat finish.",
      href: `/${locale}/montaje-muebles-ikea-valencia`,
    },
    {
      title: isEs ? "Montaje de armarios" : "Wardrobe assembly",
      desc: isEs
        ? "Armarios de dormitorio, Pax, puertas, cajones y accesorios."
        : "Bedroom wardrobes, Pax, doors, drawers and accessories.",
      href: `/${locale}/montaje-armarios-valencia`,
    },
    {
      title: isEs ? "Instalación de armarios" : "Wardrobe installation",
      desc: isEs
        ? "Nivelación, ajuste de puertas y fijación segura a pared."
        : "Leveling, door adjustment and secure wall fixing.",
      href: `/${locale}/instalacion-armarios-valencia`,
    },
    {
      title: isEs ? "Montaje de cama" : "Bed assembly",
      desc: isEs
        ? "Camas, canapés, estructuras, cabeceros y muebles de dormitorio."
        : "Beds, storage beds, frames, headboards and bedroom furniture.",
      href: `/${locale}/montaje-cama-valencia`,
    },
    {
      title: isEs ? "Montaje de estanterías" : "Shelf assembly",
      desc: isEs
        ? "Estanterías, baldas, librerías y fijación a pared."
        : "Shelving units, shelves, bookcases and wall fixing.",
      href: `/${locale}/montaje-estanterias-valencia`,
    },
    {
      title: isEs ? "Fijación de muebles a pared" : "Wall furniture fixing",
      desc: isEs
        ? "Fijación segura para muebles altos, armarios y estanterías."
        : "Secure fixing for tall furniture, wardrobes and shelves.",
      href: `/${locale}/fijacion-muebles-pared-valencia`,
    },
  ];

  const prices = isEs
    ? [
        ["Montaje de mueble pequeño", "desde 35 €"],
        ["Montaje de cómoda / cajonera", "desde 45 €"],
        ["Montaje de cama", "desde 49 €"],
        ["Montaje de armario", "desde 69 €"],
        ["Montaje de mueble IKEA", "desde 45 €"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Small furniture assembly", "from €35"],
        ["Drawer / chest assembly", "from €45"],
        ["Bed assembly", "from €49"],
        ["Wardrobe assembly", "from €69"],
        ["IKEA furniture assembly", "from €45"],
        ["Visit / inspection", "from €49"],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta el montaje de muebles en Valencia?",
          a: "Depende del tipo de mueble, tamaño, número de piezas, dificultad, marca, fijación a pared y tiempo necesario. Los muebles pequeños suelen empezar desde 35–45 €.",
        },
        {
          q: "¿Montáis muebles IKEA?",
          a: "Sí. Montamos muebles IKEA como camas, armarios, cómodas, mesas, escritorios, estanterías, muebles TV, Pax, Malm, Kallax y otros modelos.",
        },
        {
          q: "¿Podéis fijar muebles a la pared?",
          a: "Sí. En muchos muebles altos o pesados recomendamos fijación a pared para mejorar la seguridad. Revisamos tipo de pared, peso y fijaciones necesarias.",
        },
        {
          q: "¿Montáis armarios grandes o Pax?",
          a: "Sí. Montamos armarios grandes, armarios de dormitorio, armarios IKEA Pax, puertas, cajones, barras, baldas y accesorios interiores.",
        },
        {
          q: "¿Puedo enviar fotos o el modelo por WhatsApp?",
          a: "Sí. Lo ideal es enviar fotos de las cajas, instrucciones, modelo, medidas, habitación y cualquier detalle especial antes de confirmar el precio.",
        },
        {
          q: "¿En qué zonas trabajáis?",
          a: "Trabajamos en Valencia ciudad y zonas cercanas como Campanar, Ruzafa, Benimaclet, Patraix, Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera y Gandía.",
        },
      ]
    : [
        {
          q: "How much does furniture assembly in Valencia cost?",
          a: "It depends on furniture type, size, number of parts, difficulty, brand, wall fixing and time required. Small furniture usually starts from €35–45.",
        },
        {
          q: "Do you assemble IKEA furniture?",
          a: "Yes. We assemble IKEA furniture such as beds, wardrobes, drawers, tables, desks, shelves, TV units, Pax, Malm, Kallax and other models.",
        },
        {
          q: "Can you fix furniture to the wall?",
          a: "Yes. For many tall or heavy pieces, wall fixing is recommended for safety. We check wall type, weight and required fixings.",
        },
        {
          q: "Do you assemble large wardrobes or Pax?",
          a: "Yes. We assemble large wardrobes, bedroom wardrobes, IKEA Pax wardrobes, doors, drawers, rails, shelves and interior accessories.",
        },
        {
          q: "Can I send photos or the model by WhatsApp?",
          a: "Yes. Ideally send photos of boxes, instructions, model, measurements, room and any special detail before confirming the price.",
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
        "@id": `${baseUrl}/${locale}/montaje-muebles-valencia#service`,
        name: isEs
          ? "Montaje de muebles en Valencia"
          : "Furniture assembly in Valencia",
        serviceType: isEs ? "Montaje de muebles" : "Furniture assembly",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}/montaje-muebles-valencia`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de montaje de muebles en Valencia"
            : "Furniture assembly services in Valencia",
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
              ? "Montaje de muebles Valencia"
              : "Furniture assembly Valencia",
            item: `${baseUrl}/${locale}/montaje-muebles-valencia`,
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
                ? "Montaje de muebles en Valencia para IKEA, armarios, camas y estanterías"
                : "Furniture assembly in Valencia for IKEA, wardrobes, beds and shelves"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO realiza montaje de muebles en Valencia: muebles IKEA, armarios, camas, cómodas, mesas, escritorios, estanterías, muebles TV, fijación a pared y ajustes finales. Trabajo limpio, respuesta rápida y presupuesto claro por WhatsApp."
                : "THEVULGO handles furniture assembly in Valencia: IKEA furniture, wardrobes, beds, drawers, tables, desks, shelves, TV units, wall fixing and final adjustments. Clean work, fast response and clear estimate by WhatsApp."}
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
                    ? "Envía fotos, modelo y medidas."
                    : "Send photos, model and measurements.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Montaje seguro" : "Safe assembly",
                  text: isEs
                    ? "Revisamos piezas, nivelación y fijaciones."
                    : "We check parts, leveling and fixings.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Montaje ordenado y revisión final."
                    : "Neat assembly and final check.",
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
            ? "Servicios relacionados con montaje de muebles"
            : "Related furniture assembly services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Estas páginas internas refuerzan el SEO local y ayudan al cliente a encontrar exactamente el tipo de montaje que necesita."
            : "These internal pages strengthen local SEO and help the client find the exact type of assembly they need."}
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
                  ? "¿Qué incluye el montaje de muebles?"
                  : "What does furniture assembly include?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El montaje de muebles no es solo juntar piezas. Revisamos instrucciones, tornillos, herrajes, estabilidad, nivelación, puertas, cajones, baldas y fijación a pared cuando el mueble lo necesita. El objetivo es dejar el mueble listo para usar y seguro para el día a día."
                  : "Furniture assembly is not just joining parts together. We check instructions, screws, hardware, stability, leveling, doors, drawers, shelves and wall fixing when the furniture needs it. The goal is to leave the furniture ready to use and safe for everyday life."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Trabajamos con muebles IKEA, Leroy Merlin, Conforama, Amazon, Maisons du Monde y otras marcas. Montamos muebles para viviendas, habitaciones, apartamentos Airbnb, oficinas, locales y pequeños negocios en Valencia."
                  : "We work with IKEA, Leroy Merlin, Conforama, Amazon, Maisons du Monde and other brands. We assemble furniture for homes, rooms, Airbnb apartments, offices, commercial spaces and small businesses in Valencia."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Muebles IKEA" : "IKEA furniture",
                  isEs ? "Armarios y Pax" : "Wardrobes and Pax",
                  isEs ? "Camas y cabeceros" : "Beds and headboards",
                  isEs ? "Cómodas y cajoneras" : "Drawers and chests",
                  isEs ? "Mesas y escritorios" : "Tables and desks",
                  isEs ? "Estanterías y fijación" : "Shelves and fixing",
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
                  ? "El precio final depende del tipo de mueble, número de piezas, tamaño, marca, fijación, dificultad y tiempo necesario."
                  : "Final price depends on furniture type, number of parts, size, brand, fixing, difficulty and time required."}
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
                ? "Muestra cajas, modelo y habitación."
                : "Show boxes, model and room.",
            ],
            [
              isEs ? "2. Revisamos piezas" : "2. We check parts",
              isEs
                ? "Medidas, dificultad y fijación."
                : "Measurements, difficulty and fixing.",
            ],
            [
              isEs ? "3. Estimación" : "3. Estimate",
              isEs
                ? "Te damos precio antes de empezar."
                : "We give the price before starting.",
            ],
            [
              isEs ? "4. Montaje limpio" : "4. Clean assembly",
              isEs
                ? "Montamos, nivelamos y ajustamos."
                : "We assemble, level and adjust.",
            ],
            [
              isEs ? "5. Revisión final" : "5. Final check",
              isEs
                ? "Comprobamos estabilidad y acabado."
                : "We check stability and finish.",
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
                  ? "Un mueble mal montado puede quedar inestable, desnivelado o con puertas que no cierran bien. Cuidamos el montaje, revisamos piezas, ajustamos puertas y dejamos el mueble listo para usar."
                  : "Poorly assembled furniture can be unstable, uneven or have doors that do not close properly. We take care of the assembly, check parts, adjust doors and leave the furniture ready to use."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Hammer, isEs ? "Montaje práctico" : "Practical assembly"],
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
              ? "¿Necesitas montaje de muebles en Valencia?"
              : "Need furniture assembly in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos de las cajas, modelo, instrucciones o habitación por WhatsApp. Te diremos cuánto puede costar, qué hace falta y cuándo podemos ir."
              : "Send photos of the boxes, model, instructions or room by WhatsApp. We will tell you how much it may cost, what is needed and when we can come."}
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