"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  DoorOpen,
  Wrench,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  BadgeCheck,
  Hammer,
  KeyRound,
  SquareDashedMousePointer,
  House,
} from "lucide-react";

export default function DoorsClient() {
  const router = useRouter();
  const locale = useLocale();
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=doors`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, me gustaría pedir presupuesto para puertas y herrajes en Valencia."
      : "Hi! I’d like an estimate for doors and hardware services in Valencia."
  );

  const whatsappHref = `https://wa.me/34610076942?text=${whatsappText}`;

  const copy = {
    badge: "THEVULGO • Valencia",

    heroTitle: isEs ? "Puertas y herrajes" : "Doors & Hardware",
    heroSubtitle: isEs
      ? "Ajustes de puertas, cambio de manillas, reparación de bisagras, corrección de pestillos y pequeños trabajos de herrajes en Valencia para pisos, casas y propiedades en alquiler."
      : "Door adjustments, handle replacement, hinge fixes, latch corrections and small hardware work in Valencia for apartments, homes and rental properties.",

    ctaTitle: isEs
      ? "¿Necesitas un presupuesto exacto para puertas o herrajes?"
      : "Need an exact door or hardware estimate?",
    ctaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para cambio de manillas, reparación de bisagras, ajuste de pestillos o varias tareas pequeñas de puertas y herrajes en una sola visita."
      : "Send your request now and get a clear estimate for handle replacement, hinge fixes, latch adjustment or several small door and hardware tasks in one visit.",
    estimateButton: isEs ? "Pedir presupuesto" : "Get estimate",

    seoBadge: isEs
      ? "Ajustes de puertas y herrajes • Valencia"
      : "Door adjustments & hardware • Valencia",
    seoTitle: isEs
      ? "Servicios de puertas y herrajes en Valencia"
      : "Door and Hardware Services in Valencia",

    includedTitle: isEs ? "Qué está incluido" : "What is included",

    whyBadge: isEs
      ? "Por qué los clientes eligen este servicio"
      : "Why clients choose this service",
    whyTitle: isEs
      ? "Pequeños arreglos de puertas que mejoran mucho el uso diario"
      : "Small door fixes that noticeably improve daily use",
    whyText: isEs
      ? "Este servicio es una buena opción cuando las puertas y herrajes no están gravemente dañados, pero necesitan ajuste práctico, trabajo limpio de herrajes y mejor uso diario."
      : "This service is a strong option when doors and fittings are not badly damaged, but clearly need practical adjustment, cleaner hardware work and better everyday usability.",

    faqTitle: isEs
      ? "Preguntas frecuentes sobre puertas y herrajes"
      : "Doors & Hardware FAQ",

    finalCtaTitle: isEs
      ? "¿Listo para reservar tu arreglo de puerta o herrajes?"
      : "Ready to book your door or hardware fix?",
    finalCtaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para ajuste de puerta, cambio de manilla, reparación de bisagras o varias tareas pequeñas de herrajes en Valencia."
      : "Send your request now and get a clear estimate for door adjustment, handle replacement, hinge fixes or several small hardware tasks in Valencia.",

    finalNote: isEs
      ? "El precio final depende del número de puertas, tipo de herraje, acceso y alcance total del trabajo."
      : "Final price depends on the number of doors, hardware type, access and total task scope.",
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
      title: isEs ? "Ajustes limpios" : "Clean adjustments",
      text: isEs
        ? "Trabajo limpio de herrajes, mejor alineación y mejoras prácticas de uso."
        : "Neat hardware work, cleaner alignment and practical usability improvements.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Precio transparente" : "Transparent pricing",
      text: isEs
        ? "Precios iniciales claros y estimación práctica antes de empezar."
        : "Clear starting prices and practical estimate logic before work begins.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Ajuste de alineación de puerta" : "Door alignment adjustment",
      desc: isEs
        ? "Corrección básica de alineación para puertas que rozan, quedan desiguales o no cierran con suavidad. Una opción práctica para pequeños problemas de uso en pisos y casas."
        : "Basic door alignment correction for doors that rub, sit unevenly or do not close as smoothly as they should. A practical option for small usability issues in apartments and homes.",
      price: isEs ? "desde €39" : "from €39",
      icon: <DoorOpen className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Cambio de manilla" : "Handle replacement",
      desc: isEs
        ? "Cambio de manillas desgastadas, dañadas o antiguas por herrajes más limpios y de mejor aspecto. Adecuado para puertas interiores y configuraciones comunes del hogar."
        : "Replacement of worn, damaged or outdated door handles with cleaner, better-looking hardware. Suitable for interior doors and common household setups.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Reparación de manilla suelta" : "Loose handle fixing",
      desc: isEs
        ? "Apretado y estabilización de manillas, pomos y piezas visibles que se han aflojado o se sienten poco fiables en el uso diario."
        : "Tightening and stabilizing loose handles, knobs and visible fittings that have started moving or feeling unreliable in daily use.",
      price: isEs ? "desde €25" : "from €25",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Ajuste de pestillo" : "Latch adjustment",
      desc: isEs
        ? "Pequeñas correcciones del pestillo cuando la puerta no engancha correctamente o necesita mejor alineación de cierre."
        : "Small latch corrections when the door does not catch properly or needs better closing alignment. Useful for everyday functionality issues.",
      price: isEs ? "desde €29" : "from €29",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Ajuste de cerradero" : "Strike plate adjustment",
      desc: isEs
        ? "Ajuste del cerradero y herrajes visibles relacionados para mejorar cómo cierra la puerta y cómo encaja con el marco."
        : "Adjustment of strike plates and related visible hardware to improve how the door closes and lines up with the frame.",
      price: isEs ? "desde €29" : "from €29",
      icon: <SquareDashedMousePointer className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Apretado de bisagras" : "Hinge tightening",
      desc: isEs
        ? "Apretado y pequeñas correcciones de bisagras que se han aflojado con el tiempo y afectan la apertura o cierre de la puerta."
        : "Tightening and small corrections of hinges that have loosened over time and started affecting the way the door opens or closes.",
      price: isEs ? "desde €25" : "from €25",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de burlete de puerta" : "Door seal replacement",
      desc: isEs
        ? "Cambio o ajuste de burletes desgastados para reducir corrientes de aire, ruido y mejorar el cierre. Útil para mejor aislamiento y encaje limpio."
        : "Replacement or adjustment of worn door seals to reduce drafts, noise and improve closing comfort. Useful for better insulation and cleaner door fit.",
      price: isEs ? "desde €29" : "from €29",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de bisagras" : "Hinge replacement",
      desc: isEs
        ? "Cambio de bisagras visibles cuando el herraje compatible ya está disponible o proporcionado. Buena opción para piezas desgastadas o dañadas."
        : "Replacement of visible door hinges where compatible hardware is already available or provided. Good for worn or damaged fittings.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Hammer className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Ajuste de cierrapuertas" : "Door closer adjustment",
      desc: isEs
        ? "Ajuste básico de cierrapuertas compatibles para mejorar el movimiento, reducir golpes o hacer que la apertura y cierre sean más suaves."
        : "Basic adjustment of compatible closers to improve door movement, reduce slamming or make the opening and closing action feel smoother.",
      price: isEs ? "desde €39" : "from €39",
      icon: <DoorOpen className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de tope de puerta" : "Door stopper installation",
      desc: isEs
        ? "Instalación de topes de puerta simples para proteger paredes, muebles y manillas de golpes repetidos."
        : "Installation of simple door stoppers to protect walls, furniture and handles from repeated impact damage.",
      price: isEs ? "desde €25" : "from €25",
      icon: <House className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de bombín" : "Lock cylinder replacement",
      desc: isEs
        ? "Cambio de bombines compatibles cuando la pieza nueva ya está disponible y la instalación es adecuada para un trabajo sencillo."
        : "Replacement of compatible visible lock cylinders when the new part is already available and the setup is suitable for straightforward work.",
      price: isEs ? "desde €39" : "from €39",
      icon: <KeyRound className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Herrajes de muebles y puertas interiores" : "Cabinet and interior door hardware",
      desc: isEs
        ? "Pequeñas correcciones en puertas de muebles, puertas interiores y mecanismos visibles que necesitan mejora."
        : "Small hardware corrections for cabinet doors, utility doors and interior fittings where hinges, handles or visible mechanisms need improvement.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Varias tareas de puertas y herrajes" : "Multiple door & hardware tasks",
      desc: isEs
        ? "Ideal si tienes varios pequeños problemas de puertas o herrajes. En vez de reservar visitas separadas, se pueden resolver en una sola sesión eficiente: manillas, bisagras, pestillos, alineación y ajustes menores."
        : "Ideal if you have multiple small door or hardware problems. Instead of booking separate visits, everything can be fixed in one efficient session — handles, hinges, latches, alignment and minor adjustments. Faster, more convenient and usually more cost-effective than splitting the work.",
      price: isEs ? "presupuesto personalizado" : "custom quote",
      icon: <Hammer className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
  ];

  const whyChoose = isEs
    ? [
        "Útil para pisos, casas y propiedades en alquiler",
        "Buena opción para puertas que se sienten desajustadas, sueltas o incómodas",
        "Varias tareas pequeñas de puertas y herrajes pueden combinarse en una visita",
        "Servicio práctico para problemas visibles de uso diario en casa",
        "Mejor alineación y uso sin complicar demasiado el trabajo",
        "Presupuesto claro antes de reservar con alcance práctico",
      ]
    : [
        "Useful for apartments, homes and rental properties",
        "Good for doors that feel slightly off, loose or inconvenient",
        "Several small door and hardware tasks can be combined in one visit",
        "Practical service for visible daily-use problems around the home",
        "Cleaner alignment and better usability without overcomplicating the job",
        "Clear estimate before booking with practical scope",
      ];

  const includedItems = isEs
    ? [
        "Ajuste de alineación y cierre de puertas",
        "Cambio de manillas y reparación de manillas sueltas",
        "Apretado y cambio de bisagras",
        "Corrección de pestillos y cerraderos",
        "Ajuste de cierrapuertas y topes",
        "Cambio de bombín cuando sea adecuado",
        "Pequeños arreglos de herrajes en muebles y puertas interiores",
        "Varias tareas menores de puertas y herrajes en una sola visita",
      ]
    : [
        "Door alignment and closing adjustment",
        "Handle replacement and loose handle fixing",
        "Hinge tightening and hinge replacement",
        "Latch and strike plate correction",
        "Door closer and stopper adjustments",
        "Lock cylinder replacement where suitable",
        "Small cabinet and interior door hardware fixes",
        "Several minor door and hardware tasks in one visit",
      ];

  const faqItems = [
    {
      q: isEs
        ? "¿Qué problemas de puertas incluye esta página?"
        : "What kind of door problems are included on this page?",
      a: isEs
        ? "Esta página está pensada para tareas prácticas pequeñas de puertas y herrajes: cambio de manillas, apretado de bisagras, ajuste de pestillos, corrección de cerraderos, cambio de bombín y mejoras de uso en puertas interiores."
        : "This page is designed for small practical door and hardware tasks such as handle replacement, hinge tightening, latch adjustment, strike plate correction, lock cylinder replacement and general usability improvements for interior doors and common household setups.",
    },
    {
      q: isEs
        ? "¿Se pueden hacer varias tareas pequeñas en una sola visita?"
        : "Can several small door tasks be done in one visit?",
      a: isEs
        ? "Sí. Esta categoría funciona muy bien cuando se agrupan varios problemas menores, por ejemplo una manilla suelta, un pestillo desalineado y la instalación de un tope en la misma cita."
        : "Yes. This category works especially well when several minor issues are grouped together, for example a loose handle, one misaligned latch and a door stopper installation in the same appointment.",
    },
    {
      q: isEs ? "¿Instalas puertas completamente nuevas?" : "Do you install completely new doors?",
      a: isEs
        ? "Esta página está enfocada en ajustes menores, cambio de herrajes visibles y correcciones prácticas, no en instalación completa de puertas o carpintería mayor."
        : "This page is focused on minor adjustments, visible hardware replacement and practical corrections rather than full door installation or major carpentry work.",
    },
    {
      q: isEs
        ? "¿Puedes arreglar una puerta que roza o cierra mal?"
        : "Can you fix a door that rubs or closes badly?",
      a: isEs
        ? "Ajustes básicos de alineación, apretado de bisagras y correcciones de pestillo o cerradero suelen mejorar cómo se mueve y cierra la puerta."
        : "Basic alignment corrections, hinge tightening and latch or strike plate adjustments can often improve how the door moves and closes in daily use.",
    },
    {
      q: isEs ? "¿Cambias cerraduras?" : "Do you replace locks?",
      a: isEs
        ? "Se puede incluir el cambio de bombín visible compatible cuando la instalación es sencilla y adecuada para este tipo de servicio."
        : "Compatible visible lock cylinder replacement can be included where the setup is straightforward and suitable for this kind of service.",
    },
    {
      q: isEs
        ? "¿Este servicio sirve para pisos de alquiler?"
        : "Is this service useful for rental apartments?",
      a: isEs
        ? "Sí. Los arreglos de puertas y herrajes son muy comunes en propiedades de alquiler, mudanzas y mejoras generales del hogar."
        : "Yes. Door and hardware fixes are very common in rental properties, move-ins, move-outs and general home refresh work where small usability issues need to be corrected.",
    },
    {
      q: isEs
        ? "¿También trabajas con puertas de muebles o puertas interiores pequeñas?"
        : "Do you also work on cabinet doors or utility doors?",
      a: isEs
        ? "Sí. Pequeñas correcciones de herrajes en puertas de muebles, puertas interiores y elementos similares pueden encajar en esta categoría."
        : "Yes. Small hardware corrections on cabinet doors, utility doors and similar interior fittings can often fit naturally into this service category.",
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
                  className={`rounded-2xl border border-yellow-400 bg-white p-8 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] min-h-[260px] ${s.className || ""}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                    {s.icon}
                  </div>

                  <h3 className="mt-5 text-[30px] leading-tight font-extrabold text-black md:text-2xl">
                    {s.title}
                  </h3>

                  <p className="mt-4 text-[15px] sm:text-base leading-8 text-gray-700">
                    {s.desc}
                  </p>

                  <div className="mt-5 text-base font-extrabold text-yellow-500">
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
                        <strong>puertas y herrajes en Valencia</strong> para pisos,
                        casas y propiedades en alquiler. THEVULGO ayuda con problemas
                        visibles comunes como manillas sueltas, mal cierre, pestillos
                        desajustados, desgaste de bisagras y pequeñas tareas de cambio
                        de herrajes que afectan el uso diario.
                      </p>

                      <p>
                        Las puertas son uno de los elementos más usados en una vivienda,
                        por eso incluso los pequeños problemas se notan rápidamente. Una
                        manilla suelta, un pestillo que no engancha, una bisagra que
                        desplaza la puerta o un cierrapuertas mal ajustado puede hacer que
                        el espacio se sienta menos cómodo y menos terminado.
                      </p>

                      <p>
                        Esta página está diseñada para ajustes prácticos de puertas,
                        reparaciones visibles de herrajes y pequeñas mejoras de uso diario,
                        no para carpintería completa o instalación mayor de puertas.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Professional{" "}
                        <strong>door and hardware services in Valencia</strong> for
                        apartments, homes and rental properties. THEVULGO helps with
                        common visible door issues such as loose handles, poor closing
                        alignment, latch problems, hinge wear and small hardware replacement
                        tasks that affect everyday usability.
                      </p>

                      <p>
                        Doors are one of the most frequently used elements in a home, which
                        means even small problems become noticeable very quickly. A loose
                        handle, a latch that does not catch, a hinge that shifts the door out
                        of line or a closer that behaves badly can make the whole space feel
                        less finished and less comfortable.
                      </p>

                      <p>
                        This page is designed for practical door adjustment, visible hardware
                        fixes and small usability improvements rather than full carpentry or
                        major door installation work.
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
                        Un buen servicio de puertas y herrajes no solo consiste en que la
                        puerta vuelva a funcionar. También mejora cómo se siente la vivienda
                        en el uso diario: movimiento más suave, cierre más limpio, piezas más
                        estables y mejor acabado visual.
                      </p>

                      <p>
                        THEVULGO trabaja principalmente en{" "}
                        <strong>Valencia y alrededores</strong>, ayudando a resolver pequeños
                        problemas molestos del hogar que afectan la comodidad, presentación y
                        uso diario.
                      </p>

                      <p>
                        Antes de empezar, el cliente recibe un presupuesto transparente basado
                        en el número de puertas, tipo de herraje, estado visible y alcance
                        total del trabajo.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Good door and hardware service is not only about making the door work
                        again. It is also about improving how the home feels in daily use —
                        smoother movement, cleaner closing, more stable fittings and a better
                        visual finish.
                      </p>

                      <p>
                        THEVULGO works mainly in{" "}
                        <strong>Valencia and nearby areas</strong>, helping clients solve
                        small but annoying household issues that affect convenience,
                        presentation and everyday comfort.
                      </p>

                      <p>
                        Before work begins, clients receive a transparent estimate based on
                        the number of doors, type of hardware, visible condition and total
                        task scope.
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