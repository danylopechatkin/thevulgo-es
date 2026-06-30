import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Drill,
  Euro,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Sparkles,
  Store,
  Sun,
  Umbrella,
  Wrench,
  Zap,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "services/instalacion-toldo-leroy-merlin-valencia";

const whatsappTextEs =
  "Hola, he comprado un toldo en Leroy Merlin y necesito instalarlo en Valencia. Quiero solicitar presupuesto.";
const whatsappTextEn =
  "Hello, I bought an awning at Leroy Merlin and need it installed in Valencia. I would like to request a quote.";

const areas = [
  "Valencia",
  "Ruzafa",
  "Russafa",
  "Benimaclet",
  "Campanar",
  "Patraix",
  "El Carmen",
  "Extramurs",
  "Mestalla",
  "Algirós",
  "Malvarrosa",
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Sagunto",
  "Cullera",
  "Gandía",
];

const faqEs = [
  {
    question: "¿Instalan toldos comprados en Leroy Merlin?",
    answer:
      "Sí. Podemos instalar toldos comprados en Leroy Merlin siempre que el producto esté completo, tenga sus soportes, tornillería o instrucciones, y sea adecuado para la pared donde se va a colocar.",
  },
  {
    question: "¿Pueden instalar toldos manuales de Leroy Merlin?",
    answer:
      "Sí. Instalamos toldos manuales de brazo, toldos extensibles, toldos para terraza, patio o balcón, y otros modelos similares comprados en Leroy Merlin.",
  },
  {
    question: "¿Pueden instalar toldos eléctricos de Leroy Merlin?",
    answer:
      "Sí. También instalamos toldos eléctricos o motorizados. En este caso revisamos el punto de corriente, el cableado, el mando y la ruta de conexión antes del montaje.",
  },
  {
    question: "¿Cuánto cuesta instalar un toldo de Leroy Merlin en Valencia?",
    answer:
      "El precio empieza desde 79 €. El coste final depende del tamaño del toldo, peso, altura de instalación, tipo de pared, número de soportes y si hay que desmontar un toldo antiguo.",
  },
  {
    question: "¿Qué necesito enviar para recibir presupuesto?",
    answer:
      "Necesitamos fotos del toldo, foto de la caja o modelo, medidas aproximadas, fotos de la pared donde se instalará y confirmar si es manual o eléctrico.",
  },
  {
    question: "¿Instalan el toldo aunque no lo haya comprado todavía?",
    answer:
      "Sí. Podemos orientarte antes de comprarlo. Puedes enviarnos el enlace del producto de Leroy Merlin y fotos del lugar de instalación para revisar si parece adecuado.",
  },
];

