import type { Metadata } from "next";
import Link from "next/link";
import {

  ArrowRight,

  CheckCircle2,

  Drill,

  Euro,

  Hammer,

  Home,

  MapPin,

  MessageCircle,

  ShieldCheck,

  Sparkles,

  Store,

  Sun,

  Umbrella,

  Users,

  Wrench,

  Building2,

  ClipboardCheck,

  Zap,

} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "services/instalar-toldo-valencia";

const whatsappTextEs =
  "Hola, necesito instalar un toldo en Valencia. Quiero pedir presupuesto.";
const whatsappTextEn =
  "Hello, I need to install an awning in Valencia. I would like to request a quote.";

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
  "Cabanyal",
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Alboraya",
  "Xirivella",
];

const relatedPages = [
  {
    titleEs: "Instalación de toldos en Valencia",
    titleEn: "Awning installation in Valencia",
    href: "/services/instalacion-toldos-valencia",
  },
  {
    titleEs: "Montaje de toldos en Valencia",
    titleEn: "Awning mounting in Valencia",
    href: "/services/montaje-toldos-valencia",
  },
  {
    titleEs: "Instalador de toldos en Valencia",
    titleEn: "Awning installer in Valencia",
    href: "/services/instalador-toldos-valencia",
  },
  {
    titleEs: "Manitas para instalar toldos",
    titleEn: "Handyman for awning installation",
    href: "/services/manitas-instalacion-toldos-valencia",
  },
];

const faqsEs = [
  {
    question: "¿Cuánto cuesta instalar un toldo en Valencia?",
    answer:
      "Instalar un toldo en Valencia cuesta desde 145 €. El precio final depende del tamaño, peso, tipo de pared, altura, acceso y si hace falta trabajar con una segunda persona.",
  },
  {
    question: "¿Instaláis toldos comprados en Leroy Merlin?",
    answer:
      "Sí. Instalamos toldos comprados en Leroy Merlin, Naterial, Calima, Amazon y otras tiendas. Puede enviar el enlace o modelo por WhatsApp para revisar la instalación.",
  },
  {
    question: "¿Puedo pedir presupuesto por WhatsApp?",
    answer:
      "Sí. Envíenos fotos del lugar, medidas del toldo y modelo o enlace del producto. Con esa información podemos preparar un presupuesto rápido.",
  },
  {
    question: "¿Instaláis toldos manuales?",
    answer:
      "Sí. Instalamos toldos manuales con manivela, toldos de brazos extensibles, toldos para terraza, patio, balcón y fachada.",
  },
  {
    question: "¿Instaláis toldos eléctricos?",
    answer:
      "Sí. Instalamos toldos eléctricos. Si hace falta conexión eléctrica, canaleta o revisión de alimentación, se valora aparte antes de empezar.",
  },
];

const faqsEn = [
  {
    question: "How much does it cost to install an awning in Valencia?",
    answer:
      "Installing an awning in Valencia starts from €145. The final price depends on size, weight, wall type, height, access and whether a second person is needed.",
  },
  {
    question: "Do you install awnings bought from Leroy Merlin?",
    answer:
      "Yes. We install awnings bought from Leroy Merlin, Naterial, Calima, Amazon and other stores. You can send the product link or model by WhatsApp.",
  },
  {
    question: "Can I request a quote by WhatsApp?",
    answer:
      "Yes. Send photos of the place, awning measurements and product model or link. With that information we can prepare a fast quote.",
  },
  {
    question: "Do you install manual awnings?",
    answer:
      "Yes. We install manual crank awnings, extendable arm awnings, terrace awnings, patio awnings, balcony awnings and façade awnings.",
  },
  {
    question: "Do you install electric awnings?",
    answer:
      "Yes. We install electric awnings. If electrical connection, trunking or power review is needed, it is quoted separately before starting.",
  },
];

