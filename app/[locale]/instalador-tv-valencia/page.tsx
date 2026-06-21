"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  Tv,
  Monitor,
  Cable,
  Speaker,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  BadgeCheck,
  MapPin,
  Star,
  Wrench,
  Drill,
  Home,
  Building2,
  Ruler,
  Plug,
  Hammer,
  HelpCircle,
  PhoneCall,
  Settings,
  Sofa,
  Eye,
  Layers,
  Zap,
  Search,
  MoveRight,
  Brackets,
  Paintbrush,
} from "lucide-react";

export default function InstaladorTvClient() {
  const locale = useLocale();
  const isEs = locale === "es";

  const phone = "34610076942";

  const estimateHref = `/${locale}/estimate?category=tv-mounting`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, necesito un instalador de TV en Valencia. Me gustaría pedir presupuesto para montar una TV en la pared."
      : "Hi! I need a TV installer in Valencia. I’d like an estimate for mounting a TV on the wall."
  );

  const whatsappHref = `https://wa.me/${phone}?text=${whatsappText}`;

  const copy = {
    badge: isEs
      ? "THEVULGO • Instalador de TV en Valencia"
      : "THEVULGO • TV Installer in Valencia",

    heroTitle: isEs
      ? "Instalador de TV en Valencia"
      : "TV Installer in Valencia",

    heroSubtitle: isEs
      ? "Montaje profesional de televisores en pared para pisos, casas, oficinas, bares, apartamentos turísticos y locales en Valencia. Instalamos soportes fijos, inclinables, articulados, Samsung Frame, TVs grandes, soundbars y ocultación de cables."
      : "Professional TV wall mounting for apartments, homes, offices, bars, tourist apartments and commercial spaces in Valencia. We install fixed, tilting and full-motion brackets, Samsung Frame TVs, large screens, soundbars and cable concealment.",

    primaryCta: isEs ? "Pedir presupuesto" : "Get estimate",

    secondaryCta: isEs ? "WhatsApp rápido" : "Quick WhatsApp",

    heroNote: isEs
      ? "Presupuesto claro antes de reservar. Sin sorpresas. Sin instalación improvisada."
      : "Clear estimate before booking. No surprises. No improvised installation.",

    trustTitle: isEs
      ? "Montaje limpio, seguro y sin improvisar"
      : "Clean, safe mounting with no guesswork",

    trustText: isEs
      ? "Antes de perforar se revisa la pared, la altura, el soporte y la posición final para que la TV quede bien centrada, nivelada y segura."
      : "Before drilling, the wall, height, bracket and final position are checked so the TV is centered, level and secure.",

    servicesTitle: isEs
      ? "Servicios de instalador de TV"
      : "TV installer services",

    servicesSubtitle: isEs
      ? "Soluciones para montar, colgar, nivelar y mejorar la zona de TV o multimedia."
      : "Solutions to mount, hang, level and improve your TV or media area.",

    seoTitle: isEs
      ? "Servicio profesional de instalador de TV en Valencia"
      : "Professional TV installer service in Valencia",

    includedTitle: isEs
      ? "Qué incluye el servicio"
      : "What the service includes",

    processTitle: isEs
      ? "Cómo funciona el montaje de TV"
      : "How TV mounting works",

    areasTitle: isEs
      ? "Zonas donde trabajamos"
      : "Areas we cover",

    wallTitle: isEs
      ? "Tipos de pared y montaje"
      : "Wall types and mounting",

    supportTitle: isEs
      ? "Tipos de soporte de TV"
      : "Types of TV brackets",

    sizeTitle: isEs
      ? "Montaje según tamaño de TV"
      : "Mounting by TV size",

    useCasesTitle: isEs
      ? "Instalación de TV para viviendas y negocios"
      : "TV installation for homes and businesses",

    linksTitle: isEs
      ? "Servicios relacionados"
      : "Related services",

    faqTitle: isEs
      ? "Preguntas frecuentes sobre instalador de TV"
      : "TV installer FAQ",

    finalTitle: isEs
      ? "¿Buscas instalador de TV en Valencia?"
      : "Looking for a TV installer in Valencia?",

    finalText: isEs
      ? "Envía fotos de la TV, soporte y pared por WhatsApp para recibir una estimación clara antes de reservar."
      : "Send photos of the TV, bracket and wall by WhatsApp to receive a clear estimate before booking.",

    finalNote: isEs
      ? "El precio final depende del tipo de pared, tamaño de TV, soporte, altura, ocultación de cables y dificultad del trabajo."
      : "Final price depends on wall type, TV size, bracket, height, cable concealment and job complexity.",
  };

  const trustPoints = [
    {
      title: isEs ? "Respuesta rápida" : "Fast response",
      text: isEs
        ? "Puedes enviar fotos por WhatsApp y recibir una orientación rápida antes de reservar."
        : "You can send photos by WhatsApp and receive quick guidance before booking.",
      icon: <Clock3 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Montaje seguro" : "Safe installation",
      text: isEs
        ? "Se eligen fijaciones adecuadas según pared, soporte, peso y tamaño de pantalla."
        : "Suitable fixings are selected based on wall, bracket, weight and screen size.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      title: isEs ? "Acabado limpio" : "Clean finish",
      text: isEs
        ? "Instalación nivelada, centrada y con cableado más ordenado cuando sea posible."
        : "Level, centered installation with cleaner cable routing whenever possible.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Montaje de TV en pared" : "TV wall mounting",
      desc: isEs
        ? "Instalación de TV en pared con soporte compatible, medición, nivelación y fijación segura."
        : "TV wall installation with compatible bracket, measuring, levelling and secure fixing.",
      price: isEs ? "desde €49" : "from €49",
      href: `/${locale}/montaje-tv-valencia`,
      icon: <Tv className="h-5 w-5" />,
    },
    {
      title: isEs ? "Colgar TV en Valencia" : "Hang TV in Valencia",
      desc: isEs
        ? "Servicio para colgar TV en salón, dormitorio, oficina, Airbnb, bar o local comercial."
        : "Service to hang a TV in a living room, bedroom, office, Airbnb, bar or commercial unit.",
      price: isEs ? "desde €49" : "from €49",
      href: `/${locale}/colgar-tv-valencia`,
      icon: <Drill className="h-5 w-5" />,
    },
    {
      title: isEs ? "Instalar TV en pared" : "Install TV on wall",
      desc: isEs
        ? "Instalación completa para dejar la pantalla recta, estable y con una posición cómoda."
        : "Complete installation to leave the screen straight, stable and comfortably positioned.",
      price: isEs ? "desde €49" : "from €49",
      href: `/${locale}/instalar-tv-pared-valencia`,
      icon: <Monitor className="h-5 w-5" />,
    },
    {
      title: isEs ? "Samsung Frame TV" : "Samsung Frame TV",
      desc: isEs
        ? "Montaje cuidado para Samsung Frame con alineación precisa y acabado decorativo."
        : "Careful Samsung Frame mounting with precise alignment and decorative finish.",
      price: isEs ? "desde €69" : "from €69",
      href: `/${locale}/montaje-tv-samsung-frame-valencia`,
      icon: <Paintbrush className="h-5 w-5" />,
    },
    {
      title: isEs ? "TV de 75 pulgadas" : "75 inch TV",
      desc: isEs
        ? "Instalación de televisores grandes con revisión de pared, soporte y posición."
        : "Large TV installation with wall, bracket and position check.",
      price: isEs ? "desde €79" : "from €79",
      href: `/${locale}/montaje-tv-75-pulgadas-valencia`,
      icon: <Ruler className="h-5 w-5" />,
    },
    {
      title: isEs ? "TV de 85 pulgadas" : "85 inch TV",
      desc: isEs
        ? "Montaje de pantallas grandes con más cuidado, ayuda y fijación adecuada."
        : "Large screen mounting with extra care, support and suitable fixing.",
      price: isEs ? "desde €99" : "from €99",
      href: `/${locale}/montaje-tv-85-pulgadas-valencia`,
      icon: <Monitor className="h-5 w-5" />,
    },
    {
      title: isEs ? "Ocultar cables de TV" : "Hide TV cables",
      desc: isEs
        ? "Canaleta, rutas limpias y soluciones para mejorar el aspecto de la instalación."
        : "Raceways, clean routing and solutions to improve the look of the setup.",
      price: isEs ? "desde €29" : "from €29",
      href: `/${locale}/ocultar-cables-valencia`,
      icon: <Cable className="h-5 w-5" />,
    },
    {
      title: isEs ? "Instalar soundbar" : "Soundbar mounting",
      desc: isEs
        ? "Montaje de barra de sonido bajo la TV o en pared con cableado ordenado."
        : "Soundbar mounting below the TV or on the wall with tidy cabling.",
      price: isEs ? "desde €29" : "from €29",
      href: `/${locale}/instalar-soundbar-valencia`,
      icon: <Speaker className="h-5 w-5" />,
    },
    {
      title: isEs ? "Instalación soporte TV" : "TV bracket installation",
      desc: isEs
        ? "Montaje de soporte fijo, inclinable o articulado con fijación adecuada."
        : "Fixed, tilting or full-motion TV bracket installation with suitable fixings.",
      price: isEs ? "desde €49" : "from €49",
      href: `/${locale}/instalacion-soporte-tv-valencia`,
      icon: <Brackets className="h-5 w-5" />,
    },
  ];

  const includedItems = isEs
    ? [
        "Instalación de TV en pared de ladrillo, hormigón o pladur",
        "Montaje de soporte fijo, inclinable o articulado",
        "Revisión de altura ideal antes de perforar",
        "Nivelación y centrado visual de la pantalla",
        "Instalación de TVs grandes de 65, 75 y 85 pulgadas",
        "Montaje de Samsung Frame y televisores decorativos",
        "Ocultación de cables con canaleta o ruta limpia",
        "Instalación de soundbar y pequeños sistemas multimedia",
        "Revisión del soporte si ya lo compraste",
        "Consejo antes del trabajo según fotos de la pared",
        "Comprobación visual del resultado final",
        "Trabajo limpio para pisos, oficinas, locales y apartamentos turísticos",
      ]
    : [
        "TV installation on brick, concrete or drywall walls",
        "Fixed, tilting or full-motion bracket installation",
        "Ideal height check before drilling",
        "Level and visually centered screen",
        "Large TV installation for 65, 75 and 85 inch screens",
        "Samsung Frame and decorative TV mounting",
        "Cable concealment with raceway or clean routing",
        "Soundbar and small media setup installation",
        "Bracket check if you already bought one",
        "Advice before the job based on wall photos",
        "Visual check of the final result",
        "Clean work for apartments, offices, units and tourist rentals",
      ];

  const process = [
    {
      step: "01",
      title: isEs ? "Envía fotos" : "Send photos",
      text: isEs
        ? "Envía una foto de la TV, soporte, pared y zona donde quieres instalarla."
        : "Send a photo of the TV, bracket, wall and area where you want it installed.",
      icon: <Search className="h-5 w-5" />,
    },
    {
      step: "02",
      title: isEs ? "Recibe estimación" : "Get estimate",
      text: isEs
        ? "Se confirma precio aproximado según tamaño, pared, soporte y extras."
        : "Approximate price is confirmed based on size, wall, bracket and extras.",
      icon: <BadgeCheck className="h-5 w-5" />,
    },
    {
      step: "03",
      title: isEs ? "Instalación" : "Installation",
      text: isEs
        ? "Se mide, nivela, perfora y monta la TV con el acabado más limpio posible."
        : "The TV is measured, levelled, drilled and mounted with the cleanest possible finish.",
      icon: <Drill className="h-5 w-5" />,
    },
    {
      step: "04",
      title: isEs ? "Revisión final" : "Final check",
      text: isEs
        ? "Se revisa estabilidad, alineación, cables y posición final."
        : "Stability, alignment, cables and final position are checked.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
  ];

  const wallTypes = [
    {
      title: isEs ? "Pared de ladrillo" : "Brick wall",
      text: isEs
        ? "Suele ser una de las opciones más habituales en pisos de Valencia. Permite fijación sólida cuando se usan tacos y tornillos adecuados."
        : "Usually one of the most common wall types in Valencia apartments. It allows solid fixing when proper anchors and screws are used.",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      title: isEs ? "Pared de hormigón" : "Concrete wall",
      text: isEs
        ? "Requiere perforación adecuada, brocas correctas y una medición precisa antes de instalar el soporte."
        : "Requires proper drilling, correct bits and precise measuring before installing the bracket.",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Pared de pladur" : "Drywall wall",
      text: isEs
        ? "Necesita revisar estructura, peso de la TV, soporte y puntos de fijación. No todas las paredes de pladur son iguales."
        : "Requires checking the structure, TV weight, bracket and fixing points. Not every drywall wall is the same.",
      icon: <Home className="h-5 w-5" />,
    },
  ];

  const supports = [
    {
      title: isEs ? "Soporte fijo" : "Fixed bracket",
      text: isEs
        ? "Ideal si quieres una TV pegada a la pared con un acabado limpio y sencillo."
        : "Ideal if you want the TV close to the wall with a clean and simple finish.",
    },
    {
      title: isEs ? "Soporte inclinable" : "Tilting bracket",
      text: isEs
        ? "Buena opción si la TV va un poco más alta y necesitas ajustar el ángulo de visión."
        : "Good option if the TV is mounted a little higher and you need to adjust the viewing angle.",
    },
    {
      title: isEs ? "Soporte articulado" : "Full-motion bracket",
      text: isEs
        ? "Permite mover la TV hacia los lados, separarla de la pared y orientar la pantalla."
        : "Allows the TV to move sideways, pull away from the wall and adjust the screen direction.",
    },
  ];

  const tvSizes = [
    {
      title: isEs ? "TV de 43 a 55 pulgadas" : "43 to 55 inch TV",
      text: isEs
        ? "Tamaño habitual para dormitorios, salones pequeños y apartamentos. Instalación rápida si la pared y soporte son adecuados."
        : "Common size for bedrooms, small living rooms and apartments. Quick installation if wall and bracket are suitable.",
      price: isEs ? "desde €49" : "from €49",
    },
    {
      title: isEs ? "TV de 65 pulgadas" : "65 inch TV",
      text: isEs
        ? "Pantalla popular para salones. Requiere medir bien la altura y distancia de visión."
        : "Popular living room screen. Requires careful height and viewing distance measurement.",
      price: isEs ? "desde €59" : "from €59",
    },
    {
      title: isEs ? "TV de 75 pulgadas" : "75 inch TV",
      text: isEs
        ? "Necesita más cuidado en manipulación, soporte compatible y fijación estable."
        : "Needs more careful handling, compatible bracket and stable fixing.",
      price: isEs ? "desde €79" : "from €79",
    },
    {
      title: isEs ? "TV de 85 pulgadas" : "85 inch TV",
      text: isEs
        ? "Instalación avanzada para pantallas grandes. Es importante revisar pared, peso y soporte antes del montaje."
        : "Advanced installation for large screens. Wall, weight and bracket must be checked before mounting.",
      price: isEs ? "desde €99" : "from €99",
    },
  ];

  const useCases = [
    {
      title: isEs ? "Pisos y casas" : "Apartments and homes",
      text: isEs
        ? "Montaje de TV para salón, dormitorio, habitación infantil, cocina o zona de juegos."
        : "TV mounting for living rooms, bedrooms, kids rooms, kitchens or gaming areas.",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: isEs ? "Oficinas" : "Offices",
      text: isEs
        ? "Instalación de pantallas para salas de reuniones, recepción, formación o videollamadas."
        : "Screen installation for meeting rooms, reception areas, training or video calls.",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Bares y cafeterías" : "Bars and cafés",
      text: isEs
        ? "Montaje de TVs para fútbol, menús digitales, música, eventos o entretenimiento."
        : "TV installation for football, digital menus, music, events or entertainment.",
      icon: <Star className="h-5 w-5" />,
    },
    {
      title: isEs ? "Apartamentos turísticos" : "Tourist apartments",
      text: isEs
        ? "Instalación limpia y resistente para viviendas de alquiler, Airbnb y Booking."
        : "Clean and durable installation for rental apartments, Airbnb and Booking properties.",
      icon: <Sofa className="h-5 w-5" />,
    },
  ];

  const areas = [
    "Valencia",
    "Ruzafa",
    "El Carmen",
    "Campanar",
    "Benimaclet",
    "Patraix",
    "Extramurs",
    "Malvarrosa",
    "Cabanyal",
    "Mislata",
    "Burjassot",
    "Paterna",
    "Torrent",
    "Alboraya",
    "Manises",
    "Quart de Poblet",
    "Xirivella",
    "Alaquàs",
    "Sagunto",
    "Gandía",
  ];

  const relatedLinks = [
    {
      label: isEs ? "Montaje TV Valencia" : "TV mounting Valencia",
      href: `/${locale}/montaje-tv-valencia`,
    },
    {
      label: isEs ? "Colgar TV Valencia" : "Hang TV Valencia",
      href: `/${locale}/colgar-tv-valencia`,
    },
    {
      label: isEs ? "Instalar TV pared Valencia" : "Install TV on wall Valencia",
      href: `/${locale}/instalar-tv-pared-valencia`,
    },
    {
      label: isEs ? "Montaje Samsung Frame Valencia" : "Samsung Frame mounting Valencia",
      href: `/${locale}/montaje-tv-samsung-frame-valencia`,
    },
    {
      label: isEs ? "Montaje TV 75 pulgadas Valencia" : "75 inch TV mounting Valencia",
      href: `/${locale}/montaje-tv-75-pulgadas-valencia`,
    },
    {
      label: isEs ? "Montaje TV 85 pulgadas Valencia" : "85 inch TV mounting Valencia",
      href: `/${locale}/montaje-tv-85-pulgadas-valencia`,
    },
    {
      label: isEs ? "Instalación soporte TV Valencia" : "TV bracket installation Valencia",
      href: `/${locale}/instalacion-soporte-tv-valencia`,
    },
    {
      label: isEs ? "Ocultar cables TV Valencia" : "Hide TV cables Valencia",
      href: `/${locale}/ocultar-cables-valencia`,
    },
    {
      label: isEs ? "Instalar soundbar Valencia" : "Soundbar mounting Valencia",
      href: `/${locale}/instalar-soundbar-valencia`,
    },
    {
      label: isEs ? "Montaje proyector Valencia" : "Projector mounting Valencia",
      href: `/${locale}/montaje-proyector-valencia`,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <section className="relative overflow-hidden px-4 py-16 sm:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute left-1/2 top-0 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />
          <div className="absolute right-6 top-28 h-[320px] w-[320px] rounded-full bg-yellow-100/70 blur-3xl" />
          <div className="absolute left-6 bottom-20 h-[260px] w-[260px] rounded-full bg-yellow-100/60 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-1.5 text-xs font-extrabold text-black shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              {copy.badge}
            </div>

            <h1 className="mx-auto mt-5 max-w-5xl text-4xl font-black tracking-tight text-black sm:text-5xl lg:text-6xl">
              {copy.heroTitle}
            </h1>

            <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-gray-600 sm:text-lg">
              {copy.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={estimateHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 text-sm font-black text-black shadow-lg transition hover:scale-[1.02]"
              >
                {copy.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-7 py-4 text-sm font-bold text-black shadow-md transition hover:scale-[1.02]"
              >
                <PhoneCall className="h-4 w-4" />
                {copy.secondaryCta}
              </a>
            </div>

            <p className="mt-5 text-sm font-medium text-gray-500">
              {copy.heroNote}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md transition hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                  {point.icon}
                </div>

                <h2 className="mt-4 text-lg font-black text-black">
                  {point.title}
                </h2>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
              <div className="max-w-5xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold text-black">
                  <BadgeCheck className="h-4 w-4" />
                  {copy.trustTitle}
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-tight text-black sm:text-4xl">
                  {copy.trustTitle}
                </h2>

                <p className="mt-4 max-w-4xl text-base leading-8 text-gray-600">
                  {copy.trustText}
                </p>

                <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {(isEs
                    ? [
                        "Revisión del tipo de pared antes de perforar",
                        "Medición de altura según sofá, cama o zona de visión",
                        "Instalación de soporte compatible con la TV",
                        "Cableado más limpio con opciones de canaleta",
                        "Montaje para salones, dormitorios, oficinas y locales",
                        "Estimación clara antes de confirmar la cita",
                      ]
                    : [
                        "Wall type check before drilling",
                        "Height measurement based on sofa, bed or viewing area",
                        "Compatible bracket installation",
                        "Cleaner cabling with raceway options",
                        "Mounting for living rooms, bedrooms, offices and units",
                        "Clear estimate before confirming the visit",
                      ]
                  ).map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                      <span className="text-sm leading-7 text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold text-black">
                <Tv className="h-4 w-4" />
                {copy.servicesTitle}
              </div>

              <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black tracking-tight text-black sm:text-4xl">
                {copy.servicesTitle}
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
                {copy.servicesSubtitle}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-2xl border border-yellow-400 bg-white p-7 shadow-lg transition hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                    {service.icon}
                  </div>

                  <h3 className="mt-4 text-xl font-black text-black">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-700">
                    {service.desc}
                  </p>

                  <div className="mt-4 text-sm font-black text-yellow-500">
                    {service.price}
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-black opacity-0 transition group-hover:opacity-100">
                    {isEs ? "Ver servicio" : "Open service"}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10 lg:p-12">
              <div className="mx-auto max-w-5xl">
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold text-black">
                    <Search className="h-4 w-4" />
                    SEO • Valencia
                  </div>
                </div>

                <h2 className="mt-5 text-center text-3xl font-black tracking-tight text-black sm:text-4xl">
                  {copy.seoTitle}
                </h2>

                <div className="mt-7 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                  {isEs ? (
                    <>
                      <p>
                        Si buscas un{" "}
                        <strong>instalador de TV en Valencia</strong>,
                        THEVULGO ofrece un servicio profesional para montar
                        televisores en pared con un resultado limpio, seguro y
                        bien alineado. Este servicio está pensado para clientes
                        que quieren evitar errores comunes como una TV torcida,
                        una altura incómoda, cables desordenados o una fijación
                        poco segura.
                      </p>

                      <p>
                        La instalación de una TV no es solo hacer agujeros en la
                        pared. Un buen montaje necesita revisar el tipo de pared,
                        elegir los tacos adecuados, medir la altura, comprobar el
                        soporte, entender el peso de la pantalla y dejar una
                        posición cómoda para ver la TV desde el sofá, cama o mesa.
                      </p>

                      <p>
                        Trabajamos en Valencia ciudad y alrededores con montaje
                        de televisores pequeños, medianos y grandes, incluyendo
                        TVs de 55, 65, 75 y 85 pulgadas. También podemos instalar
                        televisores Samsung Frame, soundbars, soportes
                        articulados, canaletas para ocultar cables y pequeñas
                        soluciones multimedia.
                      </p>

                      <p>
                        Este servicio es útil para viviendas particulares, pisos
                        de alquiler, apartamentos turísticos, oficinas, bares,
                        cafeterías, restaurantes y locales comerciales que
                        necesitan una instalación estética y resistente.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        If you are looking for a{" "}
                        <strong>TV installer in Valencia</strong>, THEVULGO
                        provides professional TV wall mounting with a clean,
                        secure and well-aligned result. This service is designed
                        for clients who want to avoid common problems such as a
                        crooked TV, uncomfortable height, messy cables or unsafe
                        fixing.
                      </p>

                      <p>
                        Installing a TV is not only about drilling holes in the
                        wall. A good installation requires checking the wall type,
                        choosing suitable anchors, measuring the height, checking
                        the bracket, understanding the screen weight and leaving a
                        comfortable viewing position.
                      </p>

                      <p>
                        We work in Valencia city and nearby areas with small,
                        medium and large TVs, including 55, 65, 75 and 85 inch
                        screens. We can also install Samsung Frame TVs, soundbars,
                        full-motion brackets, cable raceways and small media
                        solutions.
                      </p>

                      <p>
                        This service is useful for private homes, rental flats,
                        tourist apartments, offices, bars, cafés, restaurants and
                        commercial spaces that need a clean and durable
                        installation.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold text-black">
                    <Wrench className="h-4 w-4" />
                    {copy.includedTitle}
                  </div>

                  <h2 className="mt-5 text-3xl font-black tracking-tight text-black sm:text-4xl">
                    {copy.includedTitle}
                  </h2>

                  <p className="mt-4 text-base leading-8 text-gray-600">
                    {isEs
                      ? "El objetivo es dejar la TV instalada de forma segura, visualmente limpia y cómoda para el uso diario."
                      : "The goal is to leave the TV installed safely, visually clean and comfortable for daily use."}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {includedItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                      <span className="text-sm leading-7 text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold text-black">
                  <Settings className="h-4 w-4" />
                  {copy.processTitle}
                </div>

                <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black tracking-tight text-black sm:text-4xl">
                  {copy.processTitle}
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
                  {isEs
                    ? "Un proceso simple para saber el precio, confirmar la instalación y evitar sorpresas durante el trabajo."
                    : "A simple process to know the price, confirm the installation and avoid surprises during the job."}
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {process.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                        {item.icon}
                      </div>

                      <span className="text-3xl font-black text-yellow-200">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-black text-black">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
                    <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold text-black">
                  <Layers className="h-4 w-4" />
                  {copy.wallTitle}
                </div>

                <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black tracking-tight text-black sm:text-4xl">
                  {copy.wallTitle}
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
                  {isEs
                    ? "No todas las paredes se trabajan igual. Antes de montar una TV se debe revisar el material, la resistencia y el tipo de fijación."
                    : "Not every wall is the same. Before mounting a TV, the material, strength and fixing type should be checked."}
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {wallTypes.map((wall) => (
                  <div
                    key={wall.title}
                    className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md transition hover:scale-[1.02] hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                      {wall.icon}
                    </div>

                    <h3 className="mt-5 text-xl font-black text-black">
                      {wall.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {wall.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-gray-200 bg-yellow-50 p-6">
                <p className="text-sm leading-7 text-gray-700">
                  {isEs ? (
                    <>
                      Para una instalación segura, es importante saber si la
                      pared es de ladrillo, hormigón, pladur, tabique fino o
                      una pared reforzada. También influye el tamaño de la TV,
                      el peso, el soporte y si la pantalla se moverá con un
                      brazo articulado.
                    </>
                  ) : (
                    <>
                      For a safe installation, it is important to know whether
                      the wall is brick, concrete, drywall, thin partition wall
                      or reinforced wall. TV size, weight, bracket type and
                      whether the screen will move on a full-motion arm also
                      matter.
                    </>
                  )}
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold text-black">
                    <Brackets className="h-4 w-4" />
                    {copy.supportTitle}
                  </div>

                  <h2 className="mt-5 text-3xl font-black tracking-tight text-black sm:text-4xl">
                    {copy.supportTitle}
                  </h2>

                  <p className="mt-4 text-base leading-8 text-gray-600">
                    {isEs
                      ? "El soporte correcto cambia mucho el resultado final. No es lo mismo montar una TV fija que una TV con brazo articulado."
                      : "The right bracket changes the final result a lot. Mounting a fixed TV is not the same as mounting a TV on a full-motion arm."}
                  </p>

                  <div className="mt-6">
                    <Link
                      href={`/${locale}/instalacion-soporte-tv-valencia`}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-black text-black shadow-lg transition hover:scale-[1.02]"
                    >
                      {isEs
                        ? "Ver instalación de soporte TV"
                        : "Open TV bracket installation"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  {supports.map((support) => (
                    <div
                      key={support.title}
                      className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                    >
                      <h3 className="text-lg font-black text-black">
                        {support.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {support.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold text-black">
                  <Ruler className="h-4 w-4" />
                  {copy.sizeTitle}
                </div>

                <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black tracking-tight text-black sm:text-4xl">
                  {copy.sizeTitle}
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
                  {isEs
                    ? "El tamaño de la pantalla influye en el precio, el soporte, la altura, el peso y la dificultad de manipulación."
                    : "Screen size affects price, bracket choice, height, weight and handling difficulty."}
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {tvSizes.map((size) => (
                  <div
                    key={size.title}
                    className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md"
                  >
                    <h3 className="text-lg font-black text-black">
                      {size.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {size.text}
                    </p>

                    <div className="mt-4 text-sm font-black text-yellow-500">
                      {size.price}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href={`/${locale}/montaje-tv-75-pulgadas-valencia`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-black shadow-md transition hover:scale-[1.02]"
                >
                  {isEs ? "Montaje TV 75 pulgadas" : "75 inch TV mounting"}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={`/${locale}/montaje-tv-85-pulgadas-valencia`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-black shadow-md transition hover:scale-[1.02]"
                >
                  {isEs ? "Montaje TV 85 pulgadas" : "85 inch TV mounting"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10 lg:p-12">
              <div className="mx-auto max-w-5xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold text-black">
                  <Eye className="h-4 w-4" />
                  {isEs ? "Altura y posición" : "Height and position"}
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-tight text-black sm:text-4xl">
                  {isEs
                    ? "Altura correcta para instalar una TV"
                    : "Correct height for TV installation"}
                </h2>

                <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                  {isEs ? (
                    <>
                      <p>
                        Una de las partes más importantes del trabajo de un{" "}
                        <strong>instalador de TV en Valencia</strong> es decidir
                        la altura correcta. Muchas TVs se instalan demasiado
                        altas, especialmente cuando se colocan sobre muebles,
                        chimeneas o paredes grandes sin referencias visuales.
                      </p>

                      <p>
                        En un salón normal, la pantalla debe quedar cómoda para
                        verla desde el sofá. En un dormitorio, la altura puede
                        cambiar porque la TV se ve desde la cama. En bares,
                        oficinas o locales, la posición depende de la distancia,
                        altura del público y uso principal de la pantalla.
                      </p>

                      <p>
                        Por eso antes de perforar se marca la posición, se revisa
                        el centro visual de la TV y se confirma con el cliente.
                        Esto ayuda a evitar agujeros innecesarios y mejora mucho
                        el resultado final.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        One of the most important parts of the job of a{" "}
                        <strong>TV installer in Valencia</strong> is choosing the
                        correct height. Many TVs are mounted too high, especially
                        above furniture, fireplaces or large empty walls.
                      </p>

                      <p>
                        In a normal living room, the screen should feel
                        comfortable from the sofa. In a bedroom, the height may
                        change because the TV is viewed from the bed. In bars,
                        offices or commercial units, the position depends on
                        distance, audience height and screen use.
                      </p>

                      <p>
                        That is why the position is marked, the visual center is
                        checked and the client confirms before drilling. This
                        helps avoid unnecessary holes and improves the final
                        result.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold text-black">
                    <Cable className="h-4 w-4" />
                    {isEs ? "Ocultación de cables" : "Cable concealment"}
                  </div>

                  <h2 className="mt-5 text-3xl font-black tracking-tight text-black sm:text-4xl">
                    {isEs
                      ? "Instalación de TV con cables más limpios"
                      : "TV installation with cleaner cables"}
                  </h2>

                  <div className="mt-5 space-y-5 text-[15px] leading-8 text-gray-700 sm:text-base">
                    {isEs ? (
                      <>
                        <p>
                          Una TV puede estar perfectamente nivelada, pero si los
                          cables quedan colgando, el resultado visual pierde
                          calidad. Por eso también se puede añadir ocultación de
                          cables con canaleta, rutas limpias o cable management
                          básico.
                        </p>

                        <p>
                          La solución depende de la posición de enchufes,
                          distancia al mueble, tipo de pared y dispositivos
                          conectados como consola, router, decodificador,
                          soundbar o sistema de sonido.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          A TV can be perfectly level, but if the cables are
                          hanging, the visual result loses quality. Cable
                          concealment can be added with raceways, clean routing
                          or basic cable management.
                        </p>

                        <p>
                          The solution depends on outlet position, distance to
                          furniture, wall type and connected devices such as a
                          console, router, decoder, soundbar or audio system.
                        </p>
                      </>
                    )}
                  </div>

                  <div className="mt-6">
                    <Link
                      href={`/${locale}/ocultar-cables-valencia`}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-black text-black shadow-lg transition hover:scale-[1.02]"
                    >
                      {isEs
                        ? "Ver ocultación de cables"
                        : "Open cable concealment"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-yellow-50 p-6">
                  <h3 className="text-xl font-black text-black">
                    {isEs
                      ? "Opciones habituales para cables"
                      : "Common cable options"}
                  </h3>

                  <div className="mt-5 space-y-4">
                    {(isEs
                      ? [
                          "Canaleta blanca exterior para acabado limpio",
                          "Cableado detrás de mueble TV",
                          "Ruta ordenada hacia enchufe cercano",
                          "Agrupación de cables HDMI y alimentación",
                          "Preparación para consola, router o soundbar",
                        ]
                      : [
                          "White external raceway for a clean finish",
                          "Cabling behind TV furniture",
                          "Clean route to nearby outlet",
                          "Grouping HDMI and power cables",
                          "Preparation for console, router or soundbar",
                        ]
                    ).map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                        <span className="text-sm leading-7 text-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold text-black">
                  <Building2 className="h-4 w-4" />
                  {copy.useCasesTitle}
                </div>

                <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black tracking-tight text-black sm:text-4xl">
                  {copy.useCasesTitle}
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
                  {isEs
                    ? "El montaje de TV es útil tanto para clientes particulares como para negocios que necesitan pantallas bien instaladas."
                    : "TV mounting is useful for private clients and businesses that need properly installed screens."}
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {useCases.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                      {item.icon}
                    </div>

                    <h3 className="mt-5 text-lg font-black text-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10 lg:p-12">
              <div className="mx-auto max-w-5xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold text-black">
                  <Star className="h-4 w-4" />
                  {isEs ? "Por qué elegir THEVULGO" : "Why choose THEVULGO"}
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-tight text-black sm:text-4xl">
                  {isEs
                    ? "Un instalador de TV para resultados profesionales"
                    : "A TV installer for professional results"}
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {(isEs
                    ? [
                        {
                          title: "Antes de perforar se revisa todo",
                          text: "La pared, el soporte, la altura, el tamaño de la TV y la posición final se revisan antes de empezar.",
                        },
                        {
                          title: "Ideal para TVs grandes",
                          text: "Las pantallas de 65, 75 y 85 pulgadas necesitan más cuidado, mejor medición y soporte adecuado.",
                        },
                        {
                          title: "Acabado más limpio",
                          text: "La instalación busca un resultado visualmente ordenado, con cables mejor organizados cuando sea posible.",
                        },
                        {
                          title: "Presupuesto claro",
                          text: "Puedes enviar fotos y recibir una estimación antes de confirmar la cita.",
                        },
                      ]
                    : [
                        {
                          title: "Everything is checked before drilling",
                          text: "The wall, bracket, height, TV size and final position are checked before starting.",
                        },
                        {
                          title: "Ideal for large TVs",
                          text: "65, 75 and 85 inch screens need more care, better measuring and suitable brackets.",
                        },
                        {
                          title: "Cleaner finish",
                          text: "The installation aims for a visually tidy result with better cable organization when possible.",
                        },
                        {
                          title: "Clear estimate",
                          text: "You can send photos and receive an estimate before confirming the appointment.",
                        },
                      ]
                  ).map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                    >
                      <h3 className="text-lg font-black text-black">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold text-black">
                    <MapPin className="h-4 w-4" />
                    {copy.areasTitle}
                  </div>

                  <h2 className="mt-5 text-3xl font-black tracking-tight text-black sm:text-4xl">
                    {copy.areasTitle}
                  </h2>

                  <p className="mt-4 text-base leading-8 text-gray-600">
                    {isEs
                      ? "Servicio de instalador de TV en Valencia ciudad y zonas cercanas. Si estás fuera de Valencia, puedes enviar ubicación por WhatsApp."
                      : "TV installer service in Valencia city and nearby areas. If you are outside Valencia, you can send your location by WhatsApp."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                  {areas.map((area) => (
                    <div
                      key={area}
                      className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-center text-sm font-bold text-gray-700 shadow-sm"
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold text-black">
                  <MoveRight className="h-4 w-4" />
                  {copy.linksTitle}
                </div>

                <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black tracking-tight text-black sm:text-4xl">
                  {copy.linksTitle}
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
                  {isEs
                    ? "También puedes visitar páginas específicas según el tipo de instalación que necesitas."
                    : "You can also visit specific pages depending on the type of installation you need."}
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-yellow-400 hover:shadow-md"
                  >
                    <span className="text-sm font-black text-black">
                      {link.label}
                    </span>

                    <ArrowRight className="h-4 w-4 text-gray-400 transition group-hover:text-yellow-500" />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10 lg:p-12">
              <div className="mx-auto max-w-5xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold text-black">
                  <Plug className="h-4 w-4" />
                  {isEs ? "Antes de reservar" : "Before booking"}
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-tight text-black sm:text-4xl">
                  {isEs
                    ? "Qué enviar para recibir presupuesto rápido"
                    : "What to send for a quick estimate"}
                </h2>

                <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {(isEs
                    ? [
                        "Foto de la pared donde irá la TV",
                        "Foto del soporte si ya lo compraste",
                        "Modelo o tamaño de la TV",
                        "Altura aproximada deseada",
                        "Foto de enchufes y cables cercanos",
                        "Indicar si quieres ocultar cables",
                        "Dirección o zona de Valencia",
                        "Día y horario preferido",
                      ]
                    : [
                        "Photo of the wall where the TV will go",
                        "Photo of the bracket if you already bought it",
                        "TV model or size",
                        "Approximate desired height",
                        "Photo of nearby outlets and cables",
                        "Mention if you want cable concealment",
                        "Address or area in Valencia",
                        "Preferred day and time",
                      ]
                  ).map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                      <span className="text-sm leading-7 text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-black text-black shadow-lg transition hover:scale-[1.02]"
                  >
                    <PhoneCall className="h-4 w-4" />
                    WhatsApp
                  </a>

                  <Link
                    href={estimateHref}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-black shadow-md transition hover:scale-[1.02]"
                  >
                    {copy.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
              <div className="mx-auto max-w-5xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-bold text-black">
                  <HelpCircle className="h-4 w-4" />
                  {copy.faqTitle}
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-tight text-black sm:text-4xl">
                  {copy.faqTitle}
                </h2>

                <div className="mt-10 space-y-7">
                  {(isEs
                    ? [
                        {
                          q: "¿Cuánto cuesta un instalador de TV en Valencia?",
                          a: "El montaje básico de TV en pared empieza desde 49 €. El precio final depende del tamaño de la TV, tipo de pared, soporte, altura, ocultación de cables y dificultad del trabajo.",
                        },
                        {
                          q: "¿Puedo montar una TV en pared de pladur?",
                          a: "Sí, pero hay que revisar la estructura, peso de la TV, soporte y puntos de fijación. En algunos casos se necesitan fijaciones especiales o refuerzo.",
                        },
                        {
                          q: "¿Instaláis soportes articulados?",
                          a: "Sí. Se pueden instalar soportes fijos, inclinables y articulados si son compatibles con la TV y adecuados para la pared.",
                        },
                        {
                          q: "¿La TV queda nivelada?",
                          a: "Sí. Antes de fijar definitivamente se mide, se marca y se revisa la alineación para que la pantalla quede recta.",
                        },
                        {
                          q: "¿Podéis ocultar los cables?",
                          a: "Sí. Se puede usar canaleta exterior, rutas limpias o cable management según la pared, enchufes y dispositivos.",
                        },
                        {
                          q: "¿Tengo que comprar el soporte antes?",
                          a: "Puedes comprarlo tú o pedir recomendación antes de la cita. Lo importante es que sea compatible con el tamaño y VESA de la TV.",
                        },
                        {
                          q: "¿Instaláis TV Samsung Frame?",
                          a: "Sí. Samsung Frame requiere un montaje más cuidadoso para conseguir un acabado decorativo, recto y limpio.",
                        },
                        {
                          q: "¿Montáis TVs de 75 y 85 pulgadas?",
                          a: "Sí. Las TVs grandes necesitan más cuidado, soporte adecuado y revisión de pared antes de instalar.",
                        },
                        {
                          q: "¿Trabajáis en bares y oficinas?",
                          a: "Sí. También se instalan pantallas en oficinas, salas de reuniones, bares, cafeterías, restaurantes y locales comerciales.",
                        },
                        {
                          q: "¿Qué fotos tengo que enviar?",
                          a: "Lo ideal es enviar foto de la TV, soporte, pared, enchufes cercanos y zona donde quieres instalarla.",
                        },
                      ]
                    : [
                        {
                          q: "How much does a TV installer cost in Valencia?",
                          a: "Basic TV wall mounting starts from €49. The final price depends on TV size, wall type, bracket, height, cable concealment and job complexity.",
                        },
                        {
                          q: "Can a TV be mounted on drywall?",
                          a: "Yes, but the structure, TV weight, bracket and fixing points must be checked. Some cases require special fixings or reinforcement.",
                        },
                        {
                          q: "Do you install full-motion brackets?",
                          a: "Yes. Fixed, tilting and full-motion brackets can be installed if compatible with the TV and suitable for the wall.",
                        },
                        {
                          q: "Will the TV be level?",
                          a: "Yes. The position is measured, marked and checked before final fixing so the screen stays straight.",
                        },
                        {
                          q: "Can you hide the cables?",
                          a: "Yes. External raceways, clean routing or cable management can be used depending on wall, outlets and devices.",
                        },
                        {
                          q: "Do I need to buy the bracket first?",
                          a: "You can buy it yourself or ask for a recommendation before the visit. It must be compatible with the TV size and VESA.",
                        },
                        {
                          q: "Do you install Samsung Frame TVs?",
                          a: "Yes. Samsung Frame requires more careful mounting to achieve a decorative, straight and clean finish.",
                        },
                        {
                          q: "Do you mount 75 and 85 inch TVs?",
                          a: "Yes. Large TVs need more care, suitable brackets and wall checking before installation.",
                        },
                        {
                          q: "Do you work in bars and offices?",
                          a: "Yes. Screens can be installed in offices, meeting rooms, bars, cafés, restaurants and commercial spaces.",
                        },
                        {
                          q: "What photos should I send?",
                          a: "Ideally, send photos of the TV, bracket, wall, nearby outlets and the area where you want it installed.",
                        },
                      ]
                  ).map((item, index) => (
                    <div
                      key={item.q}
                      className={index === 0 ? "" : "border-t border-gray-200 pt-7"}
                    >
                      <h3 className="text-lg font-black text-black">
                        {item.q}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl sm:p-10">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-black tracking-tight text-black sm:text-4xl">
                    {copy.finalTitle}
                  </h2>

                  <p className="mt-4 text-base leading-8 text-gray-600">
                    {copy.finalText}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {copy.finalNote}
                  </p>
                </div>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <Link
                    href={estimateHref}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 text-sm font-black text-black shadow-lg transition hover:scale-[1.02]"
                  >
                    {copy.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-7 py-4 text-sm font-bold text-black shadow-md transition hover:scale-[1.02]"
                  >
                    <PhoneCall className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 text-center text-sm text-gray-500">
            {isEs
              ? "THEVULGO • Instalador de TV en Valencia • Montaje de TV en pared • Ocultación de cables • Samsung Frame • TVs grandes"
              : "THEVULGO • TV Installer in Valencia • TV wall mounting • Cable concealment • Samsung Frame • Large TVs"}
          </div>
        </div>
      </section>
    </div>
  );
}