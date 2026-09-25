export type DeepTechnicalCategory = "cctv" | "networking" | "fiber" | "access-control" | "intercom" | "alarms" | "commercial";
export type TechnicalProjectValue = string | number | boolean | string[];
export type TechnicalProjectDetails = Record<string, TechnicalProjectValue> & {
  category: DeepTechnicalCategory;
  projectType: string;
  equipmentPolicy: "quoted_separately";
  requiresReview: boolean;
};

export type TechnicalOption = { value: string; en: string; es: string };
export type TechnicalQuestion = {
  key: string;
  en: string;
  es: string;
  type: "single" | "multi" | "quantity" | "text" | "textarea";
  options?: TechnicalOption[];
  min?: number;
  showWhen?: (details: TechnicalProjectDetails) => boolean;
  optional?: boolean;
};
export type TechnicalStep = { id: string; en: string; es: string; questions: TechnicalQuestion[] };

const o = (value: string, en: string, es: string): TechnicalOption => ({ value, en, es });
const q = (key: string, en: string, es: string, options: TechnicalOption[], optional = false): TechnicalQuestion => ({ key, en, es, type: "single", options, optional });

const propertyCctv = [
  o("apartment", "Home / apartment", "Vivienda / piso"), o("house", "House / villa", "Casa / chalet"),
  o("shop", "Shop / retail", "Tienda / comercio"), o("office", "Office", "Oficina"),
  o("restaurant", "Restaurant / bar", "Restaurante / bar"), o("warehouse", "Warehouse", "Almacén / nave"),
  o("building", "Community / building", "Comunidad / edificio"), o("other", "Other", "Otro"),
];
const propertyNetwork = [
  o("apartment", "Apartment", "Piso"), o("house", "House", "Casa"), o("office", "Office", "Oficina"),
  o("shop", "Shop", "Tienda"), o("restaurant", "Restaurant", "Restaurante"), o("hotel", "Hotel / accommodation", "Hotel / alojamiento"),
  o("warehouse", "Warehouse", "Almacén"), o("other", "Other", "Otro"),
];

