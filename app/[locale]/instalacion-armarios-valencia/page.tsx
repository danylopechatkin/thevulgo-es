import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Euro,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
  Wrench,
  Zap,
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Instalación de Armarios en Valencia | Dormitorio, Correderos e IKEA | THEVULGO"
    : "Wardrobe Installation in Valencia | Bedroom, Sliding & IKEA | THEVULGO";

  const description = isEs
    ? "Instalación de armarios en Valencia. Armarios de dormitorio, correderos, IKEA, Pax, almacenaje, nivelación y fijación segura. Presupuesto por WhatsApp."
    : "Wardrobe installation in Valencia. Bedroom wardrobes, sliding wardrobes, IKEA, Pax, storage, leveling and secure fixing. Estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "instalacion armarios valencia",
          "instalar armario valencia",
          "instalador armarios valencia",
          "instalador de armarios valencia",
          "armarios dormitorio valencia",
          "armarios puertas correderas valencia",
          "armarios empotrados valencia",
          "montaje armarios valencia",
          "montaje armario ikea valencia",
          "montaje armario pax valencia",
          "montaje muebles valencia",
          "montaje muebles ikea valencia",
        ]
      : [
          "wardrobe installation valencia",
          "wardrobe installer valencia",
          "install wardrobe valencia",
          "bedroom wardrobe installation valencia",
          "sliding wardrobe installation valencia",
          "built in wardrobes valencia",
          "ikea wardrobe installation valencia",
          "pax wardrobe installation valencia",
          "furniture assembly valencia",
        ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/instalacion-armarios-valencia`,
      languages: {
        es: `${baseUrl}/es/instalacion-armarios-valencia`,
        en: `${baseUrl}/en/instalacion-armarios-valencia`,
        "x-default": `${baseUrl}/es/instalacion-armarios-valencia`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/instalacion-armarios-valencia`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default async function InstalacionArmariosValenciaPage({
  params,
}: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=furniture`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito instalación de armarios en Valencia. Quiero pedir presupuesto y puedo enviar fotos, medidas o modelo del armario."
      : "Hi, I need wardrobe installation in Valencia. I’d like to request an estimate and can send photos, measurements or the wardrobe model."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const moneyLinks = [
    {
      title: isEs ? "Montaje de armarios" : "Wardrobe assembly",
      desc: isEs
        ? "Montaje de armarios IKEA, Pax, dormitorio y almacenaje."
        : "Assembly of IKEA, Pax, bedroom and storage wardrobes.",
      href: `/${locale}/montaje-armarios-valencia`,
    },
    {
      title: isEs ? "Montaje de armario Pax" : "Pax wardrobe assembly",
      desc: isEs
        ? "Estructuras Pax, puertas, cajones, baldas, barras y accesorios."
        : "Pax frames, doors, drawers, shelves, rails and accessories.",
      href: `/${locale}/montaje-armario-pax-valencia`,
    },
    {
      title: isEs ? "Montaje de muebles IKEA" : "IKEA furniture assembly",
      desc: isEs
        ? "Montaje limpio de muebles IKEA para casa, piso y Airbnb."
        : "Clean IKEA furniture assembly for homes, flats and Airbnb.",
      href: `/${locale}/montaje-muebles-ikea-valencia`,
    },
    {
      title: isEs ? "Montaje de muebles" : "Furniture assembly",
      desc: isEs
        ? "Camas, cómodas, mesas, estanterías, armarios y muebles grandes."
        : "Beds, drawers, tables, shelves, wardrobes and large furniture.",
      href: `/${locale}/montaje-muebles-valencia`,
    },
    {
      title: isEs ? "Colgar estanterías" : "Shelf installation",
      desc: isEs
        ? "Fijación segura en pared, nivelación y acabado limpio."
        : "Secure wall fixing, leveling and clean finish.",
      href: `/${locale}/colgar-estanterias-valencia`,
    },
    {
      title: isEs ? "Manitas en Valencia" : "Handyman in Valencia",
      desc: isEs
        ? "Montaje, reparaciones, instalaciones y mantenimiento del hogar."
        : "Assembly, repairs, installations and home maintenance.",
      href: `/${locale}/handyman-valencia`,
    },
  ];

  const prices = isEs
    ? [
        ["Instalación de armario pequeño", "desde 49 €"],
        ["Instalación de armario mediano", "desde 69 €"],
        ["Instalación de armario grande", "desde 89 €"],
        ["Instalación de armario IKEA Pax", "desde 89 €"],
        ["Ajuste de puertas / correderas", "según trabajo"],
        ["Visita / revisión", "desde 49 €"],
      ]
    : [
        ["Small wardrobe installation", "from €49"],
        ["Medium wardrobe installation", "from €69"],
        ["Large wardrobe installation", "from €89"],
        ["IKEA Pax wardrobe installation", "from €89"],
        ["Door / sliding door adjustment", "by job"],
        ["Visit / inspection", "from €49"],
      ];

  const faqs = isEs
    ? [
        {
          q: "¿Cuánto cuesta la instalación de armarios en Valencia?",
          a: "Depende del tamaño del armario, número de puertas, cajones, accesorios, dificultad, estado del suelo, tipo de pared y si necesita fijación. Los trabajos pequeños suelen empezar desde 49 €.",
        },
        {
          q: "¿Cuál es la diferencia entre montaje e instalación de armarios?",
          a: "El montaje consiste en ensamblar las piezas del armario. La instalación incluye además nivelación, ajuste de puertas, fijación a pared cuando es necesario y comprobación final de estabilidad.",
        },
        {
          q: "¿Instaláis armarios IKEA Pax?",
          a: "Sí. Instalamos armarios IKEA Pax, estructuras, puertas abatibles o correderas, cajones, baldas, barras, accesorios interiores y ajustes finales.",
        },
        {
          q: "¿Podéis instalar armarios con puertas correderas?",
          a: "Sí. Podemos montar e instalar armarios con puertas correderas, revisar carriles, nivelar puertas y ajustar el cierre para que funcione correctamente.",
        },
        {
          q: "¿Hace falta fijar el armario a la pared?",
          a: "En muchos casos sí, especialmente cuando el armario es alto, pesado o estrecho. Revisamos la pared y elegimos fijaciones adecuadas para mejorar la seguridad.",
        },
        {
          q: "¿Puedo enviar fotos o el modelo por WhatsApp?",
          a: "Sí. Envía fotos de las cajas, modelo, medidas, habitación y marca del armario. Así podemos darte una estimación más clara antes de ir.",
        },
      ]
    : [
        {
          q: "How much does wardrobe installation in Valencia cost?",
          a: "It depends on wardrobe size, number of doors, drawers, accessories, difficulty, floor condition, wall type and whether fixing is needed. Small jobs usually start from €49.",
        },
        {
          q: "What is the difference between wardrobe assembly and installation?",
          a: "Assembly means putting the wardrobe parts together. Installation also includes leveling, door adjustment, wall fixing when needed and final stability checking.",
        },
        {
          q: "Do you install IKEA Pax wardrobes?",
          a: "Yes. We install IKEA Pax wardrobes, frames, hinged or sliding doors, drawers, shelves, rails, interior accessories and final adjustments.",
        },
        {
          q: "Can you install wardrobes with sliding doors?",
          a: "Yes. We can assemble and install wardrobes with sliding doors, check rails, level doors and adjust the closing so everything works correctly.",
        },
        {
          q: "Does the wardrobe need to be fixed to the wall?",
          a: "In many cases yes, especially when the wardrobe is tall, heavy or narrow. We check the wall and choose suitable fixings to improve safety.",
        },
        {
          q: "Can I send photos or the model by WhatsApp?",
          a: "Yes. Send photos of the boxes, model, measurements, room and wardrobe brand. This helps us give a clearer estimate before coming.",
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
        priceRange: "€€",
        areaServed: areas,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Valencia",
          addressCountry: "ES",
        },
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/${locale}/instalacion-armarios-valencia#service`,
        name: isEs
          ? "Instalación de armarios en Valencia"
          : "Wardrobe installation in Valencia",
        serviceType: isEs
          ? "Instalación de armarios"
          : "Wardrobe installation",
        provider: {
          "@id": `${baseUrl}/#localbusiness`,
        },
        areaServed: areas,
        url: `${baseUrl}/${locale}/instalacion-armarios-valencia`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isEs
            ? "Servicios de instalación de armarios en Valencia"
            : "Wardrobe installation services in Valencia",
          itemListElement: moneyLinks.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title,
              url: `${baseUrl}${item.href}`,
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
            name: "Home",
            item: `${baseUrl}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: isEs
              ? "Instalación de armarios Valencia"
              : "Wardrobe installation Valencia",
            item: `${baseUrl}/${locale}/instalacion-armarios-valencia`,
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
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-500" />
              THEVULGO • Valencia & nearby
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              {isEs
                ? "Instalación de armarios en Valencia con ajuste y fijación profesional"
                : "Professional wardrobe installation in Valencia with adjustment and safe fixing"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "THEVULGO realiza instalación de armarios en Valencia: armarios de dormitorio, IKEA, Pax, puertas correderas, muebles de almacenaje, nivelación, ajuste de puertas y fijación segura a pared cuando hace falta. Presupuesto claro por WhatsApp."
                : "THEVULGO handles wardrobe installation in Valencia: bedroom wardrobes, IKEA, Pax, sliding doors, storage furniture, leveling, door adjustment and safe wall fixing when needed. Clear estimate by WhatsApp."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-lg transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs
                  ? "Pedir presupuesto por WhatsApp"
                  : "Request estimate by WhatsApp"}
              </a>

              <Link
                href={estimateHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-4 font-bold shadow-sm transition hover:scale-105"
              >
                {isEs ? "Abrir formulario" : "Open estimate form"}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Clock3,
                  title: isEs ? "Respuesta rápida" : "Fast response",
                  text: isEs
                    ? "Envía fotos, modelo y medidas."
                    : "Send photos, model and measurements.",
                },
                {
                  icon: ShieldCheck,
                  title: isEs ? "Instalación segura" : "Safe installation",
                  text: isEs
                    ? "Revisamos nivel, pared, peso y estabilidad."
                    : "We check level, wall, weight and stability.",
                },
                {
                  icon: BadgeCheck,
                  title: isEs ? "Ajuste final" : "Final adjustment",
                  text: isEs
                    ? "Puertas, cajones, baldas y fijaciones revisadas."
                    : "Doors, drawers, shelves and fixings checked.",
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
        <h2 className="text-3xl font-black">
          {isEs
            ? "Servicios relacionados con armarios"
            : "Related wardrobe services"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Estas páginas ayudan a Google a entender la estructura del sitio y ayudan al cliente a encontrar el servicio exacto: montaje, instalación, IKEA, Pax, estanterías y otros muebles."
            : "These pages help Google understand the site structure and help customers find the exact service: assembly, installation, IKEA, Pax, shelves and other furniture."}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {moneyLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-yellow-300 bg-white p-6 shadow-md transition hover:scale-105 hover:shadow-xl"
            >
              <Wrench className="mb-4 h-6 w-6 text-yellow-500" />
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-neutral-700">{item.desc}</p>
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
              <h2 className="text-3xl font-black">
                {isEs
                  ? "¿Qué incluye la instalación de armarios?"
                  : "What does wardrobe installation include?"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "La instalación de armarios requiere nivelación, ajuste de puertas, comprobación de estabilidad, revisión del suelo, revisión de la pared y fijación segura cuando el armario lo necesita. No es solo montar piezas: el objetivo es que el armario quede recto, estable y cómodo para usar cada día."
                  : "Wardrobe installation requires leveling, door adjustment, stability checks, floor checking, wall checking and safe fixing when the wardrobe needs it. It is not just about assembling parts: the goal is to leave the wardrobe straight, stable and comfortable for daily use."}
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {isEs
                  ? "Trabajamos con armarios IKEA, Pax, armarios de dormitorio, armarios con puertas correderas, muebles de almacenaje y soluciones para viviendas, habitaciones, oficinas, apartamentos Airbnb y locales en Valencia."
                  : "We work with IKEA wardrobes, Pax wardrobes, bedroom wardrobes, wardrobes with sliding doors, storage furniture and solutions for homes, rooms, offices, Airbnb apartments and commercial spaces in Valencia."}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  isEs ? "Nivelación del armario" : "Wardrobe leveling",
                  isEs ? "Ajuste de puertas" : "Door adjustment",
                  isEs ? "Puertas correderas" : "Sliding doors",
                  isEs ? "Cajones y baldas" : "Drawers and shelves",
                  isEs ? "Fijación a pared" : "Wall fixing",
                  isEs ? "Revisión final" : "Final check",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-xl">
              <h3 className="flex items-center gap-2 text-xl font-black">
                <Euro className="h-6 w-6 text-yellow-500" />
                {isEs ? "Precios orientativos" : "Guide prices"}
              </h3>

              <div className="mt-5 space-y-3">
                {prices.map(([name, price]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between rounded-xl bg-yellow-50 p-4"
                  >
                    <span className="font-semibold">{name}</span>
                    <span className="font-black">{price}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-neutral-600">
                {isEs
                  ? "El precio final depende del tamaño, modelo, peso, puertas, cajones, accesorios, dificultad, pared, suelo y tiempo necesario."
                  : "Final price depends on size, model, weight, doors, drawers, accessories, difficulty, wall, floor and time required."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Cómo funciona" : "How it works"}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {[
            [
              isEs ? "1. Envía fotos" : "1. Send photos",
              isEs
                ? "Muestra cajas, modelo y habitación."
                : "Show boxes, model and room.",
            ],
            [
              isEs ? "2. Revisamos medidas" : "2. We check details",
              isEs
                ? "Medidas, puertas, accesorios y pared."
                : "Measurements, doors, accessories and wall.",
            ],
            [
              isEs ? "3. Estimación" : "3. Estimate",
              isEs
                ? "Te damos precio antes de empezar."
                : "We give the price before starting.",
            ],
            [
              isEs ? "4. Instalación" : "4. Installation",
              isEs
                ? "Montamos, nivelamos y fijamos si hace falta."
                : "We assemble, level and fix if needed.",
            ],
            [
              isEs ? "5. Revisión final" : "5. Final check",
              isEs
                ? "Comprobamos puertas, cajones y estabilidad."
                : "We check doors, drawers and stability.",
            ],
          ].map(([title, text]) => (
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

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black">
                {isEs ? "Por qué elegir THEVULGO" : "Why choose THEVULGO"}
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Un armario mal instalado puede quedar desnivelado, moverse, dañar la pared o tener puertas que no cierran bien. Cuidamos la instalación, revisamos la estabilidad y dejamos el mueble listo para usar."
                  : "A poorly installed wardrobe can be uneven, move, damage the wall or have doors that do not close properly. We take care of the installation, check stability and leave the furniture ready to use."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Hammer, isEs ? "Instalación práctica" : "Practical installation"],
                [Home, isEs ? "Viviendas y Airbnb" : "Homes and Airbnb"],
                [Zap, isEs ? "Respuesta rápida" : "Fast response"],
                [Star, isEs ? "Acabado profesional" : "Professional finish"],
              ].map(([Icon, title]) => {
                const LucideIcon = Icon as typeof Hammer;
                return (
                  <div
                    key={String(title)}
                    className="rounded-2xl border border-yellow-400 bg-neutral-900 p-5"
                  >
                    <LucideIcon className="mb-4 h-6 w-6 text-yellow-400" />
                    <h3 className="font-bold">{String(title)}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Zonas de servicio en Valencia" : "Service areas in Valencia"}
        </h2>

        <p className="mt-4 max-w-3xl text-neutral-700">
          {isEs
            ? "Trabajamos en Valencia ciudad y zonas cercanas. Si no estás seguro si cubrimos tu zona, envía tu ubicación por WhatsApp."
            : "We work in Valencia city and nearby areas. If you are not sure whether we cover your area, send your location by WhatsApp."}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-semibold"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-black">
            {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
          </h2>

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
          <h2 className="text-3xl font-black">
            {isEs
              ? "¿Necesitas instalación de armarios en Valencia?"
              : "Need wardrobe installation in Valencia?"}
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-medium">
            {isEs
              ? "Envía fotos del armario, cajas, modelo o medidas por WhatsApp y te diremos cuánto puede costar, qué hace falta y cuándo podemos ir."
              : "Send photos of the wardrobe, boxes, model or measurements by WhatsApp and we will tell you how much it may cost, what is needed and when we can come."}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 font-bold text-white shadow-lg transition hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>

            <Link
              href={estimateHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-black bg-white px-6 py-4 font-bold text-black shadow-sm transition hover:scale-105"
            >
              {isEs ? "Pedir presupuesto" : "Request estimate"}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}