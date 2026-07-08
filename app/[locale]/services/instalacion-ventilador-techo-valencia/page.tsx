import type { Metadata } from "next";
import WhatsAppConversionLink from "@/app/components/WhatsAppConversionLink";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Settings,
  CheckCircle2,
  Clock3,
  Euro,
  Phone,
  Fan,
  Home,
  Lightbulb,
  MapPin,
  MessageCircle,
  Plug,
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

const fanPages = [
  {
    slug: "instalar-ventilador-techo-luz-valencia",
    en: "Ceiling Fan With Light",
    es: "Ventilador de techo con luz",
    descEn: "Installation of ceiling fans with LED light, remote control and final testing.",
    descEs: "Instalación de ventiladores con luz LED, mando a distancia y prueba final.",
    icon: Lightbulb,
  },
  {
    slug: "cambiar-lampara-por-ventilador-valencia",
    en: "Replace Lamp With Fan",
    es: "Cambiar lámpara por ventilador",
    descEn: "Old lamp removal and ceiling fan installation on the existing electrical point.",
    descEs: "Retirada de la lámpara antigua e instalación del ventilador en el punto existente.",
    icon: Plug,
  },
  {
    slug: "instalar-ventilador-mando-valencia",
    en: "Fan With Remote Control",
    es: "Ventilador con mando",
    descEn: "Fan installation with receiver, remote control setup and speed testing.",
    descEs: "Instalación con receptor, configuración del mando y prueba de velocidades.",
    icon: Fan,
  },
  {
    slug: "instalar-ventilador-aspas-retractiles-valencia",
    en: "Retractable Blade Fan",
    es: "Ventilador con aspas retráctiles",
    descEn: "Installation of modern fans that look like a normal ceiling light when off.",
    descEs: "Instalación de ventiladores modernos que parecen una lámpara cuando están apagados.",
    icon: Sparkles,
  },
  {
    slug: "instalar-ventilador-create-valencia",
    en: "CREATE Fan Installation",
    es: "Instalación ventilador CREATE",
    descEn: "Assembly and installation of CREATE / IKOHS ceiling fans in Valencia.",
    descEs: "Montaje e instalación de ventiladores CREATE / IKOHS en Valencia.",
    icon: BadgeCheck,
  },
  {
    slug: "instalar-ventilador-cecotec-valencia",
    en: "Cecotec Fan Installation",
    es: "Instalación ventilador Cecotec",
    descEn: "Installation of Cecotec EnergySilence and similar ceiling fan models.",
    descEs: "Instalación de ventiladores Cecotec EnergySilence y modelos similares.",
    icon: BadgeCheck,
  },
  {
    slug: "instalacion-2-ventiladores-techo-valencia",
    en: "Two Ceiling Fans",
    es: "Instalación de 2 ventiladores",
    descEn: "Pack for two ceiling fans installed in the same visit.",
    descEs: "Pack para instalar dos ventiladores de techo en la misma visita.",
    icon: Fan,
  },
  {
    slug: "instalacion-3-ventiladores-techo-valencia",
    en: "Three Ceiling Fans",
    es: "Instalación de 3 ventiladores",
    descEn: "Pack for three ceiling fans installed in one home.",
    descEs: "Pack para instalar tres ventiladores de techo en una vivienda.",
    icon: Home,
  },
  {
    slug: "ventilador-techo-dormitorio-valencia",
    en: "Bedroom Ceiling Fan",
    es: "Ventilador para dormitorio",
    descEn: "Quiet, centered and clean fan installation for bedrooms.",
    descEs: "Instalación silenciosa, centrada y limpia para dormitorios.",
    icon: Home,
  },
  {
    slug: "ventilador-techo-salon-valencia",
    en: "Living Room Ceiling Fan",
    es: "Ventilador para salón",
    descEn: "Safe ceiling fan installation for living rooms and main areas.",
    descEs: "Instalación segura de ventiladores para salones y zonas principales.",
    icon: Home,
  },
  {
    slug: "ventilador-techo-pladur-valencia",
    en: "Fan On Plasterboard Ceiling",
    es: "Ventilador en techo de pladur",
    descEn: "We check the ceiling and use suitable fixings for plasterboard when possible.",
    descEs: "Revisamos el techo y usamos fijaciones adecuadas para pladur cuando es posible.",
    icon: ShieldCheck,
  },
  {
    slug: "ventilador-techo-hormigon-valencia",
    en: "Fan On Concrete Ceiling",
    es: "Ventilador en techo de hormigón",
    descEn: "Strong installation on concrete ceilings with proper drilling and anchors.",
    descEs: "Instalación firme en techo de hormigón con taladro y tacos adecuados.",
    icon: Wrench,
  },
  {
    slug: "ventilador-techo-alto-valencia",
    en: "High Ceiling Fan",
    es: "Ventilador en techo alto",
    descEn: "Ceiling fan installation on higher ceilings when access is possible.",
    descEs: "Instalación de ventiladores en techos altos cuando el acceso lo permite.",
    icon: ArrowRight,
  },
  {
    slug: "instalar-ventilador-wifi-valencia",
    en: "WiFi Ceiling Fan",
    es: "Ventilador WiFi",
    descEn: "Installation and basic app check for WiFi ceiling fans.",
    descEs: "Instalación y prueba básica de app para ventiladores WiFi.",
    icon: Plug,
  },
  {
    slug: "montaje-lampara-ventilador-valencia",
    en: "Fan Lamp Installation",
    es: "Montaje lámpara ventilador",
    descEn: "Combined lighting and fan installation with clean finish.",
    descEs: "Montaje de lámpara ventilador con acabado limpio y prueba final.",
    icon: Lightbulb,
  },
  {
    slug: "cambiar-ventilador-techo-valencia",
    en: "Replace Old Ceiling Fan",
    es: "Cambiar ventilador antiguo",
    descEn: "Removal of old ceiling fan and installation of the new one.",
    descEs: "Retirada del ventilador antiguo e instalación del nuevo.",
    icon: Wrench,
  },
  {
    slug: "presupuesto-ventilador-techo-valencia",
    en: "Ceiling Fan Estimate",
    es: "Presupuesto ventilador de techo",
    descEn: "Clear estimate before confirming the visit.",
    descEs: "Presupuesto claro antes de confirmar la visita.",
    icon: Euro,
  },
  {
    slug: "manitas-ventilador-techo-valencia",
    en: "Handyman For Ceiling Fan",
    es: "Manitas para ventilador de techo",
    descEn: "Local handyman service for ceiling fan installation in Valencia.",
    descEs: "Servicio local de manitas para instalar ventiladores de techo en Valencia.",
    icon: Wrench,
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Instalación de ventilador de techo en Valencia desde 45 € | THEVULGO"
    : "Ceiling Fan Installation in Valencia From €45 | THEVULGO";

  const description = isEs
    ? "Instalación de ventiladores de techo en Valencia desde 45 €. 2 ventiladores 85 €, 3 ventiladores 125 €. Desmontaje de lámpara o ventilador antiguo y conexión al punto eléctrico existente incluidos."
    : "Ceiling fan installation in Valencia from €45. 2 fans €85, 3 fans €125. Old lamp or fan removal and connection to the existing electrical point included.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "instalacion ventilador techo valencia",
          "instalar ventilador de techo valencia",
          "montaje ventilador techo valencia",
          "ventilador de techo con luz valencia",
          "cambiar lampara por ventilador valencia",
          "instalar ventilador create valencia",
          "instalar ventilador cecotec valencia",
          "manitas ventilador techo valencia",
          "precio instalar ventilador techo valencia",
        ]
      : [
          "ceiling fan installation valencia",
          "install ceiling fan valencia",
          "ceiling fan with light valencia",
          "replace lamp with ceiling fan valencia",
          "ceiling fan installer valencia",
          "handyman ceiling fan valencia",
          "ceiling fan installation price valencia",
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
      canonical: `${baseUrl}/${locale}/services/instalacion-ventilador-techo-valencia`,
      languages: {
        es: `${baseUrl}/es/services/instalacion-ventilador-techo-valencia`,
        en: `${baseUrl}/en/services/instalacion-ventilador-techo-valencia`,
        "x-default": `${baseUrl}/es/services/instalacion-ventilador-techo-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/instalacion-ventilador-techo-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}
export default async function CeilingFanInstallationPage({
  params,
}: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/services/instalacion-ventilador-techo-valencia`;

  const estimateHref = `/${locale}/estimate?category=ceiling-fan`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito instalar un ventilador de techo en Valencia. Quiero pedir presupuesto."
      : "Hi, I need a ceiling fan installation in Valencia. I'd like to request an estimate."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const prices = isEs
    ? [
        ["1 ventilador de techo", "45 €"],
        ["2 ventiladores de techo", "85 €"],
        ["3 ventiladores de techo", "125 €"],
        ["Desmontaje del ventilador antiguo", "Incluido"],
        ["Desmontaje de lámpara", "Incluido"],
        ["Conexión al punto eléctrico existente", "Incluido"],
      ]
    : [
        ["1 ceiling fan", "€45"],
        ["2 ceiling fans", "€85"],
        ["3 ceiling fans", "€125"],
        ["Old ceiling fan removal", "Included"],
        ["Old light removal", "Included"],
        ["Connection to existing electrical point", "Included"],
      ];

  const whyChoose = isEs
    ? [
        "Precio fijo y claro antes de la visita",
        "Desmontaje del ventilador o lámpara anterior incluido",
        "Conexión al punto eléctrico existente incluida",
        "Montaje limpio y nivelado",
        "Prueba de todas las velocidades",
        "Prueba de iluminación y mando",
        "Instalación para viviendas y apartamentos",
        "Atención rápida por WhatsApp",
      ]
    : [
        "Clear fixed price before the visit",
        "Old fan or light removal included",
        "Connection to the existing electrical point included",
        "Clean and level installation",
        "All fan speeds tested",
        "Light and remote control tested",
        "Installation for homes and apartments",
        "Fast WhatsApp communication",
      ];

  const process = isEs
    ? [
        [
          "1. Envíanos una foto",
          "Envía una foto del techo y del ventilador que quieres instalar.",
        ],
        [
          "2. Confirmamos el precio",
          "Revisamos el tipo de techo y confirmamos el presupuesto.",
        ],
        [
          "3. Instalación",
          "Retiramos la lámpara o ventilador antiguo y montamos el nuevo.",
        ],
        [
          "4. Pruebas",
          "Comprobamos luz, velocidades, equilibrio y funcionamiento.",
        ],
        [
          "5. Trabajo terminado",
          "Dejamos todo limpio y listo para usar.",
        ],
      ]
    : [
        [
          "1. Send us a photo",
          "Send a photo of the ceiling and the fan you want installed.",
        ],
        [
          "2. Price confirmation",
          "We check the ceiling type and confirm the estimate.",
        ],
        [
          "3. Installation",
          "We remove the old light or fan and install the new one.",
        ],
        [
          "4. Testing",
          "We test light, speeds, balance and operation.",
        ],
        [
          "5. Finished",
          "Everything is cleaned and ready to use.",
        ],
      ];

  const clientTypes = [
    {
      title: isEs ? "Dormitorios" : "Bedrooms",
      text: isEs
        ? "Instalación de ventiladores silenciosos para descansar mejor durante todo el año."
        : "Quiet ceiling fan installation for comfortable bedrooms.",
      icon: Home,
    },
    {
      title: isEs ? "Salones" : "Living rooms",
      text: isEs
        ? "Ventiladores para zonas principales con luz y mando a distancia."
        : "Ceiling fans with light and remote control for living rooms.",
      icon: Star,
    },
    {
      title: isEs ? "Apartamentos" : "Apartments",
      text: isEs
        ? "Instalaciones rápidas para viviendas en Valencia."
        : "Fast installations for apartments across Valencia.",
      icon: MapPin,
    },
    {
      title: isEs ? "Viviendas completas" : "Whole homes",
      text: isEs
        ? "Packs especiales para instalar dos o tres ventiladores en una misma visita."
        : "Special packages for installing two or three ceiling fans in one visit.",
      icon: Fan,
    },
  ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta instalar un ventilador de techo en Valencia?",
          a: "La instalación de un ventilador cuesta 45 €. Dos ventiladores cuestan 85 € y tres ventiladores 125 €.",
        },
        {
          q: "¿Está incluido desmontar la lámpara antigua?",
          a: "Sí. El desmontaje de la lámpara o del ventilador antiguo está incluido en el precio.",
        },
        {
          q: "¿Tengo que comprar cables?",
          a: "No. Si existe un punto eléctrico en el techo, realizamos la conexión incluida en el servicio.",
        },
        {
          q: "¿Instaláis ventiladores con luz LED?",
          a: "Sí. Instalamos ventiladores con iluminación integrada y realizamos todas las pruebas.",
        },
        {
          q: "¿Instaláis ventiladores con mando a distancia?",
          a: "Sí. Configuramos el mando y comprobamos todas las funciones.",
        },
        {
          q: "¿Puedo comprar yo el ventilador?",
          a: "Sí. Puedes comprar cualquier marca y nosotros realizamos la instalación.",
        },
        {
          q: "¿Trabajáis todos los días?",
          a: "Sí. Trabajamos los siete días de la semana según disponibilidad.",
        },
        {
          q: "¿Puedo pedir presupuesto por WhatsApp?",
          a: "Sí. Solo tienes que enviarnos una foto del techo y del ventilador.",
        },
      ]
    : [
        {
          q: "How much does ceiling fan installation cost in Valencia?",
          a: "One fan costs €45, two fans €85 and three fans €125.",
        },
        {
          q: "Is old light removal included?",
          a: "Yes. Removing the old light or fan is included.",
        },
        {
          q: "Do I need extra wiring?",
          a: "No. If an electrical point already exists, connection is included.",
        },
        {
          q: "Do you install fans with LED lights?",
          a: "Yes, including full testing.",
        },
        {
          q: "Do you install remote control fans?",
          a: "Yes. We configure and test the remote.",
        },
        {
          q: "Can I buy the fan myself?",
          a: "Yes. You can buy any brand you prefer.",
        },
        {
          q: "Do you work every day?",
          a: "Yes. We work seven days a week.",
        },
        {
          q: "Can I request an estimate by WhatsApp?",
          a: "Yes. Just send us a few photos.",
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
        priceRange: "€",
        areaServed: areas,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Valencia",
          addressRegion: "Valencia",
          addressCountry: "ES",
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: isEs
          ? "Instalación de ventilador de techo en Valencia"
          : "Ceiling fan installation in Valencia",
        serviceType: isEs
          ? "Instalación de ventiladores de techo"
          : "Ceiling fan installation",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: pageUrl,
        description: isEs
          ? "Instalación de ventiladores de techo en Valencia desde 45 €. Desmontaje de lámpara o ventilador antiguo y conexión al punto eléctrico existente incluidos."
          : "Ceiling fan installation in Valencia from €45. Old lamp or fan removal and connection to the existing electrical point included.",
        offers: [
          {
            "@type": "Offer",
            name: isEs ? "Instalación de 1 ventilador" : "1 ceiling fan installation",
            price: "45",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: isEs ? "Instalación de 2 ventiladores" : "2 ceiling fans installation",
            price: "85",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: isEs ? "Instalación de 3 ventiladores" : "3 ceiling fans installation",
            price: "125",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de instalación de ventiladores en Valencia"
            : "Ceiling fan installation services in Valencia",
          itemListElement: fanPages.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: isEs ? item.es : item.en,
              url: `${baseUrl}/${locale}/services/${item.slug}`,
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
              ? "Instalación de ventilador de techo"
              : "Ceiling Fan Installation",
            item: pageUrl,
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
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />
          <div className="absolute right-10 top-20 h-[320px] w-[320px] rounded-full bg-yellow-100/70 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-8 pb-10 lg:px-8 lg:pt-10 lg:pb-14">
          <div className="max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-500" />
              THEVULGO • Valencia & nearby
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              {isEs
                ? "Instalación de ventilador de techo en Valencia"
                : "Ceiling fan installation in Valencia"}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">

  {isEs

    ? "Instalamos ventiladores de techo en Valencia con montaje limpio, precio claro y prueba final. Trabajamos con ventiladores con luz, mando, aspas retráctiles, CREATE, Cecotec y otros modelos."

    : "We install ceiling fans in Valencia with clean mounting, clear pricing and final testing. We work with fans with light, remote control, retractable blades, CREATE, Cecotec and other models."}

</p>

<div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">

  <span className="rounded-full bg-yellow-100 px-4 py-2 text-neutral-950">

    {isEs ? "✓ Desmontaje incluido" : "✓ Removal included"}

  </span>

  <span className="rounded-full bg-yellow-100 px-4 py-2 text-neutral-950">

    {isEs ? "✓ Conexión incluida" : "✓ Connection included"}

  </span>

  <span className="rounded-full bg-yellow-400 px-4 py-2 text-black shadow-sm">

    {isEs ? "Desde 45 €" : "From €45"}

  </span>

</div>

            <div className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-yellow-300 bg-white p-5 shadow-md">
                <p className="text-sm font-bold text-neutral-600">
                  {isEs ? "1 ventilador" : "1 fan"}
                </p>
                <p className="mt-1 text-3xl font-black">45 €</p>
              </div>

              <div className="rounded-2xl border border-yellow-300 bg-white p-5 shadow-md">
                <p className="text-sm font-bold text-neutral-600">
                  {isEs ? "2 ventiladores" : "2 fans"}
                </p>
                <p className="mt-1 text-3xl font-black">85 €</p>
              </div>

              <div className="rounded-2xl border border-yellow-300 bg-white p-5 shadow-md">
                <p className="text-sm font-bold text-neutral-600">
                  {isEs ? "3 ventiladores" : "3 fans"}
                </p>
                <p className="mt-1 text-3xl font-black">125 €</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
  <WhatsAppConversionLink

  href={whatsappHref}

  className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-lg transition hover:scale-105"

>

  <MessageCircle className="h-5 w-5" />

  {isEs ? "WhatsApp rápido" : "Fast WhatsApp"}

</WhatsAppConversionLink>

  <a
    href={`tel:+${phone}`}
    className="inline-flex items-center justify-center gap-2 rounded-xl border border-yellow-400 bg-white px-6 py-4 font-bold text-black shadow-md transition hover:scale-105"
  >
    <Phone className="h-5 w-5 text-yellow-500" />
    +34 610 076 942
  </a>

  <Link
    href={estimateHref}
    className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 font-bold text-white shadow-lg transition hover:scale-105"
  >
    {isEs ? "Abrir formulario" : "Open estimate form"}
    <ArrowRight className="h-5 w-5" />
  </Link>
</div>

<p className="mt-4 text-sm font-semibold text-neutral-600">
  {isEs
    ? "Respuesta rápida por WhatsApp • Trabajamos los 7 días según disponibilidad"
    : "Fast WhatsApp reply • We work 7 days depending on availability"}
</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Clock3,
                  title: isEs ? "Instalación rápida" : "Fast installation",
                  text: isEs
                    ? "En la mayoría de casos se instala en una sola visita."
                    : "In most cases, the fan is installed in one visit.",
                },
                {
                  icon: Plug,
                  title: isEs ? "Conexión incluida" : "Connection included",
                  text: isEs
                    ? "Conectamos al punto eléctrico existente en el techo."
                    : "We connect it to the existing ceiling electrical point.",
                },
                {
                  icon: Wrench,
                  title: isEs ? "Desmontaje incluido" : "Removal included",
                  text: isEs
                    ? "Retiramos la lámpara o ventilador anterior antes del montaje."
                    : "We remove the old light or fan before installation.",
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
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <Fan className="h-4 w-4" />
              {isEs ? "Servicios de ventiladores" : "Fan services"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Elige el servicio de ventilador que necesitas"
                : "Choose the fan service you need"}
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-neutral-700">
              {isEs
                ? "Instalamos ventiladores de techo con luz, mando, aspas retráctiles, modelos silenciosos para dormitorio, ventiladores para salón y packs para varias habitaciones."
                : "We install ceiling fans with light, remote control, retractable blades, quiet bedroom fans, living room fans and packages for multiple rooms."}
            </p>
          </div>

          <Link
            href={estimateHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold shadow-sm transition hover:scale-105"
          >
            {isEs ? "Pedir presupuesto" : "Request estimate"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fanPages.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/services/${item.slug}`}
              className="group rounded-2xl border border-yellow-300 bg-white p-6 shadow-md transition hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-black">
                {isEs ? item.es : item.en}
              </h3>

              <p className="mt-3 leading-7 text-neutral-700">
                {isEs ? item.descEs : item.descEn}
              </p>

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
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
                <Euro className="h-4 w-4 text-yellow-500" />
                {isEs ? "Precios claros" : "Clear prices"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Precio de instalación de ventilador de techo en Valencia"
                  : "Ceiling fan installation price in Valencia"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "El precio incluye el montaje del ventilador, el desmontaje de la lámpara o ventilador antiguo y la conexión al punto eléctrico existente. Antes de confirmar la visita, revisamos fotos del techo y del ventilador para evitar sorpresas."
                  : "The price includes fan assembly, old light or fan removal and connection to the existing electrical point. Before confirming the visit, we check photos of the ceiling and the fan to avoid surprises."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Si el techo necesita una fijación especial, si no existe punto eléctrico o si hay que hacer cableado nuevo, lo comentamos antes de la visita para que tengas el presupuesto claro."
                  : "If the ceiling needs special fixing, if there is no electrical point or if new wiring is required, we discuss it before the visit so the estimate is clear."}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {(isEs
                  ? [
                      "Precio confirmado antes de la visita",
                      "Sin sorpresas al terminar",
                      "Desmontaje incluido",
                      "Conexión incluida al punto existente",
                    ]
                  : [
                      "Price confirmed before the visit",
                      "No surprises at the end",
                      "Removal included",
                      "Connection to existing point included",
                    ]).map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                    <span className="text-sm font-semibold leading-7 text-neutral-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-xl">
              <h3 className="flex items-center gap-2 text-xl font-black">
                <Euro className="h-6 w-6 text-yellow-500" />
                {isEs ? "Tarifas" : "Rates"}
              </h3>

              <div className="mt-5 space-y-3">
                {prices.map(([name, price]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between gap-4 rounded-xl bg-yellow-50 p-4"
                  >
                    <span className="font-semibold">{name}</span>
                    <span className="shrink-0 font-black">{price}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-neutral-600">
                {isEs
                  ? "Precio válido para instalación sobre punto eléctrico existente y condiciones normales de montaje. Para techos especiales, altura elevada o cableado adicional, se revisa antes por fotos."
                  : "Price valid for installation on an existing electrical point and normal mounting conditions. For special ceilings, high ceilings or extra wiring, we check it by photos first."}
              </p>

              <WhatsAppConversionLink
  href={whatsappHref}
  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-lg transition hover:scale-105"
>
  <MessageCircle className="h-5 w-5" />
  WhatsApp
</WhatsAppConversionLink>
            </div>
          </div>
        </div>
      </section>
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
            <Home className="h-4 w-4" />
            {isEs ? "Para casa y apartamentos" : "For homes and apartments"}
          </div>

          <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
            {isEs
              ? "Ventiladores de techo para dormitorio, salón y vivienda completa"
              : "Ceiling fans for bedrooms, living rooms and whole homes"}
          </h2>

          <p className="mx-auto mt-4 max-w-4xl leading-8 text-neutral-700">
            {isEs
              ? "Un ventilador de techo bien instalado mejora el confort, ayuda a mover el aire y puede quedar como una lámpara moderna. Instalamos modelos con luz, mando, diferentes velocidades, temporizador y aspas retráctiles."
              : "A properly installed ceiling fan improves comfort, moves the air and can look like a modern ceiling light. We install models with light, remote control, different speeds, timer and retractable blades."}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {clientTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-black">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-neutral-700">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-neutral-900 px-4 py-1 text-xs font-bold text-yellow-400">
                <BadgeCheck className="h-4 w-4" />
                {isEs ? "Por qué THEVULGO" : "Why THEVULGO"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Por qué elegir THEVULGO para instalar tu ventilador"
                  : "Why choose THEVULGO for your ceiling fan installation"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "No se trata solo de colgar el ventilador. Hay que montarlo bien, fijarlo con seguridad, conectar correctamente los cables, comprobar que no vibra y probar luz, mando y velocidades antes de terminar."
                  : "It is not just about hanging the fan. It has to be assembled correctly, fixed safely, wired properly, checked for vibration and tested for light, remote control and speeds before finishing."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Trabajamos con un proceso simple: fotos por WhatsApp, precio claro, visita confirmada, instalación limpia y prueba final contigo."
                  : "We work with a simple process: WhatsApp photos, clear price, confirmed visit, clean installation and final testing with you."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-neutral-700 bg-neutral-950 p-5"
                >
                  <CheckCircle2 className="mb-3 h-5 w-5 text-yellow-400" />
                  <p className="text-sm font-semibold leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
            <Settings className="h-4 w-4" />
            {isEs ? "Cómo funciona" : "How it works"}
          </div>

          <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black sm:text-4xl">
            {isEs
              ? "De fotos por WhatsApp a ventilador funcionando"
              : "From WhatsApp photos to a working ceiling fan"}
          </h2>

          <p className="mx-auto mt-4 max-w-4xl leading-8 text-neutral-700">
            {isEs
              ? "Para dar un presupuesto correcto necesitamos ver el techo, el punto eléctrico y el modelo del ventilador. Así podemos confirmar el precio antes de ir."
              : "To give a correct estimate, we need to see the ceiling, the electrical point and the fan model. This helps us confirm the price before the visit."}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {process.map(([title, text]) => (
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

            <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
                <Lightbulb className="h-4 w-4 text-yellow-500" />
                {isEs ? "Luz, mando y velocidades" : "Light, remote and speeds"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Instalación de ventiladores con luz LED, mando y temporizador"
                  : "Installation of fans with LED light, remote control and timer"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Muchos ventiladores modernos funcionan como lámpara y ventilador al mismo tiempo. Montamos el cuerpo del ventilador, conectamos el receptor, colocamos las aspas, configuramos el mando y probamos la luz, las velocidades y el temporizador."
                  : "Many modern ceiling fans work as both a light and a fan. We assemble the fan body, connect the receiver, fit the blades, configure the remote and test the light, speeds and timer."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "También instalamos ventiladores con aspas retráctiles, modelos silenciosos para dormitorio y ventiladores con diseño moderno que quedan como una lámpara cuando están apagados."
                  : "We also install retractable blade fans, quiet bedroom models and modern fans that look like a ceiling light when turned off."}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {(isEs
                ? [
                    "Ventiladores con luz LED",
                    "Ventiladores con mando",
                    "Ventiladores con temporizador",
                    "Aspas retráctiles",
                    "Modelos silenciosos",
                    "CREATE / IKOHS",
                    "Cecotec EnergySilence",
                    "Prueba final completa",
                  ]
                : [
                    "Fans with LED light",
                    "Fans with remote control",
                    "Fans with timer",
                    "Retractable blades",
                    "Quiet models",
                    "CREATE / IKOHS",
                    "Cecotec EnergySilence",
                    "Full final testing",
                  ]).map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                  <span className="text-sm leading-7 text-neutral-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-yellow-300 bg-white p-8 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
              <ShieldCheck className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-black">
              {isEs
                ? "Antes de instalar un ventilador de techo"
                : "Before installing a ceiling fan"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Antes de instalar, revisamos el tipo de techo, el punto eléctrico, el peso del ventilador, la altura, el sistema de fijación y si hay una lámpara o ventilador anterior que retirar."
                : "Before installation, we check the ceiling type, electrical point, fan weight, height, fixing system and whether there is an old light or fan to remove."}
            </p>

            <div className="mt-6 space-y-3">
              {(isEs
                ? [
                    "Foto del techo",
                    "Foto del ventilador o caja",
                    "Altura aproximada",
                    "Tipo de techo si lo sabes",
                    "Número de ventiladores",
                  ]
                : [
                    "Photo of the ceiling",
                    "Photo of the fan or box",
                    "Approximate height",
                    "Ceiling type if you know it",
                    "Number of fans",
                  ]).map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-yellow-500" />
                  <span className="text-sm leading-7 text-neutral-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-8 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
              <Wrench className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-black">
              {isEs
                ? "Qué está incluido en el montaje"
                : "What is included in the installation"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {isEs
                ? "El servicio incluye el montaje del ventilador, la fijación al techo, la conexión al punto eléctrico existente, el desmontaje de la lámpara o ventilador anterior y la prueba final de funcionamiento."
                : "The service includes fan assembly, ceiling fixing, connection to the existing electrical point, removal of the previous light or fan and final operation testing."}
            </p>

            <div className="mt-6 space-y-3">
              {(isEs
                ? [
                    "Montaje del cuerpo del ventilador",
                    "Colocación de aspas",
                    "Conexión eléctrica",
                    "Configuración del mando",
                    "Prueba de luz y velocidades",
                  ]
                : [
                    "Fan body assembly",
                    "Blade fitting",
                    "Electrical connection",
                    "Remote control setup",
                    "Light and speed testing",
                  ]).map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-yellow-500" />
                  <span className="text-sm leading-7 text-neutral-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
            <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
              <MapPin className="h-4 w-4 text-yellow-500" />
              {isEs ? "Zonas de servicio" : "Service areas"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Instalación de ventiladores de techo en Valencia y alrededores"
                : "Ceiling fan installation in Valencia and nearby areas"}
            </h2>

            <p className="mx-auto mt-4 max-w-4xl leading-8 text-neutral-700">
              {isEs
                ? "Trabajamos en Valencia ciudad y zonas cercanas. Si estás en un barrio o municipio cercano, puedes enviarnos tu ubicación por WhatsApp y confirmamos disponibilidad."
                : "We work in Valencia city and nearby areas. If you are in a nearby district or town, send us your location by WhatsApp and we confirm availability."}
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {areas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-center text-sm font-bold shadow-sm"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold">
              <Fan className="h-4 w-4" />
              {isEs ? "Marcas y modelos" : "Brands and models"}
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs
                ? "Instalamos ventiladores de techo de muchas marcas"
                : "We install ceiling fans from many brands"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Puedes comprar el ventilador tú mismo y enviarnos el enlace o una foto de la caja. Revisamos el modelo antes de la visita para confirmar que la instalación es posible y que el precio corresponde al caso."
                : "You can buy the fan yourself and send us the link or a photo of the box. We check the model before the visit to confirm the installation is possible and that the price matches the case."}
            </p>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              {isEs
                ? "Trabajamos con ventiladores normales, ventiladores con luz, mando a distancia, aspas retráctiles, modelos WiFi y ventiladores silenciosos para dormitorio."
                : "We work with standard fans, fans with light, remote control, retractable blades, WiFi models and quiet fans for bedrooms."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {(isEs
              ? [
                  "CREATE / IKOHS",
                  "Cecotec",
                  "LEDKIA",
                  "Leroy Merlin",
                  "Amazon",
                  "Orbegozo",
                  "Taurus",
                  "Ventiladores con aspas retráctiles",
                  "Ventiladores con luz LED",
                  "Ventiladores con mando",
                  "Ventiladores WiFi",
                  "Ventiladores silenciosos",
                ]
              : [
                  "CREATE / IKOHS",
                  "Cecotec",
                  "LEDKIA",
                  "Leroy Merlin",
                  "Amazon",
                  "Orbegozo",
                  "Taurus",
                  "Retractable blade fans",
                  "Fans with LED light",
                  "Fans with remote control",
                  "WiFi fans",
                  "Quiet fans",
                ]).map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                <span className="text-sm font-semibold leading-7 text-neutral-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-neutral-900 px-4 py-1 text-xs font-bold text-yellow-400">
                <ShieldCheck className="h-4 w-4" />
                {isEs ? "Instalación segura" : "Safe installation"}
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {isEs
                  ? "Un ventilador de techo debe quedar firme, centrado y sin vibraciones"
                  : "A ceiling fan must be firm, centered and without vibration"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "El ventilador tiene peso, movimiento y vibración. Por eso no basta con conectarlo: hay que revisar la base, los tornillos, la fijación, el equilibrio de las aspas y el funcionamiento real después de montarlo."
                  : "A ceiling fan has weight, movement and vibration. That is why it is not enough to just connect it: the base, screws, fixing, blade balance and real operation must be checked after installation."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Si el techo es de pladur, falso techo, hormigón, techo alto o hay una instalación antigua, revisamos el caso antes por fotos para evitar problemas durante la visita."
                  : "If the ceiling is plasterboard, false ceiling, concrete, high ceiling or has an old installation, we check the case by photos first to avoid problems during the visit."}
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-400 bg-neutral-950 p-6 shadow-2xl">
              <h3 className="text-xl font-black text-yellow-400">
                {isEs ? "Revisamos antes" : "We check first"}
              </h3>

              <div className="mt-5 space-y-4">
                {(isEs
                  ? [
                      "Tipo de techo",
                      "Altura de trabajo",
                      "Punto eléctrico existente",
                      "Peso del ventilador",
                      "Sistema de fijación",
                      "Lámpara o ventilador antiguo",
                    ]
                  : [
                      "Ceiling type",
                      "Working height",
                      "Existing electrical point",
                      "Fan weight",
                      "Fixing system",
                      "Old light or fan",
                    ]).map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-400" />
                    <span className="text-sm font-semibold leading-7 text-neutral-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1 text-xs font-bold">
              <BadgeCheck className="h-4 w-4 text-yellow-500" />
              FAQ
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
            </h2>
          </div>

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
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">
                {isEs
                  ? "¿Necesitas instalar un ventilador de techo en Valencia?"
                  : "Need a ceiling fan installed in Valencia?"}
              </h2>

              <p className="mt-4 max-w-3xl text-lg font-medium leading-8">
                {isEs
                  ? "Envíanos una foto del techo y del ventilador. Confirmamos el precio antes de la visita y dejamos el ventilador instalado, conectado y probado."
                  : "Send us a photo of the ceiling and the fan. We confirm the price before the visit and leave the fan installed, connected and tested."}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/80 p-4">
                  <p className="text-sm font-bold">
                    {isEs ? "1 ventilador" : "1 fan"}
                  </p>
                  <p className="mt-1 text-2xl font-black">45 €</p>
                </div>

                <div className="rounded-2xl bg-white/80 p-4">
                  <p className="text-sm font-bold">
                    {isEs ? "2 ventiladores" : "2 fans"}
                  </p>
                  <p className="mt-1 text-2xl font-black">85 €</p>
                </div>

                <div className="rounded-2xl bg-white/80 p-4">
                  <p className="text-sm font-bold">
                    {isEs ? "3 ventiladores" : "3 fans"}
                  </p>
                  <p className="mt-1 text-2xl font-black">125 €</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <WhatsAppConversionLink
  href={whatsappHref}
  className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 font-bold text-white shadow-lg transition hover:scale-105"
>
  <MessageCircle className="h-5 w-5" />
  WhatsApp
</WhatsAppConversionLink>

              <Link
                href={estimateHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-black bg-white px-6 py-4 font-bold text-black shadow-sm transition hover:scale-105"
              >
                {isEs ? "Pedir presupuesto" : "Request estimate"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}