export const TECHNICAL_CONFIGURATOR_STEPS: Record<DeepTechnicalCategory, TechnicalStep[]> = {
  cctv: [
    { id: "project", en: "Project", es: "Proyecto", questions: [
      q("projectType", "What do you need?", "¿Qué necesitas?", [o("new-system", "Install a new system", "Instalar un sistema nuevo"), o("add-cameras", "Add cameras", "Añadir cámaras"), o("upgrade", "Replace / upgrade system", "Sustituir / actualizar sistema"), o("recorder", "Configure NVR / DVR", "Configurar NVR / DVR"), o("remote-viewing", "Configure remote viewing", "Configurar acceso remoto"), o("diagnosis", "Diagnose a fault", "Diagnosticar una avería"), o("other", "Other CCTV project", "Otro proyecto CCTV")]),
      q("propertyType", "Where will the work take place?", "¿Dónde se realizará el trabajo?", propertyCctv),
    ]},
    { id: "cameras", en: "Cameras", es: "Cámaras", questions: [
      { key: "cameraCount", en: "How many cameras?", es: "¿Cuántas cámaras?", type: "quantity", min: 1 },
      q("cameraLocation", "Where will the cameras be?", "¿Dónde estarán las cámaras?", [o("indoor", "Indoor", "Interior"), o("outdoor", "Outdoor", "Exterior"), o("mixed", "Indoor and outdoor", "Interior y exterior"), o("unknown", "Not sure", "No estoy seguro")]),
      q("systemType", "What system do you have or prefer?", "¿Qué tipo de sistema tienes o prefieres?", [o("ip-poe", "IP / PoE", "IP / PoE"), o("analog", "Analog / coaxial", "Analógico / coaxial"), o("wifi", "WiFi", "WiFi"), o("existing", "I already have a system", "Ya tengo un sistema"), o("unknown", "I need a recommendation", "Necesito recomendación")]),
    ]},
    { id: "infrastructure", en: "Infrastructure", es: "Infraestructura", questions: [
      q("recorder", "Is there an NVR / DVR?", "¿Hay NVR / DVR?", [o("existing", "Yes, it already exists", "Sí, ya existe"), o("new", "I need a new one", "Necesito uno nuevo"), o("none", "No local recording needed", "No necesito grabación local"), o("unknown", "Not sure", "No lo sé")]),
      { key: "recorderModel", en: "Recorder brand / model (optional)", es: "Marca / modelo del grabador (opcional)", type: "text", optional: true, showWhen: (d) => d.recorder === "existing" },
      q("cabling", "Does cabling already reach the cameras?", "¿Existe cableado hasta las cámaras?", [o("existing", "Yes", "Sí"), o("partial", "Partially", "Parcialmente"), o("new", "New cabling is needed", "Hay que instalarlo"), o("unknown", "Not sure", "No lo sé")]),
      { ...q("cableDistance", "Approximate cable route", "Recorrido aproximado", [o("under-10", "Under 10 m per camera", "Menos de 10 m por cámara"), o("10-30", "10–30 m", "10–30 m"), o("30-60", "30–60 m", "30–60 m"), o("over-60", "Over 60 m", "Más de 60 m"), o("unknown", "Not sure", "No lo sé")]), showWhen: (d) => d.cabling === "new" || d.cabling === "partial" },
    ]},
    { id: "equipment", en: "Equipment", es: "Equipamiento", questions: [
      q("remoteViewing", "View cameras from a phone?", "¿Quieres ver las cámaras desde el móvil?", [o("yes", "Yes", "Sí"), o("no", "No", "No"), o("configured", "Already configured", "Ya está configurado")]),
      q("equipmentStatus", "Do you already have the equipment?", "¿Ya tienes el equipo?", [o("all", "Yes, I have the equipment", "Sí, tengo cámaras/equipos"), o("partial", "I have part of it", "Tengo parte del equipo"), o("quote", "THEVULGO should prepare options", "THEVULGO debe preparar opciones"), o("unknown", "Not sure", "No estoy seguro")]),
    ]},
  ],
  networking: [
    { id: "project", en: "Project", es: "Proyecto", questions: [
      q("projectType", "What do you need?", "¿Qué necesitas?", [o("wifi-coverage", "Improve WiFi coverage", "Mejorar cobertura WiFi"), o("new-wifi", "Install new WiFi", "Instalar WiFi nuevo"), o("business-wifi", "Business WiFi", "WiFi para negocio"), o("rj45", "Install RJ45 points", "Instalar puntos RJ45"), o("cabling", "Cat6 / Cat6A cabling", "Cableado Cat6 / Cat6A"), o("rack", "Install / organise rack", "Montar / ordenar rack"), o("switch-vlan", "Configure switch / VLAN", "Configurar switch / VLAN"), o("unifi", "Install UniFi", "Instalar UniFi"), o("diagnosis", "Diagnose network", "Diagnosticar red"), o("other", "Other project", "Otro proyecto")]),
      q("propertyType", "Property type", "Tipo de inmueble", propertyNetwork),
    ]},
    { id: "space", en: "Space", es: "Espacio", questions: [
      q("areaRange", "Approximate size", "Tamaño aproximado", [o("under-80", "Under 80 m²", "Menos de 80 m²"), o("80-150", "80–150 m²", "80–150 m²"), o("150-300", "150–300 m²", "150–300 m²"), o("300-600", "300–600 m²", "300–600 m²"), o("over-600", "600+ m²", "600+ m²"), o("unknown", "Not sure", "No lo sé")]),
      q("floors", "Number of floors", "Número de plantas", [o("1", "1", "1"), o("2", "2", "2"), o("3", "3", "3"), o("4+", "4+", "4+"), o("unknown", "Not sure", "No lo sé")]),
      { key: "currentProblems", en: "What is the current problem?", es: "¿Qué problema tienes?", type: "multi", options: [o("dead-zones", "Dead zones", "Zonas sin cobertura"), o("slow", "Slow WiFi", "WiFi lento"), o("dropouts", "Dropouts", "Cortes / desconexiones"), o("floors", "Poor coverage between floors", "Mala cobertura entre plantas"), o("many-devices", "Many devices", "Muchos dispositivos"), o("guest", "Guest WiFi", "Red de invitados"), o("pos-cctv", "Stable network for CCTV / POS", "Red estable para CCTV / TPV"), o("new", "New installation", "Instalación nueva"), o("other", "Other", "Otro")] },
    ]},
    { id: "infrastructure", en: "Infrastructure", es: "Infraestructura", questions: [
      q("existingAccessPoints", "Existing WiFi access points", "Puntos WiFi / AP existentes", [o("0", "0", "0"), o("1", "1", "1"), o("2", "2", "2"), o("3", "3", "3"), o("4+", "4+", "4+"), o("unknown", "Not sure", "No lo sé")]),
      { key: "ethernetPoints", en: "New Ethernet / RJ45 points", es: "Nuevas tomas Ethernet / RJ45", type: "quantity", min: 0 },
      { key: "infrastructure", en: "What is already installed?", es: "¿Qué hay actualmente?", type: "multi", options: [o("isp-router", "ISP router", "Router del operador"), o("switch", "Switch", "Switch"), o("poe-switch", "PoE switch", "Switch PoE"), o("rack", "Rack", "Rack"), o("patch-panel", "Patch panel", "Patch panel"), o("access-points", "Access points", "Puntos de acceso"), o("cat-cabling", "Cat5e / Cat6 cabling", "Cableado Cat5e / Cat6"), o("unifi", "UniFi", "UniFi"), o("other", "Other", "Otro"), o("unknown", "Not sure", "No lo sé")] },
    ]},
    { id: "network", en: "Network", es: "Red", questions: [
      q("brand", "Current brand / system", "Marca / sistema actual", [o("unifi", "Ubiquiti / UniFi", "Ubiquiti / UniFi"), o("omada", "TP-Link / Omada", "TP-Link / Omada"), o("mikrotik", "MikroTik", "MikroTik"), o("cisco", "Cisco", "Cisco"), o("aruba", "Aruba", "Aruba"), o("isp", "ISP router", "Router operador"), o("other", "Other", "Otra"), o("unknown", "Not sure", "No lo sé")]),
      { key: "segmentation", en: "Networks to separate", es: "Redes que necesitas separar", type: "multi", options: [o("staff", "Staff", "Personal"), o("guests", "Guests", "Invitados"), o("cctv", "CCTV", "CCTV"), o("pos", "POS", "TPV/POS"), o("iot", "IoT", "IoT"), o("unknown", "Not sure", "No lo sé")], showWhen: (d) => ["office", "shop", "restaurant", "hotel", "warehouse"].includes(String(d.propertyType)) },
    ]},
  ],
  fiber: [
    { id: "project", en: "Project", es: "Proyecto", questions: [
      q("projectType", "What do you need?", "¿Qué necesitas?", [o("new", "New fiber installation", "Nueva instalación de fibra"), o("splicing", "Fusion splicing", "Fusión / splicing"), o("termination", "Termination", "Terminación"), o("repair", "Repair", "Reparación"), o("rack-link", "Link between racks", "Enlace entre racks"), o("zone-link", "Fiber between floors / zones", "Fibra entre plantas / zonas"), o("testing", "Testing / diagnosis", "Testing / diagnóstico"), o("other", "Other", "Otro")]),
      q("propertyType", "Environment", "Entorno", [o("office", "Office", "Oficina"), o("shop", "Shop", "Tienda"), o("warehouse", "Warehouse", "Nave / almacén"), o("building", "Building", "Edificio"), o("network-room", "Data / network room", "Sala técnica / de red"), o("home", "Home", "Vivienda"), o("other", "Other", "Otro")]),
    ]},
    { id: "link", en: "Link", es: "Enlace", questions: [
      q("lengthRange", "Approximate length", "Longitud aproximada", [o("under-20", "Under 20 m", "Menos de 20 m"), o("20-50", "20–50 m", "20–50 m"), o("50-100", "50–100 m", "50–100 m"), o("100-300", "100–300 m", "100–300 m"), o("over-300", "300+ m", "300+ m"), o("unknown", "Not sure", "No lo sé")]),
      { key: "links", en: "Number of links", es: "Número de enlaces", type: "quantity", min: 1 },
      q("existingFiber", "Is fiber already installed?", "¿La fibra ya está instalada?", [o("termination", "Yes, needs termination", "Sí, necesita terminación"), o("repair", "Yes, needs splicing / repair", "Sí, necesita fusión/reparación"), o("partial", "Partially", "Parcialmente"), o("new", "No, new installation", "No, instalación nueva"), o("unknown", "Not sure", "No lo sé")]),
    ]},
    { id: "fiber", en: "Fiber", es: "Fibra", questions: [
      q("fiberType", "Do you know the fiber type?", "¿Conoces el tipo de fibra?", [o("single-mode", "Single-mode", "Monomodo"), o("multimode", "Multimode", "Multimodo"), o("unknown", "Not sure", "No lo sé")]),
      q("connectorType", "Do you know the connectors?", "¿Conoces los conectores?", [o("lc", "LC", "LC"), o("sc", "SC", "SC"), o("other", "Other", "Otro"), o("unknown", "Not sure", "No lo sé")]),
    ]},
    { id: "testing", en: "Testing", es: "Comprobación", questions: [
      q("testing", "What testing is needed?", "¿Qué comprobación necesitas?", [o("basic", "Basic link test", "Prueba básica de enlace"), o("power-loss", "Power / loss check", "Comprobación de potencia / pérdida"), o("otdr", "OTDR / advanced diagnosis", "OTDR / diagnóstico avanzado"), o("unknown", "Not sure", "No lo sé")]),
    ]},
  ],
  "access-control": [
    { id: "project", en: "Project", es: "Proyecto", questions: [
      q("projectType", "What do you need?", "¿Qué necesitas?", [o("new", "Install new access control", "Instalar control de acceso nuevo"), o("add-door", "Add a door", "Añadir una puerta"), o("replace", "Replace an existing system", "Sustituir sistema existente"), o("reader", "Install a reader", "Instalar lector"), o("keypad", "Install a keypad", "Instalar teclado"), o("electric-strike", "Electric strike", "Cerradura eléctrica"), o("maglock", "Magnetic lock", "Electroimán"), o("controller", "Configure a controller", "Configurar controlador"), o("diagnosis", "Repair / diagnose", "Reparar / diagnosticar"), o("other", "Other project", "Otro proyecto")]),
      q("propertyType", "Property type", "Tipo de inmueble", [o("home", "Home", "Vivienda"), o("community", "Residential community", "Comunidad"), o("office", "Office", "Oficina"), o("shop", "Shop", "Tienda"), o("restaurant", "Restaurant", "Restaurante"), o("warehouse", "Warehouse", "Almacén / nave"), o("commercial-building", "Commercial building", "Edificio comercial"), o("other", "Other", "Otro")]),
      { key: "doorCount", en: "Number of doors", es: "Número de puertas", type: "quantity", min: 1 },
    ]},
    { id: "access", en: "Access", es: "Acceso", questions: [
      { key: "accessMethods", en: "Access methods", es: "Métodos de acceso", type: "multi", options: [o("rfid", "RFID / card", "RFID / tarjeta"), o("pin", "PIN", "PIN"), o("mobile", "Mobile / app", "Móvil / app"), o("exit-button", "Exit button", "Botón de salida"), o("intercom", "Intercom", "Intercom"), o("hybrid-key", "Key / hybrid", "Llave / híbrido"), o("biometric", "Biometric", "Biométrico"), o("unknown", "Not sure", "No lo sé")] },
      q("lockType", "Lock or door type", "Tipo de cerradura o puerta", [o("electric-strike", "Electric strike", "Cerradero eléctrico"), o("maglock", "Magnetic lock", "Electroimán"), o("existing", "Existing lock", "Cerradura existente"), o("automatic", "Automatic door / gate", "Puerta automática / acceso"), o("unknown", "Not sure", "No lo sé")]),
      q("existingSystem", "Current system", "Sistema actual", [o("new", "New installation", "Nueva instalación"), o("expansion", "Expansion", "Ampliación"), o("replacement", "Replacement", "Sustitución"), o("faulty", "Faulty system", "Sistema averiado"), o("unknown", "Not sure", "No lo sé")]),
    ]},
    { id: "infrastructure", en: "Infrastructure", es: "Infraestructura", questions: [
      q("controllerType", "Controller type", "Tipo de controlador", [o("standalone", "Standalone", "Autónomo"), o("networked", "Networked", "En red"), o("app-cloud", "App / cloud capable", "Compatible con app / cloud"), o("existing", "Existing controller", "Controlador existente"), o("unknown", "Not sure", "No lo sé")]),
      q("cabling", "Is cabling available?", "¿Hay cableado disponible?", [o("yes", "Yes", "Sí"), o("partial", "Partially", "Parcial"), o("no", "No", "No"), o("unknown", "Not sure", "No lo sé")]),
      q("powerAvailable", "Is power available at the door?", "¿Hay alimentación disponible en la puerta?", [o("yes", "Available", "Disponible"), o("no", "Not available", "No disponible"), o("unknown", "Not sure", "No lo sé")]),
      { key: "brand", en: "Existing brand / model (optional)", es: "Marca / modelo existente (opcional)", type: "text", optional: true },
    ]},
  ],
  intercom: [
    { id: "project", en: "Project", es: "Proyecto", questions: [
      q("projectType", "What do you need?", "¿Qué necesitas?", [o("new-video", "New video intercom", "Nuevo videoportero"), o("replace", "Replace a system", "Sustituir sistema"), o("ip", "IP video intercom", "Videoportero IP"), o("indoor-monitor", "Add indoor monitor", "Añadir monitor interior"), o("outdoor-panel", "Add entrance panel", "Añadir placa exterior"), o("door-release", "Door release", "Apertura de puerta"), o("mobile", "Mobile / app access", "Acceso móvil / app"), o("diagnosis", "Repair / diagnose", "Reparar / diagnosticar"), o("other", "Other", "Otro")]),
      q("propertyType", "Property type", "Tipo de inmueble", [o("apartment", "Apartment", "Piso"), o("house", "House", "Casa"), o("community", "Residential community", "Comunidad"), o("office", "Office", "Oficina"), o("business", "Business", "Negocio"), o("building", "Building", "Edificio"), o("other", "Other", "Otro")]),
    ]},
    { id: "system", en: "System", es: "Sistema", questions: [
      { key: "entrances", en: "Number of entrances", es: "Número de entradas", type: "quantity", min: 1 },
      { key: "indoorUnits", en: "Indoor monitors / units", es: "Monitores / unidades interiores", type: "quantity", min: 1 },
      q("systemType", "System type", "Tipo de sistema", [o("video", "Video", "Vídeo"), o("audio", "Audio", "Audio"), o("ip", "IP", "IP"), o("two-wire", "2-wire", "2 hilos"), o("existing", "Existing system", "Sistema existente"), o("unknown", "Not sure", "No lo sé")]),
    ]},
    { id: "infrastructure", en: "Infrastructure", es: "Infraestructura", questions: [
      q("cabling", "Existing cabling", "Cableado existente", [o("working", "Existing and working", "Existente y operativo"), o("unknown-condition", "Condition unknown", "Estado desconocido"), o("new", "New cabling needed", "Cableado nuevo"), o("unknown", "Not sure", "No lo sé")]),
      q("doorRelease", "Door release needed?", "¿Necesitas apertura de puerta?", [o("yes", "Yes", "Sí"), o("no", "No", "No"), o("existing", "A lock already exists", "Ya existe cerradura"), o("unknown", "Not sure", "No lo sé")]),
      q("mobileAccess", "Mobile app access?", "¿Acceso desde el móvil?", [o("yes", "Yes", "Sí"), o("no", "No", "No"), o("unknown", "Not sure", "No lo sé")]),
      q("brand", "Current or preferred brand", "Marca actual o preferida", [o("fermax", "Fermax", "Fermax"), o("tegui", "Tegui", "Tegui"), o("hikvision", "Hikvision", "Hikvision"), o("dahua", "Dahua", "Dahua"), o("akuvox", "Akuvox", "Akuvox"), o("other", "Other", "Otra"), o("unknown", "Not sure", "No lo sé")]),
    ]},
  ],
  alarms: [
    { id: "project", en: "Project", es: "Proyecto", questions: [
      q("projectType", "What do you need?", "¿Qué necesitas?", [o("new", "New standalone alarm", "Nueva alarma autónoma"), o("sensors", "Add sensors", "Añadir sensores"), o("siren", "Add a siren", "Añadir sirena"), o("contacts", "Door / window contacts", "Contactos de puerta / ventana"), o("app", "Configure app", "Configurar app"), o("panel", "Replace panel", "Sustituir central"), o("diagnosis", "Repair / diagnose", "Reparar / diagnosticar"), o("other", "Other", "Otro")]),
      q("propertyType", "Property type", "Tipo de inmueble", [o("apartment", "Apartment", "Piso"), o("house", "House", "Casa"), o("office", "Office", "Oficina"), o("shop", "Shop", "Tienda"), o("restaurant", "Restaurant", "Restaurante"), o("warehouse", "Warehouse", "Almacén"), o("other", "Other", "Otro")]),
      q("areaRange", "Approximate size", "Tamaño aproximado", [o("under-80", "Under 80 m²", "Menos de 80 m²"), o("80-150", "80–150 m²", "80–150 m²"), o("150-300", "150–300 m²", "150–300 m²"), o("300-600", "300–600 m²", "300–600 m²"), o("over-600", "600+ m²", "600+ m²")]),
    ]},
    { id: "devices", en: "Devices", es: "Dispositivos", questions: [
      { key: "externalDoors", en: "External doors", es: "Puertas exteriores", type: "quantity", min: 0 },
      { key: "protectedZones", en: "Zones to protect", es: "Zonas a proteger", type: "quantity", min: 1 },
      { key: "sensors", en: "Devices needed", es: "Dispositivos necesarios", type: "multi", options: [o("door-contacts", "Door contacts", "Contactos de puerta"), o("motion", "Motion detectors", "Detectores de movimiento"), o("camera-detectors", "Camera detectors", "Detectores con cámara"), o("indoor-siren", "Indoor siren", "Sirena interior"), o("outdoor-siren", "Outdoor siren", "Sirena exterior"), o("keypad", "Keypad", "Teclado"), o("remote", "Remote control", "Mando"), o("app", "Mobile app", "App móvil"), o("unknown", "Not sure", "No lo sé")] },
    ]},
    { id: "system", en: "System", es: "Sistema", questions: [
      q("existingSystem", "Current situation", "Situación actual", [o("new", "New system", "Nuevo"), o("existing", "Existing system", "Existente"), o("expansion", "Expansion", "Ampliación"), o("faulty", "Faulty", "Averiado"), o("unknown", "Not sure", "No lo sé")]),
      q("connection", "Connection", "Conexión", [o("wifi", "WiFi", "WiFi"), o("ethernet", "Ethernet", "Ethernet"), o("cellular", "Cellular-capable equipment", "Equipo con conectividad móvil"), o("unknown", "Not sure", "No lo sé")]),
      q("brand", "Current or preferred brand", "Marca actual o preferida", [o("ajax", "Ajax", "Ajax"), o("hikvision", "Hikvision", "Hikvision"), o("dahua", "Dahua", "Dahua"), o("other", "Other", "Otra"), o("unknown", "Not sure", "No lo sé")]),
      q("monitoringChoice", "Do you need third-party monitoring?", "¿Necesitas conexión con una central receptora?", [o("no", "No / self-managed", "No / sistema autogestionado"), o("yes", "I need advice about monitoring", "Necesito orientación sobre monitorización")]),
    ]},
  ],
  commercial: [
    { id: "business", en: "Business", es: "Negocio", questions: [
      q("businessType", "Business type", "Tipo de negocio", [o("office", "Office", "Oficina"), o("shop", "Shop", "Tienda"), o("restaurant", "Restaurant / bar", "Restaurante / bar"), o("hotel", "Hotel", "Hotel"), o("clinic", "Clinic", "Clínica"), o("gym", "Gym", "Gimnasio"), o("warehouse", "Warehouse", "Almacén / nave"), o("community", "Residential community", "Comunidad"), o("building", "Building", "Edificio"), o("other", "Other", "Otro")]),
      q("areaRange", "Approximate area", "Superficie aproximada", [o("under-100", "Under 100 m²", "Menos de 100 m²"), o("100-250", "100–250 m²", "100–250 m²"), o("250-500", "250–500 m²", "250–500 m²"), o("500-1000", "500–1,000 m²", "500–1.000 m²"), o("over-1000", "1,000+ m²", "1.000+ m²"), o("unknown", "Not sure", "No lo sé")]),
      q("floors", "Number of floors", "Número de plantas", [o("1", "1", "1"), o("2", "2", "2"), o("3", "3", "3"), o("4+", "4+", "4+")]),
    ]},
    { id: "systems", en: "Systems", es: "Sistemas", questions: [
      { key: "systems", en: "What systems are needed?", es: "¿Qué sistemas necesitas?", type: "multi", options: [o("cctv", "CCTV", "CCTV"), o("networking", "WiFi / network", "WiFi / red"), o("cabling", "Structured cabling", "Cableado estructurado"), o("fiber", "Fiber", "Fibra"), o("access-control", "Access control", "Control de acceso"), o("intercom", "Intercom", "Videoportero"), o("alarms", "Standalone alarm", "Alarma autónoma"), o("rack", "Rack / network room", "Rack / sala técnica")] },
      q("currentState", "Current state", "Estado actual", [o("new", "New premises", "Local nuevo"), o("renovation", "Renovation", "Reforma"), o("expansion", "Expand existing infrastructure", "Ampliar infraestructura existente"), o("replacement", "Complete replacement", "Sustitución completa"), o("faults", "Existing faults / problems", "Averías / problemas actuales"), o("unknown", "Not sure", "No lo sé")]),
      q("timeline", "Target timing", "Plazo previsto", [o("asap", "As soon as possible", "Lo antes posible"), o("1-2-weeks", "1–2 weeks", "1–2 semanas"), o("month", "This month", "Este mes"), o("1-3-months", "1–3 months", "1–3 meses"), o("planning", "Budget planning only", "Solo planificación de presupuesto")]),
    ]},
    { id: "scope", en: "Scope", es: "Alcance", questions: [
      { ...q("cameraRange", "Approximate camera count", "Número aproximado de cámaras", [o("1-4", "1–4", "1–4"), o("5-8", "5–8", "5–8"), o("9-16", "9–16", "9–16"), o("16+", "16+", "16+"), o("unknown", "Not sure", "No lo sé")]), showWhen: (d) => Array.isArray(d.systems) && d.systems.includes("cctv") },
      { key: "accessPoints", en: "WiFi access points", es: "Puntos de acceso WiFi", type: "quantity", min: 0, showWhen: (d) => Array.isArray(d.systems) && d.systems.includes("networking") },
      { key: "ethernetPoints", en: "RJ45 points", es: "Tomas RJ45", type: "quantity", min: 0, showWhen: (d) => Array.isArray(d.systems) && (d.systems.includes("networking") || d.systems.includes("cabling")) },
      { ...q("fiberLength", "Approximate fiber length", "Longitud aproximada de fibra", [o("under-50", "Under 50 m", "Menos de 50 m"), o("50-100", "50–100 m", "50–100 m"), o("100-300", "100–300 m", "100–300 m"), o("300+", "300+ m", "300+ m"), o("unknown", "Not sure", "No lo sé")]), showWhen: (d) => Array.isArray(d.systems) && d.systems.includes("fiber") },
      { key: "accessDoors", en: "Access-controlled doors", es: "Puertas con control de acceso", type: "quantity", min: 1, showWhen: (d) => Array.isArray(d.systems) && d.systems.includes("access-control") },
      { key: "entrances", en: "Intercom entrances", es: "Entradas con videoportero", type: "quantity", min: 1, showWhen: (d) => Array.isArray(d.systems) && d.systems.includes("intercom") },
      { key: "alarmZones", en: "Alarm zones", es: "Zonas de alarma", type: "quantity", min: 1, showWhen: (d) => Array.isArray(d.systems) && d.systems.includes("alarms") },
    ]},
    { id: "brief", en: "Brief", es: "Resumen", questions: [
      { key: "projectNotes", en: "Anything else we should know?", es: "¿Qué más debemos saber?", type: "textarea", optional: true },
      { key: "company", en: "Company name (optional)", es: "Nombre de empresa (opcional)", type: "text", optional: true },
      q("preferredContact", "Preferred contact", "Contacto preferido", [o("whatsapp", "WhatsApp", "WhatsApp"), o("phone", "Phone", "Teléfono"), o("email", "Email", "Email")]),
    ]},
  ],
};

