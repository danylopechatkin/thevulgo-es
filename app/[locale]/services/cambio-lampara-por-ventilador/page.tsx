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
const slug = "cambio-lampara-por-ventilador";

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
  {
    slug: "instalacion-lampara-valencia",
    en: "Lamp Installation",
    es: "Instalación de lámparas",
    descEn: "Lamp and ceiling light installation service.",
    descEs: "Servicio de instalación de lámparas y luces de techo.",
    icon: Lightbulb,
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Cambiar lámpara por ventilador en Valencia desde 45 € | THEVULGO"
    : "Replace Lamp With Ceiling Fan in Valencia From €45 | THEVULGO";

  const description = isEs
    ? "Cambio de lámpara por ventilador de techo en Valencia desde 45 €. Desmontaje de la lámpara antigua, montaje del ventilador y conexión al punto eléctrico existente incluidos."
    : "Replace a ceiling lamp with a ceiling fan in Valencia from €45. Old lamp removal, fan mounting and connection to the existing electrical point included.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "cambiar lampara por ventilador valencia",
          "sustituir lampara por ventilador techo valencia",
          "quitar lampara instalar ventilador valencia",
          "instalar ventilador en punto de luz valencia",
          "manitas ventilador techo valencia",
          "precio cambiar lampara por ventilador valencia",
        ]
      : [
          "replace lamp with ceiling fan valencia",
          "change ceiling light to fan valencia",
          "install ceiling fan existing light point valencia",
          "ceiling fan handyman valencia",
          "remove lamp install ceiling fan valencia",
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

export default async function ChangeLampToFanPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola THEVULGO. Quiero cambiar una lámpara por un ventilador de techo en Valencia. ¿Me podéis dar presupuesto?"
      : "Hi THEVULGO. I want to replace a ceiling lamp with a ceiling fan in Valencia. Can you give me a quote?"
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${whatsappText}`;

  const priceCards = [
    {
      title: isEs ? "1 cambio" : "1 replacement",
      price: "45 €",
      text: isEs
        ? "Retiramos una lámpara y montamos un ventilador en el mismo punto de luz."
        : "We remove one lamp and install a ceiling fan on the same light point.",
      badge: isEs ? "Precio base" : "Base price",
    },
    {
      title: isEs ? "2 cambios" : "2 replacements",
      price: "85 €",
      text: isEs
        ? "Para cambiar dos lámparas por dos ventiladores en la misma vivienda."
        : "For replacing two lamps with two fans in the same home.",
      badge: isEs ? "Pack recomendado" : "Recommended pack",
    },
    {
      title: isEs ? "3 cambios" : "3 replacements",
      price: "125 €",
      text: isEs
        ? "Ideal para dormitorios, salón o varias habitaciones en una sola visita."
        : "Ideal for bedrooms, living room or several rooms in one visit.",
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
        ? "Cambiar lámpara por ventilador de techo"
        : "Replace lamp with ceiling fan",
      serviceType: isEs
        ? "Cambio de lámpara por ventilador"
        : "Lamp to ceiling fan replacement",
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
          ? "Precios para cambiar lámpara por ventilador"
          : "Lamp to fan replacement prices",
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
            ? "Cambiar lámpara por ventilador"
            : "Replace lamp with fan",
          item: `${baseUrl}/${locale}/services/${slug}`,
        },
      ],
    },
  ];

  const includedItems = [
    {
      icon: Lightbulb,
      title: isEs ? "Retirada de la lámpara" : "Lamp removal",
      text: isEs
        ? "Quitamos la lámpara antigua, plafón o luz de techo antes de montar el ventilador."
        : "We remove the old lamp, ceiling light or fixture before mounting the fan.",
    },
    {
      icon: Fan,
      title: isEs ? "Montaje del ventilador" : "Fan mounting",
      text: isEs
        ? "Montamos soporte, cuerpo, aspas, embellecedor y piezas del ventilador."
        : "We mount the bracket, body, blades, cover and fan parts.",
    },
    {
      icon: Plug,
      title: isEs ? "Conexión al punto existente" : "Existing point connection",
      text: isEs
        ? "Conectamos el ventilador al punto de luz existente si está preparado y es seguro."
        : "We connect the fan to the existing light point if it is ready and safe.",
    },
    {
      icon: Settings,
      title: isEs ? "Prueba completa" : "Full test",
      text: isEs
        ? "Probamos luz, mando, velocidades, giro y estabilidad antes de terminar."
        : "We test light, remote, speeds, rotation and stability before finishing.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: isEs ? "Fotos por WhatsApp" : "Photos on WhatsApp",
      text: isEs
        ? "Nos envías foto de la lámpara actual, techo y ventilador comprado."
        : "You send photos of the current lamp, ceiling and fan you bought.",
    },
    {
      step: "02",
      title: isEs ? "Confirmación de precio" : "Price confirmation",
      text: isEs
        ? "Confirmamos si aplica el precio base antes de desplazarnos."
        : "We confirm whether the base price applies before coming.",
    },
    {
      step: "03",
      title: isEs ? "Cambio de lámpara" : "Lamp replacement",
      text: isEs
        ? "Desmontamos la lámpara antigua y dejamos el punto listo para el ventilador."
        : "We remove the old lamp and prepare the point for the fan.",
    },
    {
      step: "04",
      title: isEs ? "Montaje y prueba" : "Mounting and testing",
      text: isEs
        ? "Instalamos el ventilador y comprobamos el funcionamiento contigo."
        : "We install the fan and check operation with you.",
    },
  ];

  const faq = [
    {
      q: isEs
        ? "¿Cuánto cuesta cambiar una lámpara por un ventilador?"
        : "How much does it cost to replace a lamp with a fan?",
      a: isEs
        ? "El precio es desde 45 € para un ventilador, 85 € para dos y 125 € para tres, si se usa el punto eléctrico existente."
        : "The price is from €45 for one fan, €85 for two and €125 for three, when using the existing electrical point.",
    },
    {
      q: isEs
        ? "¿Está incluido quitar la lámpara antigua?"
        : "Is removing the old lamp included?",
      a: isEs
        ? "Sí. La retirada de la lámpara antigua está incluida en el precio base."
        : "Yes. Removing the old lamp is included in the base price.",
    },
    {
      q: isEs
        ? "¿Podéis usar el mismo punto de luz?"
        : "Can you use the same light point?",
      a: isEs
        ? "Sí, siempre que el punto esté preparado, accesible y permita una instalación segura."
        : "Yes, as long as the point is ready, accessible and allows safe installation.",
    },
    {
      q: isEs
        ? "¿Instaláis ventiladores con luz LED?"
        : "Do you install fans with LED light?",
      a: isEs
        ? "Sí. Instalamos ventiladores con luz, mando a distancia, receptor y aspas retráctiles."
        : "Yes. We install fans with light, remote control, receiver and retractable blades.",
    },
    {
      q: isEs
        ? "¿Qué pasa si el techo no es seguro?"
        : "What if the ceiling is not safe?",
      a: isEs
        ? "Primero revisamos la fijación. Si el techo no permite montar el ventilador con seguridad, te lo explicamos antes de seguir."
        : "We check the fixing first. If the ceiling does not allow safe mounting, we explain it before continuing.",
    },
    {
      q: isEs
        ? "¿Qué fotos tengo que enviar?"
        : "What photos should I send?",
      a: isEs
        ? "Foto de la lámpara actual, del techo, del punto de luz y del ventilador comprado."
        : "A photo of the current lamp, the ceiling, the light point and the fan you bought.",
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
              <Lightbulb className="h-4 w-4" />
              {isEs
                ? "Cambio de lámpara por ventilador en Valencia"
                : "Lamp to ceiling fan replacement in Valencia"}
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              {isEs
                ? "Cambiar lámpara por ventilador desde 45 €"
                : "Replace a lamp with a ceiling fan from €45"}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
              {isEs
                ? "Quitamos tu lámpara antigua y montamos un ventilador de techo en el mismo punto de luz. Incluye desmontaje, montaje, conexión básica y prueba final."
                : "We remove your old ceiling lamp and install a ceiling fan on the same light point. Removal, mounting, basic connection and final testing included."}
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
                isEs ? "Lámpara retirada incluida" : "Old lamp removal included",
                isEs ? "Punto eléctrico existente" : "Existing light point",
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
                        ? "De lámpara antigua a ventilador nuevo"
                        : "From old lamp to new fan"}
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
                      ? "Aplicable si el punto de luz existente está preparado y el ventilador viene completo."
                      : "Applies when the existing light point is ready and the fan comes complete."}
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
                ? "Precio para cambiar lámpara por ventilador"
                : "Price to replace a lamp with a ceiling fan"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              {isEs
                ? "El precio incluye quitar la lámpara antigua, montar el ventilador, conectarlo al punto eléctrico existente y comprobar que funciona correctamente."
                : "The price includes removing the old lamp, mounting the fan, connecting it to the existing electrical point and checking that it works correctly."}
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
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <BadgeCheck className="h-7 w-7 shrink-0 text-yellow-400" />
              <div>
                <h3 className="text-xl font-black">
                  {isEs
                    ? "Qué está incluido en el precio base"
                    : "What is included in the base price"}
                </h3>
                <p className="mt-3 leading-8 text-white/75">
                  {isEs
                    ? "Incluye desplazamiento dentro de Valencia ciudad, desmontaje de la lámpara antigua, montaje normal del ventilador, conexión al punto de luz existente y prueba final. Si el techo necesita refuerzo, tacos especiales, reparación o una modificación eléctrica adicional, se confirma antes de hacer nada."
                    : "Includes travel within Valencia city, removal of the old lamp, standard fan mounting, connection to the existing light point and final testing. If the ceiling needs reinforcement, special anchors, repair or extra electrical modification, we confirm it before doing anything."}
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
                  ? "No solo colgamos el ventilador: dejamos todo probado"
                  : "We do not just hang the fan: we leave everything tested"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Un ventilador pesa más que una lámpara normal y genera movimiento. Por eso revisamos la fijación, el soporte, la conexión y la estabilidad antes de terminar."
                  : "A fan weighs more than a normal lamp and creates movement. That is why we check the fixing, bracket, connection and stability before finishing."}
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
                ? "Cómo hacemos el cambio de lámpara a ventilador"
                : "How we replace the lamp with a fan"}
            </h2>
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
                {isEs ? "Seguridad primero" : "Safety first"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {isEs
                  ? "Antes de montar el ventilador revisamos el punto de fijación"
                  : "Before mounting the fan, we check the fixing point"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Una lámpara normal casi no se mueve, pero un ventilador trabaja con peso, vibración y giro. Por eso no lo instalamos “a ciegas”: comprobamos el soporte, el techo y el tipo de anclaje necesario."
                  : "A normal lamp barely moves, but a fan works with weight, vibration and rotation. That is why we do not install it blindly: we check the bracket, ceiling and the type of anchor needed."}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  isEs ? "Techo de hormigón" : "Concrete ceiling",
                  isEs ? "Techo de pladur" : "Drywall ceiling",
                  isEs ? "Falso techo" : "Suspended ceiling",
                  isEs ? "Punto de luz existente" : "Existing light point",
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
                  ? "Importante antes de comprar"
                  : "Important before buying"}
              </h3>

              <p className="mt-4 leading-8 text-white/75">
                {isEs
                  ? "El ventilador debe venir completo: soporte, tornillos, receptor, mando, aspas, embellecedor e instrucciones. Si falta alguna pieza, podemos revisarlo contigo antes de empezar."
                  : "The fan should come complete: bracket, screws, receiver, remote, blades, cover and instructions. If any part is missing, we can check it with you before starting."}
              </p>

              <div className="mt-6 rounded-3xl bg-white/10 p-5">
                <p className="font-black text-yellow-400">
                  {isEs ? "Fotos recomendadas:" : "Recommended photos:"}
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/75">
                  <li>
                    {isEs
                      ? "• Lámpara actual vista desde abajo"
                      : "• Current lamp from below"}
                  </li>
                  <li>
                    {isEs
                      ? "• Techo alrededor del punto de luz"
                      : "• Ceiling around the light point"}
                  </li>
                  <li>
                    {isEs
                      ? "• Caja del ventilador comprado"
                      : "• Box of the fan you bought"}
                  </li>
                  <li>
                    {isEs
                      ? "• Modelo o instrucciones si las tienes"
                      : "• Model or instructions if available"}
                  </li>
                </ul>
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

      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-bold text-yellow-600">
                <Home className="h-4 w-4" />
                {isEs ? "Para casa y pisos" : "For homes and flats"}
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                {isEs
                  ? "Cambiamos lámparas por ventiladores en dormitorios, salones y habitaciones"
                  : "We replace lamps with fans in bedrooms, living rooms and rooms"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Este servicio es ideal si ya tienes una lámpara instalada y quieres aprovechar ese mismo punto para colocar un ventilador de techo con luz."
                  : "This service is ideal if you already have a lamp installed and want to use the same point to place a ceiling fan with light."}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Dormitorio principal" : "Main bedroom",
                  text: isEs
                    ? "Sustituimos la lámpara por ventilador para mejorar el confort en verano."
                    : "We replace the lamp with a fan to improve comfort in summer.",
                  icon: Home,
                },
                {
                  title: isEs ? "Habitación infantil" : "Children's room",
                  text: isEs
                    ? "Montaje limpio, estable y con prueba de luz y mando."
                    : "Clean, stable mounting with light and remote testing.",
                  icon: ShieldCheck,
                },
                {
                  title: isEs ? "Salón" : "Living room",
                  text: isEs
                    ? "Instalación de ventiladores más grandes con luz LED o mando."
                    : "Installation of larger fans with LED light or remote control.",
                  icon: Fan,
                },
                {
                  title: isEs ? "Pisos de alquiler" : "Rental flats",
                  text: isEs
                    ? "Cambio rápido de plafón o lámpara por ventilador moderno."
                    : "Fast replacement of ceiling light or lamp with a modern fan.",
                  icon: Sparkles,
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
                ? "Un montaje limpio, claro y sin sorpresas"
                : "Clean, clear mounting with no surprises"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-600">
              {isEs
                ? "Te confirmamos el precio antes, cuidamos la vivienda y comprobamos todo contigo antes de terminar."
                : "We confirm the price beforehand, take care of the home and check everything with you before finishing."}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: isEs ? "Precio confirmado" : "Confirmed price",
                text: isEs
                  ? "Antes de ir revisamos fotos y te decimos si aplica el precio base."
                  : "Before coming, we check photos and tell you if the base price applies.",
                icon: Euro,
              },
              {
                title: isEs ? "Trabajo ordenado" : "Tidy work",
                text: isEs
                  ? "Retiramos la lámpara, montamos el ventilador y dejamos la zona limpia."
                  : "We remove the lamp, mount the fan and leave the area tidy.",
                icon: Sparkles,
              },
              {
                title: isEs ? "Prueba final" : "Final test",
                text: isEs
                  ? "Probamos luz, velocidades, mando y estabilidad antes de irnos."
                  : "We test light, speeds, remote and stability before leaving.",
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
                  ? "Cambio de lámpara por ventilador en Valencia y alrededores"
                  : "Lamp to fan replacement in Valencia and nearby areas"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                {isEs
                  ? "Trabajamos en Valencia ciudad y también en zonas cercanas. Envíanos tu ubicación por WhatsApp y confirmamos disponibilidad."
                  : "We work in Valencia city and nearby areas. Send us your location on WhatsApp and we confirm availability."}
              </p>

              <WhatsAppConversionLink
  href={whatsappUrl}
  className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 font-black text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-neutral-800"
>
  <MessageCircle className="h-5 w-5" />
  {isEs ? "Consultar mi zona" : "Check my area"}
</WhatsAppConversionLink>
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
                ? "Más servicios para ventiladores y lámparas"
                : "More services for fans and lamps"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-600">
              {isEs
                ? "También podemos ayudarte con otros tipos de instalación de ventiladores, lámparas y puntos de luz."
                : "We can also help with other fan, lamp and light point installation services."}
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
                ? "Preguntas frecuentes sobre cambiar lámpara por ventilador"
                : "Frequently asked questions about replacing a lamp with a fan"}
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
              ? "¿Quieres cambiar tu lámpara por un ventilador de techo?"
              : "Want to replace your lamp with a ceiling fan?"}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-800">
            {isEs
              ? "Envíanos fotos de la lámpara actual, el techo y el ventilador comprado. Te confirmamos precio y disponibilidad por WhatsApp."
              : "Send us photos of the current lamp, ceiling and the fan you bought. We confirm price and availability on WhatsApp."}
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
        </div>
      </section>
    </main>
  );
}