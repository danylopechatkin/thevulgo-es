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
  Bath,
  Wrench,
  Drill,
  Lightbulb,
  Ruler,
  Hammer,
  Package,
  Droplets,
  ShowerHead,
  SquareDashedMousePointer,
} from "lucide-react";
export default function BathroomClient() {
  const router = useRouter();
  const locale = useLocale();
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=bathroom`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, me gustaría pedir presupuesto para instalaciones de baño en Valencia."
      : "Hi! I’d like an estimate for bathroom installations in Valencia."
  );

  const whatsappHref = `https://wa.me/34610076942?text=${whatsappText}`;

  const copy = {
    badge: "THEVULGO • Valencia",

    heroTitle: isEs ? "Instalaciones de baño" : "Bathroom Installations",
    heroSubtitle: isEs
      ? "Espejos, muebles, accesorios, estantes, iluminación, sellado y trabajos prácticos de instalación en baños en Valencia."
      : "Bathroom mirrors, cabinets, accessories, shelves, lighting, sealing and practical fitting work in Valencia.",

    ctaTitle: isEs
      ? "¿Necesitas un presupuesto exacto para instalaciones de baño?"
      : "Need an exact bathroom installation estimate?",
    ctaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para espejos, muebles, accesorios, estantes o varias tareas de instalación en una sola visita."
      : "Send your request now and get a clear estimate for mirrors, cabinets, bathroom accessories, shelves or several installation tasks in one visit.",
    estimateButton: isEs ? "Pedir presupuesto" : "Get estimate",

    seoBadge: isEs
      ? "Instalación y montaje de baño • Valencia"
      : "Bathroom fitting & setup • Valencia",
    seoTitle: isEs
      ? "Servicios de instalación de baño en Valencia"
      : "Bathroom Installation Services in Valencia",

    includedTitle: isEs ? "Qué está incluido" : "What is included",

    whyBadge: isEs
      ? "Por qué los clientes eligen este servicio"
      : "Why clients choose this service",
    whyTitle: isEs
      ? "Detalles de baño que hacen que todo el espacio se vea más limpio y completo"
      : "Bathroom details that make the whole space feel cleaner and more complete",
    whyText: isEs
      ? "Este servicio es ideal cuando el baño necesita instalaciones prácticas, mejor alineación y un acabado visible más limpio sin convertir el trabajo en una reforma completa."
      : "This service is ideal when the bathroom needs practical installation work, cleaner alignment and better visible finishing without turning the job into a full renovation.",

    faqTitle: isEs
      ? "Preguntas frecuentes sobre instalaciones de baño"
      : "Bathroom Installations FAQ",

    finalCtaTitle: isEs
      ? "¿Listo para reservar tu instalación de baño?"
      : "Ready to book your bathroom installation?",
    finalCtaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para espejos, muebles, estantes, iluminación o varias tareas de baño en Valencia."
      : "Send your request now and get a clear estimate for mirrors, cabinets, shelves, lighting or multiple bathroom setup tasks in Valencia.",

    finalNote: isEs
      ? "El precio final depende del tipo de elemento, fijaciones, superficie de montaje, acceso y alcance total de la instalación."
      : "Final price depends on item type, fittings, mounting surface, access and total installation scope.",
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
      title: isEs ? "Acabado limpio" : "Clean finish",
      text: isEs
        ? "Montaje limpio, alineación recta y mejor aspecto final del baño."
        : "Neat fitting, straight alignment and a cleaner final bathroom look.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Precio transparente" : "Transparent pricing",
      text: isEs
        ? "Estimación clara antes de empezar, según el alcance y los accesorios."
        : "Clear estimate logic before work begins, based on scope and fittings.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Instalación de mueble de baño" : "Bathroom cabinet installation",
      desc: isEs
        ? "Instalación de muebles y unidades de almacenamiento de baño con atención a la alineación, separación y posición final."
        : "Installation of bathroom cabinets and storage units with attention to alignment, spacing and a cleaner final position.",
      price: isEs ? "desde €59" : "from €59",
      icon: <Bath className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Instalación de espejo" : "Mirror installation",
      desc: isEs
        ? "Montaje seguro de espejos de baño con altura correcta, alineación limpia y colocación visual equilibrada."
        : "Secure wall mounting of bathroom mirrors with proper height, cleaner alignment and more balanced visual placement.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de armario con espejo" : "Mirror cabinet fitting",
      desc: isEs
        ? "Instalación de armarios con espejo y unidades prácticas de almacenamiento para mejorar la organización del baño."
        : "Installation of mirror cabinets and practical storage units for better bathroom organization and everyday use.",
      price: isEs ? "desde €49" : "from €49",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de toallero" : "Towel holder installation",
      desc: isEs
        ? "Montaje de barras, ganchos y soportes para toallas con separación limpia y posición práctica."
        : "Mounting of towel bars, hooks and holder systems with clean spacing and practical everyday positioning.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de portarrollos" : "Toilet paper holder installation",
      desc: isEs
        ? "Instalación de portarrollos y pequeños accesorios de baño en posiciones cómodas y prácticas."
        : "Installation of toilet paper holders and small wall-mounted bathroom accessories in convenient positions.",
      price: isEs ? "desde €25" : "from €25",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de estante de baño" : "Bathroom shelf installation",
      desc: isEs
        ? "Instalación de estantes de baño para almacenamiento, cosméticos, decoración o uso diario con alineación limpia."
        : "Installation of bathroom shelves for storage, cosmetics, décor or everyday items with cleaner wall alignment.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de mueble bajo lavabo" : "Vanity unit installation",
      desc: isEs
        ? "Instalación de muebles bajo lavabo con atención a la posición, alineación y acabado alrededor del lavabo."
        : "Installation of bathroom vanity units with attention to positioning, alignment and a cleaner final furniture layout around the sink area.",
      price: isEs ? "desde €59" : "from €59",
      icon: <Bath className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de luz para espejo" : "Vanity light installation",
      desc: isEs
        ? "Instalación de iluminación compatible para zona de espejo o lavabo, con mejor visibilidad y acabado más completo."
        : "Installation of compatible vanity or mirror-area lighting for better visibility and a more finished bathroom setup.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Cambio de alcachofa de ducha" : "Shower head replacement",
      desc: isEs
        ? "Sustitución de alcachofas de ducha y piezas compatibles para un aspecto más limpio y mejor comodidad diaria."
        : "Replacement of shower heads and compatible fittings for cleaner look and better everyday comfort.",
      price: isEs ? "desde €29" : "from €29",
      icon: <ShowerHead className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cambio de manguera de ducha" : "Shower hose replacement",
      desc: isEs
        ? "Sustitución de mangueras de ducha y conectores visibles cuando la instalación es sencilla y compatible."
        : "Replacement of shower hoses and visible connectors where the setup is straightforward and compatible.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Droplets className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de accesorios de baño" : "Bathroom accessory installation",
      desc: isEs
        ? "Instalación de pequeños accesorios como soportes, barras, ganchos y elementos prácticos de pared."
        : "Installation of small bathroom accessories such as holders, rails, hooks and practical wall-mounted fittings.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Renovación de silicona" : "Silicone renewal",
      desc: isEs
        ? "Retirada y sustitución de silicona antigua alrededor de lavabos, muebles, bañeras y zonas de ducha."
        : "Removal and replacement of old silicone around sinks, vanities, bathtubs and shower areas for cleaner finishing.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Droplets className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Sellado de juntas y huecos" : "Seal & gap fixing",
      desc: isEs
        ? "Sellado de pequeños huecos visibles alrededor de accesorios y elementos del baño para un acabado más limpio."
        : "Sealing of small visible gaps around fixtures and bathroom elements for a tidier look and better protection.",
      price: isEs ? "desde €29" : "from €29",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Alineación de puertas de mueble" : "Cabinet door alignment",
      desc: isEs
        ? "Ajuste de puertas de muebles de baño para mejorar simetría, cierre y línea visual del mueble."
        : "Adjustment of bathroom cabinet doors to improve symmetry, closing feel and the visual line of the furniture.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Montaje en pared de elementos de baño" : "Wall mounting for bathroom items",
      desc: isEs
        ? "Perforación y montaje de espejos, muebles, estantes y accesorios en paredes adecuadas."
        : "Drilling and mounting for mirrors, cabinets, shelves and accessories in suitable wall types.",
      price: isEs ? "desde €35" : "from €35",
      icon: <SquareDashedMousePointer className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de estante de vidrio" : "Glass shelf installation",
      desc: isEs
        ? "Instalación de estantes de vidrio para cosméticos, almacenamiento o decoración con separación limpia y montaje seguro."
        : "Installation of glass bathroom shelves for cosmetics, storage or decorative use with clean spacing and secure mounting.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs
        ? "Varias tareas de instalación de baño"
        : "Multiple bathroom installation tasks",
      desc: isEs
        ? "La mejor opción si necesitas varios accesorios, espejos, muebles o pequeñas instalaciones en una sola visita organizada."
        : "Best option if you need several bathroom fittings, accessories, mirrors, cabinets or small install tasks completed in one organized visit.",
      price: isEs ? "presupuesto personalizado" : "custom quote",
      icon: <Bath className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
  ];

  const whyChoose = isEs
    ? [
        "Ideal para pisos, casas y baños de propiedades en alquiler",
        "Útil para mejoras, actualizaciones y preparación al mudarse",
        "Varias instalaciones de baño pueden agruparse en una sola visita",
        "Resultado visual más limpio con mejor alineación de espejos y muebles",
        "Servicio práctico para mejoras visibles del baño",
        "Presupuesto claro antes de reservar con alcance definido",
      ]
    : [
        "Good for apartments, homes and rental property bathrooms",
        "Useful for bathroom refreshes, upgrades and move-in setup",
        "Several bathroom fittings can be grouped into one visit",
        "Cleaner visual result with better mirror and cabinet alignment",
        "Practical service for visible bathroom improvement work",
        "Clear estimate before booking with defined scope",
      ];

  const includedItems = isEs
    ? [
        "Instalación de muebles de baño y armarios con espejo",
        "Montaje y alineación de espejos",
        "Toalleros, ganchos y accesorios de baño",
        "Instalación de estantes y almacenamiento de pared",
        "Iluminación de espejo y luces simples de baño",
        "Cambio de alcachofa y manguera de ducha",
        "Renovación de silicona y sellado",
        "Varias tareas de baño en una sola visita",
      ]
    : [
        "Bathroom cabinets and mirror cabinet installation",
        "Mirror mounting and alignment",
        "Towel holders, hooks and bathroom accessories",
        "Bathroom shelf installation and wall-mounted storage",
        "Vanity lighting and simple bathroom light setup",
        "Shower head and shower hose replacement",
        "Silicone renewal and seal fixing",
        "Multiple bathroom installation tasks in one visit",
      ];

  const faqItems = [
    {
      q: isEs
        ? "¿Qué tipo de trabajos de baño incluye esta página?"
        : "What kind of bathroom work is included on this page?",
      a: isEs
        ? "Esta página incluye trabajos prácticos de instalación de baño como montaje de espejos, muebles, estantes, toalleros, accesorios, renovación de silicona, iluminación simple y acabados visibles."
        : "This page covers practical bathroom installation work such as mirror mounting, cabinet fitting, shelf installation, towel holders, bathroom accessories, silicone renewal, simple lighting and visible finishing tasks.",
    },
    {
      q: isEs ? "¿Haces reformas completas de baño?" : "Do you do full bathroom renovation?",
      a: isEs
        ? "No. Esta página está enfocada en instalaciones prácticas y acabados visibles, no en reformas completas, alicatado o grandes obras."
        : "No. This page is mainly for practical bathroom installation and visible fitting work rather than full renovation, tiling or major construction projects.",
    },
    {
      q: isEs
        ? "¿Se pueden hacer varias tareas de baño en una sola visita?"
        : "Can several bathroom tasks be done in one visit?",
      a: isEs
        ? "Sí. Es una de las mejores formas de usar este servicio. Espejos, soportes, estantes, muebles, accesorios y pequeñas mejoras se pueden agrupar en una cita organizada."
        : "Yes. This is one of the best uses of this service. Mirrors, holders, shelves, cabinets, accessories and small bathroom improvements can often be grouped into one organized appointment.",
    },
    {
      q: isEs
        ? "¿Instalas espejos y armarios con espejo?"
        : "Do you install bathroom mirrors and mirror cabinets?",
      a: isEs
        ? "Sí. La instalación de espejos y armarios con espejo está incluida cuando la pared y las condiciones de montaje son adecuadas."
        : "Yes. Mirror installation and mirror cabinet fitting are both included where the wall and mounting conditions are suitable.",
    },
    {
      q: isEs
        ? "¿Puedes cambiar la silicona alrededor de elementos del baño?"
        : "Can you replace silicone around bathroom fixtures?",
      a: isEs
        ? "Sí. La renovación de silicona alrededor de lavabos, muebles, bañeras y zonas de ducha está incluida cuando el alcance visible es adecuado."
        : "Yes. Silicone renewal around sinks, vanities, bathtubs and shower areas is included when the visible scope is suitable for this type of work.",
    },
    {
      q: isEs ? "¿Instalas iluminación de baño?" : "Do you install bathroom lighting?",
      a: isEs
        ? "Sí. Se pueden incluir luces compatibles de espejo, zona de lavabo y luz básica de baño cuando las condiciones son adecuadas."
        : "Yes. Simple compatible vanity lights, mirror-area lighting and basic bathroom light installation can be included where conditions are suitable.",
    },
    {
      q: isEs
        ? "¿Este servicio sirve para pisos de alquiler o mejoras rápidas?"
        : "Is this service useful for rental apartments or bathroom refreshes?",
      a: isEs
        ? "Sí. Las instalaciones de baño son muy útiles para mejoras de pisos, mudanzas, propiedades en alquiler y para mejorar el acabado visual del baño."
        : "Yes. Bathroom installations and fitting work are very useful for apartment upgrades, move-ins, rental refreshes and improving the visual finish of the bathroom area.",
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
                        <strong>instalación de baño en Valencia</strong> para pisos,
                        casas y propiedades en alquiler. THEVULGO ayuda con trabajos
                        prácticos como instalación de espejos, muebles, estantes,
                        toalleros, iluminación, sellado y acabados visibles.
                      </p>

                      <p>
                        Los baños son espacios compactos y muy visibles, por eso incluso
                        los pequeños detalles hacen una gran diferencia. Un espejo torcido,
                        accesorios mal colocados, muebles desalineados o silicona vieja pueden
                        hacer que todo el baño se vea menos terminado.
                      </p>

                      <p>
                        Esta página está diseñada para mejoras prácticas de baño: montaje
                        de espejos, instalación de muebles, estantes, accesorios visibles,
                        renovación de silicona y tareas agrupadas en una sola visita.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Professional{" "}
                        <strong>bathroom installation services in Valencia</strong> for
                        apartments, homes and rental properties. THEVULGO helps with
                        practical bathroom fitting work such as mirror installation,
                        cabinet fitting, shelf mounting, towel holders, lighting, sealing
                        and visible finishing details.
                      </p>

                      <p>
                        Bathrooms are compact but highly visible spaces, so even small
                        installation details make a big difference. Uneven mirrors, badly
                        placed accessories, poor cabinet alignment, missing shelves or worn
                        silicone can make the whole bathroom feel less complete than it should.
                      </p>

                      <p>
                        This page is designed for practical bathroom improvement work:
                        mirror mounting, cabinet fitting, shelf installation, visible
                        accessories, silicone renewal and grouped bathroom setup tasks.
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
                        Una buena instalación de baño no consiste solo en fijar elementos
                        a la pared. También se trata de que el baño se vea más limpio,
                        organizado y terminado en el uso diario.
                      </p>

                      <p>
                        THEVULGO trabaja principalmente en{" "}
                        <strong>Valencia y alrededores</strong>, ayudando a completar
                        trabajos prácticos de baño con mejor alineación, separación y resultado visual.
                      </p>

                      <p>
                        Antes de empezar, el cliente recibe un presupuesto transparente
                        basado en el número de elementos, fijaciones, superficie y alcance total.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Good bathroom installation work is not only about attaching items
                        to the wall. It is also about making the bathroom feel cleaner,
                        more organized and more finished in everyday use.
                      </p>

                      <p>
                        THEVULGO works mainly in{" "}
                        <strong>Valencia and nearby areas</strong>, helping clients
                        complete practical bathroom setup work with cleaner fitting,
                        more balanced spacing and better visual results.
                      </p>

                      <p>
                        Before work begins, clients receive a transparent estimate based on
                        the number of items, fittings, mounting needs and total scope.
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