export function inferTechnicalProjectType(category: DeepTechnicalCategory, serviceId?: string | null) {
  const id = serviceId || "";
  if (category === "cctv") {
    if (id.includes("remote")) return "remote-viewing";
    if (id.includes("repair") || id.includes("diagnostic")) return "diagnosis";
    if (id.includes("upgrade")) return "upgrade";
    if (id.includes("nvr") || id.includes("dvr")) return "recorder";
    if (id.includes("installation") || id.includes("project")) return "new-system";
  }
  if (category === "networking") {
    if (id.includes("diagnostic")) return "diagnosis";
    if (id.includes("rj45")) return "rj45";
    if (id.includes("cabling")) return "cabling";
    if (id.includes("rack")) return "rack";
    if (id.includes("vlan") || id.includes("switch")) return "switch-vlan";
    if (id.includes("unifi")) return "unifi";
    if (id.includes("business")) return "business-wifi";
    if (id.includes("wifi")) return "wifi-coverage";
  }
  if (category === "fiber") {
    if (id.includes("diagnostic") || id.includes("testing")) return "testing";
    if (id.includes("termination")) return "termination";
    if (id.includes("splicing")) return "splicing";
    if (id.includes("repair")) return "repair";
    if (id.includes("rack")) return "rack-link";
    if (id.includes("between") || id.includes("backbone")) return "zone-link";
    if (id.includes("installation") || id.includes("project")) return "new";
  }
  if (category === "access-control") {
    if (id.includes("repair")) return "diagnosis";
    if (id.includes("magnetic")) return "maglock";
    if (id.includes("electric")) return "electric-strike";
    if (id.includes("keypad")) return "keypad";
    if (id.includes("rfid") || id.includes("reader")) return "reader";
    if (id.includes("installation")) return "new";
  }
  if (category === "intercom") {
    if (id.includes("repair")) return "diagnosis";
    if (id.includes("ip-intercom")) return "ip";
    if (id.includes("installation")) return "new-video";
  }
  if (category === "alarms") {
    if (id.includes("repair")) return "diagnosis";
    if (id.includes("sensor")) return "sensors";
    if (id.includes("app")) return "app";
    if (id.includes("installation")) return "new";
  }
  if (category === "commercial") return "multi-system";
  return "other";
}

