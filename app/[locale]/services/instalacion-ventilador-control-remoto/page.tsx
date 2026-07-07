// app/[locale]/services/instalacion-ventilador-control-remoto/page.tsx

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
  Radio,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "instalacion-ventilador-control-remoto";

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
    descEn: "Installation of fans with LED light and remote control.",
    descEs: "Instalación de ventiladores con luz LED y mando.",
    icon: Lightbulb,
  },
  {
    slug: "cambio-lampara-por-ventilador",
    en: "Replace Lamp With Fan",
    es: "Cambiar lámpara por ventilador",
    descEn: "Remove a lamp and install a ceiling fan in the same point.",
    descEs: "Quitamos una lámpara y montamos un ventilador en el mismo punto.",
    icon: Lightbulb,
  },
  {
    slug: "reemplazo-ventilador-techo",
    en: "Ceiling Fan Replacement",
    es: "Reemplazo de ventilador de techo",
    descEn: "Remove the old fan and install a new one.",
    descEs: "Quitamos el ventilador antiguo e instalamos uno nuevo.",
    icon: Wrench,
  },
  {
    slug: "instalar-ventilador-aspas-retractiles-valencia",
    en: "Retractable Blade Fan",
    es: "Ventilador con aspas retráctiles",
    descEn: "Modern retractable blade fan installation.",
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
    ? "Instalación de ventilador con control remoto en Valencia desde 45 € | THEVULGO"
    : "Ceiling Fan With Remote Control Installation in Valencia From €45 | THEVULGO";

  const description = isEs
    ? "Instalación de ventilador de techo con control remoto en Valencia desde 45 €. Montaje, receptor, mando, luz, velocidades y prueba final."
    : "Ceiling fan with remote control installation in Valencia from €45. Mounting, receiver setup, remote control, light, speeds and final test.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "instalacion ventilador control remoto valencia",
          "ventilador techo mando distancia valencia",
          "instalar ventilador con mando valencia",
          "montaje ventilador con receptor valencia",
          "ventilador con luz y mando valencia",
          "manitas ventilador control remoto valencia",
        ]
      : [
          "ceiling fan remote control installation valencia",
          "ceiling fan with remote valencia",
          "install ceiling fan remote receiver valencia",
          "fan with light and remote valencia",
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

export default async function RemoteControlFanPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola THEVULGO. Quiero instalar un ventilador de techo con control remoto en Valencia. ¿Me podéis dar presupuesto?"
      : "Hi THEVULGO. I want to install a ceiling fan with remote control in Valencia. Can you give me a quote?"
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${whatsappText}`;

  const priceCards = [
    {
      title: isEs ? "1 ventilador con mando" : "1 fan with remote",
      price: "45 €",
      text: isEs
        ? "Montaje del ventilador, receptor, mando, luz y prueba de velocidades."
        : "Fan mounting, receiver setup, remote, light and speed testing.",
      badge: isEs ? "Precio base" : "Base price",
    },
    {
      title: isEs ? "2 ventiladores con mando" : "2 fans with remote",
      price: "85 €",
      text: isEs
        ? "Instalación de dos ventiladores con control remoto en una misma visita."
        : "Installation of two remote-control fans in one visit.",
      badge: isEs ? "Pack recomendado" : "Recommended pack",
    },
    {
      title: isEs ? "3 ventiladores con mando" : "3 fans with remote",
      price: "125 €",
      text: isEs
        ? "Ideal para dormitorios, salón y habitaciones en una sola visita."
        : "Ideal for bedrooms, living room and rooms in one visit.",
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
        ? "Instalación de ventilador con control remoto"
        : "Ceiling fan with remote control installation",
      serviceType: isEs
        ? "Montaje de ventilador de techo con mando a distancia"
        : "Ceiling fan remote control installation service",
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
          ? "Precios de instalación de ventilador con mando"
          : "Remote control fan installation prices",
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
            ? "¿Cuánto cuesta instalar un ventilador con control remoto?"
            : "How much does it cost to install a fan with remote control?",
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
            ? "Instalación de ventilador con control remoto"
            : "Ceiling fan with remote control installation",
          item: `${baseUrl}/${locale}/services/${slug}`,
        },
      ],
    },
  ];

  const includedItems = [
    {
      icon: Fan,
      title: isEs ? "Montaje del ventilador" : "Fan mounting",
      text: isEs
        ? "Instalamos el soporte, motor, aspas, embellecedor y piezas principales del ventilador."
        : "We install the bracket, motor, blades, cover and main fan parts.",
    },
    {
      icon: Radio,
      title: isEs ? "Instalación del receptor" : "Receiver installation",
      text: isEs
        ? "Colocamos el receptor del mando dentro del espacio previsto, si el modelo lo permite."
        : "We place the remote receiver inside the prepared space, if the model allows it.",
    },
    {
      icon: Settings,
      title: isEs ? "Configuración del mando" : "Remote setup",
      text: isEs
        ? "Probamos encendido, apagado, luz, velocidades, temporizador y funciones disponibles."
        : "We test on, off, light, speeds, timer and available functions.",
    },
    {
      icon: Plug,
      title: isEs ? "Conexión al punto existente" : "Existing point connection",
      text: isEs
        ? "Conectamos el ventilador al punto eléctrico existente si está preparado y es seguro."
        : "We connect the fan to the existing electrical point if it is ready and safe.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: isEs ? "Fotos por WhatsApp" : "Photos on WhatsApp",
      text: isEs
        ? "Envíanos foto del techo, punto de luz, caja del ventilador y piezas del mando."
        : "Send us photos of the ceiling, light point, fan box and remote parts.",
    },
    {
      step: "02",
      title: isEs ? "Confirmamos precio" : "We confirm price",
      text: isEs
        ? "Revisamos si la instalación entra en el precio base antes de la visita."
        : "We check if the installation fits the base price before the visit.",
    },
    {
      step: "03",
      title: isEs ? "Montaje y conexión" : "Mounting and connection",
      text: isEs
        ? "Montamos el ventilador, conectamos el receptor y dejamos todo ordenado."
        : "We mount the fan, connect the receiver and leave everything tidy.",
    },
    {
      step: "04",
      title: isEs ? "Prueba del mando" : "Remote test",
      text: isEs
        ? "Probamos mando, luz, velocidades, giro, estabilidad y ruido contigo."
        : "We test remote, light, speeds, rotation, stability and noise with you.",
    },
  ];

  const faq = [
    {
      q: isEs
        ? "¿Cuánto cuesta instalar un ventilador con control remoto?"
        : "How much does it cost to install a fan with remote control?",
      a: isEs
        ? "El precio es desde 45 € para un ventilador, 85 € para dos y 125 € para tres, si se usa el punto eléctrico existente."
        : "The price is from €45 for one fan, €85 for two and €125 for three, when using the existing electrical point.",
    },
    {
      q: isEs
        ? "¿Instaláis el receptor del mando?"
        : "Do you install the remote receiver?",
      a: isEs
        ? "Sí. Instalamos el receptor si viene incluido con el ventilador y el espacio del embellecedor permite colocarlo correctamente."
        : "Yes. We install the receiver if it is included with the fan and the canopy space allows it to be placed correctly.",
    },
    {
      q: isEs
        ? "¿Probáis todas las funciones del mando?"
        : "Do you test all remote functions?",
      a: isEs
        ? "Sí. Probamos luz, velocidades, apagado, encendido, temporizador y giro si el modelo lo incluye."
        : "Yes. We test light, speeds, on, off, timer and reverse rotation if the model includes it.",
    },
    {
      q: isEs
        ? "¿Puedo instalar un ventilador con mando donde antes había una lámpara?"
        : "Can I install a fan with remote where there was a lamp?",
      a: isEs
        ? "Normalmente sí, si el punto de luz está bien preparado y el techo permite una fijación segura."
        : "Usually yes, if the light point is properly prepared and the ceiling allows secure fixing.",
    },
    {
      q: isEs
        ? "¿Qué pasa si el mando no responde?"
        : "What if the remote does not respond?",
      a: isEs
        ? "Revisamos pilas, receptor, conexión, emparejamiento y funciones básicas. Si el receptor viene defectuoso, te lo indicamos."
        : "We check batteries, receiver, wiring, pairing and basic functions. If the receiver is defective, we let you know.",
    },
    {
      q: isEs
        ? "¿Qué fotos tengo que enviar?"
        : "What photos should I send?",
      a: isEs
        ? "Foto del techo, punto de luz, ventilador nuevo, mando, receptor, instrucciones y caja del producto."
        : "Photo of the ceiling, light point, new fan, remote, receiver, instructions and product box.",
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
              <Radio className="h-4 w-4" />
              {isEs
                ? "Instalación de ventilador con control remoto en Valencia"
                : "Ceiling fan with remote control installation in Valencia"}
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              {isEs
                ? "Instalación de ventilador con control remoto desde 45 €"
                : "Ceiling fan with remote control from €45"}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
              {isEs
                ? "Montamos ventiladores de techo con mando a distancia, receptor, luz LED y varias velocidades. Dejamos el ventilador instalado, conectado y probado."
                : "We install ceiling fans with remote control, receiver, LED light and multiple speeds. We leave the fan mounted, connected and tested."}
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
                isEs ? "Mando y receptor" : "Remote and receiver",
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
                        ? "Ventilador instalado y mando funcionando"
                        : "Fan installed and remote working"}
                    </h2>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-neutral-950">
                    <Radio className="h-7 w-7" />
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
                        ? "Montaje + receptor + mando + prueba"
                        : "Mounting + receiver + remote + test"}
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
    </main>
  );
}