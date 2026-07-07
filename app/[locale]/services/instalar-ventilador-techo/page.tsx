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

const slug = "instalar-ventilador-techo";

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
    descEn: "Main ceiling fan installation service in Valencia.",
    descEs: "Servicio principal de instalación de ventiladores de techo en Valencia.",
    icon: Fan,
  },
  {
    slug: "montaje-ventilador-techo",
    en: "Ceiling Fan Mounting",
    es: "Montaje de ventilador de techo",
    descEn: "Clear prices for mounting ceiling fans at home.",
    descEs: "Precios claros para montar ventiladores de techo en casa.",
    icon: Wrench,
  },
  {
    slug: "instalar-ventilador-techo-luz-valencia",
    en: "Fan With Light",
    es: "Ventilador con luz",
    descEn: "Installation of ceiling fans with LED light.",
    descEs: "Instalación de ventiladores de techo con luz LED.",
    icon: Lightbulb,
  },
  {
    slug: "cambiar-lampara-por-ventilador-valencia",
    en: "Replace Lamp With Fan",
    es: "Cambiar lámpara por ventilador",
    descEn: "Replace an old lamp with a new ceiling fan.",
    descEs: "Cambiar una lámpara antigua por un ventilador nuevo.",
    icon: Plug,
  },
  {
    slug: "instalar-ventilador-mando-valencia",
    en: "Fan With Remote",
    es: "Ventilador con mando",
    descEn: "Remote receiver setup and complete testing.",
    descEs: "Configuración de receptor, mando y prueba completa.",
    icon: Settings,
  },
  {
    slug: "instalar-ventilador-aspas-retractiles-valencia",
    en: "Retractable Blade Fan",
    es: "Ventilador con aspas retráctiles",
    descEn: "Modern fan installation with retractable blades.",
    descEs: "Instalación de ventiladores modernos con aspas retráctiles.",
    icon: Sparkles,
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Instalar ventilador de techo en Valencia desde 45 € | THEVULGO"
    : "Install Ceiling Fan in Valencia From €45 | THEVULGO";

  const description = isEs
    ? "Instalar ventilador de techo en Valencia desde 45 €. 2 ventiladores 85 €, 3 ventiladores 125 €. Incluye desmontaje de lámpara antigua, conexión al punto eléctrico existente y prueba final."
    : "Install a ceiling fan in Valencia from €45. 2 fans €85, 3 fans €125. Includes old lamp removal, connection to the existing electrical point and final test.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "instalar ventilador techo valencia",
          "instalar ventilador de techo valencia",
          "precio instalar ventilador techo valencia",
          "manitas instalar ventilador techo valencia",
          "instalar ventilador con luz valencia",
          "cambiar lampara por ventilador valencia",
        ]
      : [
          "install ceiling fan valencia",
          "ceiling fan installation valencia",
          "ceiling fan handyman valencia",
          "ceiling fan installation price valencia",
          "replace lamp with ceiling fan valencia",
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

export default async function InstallCeilingFanPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola THEVULGO. Quiero instalar un ventilador de techo en Valencia. ¿Me podéis dar presupuesto?"
      : "Hi THEVULGO. I want to install a ceiling fan in Valencia. Can you give me a quote?"
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${whatsappText}`;

  const priceCards = [
    {
      title: isEs ? "1 ventilador" : "1 ceiling fan",
      price: "45 €",
      badge: isEs ? "Servicio básico" : "Basic service",
      text: isEs
        ? "Instalación de un ventilador en dormitorio, salón o despacho."
        : "Installation of one fan in a bedroom, living room or office.",
    },
    {
      title: isEs ? "2 ventiladores" : "2 ceiling fans",
      price: "85 €",
      badge: isEs ? "Pack ahorro" : "Saving pack",
      text: isEs
        ? "Dos ventiladores instalados en la misma visita."
        : "Two fans installed in the same visit.",
    },
    {
      title: isEs ? "3 ventiladores" : "3 ceiling fans",
      price: "125 €",
      badge: isEs ? "Mejor precio" : "Best value",
      text: isEs
        ? "Ideal para varias habitaciones de la misma vivienda."
        : "Ideal for several rooms in the same home.",
    },
  ];

  const faq = [
    {
      q: isEs
        ? "¿Cuánto cuesta instalar un ventilador de techo?"
        : "How much does it cost to install a ceiling fan?",
      a: isEs
        ? "El precio es 45 € por 1 ventilador, 85 € por 2 ventiladores y 125 € por 3 ventiladores, siempre que exista un punto eléctrico preparado."
        : "The price is €45 for 1 fan, €85 for 2 fans and €125 for 3 fans, as long as there is a prepared electrical point.",
    },
    {
      q: isEs
        ? "¿Incluye quitar la lámpara antigua?"
        : "Does it include removing the old lamp?",
      a: isEs
        ? "Sí, el desmontaje de una lámpara o ventilador antiguo está incluido en el precio base."
        : "Yes, removing an old lamp or fan is included in the base price.",
    },
    {
      q: isEs
        ? "¿Instaláis ventiladores con luz y mando?"
        : "Do you install fans with light and remote?",
      a: isEs
        ? "Sí, instalamos ventiladores con luz LED, mando, receptor, varias velocidades y aspas retráctiles."
        : "Yes, we install fans with LED light, remote, receiver, several speeds and retractable blades.",
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
        ? "¿Qué fotos tengo que enviar?"
        : "What photos should I send?",
      a: isEs
        ? "Foto del techo, del punto de luz, del ventilador comprado y, si es posible, de la caja o instrucciones."
        : "A photo of the ceiling, light point, fan you bought and, if possible, the box or manual.",
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
        ? "Instalar ventilador de techo"
        : "Install ceiling fan",
      serviceType: isEs
        ? "Instalación de ventiladores de techo"
        : "Ceiling fan installation",
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
          ? "Precios para instalar ventiladores de techo"
          : "Ceiling fan installation prices",
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
            ? "Instalar ventilador de techo"
            : "Install ceiling fan",
          item: `${baseUrl}/${locale}/services/${slug}`,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-[#1f1a14]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-[#dfd2bf]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#f3c96b55,transparent_36%),radial-gradient(circle_at_bottom_right,#c86b3c33,transparent_42%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#d8c4a8] bg-white/60 px-4 py-2 text-sm font-black text-[#7a4b1f] shadow-sm backdrop-blur">
              <Fan className="h-4 w-4" />
              {isEs
                ? "Instalar ventilador de techo en Valencia"
                : "Install ceiling fan in Valencia"}
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              {isEs
                ? "Instalar ventilador de techo desde 45 €"
                : "Install a ceiling fan from €45"}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f554a] sm:text-xl">
              {isEs
                ? "Instalamos ventiladores de techo con luz, mando, aspas retráctiles o modelos clásicos. Incluye desmontaje de lámpara antigua, conexión al punto eléctrico existente y prueba final."
                : "We install ceiling fans with light, remote control, retractable blades or classic models. Includes old lamp removal, connection to the existing electrical point and final test."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1f1a14] px-6 py-4 text-base font-bold text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#2d251c]"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Pedir presupuesto por WhatsApp" : "Request quote on WhatsApp"}
              </a>

              <a
                href="#precios"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#d2b48c] bg-white/70 px-6 py-4 text-base font-bold text-[#1f1a14] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                <Euro className="h-5 w-5" />
                {isEs ? "Ver precios" : "See prices"}
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                isEs ? "Desde 45 €" : "From €45",
                isEs ? "2 ventiladores 85 €" : "2 fans €85",
                isEs ? "3 ventiladores 125 €" : "3 fans €125",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#ddcbb4] bg-white/65 p-4 text-sm font-bold text-[#4d4032] shadow-sm backdrop-blur"
                >
                  <CheckCircle2 className="mb-2 h-5 w-5 text-[#8a5a23]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-[#d8c4a8] bg-[#fffaf1]/80 p-5 shadow-2xl shadow-[#6b4a2b]/10 backdrop-blur">
            <div className="rounded-[2rem] bg-[#1f1a14] p-6 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black text-[#f3c96b]">THEVULGO</p>
                  <h2 className="mt-2 text-2xl font-black">
                    {isEs
                      ? "Instalación clara y sin sorpresas"
                      : "Clear installation with no surprises"}
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
                        <h3 className="mt-1 text-xl font-black">{card.title}</h3>
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
                      ? "Desmontaje y conexión básica incluidos"
                      : "Removal and basic connection included"}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-6 text-[#3d2a15]">
                  {isEs
                    ? "Siempre que el techo tenga un punto eléctrico existente y el ventilador venga completo."
                    : "As long as the ceiling has an existing electrical point and the fan comes complete."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="precios" className="border-b border-[#dfd2bf] bg-[#fffaf1]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a5a23]">
              {isEs ? "Precios" : "Prices"}
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              {isEs
                ? "Precio para instalar ventilador de techo"
                : "Price to install a ceiling fan"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-[#5f554a]">
              {isEs
                ? "Precio cerrado cuando el punto eléctrico ya existe, el techo permite una fijación segura y el ventilador trae sus piezas completas."
                : "Fixed price when the electrical point already exists, the ceiling allows safe fixing and the fan includes all required parts."}
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
                  {isEs ? "Reservar instalación" : "Book installation"}
                </a>
              </article>
            ))}
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
                  ? "Qué incluye la instalación"
                  : "What the installation includes"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#5f554a]">
                {isEs
                  ? "No es solo colgar el ventilador. Revisamos el soporte, hacemos el montaje, conectamos al punto existente y probamos el funcionamiento contigo."
                  : "It is not just hanging the fan. We check the bracket, assemble the fan, connect it to the existing point and test everything with you."}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: Wrench,
                  title: isEs ? "Montaje completo" : "Complete assembly",
                  text: isEs
                    ? "Cuerpo, soporte, aspas, embellecedor y piezas incluidas por el fabricante."
                    : "Body, bracket, blades, cover and parts included by the manufacturer.",
                },
                {
                  icon: Plug,
                  title: isEs ? "Conexión eléctrica" : "Electrical connection",
                  text: isEs
                    ? "Conexión al punto eléctrico existente si está preparado y es seguro."
                    : "Connection to the existing electrical point if it is ready and safe.",
                },
                {
                  icon: Lightbulb,
                  title: isEs ? "Luz y mando" : "Light and remote",
                  text: isEs
                    ? "Prueba de luz, velocidades, mando y receptor."
                    : "Testing of light, speeds, remote and receiver.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Revisión final" : "Final check",
                  text: isEs
                    ? "Comprobamos estabilidad básica y funcionamiento antes de terminar."
                    : "We check basic stability and operation before finishing.",
                },
              ].map((item) => {
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
                    <p className="mt-3 leading-7 text-[#5f554a]">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dfd2bf] bg-[#fffaf1]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#dfd2bf] bg-white p-6 shadow-sm lg:p-8">
              <BadgeCheck className="h-12 w-12 text-[#8a5a23]" />

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                {isEs
                  ? "Antes de darte hora pedimos fotos"
                  : "Before booking, we ask for photos"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#5f554a]">
                {isEs
                  ? "Así confirmamos si el techo tiene punto eléctrico, si el ventilador trae soporte y si hace falta alguna preparación especial."
                  : "This helps us confirm whether the ceiling has an electrical point, whether the fan includes the bracket and whether any special preparation is needed."}
              </p>

              <div className="mt-7 grid gap-3">
                {[
                  isEs ? "Foto del techo y punto de luz" : "Photo of ceiling and light point",
                  isEs ? "Foto del ventilador comprado" : "Photo of the fan you bought",
                  isEs ? "Foto de la caja o instrucciones" : "Photo of the box or manual",
                  isEs ? "Dirección o zona de Valencia" : "Address or area in Valencia",
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-[#f6f1e8] p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#8a5a23]" />
                    <p className="font-semibold leading-6 text-[#4d4032]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#dfd2bf] bg-[#1f1a14] p-6 text-white shadow-sm lg:p-8">
              <Fan className="h-12 w-12 text-[#f3c96b]" />

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                {isEs
                  ? "Tipos de ventiladores que instalamos"
                  : "Types of fans we install"}
              </h2>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Con luz LED" : "With LED light",
                  isEs ? "Con mando" : "With remote",
                  isEs ? "Aspas retráctiles" : "Retractable blades",
                  isEs ? "Para dormitorio" : "For bedroom",
                  isEs ? "Para salón" : "For living room",
                  isEs ? "Modelos silenciosos" : "Silent models",
                  isEs ? "Varias velocidades" : "Several speeds",
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

      <section className="border-b border-[#dfd2bf] bg-[#f6f1e8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a5a23]">
              {isEs ? "Zonas" : "Areas"}
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              {isEs
                ? "Instalación de ventiladores en Valencia y alrededores"
                : "Fan installation in Valencia and nearby areas"}
            </h2>
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
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a5a23]">
                {isEs ? "Servicios relacionados" : "Related services"}
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                {isEs
                  ? "Más páginas de ventiladores"
                  : "More ceiling fan pages"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#5f554a]">
                {isEs
                  ? "Páginas específicas para diferentes búsquedas, modelos y tipos de instalación."
                  : "Specific pages for different searches, models and installation types."}
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

                    <h3 className="text-xl font-black">{isEs ? page.es : page.en}</h3>

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

      <section className="border-b border-[#dfd2bf] bg-[#fffaf1]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a5a23]">
              {isEs ? "Texto SEO" : "SEO text"}
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              {isEs
                ? "Instalar ventilador de techo en Valencia"
                : "Installing a ceiling fan in Valencia"}
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-[#5f554a]">
              <p>
                {isEs
                  ? "Instalar un ventilador de techo en Valencia es una solución práctica para mejorar la comodidad en casa durante los meses de calor. Un ventilador bien colocado ayuda a mover el aire en dormitorios, salones, despachos y viviendas de alquiler."
                  : "Installing a ceiling fan in Valencia is a practical way to improve comfort at home during hot months. A properly installed fan helps move air in bedrooms, living rooms, offices and rental homes."}
              </p>

              <p>
                {isEs
                  ? "En THEVULGO instalamos ventiladores de techo con luz, con mando, con aspas retráctiles y modelos clásicos. También podemos cambiar una lámpara antigua por un ventilador nuevo si el punto eléctrico existente está preparado."
                  : "At THEVULGO we install ceiling fans with light, remote control, retractable blades and classic models. We can also replace an old lamp with a new fan if the existing electrical point is ready."}
              </p>

              <p>
                {isEs
                  ? "El precio base incluye desmontaje de la lámpara antigua, montaje del nuevo ventilador, conexión al punto eléctrico existente y prueba final. Para evitar sorpresas, normalmente pedimos fotos antes de confirmar la visita."
                  : "The base price includes removal of the old lamp, assembly of the new fan, connection to the existing electrical point and final test. To avoid surprises, we usually ask for photos before confirming the visit."}
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
                ? "Dudas sobre instalar ventiladores de techo"
                : "Questions about installing ceiling fans"}
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            {faq.map((item) => (
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
          <Fan className="mx-auto h-12 w-12 text-[#f3c96b]" />

          <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-5xl">
            {isEs
              ? "¿Quieres instalar tu ventilador de techo?"
              : "Want to install your ceiling fan?"}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/70">
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
      </section>
    </main>
  );
}