export function createTechnicalProjectDetails(category: DeepTechnicalCategory, serviceId?: string | null): TechnicalProjectDetails {
  return {
    category,
    projectType: inferTechnicalProjectType(category, serviceId),
    equipmentPolicy: "quoted_separately",
    requiresReview: category === "commercial",
    ...(category === "alarms" ? { standaloneSystem: true, requestedMonitoring: false } : {}),
    ...(category === "commercial" ? { multiSystem: false } : {}),
  };
}

export function visibleQuestions(step: TechnicalStep, details: TechnicalProjectDetails) {
  return step.questions.filter((question) => !question.showWhen || question.showWhen(details));
}

export function isTechnicalStepComplete(step: TechnicalStep, details: TechnicalProjectDetails) {
  return visibleQuestions(step, details).every((question) => {
    if (question.optional) return true;
    const value = details[question.key];
    return question.type === "multi" ? Array.isArray(value) && value.length > 0 : value !== undefined && value !== "";
  });
}

export function technicalProjectRequiresReview(details: TechnicalProjectDetails) {
  if (details.category === "cctv") return Number(details.cameraCount || 0) > 4 || ["shop", "office", "restaurant", "warehouse", "building"].includes(String(details.propertyType)) || details.cabling === "new" || details.systemType === "unknown";
  if (details.category === "networking") return ["150-300", "300-600", "over-600", "unknown"].includes(String(details.areaRange)) || ["3", "4+", "unknown"].includes(String(details.floors)) || Number(details.ethernetPoints || 0) > 4 || details.projectType === "switch-vlan" || details.projectType === "business-wifi";
  if (details.category === "fiber") return details.lengthRange !== "under-20" || Number(details.links || 0) > 1 || details.testing === "otdr" || ["unknown", "partial"].includes(String(details.existingFiber));
  if (details.category === "access-control") return Number(details.doorCount || 0) > 1 || ["community", "office", "shop", "restaurant", "warehouse", "commercial-building"].includes(String(details.propertyType)) || details.controllerType === "networked" || (Array.isArray(details.accessMethods) && details.accessMethods.includes("biometric")) || ["no", "unknown"].includes(String(details.cabling));
  if (details.category === "intercom") return Number(details.entrances || 0) > 1 || ["community", "building"].includes(String(details.propertyType)) || ["new", "unknown", "unknown-condition"].includes(String(details.cabling));
  if (details.category === "alarms") return details.monitoringChoice === "yes" || ["300-600", "over-600"].includes(String(details.areaRange)) || Number(details.protectedZones || 0) > 8;
  return true;
}

