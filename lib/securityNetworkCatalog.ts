import type { CatalogService } from "@/lib/serviceCatalog";

export type TechnicalCategoryId =
  | "networking"
  | "cctv"
  | "fiber"
  | "access-control"
  | "intercom"
  | "alarms"
  | "commercial";

export type LocalizedText = { en: string; es: string };
export type TechnicalPriceMode =
  | "fixed"
  | "perUnit"
  | "perMeter"
  | "diagnostic"
  | "customQuote"
  | "surveyRequired";

export type TechnicalLeaf = {
  id: string;
  category: TechnicalCategoryId;
  parentPath: string;
  slug: string;
  title: LocalizedText;
  h1: LocalizedText;
  description: LocalizedText;
  intro: LocalizedText;
  intent: string;
  audience: "home" | "business" | "both";
  priceMode: TechnicalPriceMode;
  labourPrice?: number;
  capabilities: LocalizedText[];
  problems: LocalizedText[];
  situations: LocalizedText[];
  process: LocalizedText[];
  pricingNote: LocalizedText;
  faq?: Array<{ question: LocalizedText; answer: LocalizedText }>;
  related: string[];
  brands?: string[];
  indexable: boolean;
};

export const TECHNICAL_CATEGORY_PATHS: Record<TechnicalCategoryId, string> = {
  networking: "services/redes",
  cctv: "services/cctv",
  fiber: "services/fiber",
  "access-control": "services/control-de-acceso",
  intercom: "services/intercom",
  alarms: "services/alarmas",
  commercial: "services/seguridad-comercial",
};

export const TECHNICAL_CATEGORY_LABELS: Record<TechnicalCategoryId, LocalizedText> = {
  networking: { en: "WiFi & Networks", es: "WiFi y Redes" },
  cctv: { en: "CCTV & Video Surveillance", es: "CCTV y Videovigilancia" },
  fiber: { en: "Fiber Optic", es: "Fibra Óptica" },
  "access-control": { en: "Access Control", es: "Control de Acceso" },
  intercom: { en: "Intercom & Door Entry", es: "Videoporteros y Entrada" },
  alarms: { en: "Standalone Alarm Systems", es: "Alarmas Autónomas" },
  commercial: { en: "Business Infrastructure", es: "Infraestructura para Negocios" },
};

const t = (en: string, es: string): LocalizedText => ({ en, es });
const cap = (...pairs: Array<[string, string]>) => pairs.map(([en, es]) => t(en, es));

function leaf(
  category: TechnicalCategoryId,
  slug: string,
  en: string,
  es: string,
  summaryEn: string,
  summaryEs: string,
  capabilities: Array<[string, string]>,
  options: Partial<Omit<TechnicalLeaf, "id" | "category" | "parentPath" | "slug" | "title" | "h1" | "description" | "intro" | "capabilities" | "problems" | "situations" | "process" | "pricingNote" | "related" | "indexable">> = {},
): TechnicalLeaf {
  const parentPath = TECHNICAL_CATEGORY_PATHS[category];
  return {
    id: `${category}-${slug.replace(/-valencia$/, "")}`,
    category,
    parentPath,
    slug,
    title: t(`${en} | THEVULGO`, `${es} | THEVULGO`),
    h1: t(en, es),
    description: t(`${summaryEn} Professional service for homes and businesses in Valencia.`, `${summaryEs} Servicio profesional para viviendas y negocios en Valencia.`),
    intro: t(summaryEn, summaryEs),
    intent: slug.replace(/-valencia$/, ""),
    audience: options.audience || "both",
    priceMode: options.priceMode || "customQuote",
    labourPrice: options.labourPrice,
    capabilities: cap(...capabilities),
    problems: cap(
      ["Existing system diagnosis and repair", "Diagnóstico y reparación del sistema existente"],
      ["Expansion without unnecessary replacement", "Ampliación sin sustituir equipos innecesariamente"],
      ["Clean cabling and final configuration", "Cableado limpio y configuración final"],
    ),
    situations: cap(
      [`When ${capabilities[0][0].toLowerCase()} is required`, `Cuando se necesita ${capabilities[0][1].toLowerCase()}`],
      [`When an existing installation needs ${capabilities[1][0].toLowerCase()}`, `Cuando una instalación existente necesita ${capabilities[1][1].toLowerCase()}`],
      [`When the project must include ${capabilities[2][0].toLowerCase()}`, `Cuando el proyecto debe incluir ${capabilities[2][1].toLowerCase()}`],
    ),
    process: cap(
      ["Review the objective and existing infrastructure", "Revisar el objetivo y la infraestructura existente"],
      [`Plan ${capabilities[0][0].toLowerCase()} and confirm compatibility`, `Planificar ${capabilities[0][1].toLowerCase()} y confirmar compatibilidad`],
      [`Complete ${capabilities[2][0].toLowerCase()} and functional checks`, `Realizar ${capabilities[2][1].toLowerCase()} y pruebas funcionales`],
    ),
    pricingNote: options.priceMode === "fixed" || options.priceMode === "diagnostic"
      ? t("The published amount covers the stated standard labour scope. Equipment, materials and additional fault repair are confirmed separately.", "El importe publicado cubre la mano de obra estándar indicada. Equipos, materiales y reparaciones adicionales se confirman por separado.")
      : t("The final labour scope depends on quantities, routes, compatibility and access. Equipment and materials are quoted separately after review.", "El alcance final de mano de obra depende de cantidades, recorridos, compatibilidad y acceso. Equipos y materiales se presupuestan por separado tras la revisión."),
    related: [],
    brands: options.brands,
    indexable: true,
  };
}

