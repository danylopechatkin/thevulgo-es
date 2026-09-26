import type { Market } from "./markets";

type Localized = { es: string; en: string };
type MarketPageContent = {
  situations: Localized[];
  pricing: Localized;
  faq: { q: Localized; a: Localized }[];
};

const home: MarketPageContent = {
  situations: [
    { es: "Montajes y pequeñas reparaciones en viviendas y pisos de alquiler.", en: "Assembly and small repairs in homes and rental apartments." },
    { es: "Mantenimiento puntual para oficinas, locales y pequeños negocios.", en: "One-off maintenance for offices, premises and small businesses." },
    { es: "Trabajos combinados que se pueden agrupar en una sola solicitud.", en: "Combined jobs that can be grouped into one request." },
  ],
  pricing: { es: "El precio se confirma según fotos, cantidad, materiales, acceso y tiempo previsto. Los materiales no se incluyen salvo que se indique expresamente.", en: "Price is confirmed from photos, quantity, materials, access and expected time. Materials are not included unless explicitly stated." },
  faq: [
    { q: { es: "¿Cómo confirmáis el precio?", en: "How is the price confirmed?" }, a: { es: "Revisamos fotos, medidas y alcance antes de la visita. Si aparece una dificultad no visible, se consulta antes de continuar.", en: "We review photos, measurements and scope before the visit. If a hidden issue appears, it is discussed before proceeding." } },
    { q: { es: "¿Puedo incluir varios trabajos?", en: "Can I include several jobs?" }, a: { es: "Sí. Describe la lista completa para organizar la visita y preparar un presupuesto claro.", en: "Yes. Describe the full list so the visit and a clear estimate can be prepared." } },
  ],
};

const technical: MarketPageContent = {
  situations: [
    { es: "Instalaciones nuevas para vivienda, oficina, comercio y hostelería.", en: "New installations for homes, offices, shops and hospitality." },
    { es: "Diagnóstico, ampliación y ordenación de sistemas existentes.", en: "Diagnosis, expansion and cleanup of existing systems." },
    { es: "Proyectos combinados de CCTV, red, fibra y control de acceso.", en: "Combined CCTV, network, fibre and access-control projects." },
  ],
  pricing: { es: "Los trabajos sencillos usan el precio público del catálogo. Los proyectos con cableado, varias zonas o equipamiento requieren revisión; mano de obra y equipos se muestran por separado.", en: "Simple work uses the public catalogue price. Projects involving cabling, multiple areas or equipment require review; labour and equipment are shown separately." },
  faq: [
    { q: { es: "¿Trabajáis con equipos existentes?", en: "Can you work with existing equipment?" }, a: { es: "Sí. Podemos diagnosticar, ampliar, reconfigurar o sustituir componentes cuando la compatibilidad lo permite.", en: "Yes. We can diagnose, expand, reconfigure or replace components where compatibility allows." } },
    { q: { es: "¿El equipamiento está incluido?", en: "Is equipment included?" }, a: { es: "Solo cuando el presupuesto lo especifica. En proyectos técnicos se confirma el equipo adecuado después de revisar requisitos e infraestructura.", en: "Only when the estimate says so. For technical projects, suitable equipment is confirmed after requirements and infrastructure are reviewed." } },
  ],
};

const renovation: MarketPageContent = {
  situations: [
    { es: "Reformas parciales, acabados y puesta a punto de viviendas.", en: "Partial renovations, finishing and property preparation." },
    { es: "Trabajos coordinados de paredes, pintura, electricidad y fontanería.", en: "Coordinated wall, painting, electrical and plumbing work." },
    { es: "Revisión del espacio y presupuesto antes de iniciar trabajos complejos.", en: "Site review and estimate before complex work begins." },
  ],
  pricing: { es: "Las reformas se presupuestan según mediciones, estado actual, acabados y materiales. La visita o revisión necesaria se confirma antes de reservar.", en: "Renovations are quoted from measurements, current condition, finishes and materials. Any required visit or review is confirmed before booking." },
  faq: [
    { q: { es: "¿Dais presupuesto antes de empezar?", en: "Do you quote before starting?" }, a: { es: "Sí. El alcance, la mano de obra y la política de materiales se confirman antes del trabajo.", en: "Yes. Scope, labour and material policy are confirmed before work starts." } },
    { q: { es: "¿Se pueden combinar varios oficios?", en: "Can several trades be combined?" }, a: { es: "Sí, cuando el proyecto lo permite. Describe todos los trabajos para revisar dependencias y orden de ejecución.", en: "Yes, where the project allows. Describe all work so dependencies and sequence can be reviewed." } },
  ],
};