export function technicalOptionLabel(category: DeepTechnicalCategory, key: string, value: string, locale: string) {
  for (const step of TECHNICAL_CONFIGURATOR_STEPS[category]) {
    const question = step.questions.find((item) => item.key === key);
    const option = question?.options?.find((item) => item.value === value);
    if (option) return locale === "es" ? option.es : option.en;
  }
  return value;
}

const SUMMARY_KEYS: Record<DeepTechnicalCategory, string[]> = {
  cctv: ["projectType", "propertyType", "cameraCount", "cameraLocation", "systemType", "recorder", "cabling", "cableDistance", "remoteViewing", "equipmentStatus"],
  networking: ["projectType", "propertyType", "areaRange", "floors", "currentProblems", "existingAccessPoints", "ethernetPoints", "infrastructure", "brand", "segmentation"],
  fiber: ["projectType", "propertyType", "lengthRange", "links", "fiberType", "connectorType", "existingFiber", "testing"],
  "access-control": ["projectType", "propertyType", "doorCount", "accessMethods", "lockType", "existingSystem", "controllerType", "cabling", "powerAvailable", "brand"],
  intercom: ["projectType", "propertyType", "entrances", "indoorUnits", "systemType", "cabling", "doorRelease", "mobileAccess", "brand"],
  alarms: ["projectType", "propertyType", "areaRange", "externalDoors", "protectedZones", "sensors", "existingSystem", "connection", "brand", "monitoringChoice"],
  commercial: ["businessType", "areaRange", "floors", "systems", "currentState", "timeline", "cameraRange", "accessPoints", "ethernetPoints", "fiberLength", "accessDoors", "entrances", "alarmZones", "projectNotes", "company", "preferredContact"],
};