export const TECHNICAL_LEAVES: TechnicalLeaf[] = [
  leaf("networking", "wifi-installation-valencia", "WiFi Installation in Valencia", "Instalación WiFi en Valencia", "WiFi design and installation with sensible access-point placement, coverage checks and clean configuration.", "Diseño e instalación WiFi con ubicación adecuada de puntos de acceso, revisión de cobertura y configuración limpia.", [["Coverage and channel planning", "Planificación de cobertura y canales"], ["Router and access-point setup", "Configuración de router y puntos de acceso"], ["Wired backhaul where practical", "Backhaul cableado cuando sea conveniente"]], { priceMode: "customQuote" }),
  leaf("networking", "business-wifi-valencia", "Business WiFi in Valencia", "WiFi para negocios en Valencia", "Reliable staff and guest WiFi for offices, shops, restaurants and commercial premises.", "WiFi estable para personal y clientes en oficinas, tiendas, restaurantes y locales.", [["Staff and guest separation", "Separación de redes de personal e invitados"], ["Access-point roaming", "Roaming entre puntos de acceso"], ["POS and CCTV network planning", "Planificación de red para TPV y CCTV"]], { audience: "business", priceMode: "surveyRequired" }),
  leaf("networking", "mesh-wifi-installation-valencia", "Mesh WiFi Installation in Valencia", "Instalación WiFi Mesh en Valencia", "Mesh node placement, roaming and wired-versus-wireless backhaul planning for difficult coverage.", "Ubicación de nodos mesh, roaming y planificación de backhaul cableado o inalámbrico para zonas con mala cobertura.", [["Node placement", "Ubicación de nodos"], ["Wired or wireless backhaul", "Backhaul cableado o inalámbrico"], ["Roaming and dead-zone checks", "Revisión de roaming y zonas sin señal"]]),
  leaf("networking", "vlan-configuration-valencia", "VLAN Configuration in Valencia", "Configuración VLAN en Valencia", "Practical network segmentation for staff, POS, CCTV, guests and managed infrastructure.", "Segmentación práctica de red para personal, TPV, CCTV, invitados e infraestructura gestionada.", [["Managed switch configuration", "Configuración de switch gestionable"], ["Guest, staff and CCTV segmentation", "Segmentación de invitados, personal y CCTV"], ["Router and AP coordination", "Coordinación de router y puntos de acceso"]], { audience: "business", priceMode: "surveyRequired" }),
  leaf("networking", "rj45-installation-valencia", "RJ45 Installation in Valencia", "Instalación RJ45 en Valencia", "New network outlets with Cat6 termination, keystones, cable routing and link testing.", "Nuevas tomas de red con terminación Cat6, keystones, recorrido de cable y prueba del enlace.", [["RJ45 wall outlet", "Toma RJ45 de pared"], ["Keystone termination", "Terminación de keystone"], ["Cable and link test", "Prueba de cable y enlace"]], { priceMode: "perUnit", labourPrice: 49 }),
  leaf("networking", "structured-cabling-valencia", "Structured Cabling in Valencia", "Cableado estructurado en Valencia", "Organised Cat6 or Cat6A data cabling for offices, shops, racks, access points and cameras.", "Cableado de datos Cat6 o Cat6A organizado para oficinas, tiendas, racks, puntos WiFi y cámaras.", [["Cat6 and Cat6A routes", "Recorridos Cat6 y Cat6A"], ["Patch-panel termination", "Terminación en patch panel"], ["Labelling and rack organisation", "Etiquetado y organización de rack"]], { audience: "business", priceMode: "surveyRequired" }),
  leaf("networking", "network-rack-setup-valencia", "Network Rack Setup in Valencia", "Montaje de rack de red en Valencia", "Rack setup for patch panels, switches, routers, PoE equipment and clean serviceable cabling.", "Montaje de rack para patch panels, switches, routers, equipos PoE y cableado ordenado y mantenible.", [["Rack and cabinet mounting", "Montaje de rack y armario"], ["Patch panels and switches", "Patch panels y switches"], ["Cable management and labels", "Organización y etiquetado de cables"]], { audience: "business", priceMode: "surveyRequired" }),
  leaf("networking", "unifi-installation-valencia", "UniFi Installation in Valencia", "Instalación UniFi en Valencia", "Ubiquiti UniFi access points, switches and gateways configured as one manageable network.", "Puntos de acceso, switches y gateways Ubiquiti UniFi configurados como una red gestionable.", [["UniFi AP placement", "Ubicación de AP UniFi"], ["Controller adoption and updates", "Adopción en controlador y actualizaciones"], ["Guest networks and VLANs", "Redes de invitados y VLAN"]], { brands: ["Ubiquiti", "UniFi"], priceMode: "surveyRequired" }),
  leaf("networking", "network-diagnostics-valencia", "Network Diagnostics in Valencia", "Diagnóstico de red en Valencia", "Fault diagnosis for unstable WiFi, bad Ethernet links, router issues, switching and addressing problems.", "Diagnóstico de WiFi inestable, enlaces Ethernet defectuosos y problemas de router, switching o direccionamiento.", [["WiFi and wired tests", "Pruebas WiFi y cableadas"], ["Router and switch review", "Revisión de router y switch"], ["Clear repair recommendation", "Recomendación clara de reparación"]], { priceMode: "diagnostic", labourPrice: 49 }),
  leaf("networking", "cat6-installation-valencia", "Cat6 Installation in Valencia", "Instalación Cat6 en Valencia", "Cat6 data cable routes, RJ45 outlets, patch-panel termination and link checks for reliable wired networks.", "Recorridos de cable Cat6, tomas RJ45, terminación en patch panel y comprobación de enlaces para redes cableadas fiables.", [["Cat6 cable routes", "Recorridos de cable Cat6"], ["RJ45 and patch-panel termination", "Terminación RJ45 y patch panel"], ["Labelling and link checks", "Etiquetado y comprobación de enlaces"]], { priceMode: "perMeter" }),

  leaf("cctv", "cctv-installation-valencia", "CCTV Installation in Valencia", "Instalación CCTV en Valencia", "Complete camera planning, mounting, cabling, recorder setup and remote viewing for homes and businesses.", "Planificación, montaje, cableado, configuración de grabador y acceso remoto para viviendas y negocios.", [["IP, PoE or compatible existing systems", "Sistemas IP, PoE o equipos existentes compatibles"], ["NVR/DVR and storage setup", "Configuración de NVR/DVR y almacenamiento"], ["Mobile remote viewing", "Visualización remota desde móvil"]], { priceMode: "surveyRequired" }),
  leaf("cctv", "ip-camera-installation-valencia", "IP Camera Installation in Valencia", "Instalación de cámaras IP en Valencia", "Wired IP camera installation with PoE, network addressing, recorder integration and app setup.", "Instalación de cámaras IP cableadas con PoE, direccionamiento de red, integración con grabador y app.", [["PoE cabling and switch", "Cableado y switch PoE"], ["IP addressing and NVR adoption", "Direccionamiento IP y alta en NVR"], ["Image and recording configuration", "Configuración de imagen y grabación"]], { priceMode: "perUnit", labourPrice: 69 }),
  leaf("cctv", "commercial-cctv-valencia", "Commercial CCTV in Valencia", "CCTV para negocios en Valencia", "Video surveillance infrastructure for shops, offices, restaurants, warehouses and commercial units.", "Infraestructura de videovigilancia para tiendas, oficinas, restaurantes, almacenes y locales.", [["Camera position planning", "Planificación de posiciones"], ["PoE network and NVR", "Red PoE y NVR"], ["Storage and retention planning", "Planificación de almacenamiento y retención"]], { audience: "business", priceMode: "surveyRequired" }),
  leaf("cctv", "nvr-installation-valencia", "NVR Installation in Valencia", "Instalación de NVR en Valencia", "NVR installation, camera adoption, recording schedules, storage and remote-access configuration.", "Instalación de NVR, alta de cámaras, horarios de grabación, almacenamiento y acceso remoto.", [["Camera channel setup", "Configuración de canales"], ["HDD and recording schedule", "Disco y horario de grabación"], ["App and user access", "App y acceso de usuarios"]], { priceMode: "fixed", labourPrice: 79 }),
  leaf("cctv", "remote-viewing-setup-valencia", "CCTV Remote Viewing Setup in Valencia", "Configuración de acceso remoto CCTV en Valencia", "Restore or configure secure mobile viewing for compatible NVR, DVR and IP-camera systems.", "Recuperación o configuración de visualización móvil para sistemas NVR, DVR y cámaras IP compatibles.", [["Recorder network check", "Revisión de red del grabador"], ["App account and device linking", "Vinculación de cuenta, app y equipo"], ["Remote-viewing test", "Prueba de acceso remoto"]], { priceMode: "fixed", labourPrice: 49 }),
  leaf("cctv", "hikvision-installation-valencia", "Hikvision Installation in Valencia", "Instalación Hikvision en Valencia", "Hikvision cameras, NVRs and app configuration for new or existing systems.", "Cámaras Hikvision, NVR y configuración de app para sistemas nuevos o existentes.", [["Hikvision camera and NVR setup", "Configuración de cámaras y NVR Hikvision"], ["PoE and network integration", "Integración PoE y de red"], ["Hik-Connect remote viewing", "Acceso remoto Hik-Connect"]], { brands: ["Hikvision"], priceMode: "customQuote" }),
  leaf("cctv", "dahua-installation-valencia", "Dahua Installation in Valencia", "Instalación Dahua en Valencia", "Dahua camera, recorder and mobile-app setup with network and recording configuration.", "Instalación de cámaras Dahua, grabador y app móvil con configuración de red y grabación.", [["Dahua camera setup", "Configuración de cámaras Dahua"], ["Recorder and storage", "Grabador y almacenamiento"], ["DMSS mobile access", "Acceso móvil DMSS"]], { brands: ["Dahua"], priceMode: "customQuote" }),
  leaf("cctv", "cctv-system-upgrade-valencia", "CCTV System Upgrade in Valencia", "Actualización de sistemas CCTV en Valencia", "Upgrade cameras, recorder, storage or network while retaining compatible existing cabling and equipment.", "Actualización de cámaras, grabador, almacenamiento o red conservando cableado y equipos compatibles.", [["Existing-system assessment", "Evaluación del sistema existente"], ["Analog-to-IP options", "Opciones de analógico a IP"], ["Storage and remote-viewing upgrade", "Mejora de almacenamiento y acceso remoto"]], { priceMode: "surveyRequired" }),
  leaf("cctv", "camera-repair-valencia", "Security Camera Repair in Valencia", "Reparación de cámaras de seguridad en Valencia", "Diagnosis of offline cameras, image loss, cabling, power, recorder and network faults.", "Diagnóstico de cámaras offline, pérdida de imagen y fallos de cableado, alimentación, grabador o red.", [["Power and link diagnosis", "Diagnóstico de alimentación y enlace"], ["Cable and connector checks", "Revisión de cables y conectores"], ["Recorder and network troubleshooting", "Diagnóstico de grabador y red"]], { priceMode: "diagnostic", labourPrice: 49 }),
  leaf("cctv", "poe-camera-installation-valencia", "PoE Camera Installation in Valencia", "Instalación de cámaras PoE en Valencia", "PoE camera installation with Cat6 cabling, switch power planning, NVR adoption and network configuration.", "Instalación de cámaras PoE con cableado Cat6, planificación de potencia del switch, alta en NVR y configuración de red.", [["PoE power and port planning", "Planificación de potencia y puertos PoE"], ["Cat6 camera cabling", "Cableado Cat6 para cámaras"], ["NVR and network commissioning", "Puesta en marcha de NVR y red"]], { priceMode: "perUnit", labourPrice: 69 }),

  leaf("fiber", "fiber-optic-installation-valencia", "Fiber Optic Installation in Valencia", "Instalación de fibra óptica en Valencia", "Fiber links for business backbones, racks, long runs and connections between technical areas.", "Enlaces de fibra para backbone de negocio, racks, recorridos largos y conexión entre zonas técnicas.", [["Single-mode or multimode planning", "Planificación monomodo o multimodo"], ["LC or SC termination", "Terminación LC o SC"], ["Rack and SFP integration", "Integración con rack y SFP"]], { audience: "business", priceMode: "surveyRequired" }),
  leaf("fiber", "fiber-splicing-valencia", "Fiber Splicing in Valencia", "Fusión de fibra óptica en Valencia", "Fusion splicing and restoration of compatible damaged or extended fiber links.", "Fusión y recuperación de enlaces de fibra compatibles dañados o ampliados.", [["Link and connector assessment", "Evaluación de enlace y conectores"], ["Fusion splice preparation", "Preparación de fusión"], ["Post-work fault diagnosis", "Diagnóstico posterior del enlace"]], { priceMode: "surveyRequired" }),
  leaf("fiber", "fiber-termination-valencia", "Fiber Termination in Valencia", "Terminación de fibra óptica en Valencia", "LC and SC termination for racks, patch panels and equipment links after route assessment.", "Terminación LC y SC para racks, patch panels y enlaces de equipos tras revisar el recorrido.", [["LC and SC connectors", "Conectores LC y SC"], ["Patch-panel integration", "Integración en patch panel"], ["Link testing and diagnosis", "Prueba y diagnóstico del enlace"]], { priceMode: "perUnit" }),
  leaf("fiber", "fiber-optic-repair-valencia", "Fiber Optic Repair in Valencia", "Reparación de fibra óptica en Valencia", "Diagnosis and repair planning for damaged fiber, failed connectors and interrupted links.", "Diagnóstico y reparación de fibra dañada, conectores defectuosos y enlaces interrumpidos.", [["Fault location", "Localización de avería"], ["Connector and patch-cord review", "Revisión de conectores y latiguillos"], ["Repair or replacement recommendation", "Recomendación de reparación o sustitución"]], { priceMode: "diagnostic", labourPrice: 49 }),
  leaf("fiber", "fiber-between-buildings-valencia", "Fiber Between Buildings in Valencia", "Fibra entre edificios en Valencia", "Building-to-building fiber links for reliable high-bandwidth connectivity over longer distances.", "Enlaces de fibra entre edificios para conectividad estable y de alta capacidad en distancias largas.", [["Indoor/outdoor route review", "Revisión de recorrido interior/exterior"], ["Single-mode link planning", "Planificación de enlace monomodo"], ["SFP and switch integration", "Integración con SFP y switch"]], { audience: "business", priceMode: "surveyRequired" }),
  leaf("fiber", "fiber-patch-panel-valencia", "Fiber Patch Panel Installation in Valencia", "Instalación de patch panel de fibra en Valencia", "Organised fiber termination and distribution inside a rack or technical cabinet.", "Terminación y distribución ordenada de fibra dentro de un rack o armario técnico.", [["Panel and tray setup", "Montaje de panel y bandeja"], ["Connector organisation", "Organización de conectores"], ["Rack labelling", "Etiquetado de rack"]], { audience: "business", priceMode: "surveyRequired" }),
  leaf("fiber", "fiber-testing-valencia", "Fiber Link Testing in Valencia", "Pruebas de enlaces de fibra en Valencia", "Practical fiber link checks and fault diagnosis for interrupted, unstable or newly terminated connections.", "Comprobaciones y diagnóstico de enlaces de fibra interrumpidos, inestables o recién terminados.", [["Basic continuity and link check", "Comprobación básica de continuidad y enlace"], ["Power and loss assessment where suitable", "Evaluación de potencia y pérdidas cuando proceda"], ["Repair or advanced-test recommendation", "Recomendación de reparación o prueba avanzada"]], { priceMode: "diagnostic", labourPrice: 49 }),

  leaf("access-control", "access-control-installation-valencia", "Access Control Installation in Valencia", "Instalación de control de acceso en Valencia", "Door access systems with readers, controllers, locks, exit devices, power and user configuration.", "Sistemas de acceso con lectores, controladores, cerraduras, pulsadores, alimentación y usuarios.", [["Door and frame assessment", "Evaluación de puerta y marco"], ["Reader, controller and lock", "Lector, controlador y cerradura"], ["User enrolment and testing", "Alta de usuarios y pruebas"]], { audience: "business", priceMode: "surveyRequired" }),
  leaf("access-control", "electric-strike-installation-valencia", "Electric Strike Installation in Valencia", "Instalación de cerradero eléctrico en Valencia", "Electric strike fitting and connection after checking door, frame, power and release method.", "Montaje y conexión de cerradero eléctrico tras revisar puerta, marco, alimentación y método de apertura.", [["Door compatibility review", "Revisión de compatibilidad de puerta"], ["Strike fitting and wiring", "Montaje y cableado del cerradero"], ["Release and fail-state test", "Prueba de apertura y estado de fallo"]], { priceMode: "surveyRequired" }),
  leaf("access-control", "magnetic-lock-installation-valencia", "Magnetic Lock Installation in Valencia", "Instalación de cerradura magnética en Valencia", "Magnetic lock, bracket, PSU and exit-control installation for suitable commercial doors.", "Instalación de electroimán, soporte, fuente y control de salida para puertas comerciales compatibles.", [["Door and bracket assessment", "Evaluación de puerta y soporte"], ["Power supply and controller", "Fuente de alimentación y controlador"], ["Exit button and release logic", "Pulsador de salida y lógica de apertura"]], { audience: "business", priceMode: "surveyRequired" }),
  leaf("access-control", "rfid-installation-valencia", "RFID Access Installation in Valencia", "Instalación de acceso RFID en Valencia", "RFID reader and credential setup for controlled staff or member entry.", "Instalación de lector RFID y credenciales para acceso controlado de personal o miembros.", [["Reader and credential setup", "Configuración de lector y credenciales"], ["Controller and lock integration", "Integración con controlador y cerradura"], ["User enrolment", "Alta de usuarios"]], { audience: "business", priceMode: "surveyRequired" }),
  leaf("access-control", "keypad-installation-valencia", "Access Keypad Installation in Valencia", "Instalación de teclado de acceso en Valencia", "Keypad entry for compatible doors, controllers, electric strikes and magnetic locks.", "Entrada mediante teclado para puertas, controladores, cerraderos y electroimanes compatibles.", [["Standalone or controller-based keypad", "Teclado autónomo o con controlador"], ["Codes and user setup", "Configuración de códigos y usuarios"], ["Lock and exit integration", "Integración con cerradura y salida"]], { priceMode: "surveyRequired" }),
  leaf("access-control", "access-control-repair-valencia", "Access Control Repair in Valencia", "Reparación de control de acceso en Valencia", "Fault diagnosis for readers, locks, controllers, power supplies, cabling and exit devices.", "Diagnóstico de lectores, cerraduras, controladores, fuentes, cableado y dispositivos de salida.", [["Power and controller diagnosis", "Diagnóstico de alimentación y controlador"], ["Reader and lock checks", "Revisión de lector y cerradura"], ["Repair scope before replacement", "Alcance de reparación antes de sustituir"]], { priceMode: "diagnostic", labourPrice: 49 }),

  leaf("intercom", "video-intercom-installation-valencia", "Video Intercom Installation in Valencia", "Instalación de videoportero en Valencia", "Video door-entry installation with entrance panel, indoor monitor and compatible door release.", "Instalación de videoportero con placa exterior, monitor interior y apertura de puerta compatible.", [["Entrance panel and monitor", "Placa exterior y monitor"], ["Existing wiring assessment", "Evaluación del cableado existente"], ["Electric strike integration", "Integración con cerradero eléctrico"]], { priceMode: "surveyRequired" }),
  leaf("intercom", "ip-intercom-valencia", "IP Intercom Installation in Valencia", "Instalación de videoportero IP en Valencia", "Network-based intercom for homes and businesses with compatible app, monitor and access integration.", "Videoportero basado en red para viviendas y negocios con app, monitor e integración de acceso compatibles.", [["IP network and PoE", "Red IP y PoE"], ["Indoor station or mobile app", "Monitor interior o app móvil"], ["Access-control integration", "Integración con control de acceso"]], { priceMode: "surveyRequired" }),
  leaf("intercom", "gate-intercom-valencia", "Gate Intercom Installation in Valencia", "Instalación de videoportero para portón en Valencia", "Audio or video entry at a gate with release-control and cable-route assessment.", "Entrada de audio o vídeo en portón con control de apertura y evaluación del recorrido de cable.", [["Gate station positioning", "Ubicación de placa en portón"], ["Power and communications route", "Recorrido de alimentación y comunicación"], ["Gate-release integration", "Integración de apertura de portón"]], { priceMode: "surveyRequired" }),
  leaf("intercom", "intercom-repair-valencia", "Intercom Repair in Valencia", "Reparación de portero y videoportero en Valencia", "Diagnosis of audio, video, power, call, monitor and door-release faults in compatible systems.", "Diagnóstico de audio, vídeo, alimentación, llamada, monitor y apertura en sistemas compatibles.", [["Entrance and monitor checks", "Revisión de placa y monitor"], ["Wiring and power diagnosis", "Diagnóstico de cableado y alimentación"], ["Compatible repair or upgrade plan", "Plan de reparación o mejora compatible"]], { priceMode: "diagnostic", labourPrice: 49 }),
  leaf("intercom", "fermax-intercom-valencia", "Fermax Intercom Service in Valencia", "Servicio de videoportero Fermax en Valencia", "Installation, replacement and fault diagnosis for compatible Fermax door-entry equipment.", "Instalación, sustitución y diagnóstico de equipos Fermax compatibles.", [["Existing model assessment", "Evaluación del modelo existente"], ["Panel and monitor replacement", "Sustitución de placa y monitor"], ["Door-release check", "Revisión de apertura de puerta"]], { brands: ["Fermax"], priceMode: "surveyRequired" }),
  leaf("intercom", "tegui-video-intercom-valencia", "Tegui Video Intercom Service in Valencia", "Servicio de videoportero Tegui en Valencia", "Installation, replacement and diagnosis for compatible Tegui entrance panels, monitors and door-release systems.", "Instalación, sustitución y diagnóstico de placas, monitores y abrepuertas Tegui compatibles.", [["Tegui model and wiring review", "Revisión de modelo y cableado Tegui"], ["Entrance panel and monitor", "Placa exterior y monitor"], ["Call and door-release testing", "Prueba de llamada y abrepuertas"]], { brands: ["Tegui"], priceMode: "surveyRequired" }),

  leaf("alarms", "alarm-installation-valencia", "Standalone Alarm Installation in Valencia", "Instalación de alarma autónoma en Valencia", "Standalone electronic alarm setup with hub, sensors, siren, keypad and app notifications where supported.", "Instalación de alarma electrónica autónoma con central, sensores, sirena, teclado y avisos por app cuando sea compatible.", [["Hub and sensor placement", "Ubicación de central y sensores"], ["Siren and keypad setup", "Configuración de sirena y teclado"], ["App notification configuration", "Configuración de avisos por app"]], { priceMode: "surveyRequired" }),
  leaf("alarms", "wireless-alarm-valencia", "Wireless Alarm Installation in Valencia", "Instalación de alarma inalámbrica en Valencia", "Wireless standalone alarm configuration for homes and businesses without unnecessary cable routes.", "Configuración de alarma autónoma inalámbrica para viviendas y negocios sin recorridos de cable innecesarios.", [["Wireless sensor planning", "Planificación de sensores inalámbricos"], ["Hub, keypad and siren", "Central, teclado y sirena"], ["Battery and signal checks", "Revisión de baterías y señal"]], { priceMode: "surveyRequired" }),
  leaf("alarms", "ajax-alarm-valencia", "Ajax Alarm Installation in Valencia", "Instalación de alarma Ajax en Valencia", "Ajax hub, detector, contact, siren and app setup for standalone local systems.", "Configuración de central Ajax, detectores, contactos, sirena y app para sistemas autónomos.", [["Ajax hub and device pairing", "Central Ajax y emparejamiento"], ["Detector and contact setup", "Configuración de detectores y contactos"], ["App users and notifications", "Usuarios y avisos en app"]], { brands: ["Ajax"], priceMode: "surveyRequired" }),
  leaf("alarms", "alarm-repair-valencia", "Alarm System Repair in Valencia", "Reparación de sistemas de alarma en Valencia", "Fault diagnosis for standalone alarm panels, sensors, batteries, sirens and app connectivity.", "Diagnóstico de centrales autónomas, sensores, baterías, sirenas y conectividad de app.", [["Panel and power diagnosis", "Diagnóstico de central y alimentación"], ["Sensor and battery faults", "Fallos de sensores y baterías"], ["False-alarm troubleshooting", "Diagnóstico de falsas alarmas"]], { priceMode: "diagnostic", labourPrice: 49 }),
  leaf("alarms", "alarm-sensor-installation-valencia", "Alarm Sensor Installation in Valencia", "Instalación de sensores de alarma en Valencia", "Add compatible motion detectors, door contacts, sirens or keypads to a standalone alarm system.", "Ampliación de una alarma autónoma con detectores de movimiento, contactos, sirenas o teclados compatibles.", [["Sensor position planning", "Planificación de sensores"], ["Compatible device pairing", "Vinculación de dispositivos compatibles"], ["Zone and notification testing", "Prueba de zonas y avisos"]], { priceMode: "perUnit" }),
  leaf("alarms", "alarm-app-setup-valencia", "Alarm App Setup in Valencia", "Configuración de app de alarma en Valencia", "Configure compatible standalone alarm apps, users, notifications and device connectivity.", "Configuración de apps de alarma autónoma compatibles, usuarios, notificaciones y conectividad de dispositivos.", [["Hub connectivity check", "Revisión de conectividad de la central"], ["App and user setup", "Configuración de app y usuarios"], ["Notification test", "Prueba de notificaciones"]], { priceMode: "fixed", labourPrice: 49 }),

  leaf("commercial", "office-network-installation-valencia", "Office Network Installation in Valencia", "Instalación de red para oficinas en Valencia", "A coordinated office network with structured cabling, access points, switches, rack and segmentation.", "Red de oficina coordinada con cableado estructurado, puntos WiFi, switches, rack y segmentación.", [["Structured cabling and rack", "Cableado estructurado y rack"], ["WiFi and switching", "WiFi y switching"], ["Staff, guest, CCTV and POS separation", "Separación de personal, invitados, CCTV y TPV"]], { audience: "business", priceMode: "surveyRequired" }),
  leaf("commercial", "business-security-infrastructure-valencia", "Business Security Infrastructure in Valencia", "Infraestructura de seguridad para negocios en Valencia", "Combined CCTV, network, access, intercom, cabling and fiber project planning under one technical scope.", "Planificación conjunta de CCTV, red, acceso, videoportero, cableado y fibra bajo un único alcance técnico.", [["One coordinated project brief", "Un único alcance coordinado"], ["Shared rack, network and cabling", "Rack, red y cableado compartidos"], ["Phased upgrade of existing systems", "Mejora por fases de sistemas existentes"]], { audience: "business", priceMode: "surveyRequired" }),
];