function getContent(locale: string) {
  const isEs = locale === "es";

  return {
    isEs,
    title: isEs
      ? "Instalar un Toldo en Valencia | Desde 145€ | THEVULGO"
      : "Install an Awning in Valencia | From €145 | THEVULGO",
    description: isEs
      ? "Instalar un toldo en Valencia desde 145€. Toldos manuales, eléctricos, Leroy Merlin, Naterial y Calima. Presupuesto rápido por WhatsApp."
      : "Install an awning in Valencia from €145. Manual and electric awnings, Leroy Merlin, Naterial and Calima models. Fast quote by WhatsApp.",
    h1: isEs ? "Instalar un Toldo en Valencia" : "Install an Awning in Valencia",
    heroText: isEs
      ? "Si ya tiene el toldo comprado y necesita instalarlo, podemos ayudarle con un montaje seguro, nivelado y preparado para el uso diario."
      : "If you already bought the awning and need it installed, we can help with a safe, level mounting ready for daily use.",
    whatsappText: isEs ? whatsappTextEs : whatsappTextEn,
    faqs: isEs ? faqsEs : faqsEn,
  };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale);

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/${slug}`,
      languages: {
        es: `${baseUrl}/es/${slug}`,
        en: `${baseUrl}/en/${slug}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `${baseUrl}/${locale}/${slug}`,
      siteName: "THEVULGO Valencia",
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function InstalarToldoValenciaPage({ params }: Props) {
  const { locale } = await params;
  const content = getContent(locale);

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    content.whatsappText
  )}`;

  const pageUrl = `${baseUrl}/${locale}/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "THEVULGO Valencia",
      url: baseUrl,
      telephone: `+${phone}`,
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valencia",
        addressRegion: "Valencia",
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
      name: content.isEs
        ? "Instalar un toldo en Valencia"
        : "Install an awning in Valencia",
      serviceType: content.isEs
        ? "Instalación de toldos"
        : "Awning installation",
      provider: {
        "@type": "LocalBusiness",
        name: "THEVULGO Valencia",
      },
      areaServed: {
        "@type": "City",
        name: "Valencia",
      },
      offers: {
        "@type": "Offer",
        price: "145",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
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
          name: content.isEs ? "Inicio" : "Home",
          item: `${baseUrl}/${locale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: content.isEs ? "Servicios" : "Services",
          item: `${baseUrl}/${locale}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: content.isEs
            ? "Instalar un toldo en Valencia"
            : "Install an awning in Valencia",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-neutral-950">
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-yellow-50/60 to-white">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center lg:py-28">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-5 py-3 text-sm font-black text-neutral-900 shadow-sm">
                <MapPin className="h-4 w-4 text-yellow-600" />
                {content.isEs
                  ? "Instalación de toldos en Valencia"
                  : "Awning installation in Valencia"}
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-neutral-950 md:text-7xl">
                {content.isEs ? (
                  <>
                    Instalar un Toldo{" "}
                    <span className="text-yellow-500">en Valencia</span>
                  </>
                ) : (
                  <>
                    Install an Awning{" "}
                    <span className="text-yellow-500">in Valencia</span>
                  </>
                )}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-700 md:text-xl">
                {content.heroText}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 text-base font-black text-neutral-950 shadow-lg shadow-yellow-400/30 transition hover:bg-yellow-300"
                >
                  {content.isEs
                    ? "Solicitar presupuesto"
                    : "Request a quote"}
                  <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href={`tel:+${phone}`}
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-8 py-4 text-base font-black text-neutral-950 shadow-sm transition hover:border-neutral-950"
                >
                  {content.isEs ? "Llamar ahora" : "Call now"}
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  content.isEs ? "Desde 145€" : "From €145",
                  content.isEs
                    ? "Toldos manuales y eléctricos"
                    : "Manual and electric awnings",
                  "Leroy Merlin · Naterial · Calima",
                  content.isEs
                    ? "Terraza, patio, balcón y fachada"
                    : "Terrace, patio, balcony and façade",
                  content.isEs
                    ? "Precio claro antes de empezar"
                    : "Clear price before starting",
                  content.isEs
                    ? "Presupuesto rápido por WhatsApp"
                    : "Fast quote by WhatsApp",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-bold text-neutral-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-400 bg-white p-6 shadow-2xl shadow-neutral-900/10">
              <div className="rounded-3xl bg-yellow-400 p-8 text-neutral-950 shadow-lg">
                <Umbrella className="h-12 w-12" />
                <p className="mt-8 text-sm font-black uppercase tracking-[0.2em]">
                  THEVULGO VALENCIA
                </p>
                <h2 className="mt-5 text-3xl font-black leading-tight md:text-4xl">
                  {content.isEs
                    ? "Compró el toldo. Nosotros lo instalamos."
                    : "You bought the awning. We install it."}
                </h2>
                <p className="mt-6 text-lg leading-8">
                  {content.isEs
                    ? "Revise fotos, modelo y medidas por WhatsApp. Confirmamos precio, día y hora para instalar su toldo en Valencia."
                    : "Send photos, model and measurements by WhatsApp. We confirm price, day and time to install your awning in Valencia."}
                </p>
              </div>
            </div>
          </div>
        </section>
                <section className="bg-neutral-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                  {content.isEs ? "Precio de instalación" : "Installation price"}
                </p>
                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                  {content.isEs
                    ? "Instalar un toldo desde 145€"
                    : "Install an awning from €145"}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                  {content.isEs
                    ? "El precio depende del tamaño del toldo, peso, tipo de pared, altura, acceso y si hace falta una segunda persona para sujetarlo durante la instalación."
                    : "The price depends on awning size, weight, wall type, height, access and whether a second person is needed to hold it during installation."}
                </p>
              </div>

              <div className="rounded-[2rem] border border-yellow-400/40 bg-white/5 p-6">
                <div className="rounded-3xl bg-yellow-400 p-7 text-neutral-950">
                  <p className="text-sm font-black uppercase tracking-[0.2em]">
                    {content.isEs ? "Desde" : "From"}
                  </p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-7xl font-black leading-none">145€</span>
                    <span className="mb-2 text-lg font-bold">
                      {content.isEs ? "instalación" : "installation"}
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-7">
                    {content.isEs
                      ? "Precio confirmado antes de empezar el trabajo."
                      : "Price confirmed before starting the work."}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: content.isEs ? "Toldo pequeño" : "Small awning",
                  price: content.isEs ? "desde 145€" : "from €145",
                  text: content.isEs
                    ? "Instalación sencilla con acceso cómodo y pared adecuada."
                    : "Simple installation with easy access and a suitable wall.",
                  icon: Umbrella,
                },
                {
                  title: content.isEs ? "Toldo mediano" : "Medium awning",
                  price: "160€ - 200€",
                  text: content.isEs
                    ? "Instalación con varios soportes, nivelación y prueba final."
                    : "Installation with several brackets, leveling and final test.",
                  icon: Sun,
                },
                {
                  title: content.isEs ? "Toldo grande" : "Large awning",
                  price: "200€ - 280€",
                  text: content.isEs
                    ? "Modelos anchos o pesados que pueden requerir dos personas."
                    : "Wide or heavy models that may require two people.",
                  icon: Users,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
                  >
                    <Icon className="h-9 w-9 text-yellow-400" />
                    <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                    <p className="mt-3 text-3xl font-black text-yellow-400">
                      {item.price}
                    </p>
                    <p className="mt-4 leading-7 text-neutral-300">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-black">
                    {content.isEs
                      ? "Envíe fotos y le damos precio"
                      : "Send photos and get a price"}
                  </h3>
                  <p className="mt-2 max-w-3xl text-neutral-300">
                    {content.isEs
                      ? "Fotos del lugar, medidas del toldo y modelo o enlace del producto son suficientes para preparar una estimación rápida."
                      : "Photos of the place, awning measurements and product model or link are enough to prepare a fast estimate."}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-black text-neutral-950 transition hover:bg-yellow-300"
                >
                  {content.isEs ? "Enviar por WhatsApp" : "Send by WhatsApp"}
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                {content.isEs ? "Tipos de toldos" : "Awning types"}
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "Instalamos toldos manuales, eléctricos y de terraza"
                  : "We install manual, electric and terrace awnings"}
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                {content.isEs
                  ? "Si ya compró el toldo, podemos revisar el modelo y preparar la instalación según la pared, altura y sistema de fijación."
                  : "If you already bought the awning, we can review the model and prepare the installation according to the wall, height and fixing system."}
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: content.isEs ? "Instalar toldo manual" : "Manual awning installation",
                  text: content.isEs
                    ? "Instalación de toldos con manivela, brazos extensibles y soportes de pared."
                    : "Installation of crank awnings, extendable arms and wall brackets.",
                  icon: Wrench,
                },
                {
                  title: content.isEs ? "Instalar toldo eléctrico" : "Electric awning installation",
                  text: content.isEs
                    ? "Instalación de toldos motorizados. La parte eléctrica se revisa y se presupuesta aparte si hace falta."
                    : "Installation of motorized awnings. Electrical work is reviewed and quoted separately if needed.",
                  icon: Zap,
                },
                {
                  title: content.isEs ? "Instalar toldo terraza" : "Terrace awning installation",
                  text: content.isEs
                    ? "Soluciones para terrazas privadas, patios, balcones y zonas exteriores de vivienda."
                    : "Solutions for private terraces, patios, balconies and outdoor home areas.",
                  icon: Home,
                },
                {
                  title: content.isEs ? "Instalar toldo Leroy Merlin" : "Leroy Merlin awning installation",
                  text: content.isEs
                    ? "Instalamos toldos comprados en Leroy Merlin, Naterial, Calima y modelos similares."
                    : "We install awnings bought from Leroy Merlin, Naterial, Calima and similar models.",
                  icon: Store,
                },
                {
                  title: content.isEs ? "Instalar toldo grande" : "Large awning installation",
                  text: content.isEs
                    ? "Para toldos anchos o pesados puede hacer falta trabajar entre dos personas."
                    : "Wide or heavy awnings may require two people for safe installation.",
                  icon: Users,
                },
                {
                  title: content.isEs ? "Instalar toldo en fachada" : "Façade awning installation",
                  text: content.isEs
                    ? "Revisamos la pared, marcamos soportes, perforamos y nivelamos antes de probar el toldo."
                    : "We check the wall, mark brackets, drill and level before testing the awning.",
                  icon: Building2,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100">
                      <Icon className="h-7 w-7 text-yellow-600" />
                    </div>
                    <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                    <p className="mt-4 leading-7 text-neutral-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
                <section className="bg-yellow-50/70 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
                {content.isEs ? "Antes de instalar" : "Before installation"}
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "Comprobamos pared, altura, soportes y acceso"
                  : "We check wall, height, brackets and access"}
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-700">
                {content.isEs
                  ? "Antes de instalar un toldo es importante revisar dónde irá fijado, qué tipo de pared hay, si existen obstáculos y si el modelo necesita una segunda persona para levantarlo con seguridad."
                  : "Before installing an awning, it is important to check where it will be fixed, what type of wall there is, whether there are obstacles and whether the model needs a second person for safe lifting."}
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  content.isEs
                    ? "Revisión visual de la pared"
                    : "Visual wall inspection",
                  content.isEs
                    ? "Medición del ancho y salida del toldo"
                    : "Measurement of awning width and projection",
                  content.isEs
                    ? "Comprobación de altura y acceso"
                    : "Height and access check",
                  content.isEs
                    ? "Marcado de puntos de fijación"
                    : "Fixing point marking",
                  content.isEs
                    ? "Nivelación antes de fijar definitivamente"
                    : "Leveling before final fixing",
                  content.isEs
                    ? "Prueba de apertura y cierre"
                    : "Opening and closing test",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-yellow-500" />
                    <span className="font-bold text-neutral-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-300 bg-white p-7 shadow-xl">
              <div className="rounded-3xl bg-neutral-950 p-8 text-white">
                <ClipboardCheck className="h-12 w-12 text-yellow-400" />
                <h3 className="mt-7 text-3xl font-black">
                  {content.isEs
                    ? "Qué enviar para recibir presupuesto"
                    : "What to send for a quote"}
                </h3>
                <p className="mt-5 leading-8 text-neutral-300">
                  {content.isEs
                    ? "Con unas fotos podemos preparar mejor la instalación y confirmar el precio antes de desplazarnos."
                    : "With a few photos we can better prepare the installation and confirm the price before visiting."}
                </p>
              </div>

              <div className="mt-6 grid gap-4">
                {[
                  {
                    label: content.isEs ? "Fotos del lugar" : "Place photos",
                    text: content.isEs
                      ? "Una foto frontal y una lateral de la pared o fachada."
                      : "One front and one side photo of the wall or façade.",
                  },
                  {
                    label: content.isEs ? "Medidas" : "Measurements",
                    text: content.isEs
                      ? "Ancho y salida del toldo. Por ejemplo: 3,95 m x 3 m."
                      : "Awning width and projection. For example: 3.95 m x 3 m.",
                  },
                  {
                    label: content.isEs ? "Modelo" : "Model",
                    text: content.isEs
                      ? "Nombre del toldo, manual o enlace de la tienda."
                      : "Awning name, manual or store link.",
                  },
                  {
                    label: content.isEs ? "Ubicación" : "Location",
                    text: content.isEs
                      ? "Barrio o zona de Valencia para organizar la cita."
                      : "Neighbourhood or area in Valencia to organize the visit.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-neutral-200 p-5"
                  >
                    <h4 className="font-black">{item.label}</h4>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                  {content.isEs ? "Proceso" : "Process"}
                </p>
                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                  {content.isEs
                    ? "Cómo instalamos su toldo paso a paso"
                    : "How we install your awning step by step"}
                </h2>
                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  {content.isEs
                    ? "La instalación se organiza para que el trabajo sea claro, seguro y limpio desde el primer mensaje hasta la prueba final."
                    : "The installation is organized so the work is clear, safe and clean from the first message to the final test."}
                </p>

                <div className="mt-8 rounded-3xl bg-neutral-950 p-7 text-white">
                  <ShieldCheck className="h-10 w-10 text-yellow-400" />
                  <h3 className="mt-5 text-2xl font-black">
                    {content.isEs ? "Instalación segura" : "Safe installation"}
                  </h3>
                  <p className="mt-4 leading-7 text-neutral-300">
                    {content.isEs
                      ? "Un toldo puede ejercer mucha fuerza sobre la pared, especialmente cuando está abierto. Por eso cuidamos la fijación, el nivel y la prueba final."
                      : "An awning can apply strong force to the wall, especially when open. That is why we take care of fixing, leveling and final testing."}
                  </p>
                </div>
              </div>

              <div className="grid gap-5">
                {[
                  {
                    step: "01",
                    title: content.isEs
                      ? "Fotos por WhatsApp"
                      : "Photos by WhatsApp",
                    text: content.isEs
                      ? "Nos envía fotos del lugar, medidas y modelo del toldo."
                      : "You send photos of the place, measurements and awning model.",
                  },
                  {
                    step: "02",
                    title: content.isEs
                      ? "Presupuesto confirmado"
                      : "Confirmed quote",
                    text: content.isEs
                      ? "Confirmamos el precio antes de empezar el trabajo."
                      : "We confirm the price before starting the work.",
                  },
                  {
                    step: "03",
                    title: content.isEs
                      ? "Preparación del lugar"
                      : "Place preparation",
                    text: content.isEs
                      ? "Revisamos acceso, altura, pared y posibles obstáculos."
                      : "We check access, height, wall and possible obstacles.",
                  },
                  {
                    step: "04",
                    title: content.isEs
                      ? "Marcado y perforación"
                      : "Marking and drilling",
                    text: content.isEs
                      ? "Marcamos los soportes y perforamos con herramienta adecuada."
                      : "We mark the brackets and drill with suitable tools.",
                  },
                  {
                    step: "05",
                    title: content.isEs
                      ? "Fijación y nivelación"
                      : "Fixing and leveling",
                    text: content.isEs
                      ? "Colocamos el toldo, lo nivelamos y comprobamos la posición."
                      : "We place the awning, level it and check the position.",
                  },
                  {
                    step: "06",
                    title: content.isEs ? "Prueba final" : "Final test",
                    text: content.isEs
                      ? "Probamos apertura, cierre y estabilidad general."
                      : "We test opening, closing and general stability.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="grid gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:grid-cols-[80px_1fr]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-2xl font-black">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-black">{item.title}</h3>
                      <p className="mt-2 leading-7 text-neutral-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                {content.isEs ? "Zonas" : "Areas"}
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "Instalamos toldos en Valencia y alrededores"
                  : "We install awnings in Valencia and nearby areas"}
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-300">
                {content.isEs
                  ? "Trabajamos en Valencia ciudad y zonas cercanas. Envíenos su ubicación por WhatsApp y confirmamos disponibilidad."
                  : "We work in Valencia city and nearby areas. Send your location by WhatsApp and we will confirm availability."}
              </p>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span className="font-bold">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-[2rem] bg-yellow-400 p-8 text-neutral-950 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h3 className="text-3xl font-black md:text-4xl">
                    {content.isEs
                      ? "¿Ya tiene el toldo comprado?"
                      : "Already bought the awning?"}
                  </h3>
                  <p className="mt-4 max-w-3xl text-lg leading-8">
                    {content.isEs
                      ? "Envíenos fotos, medidas y modelo. Le responderemos con precio y disponibilidad."
                      : "Send photos, measurements and model. We will reply with price and availability."}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-neutral-950 px-8 py-4 font-black text-white transition hover:bg-neutral-800"
                >
                  {content.isEs ? "Solicitar presupuesto" : "Request quote"}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
                <section className="bg-yellow-50/70 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
                {content.isEs ? "Servicios relacionados" : "Related services"}
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "Más servicios de toldos en Valencia"
                  : "More awning services in Valencia"}
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {relatedPages.map((item) => (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Umbrella className="h-8 w-8 text-yellow-500" />
                  <h3 className="mt-5 text-xl font-black">
                    {content.isEs ? item.titleEs : item.titleEn}
                  </h3>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-neutral-950">
                    {content.isEs ? "Ver servicio" : "View service"}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: content.isEs ? "Montaje de TV" : "TV mounting",
                  href: `/${locale}/services/montaje-tv-valencia`,
                  icon: Home,
                },
                {
                  title: content.isEs
                    ? "Montaje de muebles"
                    : "Furniture assembly",
                  href: `/${locale}/services/montaje-muebles-valencia`,
                  icon: Hammer,
                },
                {
                  title: content.isEs
                    ? "Instalar lámparas"
                    : "Light installation",
                  href: `/${locale}/services/instalacion-lampara-valencia`,
                  icon: Sparkles,
                },
                {
                  title: content.isEs
                    ? "Reparaciones hogar"
                    : "Home repairs",
                  href: `/${locale}/handyman-valencia`,
                  icon: Wrench,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Icon className="h-8 w-8 text-yellow-500" />
                    <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-neutral-950">
                      {content.isEs ? "Ver servicio" : "View service"}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                FAQ
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "Preguntas frecuentes sobre instalar un toldo"
                  : "Frequently asked questions about installing an awning"}
              </h2>
            </div>

            <div className="mt-12 grid gap-5">
              {content.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="text-xl font-black">{faq.question}</h3>
                  <p className="mt-4 leading-7 text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              ))}

              {[
                {
                  question: content.isEs
                    ? "¿Cuánto tarda instalar un toldo?"
                    : "How long does it take to install an awning?",
                  answer: content.isEs
                    ? "Depende del tamaño del toldo, altura, tipo de pared y acceso. Un toldo pequeño puede ser más rápido, mientras que un toldo grande puede requerir más tiempo y ayuda."
                    : "It depends on awning size, height, wall type and access. A small awning can be faster, while a large awning may take longer and require help.",
                },
                {
                  question: content.isEs
                    ? "¿Qué pasa si la pared no es adecuada?"
                    : "What if the wall is not suitable?",
                  answer: content.isEs
                    ? "Si la pared no permite una fijación segura, lo indicamos antes de continuar. En algunos casos puede hacer falta otro tipo de anclaje o una solución diferente."
                    : "If the wall does not allow safe fixing, we explain it before continuing. In some cases another type of anchor or a different solution may be needed.",
                },
                {
                  question: content.isEs
                    ? "¿El precio incluye tacos y tornillos?"
                    : "Does the price include plugs and screws?",
                  answer: content.isEs
                    ? "El precio básico es para la mano de obra. Si hacen falta tacos especiales, anclaje químico o tornillería adicional, se confirma antes de usarlo."
                    : "The basic price is for labour. If special plugs, chemical anchors or additional screws are needed, we confirm it before using them.",
                },
                {
                  question: content.isEs
                    ? "¿Se puede instalar un toldo grande entre una persona y el cliente?"
                    : "Can a large awning be installed by one installer with the client's help?",
                  answer: content.isEs
                    ? "En algunos casos sí, si el cliente puede ayudar a sujetar el toldo durante el montaje. Si no es posible, se organiza una segunda persona."
                    : "In some cases yes, if the client can help hold the awning during mounting. If not possible, a second person is arranged.",
                },
                {
                  question: content.isEs
                    ? "¿Instaláis toldos en balcones?"
                    : "Do you install awnings on balconies?",
                  answer: content.isEs
                    ? "Sí. Instalamos toldos en balcones siempre que haya acceso seguro y una pared adecuada para fijar los soportes."
                    : "Yes. We install awnings on balconies as long as there is safe access and a suitable wall for the brackets.",
                },
                {
                  question: content.isEs
                    ? "¿Instaláis toldos en patios?"
                    : "Do you install awnings in patios?",
                  answer: content.isEs
                    ? "Sí. Instalamos toldos en patios interiores y exteriores, revisando antes el espacio disponible y el tipo de pared."
                    : "Yes. We install awnings in indoor and outdoor patios, checking the available space and wall type first.",
                },
                {
                  question: content.isEs
                    ? "¿Instaláis toldos en terraza?"
                    : "Do you install terrace awnings?",
                  answer: content.isEs
                    ? "Sí. Instalamos toldos en terrazas de viviendas, siempre que el acceso sea seguro y el soporte pueda fijarse correctamente."
                    : "Yes. We install awnings on home terraces, as long as access is safe and brackets can be fixed correctly.",
                },
                {
                  question: content.isEs
                    ? "¿Puedo elegir el día de instalación?"
                    : "Can I choose the installation day?",
                  answer: content.isEs
                    ? "Sí. Intentamos adaptarnos a su disponibilidad. Puede indicar qué día y hora le viene mejor."
                    : "Yes. We try to adapt to your availability. You can tell us which day and time works best.",
                },
                {
                  question: content.isEs
                    ? "¿Hacéis instalación el mismo día?"
                    : "Do you offer same-day installation?",
                  answer: content.isEs
                    ? "A veces sí, dependiendo de la agenda, ubicación y dificultad del trabajo. Lo mejor es enviar fotos por WhatsApp."
                    : "Sometimes yes, depending on schedule, location and job difficulty. The best option is to send photos by WhatsApp.",
                },
                {
                  question: content.isEs
                    ? "¿Qué información necesito enviar?"
                    : "What information should I send?",
                  answer: content.isEs
                    ? "Fotos del lugar, medidas del toldo, modelo o enlace del producto y ubicación aproximada."
                    : "Photos of the place, awning measurements, product model or link and approximate location.",
                },
                {
                  question: content.isEs
                    ? "¿También podéis montar otros productos?"
                    : "Can you also install other products?",
                  answer: content.isEs
                    ? "Sí. También realizamos montaje de TV, muebles, estanterías, lámparas y pequeñas reparaciones del hogar."
                    : "Yes. We also do TV mounting, furniture assembly, shelves, lights and small home repairs.",
                },
                {
                  question: content.isEs
                    ? "¿Qué ocurre si hace viento el día de la instalación?"
                    : "What happens if it is windy on installation day?",
                  answer: content.isEs
                    ? "Si el viento puede afectar la seguridad del montaje, es mejor cambiar la cita. La seguridad es prioridad."
                    : "If wind can affect installation safety, it is better to reschedule. Safety comes first.",
                },
              ].map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="text-xl font-black">{faq.question}</h3>
                  <p className="mt-4 leading-7 text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-400">
              <Umbrella className="h-10 w-10 text-neutral-950" />
            </div>

            <h2 className="mt-8 text-4xl font-black tracking-tight md:text-6xl">
              {content.isEs
                ? "Instalar un toldo en Valencia desde 145€"
                : "Install an awning in Valencia from €145"}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              {content.isEs
                ? "Envíenos fotos del lugar, medidas y modelo del toldo. Le responderemos con un presupuesto claro y disponibilidad."
                : "Send photos of the place, measurements and awning model. We will reply with a clear quote and availability."}
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-black text-neutral-950 transition hover:bg-yellow-300"
              >
                {content.isEs ? "WhatsApp presupuesto" : "WhatsApp quote"}
                <MessageCircle className="h-5 w-5" />
              </a>

              <a
                href={`tel:+${phone}`}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-black text-white transition hover:border-yellow-400"
              >
                {content.isEs ? "Llamar ahora" : "Call now"}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}