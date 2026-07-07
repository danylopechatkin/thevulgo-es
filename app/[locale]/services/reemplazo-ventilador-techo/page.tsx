// app/[locale]/services/reemplazo-ventilador-techo/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Euro,
  Fan,
  Home,
  Lightbulb,
  MapPin,
  MessageCircle,
  Phone,
  Plug,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "reemplazo-ventilador-techo";

const areas = [
  "Valencia",
  "Campanar",
  "Ruzafa",
  "Russafa",
  "Benimaclet",
  "Patraix",
  "El Carmen",
  "Extramurs",
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Alboraya",
  "Manises",
  "Xirivella",
  "Sagunto",
  "Cullera",
  "Gandía",
];

const relatedPages = [
  {
    slug: "montaje-ventilador-techo",
    en: "Ceiling Fan Mounting",
    es: "Montaje de ventilador de techo",
    descEn: "General ceiling fan installation service in Valencia.",
    descEs: "Servicio general de montaje de ventiladores de techo en Valencia.",
    icon: Fan,
  },
  {
    slug: "cambio-lampara-por-ventilador",
    en: "Replace Lamp With Fan",
    es: "Cambiar lámpara por ventilador",
    descEn: "Remove a ceiling lamp and install a fan in the same light point.",
    descEs: "Quitamos una lámpara y montamos un ventilador en el mismo punto.",
    icon: Lightbulb,
  },
  {
    slug: "ventilador-techo-con-luz",
    en: "Fan With Light",
    es: "Ventilador de techo con luz",
    descEn: "Installation of fans with LED light and remote control.",
    descEs: "Instalación de ventiladores con luz LED y mando.",
    icon: Lightbulb,
  },
  {
    slug: "instalar-ventilador-mando-valencia",
    en: "Fan With Remote",
    es: "Ventilador con mando",
    descEn: "Remote receiver setup, light test and speed test.",
    descEs: "Configuración de receptor, mando, luz y velocidades.",
    icon: Settings,
  },
  {
    slug: "instalar-ventilador-aspas-retractiles-valencia",
    en: "Retractable Blade Fan",
    es: "Ventilador con aspas retráctiles",
    descEn: "Modern retractable blade ceiling fan installation.",
    descEs: "Montaje de ventiladores modernos con aspas retráctiles.",
    icon: Sparkles,
  },
  {
    slug: "instalacion-2-ventiladores-techo-valencia",
    en: "Two Ceiling Fans",
    es: "Instalación de 2 ventiladores",
    descEn: "Package for installing two fans in one visit.",
    descEs: "Pack para instalar dos ventiladores en una misma visita.",
    icon: Fan,
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Reemplazo de ventilador de techo en Valencia desde 45 € | THEVULGO"
    : "Ceiling Fan Replacement in Valencia From €45 | THEVULGO";

  const description = isEs
    ? "Reemplazo de ventilador de techo en Valencia desde 45 €. Desmontaje del ventilador antiguo, montaje del nuevo, conexión al punto eléctrico existente y prueba final."
    : "Ceiling fan replacement in Valencia from €45. Old fan removal, new fan mounting, connection to the existing electrical point and final testing.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reemplazo ventilador techo valencia",
          "cambiar ventilador de techo valencia",
          "sustituir ventilador techo valencia",
          "quitar ventilador viejo instalar nuevo valencia",
          "precio reemplazar ventilador techo valencia",
          "manitas ventilador techo valencia",
        ]
      : [
          "ceiling fan replacement valencia",
          "replace ceiling fan valencia",
          "change old ceiling fan valencia",
          "remove old fan install new fan valencia",
          "ceiling fan handyman valencia",
        ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services/${slug}`,
      languages: {
        es: `${baseUrl}/es/services/${slug}`,
        en: `${baseUrl}/en/services/${slug}`,
        "x-default": `${baseUrl}/es/services/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/${slug}`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function CeilingFanReplacementPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola THEVULGO. Quiero reemplazar un ventilador de techo en Valencia. Ya tengo el ventilador nuevo. ¿Me podéis dar presupuesto?"
      : "Hi THEVULGO. I want to replace a ceiling fan in Valencia. I already have the new fan. Can you give me a quote?"
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${whatsappText}`;

  const priceCards = [
    {
      title: isEs ? "1 ventilador" : "1 fan",
      price: "45 €",
      text: isEs
        ? "Quitamos el ventilador antiguo y montamos el nuevo en el mismo punto."
        : "We remove the old fan and install the new one in the same point.",
      badge: isEs ? "Precio base" : "Base price",
    },
    {
      title: isEs ? "2 ventiladores" : "2 fans",
      price: "85 €",
      text: isEs
        ? "Reemplazo de dos ventiladores de techo en la misma vivienda."
        : "Replacement of two ceiling fans in the same home.",
      badge: isEs ? "Pack recomendado" : "Recommended pack",
    },
    {
      title: isEs ? "3 ventiladores" : "3 fans",
      price: "125 €",
      text: isEs
        ? "Ideal para cambiar varios ventiladores antiguos en una sola visita."
        : "Ideal for replacing several old fans in one visit.",
      badge: isEs ? "Mejor precio" : "Best value",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "THEVULGO",
      url: `${baseUrl}/${locale}/services/${slug}`,
      telephone: `+${phone}`,
      priceRange: "€€",
      areaServed: areas.map((area) => ({
        "@type": "City",
        name: area,
      })),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valencia",
        addressCountry: "ES",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: isEs
        ? "Reemplazo de ventilador de techo"
        : "Ceiling fan replacement",
      serviceType: isEs
        ? "Sustitución de ventilador de techo"
        : "Ceiling fan replacement service",
      provider: {
        "@type": "LocalBusiness",
        name: "THEVULGO",
        telephone: `+${phone}`,
      },
      areaServed: {
        "@type": "City",
        name: "Valencia",
      },
      offers: {
        "@type": "OfferCatalog",
        name: isEs
          ? "Precios para reemplazar ventilador de techo"
          : "Ceiling fan replacement prices",
        itemListElement: priceCards.map((card) => ({
          "@type": "Offer",
          name: card.title,
          price: card.price.replace(" €", ""),
          priceCurrency: "EUR",
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: isEs
            ? "¿Cuánto cuesta reemplazar un ventilador de techo?"
            : "How much does it cost to replace a ceiling fan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: isEs
              ? "El precio es desde 45 € para un ventilador, 85 € para dos y 125 € para tres, usando el punto eléctrico existente."
              : "The price is from €45 for one fan, €85 for two and €125 for three, using the existing electrical point.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: isEs ? "Inicio" : "Home",
          item: `${baseUrl}/${locale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: isEs ? "Servicios" : "Services",
          item: `${baseUrl}/${locale}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: isEs
            ? "Reemplazo de ventilador de techo"
            : "Ceiling fan replacement",
          item: `${baseUrl}/${locale}/services/${slug}`,
        },
      ],
    },
  ];

  const includedItems = [
    {
      icon: Fan,
      title: isEs ? "Retirada del ventilador antiguo" : "Old fan removal",
      text: isEs
        ? "Desmontamos el ventilador existente con cuidado, incluyendo aspas, cuerpo, soporte y embellecedor."
        : "We carefully remove the existing fan, including blades, body, bracket and cover.",
    },
    {
      icon: Wrench,
      title: isEs ? "Montaje del ventilador nuevo" : "New fan mounting",
      text: isEs
        ? "Instalamos el nuevo soporte, motor, aspas, receptor, luz y piezas necesarias."
        : "We install the new bracket, motor, blades, receiver, light and required parts.",
    },
    {
      icon: Plug,
      title: isEs ? "Conexión eléctrica básica" : "Basic electrical connection",
      text: isEs
        ? "Conectamos el nuevo ventilador al punto eléctrico existente si está preparado y es seguro."
        : "We connect the new fan to the existing electrical point if it is ready and safe.",
    },
    {
      icon: Settings,
      title: isEs ? "Prueba de funcionamiento" : "Operation test",
      text: isEs
        ? "Probamos luz, mando, velocidades, giro, estabilidad y ruido antes de terminar."
        : "We test light, remote, speeds, rotation, stability and noise before finishing.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: isEs ? "Nos envías fotos" : "Send us photos",
      text: isEs
        ? "Foto del ventilador actual, techo, punto de luz y ventilador nuevo."
        : "Photo of the current fan, ceiling, light point and new fan.",
    },
    {
      step: "02",
      title: isEs ? "Confirmamos precio" : "We confirm the price",
      text: isEs
        ? "Revisamos si el reemplazo entra en el precio base antes de ir."
        : "We check if the replacement fits the base price before coming.",
    },
    {
      step: "03",
      title: isEs ? "Quitamos el antiguo" : "We remove the old one",
      text: isEs
        ? "Desmontamos el ventilador viejo y revisamos la fijación del techo."
        : "We remove the old fan and check the ceiling fixing.",
    },
    {
      step: "04",
      title: isEs ? "Montamos el nuevo" : "We install the new one",
      text: isEs
        ? "Instalamos el ventilador nuevo y hacemos una prueba completa contigo."
        : "We install the new fan and do a full test with you.",
    },
  ];

  const faq = [
    {
      q: isEs
        ? "¿Cuánto cuesta reemplazar un ventilador de techo?"
        : "How much does it cost to replace a ceiling fan?",
      a: isEs
        ? "El precio es desde 45 € para un ventilador, 85 € para dos y 125 € para tres, si se usa el mismo punto eléctrico existente."
        : "The price is from €45 for one fan, €85 for two and €125 for three, when using the same existing electrical point.",
    },
    {
      q: isEs
        ? "¿Está incluido quitar el ventilador antiguo?"
        : "Is removing the old fan included?",
      a: isEs
        ? "Sí. El desmontaje del ventilador antiguo está incluido en el precio base."
        : "Yes. Removing the old ceiling fan is included in the base price.",
    },
    {
      q: isEs
        ? "¿Podéis instalar el nuevo ventilador en el mismo punto?"
        : "Can you install the new fan in the same point?",
      a: isEs
        ? "Sí, siempre que el punto esté preparado, accesible y permita una instalación segura."
        : "Yes, as long as the point is ready, accessible and allows safe installation.",
    },
    {
      q: isEs
        ? "¿Instaláis ventiladores con luz y mando?"
        : "Do you install fans with light and remote?",
      a: isEs
        ? "Sí. Instalamos ventiladores con luz LED, mando a distancia, receptor y aspas retráctiles."
        : "Yes. We install fans with LED light, remote control, receiver and retractable blades.",
    },
    {
      q: isEs
        ? "¿Qué pasa si el ventilador antiguo estaba mal instalado?"
        : "What if the old fan was badly installed?",
      a: isEs
        ? "Revisamos el punto de fijación antes de montar el nuevo. Si hace falta refuerzo o tacos especiales, lo confirmamos antes."
        : "We check the fixing point before installing the new one. If reinforcement or special anchors are needed, we confirm it first.",
    },
    {
      q: isEs
        ? "¿Qué fotos tengo que enviar?"
        : "What photos should I send?",
      a: isEs
        ? "Foto del ventilador antiguo, del techo, del punto de conexión y del ventilador nuevo con sus piezas."
        : "A photo of the old fan, the ceiling, the connection point and the new fan with its parts.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <section className="relative overflow-hidden border-b border-yellow-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.18),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-yellow-300 bg-white/80 px-4 py-2 text-sm font-semibold text-yellow-500 shadow-sm backdrop-blur">
              <Fan className="h-4 w-4" />
              {isEs
                ? "Reemplazo de ventilador de techo en Valencia"
                : "Ceiling fan replacement in Valencia"}
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              {isEs
                ? "Reemplazo de ventilador de techo desde 45 €"
                : "Ceiling fan replacement from €45"}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
              {isEs
                ? "Quitamos tu ventilador antiguo y montamos el nuevo en el mismo punto. Incluye desmontaje, montaje, conexión básica y prueba final."
                : "We remove your old ceiling fan and install the new one in the same point. Removal, mounting, basic connection and final testing included."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 text-base font-bold text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Pedir presupuesto por WhatsApp" : "Request quote on WhatsApp"}
              </a>

              <a
                href="#precios"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-yellow-300 bg-white px-6 py-4 text-base font-bold text-neutral-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
              >
                <Euro className="h-5 w-5" />
                {isEs ? "Ver precios" : "See prices"}
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                isEs ? "Desde 45 €" : "From €45",
                isEs ? "Desmontaje incluido" : "Removal included",
                isEs ? "Prueba final completa" : "Full final test",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-yellow-300 bg-white/80 p-4 text-sm font-semibold text-neutral-700 shadow-sm backdrop-blur"
                >
                  <CheckCircle2 className="mb-2 h-5 w-5 text-yellow-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] border border-yellow-300 bg-neutral-50 p-5 shadow-2xl shadow-black/10 backdrop-blur">
              <div className="rounded-[2rem] bg-black p-6 text-white">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-yellow-500">
                      THEVULGO
                    </p>
                    <h2 className="mt-2 text-2xl font-black">
                      {isEs
                        ? "De ventilador antiguo a ventilador nuevo"
                        : "From old fan to new fan"}
                    </h2>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-neutral-950">
                    <Fan className="h-7 w-7" />
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {priceCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-3xl border border-white/10 bg-white/10 p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-yellow-500">
                            {card.badge}
                          </p>
                          <h3 className="mt-1 text-xl font-black">{card.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-white/70">
                            {card.text}
                          </p>
                        </div>

                        <p className="whitespace-nowrap text-3xl font-black text-yellow-500">
                          {card.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl bg-yellow-400 p-5 text-neutral-950">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6" />
                    <p className="font-black">
                      {isEs
                        ? "Desmontaje + montaje + conexión básica"
                        : "Removal + mounting + basic connection"}
                    </p>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-neutral-800">
                    {isEs
                      ? "Aplicable si el punto existente está preparado y el ventilador nuevo viene completo."
                      : "Applies when the existing point is ready and the new fan comes complete."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section id="precios" className="bg-neutral-950 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-400">
              <Euro className="h-4 w-4" />
              {isEs ? "Precios claros" : "Clear prices"}
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              {isEs
                ? "Precio para reemplazar ventilador de techo"
                : "Price to replace a ceiling fan"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              {isEs
                ? "El precio incluye desmontar el ventilador antiguo, montar el nuevo, conectarlo al punto eléctrico existente y comprobar que funciona correctamente."
                : "The price includes removing the old fan, mounting the new one, connecting it to the existing electrical point and checking that it works correctly."}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {priceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20"
              >
                <p className="text-sm font-bold text-yellow-400">{card.badge}</p>
                <h3 className="mt-3 text-2xl font-black">{card.title}</h3>
                <p className="mt-4 text-5xl font-black text-yellow-400">
                  {card.price}
                </p>
                <p className="mt-4 leading-7 text-white/70">{card.text}</p>

                <a
                  href={whatsappUrl}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-5 py-4 font-black text-neutral-950 transition hover:-translate-y-0.5 hover:bg-yellow-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  {isEs ? "Reservar por WhatsApp" : "Book on WhatsApp"}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-yellow-400/30 bg-yellow-400/10 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <BadgeCheck className="h-7 w-7 shrink-0 text-yellow-400" />
              <div>
                <h3 className="text-xl font-black">
                  {isEs
                    ? "Qué incluye el reemplazo básico"
                    : "What the basic replacement includes"}
                </h3>
                <p className="mt-3 leading-8 text-white/75">
                  {isEs
                    ? "Incluye desplazamiento dentro de Valencia ciudad, desmontaje del ventilador antiguo, montaje normal del nuevo ventilador, conexión al punto de luz existente y prueba final. Si el techo necesita refuerzo, tacos especiales, reparación o una modificación eléctrica adicional, se confirma antes de hacer nada."
                    : "Includes travel within Valencia city, removal of the old fan, standard mounting of the new fan, connection to the existing light point and final testing. If the ceiling needs reinforcement, special anchors, repair or extra electrical modification, we confirm it before doing anything."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-bold text-yellow-600">
                <Wrench className="h-4 w-4" />
                {isEs ? "Servicio completo" : "Complete service"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                {isEs
                  ? "Cambiamos el ventilador antiguo y dejamos el nuevo funcionando"
                  : "We replace the old fan and leave the new one working"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Un reemplazo no es solo quitar uno y poner otro. Revisamos cómo estaba instalado el ventilador anterior, comprobamos el punto de fijación y montamos el nuevo de forma estable."
                  : "A replacement is not just removing one and putting another one up. We check how the previous fan was installed, inspect the fixing point and mount the new one securely."}
              </p>

              <a
                href={whatsappUrl}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 font-black text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                <Phone className="h-5 w-5" />
                {isEs ? "Consultar disponibilidad" : "Check availability"}
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {includedItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-yellow-300 bg-neutral-50 p-6 shadow-sm"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-neutral-950">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-3 leading-7 text-neutral-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-yellow-300 bg-yellow-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-bold text-yellow-600">
              <Clock3 className="h-4 w-4" />
              {isEs ? "Proceso rápido" : "Fast process"}
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              {isEs
                ? "Cómo hacemos el reemplazo del ventilador"
                : "How we replace the ceiling fan"}
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
              {isEs
                ? "Primero revisamos fotos, después confirmamos el precio y en la visita desmontamos el ventilador antiguo antes de montar el nuevo."
                : "First we check photos, then we confirm the price and during the visit we remove the old fan before installing the new one."}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-[2rem] border border-yellow-300 bg-white p-6 shadow-sm"
              >
                <p className="text-4xl font-black text-yellow-400">
                  {item.step}
                </p>
                <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
            <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-bold text-yellow-600">
                <ShieldCheck className="h-4 w-4" />
                {isEs ? "Revisión antes de montar" : "Check before mounting"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {isEs
                  ? "Comprobamos si el punto del ventilador antiguo sirve para el nuevo"
                  : "We check if the old fan point works for the new one"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "A veces el ventilador anterior estaba instalado con tacos débiles, tornillos incorrectos o un soporte que no sirve para el nuevo modelo. Antes de continuar, revisamos la fijación y te explicamos si hace falta algo adicional."
                  : "Sometimes the previous fan was installed with weak plugs, incorrect screws or a bracket that does not work for the new model. Before continuing, we check the fixing and explain if anything extra is needed."}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  isEs ? "Revisión del soporte antiguo" : "Old bracket check",
                  isEs ? "Comprobación del cableado" : "Wiring check",
                  isEs ? "Fijación segura al techo" : "Safe ceiling fixing",
                  isEs ? "Prueba de vibración y ruido" : "Vibration and noise test",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-yellow-300 bg-neutral-50 p-4 font-bold"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-yellow-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-300 bg-neutral-950 p-6 text-white shadow-2xl shadow-black/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-neutral-950">
                <Fan className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-black">
                {isEs
                  ? "Antes de la visita"
                  : "Before the visit"}
              </h3>

              <p className="mt-4 leading-8 text-white/75">
                {isEs
                  ? "Para confirmar el precio y evitar sorpresas, lo mejor es enviar fotos claras del ventilador antiguo, del techo y del ventilador nuevo con todas sus piezas."
                  : "To confirm the price and avoid surprises, it is best to send clear photos of the old fan, the ceiling and the new fan with all its parts."}
              </p>

              <div className="mt-6 rounded-3xl bg-white/10 p-5">
                <p className="font-black text-yellow-400">
                  {isEs ? "Fotos recomendadas:" : "Recommended photos:"}
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/75">
                  <li>
                    {isEs
                      ? "• Ventilador antiguo completo"
                      : "• Complete old ceiling fan"}
                  </li>
                  <li>
                    {isEs
                      ? "• Techo alrededor del ventilador"
                      : "• Ceiling around the fan"}
                  </li>
                  <li>
                    {isEs
                      ? "• Ventilador nuevo y caja"
                      : "• New fan and box"}
                  </li>
                  <li>
                    {isEs
                      ? "• Mando, receptor e instrucciones"
                      : "• Remote, receiver and instructions"}
                  </li>
                </ul>
              </div>

              <a
                href={whatsappUrl}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-5 py-4 font-black text-neutral-950 transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Enviar fotos por WhatsApp" : "Send photos on WhatsApp"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-bold text-yellow-600">
                <Home className="h-4 w-4" />
                {isEs ? "Para viviendas y pisos" : "For homes and flats"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                {isEs
                  ? "Reemplazamos ventiladores antiguos en dormitorios, salones y habitaciones"
                  : "We replace old ceiling fans in bedrooms, living rooms and rooms"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Este servicio es ideal si tu ventilador ya no funciona bien, hace ruido, vibra demasiado, no responde al mando o quieres cambiarlo por un modelo más moderno con luz LED."
                  : "This service is ideal if your fan no longer works well, makes noise, vibrates too much, does not respond to the remote or you want to replace it with a more modern model with LED light."}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Ventilador que hace ruido" : "Noisy fan",
                  text: isEs
                    ? "Sustituimos ventiladores antiguos que hacen ruido o vibran demasiado."
                    : "We replace old fans that make noise or vibrate too much.",
                  icon: Settings,
                },
                {
                  title: isEs ? "Mando que no funciona" : "Remote not working",
                  text: isEs
                    ? "Puedes cambiar el ventilador completo por un modelo nuevo con mando."
                    : "You can replace the full fan with a new model with remote control.",
                  icon: Plug,
                },
                {
                  title: isEs ? "Cambio por modelo moderno" : "Upgrade to a modern model",
                  text: isEs
                    ? "Instalamos ventiladores con luz LED, mando y aspas retráctiles."
                    : "We install fans with LED light, remote and retractable blades.",
                  icon: Sparkles,
                },
                {
                  title: isEs ? "Varios ventiladores" : "Several fans",
                  text: isEs
                    ? "Podemos reemplazar varios ventiladores en una sola visita."
                    : "We can replace several fans in one visit.",
                  icon: Fan,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-yellow-300 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-neutral-950">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-3 leading-7 text-neutral-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-bold text-yellow-600">
              <Star className="h-4 w-4" />
              {isEs ? "Por qué elegir THEVULGO" : "Why choose THEVULGO"}
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              {isEs
                ? "Reemplazo claro, limpio y sin sorpresas"
                : "Clear, clean replacement with no surprises"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-600">
              {isEs
                ? "Te confirmamos el precio antes de la visita, cuidamos la vivienda y dejamos el nuevo ventilador probado contigo."
                : "We confirm the price before the visit, take care of the home and leave the new fan tested with you."}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: isEs ? "Precio antes de ir" : "Price before coming",
                text: isEs
                  ? "Revisamos fotos y confirmamos si aplica el precio base."
                  : "We check photos and confirm if the base price applies.",
                icon: Euro,
              },
              {
                title: isEs ? "Desmontaje cuidado" : "Careful removal",
                text: isEs
                  ? "Quitamos el ventilador antiguo sin dañar el techo ni la zona de trabajo."
                  : "We remove the old fan without damaging the ceiling or work area.",
                icon: ShieldCheck,
              },
              {
                title: isEs ? "Prueba final contigo" : "Final test with you",
                text: isEs
                  ? "Probamos luz, velocidades, mando, giro y estabilidad antes de terminar."
                  : "We test light, speeds, remote, rotation and stability before finishing.",
                icon: BadgeCheck,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-yellow-300 bg-neutral-50 p-6 shadow-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-yellow-400">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
            <section className="border-y border-yellow-300 bg-yellow-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-bold text-yellow-600">
                <MapPin className="h-4 w-4" />
                {isEs ? "Zonas de servicio" : "Service areas"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {isEs
                  ? "Reemplazo de ventilador de techo en Valencia y alrededores"
                  : "Ceiling fan replacement in Valencia and nearby areas"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Trabajamos en Valencia ciudad y también en zonas cercanas. Envíanos tu ubicación por WhatsApp y confirmamos disponibilidad."
                  : "We work in Valencia city and nearby areas. Send us your location on WhatsApp and we confirm availability."}
              </p>

              <a
                href={whatsappUrl}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 font-black text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Consultar mi zona" : "Check my area"}
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-2xl border border-yellow-300 bg-white p-4 font-bold text-neutral-800 shadow-sm"
                >
                  <MapPin className="h-5 w-5 shrink-0 text-yellow-500" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-bold text-yellow-600">
              <ArrowRight className="h-4 w-4" />
              {isEs ? "Servicios relacionados" : "Related services"}
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              {isEs
                ? "Más servicios para ventiladores de techo"
                : "More services for ceiling fans"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-600">
              {isEs
                ? "También podemos ayudarte con instalación de ventiladores nuevos, ventiladores con luz, mando, aspas retráctiles o cambio desde lámpara."
                : "We can also help with new fan installation, fans with light, remote control, retractable blades or lamp-to-fan replacement."}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relatedPages.map((page) => {
              const Icon = page.icon;

              return (
                <Link
                  key={page.slug}
                  href={`/${locale}/services/${page.slug}`}
                  className="group rounded-[2rem] border border-yellow-300 bg-neutral-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-yellow-50 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-neutral-950">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-black">
                    {isEs ? page.es : page.en}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-600">
                    {isEs ? page.descEs : page.descEn}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 font-black text-neutral-950">
                    {isEs ? "Ver servicio" : "View service"}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-400">
              <BadgeCheck className="h-4 w-4" />
              FAQ
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              {isEs
                ? "Preguntas frecuentes sobre reemplazo de ventilador de techo"
                : "Frequently asked questions about ceiling fan replacement"}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {faq.map((item) => (
              <div
                key={item.q}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-xl font-black text-yellow-400">
                  {item.q}
                </h3>
                <p className="mt-4 leading-8 text-white/75">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-yellow-400 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-4xl text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl lg:text-6xl">
            {isEs
              ? "¿Quieres reemplazar tu ventilador de techo?"
              : "Want to replace your ceiling fan?"}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-800">
            {isEs
              ? "Envíanos fotos del ventilador antiguo, el techo y el ventilador nuevo. Te confirmamos precio y disponibilidad por WhatsApp."
              : "Send us photos of the old fan, the ceiling and the new fan. We confirm price and availability on WhatsApp."}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-7 py-4 text-base font-black text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              <MessageCircle className="h-5 w-5" />
              {isEs ? "Pedir presupuesto ahora" : "Request quote now"}
            </a>

            <a
              href={`tel:+${phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black bg-yellow-400 px-7 py-4 text-base font-black text-neutral-950 transition hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              <Phone className="h-5 w-5" />
              +34 610 076 942
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}