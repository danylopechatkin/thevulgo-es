// app/[locale]/services/ventilador-techo-con-luz/page.tsx

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
  Zap,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "ventilador-techo-con-luz";

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
    descEn: "General ceiling fan mounting service in Valencia.",
    descEs: "Servicio general de montaje de ventiladores de techo en Valencia.",
    icon: Fan,
  },
  {
    slug: "instalacion-ventilador-techo-valencia",
    en: "Fan Installation Valencia",
    es: "Instalación de ventilador en Valencia",
    descEn: "Main installation page with prices and service areas.",
    descEs: "Página principal con precios y zonas de servicio.",
    icon: Wrench,
  },
  {
    slug: "cambiar-lampara-por-ventilador-valencia",
    en: "Replace Lamp With Fan",
    es: "Cambiar lámpara por ventilador",
    descEn: "Remove the old lamp and install a new ceiling fan.",
    descEs: "Retirada de lámpara antigua e instalación de ventilador nuevo.",
    icon: Plug,
  },
  {
    slug: "instalar-ventilador-mando-valencia",
    en: "Fan With Remote",
    es: "Ventilador con mando",
    descEn: "Remote control setup, receiver connection and testing.",
    descEs: "Configuración de mando, receptor y prueba final.",
    icon: Settings,
  },
  {
    slug: "instalar-ventilador-aspas-retractiles-valencia",
    en: "Retractable Blade Fan",
    es: "Ventilador con aspas retráctiles",
    descEn: "Modern fans with hidden or retractable blades.",
    descEs: "Ventiladores modernos con aspas ocultas o retráctiles.",
    icon: Sparkles,
  },
  {
    slug: "ventilador-techo-dormitorio-valencia",
    en: "Bedroom Fan",
    es: "Ventilador para dormitorio",
    descEn: "Quiet ceiling fan installation for bedrooms.",
    descEs: "Instalación de ventiladores silenciosos para dormitorios.",
    icon: Home,
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Ventilador de techo con luz en Valencia desde 45 € | THEVULGO"
    : "Ceiling Fan With Light Installation in Valencia From €45 | THEVULGO";

  const description = isEs
    ? "Instalación de ventilador de techo con luz en Valencia desde 45 €. Montaje, conexión al punto eléctrico existente, desmontaje de lámpara antigua y prueba de luz, mando y velocidades."
    : "Ceiling fan with light installation in Valencia from €45. Mounting, connection to the existing electrical point, old lamp removal and testing of light, remote and speeds.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "ventilador techo con luz valencia",
          "instalar ventilador de techo con luz valencia",
          "montaje ventilador techo luz valencia",
          "ventilador con luz led valencia",
          "cambiar lampara por ventilador con luz valencia",
          "manitas ventilador techo con luz valencia",
        ]
      : [
          "ceiling fan with light valencia",
          "install ceiling fan with light valencia",
          "ceiling fan led light installation valencia",
          "replace lamp with ceiling fan with light valencia",
          "handyman ceiling fan with light valencia",
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

export default async function CeilingFanWithLightPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola THEVULGO. Quiero instalar un ventilador de techo con luz en Valencia. ¿Me podéis dar presupuesto?"
      : "Hi THEVULGO. I want to install a ceiling fan with light in Valencia. Can you give me a quote?"
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${whatsappText}`;

  const priceCards = [
    {
      title: isEs ? "1 ventilador con luz" : "1 fan with light",
      price: "45 €",
      text: isEs
        ? "Montaje de un ventilador con luz LED en punto eléctrico existente."
        : "Installation of one ceiling fan with LED light on an existing electrical point.",
      badge: isEs ? "Desde" : "From",
    },
    {
      title: isEs ? "2 ventiladores con luz" : "2 fans with light",
      price: "85 €",
      text: isEs
        ? "Pack para dos habitaciones en la misma visita."
        : "Package for two rooms in the same visit.",
      badge: isEs ? "Pack" : "Pack",
    },
    {
      title: isEs ? "3 ventiladores con luz" : "3 fans with light",
      price: "125 €",
      text: isEs
        ? "Ideal para dormitorios, salón y vivienda completa."
        : "Ideal for bedrooms, living room and full home installation.",
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
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valencia",
        addressCountry: "ES",
      },
      areaServed: areas.map((area) => ({
        "@type": "City",
        name: area,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: isEs
        ? "Instalación de ventilador de techo con luz"
        : "Ceiling fan with light installation",
      serviceType: isEs
        ? "Instalación de ventilador de techo con luz"
        : "Ceiling fan with light installation",
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
          ? "Precios de ventilador de techo con luz"
          : "Ceiling fan with light prices",
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
            ? "¿Cuánto cuesta instalar un ventilador de techo con luz?"
            : "How much does it cost to install a ceiling fan with light?",
          acceptedAnswer: {
            "@type": "Answer",
            text: isEs
              ? "El precio empieza desde 45 € para 1 ventilador, 85 € para 2 ventiladores y 125 € para 3 ventiladores, si existe un punto eléctrico preparado."
              : "The price starts from €45 for 1 fan, €85 for 2 fans and €125 for 3 fans, if there is a prepared electrical point.",
          },
        },
        {
          "@type": "Question",
          name: isEs
            ? "¿Incluye desmontar la lámpara antigua?"
            : "Does it include removing the old lamp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: isEs
              ? "Sí, el desmontaje de la lámpara anterior está incluido en el precio base."
              : "Yes, removal of the previous lamp is included in the base price.",
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
            ? "Ventilador de techo con luz"
            : "Ceiling fan with light",
          item: `${baseUrl}/${locale}/services/${slug}`,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-yellow-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.18),transparent_42%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-yellow-300 bg-white/80 px-4 py-2 text-sm font-bold text-yellow-500 shadow-sm backdrop-blur">
              <Lightbulb className="h-4 w-4" />
              {isEs
                ? "Ventilador de techo con luz en Valencia"
                : "Ceiling fan with light in Valencia"}
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              {isEs
                ? "Instalación de ventilador de techo con luz desde 45 €"
                : "Ceiling fan with light installation from €45"}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
              {isEs
                ? "Montamos ventiladores de techo con luz LED, mando a distancia, receptor y varias velocidades. Desmontamos la lámpara antigua, instalamos el ventilador y comprobamos luz, giro y estabilidad."
                : "We install ceiling fans with LED light, remote control, receiver and several speeds. We remove the old lamp, mount the fan and test light, rotation and stability."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppConversionLink
  href={whatsappUrl}
  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 text-base font-bold text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-neutral-800"
>
  <MessageCircle className="h-5 w-5" />
  {isEs ? "Pedir presupuesto por WhatsApp" : "Request quote on WhatsApp"}
</WhatsAppConversionLink>

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
                isEs ? "Luz y mando probados" : "Light and remote tested",
                isEs ? "Precio claro antes de ir" : "Clear price before visit",
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

          <div className="rounded-[2.5rem] border border-yellow-300 bg-neutral-50 p-5 shadow-2xl shadow-black/10">
            <div className="rounded-[2rem] bg-black p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-yellow-500">THEVULGO</p>
                  <h2 className="mt-2 text-2xl font-black">
                    {isEs ? "Ventilador + luz + mando" : "Fan + light + remote"}
                  </h2>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-neutral-950">
                  <Lightbulb className="h-7 w-7" />
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
                        <p className="text-sm font-bold text-yellow-500">
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
                      ? "Incluye desmontaje de lámpara antigua"
                      : "Old lamp removal included"}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-6 text-neutral-800">
                  {isEs
                    ? "También conectamos el ventilador al punto eléctrico existente si está preparado y es seguro."
                    : "We also connect the fan to the existing electrical point if it is ready and safe."}
                </p>
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
                ? "Precio para instalar ventilador de techo con luz"
                : "Price to install a ceiling fan with light"}
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
              {isEs
                ? "El precio base aplica cuando ya existe un punto de luz en el techo, el ventilador viene completo y no hace falta crear una nueva línea eléctrica."
                : "The base price applies when there is already a ceiling light point, the fan is complete and no new electrical line is required."}
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
                <Lightbulb className="h-4 w-4 text-yellow-500" />
                {isEs ? "Qué incluye" : "What is included"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
                {isEs
                  ? "Montaje completo del ventilador con luz"
                  : "Complete mounting of the fan with light"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Nos encargamos del montaje físico, la conexión básica, el receptor del mando cuando el modelo lo trae y la prueba final de luz, velocidades y giro."
                  : "We handle the physical mounting, basic connection, remote receiver when included and final testing of light, speeds and rotation."}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: Wrench,
                  title: isEs ? "Montaje del cuerpo" : "Body mounting",
                  text: isEs
                    ? "Montamos soporte, motor, embellecedor, aspas y piezas incluidas."
                    : "We mount the bracket, motor, cover, blades and included parts.",
                },
                {
                  icon: Zap,
                  title: isEs ? "Conexión de luz LED" : "LED light connection",
                  text: isEs
                    ? "Conectamos la luz al punto existente si está preparado y es seguro."
                    : "We connect the light to the existing point if it is ready and safe.",
                },
                {
                  icon: Settings,
                  title: isEs ? "Mando y receptor" : "Remote and receiver",
                  text: isEs
                    ? "Colocamos el receptor y probamos mando, luz y velocidades."
                    : "We place the receiver and test remote, light and speeds.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Prueba final" : "Final test",
                  text: isEs
                    ? "Revisamos funcionamiento, estabilidad básica y acabado antes de terminar."
                    : "We check operation, basic stability and finish before leaving.",
                },
              ].map((item) => {
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
              <Sparkles className="h-12 w-12 text-yellow-500" />

              <h2 className="mt-5 text-3xl font-black text-neutral-950 sm:text-4xl">
                {isEs
                  ? "Ideal para sustituir una lámpara normal"
                  : "Ideal for replacing a normal lamp"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Si ahora tienes una lámpara en el techo, normalmente podemos retirarla e instalar un ventilador con luz en el mismo punto eléctrico. Antes de confirmar, revisamos fotos para evitar sorpresas."
                  : "If you currently have a ceiling lamp, we can usually remove it and install a fan with light on the same electrical point. Before confirming, we check photos to avoid surprises."}
              </p>

              <div className="mt-7 grid gap-3">
                {[
                  isEs ? "Desmontaje de lámpara antigua" : "Old lamp removal",
                  isEs ? "Instalación del nuevo ventilador" : "New fan installation",
                  isEs ? "Conexión de luz y motor" : "Light and motor connection",
                  isEs ? "Prueba con el mando" : "Remote control test",
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
                  ? "Modelos que podemos montar"
                  : "Models we can install"}
              </h2>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Ventilador con LED" : "Fan with LED",
                  isEs ? "Ventilador con mando" : "Fan with remote",
                  isEs ? "Aspas retráctiles" : "Retractable blades",
                  isEs ? "Aspas ocultas" : "Hidden blades",
                  isEs ? "Plafón ventilador" : "Ceiling light fan",
                  isEs ? "Modelo silencioso" : "Quiet model",
                  isEs ? "Dormitorio" : "Bedroom",
                  isEs ? "Salón" : "Living room",
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
                ? "Cómo instalamos tu ventilador con luz"
                : "How we install your fan with light"}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              {
                step: "01",
                title: isEs ? "Fotos por WhatsApp" : "Photos on WhatsApp",
                text: isEs
                  ? "Nos envías techo, punto de luz, caja del ventilador y habitación."
                  : "You send ceiling, light point, fan box and room photos.",
              },
              {
                step: "02",
                title: isEs ? "Precio confirmado" : "Price confirmed",
                text: isEs
                  ? "Confirmamos si aplica el precio base antes de ir."
                  : "We confirm whether the base price applies before coming.",
              },
              {
                step: "03",
                title: isEs ? "Montaje y conexión" : "Mounting and connection",
                text: isEs
                  ? "Retiramos la lámpara, montamos ventilador y conectamos luz."
                  : "We remove the lamp, mount the fan and connect the light.",
              },
              {
                step: "04",
                title: isEs ? "Prueba final" : "Final test",
                text: isEs
                  ? "Probamos mando, LED, velocidades, giro y estabilidad."
                  : "We test remote, LED, speeds, rotation and stability.",
              },
            ].map((item) => (
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
                {isEs ? "Importante" : "Important"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
                {isEs
                  ? "No es solo una lámpara: también tiene peso y movimiento"
                  : "It is not only a lamp: it also has weight and movement"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Un ventilador con luz necesita quedar bien fijado porque el motor genera movimiento. Revisamos la base, el soporte y el funcionamiento antes de dar el trabajo por terminado."
                  : "A fan with light must be properly fixed because the motor creates movement. We check the base, bracket and operation before finishing the job."}
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
                  title: isEs ? "Soporte firme" : "Solid bracket",
                  text: isEs
                    ? "El soporte debe quedar bien fijado para reducir vibración y movimiento."
                    : "The bracket must be firmly fixed to reduce vibration and movement.",
                },
                {
                  title: isEs ? "Cableado ordenado" : "Neat wiring",
                  text: isEs
                    ? "Conectamos luz y motor de forma ordenada en el punto existente."
                    : "We connect light and motor neatly at the existing point.",
                },
                {
                  title: isEs ? "Mando comprobado" : "Remote checked",
                  text: isEs
                    ? "Probamos encendido, apagado, velocidades y funciones disponibles."
                    : "We test on, off, speeds and available functions.",
                },
                {
                  title: isEs ? "Acabado limpio" : "Clean finish",
                  text: isEs
                    ? "Dejamos el ventilador montado, probado y la zona recogida."
                    : "We leave the fan mounted, tested and the area tidy.",
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
                <Star className="h-4 w-4 text-yellow-500" />
                {isEs ? "Para dormitorio y salón" : "For bedroom and living room"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                {isEs
                  ? "Más luz, más aire y mejor acabado en la habitación"
                  : "More light, more airflow and a better finish in the room"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/70">
                {isEs
                  ? "Los ventiladores con luz son una buena opción cuando quieres sustituir una lámpara normal y ganar ventilación sin perder iluminación."
                  : "Fans with light are a good option when you want to replace a normal lamp and add airflow without losing lighting."}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6">
              <div className="grid gap-4">
                {[
                  isEs ? "Luz LED integrada" : "Integrated LED light",
                  isEs ? "Ventilación para verano" : "Airflow for summer",
                  isEs ? "Mando a distancia" : "Remote control",
                  isEs ? "Diseño moderno" : "Modern design",
                  isEs ? "Una sola instalación" : "One installation",
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
                  ? "Instalamos ventiladores con luz en Valencia y alrededores"
                  : "We install fans with light in Valencia and nearby areas"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Trabajamos en pisos, apartamentos, viviendas, oficinas y locales. Para localidades cercanas, escríbenos por WhatsApp y confirmamos disponibilidad."
                  : "We work in flats, apartments, homes, offices and premises. For nearby towns, message us on WhatsApp and we will confirm availability."}
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
                {isEs ? "Más páginas" : "More pages"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
                {isEs ? "Servicios relacionados" : "Related services"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "También puedes ver páginas específicas para otros tipos de ventiladores, instalación con mando, aspas retráctiles o sustitución de lámpara."
                  : "You can also view specific pages for other fan types, remote control setup, retractable blades or lamp replacement."}
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
              ? "Instalación profesional de ventiladores de techo con luz en Valencia"
              : "Professional installation of ceiling fans with light in Valencia"}
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-600">
            <p>
              {isEs
                ? "Un ventilador de techo con luz combina iluminación y ventilación en una sola instalación. Es una solución práctica para dormitorios, salones, despachos y habitaciones donde se quiere mejorar el confort sin instalar dos elementos separados."
                : "A ceiling fan with light combines lighting and airflow in one installation. It is a practical solution for bedrooms, living rooms, offices and rooms where comfort is needed without installing two separate elements."}
            </p>

            <p>
              {isEs
                ? "En THEVULGO instalamos ventiladores con luz LED, mando a distancia, receptor, varias velocidades y modelos modernos con aspas retráctiles. Si ya existe una lámpara en el techo, normalmente podemos retirarla y montar el ventilador en el mismo punto."
                : "At THEVULGO we install fans with LED light, remote control, receiver, several speeds and modern models with retractable blades. If there is already a ceiling lamp, we can usually remove it and mount the fan in the same point."}
            </p>

            <p>
              {isEs
                ? "Antes de confirmar la visita pedimos fotos del techo, del punto de luz y del ventilador comprado. Así confirmamos el presupuesto, revisamos si el precio base aplica y evitamos sorpresas el día del montaje."
                : "Before confirming the visit we ask for photos of the ceiling, the light point and the fan you bought. This helps us confirm the quotation, check whether the base price applies and avoid surprises on installation day."}
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
                ? "Preguntas frecuentes sobre ventiladores con luz"
                : "Frequently asked questions about fans with light"}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                q: isEs
                  ? "¿Cuánto cuesta instalar un ventilador de techo con luz?"
                  : "How much does it cost to install a ceiling fan with light?",
                a: isEs
                  ? "El precio es desde 45 € por 1 ventilador, 85 € por 2 y 125 € por 3, si el punto eléctrico ya está preparado."
                  : "The price is from €45 for 1 fan, €85 for 2 and €125 for 3, if the electrical point is already prepared.",
              },
              {
                q: isEs
                  ? "¿Incluye desmontar la lámpara antigua?"
                  : "Does it include removing the old lamp?",
                a: isEs
                  ? "Sí, desmontar una lámpara antigua está incluido en el precio base."
                  : "Yes, removing an old lamp is included in the base price.",
              },
              {
                q: isEs
                  ? "¿Probáis la luz LED y el mando?"
                  : "Do you test the LED light and remote?",
                a: isEs
                  ? "Sí, probamos la luz, el mando, las velocidades, el giro y el funcionamiento general."
                  : "Yes, we test the light, remote, speeds, rotation and general operation.",
              },
              {
                q: isEs
                  ? "¿Instaláis ventiladores con aspas retráctiles?"
                  : "Do you install fans with retractable blades?",
                a: isEs
                  ? "Sí, montamos modelos con aspas retráctiles, aspas ocultas, luz LED y mando."
                  : "Yes, we install models with retractable blades, hidden blades, LED light and remote.",
              },
              {
                q: isEs
                  ? "¿Qué fotos tengo que enviar?"
                  : "What photos should I send?",
                a: isEs
                  ? "Foto del techo, punto de luz, ventilador comprado, caja o instrucciones y zona de Valencia."
                  : "Photo of the ceiling, light point, fan you bought, box or manual and area in Valencia.",
              },
              {
                q: isEs
                  ? "¿El precio incluye crear un punto eléctrico nuevo?"
                  : "Does the price include creating a new electrical point?",
                a: isEs
                  ? "No. El precio base es para conexión al punto eléctrico existente. Si hay que crear una línea nueva, se presupuesta aparte."
                  : "No. The base price is for connection to the existing electrical point. If a new line is needed, it is quoted separately.",
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
                  <Lightbulb className="h-4 w-4" />
                  THEVULGO
                </div>

                <h2 className="text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
                  {isEs
                    ? "¿Quieres instalar un ventilador de techo con luz?"
                    : "Want to install a ceiling fan with light?"}
                </h2>

                <p className="mt-4 max-w-3xl text-lg font-medium leading-8 text-neutral-800">
                  {isEs
                    ? "Envíanos fotos del techo, del punto de luz y del ventilador. Te confirmamos precio, disponibilidad y hora por WhatsApp."
                    : "Send us photos of the ceiling, light point and fan. We will confirm price, availability and time on WhatsApp."}
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