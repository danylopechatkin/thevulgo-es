import type { AcSeoPage } from "./acSeoPages";

type Locale = "es" | "en";

function text<T>(es: T, en: T, locale: Locale): T { return locale === "es" ? es : en; }

export function getAcSeoContent(page: AcSeoPage, locale: Locale) {
  const title = locale === "es" ? page.titleEs : page.titleEn;
  const isGuide = page.category === "guide";
  const kind = page.category;
  const intro = isGuide
    ? text(`Esta guía sobre ${title.toLowerCase()} explica los puntos que conviene revisar antes de tomar una decisión. Está pensada para viviendas y negocios de Valencia, con criterios prácticos para entender el equipo, comparar opciones y preparar una visita técnica.`, `This guide to ${title.toLowerCase()} explains the points worth checking before making a decision. It is designed for homes and businesses in Valencia, with practical criteria to understand the unit, compare options and prepare a technical visit.`, locale)
    : text(`${title} requiere revisar el equipo, el acceso y el alcance real del trabajo. En THEVULGO empezamos por entender el síntoma o la instalación, explicamos qué comprobamos y confirmamos el presupuesto antes de realizar cualquier intervención.`, `${title} requires checking the unit, access and the real scope of work. At THEVULGO we start by understanding the symptom or installation, explain what we check and confirm the estimate before carrying out any work.`, locale);
  const work = kind === "installation"
    ? text(["Revisión del lugar de montaje, distancia y accesos", "Comprobación de preinstalación, desagüe y alimentación disponible", "Instalación y puesta en marcha según el equipo y el alcance confirmado"], ["Review of the installation location, distance and access", "Check of pre-installation, drainage and available power", "Installation and commissioning according to the unit and confirmed scope"], locale)
    : kind === "ducted"
      ? text(["Revisión de retorno, rejillas, accesos y comportamiento del sistema", "Diagnóstico de mantenimiento, limpieza, fuga o avería según el caso", "Explicación de las opciones de trabajo antes de intervenir"], ["Review of returns, grilles, access and system behaviour", "Diagnosis of maintenance, cleaning, leak or fault according to the case", "Explanation of work options before intervention"], locale)
      : kind === "commercial"
        ? text(["Planificación según horarios, clientes, acceso y continuidad del negocio", "Revisión del equipo y de las prioridades operativas", "Propuesta clara para mantenimiento, reparación o mejora"], ["Planning around opening hours, customers, access and business continuity", "Review of the equipment and operational priorities", "Clear proposal for maintenance, repair or improvement"], locale)
        : text(["Revisión del síntoma, uso reciente y comportamiento del equipo", "Comprobación de los elementos que puedan afectar al funcionamiento", "Explicación del diagnóstico y confirmación del siguiente paso"], ["Review of the symptom, recent use and unit behaviour", "Check of the elements that can affect performance", "Explanation of the diagnosis and confirmation of the next step"], locale);
  const prep = text(["Comparte fotos de la unidad interior y exterior si puedes.", "Indica marca, modelo, código de error y cuándo comenzó el problema.", "Deja libre el acceso al equipo y avisa de normas del edificio, parking o escalera."], ["Share photos of the indoor and outdoor units if possible.", "Tell us the make, model, error code and when the issue started.", "Keep access to the unit clear and mention building rules, parking or stair access."], locale);
  const factors = text(["Tipo, antigüedad y estado del equipo", "Acceso a unidad interior, exterior o conductos", "Necesidad de piezas, materiales, metros adicionales o trabajos complementarios"], ["Type, age and condition of the unit", "Access to indoor, outdoor or ducted equipment", "Need for parts, materials, extra metres or complementary work"], locale);
  const faqs = isGuide
    ? [{ q: text(`¿Para quién sirve esta guía sobre ${title}?`, `Who is this guide to ${title} for?`, locale), a: text("Para personas que quieren entender las opciones antes de pedir presupuesto, comparar equipos o preparar información útil para una visita.", "For people who want to understand the options before requesting an estimate, comparing equipment or preparing useful information for a visit.", locale) }, { q: text("¿Una guía sustituye una revisión técnica?", "Does a guide replace a technical inspection?", locale), a: text("No. Las condiciones del equipo, la instalación y el acceso deben confirmarse en cada caso.", "No. The condition of the equipment, installation and access must be confirmed in each case.", locale) }]
    : [{ q: text(`¿Qué información ayuda para ${title.toLowerCase()}?`, `What information helps with ${title.toLowerCase()}?`, locale), a: text("Fotos, marca, modelo, síntomas, código de error y una breve descripción ayudan a orientar la visita y el alcance.", "Photos, make, model, symptoms, error code and a short description help guide the visit and scope.", locale) }, { q: text("¿El precio final se confirma antes?", "Is the final price confirmed beforehand?", locale), a: text("Sí. Revisamos el caso y explicamos el alcance, los materiales o factores que pueden cambiar el trabajo antes de continuar.", "Yes. We review the case and explain the scope, materials or factors that can change the work before continuing.", locale) }, { q: text("¿Trabajáis en Valencia y alrededores?", "Do you work in Valencia and nearby areas?", locale), a: text("Sí. Indica tu zona al solicitar presupuesto y confirmamos disponibilidad.", "Yes. Include your area when requesting an estimate and we will confirm availability.", locale) }];

  // Editorially distinct content for high-intent cleaning-related pages.
  // Other AC routes retain their existing copy and metadata.
  const specialized: Record<
    string,
    Record<Locale, { intro: string; work: string[]; faqs: { q: string; a: string }[] }>
  > = {
    "aire-acondicionado-valencia/mantenimiento": {
      es: {
        intro:
          "El mantenimiento de aire acondicionado en Valencia sirve para revisar el estado y funcionamiento del equipo y decidir si necesita limpieza profunda o una intervención diferente. No es lo mismo una comprobación periódica que una limpieza interior completa.",
        work: [
          "Revisar el tipo de split, el acceso y los síntomas que presenta el equipo",
          "Comprobar visualmente filtros, zonas accesibles y drenaje según el alcance acordado",
          "Explicar si procede mantenimiento, limpieza profunda o diagnóstico adicional y confirmar el presupuesto",
        ],
        faqs: [
          { q: "¿Mantenimiento y limpieza profunda son lo mismo?", a: "No. El mantenimiento se centra en revisar el estado y funcionamiento del equipo; la limpieza profunda del split tiene un alcance y presupuesto propios." },
          { q: "¿Incluye la limpieza de la unidad exterior?", a: "Depende del servicio contratado. La oferta de limpieza profunda del split se refiere a la unidad interior y no incluye la limpieza exterior." },
          { q: "¿Qué información necesitáis para valorar el mantenimiento?", a: "Indica cuántos equipos hay, su tipo, síntomas, zona de Valencia y, si es posible, envía fotografías de las unidades y de los accesos." },
        ],
      },
      en: {
        intro:
          "Air conditioning maintenance in Valencia is intended to check the condition and operation of the unit and decide whether deep cleaning or another type of work is appropriate. Periodic checks are not the same as a full indoor clean.",
        work: [
          "Check the split unit type, access conditions and any reported symptoms",
          "Visually review filters, accessible areas and drainage within the agreed scope",
          "Explain whether maintenance, deep cleaning or further diagnostics are appropriate and confirm the quote",
        ],
        faqs: [
          { q: "Are maintenance and deep cleaning the same service?", a: "No. Maintenance focuses on checking the unit's condition and operation. Deep indoor split cleaning has a separate scope and quote." },
          { q: "Is outdoor unit cleaning included?", a: "That depends on the service selected. The split deep-cleaning offer is for the indoor unit and does not include outdoor cleaning." },
          { q: "What information do you need?", a: "Tell us how many units you have, their type, any symptoms, your area in Valencia and, if possible, share photos of the units and access." },
        ],
      },
    },
    "aire-acondicionado-valencia/reparacion/huele-mal": {
      es: {
        intro:
          "Si el aire acondicionado huele mal, no siempre significa que necesite una reparación. La suciedad en zonas interiores, la humedad o problemas de drenaje pueden influir. Revisamos los síntomas para diferenciar una posible limpieza de una avería.",
        work: [
          "Identificar cuándo aparece el olor: al encender, durante el uso o de forma continua",
          "Revisar el estado de filtros, zonas interiores accesibles y drenaje según el caso",
          "Explicar si conviene una limpieza del split o un diagnóstico distinto, sin prometer eliminar todos los olores",
        ],
        faqs: [
          { q: "¿Una limpieza puede ayudar con el mal olor?", a: "Puede ayudar cuando el olor está relacionado con suciedad acumulada, pero no garantiza resolver causas de drenaje, instalación o averías." },
          { q: "¿Hay que recargar el gas si el aire huele mal?", a: "El olor por sí solo no permite concluir que falte refrigerante. Es necesario valorar los síntomas y el equipo antes de indicar un trabajo." },
          { q: "¿Qué os envío por WhatsApp?", a: "Indica cuándo aparece el olor, si el equipo enfría o calienta normalmente, su marca y modelo y una foto de la unidad interior." },
        ],
      },
      en: {
        intro:
          "A bad smell from an air conditioner does not always mean a repair is needed. Dirt in accessible internal areas, moisture or drainage issues can contribute. We review the symptoms to distinguish possible cleaning from a fault.",
        work: [
          "Identify when the smell appears: at startup, during operation or continuously",
          "Review filters, accessible indoor areas and drainage as appropriate",
          "Explain whether a split clean or a different diagnostic visit is needed without promising that every smell can be removed",
        ],
        faqs: [
          { q: "Can cleaning help with a bad smell?", a: "It may help when the smell is linked to accumulated dirt, but cannot guarantee a fix for drainage, installation or equipment faults." },
          { q: "Does a bad smell mean the refrigerant needs recharging?", a: "A smell alone does not show that refrigerant is low. The unit and its symptoms need to be assessed before suggesting any work." },
          { q: "What should I send on WhatsApp?", a: "Explain when the smell occurs, whether cooling or heating seems normal, the make and model, and send a photo of the indoor unit." },
        ],
      },
    },
    "aire-acondicionado-valencia/comercial/airbnb": {
      es: {
        intro:
          "Para apartamentos turísticos y Airbnb en Valencia, organizamos la valoración del aire acondicionado teniendo en cuenta el número de equipos, la entrada a la vivienda y las ventanas disponibles entre reservas. Cada limpieza o mantenimiento se presupuesta según el alcance real.",
        work: [
          "Reunir dirección o zona, número y tipo de equipos de cada vivienda",
          "Comprobar accesos y coordinar una franja posible sin prometer disponibilidad inmediata",
          "Separar limpieza interior, mantenimiento y reparaciones en una propuesta clara antes de intervenir",
        ],
        faqs: [
          { q: "¿Puedo solicitar limpieza de varios splits o apartamentos?", a: "Sí, envía el número de equipos y sus ubicaciones. Confirmaremos el alcance y las condiciones de cada visita antes de reservar." },
          { q: "¿Se puede coordinar con la salida de los huéspedes?", a: "Indica los intervalos libres entre reservas; revisaremos la disponibilidad antes de confirmar la visita." },
          { q: "¿La limpieza interior incluye reparaciones?", a: "No. Una limpieza y una reparación son trabajos diferentes; cualquier incidencia se comunica y se presupuesta por separado." },
        ],
      },
      en: {
        intro:
          "For Airbnb and holiday apartments in Valencia, we assess air conditioning work around the number of units, property access and the available time between guest bookings. Each cleaning or maintenance visit is quoted according to its actual scope.",
        work: [
          "Collect each property's area or address plus the number and type of units",
          "Check access and coordinate a possible slot without promising instant availability",
          "Separate indoor cleaning, maintenance and repairs into a clear proposal before work begins",
        ],
        faqs: [
          { q: "Can you quote for multiple splits or apartments?", a: "Yes. Send the number of units and their locations so we can confirm the scope and visit conditions before booking." },
          { q: "Can the visit be arranged between guest stays?", a: "Share the available gaps between bookings and we will check availability before confirming a visit." },
          { q: "Does an indoor clean include repairs?", a: "No. Cleaning and repairs are separate services. Any fault is explained and quoted separately." },
        ],
      },
    },
    "blog/cada-cuanto-limpiar-aire-acondicionado": {
      es: {
        intro:
          "La frecuencia de limpieza de un aire acondicionado no depende de un único calendario: influyen el uso, el polvo, la humedad y el entorno. Limpiar filtros y contratar una limpieza profunda del split son tareas distintas; conviene valorar el estado real del equipo.",
        work: [
          "Distinguir la limpieza habitual de filtros de la limpieza profesional del interior",
          "Observar señales como suciedad visible, olores o menor caudal sin asumir una causa única",
          "Revisar el tipo de unidad y el acceso antes de contratar una limpieza profunda o diagnóstico",
        ],
        faqs: [
          { q: "¿Cada cuánto hay que limpiar un split?", a: "No existe una frecuencia universal para todas las viviendas. Depende del uso y del entorno; revisa las indicaciones del fabricante y el estado del equipo." },
          { q: "¿Limpiar filtros equivale a una limpieza profunda?", a: "No. La limpieza de filtros es solo una parte del cuidado del equipo. La limpieza profunda incluye otras zonas interiores accesibles según el servicio." },
          { q: "¿Qué hago si sigue oliendo mal tras limpiar?", a: "El olor puede tener otras causas. Conviene revisar el drenaje, las condiciones de uso y posibles incidencias antes de contratar más trabajos." },
        ],
      },
      en: {
        intro:
          "There is no universal air conditioner cleaning schedule: usage, dust, humidity and the environment all matter. Routine filter cleaning and professional indoor split deep cleaning are different tasks, so the unit's actual condition matters.",
        work: [
          "Distinguish routine filter care from professional cleaning of accessible indoor parts",
          "Look for visible dirt, smells or reduced airflow without assuming one cause",
          "Review the unit type and access before choosing deep cleaning or a diagnostic visit",
        ],
        faqs: [
          { q: "How often should a split AC be cleaned?", a: "There is no schedule that fits every home. It depends on use and conditions; consult the manufacturer's instructions and the actual state of the unit." },
          { q: "Is cleaning filters the same as deep cleaning?", a: "No. Filter care is only one part of maintenance. Deep cleaning covers other accessible indoor areas within the agreed service scope." },
          { q: "What if the smell remains after cleaning?", a: "Smells can have other causes. Drainage, usage conditions and possible faults may need checking before arranging further work." },
        ],
      },
    },
  };
  const uniqueContent = specialized[page.path]?.[locale];
  return {
    title,
    intro: uniqueContent?.intro ?? intro,
    work: uniqueContent?.work ?? work,
    prep,
    factors,
    faqs: uniqueContent?.faqs ?? faqs,
    isGuide,
  };
}
