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
  Wifi,
  Smartphone,
  Radio,
  Home,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "instalacion-ventilador-smart";

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
    slug: "ventilador-techo-con-luz",
    en: "Fan With Light",
    es: "Ventilador de techo con luz",
    descEn: "Installation of ceiling fans with integrated LED light.",
    descEs: "Instalación de ventiladores con luz LED integrada.",
    icon: Lightbulb,
  },
  {
    slug: "instalacion-ventilador-control-remoto",
    en: "Fan With Remote Control",
    es: "Ventilador con control remoto",
    descEn: "Installation of ceiling fans with receiver and remote.",
    descEs: "Instalación de ventiladores con receptor y mando a distancia.",
    icon: Radio,
  },
  {
    slug: "cambio-lampara-por-ventilador",
    en: "Replace Lamp With Fan",
    es: "Cambiar lámpara por ventilador",
    descEn: "Remove a lamp and install a fan in the same ceiling point.",
    descEs: "Quitamos una lámpara y montamos un ventilador en el mismo punto.",
    icon: Lightbulb,
  },
  {
    slug: "reemplazo-ventilador-techo",
    en: "Ceiling Fan Replacement",
    es: "Reemplazo de ventilador de techo",
    descEn: "Old ceiling fan removal and new fan installation.",
    descEs: "Retirada del ventilador antiguo e instalación del nuevo.",
    icon: Wrench,
  },
  {
    slug: "instalar-ventilador-aspas-retractiles-valencia",
    en: "Retractable Blade Fan",
    es: "Ventilador con aspas retráctiles",
    descEn: "Modern fan installation with hidden retractable blades.",
    descEs: "Montaje de ventiladores modernos con aspas retráctiles.",
    icon: Sparkles,
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Instalación de ventilador smart en Valencia desde 45 € | THEVULGO"
    : "Smart Ceiling Fan Installation in Valencia From €45 | THEVULGO";

  const description = isEs
    ? "Instalación de ventilador smart en Valencia desde 45 €. Montaje, conexión, app, WiFi, mando, luz LED, velocidades y prueba final."
    : "Smart ceiling fan installation in Valencia from €45. Mounting, connection, app, WiFi, remote, LED light, speeds and final test.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "instalacion ventilador smart valencia",
          "ventilador techo wifi valencia",
          "instalar ventilador inteligente valencia",
          "ventilador con app valencia",
          "ventilador compatible alexa valencia",
          "ventilador google home valencia",
          "manitas ventilador smart valencia",
        ]
      : [
          "smart ceiling fan installation valencia",
          "wifi ceiling fan valencia",
          "install smart fan valencia",
          "ceiling fan with app valencia",
          "alexa ceiling fan valencia",
          "google home ceiling fan valencia",
          "smart fan handyman valencia",
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

export default async function SmartFanPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola THEVULGO. Quiero instalar un ventilador smart en Valencia. ¿Me podéis dar presupuesto?"
      : "Hi THEVULGO. I want to install a smart ceiling fan in Valencia. Can you give me a quote?"
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${whatsappText}`;

  const priceCards = [
    {
      title: isEs ? "1 ventilador smart" : "1 smart fan",
      price: "45 €",
      text: isEs
        ? "Montaje del ventilador, conexión al punto existente y prueba básica de mando/app."
        : "Fan mounting, connection to the existing point and basic remote/app test.",
      badge: isEs ? "Precio base" : "Base price",
    },
    {
      title: isEs ? "2 ventiladores smart" : "2 smart fans",
      price: "85 €",
      text: isEs
        ? "Instalación de dos ventiladores inteligentes en una misma visita."
        : "Installation of two smart ceiling fans in one visit.",
      badge: isEs ? "Pack recomendado" : "Recommended pack",
    },
    {
      title: isEs ? "3 ventiladores smart" : "3 smart fans",
      price: "125 €",
      text: isEs
        ? "Ideal para instalar ventiladores smart en varias habitaciones el mismo día."
        : "Ideal for installing smart fans in several rooms on the same day.",
      badge: isEs ? "Mejor precio" : "Best value",
    },
  ];

  const includedItems = [
    {
      icon: Fan,
      title: isEs ? "Montaje seguro" : "Safe mounting",
      text: isEs
        ? "Instalamos soporte, motor, aspas, embellecedor y piezas principales del ventilador."
        : "We install the bracket, motor, blades, cover and main fan parts.",
    },
    {
      icon: Wifi,
      title: isEs ? "Conexión WiFi" : "WiFi connection",
      text: isEs
        ? "Ayudamos a conectar el ventilador a la red WiFi si el modelo y la señal lo permiten."
        : "We help connect the fan to WiFi if the model and signal allow it.",
    },
    {
      icon: Smartphone,
      title: isEs ? "App del fabricante" : "Manufacturer app",
      text: isEs
        ? "Probamos la app, encendido, luz, velocidades y funciones disponibles."
        : "We test the app, power, light, speeds and available functions.",
    },
    {
      icon: Home,
      title: isEs ? "Alexa / Google Home" : "Alexa / Google Home",
      text: isEs
        ? "Si el ventilador es compatible, revisamos la conexión básica con asistentes inteligentes."
        : "If the fan is compatible, we check the basic connection with smart assistants.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: isEs ? "Fotos y modelo" : "Photos and model",
      text: isEs
        ? "Envíanos fotos del techo, ventilador, caja, instrucciones y nombre exacto del modelo."
        : "Send photos of the ceiling, fan, box, instructions and exact model name.",
    },
    {
      step: "02",
      title: isEs ? "Revisión previa" : "Initial check",
      text: isEs
        ? "Comprobamos si el montaje entra en precio base y si hace falta algo extra."
        : "We check if the installation fits the base price and if anything extra is needed.",
    },
    {
      step: "03",
      title: isEs ? "Instalación" : "Installation",
      text: isEs
        ? "Montamos el ventilador, conectamos el cableado y colocamos el receptor o módulo smart."
        : "We mount the fan, connect the wiring and place the receiver or smart module.",
    },
    {
      step: "04",
      title: isEs ? "Prueba final" : "Final test",
      text: isEs
        ? "Probamos mando, app, luz, velocidades, estabilidad, ruido y funciones principales."
        : "We test remote, app, light, speeds, stability, noise and main functions.",
    },
  ];

  const smartChecks = [
    isEs ? "Encendido y apagado desde app" : "On/off from app",
    isEs ? "Control de luz LED" : "LED light control",
    isEs ? "Velocidades del ventilador" : "Fan speeds",
    isEs ? "Temporizador si está disponible" : "Timer if available",
    isEs ? "Mando a distancia" : "Remote control",
    isEs ? "Respuesta del módulo WiFi" : "WiFi module response",
  ];

  const faq = [
    {
      q: isEs
        ? "¿Cuánto cuesta instalar un ventilador smart?"
        : "How much does it cost to install a smart fan?",
      a: isEs
        ? "El precio es desde 45 € para un ventilador, 85 € para dos y 125 € para tres, usando el punto eléctrico existente."
        : "The price is from €45 for one fan, €85 for two and €125 for three, using the existing electrical point.",
    },
    {
      q: isEs
        ? "¿Conectáis el ventilador a la app?"
        : "Do you connect the fan to the app?",
      a: isEs
        ? "Sí, ayudamos con la configuración básica de la app si el ventilador, el móvil y la red WiFi funcionan correctamente."
        : "Yes, we help with the basic app setup if the fan, phone and WiFi network work correctly.",
    },
    {
      q: isEs
        ? "¿Funciona con Alexa o Google Home?"
        : "Does it work with Alexa or Google Home?",
      a: isEs
        ? "Depende del modelo. Si el ventilador es compatible, podemos revisar la conexión básica con Alexa o Google Home."
        : "It depends on the model. If the fan is compatible, we can check the basic connection with Alexa or Google Home.",
    },
    {
      q: isEs
        ? "¿Qué pasa si el WiFi no llega bien?"
        : "What if the WiFi signal is weak?",
      a: isEs
        ? "Podemos instalar el ventilador y probarlo, pero si la señal WiFi es débil puede hacer falta mejorar la red o acercar el router."
        : "We can install and test the fan, but if the WiFi signal is weak the network may need improvement or the router may need to be closer.",
    },
    {
      q: isEs
        ? "¿Puedo poner un ventilador smart donde había una lámpara?"
        : "Can I install a smart fan where there was a lamp?",
      a: isEs
        ? "Normalmente sí, si el punto eléctrico está preparado y el techo permite una fijación segura."
        : "Usually yes, if the electrical point is ready and the ceiling allows secure fixing.",
    },
    {
      q: isEs
        ? "¿Qué fotos tengo que enviar?"
        : "What photos should I send?",
      a: isEs
        ? "Foto del techo, punto de luz, ventilador nuevo, caja, instrucciones, mando y módulo smart si viene separado."
        : "Photo of the ceiling, light point, new fan, box, instructions, remote and smart module if it comes separately.",
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
        ? "Instalación de ventilador smart"
        : "Smart ceiling fan installation",
      serviceType: isEs
        ? "Montaje de ventilador inteligente con WiFi y app"
        : "Smart ceiling fan installation with WiFi and app",
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
          ? "Precios de instalación de ventilador smart"
          : "Smart fan installation prices",
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
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
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
            ? "Instalación de ventilador smart"
            : "Smart ceiling fan installation",
          item: `${baseUrl}/${locale}/services/${slug}`,
        },
      ],
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.30),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.18),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-yellow-300 bg-white/80 px-4 py-2 text-sm font-semibold text-yellow-500 shadow-sm backdrop-blur">
              <Wifi className="h-4 w-4" />
              {isEs
                ? "Instalación de ventilador smart en Valencia"
                : "Smart ceiling fan installation in Valencia"}
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              {isEs
                ? "Instalación de ventilador smart desde 45 €"
                : "Smart ceiling fan installation from €45"}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
              {isEs
                ? "Montamos ventiladores inteligentes con WiFi, app, mando a distancia, luz LED y control de velocidades. Dejamos el ventilador instalado, conectado y probado."
                : "We install smart ceiling fans with WiFi, app, remote control, LED light and speed control. We leave the fan mounted, connected and tested."}
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
                isEs ? "WiFi y app" : "WiFi and app",
                isEs ? "Prueba completa" : "Full test",
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
                        ? "Ventilador smart listo para usar"
                        : "Smart fan ready to use"}
                    </h2>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-neutral-950">
                    <Smartphone className="h-7 w-7" />
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
                        ? "Montaje + mando + app + prueba"
                        : "Mounting + remote + app + test"}
                    </p>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-neutral-800">
                    {isEs
                      ? "Aplicable si el punto eléctrico existente está preparado y el ventilador viene completo."
                      : "Applies when the existing electrical point is ready and the fan comes complete."}
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
                ? "Precio para instalar un ventilador smart"
                : "Price to install a smart ceiling fan"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              {isEs
                ? "Incluye montaje del ventilador, conexión al punto eléctrico existente, prueba del mando y revisión básica de la app si el modelo lo permite."
                : "Includes fan mounting, connection to the existing electrical point, remote test and basic app check if the model allows it."}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {priceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20"
              >
                <p className="text-sm font-bold text-yellow-400">
                  {card.badge}
                </p>

                <h3 className="mt-3 text-2xl font-black">{card.title}</h3>

                <p className="mt-4 text-5xl font-black text-yellow-400">
                  {card.price}
                </p>

                <p className="mt-4 leading-7 text-white/70">{card.text}</p>

                <WhatsAppConversionLink
  href={whatsappUrl}
  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-5 py-4 font-black text-neutral-950 transition hover:-translate-y-0.5 hover:bg-yellow-300"
>
  <MessageCircle className="h-5 w-5" />
  {isEs ? "Reservar por WhatsApp" : "Book on WhatsApp"}
</WhatsAppConversionLink>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-yellow-400/30 bg-yellow-400/10 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-black text-yellow-400">
                  {isEs
                    ? "Qué incluye el precio base"
                    : "What the base price includes"}
                </h3>

                <p className="mt-3 max-w-3xl leading-8 text-white/75">
                  {isEs
                    ? "El precio base está pensado para instalaciones normales: punto eléctrico existente, ventilador completo, techo preparado y montaje sin modificaciones especiales."
                    : "The base price is for normal installations: existing electrical point, complete fan, prepared ceiling and mounting without special modifications."}
                </p>
              </div>

              <WhatsAppConversionLink
  href={whatsappUrl}
  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-yellow-400 bg-transparent px-5 py-4 font-black text-yellow-400 transition hover:-translate-y-0.5 hover:bg-yellow-400 hover:text-neutral-950"
>
  <Smartphone className="h-5 w-5" />
  {isEs ? "Enviar modelo" : "Send model"}
</WhatsAppConversionLink>
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
                  ? "Instalamos el ventilador y revisamos las funciones smart"
                  : "We install the fan and check the smart functions"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Montamos la estructura, conectamos el cableado, colocamos el módulo o receptor y probamos las funciones principales: mando, luz, velocidades, app y WiFi."
                  : "We mount the structure, connect the wiring, place the module or receiver and test the main functions: remote, light, speeds, app and WiFi."}
              </p>

              <WhatsAppConversionLink
  href={whatsappUrl}
  className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 font-black text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-neutral-800"
>
  <Phone className="h-5 w-5" />
  {isEs ? "Consultar disponibilidad" : "Check availability"}
</WhatsAppConversionLink>
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

                    <p className="mt-3 leading-7 text-neutral-600">
                      {item.text}
                    </p>
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
                ? "Cómo instalamos un ventilador inteligente"
                : "How we install a smart ceiling fan"}
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
              {isEs
                ? "Primero revisamos el modelo y el punto del techo. Después hacemos el montaje, conexión eléctrica y prueba de las funciones smart disponibles."
                : "First we check the model and ceiling point. Then we complete the mounting, electrical connection and test the available smart functions."}
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

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-bold text-yellow-600">
                <Wifi className="h-4 w-4" />
                {isEs ? "WiFi, app y mando" : "WiFi, app and remote"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {isEs
                  ? "Comprobamos que el ventilador responda correctamente"
                  : "We check that the fan responds correctly"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Antes de terminar revisamos el mando, la app del fabricante, la respuesta del módulo smart y las funciones disponibles según el modelo del ventilador."
                  : "Before finishing, we check the remote, manufacturer app, smart module response and available functions depending on the fan model."}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {smartChecks.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-yellow-300 bg-white p-4 font-bold"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-yellow-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-300 bg-neutral-950 p-6 text-white shadow-2xl shadow-black/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-neutral-950">
                <Settings className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-black">
                {isEs ? "Importante antes de la visita" : "Important before the visit"}
              </h3>

              <p className="mt-4 leading-8 text-white/75">
                {isEs
                  ? "Para configurar la parte smart, normalmente hace falta tener el móvil, la app del fabricante instalada, acceso al WiFi y la cuenta preparada si el modelo lo requiere."
                  : "To set up the smart part, you usually need the phone, manufacturer app installed, WiFi access and the account ready if the model requires it."}
              </p>

              <div className="mt-6 space-y-3">
                {[
                  isEs ? "Nombre y contraseña del WiFi" : "WiFi name and password",
                  isEs ? "App del fabricante" : "Manufacturer app",
                  isEs ? "Cuenta creada si hace falta" : "Account created if needed",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 font-bold"
                  >
                    <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                    {item}
                  </div>
                ))}
              </div>

              <WhatsAppConversionLink
  href={whatsappUrl}
  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-5 py-4 font-black text-neutral-950 transition hover:-translate-y-0.5 hover:bg-yellow-300"
>
  <MessageCircle className="h-5 w-5" />
  {isEs ? "Enviar fotos por WhatsApp" : "Send photos on WhatsApp"}
</WhatsAppConversionLink>
            </div>
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
                  ? "Instalación de ventiladores smart en Valencia"
                  : "Smart fan installation in Valencia"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Trabajamos en Valencia ciudad y alrededores. Envíanos tu ubicación, el modelo del ventilador y fotos del techo para confirmar disponibilidad."
                  : "We work in Valencia city and nearby areas. Send us your location, fan model and ceiling photos to confirm availability."}
              </p>

              <div className="mt-8 rounded-[2rem] border border-yellow-300 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-yellow-500" />
                  <h3 className="text-xl font-black">
                    {isEs
                      ? "Precio confirmado antes de ir"
                      : "Price confirmed before the visit"}
                  </h3>
                </div>

                <p className="mt-3 leading-7 text-neutral-600">
                  {isEs
                    ? "Con fotos podemos revisar si la instalación entra en el precio base o si hay algún detalle especial: techo complicado, falta de piezas, soporte dañado o cableado no preparado."
                    : "With photos we can check if the installation fits the base price or if there is any special detail: complicated ceiling, missing parts, damaged bracket or wiring not ready."}
                </p>
              </div>
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
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-bold text-yellow-600">
                <Sparkles className="h-4 w-4" />
                {isEs ? "Ventiladores modernos" : "Modern ceiling fans"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {isEs
                  ? "Ideal para ventiladores con WiFi, app, mando y luz LED"
                  : "Ideal for fans with WiFi, app, remote and LED light"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Muchos ventiladores actuales vienen con varias funciones: control desde el móvil, mando, cambio de temperatura de luz, temporizador, modo noche y compatibilidad con asistentes. Nosotros hacemos el montaje y revisamos las funciones principales para que puedas usarlo desde el primer día."
                  : "Many current fans include several functions: phone control, remote, light temperature change, timer, night mode and assistant compatibility. We handle the installation and check the main functions so you can use it from day one."}
              </p>
            </div>

            <div className="rounded-[2rem] border border-yellow-300 bg-neutral-50 p-6 shadow-sm">
              <div className="grid gap-4">
                {[
                  {
                    icon: Smartphone,
                    title: isEs ? "Control desde móvil" : "Phone control",
                    text: isEs
                      ? "Prueba básica desde la app del fabricante."
                      : "Basic test from the manufacturer app.",
                  },
                  {
                    icon: Wifi,
                    title: isEs ? "Módulo WiFi" : "WiFi module",
                    text: isEs
                      ? "Revisión de respuesta y conexión si el modelo lo permite."
                      : "Response and connection check if the model allows it.",
                  },
                  {
                    icon: Lightbulb,
                    title: isEs ? "Luz LED" : "LED light",
                    text: isEs
                      ? "Encendido, apagado e intensidad o temperatura si está disponible."
                      : "On, off and brightness or temperature if available.",
                  },
                  {
                    icon: Radio,
                    title: isEs ? "Mando a distancia" : "Remote control",
                    text: isEs
                      ? "Comprobamos velocidades, luz y funciones principales."
                      : "We check speeds, light and main functions.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-yellow-300 bg-white p-5"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-neutral-950">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div>
                          <h3 className="text-lg font-black">{item.title}</h3>
                          <p className="mt-2 leading-7 text-neutral-600">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-400">
                <Plug className="h-4 w-4" />
                {isEs ? "Punto eléctrico existente" : "Existing electrical point"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {isEs
                  ? "Instalación sobre el punto de luz actual"
                  : "Installation on the current light point"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/70">
                {isEs
                  ? "El precio base se aplica cuando instalamos el ventilador smart en un punto eléctrico ya existente, por ejemplo donde antes había una lámpara o un ventilador antiguo."
                  : "The base price applies when we install the smart fan on an existing electrical point, for example where there was previously a lamp or an old fan."}
              </p>

              <WhatsAppConversionLink
  href={whatsappUrl}
  className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 font-black text-neutral-950 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-yellow-300"
>
  <MessageCircle className="h-5 w-5" />
  {isEs ? "Enviar foto del techo" : "Send ceiling photo"}
</WhatsAppConversionLink>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Incluido" : "Included",
                  items: [
                    isEs ? "Montaje del soporte" : "Bracket mounting",
                    isEs ? "Conexión básica" : "Basic connection",
                    isEs ? "Receptor o módulo" : "Receiver or module",
                    isEs ? "Prueba final" : "Final test",
                  ],
                },
                {
                  title: isEs ? "Puede ser extra" : "May be extra",
                  items: [
                    isEs ? "Nuevo punto eléctrico" : "New electrical point",
                    isEs ? "Techo no preparado" : "Ceiling not ready",
                    isEs ? "Piezas faltantes" : "Missing parts",
                    isEs ? "Problemas de WiFi" : "WiFi problems",
                  ],
                },
              ].map((block) => (
                <div
                  key={block.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="text-2xl font-black text-yellow-400">
                    {block.title}
                  </h3>

                  <div className="mt-5 space-y-3">
                    {block.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 font-bold"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-yellow-400" />
                        {item}
                      </div>
                    ))}
                  </div>
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

            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
              {isEs
                ? "Si tu instalación no es exactamente smart, también podemos ayudarte con ventiladores con mando, con luz, reemplazos y cambios de lámpara por ventilador."
                : "If your installation is not exactly smart, we can also help with remote-control fans, fans with light, replacements and lamp-to-fan changes."}
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
                ? "Preguntas frecuentes sobre ventiladores smart"
                : "Frequently asked questions about smart ceiling fans"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              {isEs
                ? "Resolvemos las dudas más comunes antes de instalar un ventilador inteligente con WiFi, app, mando o control por voz."
                : "We answer the most common questions before installing a smart fan with WiFi, app, remote or voice control."}
            </p>
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
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-yellow-400">
            <Wifi className="h-8 w-8" />
          </div>

          <h2 className="mx-auto max-w-4xl text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl lg:text-6xl">
            {isEs
              ? "¿Quieres instalar un ventilador smart?"
              : "Want to install a smart ceiling fan?"}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-800">
            {isEs
              ? "Envíanos fotos del techo, punto de luz, ventilador, mando, módulo smart e instrucciones. Te confirmamos precio y disponibilidad por WhatsApp."
              : "Send us photos of the ceiling, light point, fan, remote, smart module and instructions. We confirm price and availability on WhatsApp."}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppConversionLink
  href={whatsappUrl}
  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-7 py-4 text-base font-black text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-neutral-800"
>
  <MessageCircle className="h-5 w-5" />
  {isEs ? "Pedir presupuesto ahora" : "Request quote now"}
</WhatsAppConversionLink>

            <a
              href={`tel:+${phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black bg-yellow-400 px-7 py-4 text-base font-black text-neutral-950 transition hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              <Phone className="h-5 w-5" />
              +34 610 076 942
            </a>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
            {[
              isEs ? "Montaje desde 45 €" : "Installation from €45",
              isEs ? "App y mando" : "App and remote",
              isEs ? "Valencia y alrededores" : "Valencia and nearby areas",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/15 bg-white/40 p-4 font-black text-neutral-950"
              >
                <CheckCircle2 className="mx-auto mb-2 h-5 w-5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}