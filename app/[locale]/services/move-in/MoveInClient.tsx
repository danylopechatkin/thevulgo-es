"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  Clock3,
  CheckCircle2,
  ShieldCheck,
  BadgeCheck,
  Home,
  Package,
  Sofa,
  Tv,
  Lightbulb,
  Drill,
  Wrench,
  Hammer,
  Boxes,
  KeyRound,
  DoorOpen,
  Bath,
  ChefHat,
  Router,
  MonitorSmartphone,
} from "lucide-react";

export default function MoveInClient() {
  const router = useRouter();
  const locale = useLocale();
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=move-in`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, me gustaría pedir presupuesto para preparación de piso y mudanza en Valencia."
      : "Hi! I’d like an estimate for apartment and move-in setup services in Valencia."
  );

  const whatsappHref = `https://wa.me/34610076942?text=${whatsappText}`;

  const copy = {
    badge: "THEVULGO • Valencia",

    heroTitle: isEs ? "Preparación de piso y mudanza" : "Apartment & Move-In Setup",
    heroSubtitle: isEs
      ? "Montaje de muebles, iluminación, cortinas, montaje en pared, organización de habitaciones, ayuda con cajas y preparación práctica del piso en Valencia."
      : "Furniture assembly, lighting, curtains, mounting, room setup, unpacking help and practical apartment preparation in Valencia.",

    ctaTitle: isEs
      ? "¿Necesitas un presupuesto exacto para preparar tu piso?"
      : "Need an exact apartment setup estimate?",
    ctaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para muebles, luces, cortinas, organización, ayuda con cajas o varias tareas de mudanza en una sola visita."
      : "Send your request now and get a clear estimate for furniture, lights, curtains, room setup, unpacking or multiple move-in tasks in one visit.",
    estimateButton: isEs ? "Pedir presupuesto" : "Get estimate",

    seoBadge: isEs ? "Preparación de mudanza • Valencia" : "Move-in preparation • Valencia",
    seoTitle: isEs
      ? "Servicios de preparación de piso en Valencia"
      : "Apartment Setup Services in Valencia",
    includedTitle: isEs ? "Qué está incluido" : "What is included",

    whyBadge: isEs
      ? "Por qué los clientes eligen este servicio"
      : "Why clients choose this service",
    whyTitle: isEs
      ? "Múdate más rápido, con menos estrés y menos tareas pendientes"
      : "Move in faster, with less stress and fewer unfinished tasks",
    whyText: isEs
      ? "Este servicio es ideal cuando el piso necesita preparación práctica, instalaciones básicas y mejor organización sin convertir todo en muchas reservas separadas."
      : "This service is ideal when the apartment needs practical setup work, basic installation and better organization without turning the process into a long series of separate bookings.",

    faqTitle: isEs
      ? "Preguntas frecuentes sobre preparación de piso y mudanza"
      : "Apartment & Move-In Setup FAQ",

    finalCtaTitle: isEs
      ? "¿Listo para reservar la preparación de tu piso?"
      : "Ready to book your apartment setup?",
    finalCtaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para muebles, iluminación, cortinas, organización o varias tareas de mudanza en Valencia."
      : "Send your request now and get a clear estimate for furniture, lighting, curtains, room setup or multiple move-in tasks in Valencia.",

    finalNote: isEs
      ? "El precio final depende del tamaño del piso, número de tareas, muebles, instalaciones y alcance total de la preparación."
      : "Final price depends on apartment size, number of tasks, furniture, installations and total setup scope.",
  };

  const trustPoints = [
    {
      title: isEs ? "Respuesta rápida" : "Fast response",
      text: isEs
        ? "Comunicación rápida y próximos pasos claros antes de la cita."
        : "Quick communication and clear next steps before the appointment.",
      icon: <Clock3 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Todo en una visita" : "All-in-one setup",
      text: isEs
        ? "Varias tareas del piso completadas en una sola visita organizada."
        : "Multiple apartment tasks completed in one organized visit.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Precio transparente" : "Transparent pricing",
      text: isEs
        ? "Estimación clara antes de empezar, según el alcance completo de la preparación."
        : "Clear estimate logic before work begins, based on full setup scope.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Preparación completa del piso" : "Full apartment setup",
      desc: isEs
        ? "Preparación completa de un piso nuevo, vacío o recién alquilado: montaje de muebles, iluminación, cortinas, montaje en pared, organización y acabados prácticos."
        : "Complete setup of a new, empty or recently rented apartment including furniture assembly, lighting installation, curtain fitting, wall mounting, room organization and practical finishing tasks.",
      price: isEs ? "presupuesto personalizado" : "custom quote",
      icon: <Home className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Preparación para alquiler / Airbnb" : "Rental-ready apartment setup",
      desc: isEs
        ? "Preparación del piso para inquilinos, alquiler de larga duración o Airbnb: muebles, instalaciones esenciales, distribución, acabados visibles y puesta a punto."
        : "Preparation of the apartment for tenants, long-term rental or Airbnb including furniture setup, essential installations, layout improvements, visual finishing details and practical room readiness.",
      price: isEs ? "presupuesto personalizado" : "custom quote",
      icon: <Home className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Preparación de mudanza en el mismo día" : "Same-day move-in setup",
      desc: isEs
        ? "Servicio rápido para dejar el piso listo en un día con muebles, luces, cortinas e instalaciones esenciales."
        : "Fast-track setup service focused on getting your apartment ready in one day with furniture, lights, curtains and essential installations completed efficiently.",
      price: isEs ? "desde €79" : "from €79",
      icon: <Clock3 className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Toques finales y acabados" : "Final touch & finishing setup",
      desc: isEs
        ? "Ajustes finales y pequeñas instalaciones para que el piso se vea completo: espejos, decoración, accesorios y detalles visibles."
        : "Final adjustments and small installations that make the apartment feel complete — mirrors, decor, alignment fixes, accessories and visual finishing details.",
      price: isEs ? "desde €45" : "from €45",
      icon: <CheckCircle2 className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Montaje de muebles" : "Furniture assembly",
      desc: isEs
        ? "Montaje de camas, mesas, sillas, estantes, muebles pequeños y otros elementos necesarios para usar el piso desde el primer día."
        : "Assembly of beds, tables, chairs, shelves, small cabinets and other furniture needed to make the apartment functional from day one.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Sofa className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Montaje y configuración de TV" : "TV mounting & setup",
      desc: isEs
        ? "Montaje de TV y preparación de la zona con mejor alineación y distribución más terminada."
        : "Mounting TVs and setting up the viewing area with cleaner alignment and a more finished room layout.",
      price: isEs ? "desde €49" : "from €49",
      icon: <Tv className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de iluminación" : "Lighting installation",
      desc: isEs
        ? "Instalación de luces de techo, lámparas y elementos básicos de iluminación para dejar el piso listo."
        : "Installation of ceiling lights, lamps and basic room lighting fixtures for a ready-to-live apartment setup.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de cortinas y estores" : "Curtain & blind installation",
      desc: isEs
        ? "Instalación de rieles, barras, estores y sistemas simples para privacidad y comodidad."
        : "Installation of curtain rails, rods, blinds and simple window covering systems for privacy and comfort.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Montaje de espejos y accesorios" : "Mirror & wall accessory mounting",
      desc: isEs
        ? "Montaje de espejos, ganchos, estantes y accesorios prácticos para que el piso se vea más completo y organizado."
        : "Mounting mirrors, hooks, shelves and practical wall accessories to make the apartment feel more complete and organized.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Preparación de dormitorio" : "Bedroom setup & finishing",
      desc: isEs
        ? "Preparación práctica del dormitorio: cama, mesitas, espejos, pequeños accesorios y detalles esenciales."
        : "Practical bedroom setup including bed positioning, bedside items, mirrors, small fittings and essential finishing touches to make the room feel ready from day one.",
      price: isEs ? "desde €49" : "from €49",
      icon: <Home className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Ayuda con cajas y organización" : "Unpacking & room setup",
      desc: isEs
        ? "Ayuda para desempaquetar cajas, colocar muebles y ubicar objetos esenciales para que el piso sea funcional más rápido."
        : "Help with unpacking boxes, arranging furniture and placing essential items so the apartment becomes functional faster.",
      price: isEs ? "desde €49" : "from €49",
      icon: <Boxes className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Organización del hogar" : "Home organization setup",
      desc: isEs
        ? "Organización básica de habitaciones, colocación de muebles y pequeñas mejoras de distribución."
        : "Basic room organization, furniture placement and small layout improvements to make better everyday use of the space.",
      price: isEs ? "desde €45" : "from €45",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Pequeños arreglos y ajustes" : "Minor fixes & adjustments",
      desc: isEs
        ? "Pequeñas correcciones, ajuste de piezas y mejora de uso en diferentes zonas del piso."
        : "Small practical corrections, tightening fittings and improving usability across multiple parts of the apartment.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Ajustes de puertas y manillas" : "Door & handle adjustments",
      desc: isEs
        ? "Ajuste básico de puertas, manillas y herrajes visibles para mejorar el uso diario."
        : "Basic adjustment of doors, handles and visible hardware to improve how the apartment feels in daily use.",
      price: isEs ? "desde €29" : "from €29",
      icon: <DoorOpen className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Preparación de cocina" : "Kitchen move-in setup",
      desc: isEs
        ? "Preparación básica de cocina, pequeñas instalaciones y organización para uso inmediato."
        : "Basic setup of kitchen items, small installations and practical preparation so the kitchen is ready for immediate daily use.",
      price: isEs ? "desde €49" : "from €49",
      icon: <ChefHat className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Preparación de baño" : "Bathroom move-in setup",
      desc: isEs
        ? "Instalación de espejos, soportes, estantes y elementos esenciales de baño."
        : "Installation of mirrors, holders, shelves and small bathroom essentials to complete the bathroom quickly and cleanly.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Bath className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Configuración de router y dispositivos" : "Router & device setup",
      desc: isEs
        ? "Configuración básica de router, dispositivos inteligentes y electrónica del hogar."
        : "Basic setup of routers, smart devices and home electronics to get the apartment connected and ready to use.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Router className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Preparación de escritorio / workspace" : "Workspace / desk setup",
      desc: isEs
        ? "Montaje y preparación de escritorios, zonas de trabajo y elementos esenciales para trabajar desde casa."
        : "Assembly and setup of desks, workstations and home office essentials for practical work-from-home use.",
      price: isEs ? "desde €39" : "from €39",
      icon: <MonitorSmartphone className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Preparación de entrada y llaves" : "Entry & key area setup",
      desc: isEs
        ? "Preparación de la zona de entrada: ganchos, pequeño almacenamiento, espejos y accesorios prácticos."
        : "Setup of entry-area essentials such as hooks, small storage, mirrors and practical accessories near the entrance.",
      price: isEs ? "desde €29" : "from €29",
      icon: <KeyRound className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Varias tareas de mudanza" : "Multiple move-in tasks",
      desc: isEs
        ? "La mejor opción si necesitas muchas tareas del piso en una sola visita: muebles, iluminación, montaje, organización y pequeños arreglos."
        : "Best option if you need many apartment setup tasks done in one visit. Furniture, lighting, mounting, organization and small fixes can all be grouped for faster move-in.",
      price: isEs ? "presupuesto personalizado" : "custom quote",
      icon: <Home className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
  ];

  const whyChoose = isEs
    ? [
        "Perfecto para pisos nuevos, alquileres y días de mudanza",
        "Útil cuando quieres hacerlo todo en una sola visita organizada",
        "Ayuda a que el piso sea funcional más rápido y con menos estrés",
        "Resultado visual más limpio con mejor organización de muebles y habitaciones",
        "Servicio práctico para instalaciones pequeñas, preparación y acabados",
        "Presupuesto claro antes de reservar con alcance definido",
      ]
    : [
        "Perfect for new apartments, rentals and move-in days",
        "Useful when you want everything done in one organized visit",
        "Helps make the apartment functional faster and with less stress",
        "Cleaner visual result with better furniture and room setup",
        "Practical service for small installs, setup and finishing tasks",
        "Clear estimate before booking with defined scope",
      ];

  const includedItems = isEs
    ? [
        "Montaje de muebles y preparación práctica de habitaciones",
        "Instalación de cortinas, estores e iluminación",
        "Montaje de TV y accesorios de pared",
        "Ayuda con cajas y organización básica del piso",
        "Elementos esenciales de cocina y baño",
        "Pequeños arreglos y mejoras de uso",
        "Configuración de router, dispositivos y zona de entrada",
        "Varias tareas de mudanza agrupadas en una sola visita",
      ]
    : [
        "Furniture assembly and practical room setup",
        "Curtain, blind and lighting installation",
        "TV mounting and wall accessory installation",
        "Unpacking help and basic apartment organization",
        "Kitchen and bathroom move-in essentials",
        "Small fixes and usability improvements",
        "Router, device and entry-area setup",
        "Multiple move-in tasks grouped into one visit",
      ];

  const faqItems = [
    {
      q: isEs
        ? "¿Qué incluye la preparación de piso y mudanza?"
        : "What is included in apartment and move-in setup?",
      a: isEs
        ? "Incluye tareas prácticas como montaje de muebles, instalación de luces, cortinas, TV, accesorios de pared, ayuda con cajas, organización de habitaciones y pequeños arreglos para dejar el piso listo."
        : "This page covers practical move-in tasks such as furniture assembly, lighting installation, curtain fitting, TV setup, wall mounting, unpacking help, room organization and small apartment fixes that help make the space ready for living.",
    },
    {
      q: isEs
        ? "¿Se pueden hacer varias tareas de mudanza en una sola visita?"
        : "Can several move-in tasks be done in one visit?",
      a: isEs
        ? "Sí. Es una de las principales ventajas de este servicio. Muebles, luces, cortinas, espejos, pequeños arreglos y organización se pueden agrupar en una cita."
        : "Yes. This is one of the main advantages of this service. Furniture, lights, curtains, mirrors, small fixes and room setup tasks can often be grouped into one organized appointment.",
    },
    {
      q: isEs ? "¿Sirve para pisos de alquiler?" : "Is this service useful for rental apartments?",
      a: isEs
        ? "Sí. Es especialmente útil para pisos alquilados, Airbnb, mudanzas y para hacer que un piso nuevo se vea completo mucho más rápido."
        : "Yes. It is especially useful for rental apartments, newly rented flats, Airbnb preparation, relocation and making a new place feel complete much faster.",
    },
    {
      q: isEs ? "¿También ayudas a desempaquetar cajas?" : "Do you unpack boxes too?",
      a: isEs
        ? "Sí, se puede incluir ayuda básica con cajas y organización si encaja dentro del alcance de la visita."
        : "Basic unpacking help and practical room setup can be included where it fits the scope of the move-in visit and helps organize the apartment faster.",
    },
    {
      q: isEs
        ? "¿Puedes preparar también cocina y baño?"
        : "Can you set up kitchen and bathroom essentials too?",
      a: isEs
        ? "Sí. Pequeñas tareas de cocina y baño pueden incluirse dentro de una preparación general del piso."
        : "Yes. Small kitchen and bathroom setup tasks can be included as part of a wider apartment preparation visit.",
    },
    {
      q: isEs
        ? "¿Tengo que tener todos los muebles y accesorios preparados?"
        : "Do I need to have all furniture and accessories ready before the visit?",
      a: isEs
        ? "Lo ideal es que sí. El servicio funciona mejor cuando los muebles, accesorios y elementos principales ya están en el piso listos para instalar o colocar."
        : "Ideally yes. The service works best when the main furniture, fittings and apartment items are already on site and ready to be installed or arranged.",
    },
    {
      q: isEs
        ? "¿Es útil para un piso vacío?"
        : "Is this page good for people moving into an empty apartment?",
      a: isEs
        ? "Sí. Está pensado precisamente para convertir un piso vacío o incompleto en un hogar práctico y listo para usar más rápido."
        : "Yes. This is exactly what the service is designed for — turning an empty or incomplete apartment into a practical, ready-to-use home faster and with less hassle.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <section className="relative py-16 sm:py-20 px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/35 blur-3xl" />
          <div className="absolute right-10 top-24 h-[320px] w-[320px] rounded-full bg-yellow-100/60 blur-3xl" />
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              {copy.badge}
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black">
              {copy.heroTitle}
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
              {copy.heroSubtitle}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                  {point.icon}
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-black">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-7">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
              {services.map((s, index) => (
                <div
                  key={`${s.title}-${index}`}
                  className={`rounded-2xl border border-yellow-400 bg-white p-7 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] min-h-[220px] ${s.className || ""}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                    {s.icon}
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold text-black">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-700">
                    {s.desc}
                  </p>

                  <div className="mt-4 text-sm font-extrabold text-yellow-500">
                    {s.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-yellow-400 bg-white p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                  {copy.ctaTitle}
                </h2>
                <p className="mt-3 text-gray-600 leading-8">
                  {copy.ctaText}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push(estimateHref)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition"
                >
                  {copy.estimateButton} <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-black shadow-md hover:scale-[1.02] transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <div className="w-full rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 lg:p-12 shadow-xl">
              <div className="max-w-5xl mx-auto">
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-semibold text-black">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    {copy.seoBadge}
                  </div>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-black">
                  {copy.seoTitle}
                </h2>

                <div className="mt-6 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base text-center sm:text-left">
                  {isEs ? (
                    <>
                      <p>
                        Servicios profesionales de{" "}
                        <strong>preparación de piso y mudanza en Valencia</strong> para
                        alquileres, viviendas y pisos recién ocupados. THEVULGO ayuda con
                        montaje de muebles, instalación de cortinas, luces, TV, organización,
                        ayuda con cajas y pequeños arreglos.
                      </p>

                      <p>
                        Mudarse a un piso nuevo no es solo meter cajas dentro. El piso necesita
                        luces, cortinas, muebles, espejos, accesorios, organización y detalles
                        prácticos antes de sentirse realmente listo para vivir.
                      </p>

                      <p>
                        Esta página está pensada para una preparación completa del piso:
                        tareas agrupadas, organización de habitaciones, ayuda con cajas, mejoras
                        de distribución y detalles finales que convierten un piso vacío en un hogar funcional.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Professional{" "}
                        <strong>apartment and move-in setup services in Valencia</strong>
                        for rentals, homes and newly occupied apartments. THEVULGO helps with
                        practical move-in work such as furniture assembly, curtain installation,
                        lighting setup, TV mounting, unpacking help, room organization and small apartment fixes.
                      </p>

                      <p>
                        Moving into a new place is often not just about carrying boxes inside.
                        The apartment still needs lights, curtains, furniture, mirrors, basic fittings,
                        better organization and practical everyday usability before it really feels ready to live in.
                      </p>

                      <p>
                        This page is designed for complete apartment preparation:
                        grouped installation tasks, room setup, unpacking support, practical layout improvements
                        and the small finishing details that turn an empty flat into a functional living space.
                      </p>
                    </>
                  )}
                </div>

                <div className="mt-8">
                  <h3 className="text-center sm:text-left text-lg font-extrabold text-black mb-4">
                    {copy.includedTitle}
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-[15px] sm:text-base">
                    {includedItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base">
                  {isEs ? (
                    <>
                      <p>
                        Una buena preparación de mudanza no consiste solo en instalar cosas por separado.
                        Se trata de hacer que todo el piso se sienta listo, organizado y mucho más cómodo
                        desde el primer día.
                      </p>

                      <p>
                        THEVULGO trabaja principalmente en{" "}
                        <strong>Valencia y alrededores</strong>, ayudando a entrar en el piso
                        más rápido con instalaciones prácticas, mejor organización y menos tareas pendientes.
                      </p>

                      <p>
                        Antes de empezar, el cliente recibe un presupuesto transparente basado en
                        el número de habitaciones, muebles, instalaciones y alcance total.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Good move-in setup is not only about installing separate things one by one.
                        It is about making the whole apartment feel ready, organized and much easier to live in from the start.
                      </p>

                      <p>
                        THEVULGO works mainly in{" "}
                        <strong>Valencia and nearby areas</strong>, helping clients move into apartments faster with practical setup work,
                        cleaner organization and fewer unfinished tasks left behind.
                      </p>

                      <p>
                        Before work begins, clients receive a transparent estimate based on
                        the number of rooms, furniture pieces, installations and total task scope.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 shadow-xl">
              <div className="max-w-5xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-3 py-1 text-xs font-semibold text-black">
                  <BadgeCheck className="h-4 w-4" />
                  {copy.whyBadge}
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-black">
                  {copy.whyTitle}
                </h2>

                <p className="mt-4 max-w-4xl text-gray-600 leading-8">
                  {copy.whyText}
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 text-gray-700 text-[15px] sm:text-base">
                  {whyChoose.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-[2px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => router.push(estimateHref)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition"
                  >
                    {copy.estimateButton} <ArrowRight className="h-4 w-4" />
                  </button>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-black shadow-md hover:scale-[1.02] transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 shadow-xl">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-10 text-center sm:text-left">
                  {copy.faqTitle}
                </h2>

                <div className="space-y-8">
                  {faqItems.map((item, index) => (
                    <div
                      key={item.q}
                      className={index === 0 ? "" : "border-t border-gray-200 pt-6"}
                    >
                      <h3 className="font-extrabold text-black text-lg">
                        {item.q}
                      </h3>
                      <p className="mt-2 text-gray-600 leading-7 text-sm sm:text-base">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                    {copy.finalCtaTitle}
                  </h2>
                  <p className="mt-3 text-gray-600 leading-8">
                    {copy.finalCtaText}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => router.push(estimateHref)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition"
                  >
                    {copy.estimateButton} <ArrowRight className="h-4 w-4" />
                  </button>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-black shadow-md hover:scale-[1.02] transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 text-center text-sm text-gray-500">
            {copy.finalNote}
          </div>
        </div>
      </section>
    </div>
  );
}