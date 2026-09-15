import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Tv,
  ShieldCheck,
  Wrench,
  Cable,
  Home,
  HelpCircle,
  MapPin,
  Star,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Montaje de TV en Valencia | Instalación en pared | THEVULGO"
      : "TV Mounting in Valencia | Wall Installation | THEVULGO",
    description: isEs
      ? "Montaje de TV en pared en Valencia con soporte fijo, inclinable o articulado, nivelación, TVs grandes, Samsung Frame y cableado limpio. Presupuesto por WhatsApp."
      : "Professional TV mounting in Valencia with fixed, tilting or full-motion brackets, accurate levelling, large TVs, Samsung Frame and clean cable management. Quote by WhatsApp.",
    alternates: {
      canonical: `${siteUrl}/${locale}/montaje-tv-valencia`,
      languages: {
        es: `${siteUrl}/es/montaje-tv-valencia`,
        en: `${siteUrl}/en/montaje-tv-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Montaje de TV en Valencia | 49 €"
        : "TV Mounting in Valencia | €49",
      description: isEs
        ? "Instalación limpia, rápida y profesional de televisores en Valencia y alrededores."
        : "Clean, fast and professional TV mounting in Valencia and nearby areas.",
      url: `${siteUrl}/${locale}/montaje-tv-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

const serviceAreas = [
  "Valencia",
  "Campanar",
  "Ruzafa",
  "Benimaclet",
  "Patraix",
  "El Carmen",
  "Extramurs",
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Sagunto",
  "Cullera",
  "Gandía",
];

const faqsEs = [
  {
    q: "¿Cuánto cuesta montar una TV en Valencia?",
    a: "El montaje estándar de TV en Valencia cuesta 49 €. El precio final depende del tamaño del televisor, tipo de soporte, tipo de pared, ocultación de cables y si hace falta instalar una toma eléctrica.",
  },
  {
    q: "¿Pueden instalar televisores grandes de 65, 75, 85 o 98 pulgadas?",
    a: "Sí. Instalamos televisores grandes, siempre revisando el tipo de pared, peso del televisor, soporte adecuado y seguridad de la instalación.",
  },
  {
    q: "¿Instalan TV en pared de pladur?",
    a: "Sí. Podemos instalar TV en pladur usando fijaciones adecuadas o buscando estructura interna cuando sea necesario. Antes de perforar revisamos la pared.",
  },
  {
    q: "¿Pueden ocultar los cables de la TV?",
    a: "Sí. Podemos organizar cables con canaleta exterior o estudiar una solución más limpia según la pared, ubicación de enchufes y distancia hasta los dispositivos.",
  },
  {
    q: "¿Instalan Samsung Frame TV?",
    a: "Sí. Podemos instalar Samsung Frame TV, incluyendo soporte, nivelación precisa y planificación del cable One Connect según el espacio disponible.",
  },
  {
    q: "¿Pueden traer el soporte de TV?",
    a: "Sí. Podemos ayudarte a elegir un soporte fijo, inclinable o articulado. También podemos comprarlo y llevarlo el día de la instalación.",
  },
  {
    q: "¿Cuánto tarda una instalación de TV?",
    a: "Una instalación estándar suele tardar entre 45 y 90 minutos. Si hay ocultación de cables, pared complicada o trabajo eléctrico, puede tardar más.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

const faqsEn = [
  { q: "How much does TV mounting cost in Valencia?", a: "Standard TV mounting in Valencia costs €49. The final price depends on the TV size, bracket, wall type, cable concealment and whether a new electrical outlet is needed." },
  { q: "Can you install large 65, 75, 85 or 98 inch TVs?", a: "Yes. We install large TVs after checking the wall type, TV weight, suitable bracket and installation safety." },
  { q: "Can you mount a TV on drywall?", a: "Yes. We can mount TVs on drywall using suitable fixings or locating the internal structure when necessary. We inspect the wall before drilling." },
  { q: "Can you hide the TV cables?", a: "Yes. We can organise cables with external trunking or assess a cleaner solution based on the wall, outlet position and distance to devices." },
  { q: "Do you install Samsung Frame TVs?", a: "Yes. We install Samsung Frame TVs, including the bracket, accurate levelling and One Connect cable planning for the available space." },
  { q: "Can you supply the TV bracket?", a: "Yes. We can help you choose a fixed, tilting or full-motion bracket, and can purchase and bring it on the installation day." },
  { q: "How long does TV mounting take?", a: "A standard installation usually takes 45 to 90 minutes. Cable concealment, a difficult wall or electrical work may take longer." },
  { q: "Do you work outside Valencia city?", a: "Yes. We work in Valencia and nearby areas including Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera and Gandía." },
];

export default async function TvMountingValenciaPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";
  const faqs = isEs ? faqsEs : faqsEn;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para montaje de TV en Valencia."
      : "Hi, I would like a quote for TV mounting in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs ? "Montaje de TV en Valencia" : "TV Mounting in Valencia",
    serviceType: "TV mounting",
    provider: {
      "@type": "LocalBusiness",
      name: "THEVULGO",
      url: siteUrl,
      telephone: "+34610076942",
      areaServed: "Valencia",
    },
    areaServed: serviceAreas,
    offers: {
      "@type": "Offer",
      price: "49",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "THEVULGO",
    url: siteUrl,
    telephone: "+34610076942",
    areaServed: "Valencia",
    priceRange: "€€",
    description: isEs
      ? "Servicios de montaje de TV, instalaciones limpias, pequeños trabajos eléctricos y montaje de muebles en Valencia."
      : "TV mounting, clean installations, small electrical jobs and furniture assembly services in Valencia.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEs ? "Inicio" : "Home",
        item: `${siteUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEs ? "Servicios" : "Services",
        item: `${siteUrl}/${locale}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isEs ? "Montaje de TV en Valencia" : "TV Mounting in Valencia",
        item: `${siteUrl}/${locale}/montaje-tv-valencia`,
      },
    ],
  };

  return (
    <main className="bg-white text-neutral-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-4 py-2 text-sm font-black text-neutral-900 shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-600" />
              {isEs ? "Servicio profesional en Valencia" : "Professional service in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Montaje de TV" : "TV Mounting"} <span className="text-yellow-500">{isEs ? "en Valencia" : "in Valencia"}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? <>Instalación profesional de televisores en pared por <strong className="text-neutral-950">49 €</strong>. Soportes fijos, inclinables o articulados, gestión de cables, montaje de TVs grandes y acabado limpio sin sorpresas.</>
                : <>Professional wall-mounted TV installation for <strong className="text-neutral-950">€49</strong>. Fixed, tilting or full-motion brackets, cable management, large TVs and a clean finish.</>}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
              >
                {isEs ? "Pedir presupuesto por WhatsApp" : "Request a quote on WhatsApp"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href={`tel:+${phoneNumber}`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400"
              >
                {isEs ? "Llamar ahora" : "Call now"}
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-neutral-700 sm:grid-cols-2">
              {(isEs ? [
                "Instalación por 49 €",
                "Soportes fijos o articulados",
                "Ocultación de cables",
                "TVs grandes y Samsung Frame",
                "Trabajo limpio y ordenado",
                "Valencia y alrededores",
              ] : ["Installation for €49", "Fixed or full-motion brackets", "Cable concealment", "Large TVs and Samsung Frame", "Clean and tidy work", "Valencia and nearby areas"]).map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-4 shadow-2xl md:p-6">
            <div className="rounded-2xl bg-yellow-400 p-8 text-black shadow-md">
              <Tv className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Clean TV installation. No mess. No stress.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs ? "Revisamos la pared, nivelamos la TV, usamos herramientas profesionales y dejamos la zona limpia." : "We inspect the wall, level the TV, use professional tools and leave the area clean."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {(isEs ? [
                ["Fast replies", "Respuesta rápida por WhatsApp"],
                ["Clear price", "Precio claro antes de perforar"],
                ["Pro tools", "Herramientas profesionales"],
                ["Clean finish", "Acabado limpio y ordenado"],
              ] : [["Fast replies", "Quick replies on WhatsApp"], ["Clear price", "Clear price before drilling"], ["Pro tools", "Professional tools"], ["Clean finish", "A clean and tidy result"]]).map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 shadow-sm"
                >
                  <p className="font-black">{title}</p>
                  <p className="mt-1 text-sm text-neutral-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {(isEs ? [
            {
              icon: ShieldCheck,
              title: "Instalación segura",
              text: "Elegimos fijaciones adecuadas según pared y peso.",
            },
            {
              icon: Wrench,
              title: "Trabajo limpio",
              text: "Nivelado preciso, perforación cuidada y acabado ordenado.",
            },
            {
              icon: Cable,
              title: "Cables organizados",
              text: "Canaleta, gestión de cables o solución personalizada.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Presupuesto antes del trabajo. Sin sorpresas.",
            },
          ] : [
            { icon: ShieldCheck, title: "Safe installation", text: "We choose suitable fixings for the wall and weight." },
            { icon: Wrench, title: "Clean work", text: "Accurate levelling, careful drilling and a tidy finish." },
            { icon: Cable, title: "Organised cables", text: "Trunking, cable management or a tailored solution." },
            { icon: Star, title: "Clear price", text: "A quote before work begins. No surprises." },
          ]).map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm"
            >
              <item.icon className="h-8 w-8 text-yellow-500" />
              <h2 className="mt-4 text-xl font-black">{item.title}</h2>
              <p className="mt-2 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10 md:px-8">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          {isEs ? "Montaje profesional de televisores en Valencia" : "Professional TV mounting in Valencia"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          {(isEs ? [
            "En THEVULGO realizamos montaje de TV en Valencia para viviendas, apartamentos, oficinas, locales comerciales y alquileres turísticos. Si necesitas colgar una TV en pared, instalar un soporte, organizar cables o dejar una instalación más limpia, podemos ayudarte con un trabajo rápido, seguro y bien terminado.",
            "Antes de perforar, revisamos el tipo de pared, la altura ideal, el tamaño del televisor, el tipo de soporte y la posición de enchufes o dispositivos. El objetivo es que la TV quede centrada, nivelada, segura y cómoda para ver en el sofá, la cama, una sala de espera o una zona comercial.",
            "Trabajamos con soportes fijos, inclinables y articulados. También hacemos instalaciones de Samsung Frame TV, televisores grandes, montaje sobre pladur, cable management, canaletas exteriores y preparación para consolas, decodificadores, routers, soundbars o sistemas multimedia.",
          ] : [
            "THEVULGO provides TV mounting in Valencia for homes, apartments, offices, commercial premises and holiday rentals. We can wall-mount your TV, install a bracket, organise cables and deliver a safe, clean finish.",
            "Before drilling, we check the wall type, ideal height, TV size, bracket type and the position of outlets and devices. The goal is a centred, level and secure TV at a comfortable viewing height.",
            "We work with fixed, tilting and full-motion brackets. We also install Samsung Frame and large TVs, mount on drywall, manage cables and prepare connections for consoles, set-top boxes, routers and soundbars.",
          ]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "¿Qué incluye nuestro servicio?" : "What does our service include?"}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {(isEs ? [
              "Revisión de pared y ubicación",
              "Medición y nivelación precisa",
              "Instalación del soporte",
              "Montaje seguro del televisor",
              "Organización básica de cables",
              "Comprobación final de estabilidad",
              "Limpieza básica de la zona",
              "Consejo sobre altura ideal",
              "Presupuesto claro antes del trabajo",
            ] : ["Wall and position check", "Accurate measuring and levelling", "Bracket installation", "Secure TV mounting", "Basic cable organisation", "Final stability check", "Basic area clean-up", "Advice on ideal height", "Clear quote before work"]).map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                <p className="font-bold text-neutral-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="mb-8 text-3xl font-black md:text-4xl">
          {isEs ? "Tipos de soporte para TV" : "Types of TV bracket"}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {(isEs ? [
            {
              title: "Soporte fijo",
              text: "La opción más limpia y económica. Ideal si quieres la TV cerca de la pared y no necesitas moverla.",
            },
            {
              title: "Soporte inclinable",
              text: "Buena opción para dormitorios o instalaciones un poco más altas, porque permite inclinar la pantalla.",
            },
            {
              title: "Soporte articulado",
              text: "Permite mover, girar y separar la TV de la pared. Ideal para esquinas, salones y zonas con varios ángulos.",
            },
          ] : [
            { title: "Fixed bracket", text: "The cleanest and most economical option when you want the TV close to the wall and do not need to move it." },
            { title: "Tilting bracket", text: "A good option for bedrooms or slightly higher installations because the screen can be tilted." },
            { title: "Full-motion bracket", text: "Lets you move, turn and pull the TV away from the wall. Ideal for corners and rooms with several viewing angles." },
          ]).map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Tv className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {(isEs ? [
            {
              title: "Ocultación de cables y enchufes",
              text: "Instalamos canaletas o buscamos la mejor solución para dejar todo más limpio.",
            },
            {
              title: "Instalación Samsung Frame",
              text: "Nivelación perfecta y planificación del cable One Connect para efecto cuadro.",
            },
            {
              title: "TVs grandes 65” – 98”",
              text: "Revisamos pared, peso y soporte para que tu TV grande quede segura.",
            },
            {
              title: "También podemos ayudarte con",
              text: "Instalar enchufe, soundbar, HDMI, router, consola o decodificador.",
            },
          ] : [
            { title: "Cable and outlet concealment", text: "We install trunking or find the best solution for a cleaner result." },
            { title: "Samsung Frame installation", text: "Precise levelling and One Connect cable planning for a picture-like finish." },
            { title: "Large TVs from 65–98 inches", text: "We check the wall, weight and bracket so your large TV is secure." },
            { title: "We can also help with", text: "Outlets, soundbars, HDMI, routers, consoles and set-top boxes." },
          ]).map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm"
            >
              <h2 className="text-xl font-black">{item.title}</h2>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "¿En qué tipo de pared instalamos?" : "Which wall types do we mount on?"}
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {(isEs ? [
            "Ladrillo",
            "Hormigón",
            "Pladur",
            "Paredes interiores",
            "Paredes de apartamento",
            "Locales comerciales",
          ] : ["Brick", "Concrete", "Drywall", "Interior walls", "Apartment walls", "Commercial premises"]).map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm"
            >
              <Home className="h-7 w-7 text-yellow-500" />
              <p className="mt-3 font-bold">{item}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          {isEs ? "Si no sabes qué tipo de pared tienes, puedes enviarnos una foto o un vídeo por WhatsApp. También podemos revisar la pared en persona antes de elegir la mejor solución." : "If you are unsure which wall type you have, send us a photo or video on WhatsApp. We can also inspect the wall in person before choosing the best solution."}
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            {isEs ? "Precio claro" : "Clear price"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs ? "Montaje de TV por 49 €" : "TV mounting for €49"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs ? "El precio estándar es de 49 €. El coste final puede variar si necesitas soporte incluido, instalación de TV grande, ocultación de cables, trabajo eléctrico, canaleta o montaje especial." : "The standard price is €49. The final cost may vary if you need a bracket supplied, a large TV installation, cable concealment, electrical work, trunking or a specialist installation."}
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">{isEs ? "El precio depende de:" : "The price depends on:"}</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {(isEs ? [
                "Tamaño del televisor",
                "Tipo de soporte",
                "Tipo de pared",
                "Altura de instalación",
                "Ocultación de cables",
                "Nueva toma eléctrica",
                "Samsung Frame",
                "Distancia fuera de Valencia",
              ] : ["TV size", "Bracket type", "Wall type", "Mounting height", "Cable concealment", "New electrical outlet", "Samsung Frame", "Distance outside Valencia"]).map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 font-black text-white shadow-md transition hover:scale-105"
          >
            {isEs ? "Enviar fotos y pedir precio" : "Send photos and request a price"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs ? "Zonas donde trabajamos" : "Areas we cover"}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
          {isEs ? "Realizamos montaje de TV en Valencia ciudad y alrededores. Si estás fuera de Valencia, envíanos tu dirección y te confirmamos disponibilidad." : "We provide TV mounting in Valencia city and nearby areas. If you are outside Valencia, send us your address so we can confirm coverage."}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {serviceAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 font-bold text-neutral-900"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black">
                  <span>{item.q}</span>
                  <HelpCircle className="h-5 w-5 shrink-0 text-yellow-500" />
                </summary>
                <p className="mt-4 leading-7 text-neutral-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs ? "Servicios relacionados" : "Related services"}
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {(isEs ? [
            { title: "Instalación de soporte TV", href: `/${locale}/instalacion-soporte-tv-valencia` },
            { title: "Montaje de TV grande", href: `/${locale}/montaje-tv-grande-valencia` },
            { title: "Montaje Samsung Frame", href: `/${locale}/montaje-tv-samsung-frame-valencia` },
            {
              title: "Ocultar cables de TV",
              href: `/${locale}/ocultar-cables-valencia`,
            },
            {
              title: "Instalar soundbar",
              href: `/${locale}/services/tv-mounting/instalar-soundbar-valencia`,
            },
            {
              title: "Manitas en Valencia",
              href: `/${locale}/handyman-valencia`,
            },
          ] : [
            { title: "TV bracket installation", href: `/${locale}/instalacion-soporte-tv-valencia` },
            { title: "Large TV mounting", href: `/${locale}/montaje-tv-grande-valencia` },
            { title: "Samsung Frame mounting", href: `/${locale}/montaje-tv-samsung-frame-valencia` },
            { title: "Hide TV cables", href: `/${locale}/ocultar-cables-valencia` },
            { title: "Soundbar installation", href: `/${locale}/services/tv-mounting/instalar-soundbar-valencia` },
            { title: "Handyman in Valencia", href: `/${locale}/handyman-valencia` },
          ]).map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
            >
              <p className="text-xl font-black">{item.title}</p>
              <p className="mt-3 inline-flex items-center font-bold text-neutral-700 group-hover:text-black">
                {isEs ? "Ver servicio" : "View service"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-yellow-400 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="text-4xl font-black tracking-tight">
            {isEs ? "¿Quieres montar tu TV en Valencia?" : "Ready to mount your TV in Valencia?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs ? "Envíanos una foto de la pared, el tamaño de la TV y tu zona. Te damos un presupuesto claro antes de empezar." : "Send us a photo of the wall, your TV size and your area. We will provide a clear quote before work begins."}
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 font-black text-white shadow-xl transition hover:scale-105"
          >
            {isEs ? "Pedir presupuesto ahora" : "Request a quote now"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
