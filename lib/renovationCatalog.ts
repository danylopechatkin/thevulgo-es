export type RenovationPriceModel = "fixed" | "per_unit" | "per_hour" | "per_m2" | "per_linear_meter" | "calculated" | "quote";

export type LocalText = { es: string; en: string };

export type RenovationService = {
  id: string;
  slug: LocalText;
  title: LocalText;
  summary: LocalText;
  problem: LocalText;
  scope: LocalText[];
  priceModel: RenovationPriceModel;
  priceCents?: number;
  unit?: LocalText;
  requiresPhotos?: boolean;
  requiresSiteVisit?: boolean;
  legalNote?: LocalText;
  related?: string[];
  existingPath?: string;
};

export type RenovationCategory = {
  id: string;
  slug: LocalText;
  title: LocalText;
  shortTitle: LocalText;
  intro: LocalText;
  comparison: LocalText;
  services: RenovationService[];
};

const t = (es: string, en: string): LocalText => ({ es, en });
const service = (
  id: string,
  slugEs: string,
  slugEn: string,
  titleEs: string,
  titleEn: string,
  summaryEs: string,
  summaryEn: string,
  priceModel: RenovationPriceModel,
  priceCents?: number,
  extras: Partial<RenovationService> = {},
): RenovationService => ({
  id,
  slug: t(slugEs, slugEn),
  title: t(titleEs, titleEn),
  summary: t(summaryEs, summaryEn),
  problem: t(
    `Este servicio resuelve ${summaryEs.toLocaleLowerCase()} con una revisión previa del soporte, los accesos y el acabado esperado.`,
    `This service addresses ${summaryEn.toLocaleLowerCase()} after checking the substrate, access and required finish.`,
  ),
  scope: [
    t("Revisión del estado actual y confirmación del alcance", "Review of the existing condition and scope confirmation"),
    t("Ejecución, ajuste y comprobación final", "Installation or repair, adjustment and final check"),
    t("Zona de trabajo recogida al terminar", "Work area left tidy on completion"),
  ],
  priceModel,
  priceCents,
  ...extras,
});

const quoteNote = t(
  "El importe final depende de medidas, estado existente, materiales, accesibilidad y trabajos asociados. Se solicita información y, cuando corresponde, visita técnica.",
  "The final amount depends on dimensions, existing condition, materials, access and connected work. Details and, where needed, a site visit are required.",
);

