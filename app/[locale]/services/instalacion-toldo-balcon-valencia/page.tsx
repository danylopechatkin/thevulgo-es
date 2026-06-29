import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Drill,
  Euro,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  Plug,
  Power,
  Ruler,
  ShieldCheck,
  Sparkles,
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
const slug = "services/instalacion-toldo-balcon-valencia";

const whatsappTextEs =
  "Hola, necesito instalar un toldo en un balcón en Valencia. Quiero pedir presupuesto.";
const whatsappTextEn =
  "Hello, I need to install an awning on a balcony in Valencia. I would like to request a quote.";

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
  "Monteolivete",
  "Quatre Carreres",
  "Jesús",
  "La Saïdia",
  "Benicalap",
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Aldaia",
  "Quart de Poblet",
];

const services = [
  "Instalación de toldos para balcón",
  "Montaje de toldos manuales",
  "Instalación de toldos eléctricos",
  "Colocación de toldos de brazo extensible",
  "Instalación de toldos tipo estor",
  "Montaje de toldos cofre y semicofre",
  "Sustitución de toldo antiguo",
  "Retirada de toldo existente",
  "Revisión de puntos de anclaje",
  "Fijación en hormigón, ladrillo o fachada",
  "Nivelación del toldo",
  "Ajuste de caída y apertura",
  "Instalación con tacos y tornillería adecuada",
  "Instalación con anclaje químico si es necesario",
  "Montaje de toldos comprados por el cliente",
  "Revisión de seguridad antes de perforar",
];

const mainBenefits = [
  {
    icon: ShieldCheck,
    titleEs: "Instalación segura",
    titleEn: "Safe installation",
    textEs:
      "Fijamos el toldo con anclajes adecuados al tipo de pared, peso del toldo y uso diario.",
    textEn:
      "We fix the awning with anchors adapted to the wall type, awning weight and daily use.",
  },
  {
    icon: Ruler,
    titleEs: "Medición y nivelación",
    titleEn: "Measuring and leveling",
    textEs:
      "Marcamos la posición, revisamos altura, caída, apertura y espacio antes de perforar.",
    textEn:
      "We mark the position and check height, slope, opening and clearance before drilling.",
  },
  {
    icon: Clock3,
    titleEs: "Cita flexible",
    titleEn: "Flexible booking",
    textEs:
      "Organizamos la instalación por WhatsApp con horario flexible en Valencia y alrededores.",
    textEn:
      "We arrange the installation by WhatsApp with flexible times in Valencia and nearby areas.",
  },
  {
    icon: Euro,
    titleEs: "Precio claro",
    titleEn: "Clear price",
    textEs:
      "Te damos precio antes del trabajo según fotos, tipo de toldo, pared y dificultad.",
    textEn:
      "We give you a price before the job based on photos, awning type, wall and difficulty.",
  },
];

const awningTypes = [
  {
    titleEs: "Toldo manual para balcón",
    titleEn: "Manual balcony awning",
    textEs:
      "Instalamos toldos manuales con manivela para balcones de apartamentos, viviendas y terrazas pequeñas. Es una opción práctica, económica y fácil de usar para proteger la vivienda del sol directo.",
    textEn:
      "We install manual crank awnings for apartment balconies, homes and small terraces. It is a practical, affordable and easy-to-use option for protecting the home from direct sun.",
  },
  {
    titleEs: "Toldo eléctrico para balcón",
    titleEn: "Electric balcony awning",
    textEs:
      "Montamos toldos eléctricos con motor, mando o interruptor. Revisamos la fijación, el punto de corriente, el recorrido del cable y la posición del motor para que el sistema funcione correctamente.",
    textEn:
      "We install electric awnings with motor, remote control or switch. We check the fixing, power point, cable route and motor position so the system works correctly.",
  },
  {
    titleEs: "Toldo de brazo extensible",
    titleEn: "Folding arm awning",
    textEs:
      "Los toldos de brazo extensible son muy habituales en balcones y terrazas. Necesitan una base sólida, buena nivelación y fijación correcta para abrir y cerrar sin forzar el mecanismo.",
    textEn:
      "Folding arm awnings are very common on balconies and terraces. They need a solid base, proper leveling and correct fixing so they open and close without forcing the mechanism.",
  },
  {
    titleEs: "Toldo cofre o semicofre",
    titleEn: "Cassette or semi-cassette awning",
    textEs:
      "Instalamos toldos cofre y semicofre que protegen la lona y el mecanismo. Suelen pesar más, por eso revisamos bien el soporte y recomendamos anclajes adecuados.",
    textEn:
      "We install cassette and semi-cassette awnings that protect the fabric and mechanism. They are usually heavier, so we carefully check the support and recommend suitable anchors.",
  },
  {
    titleEs: "Toldo tipo estor",
    titleEn: "Vertical screen awning",
    textEs:
      "El toldo tipo estor es útil para balcones donde se necesita protección frontal, más privacidad o reducir el sol directo desde delante. Revisamos la fijación superior y los puntos laterales.",
    textEn:
      "A vertical screen awning is useful for balconies where frontal protection, more privacy or reduced direct sun is needed. We check the top fixing and side points.",
  },
  {
    titleEs: "Sustitución de toldo antiguo",
    titleEn: "Old awning replacement",
    textEs:
      "Podemos retirar el toldo antiguo y colocar el nuevo. Revisamos si los agujeros anteriores sirven o si es mejor hacer nuevos puntos de fijación para mayor seguridad.",
    textEn:
      "We can remove the old awning and install the new one. We check whether the previous holes can be reused or if new fixing points are safer.",
  },
];