export function formatTechnicalProjectSummary(details: TechnicalProjectDetails, locale = "en") {
  return SUMMARY_KEYS[details.category].flatMap((key) => {
    const value = details[key];
    if (value === undefined || value === "" || (Array.isArray(value) && !value.length)) return [];
    if (key === "cameraCount") return [`${value} ${locale === "es" ? "cámaras" : "cameras"}`];
    if (key === "ethernetPoints") return [`${value} ${locale === "es" ? "tomas RJ45 nuevas" : "new RJ45 points"}`];
    if (key === "links") return [`${value} ${locale === "es" ? "enlaces" : "links"}`];
    if (key === "doorCount" || key === "accessDoors") return [`${value} ${locale === "es" ? "puertas" : "doors"}`];
    if (key === "entrances") return [`${value} ${locale === "es" ? "entradas" : "entrances"}`];
    if (key === "indoorUnits") return [`${value} ${locale === "es" ? "unidades interiores" : "indoor units"}`];
    if (key === "accessPoints") return [`${value} AP`];
    if (key === "protectedZones" || key === "alarmZones") return [`${value} ${locale === "es" ? "zonas" : "zones"}`];
    if (key === "existingAccessPoints") return [`${technicalOptionLabel(details.category, key, String(value), locale)} ${locale === "es" ? "AP existentes" : "existing APs"}`];
    const values = Array.isArray(value) ? value : [String(value)];
    return [values.map((item) => technicalOptionLabel(details.category, key, String(item), locale)).join(", ")];
  });
}