const localized = (es: string, en: string): Localized => ({ es, en });
const pageSituations: Record<string, Localized[]> = {
  handyman: [localized("Montaje, fijación y reparaciones pequeñas en una misma visita.", "Assembly, fixing and small repairs in one visit."), localized("Puesta a punto de pisos de alquiler y viviendas recién ocupadas.", "Rental apartment and move-in preparation."), localized("Lista de trabajos para oficina o pequeño negocio.", "Job lists for an office or small business.")],
  "montaje-tv": [localized("Televisores estándar, grandes y Samsung Frame.", "Standard, large and Samsung Frame televisions."), localized("Soportes fijos, inclinables o articulados.", "Fixed, tilting or full-motion brackets."), localized("Nivelado, cableado visible ordenado y configuración básica.", "Levelling, tidy visible cabling and basic setup.")],
  "montaje-muebles": [localized("Muebles IKEA y otras marcas con instrucciones disponibles.", "IKEA and other brands with available instructions."), localized("Armarios, camas, escritorios, mesas y estanterías.", "Wardrobes, beds, desks, tables and shelving."), localized("Fijación de seguridad cuando la pared y el mueble lo requieren.", "Safety anchoring where wall and furniture require it.")],
  "services/kitchen": [localized("Montaje y ajuste de módulos, puertas y herrajes.", "Assembly and adjustment of units, doors and fittings."), localized("Encimeras y remates sujetos a medición y material.", "Worktops and finishing subject to measurement and material."), localized("Pequeñas mejoras y correcciones en cocinas existentes.", "Small improvements and corrections in existing kitchens.")],
  "services/electrical": [localized("Lámparas, apliques, enchufes e interruptores.", "Lights, wall lights, sockets and switches."), localized("Sustitución y montaje eléctrico básico accesible.", "Accessible basic electrical replacement and installation."), localized("Diagnóstico visual y confirmación previa si el alcance es mayor.", "Visual diagnosis and prior confirmation if scope is larger.")],
  "services/plumbing": [localized("Grifos, sifones, latiguillos y conexiones visibles.", "Taps, traps, hoses and visible connections."), localized("Sustituciones sencillas sin obra mayor.", "Simple replacements without major building work."), localized("Revisión de fuga o problema antes de confirmar reparación.", "Leak or issue review before repair is confirmed.")],
  "services/drywall": [localized("Agujeros, grietas, parches y daños localizados.", "Holes, cracks, patches and localised damage."), localized("Preparación, lijado y acabado listo para pintar según alcance.", "Preparation, sanding and paint-ready finishing depending on scope."), localized("Pladur nuevo y trabajos grandes bajo presupuesto de proyecto.", "New drywall and larger work under a project estimate.")],
  "services/bathroom": [localized("Espejos, muebles, estantes y accesorios de baño.", "Bathroom mirrors, cabinets, shelves and accessories."), localized("Renovación de silicona y pequeños sellados.", "Silicone renewal and small sealing jobs."), localized("Sustituciones visibles que no requieren reforma integral.", "Visible replacements that do not require a full renovation.")],
  "services/cctv": [localized("Cámaras IP/PoE o sistemas analógicos existentes.", "IP/PoE cameras or existing analogue systems."), localized("NVR/DVR, almacenamiento y acceso remoto.", "NVR/DVR, storage and remote access."), localized("Ampliación, reubicación y diagnóstico de cámaras.", "Camera expansion, repositioning and diagnosis.")],
  "services/redes": [localized("Cobertura WiFi, puntos de acceso y roaming.", "WiFi coverage, access points and roaming."), localized("Ethernet, RJ45, Cat6/Cat6A, switches y rack.", "Ethernet, RJ45, Cat6/Cat6A, switches and racks."), localized("Redes de invitados, CCTV, TPV y segmentación VLAN.", "Guest, CCTV and POS networks plus VLAN segmentation.")],
  "services/fiber": [localized("Tendido, terminación y fusión de enlaces de fibra.", "Fibre link installation, termination and splicing."), localized("Conectores LC/SC e integración con racks y SFP.", "LC/SC connectors and rack/SFP integration."), localized("Diagnóstico de enlaces dañados o sin conectividad.", "Diagnosis of damaged or disconnected links.")],
  "services/control-de-acceso": [localized("Lectores RFID, teclados y controladores.", "RFID readers, keypads and controllers."), localized("Cerraderos eléctricos, electroimanes y botones de salida.", "Electric strikes, maglocks and exit buttons."), localized("Ampliación, sustitución y diagnóstico de sistemas existentes.", "Existing-system expansion, replacement and diagnosis.")],
  "services/intercom": [localized("Videoporteros IP, sistemas de dos hilos y audio.", "IP video intercom, two-wire and audio systems."), localized("Monitores interiores, app móvil y apertura de puerta.", "Indoor monitors, mobile app and door release."), localized("Reparación o sustitución tras revisar cableado y compatibilidad.", "Repair or replacement after wiring and compatibility review.")],
  "services/alarmas": [localized("Alarmas autónomas y autogestionadas sin servicio CRA.", "Standalone, self-managed alarms without monitoring service."), localized("Sensores, contactos, sirenas, teclado y aplicación.", "Sensors, contacts, sirens, keypad and app."), localized("Diagnóstico y ampliación de equipos compatibles.", "Compatible-equipment diagnosis and expansion.")],
  "services/seguridad-comercial": [localized("CCTV, red, WiFi y cableado coordinados.", "Coordinated CCTV, network, WiFi and cabling."), localized("Control de acceso, intercom y alarmas autónomas.", "Access control, intercom and standalone alarms."), localized("Rack, PoE y fibra para una infraestructura común.", "Rack, PoE and fibre for shared infrastructure.")],
  reformas: renovation.situations,
};

export function marketPageContent(path?: string): MarketPageContent {
  if (!path) return home;
  const base = path === "reformas" || path.includes("renovation")
    ? renovation
    : ["security-networks", "cctv", "redes", "fiber", "control-de-acceso", "intercom", "alarmas", "seguridad-comercial"].some((segment) => path.includes(segment))
      ? technical
      : home;
  return { ...base, situations: pageSituations[path] || base.situations };
}

export function localMarketSentence(market: Market, locale: string) {
  const city = market[0].toUpperCase() + market.slice(1);
  return locale === "es"
    ? `La cobertura se confirma por dirección dentro de ${city} y sus zonas atendidas.`
    : `Coverage is confirmed by address within ${city} and its served areas.`;
}