export const RENOVATION_CATEGORIES: RenovationCategory[] = [
  {
    id: "general-repairs", slug: t("reparaciones-hogar", "home-repairs"), shortTitle: t("Reparaciones", "Repairs"),
    title: t("Reparaciones del hogar en Valencia", "Home repairs in Valencia"),
    intro: t("Soluciones concretas para desgaste, herrajes, sellados y pequeños daños, agrupando varias tareas en una sola visita cuando resulta práctico.", "Practical help for wear, fittings, sealing and minor damage, combining several tasks in one visit where sensible."),
    comparison: t("Conviene reparar cuando la pieza y el soporte siguen siendo seguros; se propone sustituir cuando el desgaste hace que el arreglo sea temporal o poco fiable.", "Repair makes sense when the part and substrate remain safe; replacement is recommended when wear would make a repair temporary or unreliable."),
    services: [
      service("home-repair-visit", "reparaciones-del-hogar", "home-repair-service", "Reparaciones del hogar", "Home repair service", "pequeños daños, ajustes y mantenimiento cotidiano", "minor damage, adjustments and everyday maintenance", "per_hour", 2500, { unit: t("hora", "hour") }),
      service("door-hinge-adjustment", "ajuste-puertas-bisagras", "door-hinge-adjustment", "Ajuste de puertas y bisagras", "Door and hinge adjustment", "puertas que rozan, no cierran bien o tienen bisagras flojas", "doors that rub, fail to close or have loose hinges", "fixed", 3500),
      service("silicone-renewal", "renovacion-silicona", "silicone-renewal", "Renovación de silicona", "Silicone renewal", "juntas deterioradas en baño, cocina o encimera", "failed joints in bathrooms, kitchens or worktops", "per_linear_meter", 900, { unit: t("metro lineal", "linear metre"), requiresPhotos: true }),
      service("wall-hole-repair", "reparar-agujeros-pared", "wall-hole-repair", "Reparar agujeros en pared", "Wall hole repair", "agujeros de tacos, soportes y pequeños golpes", "anchor holes, bracket marks and minor impact damage", "fixed", 3500, { requiresPhotos: true, existingPath: "services/reparacion-agujeros-pared-valencia" }),
    ],
  },
  {
    id: "electrical", slug: t("electricidad", "electrical"), shortTitle: t("Electricidad", "Electrical"),
    title: t("Electricista y reparaciones eléctricas en Valencia", "Electrician and electrical repairs in Valencia"),
    intro: t("Instalaciones visibles, mecanismos, puntos de luz y diagnóstico inicial. Los trabajos reglamentados se asignan o coordinan con profesional autorizado.", "Visible installations, accessories, lighting points and initial diagnostics. Regulated work is assigned to or coordinated with an authorised professional."),
    comparison: t("Un mecanismo defectuoso puede sustituirse de forma localizada; cableado antiguo, protecciones deficientes o fallos repetidos requieren revisar el circuito completo.", "A failed accessory can often be replaced locally; old wiring, inadequate protection or repeated faults require a full circuit assessment."),
    services: [
      service("socket-install", "instalar-enchufe", "socket-installation", "Instalar o cambiar enchufe", "Install or replace a socket", "sustitución de un mecanismo existente o montaje en punto preparado", "replacement of an existing accessory or fitting at a prepared point", "per_unit", 3000, { unit: t("unidad", "unit"), existingPath: "cambio-enchufe-valencia" }),
      service("light-point", "instalar-punto-luz", "light-point-installation", "Instalar punto de luz", "Light point installation", "un nuevo punto visible o adaptación de un punto existente", "a new surface point or adaptation of an existing point", "per_unit", 3500, { unit: t("punto", "point") }),
      service("electrical-diagnostic", "diagnostico-averia-electrica", "electrical-fault-diagnostic", "Diagnóstico de avería eléctrica", "Electrical fault diagnostic", "cortes, mecanismos sin tensión o fallos intermitentes", "trips, dead accessories or intermittent faults", "fixed", 4900, { legalNote: t("Cuadros, nuevas líneas, certificados y otras actuaciones reglamentadas pueden exigir instalador autorizado.", "Consumer units, new circuits, certificates and other regulated work may require an authorised installer.") }),
      service("home-rewire", "reforma-electrica-vivienda", "home-electrical-renovation", "Reforma eléctrica de vivienda", "Home electrical renovation", "actualización de cableado, circuitos, cuadro y mecanismos", "updating wiring, circuits, consumer unit and accessories", "quote", undefined, { requiresPhotos: true, requiresSiteVisit: true, legalNote: t("La definición y certificación se realizará por profesionales autorizados cuando sea legalmente exigible.", "Design and certification will be handled by authorised professionals where legally required.") }),
    ],
  },
  {
    id: "lighting", slug: t("iluminacion", "lighting"), shortTitle: t("Iluminación", "Lighting"),
    title: t("Instalación de iluminación en Valencia", "Lighting installation in Valencia"),
    intro: t("Montaje y sustitución de luminarias, LED e iluminación funcional o ambiental, con atención al soporte, potencia, regulación y zonas húmedas.", "Installation and replacement of luminaires, LEDs and functional or ambient lighting, considering substrate, load, dimming and wet areas."),
    comparison: t("Si el punto funciona correctamente basta con montar la luminaria; parpadeos, calentamiento o protecciones que saltan requieren diagnóstico eléctrico.", "If the point works correctly, fitting the luminaire is enough; flicker, overheating or tripping protection requires electrical diagnosis."),
    services: [
      service("ceiling-light", "instalar-lampara-techo", "ceiling-light-installation", "Instalar lámpara de techo", "Ceiling light installation", "montaje de plafón, colgante o luminaria sobre punto existente", "fitting a flush, pendant or ceiling light to an existing point", "per_unit", 3900, { unit: t("luminaria", "light"), existingPath: "instalacion-lampara-valencia" }),
      service("downlights", "instalar-focos-downlights", "downlight-installation", "Instalar focos y downlights", "Spotlight and downlight installation", "sustitución o colocación de focos en huecos preparados", "replacement or fitting of spots into prepared openings", "per_unit", 3000, { unit: t("foco", "spotlight") }),
      service("led-strip", "instalar-tira-led", "led-strip-installation", "Instalar tira LED", "LED strip installation", "iluminación lineal en cocina, mueble, foseado o perfil", "linear lighting in kitchens, furniture, coves or profiles", "per_linear_meter", 1800, { unit: t("metro lineal", "linear metre"), requiresPhotos: true, existingPath: "services/electrical/instalacion-tira-led-valencia" }),
      service("outdoor-lighting", "iluminacion-exterior", "outdoor-lighting", "Iluminación exterior", "Outdoor lighting", "luminarias de terraza, fachada o jardín con equipos adecuados", "terrace, façade or garden luminaires using suitable equipment", "quote", undefined, { requiresPhotos: true }),
    ],
  },
  {
    id: "plumbing", slug: t("fontaneria", "plumbing"), shortTitle: t("Fontanería", "Plumbing"),
    title: t("Fontanero y reparaciones de fontanería en Valencia", "Plumber and plumbing repairs in Valencia"),
    intro: t("Grifos, sifones, sanitarios, conexiones y fugas accesibles. Antes de intervenir se identifica el origen y se separa mano de obra, piezas y posibles daños ocultos.", "Taps, traps, sanitaryware, connections and accessible leaks. Before work, the source is identified and labour, parts and hidden damage are separated."),
    comparison: t("Una junta o mecanismo suele admitir reparación; corrosión, fisuras o tubería degradada hacen más fiable la sustitución.", "A seal or mechanism can often be repaired; corrosion, cracks or degraded pipework make replacement more reliable."),
    services: [
      service("faucet-replace", "cambiar-grifo", "tap-replacement", "Cambiar grifo", "Tap replacement", "retirada del grifo existente e instalación del nuevo en conexiones compatibles", "removal of the existing tap and installation of a new one on compatible connections", "fixed", 4900),
      service("visible-leak", "reparar-fuga-visible", "visible-leak-repair", "Reparar fuga visible", "Visible leak repair", "fugas accesibles bajo fregadero, lavabo, WC o ducha", "accessible leaks below a sink, basin, WC or shower", "fixed", 4900, { requiresPhotos: true }),
      service("water-point", "instalar-punto-agua", "water-point-installation", "Instalar o mover punto de agua", "Install or move a water point", "adaptación de alimentación y desagüe accesibles", "adaptation of accessible supply and waste connections", "quote", undefined, { requiresPhotos: true, requiresSiteVisit: true }),
      service("electric-water-heater", "instalar-termo-electrico", "electric-water-heater-installation", "Instalar termo eléctrico", "Electric water heater installation", "sustitución o instalación con conexiones y soporte revisados", "replacement or installation after checking connections and support", "quote", undefined, { requiresPhotos: true, legalNote: t("No se incluyen trabajos de gas.", "Gas work is not included.") }),
    ],
  },
  {
    id: "walls-ceilings", slug: t("paredes-techos", "walls-ceilings"), shortTitle: t("Paredes y techos", "Walls & ceilings"),
    title: t("Reparación de paredes y techos en Valencia", "Wall and ceiling repair in Valencia"),
    intro: t("Reparación de golpes, grietas no estructurales, desconchados y superficies dañadas antes de pintar, incluyendo daños tras instalaciones o pequeñas fugas ya resueltas.", "Repair of impact damage, non-structural cracks, flaking and damaged surfaces before painting, including marks left by installations or resolved minor leaks."),
    comparison: t("Se repara la superficie cuando la causa está resuelta y el soporte es estable. Movimiento, humedad activa o grietas importantes requieren diagnóstico previo.", "The surface is repaired when the cause is resolved and the substrate is stable. Movement, active damp or significant cracks require prior diagnosis."),
    services: [
      service("wall-repair", "reparacion-paredes", "wall-repair", "Reparación de paredes", "Wall repair", "agujeros, desconchados y zonas dañadas", "holes, flaking and damaged areas", "calculated", 4900, { requiresPhotos: true }),
      service("ceiling-repair", "reparacion-techos", "ceiling-repair", "Reparación de techos", "Ceiling repair", "daño localizado, grietas superficiales o marcas tras una fuga resuelta", "local damage, superficial cracks or marks after a resolved leak", "calculated", 5900, { requiresPhotos: true }),
      service("wall-smoothing", "alisar-paredes-quitar-gotele", "wall-smoothing", "Alisar paredes y quitar gotelé", "Wall smoothing and texture removal", "preparación continua para conseguir acabado liso", "continuous preparation to achieve a smooth finish", "per_m2", 1400, { unit: t("m²", "m²"), requiresPhotos: true }),
      service("crack-assessment", "reparacion-grietas", "crack-repair", "Reparación de grietas", "Crack repair", "grietas finas y estables en revestimientos", "fine, stable cracks in finishes", "quote", undefined, { requiresPhotos: true, legalNote: t("Si hay indicios de movimiento estructural, se detiene el acabado y se recomienda evaluación técnica.", "If structural movement is suspected, cosmetic work stops and technical assessment is recommended.") }),
    ],
  },
  {
    id: "drywall", slug: t("pladur", "drywall-plasterboard"), shortTitle: t("Pladur", "Drywall"),
    title: t("Pladur en Valencia: paredes, techos y reparaciones", "Drywall and plasterboard in Valencia"),
    intro: t("Soluciones en placa estándar, hidrófuga o acústica para tabiques, techos, trasdosados, cajones y reparaciones con el refuerzo adecuado al uso previsto.", "Standard, moisture-resistant or acoustic board solutions for partitions, ceilings, linings, bulkheads and repairs with reinforcement suited to the intended use."),
    comparison: t("Un parche resuelve daños localizados; deformación, humedad o una estructura deficiente pueden exigir sustituir una zona y revisar la causa.", "A patch solves local damage; distortion, damp or an inadequate frame may require replacing an area and investigating the cause."),
    services: [
      service("drywall-partition", "pared-tabique-pladur", "drywall-partition", "Pared o tabique de Pladur", "Drywall partition", "división interior con perfilería, placa y acabado de juntas", "internal division with frame, board and joint finish", "per_m2", 3500, { unit: t("m²", "m²"), requiresPhotos: true }),
      service("drywall-ceiling", "falso-techo-pladur", "drywall-ceiling", "Falso techo de Pladur", "Plasterboard false ceiling", "techo continuo, foseado o preparación para iluminación", "continuous ceiling, cove or preparation for lighting", "per_m2", 3900, { unit: t("m²", "m²"), requiresSiteVisit: true }),
      service("drywall-repair", "reparar-pladur", "drywall-repair", "Reparar Pladur", "Drywall repair", "agujeros, cortes, juntas o esquinas dañadas", "holes, cut-outs, joints or damaged corners", "calculated", 4900, { requiresPhotos: true, existingPath: "reparacion-pladur-valencia" }),
      service("moisture-drywall", "pladur-hidrofugo-bano", "moisture-resistant-drywall", "Pladur hidrófugo para baño", "Moisture-resistant plasterboard", "placa adecuada para zonas húmedas fuera de exposición directa continua", "appropriate board for humid areas outside continuous direct exposure", "quote", undefined, { requiresPhotos: true }),
    ],
  },
  {
    id: "painting", slug: t("pintura", "painting"), shortTitle: t("Pintura", "Painting"),
    title: t("Pintores en Valencia", "Painters in Valencia"),
    intro: t("Pintura interior y exterior con preparación proporcionada al soporte: protección, reparación menor, lijado, imprimación cuando procede y acabado uniforme.", "Interior and exterior painting with preparation matched to the substrate: protection, minor repair, sanding, primer where needed and an even finish."),
    comparison: t("Repintar basta sobre una base firme y limpia; humedad, moho activo, pintura suelta o grietas requieren corregir primero la causa y preparar más fondo.", "Repainting is enough on a sound, clean base; active damp, mould, loose paint or cracks require correcting the cause and deeper preparation first."),
    services: [
      service("paint-walls", "pintar-paredes", "wall-painting", "Pintar paredes", "Wall painting", "pintura lisa con protección básica y dos manos cuando la cobertura lo exige", "smooth paint with basic protection and two coats where coverage requires", "per_m2", 900, { unit: t("m²", "m²") }),
      service("paint-room", "pintar-habitacion", "room-painting", "Pintar habitación", "Room painting", "paredes y, si se selecciona, techo de una estancia", "walls and, if selected, the ceiling of one room", "calculated", 24900, { requiresPhotos: true }),
      service("paint-flat", "pintar-piso", "flat-painting", "Pintar piso completo", "Full apartment painting", "protección y pintura coordinada de varias estancias", "coordinated protection and painting across several rooms", "calculated", undefined, { requiresPhotos: true, requiresSiteVisit: true }),
      service("exterior-paint", "pintura-exterior-terraza", "exterior-terrace-painting", "Pintura exterior y terraza", "Exterior and terrace painting", "acabados compatibles con exposición solar y humedad", "coatings compatible with sun and moisture exposure", "quote", undefined, { requiresPhotos: true }),
    ],
  },
  {
    id: "floors-tiles", slug: t("suelos-azulejos", "floors-tiles"), shortTitle: t("Suelos y azulejos", "Floors & tiles"),
    title: t("Suelos, azulejos y revestimientos en Valencia", "Flooring, tiles and wall finishes in Valencia"),
    intro: t("Instalación y reparación de laminado, vinilo, rodapiés, baldosas y juntas, comprobando planeidad, humedad y compatibilidad del soporte.", "Installation and repair of laminate, vinyl, skirting, tiles and grout after checking flatness, moisture and substrate compatibility."),
    comparison: t("Una lama o baldosa aislada puede sustituirse si existe repuesto; daños extendidos, humedad o base inestable aconsejan renovar una zona completa.", "An isolated board or tile can be replaced if a match exists; widespread damage, moisture or an unstable base call for renewing a complete area."),
    services: [
      service("laminate-floor", "instalar-suelo-laminado", "laminate-floor-installation", "Instalar suelo laminado", "Laminate floor installation", "colocación flotante sobre base apta y regular", "floating installation over a suitable, even base", "per_m2", 1600, { unit: t("m²", "m²"), requiresPhotos: true }),
      service("vinyl-floor", "instalar-suelo-vinilico-spc", "vinyl-spc-flooring", "Instalar suelo vinílico o SPC", "Vinyl or SPC flooring", "instalación según sistema clic o adhesivo y soporte existente", "installation using click or adhesive systems to suit the base", "per_m2", 1800, { unit: t("m²", "m²"), requiresPhotos: true }),
      service("skirting", "instalar-rodapie", "skirting-installation", "Instalar rodapié", "Skirting board installation", "corte, colocación y remates en encuentros", "cutting, fitting and finishing at joints", "per_linear_meter", 900, { unit: t("metro lineal", "linear metre") }),
      service("tile-repair", "reparar-azulejos-juntas", "tile-grout-repair", "Reparar azulejos y juntas", "Tile and grout repair", "sustitución localizada o renovación de juntas deterioradas", "local replacement or renewal of failed grout", "calculated", 4900, { requiresPhotos: true }),
    ],
  },
  {
    id: "furniture-carpentry", slug: t("muebles-carpinteria", "furniture-carpentry"), shortTitle: t("Muebles y carpintería", "Furniture & carpentry"),
    title: t("Montaje de muebles y carpintería en Valencia", "Furniture assembly and carpentry in Valencia"),
    intro: t("Montaje, fijación, ajuste y adaptación básica de muebles, integrando el catálogo existente de IKEA, armarios, camas, mesas y almacenamiento.", "Assembly, anchoring, adjustment and basic furniture adaptation, integrated with the existing IKEA, wardrobe, bed, table and storage catalogue."),
    comparison: t("Los herrajes y ajustes suelen repararse; tableros hinchados, rotos o sin capacidad de fijación pueden requerir sustituir la pieza.", "Fittings and alignment can often be repaired; swollen, broken or non-load-bearing boards may require part replacement."),
    services: [
      service("furniture-hour", "montaje-muebles", "furniture-assembly", "Montaje de muebles", "Furniture assembly", "montaje de muebles modulares y kit con instrucciones", "assembly of flat-pack and modular furniture with instructions", "per_hour", 2500, { unit: t("hora", "hour"), existingPath: "montaje-muebles-valencia" }),
      service("wardrobe-assembly", "montaje-armario", "wardrobe-assembly", "Montaje de armario", "Wardrobe assembly", "estructura, puertas, baldas y ajuste final", "carcass, doors, shelves and final alignment", "calculated", 7900, { requiresPhotos: true, existingPath: "montaje-armario-valencia" }),
      service("furniture-wall-fixing", "fijacion-muebles-pared", "furniture-wall-fixing", "Fijación de muebles a pared", "Furniture wall anchoring", "anclaje adecuado al peso y tipo de pared", "anchoring suited to the load and wall type", "per_unit", 2900, { unit: t("mueble", "item") }),
      service("furniture-repair", "reparacion-muebles-bisagras-cajones", "furniture-hinge-drawer-repair", "Reparación de muebles, bisagras y cajones", "Furniture, hinge and drawer repair", "alineación, sustitución de herrajes y pequeños refuerzos", "alignment, hardware replacement and minor reinforcement", "calculated", 3500, { requiresPhotos: true }),
    ],
  },
  {
    id: "kitchens", slug: t("cocinas", "kitchens"), shortTitle: t("Cocinas", "Kitchens"),
    title: t("Reformas de cocinas en Valencia", "Kitchen renovations in Valencia"),
    intro: t("Abarcamos ajustes y módulos, además de reformas parciales o completas, coordinando muebles, encimera, fontanería, electricidad, iluminación, salpicadero y acabados.", "We cover adjustments and units as well as partial or complete renovation, coordinating cabinets, worktop, plumbing, electrics, lighting, splashback and finishes."),
    comparison: t("La renovación parcial conserva distribución e instalaciones útiles; una reforma completa resulta más coherente cuando cambian distribución, redes o la mayoría de elementos.", "A partial update retains a workable layout and services; a full renovation is more coherent when the layout, services or most elements change."),
    services: [
      service("kitchen-partial", "reforma-parcial-cocina", "partial-kitchen-renovation", "Reforma parcial de cocina", "Partial kitchen renovation", "renovación seleccionada de muebles, pared, encimera o instalaciones", "selected renewal of cabinets, walls, worktop or services", "quote", undefined, { requiresPhotos: true, requiresSiteVisit: true }),
      service("kitchen-full", "reforma-completa-cocina", "complete-kitchen-renovation", "Reforma completa de cocina", "Complete kitchen renovation", "desmontaje y coordinación integral de instalaciones y acabados", "strip-out and complete coordination of services and finishes", "quote", undefined, { requiresPhotos: true, requiresSiteVisit: true }),
      service("kitchen-cabinets", "montaje-muebles-cocina", "kitchen-cabinet-installation", "Montaje de muebles de cocina", "Kitchen cabinet installation", "módulos bajos y altos, nivelación y alineación", "base and wall units, levelling and alignment", "calculated", undefined, { requiresPhotos: true }),
      service("kitchen-splashback", "salpicadero-azulejos-cocina", "kitchen-splashback-tiling", "Salpicadero y azulejos de cocina", "Kitchen splashback and tiling", "preparación y colocación del revestimiento entre encimera y muebles", "preparation and tiling between worktop and wall units", "per_m2", 3900, { unit: t("m²", "m²"), requiresPhotos: true }),
    ],
  },
  {
    id: "bathrooms", slug: t("banos", "bathrooms"), shortTitle: t("Baños", "Bathrooms"),
    title: t("Reformas de baños en Valencia", "Bathroom renovations in Valencia"),
    intro: t("Reformas parciales o completas, cambio de bañera por ducha, sanitarios, mamparas, muebles, impermeabilización, azulejos, fontanería e iluminación.", "Partial or full renovations, bath-to-shower conversions, sanitaryware, screens, furniture, waterproofing, tiling, plumbing and lighting."),
    comparison: t("Una actualización parcial funciona cuando impermeabilización y redes están bien; filtraciones, distribución deficiente o instalaciones antiguas justifican una reforma completa.", "A partial update works when waterproofing and services are sound; leaks, poor layout or old services justify a complete renovation."),
    services: [
      service("bath-shower", "cambiar-banera-por-ducha", "bath-to-shower-conversion", "Cambiar bañera por ducha", "Bath to shower conversion", "retirada, adaptación de desagüe, plato, impermeabilización y remates", "removal, waste adaptation, tray, waterproofing and finishing", "quote", undefined, { requiresPhotos: true, requiresSiteVisit: true }),
      service("bathroom-partial", "reforma-parcial-bano", "partial-bathroom-renovation", "Reforma parcial de baño", "Partial bathroom renovation", "renovación de una zona o conjunto limitado de elementos", "renewal of one area or a limited group of items", "quote", undefined, { requiresPhotos: true }),
      service("bathroom-full", "reforma-completa-bano", "complete-bathroom-renovation", "Reforma completa de baño", "Complete bathroom renovation", "demolición, redes, impermeabilización, revestimientos y sanitarios", "strip-out, services, waterproofing, finishes and sanitaryware", "quote", undefined, { requiresPhotos: true, requiresSiteVisit: true }),
      service("shower-screen", "instalar-mampara-ducha", "shower-screen-installation", "Instalar mampara", "Shower screen installation", "montaje, nivelación y sellado sobre hueco compatible", "installation, levelling and sealing to a compatible opening", "calculated", 8900, { requiresPhotos: true }),
    ],
  },
  {
    id: "exterior", slug: t("terrazas-exteriores", "terraces-exterior"), shortTitle: t("Terrazas y exterior", "Terraces & exterior"),
    title: t("Trabajos exteriores y terrazas en Valencia", "Exterior and terrace work in Valencia"),
    intro: t("Reparación y mejora de terrazas, cerramientos ligeros, suelos, sellados, pintura, iluminación y elementos de jardín con materiales adecuados al sol y ambiente costero.", "Repair and improvement of terraces, light screening, floors, sealing, painting, lighting and garden elements using materials suited to sun and coastal conditions."),
    comparison: t("El mantenimiento localizado sirve con daños estables; filtraciones extensas, cubiertas, fachadas o cambios estructurales requieren inspección y proyecto específico.", "Local maintenance suits stable damage; extensive leaks, roofs, façades or structural changes require inspection and a dedicated project."),
    services: [
      service("terrace-renovation", "reforma-terraza", "terrace-renovation", "Reforma de terraza", "Terrace renovation", "coordinación de pavimento, paredes, sellado e instalaciones", "coordination of flooring, walls, sealing and services", "quote", undefined, { requiresPhotos: true, requiresSiteVisit: true }),
      service("terrace-waterproofing", "impermeabilizar-terraza", "terrace-waterproofing", "Impermeabilización de terraza", "Terrace waterproofing", "diagnóstico del recorrido del agua y sistema compatible", "diagnosis of the water path and a compatible system", "quote", undefined, { requiresSiteVisit: true }),
      service("fence-screen", "instalar-valla-ocultacion", "fence-screen-installation", "Instalar valla o panel de ocultación", "Fence or privacy screen installation", "postes, paneles y fijaciones sobre base comprobada", "posts, panels and fixings on a checked base", "per_linear_meter", 4500, { unit: t("metro lineal", "linear metre"), requiresPhotos: true }),
      service("pressure-washing", "limpieza-presion-exterior", "exterior-pressure-washing", "Limpieza exterior a presión", "Exterior pressure washing", "limpieza controlada de pavimentos y paramentos compatibles", "controlled cleaning of compatible floors and walls", "per_m2", 600, { unit: t("m²", "m²"), requiresPhotos: true }),
    ],
  },
  {
    id: "full-renovations", slug: t("reformas-integrales", "full-renovations"), shortTitle: t("Reformas integrales", "Full renovations"),
    title: t("Reformas integrales de viviendas en Valencia", "Full home renovations in Valencia"),
    intro: t("Planificación y ejecución coordinada de varias estancias o de toda la vivienda, con alcance documentado, fases, selección de acabados y profesionales regulados cuando corresponde.", "Coordinated planning and delivery across several rooms or a whole home, with documented scope, phases, finish selection and regulated professionals where required."),
    comparison: t("Una reforma parcial concentra presupuesto en áreas prioritarias; la integral evita duplicar trabajos cuando deben renovarse distribución, redes, suelos y acabados de forma conjunta.", "A partial renovation concentrates budget on priority areas; a full renovation avoids duplicated work when layout, services, floors and finishes need changing together."),
    services: [
      service("full-flat-renovation", "reforma-integral-piso", "full-apartment-renovation", "Reforma integral de piso", "Full apartment renovation", "renovación coordinada del interior de un piso", "coordinated renovation of an apartment interior", "calculated", undefined, { requiresPhotos: true, requiresSiteVisit: true }),
      service("partial-home-renovation", "reforma-parcial-vivienda", "partial-home-renovation", "Reforma parcial de vivienda", "Partial home renovation", "dos o más zonas con oficios y acabados coordinados", "two or more areas with coordinated trades and finishes", "quote", undefined, { requiresSiteVisit: true }),
      service("rental-preparation", "preparar-vivienda-alquiler-venta", "home-preparation-rental-sale", "Preparación para alquiler o venta", "Home preparation for rental or sale", "reparaciones, pintura, montaje y puesta a punto priorizada", "prioritised repairs, painting, assembly and presentation", "calculated", undefined, { requiresPhotos: true }),
      service("old-home-renovation", "reforma-casa-antigua", "old-home-renovation", "Reforma de vivienda antigua", "Older home renovation", "diagnóstico y renovación por fases respetando condicionantes existentes", "phased assessment and renewal around existing constraints", "quote", undefined, { requiresSiteVisit: true, legalNote: quoteNote }),
    ],
  },
  {
    id: "houses-chalets", slug: t("casas-chalets", "houses-villas"), shortTitle: t("Casas y chalets", "Houses & villas"),
    title: t("Reformas de casas y chalets en Valencia", "House and villa renovations in Valencia"),
    intro: t("Reformas interiores y exteriores para vivienda unifamiliar: estancias, garaje, terraza, instalaciones y mantenimiento del conjunto.", "Interior and exterior renovation for detached homes: rooms, garage, terrace, services and whole-property maintenance."),
    comparison: t("En una casa conviene valorar edificio y exterior como un sistema: una reparación interior puede depender de cubierta, terraza, drenaje o fachada.", "In a house, the building and exterior should be assessed as one system: an interior repair may depend on roof, terrace, drainage or façade."),
    services: [
      service("house-renovation", "reforma-casa", "house-renovation", "Reforma de casa", "House renovation", "renovación interior y trabajos asociados de exterior", "interior renovation and connected exterior work", "quote", undefined, { requiresSiteVisit: true }),
      service("villa-renovation", "reforma-chalet", "villa-renovation", "Reforma de chalet", "Villa renovation", "mejora coordinada de vivienda, parcela y anexos", "coordinated improvement of home, plot and outbuildings", "quote", undefined, { requiresSiteVisit: true }),
      service("garage-renovation", "reforma-garaje-trastero", "garage-storage-renovation", "Reforma de garaje o trastero", "Garage or storage renovation", "paredes, suelo, iluminación y almacenamiento", "walls, floor, lighting and storage", "quote", undefined, { requiresPhotos: true }),
      service("home-systems-update", "actualizar-electricidad-fontaneria", "home-services-update", "Actualizar electricidad y fontanería", "Electrical and plumbing update", "renovación coordinada de redes antes de cerrar paredes y acabados", "coordinated service renewal before closing walls and finishes", "quote", undefined, { requiresSiteVisit: true, legalNote: t("Los trabajos reglamentados se ejecutan con los profesionales habilitados exigibles.", "Regulated work is completed with the legally required authorised professionals.") }),
    ],
  },
  {
    id: "wood-structures", slug: t("construcciones-madera", "wood-structures"), shortTitle: t("Construcciones de madera", "Wood structures"),
    title: t("Construcciones y estructuras de madera en Valencia", "Timber structures and construction in Valencia"),
    intro: t("Pérgolas, porches, tarimas, vallas y casetas, además de estudio de proyectos mayores con protección adecuada frente a sol, humedad e insectos.", "Pergolas, porches, decking, fences and sheds, plus assessment of larger projects with suitable protection from sun, moisture and insects."),
    comparison: t("Montaje y mantenimiento cubren elementos ligeros; estructuras habitables, ampliaciones o cargas relevantes necesitan cálculo, proyecto y licencia cuando proceda.", "Assembly and maintenance cover light elements; habitable structures, extensions or significant loads require calculations, design and permits where applicable."),
    services: [
      service("wood-pergola", "pergola-madera", "timber-pergola", "Pérgola de madera", "Timber pergola", "estructura exterior dimensionada para el emplazamiento y acabado elegido", "outdoor structure sized for the location and chosen finish", "quote", undefined, { requiresSiteVisit: true }),
      service("wood-deck", "tarima-exterior-madera", "timber-decking", "Tarima exterior de madera", "Timber decking", "subestructura, tablas, remates y protección", "subframe, boards, edges and protection", "per_m2", 6500, { unit: t("m²", "m²"), requiresSiteVisit: true }),
      service("garden-shed", "caseta-jardin-madera", "timber-garden-shed", "Caseta de jardín de madera", "Timber garden shed", "montaje sobre base preparada y tratamiento de protección", "assembly on a prepared base and protective treatment", "quote", undefined, { requiresPhotos: true }),
      service("timber-house", "casa-madera", "timber-house", "Casa o cabaña de madera", "Timber house or cabin", "estudio de un proyecto habitable o estructura de mayor entidad", "assessment of a habitable building or larger structure", "quote", undefined, { requiresSiteVisit: true, legalNote: t("Puede exigir proyecto técnico, cálculo estructural, dirección facultativa y licencia municipal. El presupuesto se prepara tras estudiar viabilidad y permisos.", "A technical design, structural calculations, professional supervision and municipal permission may be required. Quotation follows feasibility and permit review.") }),
    ],
  },
  {
    id: "demolition", slug: t("demoliciones-preparacion", "strip-out-preparation"), shortTitle: t("Demolición y preparación", "Strip-out & preparation"),
    title: t("Demoliciones y preparación de obra en Valencia", "Strip-out and renovation preparation in Valencia"),
    intro: t("Desmontaje selectivo, retirada de acabados y preparación de estancias antes de reformar, con protección, clasificación y gestión prevista de residuos.", "Selective dismantling, finish removal and room preparation before renovation, with protection, sorting and planned waste handling."),
    comparison: t("El desmontaje no estructural puede presupuestarse por alcance; cualquier duda sobre muros, forjados o estabilidad exige evaluación técnica antes de tocar el elemento.", "Non-structural strip-out can be scoped directly; any doubt about walls, slabs or stability requires technical assessment before the element is touched."),
    services: [
      service("kitchen-stripout", "desmontaje-cocina", "kitchen-strip-out", "Desmontaje de cocina", "Kitchen strip-out", "retirada ordenada de muebles, encimera y elementos acordados", "controlled removal of cabinets, worktop and agreed elements", "quote", undefined, { requiresPhotos: true }),
      service("bathroom-stripout", "desmontaje-bano", "bathroom-strip-out", "Desmontaje de baño", "Bathroom strip-out", "retirada selectiva de sanitarios y revestimientos acordados", "selective removal of agreed sanitaryware and finishes", "quote", undefined, { requiresPhotos: true }),
      service("floor-tile-removal", "retirada-suelo-azulejos", "floor-tile-removal", "Retirada de suelo o azulejos", "Floor or tile removal", "demolición controlada y preparación básica del soporte", "controlled removal and basic substrate preparation", "per_m2", 1800, { unit: t("m²", "m²"), requiresPhotos: true }),
      service("nonstructural-wall", "demolicion-tabique-no-estructural", "non-structural-partition-removal", "Demolición de tabique no estructural", "Non-structural partition removal", "retirada solo después de confirmar naturaleza y servicios ocultos", "removal only after confirming construction and hidden services", "quote", undefined, { requiresSiteVisit: true, legalNote: t("Nunca se trata un muro de carga como un desmontaje simple. Si existe duda, se exige valoración técnica.", "A load-bearing wall is never treated as a simple strip-out. If there is doubt, technical assessment is mandatory.") }),
    ],
  },
];

