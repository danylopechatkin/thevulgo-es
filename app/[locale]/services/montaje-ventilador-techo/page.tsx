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

const areas = [
  "Valencia",
  "Campanar",
  "Ruzafa",
  "Russaffа",
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
      name: isEs
        ? "Montaje de ventilador de techo"
        : "Ceiling fan mounting",
      serviceType: isEs
        ? "Montaje de ventilador de techo"
        : "Ceiling fan mounting",
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
          ? "Precios de montaje de ventiladores"
          : "Ceiling fan mounting prices",
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
          name: isEs
            ? "Montaje de ventilador de techo"
            : "Ceiling fan mounting",
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
      title: isEs
        ? "Conexión al punto eléctrico existente"
        : "Connection to existing electrical point",
      text: isEs
        ? "Conectamos el ventilador al punto de luz existente, siempre que esté preparado y sea seguro."
        : "We connect the fan to the existing light point, as long as it is ready and safe.",
    },
    {
      icon: Wrench,
      title: isEs
        ? "Desmontaje de lámpara o ventilador antiguo"
        : "Old lamp or fan removal",
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
    <main className="min-h-screen bg-[#f6f1e8] text-[#1f1a14]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <section className="relative overflow-hidden border-b border-[#dfd2bf]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#f3c96b55,transparent_35%),radial-gradient(circle_at_bottom_right,#c86b3c33,transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#d8c4a8] bg-white/60 px-4 py-2 text-sm font-semibold text-[#7a4b1f] shadow-sm backdrop-blur">
              <Fan className="h-4 w-4" />
              {t.eyebrow}
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-[#1f1a14] sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f554a] sm:text-xl">
              {t.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1f1a14] px-6 py-4 text-base font-bold text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#2d251c]"
              >
                <MessageCircle className="h-5 w-5" />
                {t.primaryCta}
              </a>

              <a
                href="#precios"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#d2b48c] bg-white/70 px-6 py-4 text-base font-bold text-[#1f1a14] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                <Euro className="h-5 w-5" />
                {t.secondaryCta}
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[t.heroBadge1, t.heroBadge2, t.heroBadge3].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#ddcbb4] bg-white/65 p-4 text-sm font-semibold text-[#4d4032] shadow-sm backdrop-blur"
                >
                  <CheckCircle2 className="mb-2 h-5 w-5 text-[#8a5a23]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] border border-[#d8c4a8] bg-[#fffaf1]/80 p-5 shadow-2xl shadow-[#6b4a2b]/10 backdrop-blur">
              <div className="rounded-[2rem] bg-[#1f1a14] p-6 text-white">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[#f3c96b]">
                      THEVULGO
                    </p>
                    <h2 className="mt-2 text-2xl font-black">
                      {isEs
                        ? "Instalación limpia, rápida y segura"
                        : "Clean, fast and safe installation"}
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3c96b] text-[#1f1a14]">
                    <Fan className="h-7 w-7" />
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {priceCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-3xl border border-white/10 bg-white/8 p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-[#f3c96b]">
                            {card.badge}
                          </p>
                          <h3 className="mt-1 text-xl font-black">
                            {card.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-white/70">
                            {card.text}
                          </p>
                        </div>
                        <p className="whitespace-nowrap text-3xl font-black text-[#f3c96b]">
                          {card.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl bg-[#f3c96b] p-5 text-[#1f1a14]">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6" />
                    <p className="font-black">
                      {isEs
                        ? "Incluye desmontaje y conexión básica"
                        : "Includes removal and basic connection"}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#3d2a15]">
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
            <section id="precios" className="border-b border-[#dfd2bf] bg-[#fffaf1]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a5a23]">
              {isEs ? "Precios claros" : "Clear prices"}
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              {isEs
                ? "Precio de montaje de ventilador de techo"
                : "Ceiling fan mounting price"}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#5f554a]">
              {isEs
                ? "Trabajamos con precio cerrado siempre que el techo tenga un punto eléctrico existente y el ventilador venga completo con soporte, tornillos, mando y piezas necesarias."
                : "We work with a fixed price as long as the ceiling has an existing electrical point and the fan comes complete with bracket, screws, remote and required parts."}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {priceCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[2rem] border border-[#dfd2bf] bg-[#f6f1e8] p-6 shadow-sm"
              >
                <div className="mb-5 inline-flex rounded-full bg-[#1f1a14] px-4 py-2 text-sm font-bold text-[#f3c96b]">
                  {card.badge}
                </div>

                <h3 className="text-2xl font-black">{card.title}</h3>

                <p className="mt-4 text-5xl font-black tracking-tight text-[#8a5a23]">
                  {card.price}
                </p>

                <p className="mt-5 leading-7 text-[#5f554a]">{card.text}</p>

                <a
                  href={whatsappUrl}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1f1a14] px-5 py-4 font-bold text-white transition hover:bg-[#2d251c]"
                >
                  <MessageCircle className="h-5 w-5" />
                  {isEs ? "Reservar por WhatsApp" : "Book on WhatsApp"}
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-[#d8c4a8] bg-white p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-xl font-black">
                  {isEs
                    ? "Qué está incluido en estos precios"
                    : "What is included in these prices"}
                </h3>
                <p className="mt-2 leading-7 text-[#5f554a]">
                  {isEs
                    ? "Desmontaje de la lámpara o ventilador antiguo, montaje del nuevo ventilador, conexión al punto eléctrico existente y prueba final."
                    : "Removal of the old lamp or fan, mounting of the new fan, connection to the existing electrical point and final test."}
                </p>
              </div>

              <div className="rounded-2xl bg-[#f3c96b] px-5 py-4 text-sm font-black text-[#1f1a14]">
                {isEs
                  ? "Sin sorpresas: confirmamos antes de ir"
                  : "No surprises: confirmed before arrival"}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dfd2bf] bg-[#f6f1e8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a5a23]">
                {isEs ? "Incluido" : "Included"}
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                {isEs
                  ? "Montaje completo, no solo colgar el ventilador"
                  : "Complete mounting, not just hanging the fan"}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5f554a]">
                {isEs
                  ? "La instalación se hace con cuidado para que el ventilador quede nivelado, firme y funcionando correctamente. Revisamos las piezas, el soporte, la conexión y el mando antes de terminar."
                  : "The installation is done carefully so the fan is level, firm and working correctly. We check the parts, bracket, connection and remote before finishing."}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {includedItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[2rem] border border-[#dfd2bf] bg-white p-6 shadow-sm"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3c96b] text-[#1f1a14]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-3 leading-7 text-[#5f554a]">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dfd2bf] bg-[#fffaf1]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a5a23]">
              {isEs ? "Proceso" : "Process"}
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              {isEs
                ? "Cómo trabajamos el montaje"
                : "How we handle the mounting"}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#5f554a]">
              {isEs
                ? "Para evitar dudas, pedimos fotos antes de la visita. Así confirmamos si el punto del techo está preparado y si el ventilador tiene todo lo necesario."
                : "To avoid doubts, we ask for photos before the visit. This lets us confirm whether the ceiling point is ready and whether the fan has everything needed."}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {processSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-[2rem] border border-[#dfd2bf] bg-[#f6f1e8] p-6"
              >
                <div className="mb-5 text-4xl font-black text-[#8a5a23]">
                  {item.step}
                </div>

                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#5f554a]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
            <section className="border-b border-[#dfd2bf] bg-[#f6f1e8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-[#dfd2bf] bg-white p-6 shadow-sm lg:p-8">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3c96b] text-[#1f1a14]">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                {isEs
                  ? "Antes de instalar, revisamos el punto del techo"
                  : "Before installing, we check the ceiling point"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#5f554a]">
                {isEs
                  ? "Un ventilador pesa más que una lámpara normal y además se mueve. Por eso no basta con conectarlo: hay que comprobar que el soporte queda bien fijado y que el punto del techo es adecuado para el modelo."
                  : "A fan weighs more than a normal lamp and also moves. That is why connecting it is not enough: the bracket must be fixed properly and the ceiling point must be suitable for the model."}
              </p>

              <div className="mt-7 grid gap-3">
                {[
                  isEs
                    ? "Comprobamos si hay punto eléctrico existente."
                    : "We check whether there is an existing electrical point.",
                  isEs
                    ? "Revisamos el tipo de techo y la zona de fijación."
                    : "We check the ceiling type and fixing area.",
                  isEs
                    ? "Montamos el soporte principal con cuidado."
                    : "We mount the main bracket carefully.",
                  isEs
                    ? "Probamos estabilidad, luz, mando y velocidades."
                    : "We test stability, light, remote and speeds.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl bg-[#f6f1e8] p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#8a5a23]" />
                    <p className="font-semibold leading-6 text-[#4d4032]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#dfd2bf] bg-[#1f1a14] p-6 text-white shadow-sm lg:p-8">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3c96b] text-[#1f1a14]">
                <Fan className="h-6 w-6" />
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                {isEs
                  ? "Tipos de ventiladores que instalamos"
                  : "Types of fans we install"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/70">
                {isEs
                  ? "Podemos montar la mayoría de ventiladores de techo domésticos siempre que el producto venga completo y el techo permita una fijación segura."
                  : "We can mount most domestic ceiling fans as long as the product comes complete and the ceiling allows safe fixing."}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Con luz LED" : "With LED light",
                  isEs ? "Con mando" : "With remote",
                  isEs ? "Aspas retráctiles" : "Retractable blades",
                  isEs ? "Para dormitorio" : "For bedroom",
                  isEs ? "Para salón" : "For living room",
                  isEs ? "Modelos silenciosos" : "Silent models",
                  isEs ? "Con varias velocidades" : "With several speeds",
                  isEs ? "Sustitución de lámpara" : "Lamp replacement",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/8 p-4 font-bold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dfd2bf] bg-[#fffaf1]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a5a23]">
                {isEs ? "Importante" : "Important"}
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                {isEs
                  ? "Qué necesitamos ver antes de darte hora"
                  : "What we need to see before booking"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#5f554a]">
                {isEs
                  ? "Para darte un precio correcto y evitar perder tiempo el día de la instalación, normalmente pedimos unas fotos sencillas por WhatsApp."
                  : "To give you the correct price and avoid losing time on the installation day, we usually ask for a few simple photos on WhatsApp."}
              </p>

              <a
                href={whatsappUrl}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1f1a14] px-6 py-4 font-bold text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#2d251c]"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Enviar fotos por WhatsApp" : "Send photos on WhatsApp"}
              </a>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: isEs ? "Foto del techo" : "Photo of the ceiling",
                  text: isEs
                    ? "Necesitamos ver dónde está el punto de luz y cómo es la zona donde irá fijado el ventilador."
                    : "We need to see where the light point is and what the fixing area looks like.",
                },
                {
                  title: isEs
                    ? "Foto del ventilador comprado"
                    : "Photo of the fan you bought",
                  text: isEs
                    ? "Así vemos el tipo de soporte, mando, aspas, cuerpo y piezas incluidas."
                    : "This lets us see the bracket type, remote, blades, body and included parts.",
                },
                {
                  title: isEs
                    ? "Foto de las instrucciones o caja"
                    : "Photo of the manual or box",
                  text: isEs
                    ? "No siempre hace falta, pero ayuda mucho si el modelo tiene receptor, mando o montaje especial."
                    : "It is not always required, but it helps a lot if the model has a receiver, remote or special mounting.",
                },
                {
                  title: isEs
                    ? "Altura aproximada del techo"
                    : "Approximate ceiling height",
                  text: isEs
                    ? "Nos ayuda a saber si hace falta escalera normal o una escalera más alta."
                    : "It helps us know whether a normal ladder or a taller ladder is needed.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-[#dfd2bf] bg-[#f6f1e8] p-6"
                >
                  <h3 className="flex items-center gap-3 text-xl font-black">
                    <BadgeCheck className="h-6 w-6 text-[#8a5a23]" />
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#5f554a]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
            <section className="border-b border-[#dfd2bf] bg-[#f6f1e8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a5a23]">
              {isEs ? "Zonas" : "Areas"}
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              {isEs
                ? "Montaje de ventiladores de techo en Valencia y alrededores"
                : "Ceiling fan mounting in Valencia and nearby areas"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#5f554a]">
              {isEs
                ? "Trabajamos en Valencia capital y muchas zonas cercanas. Si estás fuera de Valencia, puedes enviarnos tu dirección y te confirmamos disponibilidad."
                : "We work in Valencia city and many nearby areas. If you are outside Valencia, send us your address and we will confirm availability."}
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 rounded-2xl border border-[#dfd2bf] bg-white p-4 font-bold text-[#4d4032]"
              >
                <MapPin className="h-5 w-5 text-[#8a5a23]" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#dfd2bf] bg-[#fffaf1]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a5a23]">
                {isEs ? "Páginas relacionadas" : "Related pages"}
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                {isEs
                  ? "Más servicios de ventiladores de techo"
                  : "More ceiling fan services"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#5f554a]">
                {isEs
                  ? "También tenemos páginas específicas para diferentes tipos de ventiladores, habitaciones y packs de instalación."
                  : "We also have specific pages for different fan types, rooms and installation packages."}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {relatedPages.map((page) => {
                const Icon = page.icon;

                return (
                  <Link
                    key={page.slug}
                    href={`/${locale}/services/${page.slug}`}
                    className="group rounded-[2rem] border border-[#dfd2bf] bg-[#f6f1e8] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#6b4a2b]/10"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3c96b] text-[#1f1a14]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-black">
                      {isEs ? page.es : page.en}
                    </h3>

                    <p className="mt-3 leading-7 text-[#5f554a]">
                      {isEs ? page.descEs : page.descEn}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 font-black text-[#8a5a23]">
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
            <section className="border-b border-[#dfd2bf] bg-[#1f1a14] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f3c96b]">
                {isEs ? "Por qué THEVULGO" : "Why THEVULGO"}
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                {isEs
                  ? "Un montaje limpio, claro y sin complicaciones"
                  : "Clean, clear and simple mounting"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/70">
                {isEs
                  ? "Nuestro objetivo es que sepas el precio antes de empezar, que el ventilador quede bien instalado y que no tengas que preocuparte por desmontar la lámpara antigua ni por probar el mando."
                  : "Our goal is that you know the price before we start, the fan is installed properly and you do not have to worry about removing the old lamp or testing the remote."}
              </p>

              <a
                href={whatsappUrl}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f3c96b] px-6 py-4 font-black text-[#1f1a14] shadow-xl shadow-black/20 transition hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Pedir presupuesto ahora" : "Request quote now"}
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Euro,
                  title: isEs ? "Precio confirmado" : "Confirmed price",
                  text: isEs
                    ? "Te confirmamos el precio antes de la visita."
                    : "We confirm the price before the visit.",
                },
                {
                  icon: Clock3,
                  title: isEs ? "Instalación rápida" : "Fast installation",
                  text: isEs
                    ? "Normalmente se monta en una sola visita."
                    : "Usually mounted in one visit.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Trabajo cuidadoso" : "Careful work",
                  text: isEs
                    ? "Revisamos soporte, conexión y funcionamiento."
                    : "We check bracket, connection and operation.",
                },
                {
                  icon: Phone,
                  title: isEs ? "Atención por WhatsApp" : "WhatsApp support",
                  text: isEs
                    ? "Puedes enviarnos fotos y resolver dudas rápido."
                    : "You can send photos and solve doubts quickly.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[2rem] border border-white/10 bg-white/8 p-6"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3c96b] text-[#1f1a14]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-3 leading-7 text-white/65">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dfd2bf] bg-[#fffaf1]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a5a23]">
              {isEs ? "Texto SEO" : "SEO text"}
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              {isEs
                ? "Montar ventilador de techo en Valencia"
                : "Mounting a ceiling fan in Valencia"}
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-[#5f554a]">
              <p>
                {isEs
                  ? "El montaje de un ventilador de techo en Valencia es una de las mejoras más prácticas para dormitorios, salones, despachos y viviendas de alquiler. Un ventilador bien instalado ayuda a mover el aire, mejorar la sensación térmica y dar más comodidad durante los meses de calor."
                  : "Ceiling fan mounting in Valencia is one of the most practical improvements for bedrooms, living rooms, offices and rental homes. A properly installed fan helps move the air, improve comfort and make hot months easier."}
              </p>

              <p>
                {isEs
                  ? "En THEVULGO instalamos ventiladores de techo con luz, con mando, con aspas retráctiles y modelos clásicos. También podemos sustituir una lámpara antigua por un ventilador nuevo, siempre que exista un punto eléctrico preparado en el techo."
                  : "At THEVULGO we install ceiling fans with light, with remote control, with retractable blades and classic models. We can also replace an old lamp with a new fan, as long as there is a prepared electrical point in the ceiling."}
              </p>

              <p>
                {isEs
                  ? "El precio base incluye el desmontaje de la lámpara o ventilador antiguo, el montaje del nuevo ventilador, la conexión al punto eléctrico existente y la prueba final. Antes de confirmar la visita, normalmente pedimos fotos para revisar el techo, el modelo del ventilador y las piezas incluidas."
                  : "The base price includes removing the old lamp or fan, mounting the new fan, connecting it to the existing electrical point and the final test. Before confirming the visit, we usually ask for photos to check the ceiling, fan model and included parts."}
              </p>

              <p>
                {isEs
                  ? "Si necesitas montar varios ventiladores en la misma vivienda, tenemos packs para 2 y 3 ventiladores. Esto permite ahorrar tiempo y precio porque se hace todo en una misma visita."
                  : "If you need to mount several fans in the same home, we have packages for 2 and 3 fans. This saves time and money because everything is done in one visit."}
              </p>
            </div>
          </div>
        </div>
      </section>
            <section className="border-b border-[#dfd2bf] bg-[#f6f1e8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a5a23]">
              {isEs ? "Preguntas frecuentes" : "FAQ"}
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              {isEs
                ? "Dudas sobre el montaje de ventiladores de techo"
                : "Questions about ceiling fan mounting"}
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            {[
              {
                q: isEs
                  ? "¿Cuánto cuesta montar un ventilador de techo?"
                  : "How much does ceiling fan mounting cost?",
                a: isEs
                  ? "El montaje de 1 ventilador cuesta 45 €, 2 ventiladores 85 € y 3 ventiladores 125 €, siempre que exista un punto eléctrico preparado."
                  : "Mounting 1 fan costs €45, 2 fans €85 and 3 fans €125, as long as there is a prepared electrical point.",
              },
              {
                q: isEs
                  ? "¿Está incluido desmontar la lámpara antigua?"
                  : "Is removing the old lamp included?",
                a: isEs
                  ? "Sí. El desmontaje de una lámpara o ventilador antiguo está incluido en el precio base."
                  : "Yes. Removing an old lamp or fan is included in the base price.",
              },
              {
                q: isEs
                  ? "¿La conexión eléctrica está incluida?"
                  : "Is the electrical connection included?",
                a: isEs
                  ? "Sí, la conexión al punto eléctrico existente está incluida si el punto está preparado y es seguro."
                  : "Yes, connection to the existing electrical point is included if the point is ready and safe.",
              },
              {
                q: isEs
                  ? "¿Instaláis ventiladores con luz?"
                  : "Do you install fans with light?",
                a: isEs
                  ? "Sí, instalamos ventiladores con luz LED, mando, varias velocidades y modelos con aspas retráctiles."
                  : "Yes, we install fans with LED light, remote control, several speeds and retractable blade models.",
              },
              {
                q: isEs
                  ? "¿Puedo enviar fotos por WhatsApp?"
                  : "Can I send photos on WhatsApp?",
                a: isEs
                  ? "Sí. Es lo mejor para confirmar precio, revisar el techo y evitar sorpresas antes de la visita."
                  : "Yes. It is the best way to confirm the price, check the ceiling and avoid surprises before the visit.",
              },
              {
                q: isEs
                  ? "¿Trabajáis en Valencia capital?"
                  : "Do you work in Valencia city?",
                a: isEs
                  ? "Sí, trabajamos en Valencia capital y zonas cercanas como Mislata, Burjassot, Paterna, Torrent y Alboraya."
                  : "Yes, we work in Valencia city and nearby areas such as Mislata, Burjassot, Paterna, Torrent and Alboraya.",
              },
            ].map((item) => (
              <article
                key={item.q}
                className="rounded-[2rem] border border-[#dfd2bf] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black">{item.q}</h3>
                <p className="mt-3 leading-7 text-[#5f554a]">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f1a14] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <Fan className="mx-auto h-12 w-12 text-[#f3c96b]" />

            <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-5xl">
              {isEs
                ? "¿Quieres montar tu ventilador de techo?"
                : "Want to mount your ceiling fan?"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              {isEs
                ? "Envíanos fotos del techo y del ventilador por WhatsApp. Te confirmamos precio, disponibilidad y hora."
                : "Send us photos of the ceiling and the fan on WhatsApp. We will confirm price, availability and time."}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f3c96b] px-7 py-4 font-black text-[#1f1a14] shadow-xl shadow-black/20 transition hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Pedir presupuesto" : "Request quote"}
              </a>

              <a
                href={`tel:+${phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/8 px-7 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-white/12"
              >
                <Phone className="h-5 w-5" />
                +34 610 076 942
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}