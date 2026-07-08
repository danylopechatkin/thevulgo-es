// app/[locale]/services/montaje-ventilador-techo/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppConversionLink from "@/app/components/WhatsAppConversionLink";
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
    slug: "instalacion-ventilador-techo-valencia",
    en: "Ceiling Fan Installation",
    es: "Instalación de ventilador de techo",
    descEn: "Main ceiling fan installation service in Valencia with clear pricing.",
    descEs: "Servicio principal de instalación de ventiladores de techo en Valencia.",
    icon: Fan,
  },
  {
    slug: "instalar-ventilador-techo-luz-valencia",
    en: "Fan With Light",
    es: "Ventilador con luz",
    descEn: "Mounting ceiling fans with LED light, remote control and testing.",
    descEs: "Montaje de ventiladores con luz LED, mando y prueba final.",
    icon: Lightbulb,
  },
  {
    slug: "cambiar-lampara-por-ventilador-valencia",
    en: "Replace Lamp With Fan",
    es: "Cambiar lámpara por ventilador",
    descEn: "Old lamp removal and ceiling fan mounting on the existing point.",
    descEs: "Retirada de lámpara antigua y montaje del ventilador en el punto existente.",
    icon: Plug,
  },
  {
    slug: "instalar-ventilador-mando-valencia",
    en: "Fan With Remote",
    es: "Ventilador con mando",
    descEn: "Remote control receiver setup, speed test and light test.",
    descEs: "Configuración del receptor, mando, velocidades y luz.",
    icon: Settings,
  },
  {
    slug: "instalar-ventilador-aspas-retractiles-valencia",
    en: "Retractable Blade Fan",
    es: "Ventilador con aspas retráctiles",
    descEn: "Modern ceiling fan mounting with retractable blades.",
    descEs: "Montaje de ventiladores modernos con aspas retráctiles.",
    icon: Sparkles,
  },
  {
    slug: "instalacion-2-ventiladores-techo-valencia",
    en: "Two Ceiling Fans",
    es: "Instalación de 2 ventiladores",
    descEn: "Package for two fans installed in the same visit.",
    descEs: "Pack para montar dos ventiladores en la misma visita.",
    icon: Fan,
  },
  {
    slug: "instalacion-3-ventiladores-techo-valencia",
    en: "Three Ceiling Fans",
    es: "Instalación de 3 ventiladores",
    descEn: "Package for three fans installed in one home.",
    descEs: "Pack para montar tres ventiladores en una vivienda.",
    icon: Home,
  },
  {
    slug: "ventilador-techo-dormitorio-valencia",
    en: "Bedroom Fan",
    es: "Ventilador para dormitorio",
    descEn: "Quiet fan mounting for bedrooms and sleeping areas.",
    descEs: "Montaje de ventiladores silenciosos para dormitorios.",
    icon: Home,
  },
  {
    slug: "ventilador-techo-salon-valencia",
    en: "Living Room Fan",
    es: "Ventilador para salón",
    descEn: "Ceiling fan mounting for living rooms and main rooms.",
    descEs: "Montaje de ventiladores para salón y zonas principales.",
    icon: Star,
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Montaje de ventilador de techo en Valencia desde 45 € | THEVULGO"
    : "Ceiling Fan Mounting in Valencia From €45 | THEVULGO";

  const description = isEs
    ? "Montaje de ventilador de techo en Valencia desde 45 €. 2 ventiladores 85 €, 3 ventiladores 125 €. Desmontaje de lámpara o ventilador antiguo y conexión al punto eléctrico existente incluidos."
    : "Ceiling fan mounting in Valencia from €45. 2 fans €85, 3 fans €125. Old light or fan removal and connection to the existing electrical point included.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "montaje ventilador techo valencia",
          "montar ventilador de techo valencia",
          "manitas montaje ventilador techo valencia",
          "precio montaje ventilador techo valencia",
          "montaje ventilador con luz valencia",
          "montaje ventilador techo con mando valencia",
          "cambiar lampara por ventilador valencia",
        ]
      : [
          "ceiling fan mounting valencia",
          "mount ceiling fan valencia",
          "ceiling fan handyman valencia",
          "ceiling fan mounting price valencia",
          "mount fan with light valencia",
          "replace light with ceiling fan valencia",
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
      canonical: `${baseUrl}/${locale}/services/montaje-ventilador-techo`,
      languages: {
        es: `${baseUrl}/es/services/montaje-ventilador-techo`,
        en: `${baseUrl}/en/services/montaje-ventilador-techo`,
        "x-default": `${baseUrl}/es/services/montaje-ventilador-techo`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/montaje-ventilador-techo`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function CeilingFanMountingPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const t = {
    eyebrow: isEs
      ? "Montaje de ventiladores de techo en Valencia"
      : "Ceiling fan mounting in Valencia",
    title: isEs
      ? "Montaje de ventilador de techo desde 45 €"
      : "Ceiling fan mounting from €45",
    subtitle: isEs
      ? "Instalamos ventiladores de techo con luz, mando, aspas retráctiles o modelos clásicos. El precio incluye desmontaje de lámpara o ventilador antiguo y conexión al punto eléctrico existente."
      : "We install ceiling fans with light, remote control, retractable blades or classic models. The price includes removal of the old lamp or fan and connection to the existing electrical point.",
    primaryCta: isEs ? "Pedir presupuesto por WhatsApp" : "Request quote on WhatsApp",
    secondaryCta: isEs ? "Ver precios" : "See prices",
    heroBadge1: isEs ? "Desde 45 €" : "From €45",
    heroBadge2: isEs ? "Mismo día según disponibilidad" : "Same day depending on availability",
    heroBadge3: isEs ? "Precio claro antes de empezar" : "Clear price before starting",
  };

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola THEVULGO. Quiero montar un ventilador de techo en Valencia. ¿Me podéis dar presupuesto?"
      : "Hi THEVULGO. I want to mount a ceiling fan in Valencia. Can you give me a quote?"
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${whatsappText}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "THEVULGO",
      url: `${baseUrl}/${locale}/services/montaje-ventilador-techo`,
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
      sameAs: [baseUrl],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: isEs ? "Montaje de ventilador de techo" : "Ceiling fan mounting",
      serviceType: isEs ? "Montaje de ventilador de techo" : "Ceiling fan mounting",
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
        name: isEs ? "Precios de montaje de ventiladores" : "Ceiling fan mounting prices",
        itemListElement: [
          {
            "@type": "Offer",
            name: isEs ? "1 ventilador" : "1 ceiling fan",
            price: "45",
            priceCurrency: "EUR",
          },
          {
            "@type": "Offer",
            name: isEs ? "2 ventiladores" : "2 ceiling fans",
            price: "85",
            priceCurrency: "EUR",
          },
          {
            "@type": "Offer",
            name: isEs ? "3 ventiladores" : "3 ceiling fans",
            price: "125",
            priceCurrency: "EUR",
          },
        ],
      },
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
          name: isEs ? "Montaje de ventilador de techo" : "Ceiling fan mounting",
          item: `${baseUrl}/${locale}/services/montaje-ventilador-techo`,
        },
      ],
    },
  ];

  const priceCards = [
    {
      title: isEs ? "1 ventilador" : "1 ceiling fan",
      price: "45 €",
      text: isEs
        ? "Ideal para dormitorio, salón, despacho o habitación individual."
        : "Ideal for a bedroom, living room, office or single room.",
      badge: isEs ? "Precio base" : "Base price",
    },
    {
      title: isEs ? "2 ventiladores" : "2 ceiling fans",
      price: "85 €",
      text: isEs
        ? "Perfecto para montar dos ventiladores en la misma visita."
        : "Perfect for mounting two fans in the same visit.",
      badge: isEs ? "Pack recomendado" : "Recommended pack",
    },
    {
      title: isEs ? "3 ventiladores" : "3 ceiling fans",
      price: "125 €",
      text: isEs
        ? "Pack para vivienda completa, dormitorios o varias estancias."
        : "Package for a full home, bedrooms or several rooms.",
      badge: isEs ? "Mejor precio" : "Best value",
    },
  ];

  const includedItems = [
    {
      icon: CheckCircle2,
      title: isEs ? "Montaje del ventilador" : "Fan mounting",
      text: isEs
        ? "Montaje del cuerpo, aspas, soporte, embellecedor y piezas incluidas por el fabricante."
        : "Assembly of the body, blades, bracket, cover and parts included by the manufacturer.",
    },
    {
      icon: Plug,
      title: isEs ? "Conexión al punto eléctrico existente" : "Connection to existing electrical point",
      text: isEs
        ? "Conectamos el ventilador al punto de luz existente, siempre que esté preparado y sea seguro."
        : "We connect the fan to the existing light point, as long as it is ready and safe.",
    },
    {
      icon: Wrench,
      title: isEs ? "Desmontaje de lámpara o ventilador antiguo" : "Old lamp or fan removal",
      text: isEs
        ? "Retiramos la lámpara o ventilador anterior antes de instalar el nuevo."
        : "We remove the previous lamp or fan before installing the new one.",
    },
    {
      icon: Settings,
      title: isEs ? "Prueba final" : "Final test",
      text: isEs
        ? "Probamos luz, velocidades, mando, giro y estabilidad básica antes de terminar."
        : "We test the light, speeds, remote, rotation and basic stability before finishing.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: isEs ? "Nos envías fotos" : "Send us photos",
      text: isEs
        ? "Foto del techo, del punto de luz, del ventilador comprado y de la habitación."
        : "Photo of the ceiling, light point, fan you bought and the room.",
    },
    {
      step: "02",
      title: isEs ? "Confirmamos precio" : "We confirm the price",
      text: isEs
        ? "Te decimos el precio antes de ir, sin sorpresas ni cambios raros."
        : "We tell you the price before coming, with no surprises or strange changes.",
    },
    {
      step: "03",
      title: isEs ? "Montamos el ventilador" : "We mount the fan",
      text: isEs
        ? "Montamos, conectamos, ajustamos y revisamos que todo quede limpio y firme."
        : "We assemble, connect, adjust and check that everything is clean and solid.",
    },
    {
      step: "04",
      title: isEs ? "Probamos contigo" : "We test it with you",
      text: isEs
        ? "Antes de terminar, comprobamos contigo luz, mando, velocidades y funcionamiento."
        : "Before finishing, we check the light, remote, speeds and operation with you.",
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
              {t.eyebrow}
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
              {t.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppConversionLink
  href={whatsappUrl}
  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 text-base font-bold text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-neutral-800"
>
  <MessageCircle className="h-5 w-5" />
  {t.primaryCta}
</WhatsAppConversionLink>

              <a
                href="#precios"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-yellow-300 bg-white px-6 py-4 text-base font-bold text-neutral-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
              >
                <Euro className="h-5 w-5" />
                {t.secondaryCta}
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[t.heroBadge1, t.heroBadge2, t.heroBadge3].map((item) => (
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
                        ? "Instalación limpia, rápida y segura"
                        : "Clean, fast and safe installation"}
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
                          <h3 className="mt-1 text-xl font-black">
                            {card.title}
                          </h3>
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
                        ? "Incluye desmontaje y conexión básica"
                        : "Includes removal and basic connection"}
                    </p>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-neutral-800">
                    {isEs
                      ? "Siempre que exista un punto eléctrico preparado en el techo y el ventilador venga completo con sus piezas."
                      : "As long as there is a prepared electrical point in the ceiling and the fan comes complete with its parts."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
           <section id="precios" className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-neutral-50 px-4 py-2 text-sm font-bold text-neutral-950">
              <Euro className="h-4 w-4 text-yellow-500" />
              {isEs ? "Precios claros" : "Clear prices"}
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
              {isEs
                ? "Precio de montaje de ventilador de techo"
                : "Ceiling fan mounting price"}
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
              {isEs
                ? "Estos precios son para montaje en punto eléctrico existente, con el ventilador completo y el techo preparado para una fijación segura."
                : "These prices apply when there is an existing electrical point, the fan is complete and the ceiling allows safe fixing."}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {priceCards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex rounded-full bg-black px-4 py-2 text-sm font-bold text-yellow-500">
                  {card.badge}
                </div>

                <h3 className="text-2xl font-black text-neutral-950">
                  {card.title}
                </h3>

                <p className="mt-4 text-5xl font-black tracking-tight text-neutral-950">
                  {card.price}
                </p>

                <p className="mt-5 leading-7 text-neutral-600">{card.text}</p>

                <WhatsAppConversionLink
  href={whatsappUrl}
  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-5 py-4 font-bold text-white transition hover:bg-neutral-800"
>
  <MessageCircle className="h-5 w-5" />
  {isEs ? "Reservar por WhatsApp" : "Book on WhatsApp"}
</WhatsAppConversionLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-bold text-neutral-950">
                <Wrench className="h-4 w-4 text-yellow-500" />
                {isEs ? "Incluido" : "Included"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
                {isEs
                  ? "Qué incluye el montaje"
                  : "What the mounting includes"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Hacemos el montaje completo del ventilador, desmontamos la lámpara o ventilador anterior y conectamos al punto eléctrico existente si está preparado."
                  : "We complete the fan mounting, remove the previous lamp or fan and connect to the existing electrical point if it is ready."}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {includedItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-neutral-950">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-black text-neutral-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-neutral-600">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-yellow-300 bg-white p-8 shadow-xl shadow-black/5">
              <BadgeCheck className="h-12 w-12 text-yellow-500" />

              <h2 className="mt-5 text-3xl font-black text-neutral-950 sm:text-4xl">
                {isEs
                  ? "Antes de ir pedimos fotos"
                  : "Before coming, we ask for photos"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Así confirmamos el tipo de techo, el punto de luz, el ventilador comprado y si el precio base aplica sin sorpresas."
                  : "This lets us confirm the ceiling type, light point, fan model and whether the base price applies without surprises."}
              </p>

              <div className="mt-7 grid gap-3">
                {[
                  isEs ? "Foto del techo y punto de luz" : "Photo of ceiling and light point",
                  isEs ? "Foto del ventilador comprado" : "Photo of the fan you bought",
                  isEs ? "Foto de la caja o instrucciones" : "Photo of the box or manual",
                  isEs ? "Dirección o zona de Valencia" : "Address or area in Valencia",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-yellow-300 bg-neutral-50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" />
                    <p className="font-semibold leading-6 text-neutral-800">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-black p-8 text-white shadow-xl shadow-black/10">
              <Fan className="h-12 w-12 text-yellow-500" />

              <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Tipos de ventiladores que montamos"
                  : "Types of fans we mount"}
              </h2>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Con luz LED" : "With LED light",
                  isEs ? "Con mando" : "With remote",
                  isEs ? "Aspas retráctiles" : "Retractable blades",
                  isEs ? "Para dormitorio" : "For bedroom",
                  isEs ? "Para salón" : "For living room",
                  isEs ? "Modelos silenciosos" : "Quiet models",
                  isEs ? "Varias velocidades" : "Several speeds",
                  isEs ? "Sustitución de lámpara" : "Lamp replacement",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 font-bold text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-bold text-neutral-950">
              <Clock3 className="h-4 w-4 text-yellow-500" />
              {isEs ? "Proceso" : "Process"}
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
              {isEs
                ? "Cómo hacemos el montaje del ventilador"
                : "How we mount the ceiling fan"}
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
              {isEs
                ? "Trabajamos con un proceso simple: fotos, precio claro, montaje limpio y prueba final contigo antes de terminar."
                : "We use a simple process: photos, clear price, clean mounting and final testing with you before finishing."}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {processSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-black text-neutral-950">
                  {item.step}
                </div>

                <h3 className="text-xl font-black text-neutral-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-neutral-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-neutral-50 px-4 py-2 text-sm font-bold text-neutral-950">
                <ShieldCheck className="h-4 w-4 text-yellow-500" />
                {isEs ? "Seguridad" : "Safety"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
                {isEs
                  ? "Montaje firme, limpio y revisado"
                  : "Solid, clean and checked mounting"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Un ventilador de techo tiene movimiento, peso y vibración. Por eso no basta con conectar cables: hay que revisar la fijación, el soporte, el equilibrio básico y el funcionamiento."
                  : "A ceiling fan has movement, weight and vibration. That is why it is not only about connecting wires: the fixing, bracket, basic balance and operation must be checked."}
              </p>

              <WhatsAppConversionLink
  href={whatsappUrl}
  className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 font-bold text-white transition hover:bg-neutral-800"
>
  <MessageCircle className="h-5 w-5" />
  {isEs ? "Enviar fotos por WhatsApp" : "Send photos on WhatsApp"}
</WhatsAppConversionLink>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Revisión del soporte" : "Bracket check",
                  text: isEs
                    ? "Comprobamos que el soporte quede bien asentado y preparado para el peso del ventilador."
                    : "We check that the bracket sits properly and is ready for the fan weight.",
                },
                {
                  title: isEs ? "Conexión ordenada" : "Clean connection",
                  text: isEs
                    ? "Conectamos al punto existente de forma ordenada, siempre que esté preparado y sea seguro."
                    : "We connect to the existing point neatly, as long as it is ready and safe.",
                },
                {
                  title: isEs ? "Prueba de velocidades" : "Speed test",
                  text: isEs
                    ? "Probamos las velocidades, el mando, la luz y el giro del ventilador."
                    : "We test speeds, remote, light and fan rotation.",
                },
                {
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Dejamos el ventilador montado, probado y con el área de trabajo recogida."
                    : "We leave the fan mounted, tested and the work area tidy.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-yellow-300 bg-neutral-50 p-6"
                >
                  <CheckCircle2 className="mb-4 h-7 w-7 text-yellow-500" />
                  <h3 className="text-xl font-black text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-neutral-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-black text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-bold text-neutral-950">
                <Sparkles className="h-4 w-4 text-yellow-500" />
                {isEs ? "Ventiladores modernos" : "Modern fans"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                {isEs
                  ? "Montamos ventiladores con luz, mando y aspas retráctiles"
                  : "We mount fans with light, remote and retractable blades"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/70">
                {isEs
                  ? "Muchos modelos actuales parecen una lámpara moderna cuando están apagados. Cuando se activan, abren las aspas y funcionan como ventilador de techo."
                  : "Many current models look like a modern light when switched off. When activated, the blades open and they work as a ceiling fan."}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6">
              <div className="grid gap-4">
                {[
                  isEs ? "Luz LED integrada" : "Integrated LED light",
                  isEs ? "Mando a distancia" : "Remote control",
                  isEs ? "Receptor incluido" : "Included receiver",
                  isEs ? "Aspas ocultas o retráctiles" : "Hidden or retractable blades",
                  isEs ? "Modo verano / invierno si el modelo lo permite" : "Summer / winter mode if the model allows it",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black p-4"
                  >
                    <BadgeCheck className="h-5 w-5 shrink-0 text-yellow-500" />
                    <p className="font-bold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-neutral-50 px-4 py-2 text-sm font-bold text-neutral-950">
                <MapPin className="h-4 w-4 text-yellow-500" />
                {isEs ? "Zona de servicio" : "Service area"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
                {isEs
                  ? "Instalamos ventiladores de techo en Valencia y alrededores"
                  : "We install ceiling fans in Valencia and nearby areas"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Realizamos instalaciones en viviendas, apartamentos, oficinas y pisos turísticos. También trabajamos en localidades cercanas cuando es posible."
                  : "We install ceiling fans in homes, apartments, offices and holiday rentals. We also work in nearby towns whenever possible."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-2xl border border-yellow-300 bg-neutral-50 p-4 font-bold text-neutral-950"
                >
                  <MapPin className="h-5 w-5 text-yellow-500" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-bold text-neutral-950">
                <Fan className="h-4 w-4 text-yellow-500" />
                {isEs ? "Más servicios" : "More services"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
                {isEs
                  ? "Servicios relacionados"
                  : "Related ceiling fan services"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Si buscas una instalación concreta, también tenemos páginas específicas para distintos tipos de ventiladores y situaciones."
                  : "If you are looking for a specific installation, we also have dedicated pages for different types of ceiling fans."}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {relatedPages.map((page) => {
                const Icon = page.icon;

                return (
                  <Link
                    key={page.slug}
                    href={`/${locale}/services/${page.slug}`}
                    className="group rounded-3xl border border-yellow-300 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-neutral-950">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-black text-neutral-950">
                      {isEs ? page.es : page.en}
                    </h3>

                    <p className="mt-3 leading-7 text-neutral-600">
                      {isEs ? page.descEs : page.descEn}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 font-bold text-neutral-950">
                      {isEs ? "Ver servicio" : "View service"}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-neutral-50 px-4 py-2 text-sm font-bold text-neutral-950">
            <Star className="h-4 w-4 text-yellow-500" />
            SEO
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
            {isEs
              ? "Montaje profesional de ventiladores de techo en Valencia"
              : "Professional ceiling fan mounting in Valencia"}
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-600">
            <p>
              {isEs
                ? "El montaje de un ventilador de techo requiere una fijación correcta, una conexión eléctrica segura y una revisión final antes de ponerlo en funcionamiento. Un ventilador bien instalado ofrece un funcionamiento silencioso, estable y cómodo durante todo el año."
                : "Ceiling fan mounting requires proper fixing, safe electrical connection and a final inspection before use. A correctly installed fan provides quiet and reliable operation throughout the year."}
            </p>

            <p>
              {isEs
                ? "En THEVULGO instalamos ventiladores con luz LED, mando a distancia, varias velocidades y modelos con aspas retráctiles. También sustituimos lámparas antiguas por ventiladores nuevos cuando ya existe un punto eléctrico preparado."
                : "At THEVULGO we install fans with LED light, remote control, multiple speeds and retractable blades. We also replace existing ceiling lights with new fans whenever there is a suitable electrical point."}
            </p>

            <p>
              {isEs
                ? "Antes de confirmar la visita solemos pedir fotografías del techo, del ventilador y del punto de luz para confirmar el presupuesto y evitar cualquier sorpresa el día de la instalación."
                : "Before confirming the appointment we usually ask for photos of the ceiling, the fan and the electrical point to confirm the quotation and avoid surprises on installation day."}
            </p>
          </div>
        </div>
      </section>
            <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-bold text-neutral-950">
              <BadgeCheck className="h-4 w-4 text-yellow-500" />
              FAQ
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
              {isEs
                ? "Preguntas frecuentes sobre montaje de ventiladores"
                : "Frequently asked questions about ceiling fan mounting"}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                q: isEs
                  ? "¿Cuánto cuesta montar un ventilador de techo?"
                  : "How much does it cost to mount a ceiling fan?",
                a: isEs
                  ? "El precio es 45 € por 1 ventilador, 85 € por 2 ventiladores y 125 € por 3 ventiladores, si existe un punto eléctrico preparado."
                  : "The price is €45 for 1 fan, €85 for 2 fans and €125 for 3 fans, if there is a prepared electrical point.",
              },
              {
                q: isEs
                  ? "¿Incluye desmontar la lámpara antigua?"
                  : "Does it include removing the old lamp?",
                a: isEs
                  ? "Sí, el desmontaje de una lámpara o ventilador antiguo está incluido en el precio base."
                  : "Yes, removal of an old lamp or fan is included in the base price.",
              },
              {
                q: isEs
                  ? "¿La conexión eléctrica está incluida?"
                  : "Is the electrical connection included?",
                a: isEs
                  ? "Sí, conectamos al punto eléctrico existente si está preparado, accesible y es seguro."
                  : "Yes, we connect to the existing electrical point if it is ready, accessible and safe.",
              },
              {
                q: isEs
                  ? "¿Instaláis ventiladores con luz y mando?"
                  : "Do you install fans with light and remote?",
                a: isEs
                  ? "Sí, montamos ventiladores con luz LED, mando, receptor, varias velocidades y aspas retráctiles."
                  : "Yes, we mount fans with LED light, remote, receiver, several speeds and retractable blades.",
              },
              {
                q: isEs
                  ? "¿Qué fotos tengo que enviar?"
                  : "What photos should I send?",
                a: isEs
                  ? "Foto del techo, del punto de luz, del ventilador comprado y, si es posible, de la caja o instrucciones."
                  : "A photo of the ceiling, the light point, the fan you bought and, if possible, the box or instructions.",
              },
              {
                q: isEs
                  ? "¿Podéis montar el ventilador el mismo día?"
                  : "Can you mount the fan the same day?",
                a: isEs
                  ? "Depende de la disponibilidad y de la zona. Escríbenos por WhatsApp y te decimos la primera hora disponible."
                  : "It depends on availability and area. Message us on WhatsApp and we will tell you the first available slot.",
              },
            ].map((item) => (
              <article
                key={item.q}
                className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-black text-neutral-950">
                  {item.q}
                </h3>
                <p className="mt-3 leading-7 text-neutral-600">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-yellow-300 bg-yellow-400 p-8 shadow-2xl shadow-black/10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-bold text-yellow-500">
                  <Fan className="h-4 w-4" />
                  THEVULGO
                </div>

                <h2 className="text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
                  {isEs
                    ? "¿Quieres montar tu ventilador de techo?"
                    : "Want to mount your ceiling fan?"}
                </h2>

                <p className="mt-4 max-w-3xl text-lg font-medium leading-8 text-neutral-800">
                  {isEs
                    ? "Envíanos fotos del techo y del ventilador por WhatsApp. Te confirmamos precio, disponibilidad y hora antes de ir."
                    : "Send us photos of the ceiling and the fan on WhatsApp. We will confirm price, availability and time before coming."}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <WhatsAppConversionLink
  href={whatsappUrl}
  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 font-bold text-white shadow-lg transition hover:bg-neutral-800"
>
  <MessageCircle className="h-5 w-5" />
  {isEs ? "Pedir presupuesto" : "Request quote"}
</WhatsAppConversionLink>

                <a
                  href={`tel:+${phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black bg-white px-6 py-4 font-bold text-neutral-950 shadow-sm transition hover:bg-neutral-50"
                >
                  <Phone className="h-5 w-5" />
                  +34 610 076 942
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}