export const RENOVATION_SERVICES = RENOVATION_CATEGORIES.flatMap((category) =>
  category.services.map((item) => ({ ...item, categoryId: category.id })),
);

export function localeKey(locale: string): "es" | "en" {
  return locale === "en" ? "en" : "es";
}

export function findRenovationCategory(locale: string, slug: string) {
  const key = localeKey(locale);
  return RENOVATION_CATEGORIES.find((category) => category.slug[key] === slug);
}

export function findRenovationService(locale: string, categorySlug: string, serviceSlug: string) {
  const category = findRenovationCategory(locale, categorySlug);
  if (!category) return undefined;
  const key = localeKey(locale);
  const item = category.services.find((candidate) => candidate.slug[key] === serviceSlug);
  return item ? { category, service: item } : undefined;
}

export function renovationHubPath(locale: string) {
  return `/${locale}/${locale === "es" ? "reformas-valencia" : "renovations-valencia"}`;
}

export function formatRenovationPrice(item: RenovationService, locale: string) {
  const key = localeKey(locale);
  if (item.priceModel === "quote" || item.priceCents == null) return key === "es" ? "Presupuesto por proyecto" : "Project quotation";
  const amount = new Intl.NumberFormat(key === "es" ? "es-ES" : "en-GB", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(item.priceCents / 100);
  if (!item.unit) return amount;
  return `${amount} / ${item.unit[key]}`;
}

export const PROJECT_SCOPE_NOTE = quoteNote;