const process = [
  {
    step: "01",
    titleEs: "Envíanos fotos",
    titleEn: "Send us photos",
    textEs:
      "Mándanos fotos del balcón, pared o techo donde irá el toldo, y fotos o enlace del modelo que has comprado o quieres instalar.",
    textEn:
      "Send us photos of the balcony, wall or ceiling where the awning will be installed, and photos or a link to the model you bought or want to install.",
  },
  {
    step: "02",
    titleEs: "Revisamos la instalación",
    titleEn: "We check the installation",
    textEs:
      "Miramos medidas, peso, tipo de pared, acceso, altura, fachada, espacio de apertura y si hace falta material extra.",
    textEn:
      "We check measurements, weight, wall type, access, height, facade, opening space and whether extra materials are needed.",
  },
  {
    step: "03",
    titleEs: "Confirmamos precio",
    titleEn: "We confirm the price",
    textEs:
      "Te damos un precio claro antes de ir. Si puede hacer falta anclaje químico, tornillería especial o electricidad, lo explicamos antes.",
    textEn:
      "We give you a clear price before coming. If chemical anchors, special screws or electrical work may be needed, we explain it first.",
  },
  {
    step: "04",
    titleEs: "Instalamos el toldo",
    titleEn: "We install the awning",
    textEs:
      "Marcamos, perforamos, fijamos, nivelamos y probamos el toldo para comprobar que abre, cierra y queda bien colocado.",
    textEn:
      "We mark, drill, fix, level and test the awning to make sure it opens, closes and sits correctly.",
  },
];

const priceCards = [
  {
    titleEs: "Toldo manual pequeño",
    titleEn: "Small manual awning",
    price: "desde 79 €",
    textEs:
      "Para balcones pequeños con acceso sencillo y pared resistente. Precio orientativo según fotos.",
    textEn:
      "For small balconies with easy access and solid wall. Indicative price based on photos.",
  },
  {
    titleEs: "Toldo grande o pesado",
    titleEn: "Large or heavy awning",
    price: "desde 99 €",
    textEs:
      "Para toldos de brazo extensible, cofre, semicofre o instalaciones con más peso y dificultad.",
    textEn:
      "For folding arm, cassette, semi-cassette or heavier and more difficult installations.",
  },
  {
    titleEs: "Toldo eléctrico",
    titleEn: "Electric awning",
    price: "a consultar",
    textEs:
      "Depende del motor, conexión eléctrica, cableado, mando, interruptor y punto de corriente.",
    textEn:
      "Depends on the motor, electrical connection, wiring, remote, switch and power point.",
  },
];