for (const item of TECHNICAL_LEAVES) {
  item.related = TECHNICAL_LEAVES
    .filter((candidate) => candidate.category === item.category && candidate.id !== item.id)
    .slice(0, 4)
    .map((candidate) => candidate.id);
}

export function getTechnicalLeaves(category?: TechnicalCategoryId) {
  return category ? TECHNICAL_LEAVES.filter((item) => item.category === category) : TECHNICAL_LEAVES;
}

export function getTechnicalLeaf(category: TechnicalCategoryId, slug: string) {
  return TECHNICAL_LEAVES.find((item) => item.category === category && item.slug === slug);
}

export function technicalLeafPath(item: TechnicalLeaf) {
  return `${item.parentPath}/${item.slug}`;
}

export const TECHNICAL_ESTIMATE_SERVICES: Record<TechnicalCategoryId, CatalogService[]> = {
  networking: [
    { id: "network-diagnostic", label: "Network / WiFi technical visit", labelEs: "Visita técnica de red / WiFi", price: 49, badge: "Diagnosis", badgeEs: "Diagnóstico" },
    { id: "router-configuration", label: "Router configuration", labelEs: "Configuración de router", price: 49 },
    { id: "rj45-repair", label: "RJ45 point repair", labelEs: "Reparación de toma RJ45", price: 49 },
    { id: "network-project-review", label: "Network project review", labelEs: "Revisión de proyecto de red", price: 0, priceLabel: "Custom project quote", priceLabelEs: "Presupuesto de proyecto" },
  ],
  cctv: [
    { id: "cctv-diagnostic", label: "CCTV technical visit", labelEs: "Visita técnica CCTV", price: 49, badge: "Diagnosis", badgeEs: "Diagnóstico" },
    { id: "cctv-remote-viewing", label: "Remote viewing setup", labelEs: "Configuración de acceso remoto", price: 49 },
    { id: "cctv-camera-replacement", label: "Replace one compatible camera", labelEs: "Sustituir una cámara compatible", price: 69, priceLabel: "€69 labour / camera", priceLabelEs: "69 € mano de obra / cámara" },
    { id: "cctv-project-review", label: "New or expanded CCTV system", labelEs: "Sistema CCTV nuevo o ampliación", price: 0, priceLabel: "Project review required", priceLabelEs: "Requiere revisión del proyecto" },
  ],
  fiber: [
    { id: "fiber-diagnostic", label: "Fiber fault diagnosis", labelEs: "Diagnóstico de avería de fibra", price: 49 },
    { id: "fiber-termination", label: "Fiber termination review", labelEs: "Revisión de terminación de fibra", price: 0, priceLabel: "Route and connector review", priceLabelEs: "Revisión de recorrido y conector" },
    { id: "fiber-project-review", label: "Fiber link / backbone project", labelEs: "Proyecto de enlace / backbone de fibra", price: 0, priceLabel: "Project review required", priceLabelEs: "Requiere revisión del proyecto" },
  ],
  "access-control": [
    { id: "access-diagnostic", label: "Access-control diagnosis", labelEs: "Diagnóstico de control de acceso", price: 49 },
    { id: "access-reader-replacement", label: "Compatible reader replacement", labelEs: "Sustitución de lector compatible", price: 0, priceLabel: "Review required", priceLabelEs: "Requiere revisión" },
    { id: "access-project-review", label: "New access-controlled door", labelEs: "Nueva puerta con control de acceso", price: 0, priceLabel: "Door review required", priceLabelEs: "Requiere revisión de puerta" },
  ],
  intercom: [
    { id: "intercom-diagnostic", label: "Intercom diagnosis", labelEs: "Diagnóstico de portero / videoportero", price: 49 },
    { id: "intercom-project-review", label: "New or upgraded intercom", labelEs: "Videoportero nuevo o actualización", price: 0, priceLabel: "Wiring review required", priceLabelEs: "Requiere revisión de cableado" },
  ],
  alarms: [
    { id: "alarm-diagnostic", label: "Standalone alarm diagnosis", labelEs: "Diagnóstico de alarma autónoma", price: 49 },
    { id: "alarm-app-setup", label: "Compatible alarm app setup", labelEs: "Configuración de app compatible", price: 49 },
    { id: "alarm-project-review", label: "New standalone alarm system", labelEs: "Nuevo sistema de alarma autónomo", price: 0, priceLabel: "Project review required", priceLabelEs: "Requiere revisión del proyecto" },
  ],
  commercial: [
    { id: "commercial-project-review", label: "Combined technical project review", labelEs: "Revisión de proyecto técnico combinado", price: 0, priceLabel: "Custom project quote", priceLabelEs: "Presupuesto personalizado" },
  ],
};