const faqEn = [
  {
    question: "Do you install awnings bought at Leroy Merlin?",
    answer:
      "Yes. We can install awnings purchased at Leroy Merlin as long as the product is complete, includes brackets, screws or instructions, and is suitable for the wall where it will be mounted.",
  },
  {
    question: "Can you install manual Leroy Merlin awnings?",
    answer:
      "Yes. We install manual arm awnings, extendable awnings, terrace awnings, patio awnings, balcony awnings and similar Leroy Merlin models.",
  },
  {
    question: "Can you install electric Leroy Merlin awnings?",
    answer:
      "Yes. We also install electric or motorized awnings. In this case, we check the power point, wiring, remote control and cable route before installation.",
  },
  {
    question: "How much does Leroy Merlin awning installation cost in Valencia?",
    answer:
      "Prices start from €79. The final cost depends on awning size, weight, installation height, wall type, number of brackets and whether an old awning needs to be removed.",
  },
  {
    question: "What do I need to send for a quote?",
    answer:
      "We need photos of the awning, a photo of the box or model, approximate measurements, photos of the wall where it will be installed and confirmation of whether it is manual or electric.",
  },
  {
    question: "Can you help before I buy the awning?",
    answer:
      "Yes. You can send us the Leroy Merlin product link and photos of the installation area so we can check if it looks suitable before you buy it.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Instalación de Toldo Leroy Merlin en Valencia | Desde 79 € | THEVULGO"
    : "Leroy Merlin Awning Installation in Valencia | From €79 | THEVULGO";

  const description = isEs
    ? "Instalamos toldos comprados en Leroy Merlin en Valencia. Montaje de toldos manuales y eléctricos para patio, terraza o balcón. Presupuesto por WhatsApp."
    : "We install awnings bought at Leroy Merlin in Valencia. Manual and electric awning mounting for patios, terraces and balconies. Quote by WhatsApp.";

  const url = `${baseUrl}/${locale}/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${baseUrl}/es/${slug}`,
        en: `${baseUrl}/en/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function InstalacionToldoLeroyMerlinValenciaPage({
  params,
}: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = isEs ? whatsappTextEs : whatsappTextEn;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    whatsappText
  )}`;

  const faq = isEs ? faqEs : faqEn;
  const pageUrl = `${baseUrl}/${locale}/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "THEVULGO",
      url: `${baseUrl}/${locale}`,
      telephone: `+${phone}`,
      areaServed: areas,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valencia",
        addressCountry: "ES",
      },
      priceRange: "€€",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: isEs
        ? "Instalación de toldos Leroy Merlin en Valencia"
        : "Leroy Merlin awning installation in Valencia",
      serviceType: isEs
        ? "Instalación de toldos comprados en Leroy Merlin"
        : "Installation of awnings purchased at Leroy Merlin",
      provider: {
        "@type": "LocalBusiness",
        name: "THEVULGO",
      },
      areaServed: areas,
      offers: {
        "@type": "Offer",
        price: "79",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
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
            ? "Instalación de toldo Leroy Merlin"
            : "Leroy Merlin awning installation",
          item: pageUrl,
        },
      ],
    },
  ];

  const benefits = isEs
    ? [
        "Instalación de toldos comprados en Leroy Merlin",
        "Montaje para patio, terraza, balcón o fachada",
        "Toldos manuales y eléctricos",
        "Revisión de pared y soportes antes de instalar",
        "Presupuesto rápido por WhatsApp",
        "Servicio en Valencia y alrededores",
      ]
    : [
        "Installation of awnings bought at Leroy Merlin",
        "Mounting for patio, terrace, balcony or façade",
        "Manual and electric awnings",
        "Wall and bracket check before installation",
        "Fast quote by WhatsApp",
        "Service in Valencia and nearby areas",
      ];

  const services = isEs
    ? [
        {
          icon: Store,
          title: "Toldos comprados en Leroy Merlin",
          text: "Instalamos toldos que ya has comprado en Leroy Merlin o que estás pensando comprar.",
        },
        {
          icon: Umbrella,
          title: "Patio, terraza o balcón",
          text: "Montaje de toldos para zonas exteriores de viviendas, patios interiores, terrazas y balcones.",
        },
        {
          icon: Drill,
          title: "Fijación segura",
          text: "Revisamos el tipo de pared, soportes, peso y altura para hacer una instalación estable.",
        },
        {
          icon: Zap,
          title: "Manual o eléctrico",
          text: "Instalamos modelos manuales y motorizados, revisando la conexión eléctrica cuando sea necesario.",
        },
      ]
    : [
        {
          icon: Store,
          title: "Awnings bought at Leroy Merlin",
          text: "We install awnings you already bought at Leroy Merlin or are planning to buy.",
        },
        {
          icon: Umbrella,
          title: "Patio, terrace or balcony",
          text: "Awning mounting for outdoor home areas, private patios, terraces and balconies.",
        },
        {
          icon: Drill,
          title: "Secure fixing",
          text: "We check wall type, brackets, weight and height to make the installation stable.",
        },
        {
          icon: Zap,
          title: "Manual or electric",
          text: "We install manual and motorized models, checking the electrical connection when needed.",
        },
      ];

  const steps = isEs
    ? [
        "Envíanos el enlace o foto del toldo de Leroy Merlin.",
        "Manda fotos de la pared, patio, terraza o balcón.",
        "Confirmamos si el toldo parece adecuado para instalar.",
        "Te damos precio aproximado y disponibilidad.",
        "Realizamos el montaje con nivelación y fijación segura.",
      ]
    : [
        "Send us the Leroy Merlin awning link or photo.",
        "Send photos of the wall, patio, terrace or balcony.",
        "We confirm if the awning looks suitable for installation.",
        "We give you an approximate price and availability.",
        "We install it with leveling and secure fixing.",
      ];

  const checks = isEs
    ? [
        "Modelo del toldo",
        "Medidas del toldo",
        "Peso aproximado",
        "Tipo de pared",
        "Altura de instalación",
        "Soportes incluidos",
        "Tornillería incluida",
        "Manual o eléctrico",
        "Espacio disponible",
        "Estado de la fachada",
      ]
    : [
        "Awning model",
        "Awning measurements",
        "Approximate weight",
        "Wall type",
        "Installation height",
        "Included brackets",
        "Included screws",
        "Manual or electric",
        "Available space",
        "Façade condition",
      ];

  const relatedLinks = [
    {
      href: `/${locale}/services/instalar-toldo-valencia`,
      label: isEs ? "Instalar toldo en Valencia" : "Awning installation Valencia",
    },
    {
      href: `/${locale}/services/instalacion-toldo-patio-valencia`,
      label: isEs ? "Toldo para patio" : "Patio awning installation",
    },
    {
      href: `/${locale}/services/instalacion-toldo-balcon-valencia`,
      label: isEs ? "Toldo para balcón" : "Balcony awning installation",
    },
    {
      href: `/${locale}/services/instalacion-toldo-electrico-valencia`,
      label: isEs ? "Toldo eléctrico" : "Electric awning installation",
    },
    {
      href: `/${locale}/services/instalacion-toldo-manual-valencia`,
      label: isEs ? "Toldo manual" : "Manual awning installation",
    },
    {
      href: `/${locale}/services/handyman-valencia`,
      label: isEs ? "Handyman en Valencia" : "Handyman in Valencia",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200">
                  <Store className="h-4 w-4" />
                  {isEs
                    ? "Montaje de toldos comprados en Leroy Merlin"
                    : "Installation of awnings bought at Leroy Merlin"}
                </div>

                <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  {isEs
                    ? "Instalación de Toldo Leroy Merlin en Valencia"
                    : "Leroy Merlin Awning Installation in Valencia"}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                  {isEs
                    ? "¿Has comprado un toldo en Leroy Merlin y necesitas instalarlo? Montamos toldos manuales y eléctricos para patio, terraza, balcón o fachada en Valencia."
                    : "Bought an awning at Leroy Merlin and need it installed? We mount manual and electric awnings for patios, terraces, balconies and façades in Valencia."}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsappUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-neutral-950 transition hover:bg-amber-300"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {isEs
                      ? "Pedir presupuesto por WhatsApp"
                      : "Request quote on WhatsApp"}
                  </a>

                  <Link
                    href={`/${locale}/services`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                  >
                    {isEs ? "Ver otros servicios" : "See other services"}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-300">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <Euro className="h-4 w-4 text-amber-300" />
                    {isEs ? "Desde 79 €" : "From €79"}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <PackageCheck className="h-4 w-4 text-amber-300" />
                    {isEs ? "Producto del cliente" : "Customer product"}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <ShieldCheck className="h-4 w-4 text-amber-300" />
                    {isEs ? "Montaje seguro" : "Secure mounting"}
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
                <div className="rounded-2xl bg-neutral-900 p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-amber-400 p-3 text-neutral-950">
                      <Umbrella className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400">
                        {isEs ? "Precio inicial" : "Starting price"}
                      </p>
                      <p className="text-3xl font-bold">
                        {isEs ? "Desde 79 €" : "From €79"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {benefits.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                        <span className="text-neutral-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={whatsappUrl}
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-semibold text-neutral-950 transition hover:bg-neutral-200"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-neutral-300">
                  <Hammer className="h-4 w-4 text-amber-300" />
                  {isEs ? "Cómo trabajamos" : "How we work"}
                </div>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {isEs
                    ? "Compraste el toldo en Leroy Merlin, nosotros lo instalamos"
                    : "You bought the awning at Leroy Merlin, we install it"}
                </h2>

                <p className="mt-5 text-neutral-300">
                  {isEs
                    ? "Muchos clientes compran el toldo online o en tienda y después necesitan un instalador. Antes de ir, revisamos fotos, modelo, medidas y superficie para evitar problemas de montaje."
                    : "Many customers buy the awning online or in store and then need an installer. Before coming, we check photos, model, measurements and surface to avoid installation issues."}
                </p>
              </div>

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-3xl border border-white/10 bg-neutral-950 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400 font-bold text-neutral-950">
                      {index + 1}
                    </div>
                    <p className="pt-2 text-neutral-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-neutral-300">
                <Ruler className="h-4 w-4 text-amber-300" />
                {isEs ? "Antes de instalar" : "Before installation"}
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {isEs
                  ? "Qué revisamos en un toldo de Leroy Merlin"
                  : "What we check in a Leroy Merlin awning"}
              </h2>

              <p className="mt-5 text-neutral-300">
                {isEs
                  ? "No todos los toldos sirven para todas las paredes. Por eso revisamos el modelo, los soportes, las medidas y el lugar exacto donde quieres instalarlo."
                  : "Not every awning works for every wall. That is why we check the model, brackets, measurements and exact installation area."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {checks.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <BadgeCheck className="h-5 w-5 shrink-0 text-amber-300" />
                  <span className="text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold">
                  {isEs
                    ? "Instalación en patio, terraza, balcón o fachada"
                    : "Installation on patio, terrace, balcony or façade"}
                </h2>
                <p className="mt-4 text-neutral-300">
                  {isEs
                    ? "Podemos montar toldos Leroy Merlin en diferentes zonas exteriores, siempre que haya una superficie segura para fijar los soportes."
                    : "We can mount Leroy Merlin awnings in different outdoor areas, as long as there is a safe surface for fixing the brackets."}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
                {[
                  {
                    icon: Home,
                    title: isEs ? "Patios privados" : "Private patios",
                    text: isEs
                      ? "Toldos para patios interiores, bajos y zonas de sombra en viviendas."
                      : "Awnings for private patios, ground-floor homes and shaded outdoor areas.",
                  },
                  {
                    icon: Sun,
                    title: isEs ? "Terrazas" : "Terraces",
                    text: isEs
                      ? "Montaje para terrazas donde se necesita protección solar y más comodidad."
                      : "Mounting for terraces where sun protection and comfort are needed.",
                  },
                  {
                    icon: Umbrella,
                    title: isEs ? "Balcones" : "Balconies",
                    text: isEs
                      ? "Instalación de toldos pequeños o medianos para balcones de vivienda."
                      : "Installation of small or medium awnings for home balconies.",
                  },
                  {
                    icon: Wrench,
                    title: isEs ? "Fachadas" : "Façades",
                    text: isEs
                      ? "Revisión de anclajes, soporte y pared antes de perforar la fachada."
                      : "Bracket, support and wall check before drilling into the façade.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-neutral-950 p-6"
                    >
                      <div className="mb-4 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-neutral-400">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-neutral-300">
                <PackageCheck className="h-4 w-4 text-amber-300" />
                {isEs ? "Información necesaria" : "Required information"}
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {isEs
                  ? "Qué enviar por WhatsApp para calcular el precio"
                  : "What to send by WhatsApp to estimate the price"}
              </h2>

              <p className="mt-5 text-neutral-300">
                {isEs
                  ? "Para evitar visitas innecesarias y darte un precio más claro, lo mejor es enviar algunas fotos antes del montaje."
                  : "To avoid unnecessary visits and give you a clearer price, it is best to send a few photos before installation."}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="space-y-4">
                {[
                  isEs
                    ? "Foto del toldo o de la caja de Leroy Merlin"
                    : "Photo of the awning or Leroy Merlin box",
                  isEs
                    ? "Enlace del producto si lo tienes"
                    : "Product link if you have it",
                  isEs
                    ? "Fotos de la pared donde irá instalado"
                    : "Photos of the wall where it will be installed",
                  isEs
                    ? "Medidas aproximadas de ancho y salida"
                    : "Approximate width and projection measurements",
                  isEs
                    ? "Confirmar si es manual o eléctrico"
                    : "Confirm whether it is manual or electric",
                  isEs
                    ? "Indicar si hay que desmontar un toldo antiguo"
                    : "Tell us if an old awning must be removed",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <span className="text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-400 px-5 py-4 font-semibold text-neutral-950 transition hover:bg-amber-300"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Enviar fotos por WhatsApp" : "Send photos by WhatsApp"}
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold">
                  {isEs
                    ? "Servicio en Valencia y alrededores"
                    : "Service in Valencia and nearby areas"}
                </h2>
                <p className="mt-4 text-neutral-300">
                  {isEs
                    ? "Trabajamos en Valencia ciudad y zonas cercanas. Para confirmar disponibilidad, envíanos fotos del toldo y del lugar de instalación."
                    : "We work in Valencia city and nearby areas. To confirm availability, send us photos of the awning and installation area."}
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="flex flex-wrap gap-3">
                  {areas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-950 px-4 py-2 text-sm text-neutral-300"
                    >
                      <MapPin className="h-4 w-4 text-amber-300" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">
                {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
              </h2>
              <p className="mt-4 text-neutral-300">
                {isEs
                  ? "Dudas habituales sobre instalación de toldos comprados en Leroy Merlin."
                  : "Common questions about installing awnings bought at Leroy Merlin."}
              </p>
            </div>

            <div className="space-y-4">
              {faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="font-semibold">{item.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-neutral-900">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold">
                    {isEs
                      ? "¿Ya tienes el toldo de Leroy Merlin?"
                      : "Already have the Leroy Merlin awning?"}
                  </h2>
                  <p className="mt-4 max-w-2xl text-neutral-300">
                    {isEs
                      ? "Envíanos fotos del toldo, del modelo y de la pared donde quieres instalarlo. Te diremos si podemos montarlo y el precio aproximado."
                      : "Send us photos of the awning, model and wall where you want it installed. We will tell you if we can mount it and the approximate price."}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-neutral-950 transition hover:bg-amber-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  {isEs
                    ? "Pedir presupuesto por WhatsApp"
                    : "Request quote on WhatsApp"}
                </a>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-lg font-semibold">
                {isEs ? "Servicios relacionados" : "Related services"}
              </h3>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-neutral-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}