const faqs = [
  {
    questionEs: "¿Cuánto cuesta instalar un toldo para balcón en Valencia?",
    questionEn: "How much does balcony awning installation cost in Valencia?",
    answerEs:
      "El precio depende del tamaño del toldo, peso, tipo de pared, altura, acceso y si es manual o eléctrico. Para una instalación sencilla, el precio puede empezar desde 79 €.",
    answerEn:
      "The price depends on awning size, weight, wall type, height, access and whether it is manual or electric. For a simple installation, the price can start from €79.",
  },
  {
    questionEs: "¿Instaláis toldos comprados en Leroy Merlin, Amazon o Bauhaus?",
    questionEn: "Do you install awnings bought from Leroy Merlin, Amazon or Bauhaus?",
    answerEs:
      "Sí. Podemos instalar toldos comprados por el cliente. Antes necesitamos fotos del balcón y del toldo, o un enlace del producto, para revisar peso, medidas y tipo de fijación.",
    answerEn:
      "Yes. We can install awnings purchased by the client. First we need photos of the balcony and awning, or a product link, to check weight, measurements and fixing type.",
  },
  {
    questionEs: "¿Instaláis toldos manuales y eléctricos?",
    questionEn: "Do you install manual and electric awnings?",
    answerEs:
      "Sí. Instalamos toldos manuales con manivela y toldos eléctricos con motor. En toldos eléctricos revisamos también el punto de corriente y el recorrido del cable.",
    answerEn:
      "Yes. We install manual crank awnings and electric motorized awnings. For electric awnings we also check the power point and cable route.",
  },
  {
    questionEs: "¿Se puede instalar un toldo en ladrillo?",
    questionEn: "Can an awning be installed on brick?",
    answerEs:
      "Sí, pero depende del estado del ladrillo, profundidad, peso del toldo y tipo de soporte. En algunos casos recomendamos anclaje químico para mejorar la seguridad.",
    answerEn:
      "Yes, but it depends on the brick condition, depth, awning weight and bracket type. In some cases we recommend chemical anchors for better safety.",
  },
  {
    questionEs: "¿Se puede instalar un toldo en hormigón?",
    questionEn: "Can an awning be installed on concrete?",
    answerEs:
      "Sí. El hormigón normalmente permite una fijación fuerte si se usan brocas, tacos y tornillos adecuados para el peso del toldo.",
    answerEn:
      "Yes. Concrete normally allows a strong fixing if suitable drill bits, plugs and screws are used for the awning weight.",
  },
  {
    questionEs: "¿Retiráis el toldo antiguo?",
    questionEn: "Do you remove the old awning?",
    answerEs:
      "Sí. Podemos desmontar y retirar el toldo antiguo antes de instalar el nuevo. El precio depende del tamaño, peso y dificultad del desmontaje.",
    answerEn:
      "Yes. We can dismantle and remove the old awning before installing the new one. The price depends on size, weight and dismantling difficulty.",
  },
  {
    questionEs: "¿Cuánto tarda la instalación?",
    questionEn: "How long does the installation take?",
    answerEs:
      "Una instalación sencilla puede tardar entre 1 y 3 horas. Los toldos grandes, eléctricos o con acceso complicado pueden necesitar más tiempo.",
    answerEn:
      "A simple installation can take between 1 and 3 hours. Large, electric or difficult-access awnings may take longer.",
  },
  {
    questionEs: "¿Trabajáis en toda Valencia?",
    questionEn: "Do you work across Valencia?",
    answerEs:
      "Sí. Trabajamos en Valencia ciudad y zonas cercanas como Mislata, Burjassot, Paterna, Torrent, Aldaia y Quart de Poblet.",
    answerEn:
      "Yes. We work in Valencia city and nearby areas such as Mislata, Burjassot, Paterna, Torrent, Aldaia and Quart de Poblet.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Instalación de Toldos para Balcón en Valencia | THEVULGO"
    : "Balcony Awning Installation in Valencia | THEVULGO";

  const description = isEs
    ? "Instalación profesional de toldos para balcón en Valencia. Montaje seguro de toldos manuales, eléctricos, cofre y brazo extensible."
    : "Professional balcony awning installation in Valencia. Safe mounting for manual, electric, cassette and folding arm awnings.";

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/${slug}`,
      languages: {
        es: `${baseUrl}/es/${slug}`,
        en: `${baseUrl}/en/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/${slug}`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function InstalacionToldoBalconValenciaPage({
  params,
}: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = isEs ? whatsappTextEs : whatsappTextEn;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    whatsappText
  )}`;

  const pageUrl = `${baseUrl}/${locale}/${slug}`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: isEs ? faq.questionEs : faq.questionEn,
      acceptedAnswer: {
        "@type": "Answer",
        text: isEs ? faq.answerEs : faq.answerEn,
      },
    })),
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "THEVULGO",
    url: pageUrl,
    telephone: `+${phone}`,
    priceRange: "€€",
    image: `${baseUrl}/og-image.jpg`,
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
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Instalación de toldos para balcón en Valencia"
      : "Balcony awning installation in Valencia",
    description: isEs
      ? "Servicio de instalación de toldos para balcón en Valencia: toldos manuales, eléctricos, cofre, brazo extensible y estor."
      : "Balcony awning installation service in Valencia: manual, electric, cassette, folding arm and vertical screen awnings.",
    provider: {
      "@type": "LocalBusiness",
      name: "THEVULGO",
      telephone: `+${phone}`,
    },
    areaServed: areas,
    serviceType: isEs
      ? "Instalación de toldos para balcón"
      : "Balcony awning installation",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "79",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  const breadcrumbJsonLd = {
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
          ? "Instalación de toldos para balcón"
          : "Balcony awning installation",
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_32%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200">
              <Sun className="h-4 w-4" />
              {isEs
                ? "Instalación de toldos para balcones en Valencia"
                : "Balcony awning installation in Valencia"}
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              {isEs
                ? "Instalación de toldos para balcón en Valencia"
                : "Balcony awning installation in Valencia"}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              {isEs
                ? "Montamos toldos para balcones, terrazas pequeñas y apartamentos en Valencia. Instalación segura, nivelada y adaptada al tipo de pared: hormigón, ladrillo, fachada o techo."
                : "We install awnings for balconies, small terraces and apartments in Valencia. Safe, level and solid mounting adapted to the wall type: concrete, brick, facade or ceiling."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-300 px-6 py-4 text-base font-bold text-neutral-950 transition hover:bg-amber-200"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs
                  ? "Pedir presupuesto por WhatsApp"
                  : "Request quote on WhatsApp"}
              </Link>

              <Link
                href={`/${locale}/estimate?category=handyman`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                {isEs ? "Abrir formulario" : "Open estimate form"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-black text-white">79 €</p>
                <p className="mt-1 text-sm text-neutral-400">
                  {isEs ? "desde instalación simple" : "from simple install"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-black text-white">1–3 h</p>
                <p className="mt-1 text-sm text-neutral-400">
                  {isEs ? "tiempo habitual" : "usual time"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-black text-white">Valencia</p>
                <p className="mt-1 text-sm text-neutral-400">
                  {isEs ? "ciudad y alrededores" : "city and nearby areas"}
                </p>
              </div>
            </div>
          </div>
                    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40">
            <div className="rounded-[1.5rem] bg-neutral-900 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                    THEVULGO
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {isEs ? "Montaje seguro y limpio" : "Safe and clean mounting"}
                  </h2>
                </div>

                <div className="rounded-2xl bg-amber-300 p-4 text-neutral-950">
                  <Umbrella className="h-8 w-8" />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {services.slice(0, 8).map((service) => (
                  <div
                    key={service}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <p className="text-sm leading-6 text-neutral-300">{service}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
                <p className="text-sm leading-6 text-amber-100">
                  {isEs
                    ? "Para darte precio rápido, envíanos foto del balcón, foto de la pared o techo, medidas aproximadas y enlace o foto del toldo."
                    : "To give you a fast price, send us a photo of the balcony, the wall or ceiling, approximate measurements and a link or photo of the awning."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-neutral-950 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mainBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.titleEs}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-amber-300/10 p-3 text-amber-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-black text-white">
                    {isEs ? benefit.titleEs : benefit.titleEn}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-400">
                    {isEs ? benefit.textEs : benefit.textEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-neutral-900 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-neutral-300">
              <Hammer className="h-4 w-4 text-amber-300" />
              {isEs ? "Servicio especializado" : "Specialized service"}
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              {isEs
                ? "Instalación profesional de toldos para balcón"
                : "Professional balcony awning installation"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              {isEs
                ? "Instalar un toldo en un balcón no es solo hacer agujeros y colgar una estructura. El toldo recibe viento, peso, tensión del brazo, movimiento diario y carga sobre la pared. Por eso es importante revisar bien el soporte, elegir la fijación correcta y dejar el toldo perfectamente nivelado."
                : "Installing an awning on a balcony is not just drilling holes and hanging a structure. The awning receives wind, weight, arm tension, daily movement and load on the wall. That is why it is important to check the support, choose the right fixing and leave the awning perfectly level."}
            </p>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              {isEs
                ? "En THEVULGO hacemos instalaciones de toldos para balcones en Valencia para viviendas, pisos de alquiler, apartamentos turísticos, oficinas pequeñas y locales con fachada. Trabajamos con toldos manuales, toldos eléctricos, toldos de brazo extensible, toldos cofre, semicofre y modelos tipo estor."
                : "At THEVULGO we install balcony awnings in Valencia for homes, rental apartments, tourist apartments, small offices and storefronts. We work with manual awnings, electric awnings, folding arm awnings, cassette awnings, semi-cassette awnings and vertical screen models."}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6">
              <div className="mb-5 inline-flex rounded-2xl bg-amber-300/10 p-3 text-amber-300">
                <Drill className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-white">
                {isEs ? "Perforación correcta" : "Correct drilling"}
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                {isEs
                  ? "Usamos brocas y fijaciones adecuadas según el material: hormigón, ladrillo, bloque, pared de fachada o techo."
                  : "We use suitable drill bits and fixings depending on the material: concrete, brick, block, facade wall or ceiling."}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6">
              <div className="mb-5 inline-flex rounded-2xl bg-amber-300/10 p-3 text-amber-300">
                <Ruler className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-white">
                {isEs ? "Altura y caída" : "Height and slope"}
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                {isEs
                  ? "Comprobamos que el toldo pueda abrir bien, que no choque con barandilla, persiana, techo, ventana o aire acondicionado."
                  : "We check that the awning can open properly and does not hit the railing, shutter, ceiling, window or air conditioner."}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6">
              <div className="mb-5 inline-flex rounded-2xl bg-amber-300/10 p-3 text-amber-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-white">
                {isEs ? "Fijación resistente" : "Strong fixing"}
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                {isEs
                  ? "Si la pared no es suficientemente sólida o el toldo pesa mucho, podemos valorar anclaje químico o fijación reforzada."
                  : "If the wall is not solid enough or the awning is heavy, we can assess chemical anchors or reinforced fixing."}
              </p>
            </div>
          </div>
        </div>
      </section>
            <section className="border-b border-white/10 bg-neutral-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200">
                <Umbrella className="h-4 w-4" />
                {isEs ? "Tipos de toldos" : "Awning types"}
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                {isEs
                  ? "Instalamos diferentes tipos de toldos para balcón"
                  : "We install different types of balcony awnings"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Cada balcón es diferente. No es lo mismo instalar un toldo pequeño manual en una pared de hormigón que un toldo cofre pesado en fachada de ladrillo o un toldo eléctrico con conexión de corriente. Por eso revisamos el modelo antes de confirmar el precio."
                  : "Every balcony is different. Installing a small manual awning on a concrete wall is not the same as installing a heavy cassette awning on a brick facade or an electric awning with power connection. That is why we check the model before confirming the price."}
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-black text-white">
                  {isEs ? "Antes de venir necesitamos saber:" : "Before coming we need to know:"}
                </h3>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-300">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    {isEs ? "Medida aproximada del toldo." : "Approximate awning size."}
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    {isEs ? "Foto de la pared, techo o fachada." : "Photo of the wall, ceiling or facade."}
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    {isEs ? "Si el toldo es manual o eléctrico." : "Whether the awning is manual or electric."}
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    {isEs ? "Si hay toldo antiguo para retirar." : "Whether there is an old awning to remove."}
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    {isEs ? "Altura y acceso al balcón." : "Height and balcony access."}
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {awningTypes.map((type) => (
                <div
                  key={type.titleEs}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-amber-300/10 p-3 text-amber-300">
                    <Sun className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-black text-white">
                    {isEs ? type.titleEs : type.titleEn}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-400">
                    {isEs ? type.textEs : type.textEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-neutral-900 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-neutral-300">
              <Wrench className="h-4 w-4 text-amber-300" />
              {isEs ? "Cómo trabajamos" : "How we work"}
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              {isEs
                ? "Proceso de instalación del toldo en balcón"
                : "Balcony awning installation process"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              {isEs
                ? "Nuestro objetivo es que el toldo quede recto, firme y cómodo de usar. Para conseguirlo, no empezamos a perforar sin revisar primero medidas, puntos de fijación, recorrido de apertura y seguridad del soporte."
                : "Our goal is to leave the awning straight, firm and comfortable to use. To achieve this, we do not start drilling without first checking measurements, fixing points, opening path and support safety."}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-lg font-black text-neutral-950">
                  {item.step}
                </div>

                <h3 className="text-xl font-black text-white">
                  {isEs ? item.titleEs : item.titleEn}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  {isEs ? item.textEs : item.textEn}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8">
              <div className="mb-5 inline-flex rounded-2xl bg-amber-300/10 p-3 text-amber-300">
                <Drill className="h-6 w-6" />
              </div>

              <h3 className="text-2xl font-black text-white">
                {isEs ? "Marcado antes de perforar" : "Marking before drilling"}
              </h3>

              <p className="mt-4 text-base leading-8 text-neutral-300">
                {isEs
                  ? "Antes de hacer agujeros, presentamos los soportes, revisamos el nivel, comprobamos la distancia entre puntos y verificamos que el toldo pueda abrir sin chocar con la barandilla, persiana, techo, ventana, aire acondicionado o cualquier elemento del balcón."
                  : "Before drilling, we position the brackets, check the level, verify the distance between points and make sure the awning can open without hitting the railing, shutter, ceiling, window, air conditioner or any balcony element."}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8">
              <div className="mb-5 inline-flex rounded-2xl bg-amber-300/10 p-3 text-amber-300">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <h3 className="text-2xl font-black text-white">
                {isEs ? "Fijación según el material" : "Fixing according to material"}
              </h3>

              <p className="mt-4 text-base leading-8 text-neutral-300">
                {isEs
                  ? "No todos los balcones tienen la misma base. En hormigón se puede conseguir una fijación muy fuerte con tacos adecuados. En ladrillo, bloque o fachada antigua hay que revisar el estado de la pared y valorar si conviene usar anclaje químico o una fijación reforzada."
                  : "Not all balconies have the same base. In concrete, a very strong fixing can be achieved with suitable plugs. In brick, block or old facade, the wall condition must be checked and chemical anchors or reinforced fixing may be needed."}
              </p>
            </div>
          </div>
        </div>
      </section>
            <section className="border-b border-white/10 bg-neutral-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200">
                <Euro className="h-4 w-4" />
                {isEs ? "Precios orientativos" : "Indicative prices"}
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                {isEs
                  ? "Precio de instalación de toldo para balcón"
                  : "Balcony awning installation price"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "El precio final depende del tamaño del toldo, peso, altura, tipo de pared, acceso, si hay que retirar un toldo antiguo y si el modelo es manual o eléctrico."
                  : "The final price depends on the awning size, weight, height, wall type, access, whether an old awning needs removal and whether the model is manual or electric."}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {priceCards.map((card) => (
                <div
                  key={card.titleEs}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="text-lg font-black text-white">
                    {isEs ? card.titleEs : card.titleEn}
                  </h3>

                  <p className="mt-4 text-3xl font-black text-amber-300">
                    {card.price}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-neutral-400">
                    {isEs ? card.textEs : card.textEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-amber-300/20 bg-amber-300/10 p-8">
            <h3 className="text-2xl font-black text-white">
              {isEs
                ? "Para presupuesto exacto, envía fotos por WhatsApp"
                : "For an exact quote, send photos by WhatsApp"}
            </h3>

            <p className="mt-4 max-w-4xl text-base leading-8 text-amber-100">
              {isEs
                ? "Con 3 fotos normalmente podemos darte una estimación rápida: foto general del balcón, foto de la pared o techo donde irá el toldo y foto o enlace del modelo. Si el trabajo necesita material extra, te lo diremos antes."
                : "With 3 photos we can usually give a quick estimate: a general photo of the balcony, a photo of the wall or ceiling where the awning will go and a photo or link to the model. If the job needs extra material, we will tell you first."}
            </p>

            <div className="mt-6">
              <Link
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-300 px-6 py-4 text-base font-bold text-neutral-950 transition hover:bg-amber-200"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Enviar fotos por WhatsApp" : "Send photos by WhatsApp"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-neutral-900 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-neutral-300">
              <BadgeCheck className="h-4 w-4 text-amber-300" />
              {isEs ? "Qué incluye" : "What is included"}
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              {isEs
                ? "Qué incluye nuestro servicio de instalación"
                : "What our installation service includes"}
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(8).map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-6"
              >
                <CheckCircle2 className="h-6 w-6 text-amber-300" />
                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
            <section className="border-b border-white/10 bg-neutral-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200">
                <Zap className="h-4 w-4" />
                {isEs ? "Toldos eléctricos" : "Electric awnings"}
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                {isEs
                  ? "Instalación de toldos eléctricos para balcón"
                  : "Electric balcony awning installation"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Si tu toldo tiene motor, revisamos la fijación mecánica y también la parte eléctrica: punto de corriente, recorrido del cable, interruptor, mando y posición del motor. En algunos casos se puede conectar a una toma existente; en otros puede hacer falta preparar un punto eléctrico cercano."
                  : "If your awning has a motor, we check the mechanical fixing and also the electrical part: power point, cable route, switch, remote and motor position. In some cases it can be connected to an existing outlet; in others a nearby power point may be needed."}
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <Plug className="h-6 w-6 text-amber-300" />
                  <h3 className="mt-4 text-xl font-black text-white">
                    {isEs ? "Conexión de corriente" : "Power connection"}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-400">
                    {isEs
                      ? "Revisamos si hay enchufe, caja, salida de cable o punto eléctrico cerca del balcón."
                      : "We check if there is an outlet, junction box, cable outlet or power point near the balcony."}
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <Power className="h-6 w-6 text-amber-300" />
                  <h3 className="mt-4 text-xl font-black text-white">
                    {isEs ? "Motor y mando" : "Motor and remote"}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-400">
                    {isEs
                      ? "Probamos apertura, cierre, sentido del motor y funcionamiento básico del mando o interruptor."
                      : "We test opening, closing, motor direction and basic operation of the remote or switch."}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <div className="rounded-[1.5rem] bg-neutral-900 p-6">
                <Bolt className="h-10 w-10 text-amber-300" />

                <h3 className="mt-5 text-2xl font-black text-white">
                  {isEs
                    ? "Importante antes de comprar"
                    : "Important before buying"}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  {isEs
                    ? "Antes de comprar un toldo eléctrico, revisa si tienes corriente cerca del balcón y si el cable puede quedar bien colocado. Si no estás seguro, envíanos fotos y te diremos qué opción es más cómoda."
                    : "Before buying an electric awning, check whether you have power near the balcony and whether the cable can be placed neatly. If you are not sure, send us photos and we will tell you which option is more practical."}
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    isEs ? "Foto del punto eléctrico" : "Photo of the power point",
                    isEs ? "Foto del motor o manual" : "Photo of the motor or manual",
                    isEs ? "Medida del toldo" : "Awning measurement",
                    isEs ? "Altura del balcón" : "Balcony height",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                      <p className="text-sm leading-6 text-neutral-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="border-b border-white/10 bg-neutral-900 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-neutral-300">
                <Home className="h-4 w-4 text-amber-300" />
                {isEs ? "Balcones y apartamentos" : "Balconies and apartments"}
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                {isEs
                  ? "Instalación de toldos en pisos, balcones y terrazas pequeñas"
                  : "Awning installation in apartments, balconies and small terraces"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "En Valencia muchos balcones tienen poco espacio, paredes antiguas, barandillas altas, persianas, aire acondicionado o elementos de fachada que pueden complicar la instalación. Por eso revisamos bien la posición antes de taladrar."
                  : "In Valencia many balconies have limited space, old walls, high railings, shutters, air conditioning units or facade elements that can make installation more complex. That is why we carefully check the position before drilling."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "También podemos ayudarte si el toldo es para un piso de alquiler, vivienda turística o apartamento que necesitas preparar para verano. El objetivo es dejar una instalación funcional, segura y presentable."
                  : "We can also help if the awning is for a rental flat, tourist apartment or apartment you need to prepare for summer. The goal is to leave a functional, safe and presentable installation."}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6">
                <MapPin className="h-6 w-6 text-amber-300" />
                <h3 className="mt-4 text-xl font-black text-white">
                  {isEs ? "Pisos en Valencia" : "Flats in Valencia"}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  {isEs
                    ? "Instalación en apartamentos, pisos de alquiler, viviendas habituales y segundas residencias."
                    : "Installation in apartments, rental flats, main homes and second homes."}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6">
                <Umbrella className="h-6 w-6 text-amber-300" />
                <h3 className="mt-4 text-xl font-black text-white">
                  {isEs ? "Balcones estrechos" : "Narrow balconies"}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  {isEs
                    ? "Revisamos apertura, caída y espacio disponible para evitar choques o mala posición."
                    : "We check opening, slope and available space to avoid collisions or poor positioning."}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6">
                <Sun className="h-6 w-6 text-amber-300" />
                <h3 className="mt-4 text-xl font-black text-white">
                  {isEs ? "Protección solar" : "Sun protection"}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  {isEs
                    ? "Un toldo bien colocado ayuda a reducir sol directo, calor y molestias en el interior."
                    : "A well-installed awning helps reduce direct sun, heat and discomfort indoors."}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6">
                <Sparkles className="h-6 w-6 text-amber-300" />
                <h3 className="mt-4 text-xl font-black text-white">
                  {isEs ? "Acabado limpio" : "Clean finish"}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  {isEs
                    ? "Cuidamos la posición, el nivel y el acabado visual para que el toldo quede bien integrado."
                    : "We take care of position, level and visual finish so the awning fits well."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="border-b border-white/10 bg-neutral-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200">
              <MapPin className="h-4 w-4" />
              {isEs ? "Zonas de servicio" : "Service areas"}
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              {isEs
                ? "Instalamos toldos para balcón en Valencia y alrededores"
                : "We install balcony awnings in Valencia and nearby areas"}
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              {isEs
                ? "Trabajamos en Valencia ciudad y también en municipios cercanos. Si estás fuera de la ciudad, envíanos tu ubicación aproximada por WhatsApp y te confirmamos disponibilidad."
                : "We work in Valencia city and nearby towns. If you are outside the city, send us your approximate location by WhatsApp and we will confirm availability."}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-300"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <h3 className="text-2xl font-black text-white">
                  {isEs
                    ? "¿No sabes si tu balcón permite instalar un toldo?"
                    : "Not sure if your balcony can take an awning?"}
                </h3>

                <p className="mt-4 text-base leading-8 text-neutral-300">
                  {isEs
                    ? "Mándanos fotos. Revisamos pared, techo, barandilla, altura y espacio de apertura. Si vemos algún riesgo o limitación, te lo explicamos antes."
                    : "Send us photos. We check wall, ceiling, railing, height and opening space. If we see any risk or limitation, we explain it first."}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-300 px-6 py-4 text-base font-bold text-neutral-950 transition hover:bg-amber-200"
                >
                  <MessageCircle className="h-5 w-5" />
                  {isEs ? "Consultar por WhatsApp" : "Ask on WhatsApp"}
                </Link>

                <Link
                  href={`/${locale}/services/instalar-toldo-valencia`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
                >
                  {isEs ? "Ver instalación de toldos" : "View awning installation"}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="border-b border-white/10 bg-neutral-900 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-neutral-300">
                <CalendarCheck className="h-4 w-4 text-amber-300" />
                {isEs ? "Reserva rápida" : "Fast booking"}
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                {isEs
                  ? "Pide presupuesto para instalar tu toldo"
                  : "Request a quote for your awning installation"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Para preparar el presupuesto, lo mejor es enviar fotos por WhatsApp. Así podemos revisar el tipo de balcón, el acceso, la pared, el tamaño del toldo y si hace falta material especial."
                  : "To prepare the quote, the best option is to send photos by WhatsApp. This lets us check the balcony type, access, wall, awning size and whether special materials are needed."}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8">
              <h3 className="text-2xl font-black text-white">
                {isEs ? "Envíanos:" : "Send us:"}
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  isEs ? "Foto general del balcón" : "General balcony photo",
                  isEs ? "Foto de la pared o techo" : "Photo of wall or ceiling",
                  isEs ? "Medida aproximada del toldo" : "Approximate awning size",
                  isEs ? "Foto o enlace del modelo" : "Photo or link of the model",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <p className="text-sm leading-6 text-neutral-300">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-300 px-6 py-4 text-base font-bold text-neutral-950 transition hover:bg-amber-200"
                >
                  <MessageCircle className="h-5 w-5" />
                  {isEs ? "Pedir presupuesto ahora" : "Request quote now"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-neutral-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200">
              <MessageCircle className="h-4 w-4" />
              FAQ
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              {isEs
                ? "Preguntas frecuentes sobre instalación de toldos para balcón"
                : "Frequently asked questions about balcony awning installation"}
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.questionEs}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-lg font-black text-white">
                  {isEs ? faq.questionEs : faq.questionEn}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  {isEs ? faq.answerEs : faq.answerEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-neutral-900 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-neutral-300">
              <ArrowRight className="h-4 w-4 text-amber-300" />
              {isEs ? "Servicios relacionados" : "Related services"}
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              {isEs
                ? "También podemos ayudarte con otros trabajos"
                : "We can also help with other jobs"}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: `/${locale}/services/instalar-toldo-valencia`,
                titleEs: "Instalación de toldos en Valencia",
                titleEn: "Awning installation in Valencia",
              },
              {
                href: `/${locale}/services/instalacion-toldo-electrico-valencia`,
                titleEs: "Instalación de toldo eléctrico",
                titleEn: "Electric awning installation",
              },
              {
                href: `/${locale}/services/instalacion-toldo-manual-valencia`,
                titleEs: "Instalación de toldo manual",
                titleEn: "Manual awning installation",
              },
              {
                href: `/${locale}/services/instalacion-estanterias-valencia`,
                titleEs: "Instalación de estanterías",
                titleEn: "Shelf installation",
              },
              {
                href: `/${locale}/services/instalacion-cortinas-valencia`,
                titleEs: "Instalación de cortinas",
                titleEn: "Curtain installation",
              },
              {
                href: `/${locale}/handyman-valencia`,
                titleEs: "Handyman en Valencia",
                titleEn: "Handyman in Valencia",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-3xl border border-white/10 bg-neutral-950 p-6 transition hover:border-amber-300/40 hover:bg-white/[0.04]"
              >
                <h3 className="text-lg font-black text-white">
                  {isEs ? item.titleEs : item.titleEn}
                </h3>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-300">
                  {isEs ? "Ver servicio" : "View service"}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-amber-300/20 bg-amber-300/10 p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-5 inline-flex rounded-2xl bg-amber-300 p-3 text-neutral-950">
                <Umbrella className="h-7 w-7" />
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                {isEs
                  ? "¿Necesitas instalar un toldo en tu balcón?"
                  : "Need to install an awning on your balcony?"}
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-8 text-amber-100">
                {isEs
                  ? "Envíanos fotos por WhatsApp y te damos presupuesto para instalar el toldo en Valencia. Revisamos pared, tamaño, acceso y tipo de instalación antes de confirmar."
                  : "Send us photos by WhatsApp and we will quote your awning installation in Valencia. We check wall, size, access and installation type before confirming."}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-300 px-6 py-4 text-base font-bold text-neutral-950 transition hover:bg-amber-200"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "WhatsApp" : "WhatsApp"}
              </Link>

              <Link
                href={`/${locale}/estimate?category=handyman`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                {isEs ? "Formulario" : "Estimate form"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}