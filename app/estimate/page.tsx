"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Calculator,
  ClipboardList,
  Hammer,
  Tv,
  Zap,
  Droplets,
  Trash2,
  ArrowRight,
  BadgeCheck,
  Clock3,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Package,
  Home,
} from "lucide-react";

type CategoryKey =
  | "tv-mounting"
  | "electrical"
  | "plumbing"
  | "furniture"
  | "drywall"
  | "repairs"
  | "doors"
  | "smart-home"
  | "kitchen"
  | "bathroom"
  | "move-in"
  | "exterior";

type ServiceItem = {
  id: string;
  label: string;
  price: number;
  note?: string;
  badge?: string;
};

type CategoryConfig = {
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  badge: string;
  services: ServiceItem[];
};

const CATEGORY_DATA: Record<CategoryKey, CategoryConfig> = {
  "tv-mounting": {
    title: "TV Mounting",
    icon: <Tv className="h-5 w-5" />,
    subtitle: "TV installation, brackets, cable routing and clean wall setups.",
    badge: "Top",
    services: [
      { id: "tv-small", label: "TV mounting up to 65”", price: 49 },
      { id: "tv-medium", label: "TV mounting from 66”", price: 59 },
      { id: "soundbar", label: "Soundbar mounting", price: 29 },
      { id: "shelf", label: "Media shelf installation", price: 35 },
      { id: "raceway", label: "Cable concealment with raceway", price: 25 },
      { id: "bracket-install", label: "Bracket installation only", price: 35 },
      { id: "device-behind-tv", label: "Your device behind TV", price: 29, badge: "Add-on",},
     {  id: "remove-old-tv", label: "Remove old TV", price: 19, badge: "Add-on",},

     { id: "inspection", label: "Visit & inspection", price: 49, badge: "Base" },
    {id: "custom-job", label: "Custom job / Not listed", price: 49, badge: "Popular" },
    ],
  },
  electrical: {
  title: "Electrical",
  icon: <Zap className="h-5 w-5" />,
  subtitle: "Lights, switches, sockets and small electrical upgrades.",
  badge: "Safe",
  services: [
    { id: "light-fixture", label: "Light fixture installation", price: 39 },
    { id: "ceiling-light", label: "Ceiling light installation", price: 45 },
    { id: "wall-light", label: "Wall light / sconce installation", price: 35 },
    { id: "switch-replace", label: "Switch replacement", price: 25 },
    { id: "socket-replace", label: "Socket / outlet replacement", price: 29 },
    { id: "dimmer-install", label: "Dimmer installation", price: 35 },
    { id: "led-strip", label: "LED strip setup", price: 35 },
    { id: "smart-switch", label: "Smart switch setup", price: 39 },
    { id: "light-repair", label: "Light repair", price: 29 },
    { id: "socket-fix", label: "Socket repair", price: 25 },
    { id: "cable-fix", label: "Visible cable tidy-up", price: 25 },
    { id: "replace-fixture", label: "Replace existing fixture", price: 35 },
    { id: "remove-old-light", label: "Remove old light", price: 10, badge: "Add-on" },
    { id: "extra-light", label: "Install extra light same visit", price: 25, badge: "Add-on" },
    { id: "small-cable-hide", label: "Small cable tidy-up", price: 15, badge: "Add-on" },

    { id: "inspection", label: "Visit & inspection", price: 49, badge: "Base" },
    {id: "custom-job", label: "Custom job / Not listed", price: 49, badge: "Popular" },
  ],
},
  plumbing: {
  title: "Plumbing",
  icon: <Droplets className="h-5 w-5" />,
  subtitle: "Faucets, sinks, toilets and visible plumbing fixes.",
  badge: "Fast",
  services: [
    { id: "faucet-install", label: "Faucet installation", price: 49 },
    { id: "sink-fix", label: "Sink fitting / visible fix", price: 45 },
    { id: "toilet-fix", label: "Toilet repair / adjustment", price: 49 },
    { id: "shower-head", label: "Shower head replacement", price: 29 },
    { id: "shower-hose", label: "Shower hose replacement", price: 29 },
    { id: "valve-replace", label: "Valve replacement", price: 39 },
    { id: "small-leak", label: "Small visible leak fix", price: 45 },
    { id: "silicone", label: "Silicone renewal", price: 39 },
    { id: "trap-fix", label: "Sink trap fix", price: 35 },
    { id: "drain-check", label: "Minor drain check", price: 29 },
    { id: "toilet-seat", label: "Toilet seat installation", price: 25 },
    { id: "shower-bracket", label: "Shower bracket installation", price: 25 },
    { id: "remove-old-faucet", label: "Remove old faucet", price: 10, badge: "Add-on" },
    { id: "seal-edges", label: "Seal edges / finish silicone", price: 15, badge: "Add-on" },
    { id: "extra-adjustment", label: "Extra fitting adjustment", price: 12, badge: "Add-on" },

    { id: "inspection", label: "Visit & inspection", price: 49, badge: "Base" },
    {id: "custom-job", label: "Custom job / Not listed", price: 49, badge: "Popular" },
  ],
},
  furniture: {
  title: "Furniture Assembly",
  icon: <Package className="h-5 w-5" />,
  subtitle: "IKEA, wardrobes, desks, beds and move-in furniture setup.",
  badge: "Popular",
  services: [
    { id: "chair", label: "Chair assembly", price: 19 },
    { id: "desk", label: "Desk assembly", price: 39 },
    { id: "bed", label: "Bed frame assembly", price: 49 },
    { id: "wardrobe", label: "Wardrobe assembly", price: 79 },
    { id: "dresser", label: "Chest of drawers assembly", price: 45 },
    { id: "shelf-unit", label: "Shelving / bookcase assembly", price: 39 },
    { id: "tv-stand", label: "TV stand / media unit assembly", price: 45 },
    { id: "wall-fix", label: "Furniture wall fixing", price: 29 },
    { id: "nightstand", label: "Nightstand assembly", price: 25 },
    { id: "coffee-table", label: "Coffee table assembly", price: 29 },
    { id: "dining-table", label: "Dining table assembly", price: 45 },
    { id: "cabinet-small", label: "Small cabinet assembly", price: 39 },
    { id: "remove-packaging", label: "Remove packaging", price: 10, badge: "Add-on" },
    { id: "minor-leveling", label: "Minor leveling / adjustment", price: 10, badge: "Add-on" },
    { id: "extra-anchor", label: "Extra anchor to wall", price: 12, badge: "Add-on" },

    { id: "inspection", label: "Visit & inspection", price: 49, badge: "Base" },
    {id: "custom-job", label: "Custom job / Not listed", price: 49, badge: "Popular" },
  ],
},

drywall: {
  title: "Drywall",
  icon: <Hammer className="h-5 w-5" />,
  subtitle: "Patching, cutouts, sanding and small wall finishing work.",
  badge: "Pro",
  services: [
    { id: "drywall-patch-small", label: "Small drywall patch", price: 35 },
    { id: "drywall-patch-medium", label: "Medium drywall patch", price: 49 },
    { id: "wall-cutout", label: "Wall cutout", price: 39 },
    { id: "anchor-hole-repair", label: "Anchor hole repair", price: 25 },
    { id: "crack-repair", label: "Crack repair", price: 29 },
    { id: "joint-touchup", label: "Joint touch-up", price: 29 },
    { id: "surface-sanding", label: "Surface prep / sanding", price: 25 },
    { id: "paint-ready", label: "Paint-ready finish area", price: 39 },
    { id: "small-hole-fill", label: "Small hole filling", price: 19 },
    { id: "wall-skim", label: "Small skim coat area", price: 35 },
    { id: "old-anchor-remove", label: "Remove old anchors", price: 19 },
    { id: "wall-touchup", label: "Minor wall touch-up", price: 25 },

    { id: "extra-sanding", label: "Extra sanding", price: 10, badge: "Add-on" },
    { id: "small-repaint", label: "Small repaint touch-up", price: 15, badge: "Add-on" },
    { id: "hardware-remove", label: "Remove old hardware", price: 10, badge: "Add-on" },

    { id: "inspection", label: "Visit & inspection", price: 49, badge: "Base" },
    {id: "custom-job", label: "Custom job / Not listed", price: 49, badge: "Popular" },
  ],
},
repairs: {
  title: "Repairs",
  icon: <Hammer className="h-5 w-5" />,
  subtitle: "Small home fixes, adjustments and practical repair work.",
  badge: "Quick",
  services: [
    { id: "minor-repair-visit", label: "Minor repair visit", price: 29 },
    { id: "curtain-adjust", label: "Curtain rod adjustment", price: 25 },
    { id: "shelf-refix", label: "Shelf re-fix", price: 25 },
    { id: "handle-repair", label: "Loose handle / fitting repair", price: 19 },
    { id: "silicone-fix", label: "Silicone / sealing fix", price: 25 },
    { id: "small-wall-fix", label: "Small wall fix", price: 25 },
    { id: "mount-correction", label: "Mounting correction / re-level", price: 29 },
    { id: "home-adjustment", label: "General home adjustment", price: 25 },
    { id: "drawer-fix", label: "Drawer adjustment", price: 19 },
    { id: "door-stop-install", label: "Door stop installation", price: 19 },
    { id: "loose-fixture-fix", label: "Loose fixture fix", price: 25 },
    { id: "small-refit", label: "Small re-fit / tighten", price: 19 },

    { id: "extra-small-fix", label: "Extra small fix same visit", price: 10, badge: "Add-on" },
    { id: "hardware-replace", label: "Hardware replacement", price: 12, badge: "Add-on" },
    { id: "finish-adjustment", label: "Re-tightening / finishing", price: 10, badge: "Add-on" },

    { id: "inspection", label: "Visit & inspection", price: 49, badge: "Base" },
    {id: "custom-job", label: "Custom job / Not listed", price: 49, badge: "Popular" },
  ],
},

doors: {
  title: "Doors & Hardware",
  icon: <Home className="h-5 w-5" />,
  subtitle: "Handles, hinges, locks and visible door hardware fixes.",
  badge: "Fix",
  services: [
    { id: "door-handle", label: "Door handle replacement", price: 25 },
    { id: "hinge-adjust", label: "Hinge adjustment", price: 25 },
    { id: "lock-replace", label: "Lock replacement (basic)", price: 39 },
    { id: "closer-adjust", label: "Door closer adjustment", price: 29 },
    { id: "strike-plate", label: "Strike plate adjustment", price: 19 },
    { id: "latch-fix", label: "Latch alignment fix", price: 25 },
    { id: "cabinet-handle", label: "Cabinet handle installation", price: 19 },
    { id: "door-align", label: "Minor door alignment", price: 29 },
    { id: "door-stop", label: "Door stop install", price: 19 },
    { id: "peephole-install", label: "Peephole installation", price: 25 },
    { id: "closet-door-fix", label: "Closet door adjustment", price: 25 },
    { id: "small-lock-fix", label: "Small lock fix", price: 29 },

    { id: "remove-old-hardware", label: "Remove old hardware", price: 10, badge: "Add-on" },
    { id: "extra-handle", label: "Extra handle same visit", price: 8, badge: "Add-on" },
    { id: "finish-adjust", label: "Small finish adjustment", price: 10, badge: "Add-on" },

    { id: "inspection", label: "Visit & inspection", price: 49, badge: "Base" },
    {id: "custom-job", label: "Custom job / Not listed", price: 49, badge: "Popular" },
  ],
},
"smart-home": {
  title: "Smart Home",
  icon: <Zap className="h-5 w-5" />,
  subtitle: "Cameras, doorbells, sensors and smart home device setup.",
  badge: "Smart",
  services: [
    { id: "camera-setup", label: "Camera setup", price: 39 },
    { id: "doorbell-setup", label: "Smart doorbell setup", price: 39 },
    { id: "smart-lock", label: "Smart lock installation", price: 49 },
    { id: "sensor-setup", label: "Sensor setup", price: 25 },
    { id: "smart-plug", label: "Smart plug setup", price: 19 },
    { id: "smart-switch", label: "Smart switch setup", price: 39 },
    { id: "wifi-device", label: "Wi-Fi device setup", price: 25 },
    { id: "app-pairing", label: "App connection / pairing", price: 19 },
    { id: "indoor-camera", label: "Indoor camera install", price: 35 },
    { id: "outdoor-camera", label: "Outdoor camera setup", price: 49 },
    { id: "hub-setup", label: "Smart hub setup", price: 35 },
    { id: "device-reset", label: "Smart device reset / reconnect", price: 25 },

    { id: "extra-device-pair", label: "Extra device pairing", price: 10, badge: "Add-on" },
    { id: "smart-cable-tidy", label: "Cable tidy-up", price: 12, badge: "Add-on" },
    { id: "remove-old-device", label: "Remove old smart device", price: 10, badge: "Add-on" },

    { id: "inspection", label: "Visit & inspection", price: 49, badge: "Base" },
    {id: "custom-job", label: "Custom job / Not listed", price: 49, badge: "Popular" },
  ],
},

kitchen: {
  title: "Kitchen",
  icon: <Home className="h-5 w-5" />,
  subtitle: "Kitchen fittings, shelves, rails and practical installations.",
  badge: "Kitchen",
  services: [
    { id: "kitchen-shelf", label: "Kitchen shelf install", price: 35 },
    { id: "kitchen-rail", label: "Kitchen rail install", price: 29 },
    { id: "cabinet-handle", label: "Cabinet handle installation", price: 19 },
    { id: "cabinet-adjust", label: "Cabinet door adjustment", price: 25 },
    { id: "under-light", label: "Under-cabinet light install", price: 35 },
    { id: "backsplash-accessory", label: "Kitchen accessory mounting", price: 25 },
    { id: "dish-rack", label: "Dish rack installation", price: 25 },
    { id: "wall-hook", label: "Kitchen wall hooks / bar", price: 19 },
    { id: "small-shelf", label: "Small spice shelf install", price: 25 },
    { id: "bin-system", label: "Waste bin system install", price: 29 },
    { id: "filter-bracket", label: "Filter / bracket mounting", price: 29 },
    { id: "kitchen-finish-fix", label: "Small kitchen fitting fix", price: 25 },

    { id: "extra-handle-kitchen", label: "Extra handle same visit", price: 8, badge: "Add-on" },
    { id: "remove-old-accessory", label: "Remove old accessory", price: 10, badge: "Add-on" },
    { id: "small-seal-finish", label: "Small seal / finish touch-up", price: 10, badge: "Add-on" },

    { id: "inspection", label: "Visit & inspection", price: 49, badge: "Base" },
    {id: "custom-job", label: "Custom job / Not listed", price: 49, badge: "Popular" },
  ],
},

bathroom: {
  title: "Bathroom",
  icon: <Droplets className="h-5 w-5" />,
  subtitle: "Mirrors, holders, cabinets and bathroom fitting work.",
  badge: "Bath",
  services: [
    { id: "mirror-install", label: "Mirror installation", price: 35 },
    { id: "holder-install", label: "Towel / paper holder install", price: 25 },
    { id: "bath-cabinet", label: "Bathroom cabinet installation", price: 39 },
    { id: "shower-shelf", label: "Shower shelf install", price: 25 },
    { id: "soap-dispenser", label: "Soap dispenser mount", price: 19 },
    { id: "toilet-holder", label: "Toilet paper holder install", price: 19 },
    { id: "robe-hook", label: "Robe hook installation", price: 19 },
    { id: "small-seal", label: "Bathroom silicone touch-up", price: 25 },
    { id: "bath-light-fix", label: "Bathroom light fitting fix", price: 29 },
    { id: "glass-shelf", label: "Glass shelf installation", price: 29 },
    { id: "mirror-adjust", label: "Mirror re-level / adjust", price: 19 },
    { id: "bath-accessory-set", label: "Bathroom accessory set install", price: 39 },

    { id: "remove-old-holder", label: "Remove old holder", price: 10, badge: "Add-on" },
    { id: "extra-accessory", label: "Extra accessory same visit", price: 8, badge: "Add-on" },
    { id: "silicone-finish-bath", label: "Finish silicone touch-up", price: 12, badge: "Add-on" },

    { id: "inspection", label: "Visit & inspection", price: 49, badge: "Base" },
    {id: "custom-job", label: "Custom job / Not listed", price: 49, badge: "Popular" },
  ],
},


"move-in": {
  title: "Move-In Setup",
  icon: <Package className="h-5 w-5" />,
  subtitle: "Apartment setup, curtains, furniture and move-in help.",
  badge: "Setup",
  services: [
    { id: "curtain-install", label: "Curtain installation", price: 35 },
    { id: "blind-install", label: "Blind installation", price: 35 },
    { id: "shelf-install", label: "Shelf installation", price: 29 },
    { id: "mirror-mount", label: "Mirror mounting", price: 35 },
    { id: "wall-hook-set", label: "Wall hooks / small accessories", price: 19 },
    { id: "tv-stand-setup", label: "TV stand setup", price: 39 },
    { id: "bed-setup", label: "Bed setup", price: 49 },
    { id: "desk-setup", label: "Desk setup", price: 39 },
    { id: "dresser-setup", label: "Dresser setup", price: 45 },
    { id: "basic-room-setup", label: "Basic room setup", price: 49 },
    { id: "entryway-setup", label: "Entryway setup", price: 29 },
    { id: "movein-essentials", label: "Move-in essentials install", price: 49 },

    { id: "packaging-remove", label: "Packaging removal", price: 10, badge: "Add-on" },
    { id: "extra-small-install", label: "Extra small install same visit", price: 10, badge: "Add-on" },
    { id: "layout-adjust", label: "Minor layout adjustment", price: 12, badge: "Add-on" },

    { id: "inspection", label: "Visit & inspection", price: 49, badge: "Base" },
    {id: "custom-job", label: "Custom job / Not listed", price: 49, badge: "Popular" },
  ],
},
exterior: {
  title: "Exterior",
  icon: <Home className="h-5 w-5" />,
  subtitle: "Outdoor work, facade items, fences and exterior fixes.",
  badge: "House",
  services: [
    { id: "exterior-repair", label: "Exterior repair", price: 49 },
    { id: "fence-repair", label: "Fence repair", price: 45 },
    { id: "outdoor-light", label: "Outdoor light install", price: 49 },
    { id: "house-number", label: "House number install", price: 19 },
    { id: "mailbox-mount", label: "Mailbox installation", price: 29 },
    { id: "doorbell-exterior", label: "Exterior doorbell install", price: 29 },
    { id: "outdoor-camera", label: "Outdoor camera mount", price: 49 },
    { id: "wall-hook-outdoor", label: "Outdoor wall hook / bracket", price: 25 },
    { id: "small-gate-fix", label: "Small gate adjustment", price: 35 },
    { id: "exterior-silicone", label: "Exterior sealing touch-up", price: 29 },
    { id: "outdoor-accessory", label: "Outdoor accessory mount", price: 25 },
    { id: "small-facade-fix", label: "Small facade fix", price: 39 },

    { id: "remove-old-outdoor-item", label: "Remove old outdoor item", price: 10, badge: "Add-on" },
    { id: "extra-outdoor-fix", label: "Extra outdoor fix same visit", price: 15, badge: "Add-on" },
    { id: "weather-finish", label: "Weather finish touch-up", price: 12, badge: "Add-on" },

    { id: "inspection", label: "Visit & inspection", price: 49, badge: "Base" },
    {id: "custom-job", label: "Custom job / Not listed", price: 49, badge: "Popular" },
  ],
},

};



const CATEGORY_OPTIONS: { key: CategoryKey; label: string }[] = [
  { key: "tv-mounting", label: "TV Mounting" },
  { key: "electrical", label: "Electrical" },
  { key: "plumbing", label: "Plumbing" },
  { key: "furniture", label: "Furniture Assembly" },
  { key: "drywall", label: "Drywall" },
  { key: "repairs", label: "Repairs" },
  { key: "doors", label: "Doors & Hardware" },
  { key: "smart-home", label: "Smart Home" },
  { key: "kitchen", label: "Kitchen" },
  { key: "bathroom", label: "Bathroom" },
  { key: "move-in", label: "Move-In Setup" },
  { key: "exterior", label: "Exterior" },
];

function EstimatePageContent() {
  const searchParams = useSearchParams();

  const initialCategory = (() => {
  const raw = searchParams.get("category");
  if (
    raw === "tv-mounting" ||
    raw === "electrical" ||
    raw === "plumbing" ||
    raw === "furniture" ||
    raw === "drywall" ||
    raw === "repairs" ||
    raw === "doors" ||
    raw === "smart-home" ||
    raw === "kitchen" ||
    raw === "bathroom" ||
    raw === "move-in" ||
    raw === "exterior"
  ) {
    return raw;
  }
  return "tv-mounting" as CategoryKey;
})();

const [category, setCategory] = useState<CategoryKey>(initialCategory);
const [categoryPage, setCategoryPage] = useState(0);
const [categoryDirection, setCategoryDirection] = useState<"next" | "prev">("next");
const [quantities, setQuantities] = useState<Record<string, number>>({});
const [submitStage, setSubmitStage] = useState<"build" | "review" | "success">("build");
const [formErrors, setFormErrors] = useState<Record<string, string>>({});

const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
const [fieldStatus, setFieldStatus] = useState<
  Record<string, "default" | "error" | "success">
>({});

const [isSending, setIsSending] = useState(false);
const [sendError, setSendError] = useState("");
const [client, setClient] = useState({
  fullName: "",
  email: "",
  phone: "",
  city: "Valencia",
  customCity: "",
  area: "",
  houseAddress: "",
  apartmentNumber: "",
  addressDetails: "",
  preferredDate: "",
  preferredTime: "",
  notes: "",
});

const CITY_AREA_OPTIONS: Record<string, string[]> = {
  Valencia: [
    "Ciutat Vella",
    "Russafa",
    "El Pla del Remei",
    "La Gran Via",
    "Campanar",
    "Marxalenes",
    "Morvedre",
    "Trinitat",
    "Benimaclet",
    "Algirós",
    "El Cabanyal - El Canyamelar",
    "La Malva-rosa",
    "Aiora",
    "Amistat",
    "Mestalla",
    "Patraix",
    "Safranar",
    "Favara",
    "Arrancapins",
    "Botànic",
    "La Roqueta",
    "La Petxina",
    "Benicalap",
    "Torrefiel",
    "Orriols",
    "Sant Antoni",
    "Jesús",
    "Sant Marcel·lí",
    "Camí Real",
    "Malilla",
    "Monteolivete",
    "En Corts",
    "Natzaret",
    "Quatre Carreres",
    "Beniferri",
    "Benimàmet",
  ],

  Torrent: ["Centre", "El Vedat", "Parc Central"],
  Paterna: ["Centro", "La Canyada", "Valterna", "Terramelar", "Campamento"],
  Burjassot: ["Centro", "Empalme", "Cantereria"],
  Alboraia: ["Alboraia Centre", "Port Saplaya", "La Patacona"],
  Mislata: ["Centro", "La Constitución", "El Quint"],
};

const CITY_OPTIONS = [
  "Valencia",
  "Mislata",
  "Xirivella",
  "Aldaia",
  "Alaquàs",
  "Quart de Poblet",
  "Manises",
  "Paterna",
  "Burjassot",
  "Godella",
  "Rocafort",
  "Moncada",
  "Tavernes Blanques",
  "Alboraia",
  "Sedaví",
  "Benetússer",
  "Alfafar",
  "Paiporta",
  "Picanya",
  "Torrent",
  "Catarroja",
  "Massanassa",
  "Silla",
  "My city is not listed",
];

const TIME_OPTIONS = [
  "07:00",
   "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

  
  useEffect(() => {
  const raw = searchParams.get("category");

  if (
    raw === "tv-mounting" ||
    raw === "electrical" ||
    raw === "plumbing" ||
    raw === "furniture" ||
    raw === "drywall" ||
    raw === "repairs" ||
    raw === "doors" ||
    raw === "smart-home" ||
    raw === "kitchen" ||
    raw === "bathroom" ||
    raw === "move-in" ||
    raw === "exterior"
  ) {
    setCategory(raw);
    setQuantities({});
  }
}, [searchParams]);

  const currentCategory = CATEGORY_DATA[category];

  const selectedServices = useMemo(() => {
    return currentCategory.services
      .filter((service) => (quantities[service.id] || 0) > 0)
      .map((service) => {
        const qty = quantities[service.id] || 0;
        return {
          ...service,
          qty,
          subtotal: qty * service.price,
        };
      });
  }, [currentCategory.services, quantities]);

  const estimatedTotal = useMemo(() => {
    return selectedServices.reduce((sum, item) => sum + item.subtotal, 0);
  }, [selectedServices]);

  const subtotal = Number(estimatedTotal.toFixed(2));
const iva = Number((subtotal * 0.21).toFixed(2));
const totalWithTax = Number((subtotal + iva).toFixed(2));

  const setQty = (id: string, value: number) => {
    setQuantities((prev) => {
      const next = { ...prev };
      if (value <= 0) {
        delete next[id];
      } else {
        next[id] = value;
      }
      return next;
    });
  };

const addOne = (id: string) => setQty(id, (quantities[id] || 0) + 1);
const removeOne = (id: string) => setQty(id, (quantities[id] || 0) - 1);
const clearAll = () => setQuantities({});

const selectedCityAreas = CITY_AREA_OPTIONS[client.city] || [];
const hasAreaOptions = selectedCityAreas.length > 0;
const isCustomCity = client.city === "My city is not listed";
const displayCity = isCustomCity ? client.customCity : client.city;
const hasSelectedServices = selectedServices.length > 0;
const hasContact = client.email.trim() !== "" || client.phone.trim() !== "";

const madridNowParts = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Madrid",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
}).formatToParts(new Date());

const getMadridPart = (type: string) =>
  madridNowParts.find((part) => part.type === type)?.value || "";

const todayDateString = `${getMadridPart("year")}-${getMadridPart("month")}-${getMadridPart("day")}`;
const minSelectableDate = todayDateString;

const madridCurrentHour = Number(getMadridPart("hour"));
const madridCurrentMinute = Number(getMadridPart("minute"));

const nextAvailableHour =
  madridCurrentMinute > 0 ? madridCurrentHour + 1 : madridCurrentHour;

const availableTimeOptions =
  client.preferredDate === todayDateString
    ? TIME_OPTIONS.filter((time) => {
        const hour = Number(time.split(":")[0]);
        return hour >= nextAvailableHour;
      })
    : TIME_OPTIONS;

const isValidEmail = (value: string) => {
  if (!value.trim()) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};

const normalizePhone = (value: string) => value.replace(/[^\d+]/g, "");

const isValidPhone = (value: string) => {
  if (!value.trim()) return true;
  const normalized = normalizePhone(value);
  const digitsOnly = normalized.replace(/\D/g, "");
  return digitsOnly.length >= 7;
};

const categoriesPerPage = 4;
const totalCategoryPages = Math.ceil(CATEGORY_OPTIONS.length / categoriesPerPage);

const visibleCategoryOptions = CATEGORY_OPTIONS.slice(
  categoryPage * categoriesPerPage,
  categoryPage * categoriesPerPage + categoriesPerPage
);

const setFieldValue = (field: string, value: string) => {
  setClient((prev) => ({ ...prev, [field]: value }));

  setFieldErrors((prev) => {
    const next = { ...prev };
    delete next[field];

    if (field === "email" || field === "phone") {
      delete next.contact;
    }

    return next;
  });

  setFieldStatus((prev) => ({
    ...prev,
    [field]: "default",
  }));
};

const setFieldSuccessIfValid = (field: string, value?: string) => {
  let isValid = false;

  switch (field) {
    case "fullName":
      isValid = Boolean((value ?? client.fullName).trim());
      break;

    case "email": {
      const v = (value ?? client.email).trim();
      isValid = v !== "" && isValidEmail(v);
      break;
    }

    case "phone": {
      const v = (value ?? client.phone).trim();
      isValid = v !== "" && isValidPhone(v);
      break;
    }

    case "area":
      isValid = Boolean((value ?? client.area).trim());
      break;

    case "houseAddress":
      isValid = Boolean((value ?? client.houseAddress).trim());
      break;

    case "preferredDate": {
      const v = (value ?? client.preferredDate).trim();
      isValid = Boolean(v) && v >= todayDateString;
      break;
    }

    case "preferredTime": {
      const v = (value ?? client.preferredTime).trim();
      isValid = Boolean(v) && availableTimeOptions.includes(v);
      break;
    }

    case "customCity":
      isValid = Boolean((value ?? client.customCity).trim());
      break;

    default:
      isValid = false;
  }

  setFieldStatus((prev) => ({
    ...prev,
    [field]: isValid ? "success" : "default",
  }));
};

const validateEstimateForm = () => {
  const errors: Record<string, string> = {};
  const statuses: Record<string, "default" | "error" | "success"> = {};

  if (!hasSelectedServices) {
    errors.services = "Select at least one service.";
  }

  if (!client.fullName.trim()) {
    errors.fullName = "Enter your full name.";
    statuses.fullName = "error";
  } else {
    statuses.fullName = "success";
  }

  if (!hasContact) {
    errors.contact = "Enter phone or email.";
    statuses.email = "error";
    statuses.phone = "error";
  } else {
    if (client.email.trim()) {
      if (!isValidEmail(client.email)) {
        errors.email = "Enter a valid email address.";
        statuses.email = "error";
      } else {
        statuses.email = "success";
      }
    }

    if (client.phone.trim()) {
      if (!isValidPhone(client.phone)) {
        errors.phone = "Enter a valid phone number.";
        statuses.phone = "error";
      } else {
        statuses.phone = "success";
      }
    }

    if (!client.email.trim() && !client.phone.trim()) {
      statuses.email = "error";
      statuses.phone = "error";
    }
  }

  if (!displayCity?.trim()) {
    errors.city = "Choose your city.";
    statuses.city = "error";
    statuses.customCity = "error";
  } else {
    if (isCustomCity) {
      statuses.customCity = "success";
    } else {
      statuses.city = "success";
    }
  }

  if (!client.area.trim()) {
    errors.area = "Enter or choose area / district.";
    statuses.area = "error";
  } else {
    statuses.area = "success";
  }

  if (!client.houseAddress.trim()) {
    errors.houseAddress = "Enter house address.";
    statuses.houseAddress = "error";
  } else {
    statuses.houseAddress = "success";
  }

  if (!client.preferredDate.trim()) {
    errors.preferredDate = "Choose preferred date.";
    statuses.preferredDate = "error";
  } else if (client.preferredDate < todayDateString) {
    errors.preferredDate = "Past dates are not available.";
    statuses.preferredDate = "error";
  } else {
    statuses.preferredDate = "success";
  }

  if (!client.preferredTime.trim()) {
    errors.preferredTime = "Choose preferred time.";
    statuses.preferredTime = "error";
  } else if (client.preferredDate === todayDateString) {
    const selectedHour = Number(client.preferredTime.split(":")[0]);
    if (selectedHour < nextAvailableHour) {
      errors.preferredTime = "Choose a time at least 1 hour from now.";
      statuses.preferredTime = "error";
    } else {
      statuses.preferredTime = "success";
    }
  } else if (!availableTimeOptions.includes(client.preferredTime)) {
    errors.preferredTime = "Selected time is not available for this date.";
    statuses.preferredTime = "error";
  } else {
    statuses.preferredTime = "success";
  }

  setFormErrors(errors);
  setFieldErrors(errors);
  setFieldStatus((prev) => ({ ...prev, ...statuses }));

  return Object.keys(errors).length === 0;
};

const handleNextStep = () => {
  if (!validateEstimateForm()) return;
  setSubmitStage("review");
};

const handleBackToEdit = () => {
  setSendError("");
  setSubmitStage("build");
};



const handleConfirmSend = async () => {
  try {
    setIsSending(true);
    setSendError("");

const payload = {
  fullName: client.fullName,
  email: client.email,
  phone: client.phone,
  city: displayCity,
  area: client.area,
  houseAddress: client.houseAddress,
  apartmentNumber: client.apartmentNumber,
  addressDetails: client.addressDetails,
  preferredDate: client.preferredDate,
  preferredTime: client.preferredTime,
  notes: client.notes,
  category: currentCategory.title,
  services: selectedServices,
  subtotal,
  iva,
  total: totalWithTax,
  scheduledAt:
    client.preferredDate && client.preferredTime
      ? `${client.preferredDate}T${client.preferredTime}:00`
      : null,
};

console.log("FRONT SEND PAYLOAD", payload);


    const response = await fetch("/api/send", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});
       

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || "Failed to send request");
    }

    setSubmitStage("success");
  } catch (error) {
    console.error("SEND REQUEST ERROR:", error);
    setSendError("Request was not sent. Please try again.");
  } finally {
    setIsSending(false);
  }
};

useEffect(() => {
  const categoryIndex = CATEGORY_OPTIONS.findIndex(
    (item) => item.key === category
  );

  if (categoryIndex >= 0) {
    setCategoryPage(Math.floor(categoryIndex / 4));
  }
}, [category]);

// 👇 ВОТ СЮДА ВСТАВЛЯЕМ
useEffect(() => {
  if (
    client.preferredDate === todayDateString &&
    client.preferredTime &&
    !availableTimeOptions.includes(client.preferredTime)
  ) {
    setClient((prev) => ({
      ...prev,
      preferredTime: "",
    }));
  }
}, [client.preferredDate, client.preferredTime, todayDateString, availableTimeOptions]);

return (

  <div className="min-h-screen overflow-x-clip bg-white text-black font-sans lg:overflow-x-visible">
    <section className="relative overflow-x-clip px-4 pt-4 pb-8 sm:pt-2 sm:pb-2 lg:overflow-x-visible">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute left-1/2 top-0 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-yellow-200/35 blur-3xl" />
        <div className="absolute right-8 top-24 h-[320px] w-[320px] rounded-full bg-yellow-100/70 blur-3xl" />
      </div>

        <div className="mx-auto w-full max-w-7xl">
          

          

          <div className="mt-4 grid grid-cols-1 gap-8 sm:mt-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-8 lg:h-fit">
              <section className="rounded-3xl border border-yellow-400 bg-white p-6 shadow-xl sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-3 py-1 text-xs font-semibold text-black">
                      <ClipboardList className="h-4 w-4" />
                      Step 1 • Choose category
                    </div>
                    <h2 className="mt-4 text-2xl font-extrabold text-black sm:text-3xl">
                      Select your service category
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                      If you came from a service page, your category can already be preselected.
                      You can still switch it here at any time.
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-md sm:flex">
                    {currentCategory.icon}
                  </div>
                </div>

                <div className="mt-6">
  <div className="mb-4 flex items-center justify-between gap-4">
    <div className="text-sm text-gray-500">
      Page {categoryPage + 1} of {totalCategoryPages}
    </div>

    <div className="flex items-center gap-2">
  <button
    type="button"
    onClick={() => {
      setCategoryDirection("prev");
      setCategoryPage((prev) => Math.max(prev - 1, 0));
    }}
    disabled={categoryPage === 0}
    className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-300 bg-white text-black shadow-sm transition hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40"
  >
    ←
  </button>

  <button
    type="button"
    onClick={() => {
      setCategoryDirection("next");
      setCategoryPage((prev) =>
        Math.min(prev + 1, totalCategoryPages - 1)
      );
    }}
    disabled={categoryPage === totalCategoryPages - 1}
    className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md transition hover:scale-[1.05] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
  >
    →
  </button>
</div>
  </div>

   
    <div
      key={categoryPage}
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 animate-category-page ${
        categoryDirection === "next" ? "animate-slide-left" : "animate-slide-right"
      }`}
    >
  {visibleCategoryOptions.map((option) => {
    const active = category === option.key;
    const cfg = CATEGORY_DATA[option.key];

      return (
        <button
          key={option.key}
          type="button"
          onClick={() => {
            setCategory(option.key);
            setQuantities({});
          }}
          className={`group rounded-2xl border p-5 text-left shadow-md transition-all duration-200 ${
            active
              ? "border-yellow-500 bg-yellow-50 shadow-xl scale-[1.01]"
              : "border-yellow-400 bg-white hover:scale-[1.01] hover:shadow-xl"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
              {cfg.icon}
            </div>

            <span className="rounded-full bg-red-500 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              {cfg.badge}
            </span>
          </div>

          <h3 className="mt-4 text-lg font-extrabold text-black">
            {cfg.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 line-clamp-3">
            {cfg.subtitle}
          </p>
        </button>
      );
    })}
  </div>
  </div>
</section>

              <section className="rounded-3xl border border-yellow-400 bg-white p-6 shadow-xl sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-3 py-1 text-xs font-semibold text-black">
                      <Hammer className="h-4 w-4" />
                      Step 2 • Add services
                    </div>
                    <h2 className="mt-4 text-2xl font-extrabold text-black sm:text-3xl">
                      {currentCategory.title} estimate builder
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base">
                      Choose exactly what you need. Add one or several items to build your estimate.
                    </p>
                  </div>

                  {selectedServices.length > 0 ? (
                    <button
                      type="button"
                      onClick={clearAll}
className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:shadow-md hover:bg-gray-50 active:scale-95"                    >
                      <Trash2 className="h-4 w-4" />
                      Clear all
                    </button>
                  ) : null}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                  {currentCategory.services.map((service) => {
                    const qty = quantities[service.id] || 0;
                    

                    return (

                        
                      <div
                        key={service.id}
                        className="rounded-2xl border border-yellow-400 bg-white p-5 shadow-md transition-all duration-200 hover:shadow-xl hover:scale-[1.01]"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-lg font-extrabold text-black">
                              {service.label}
                            </h3>
                            {service.note ? (
                              <p className="mt-1 text-sm text-gray-500">{service.note}</p>
                            ) : null}
                          </div>

                          <div className="rounded-full bg-yellow-50 px-3 py-1 text-sm font-extrabold text-yellow-600">
                            €{service.price}
                          </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between gap-4">
                          <div className="text-sm text-gray-600">
                            Starting price per item
                          </div>

                          <div className="flex items-center gap-2">
  {/* MINUS */}
  <button
    type="button"
    onClick={() => removeOne(service.id)}
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 bg-white text-black shadow-sm transition hover:shadow-md active:scale-95"
  >
    −
  </button>

  {/* VALUE */}
  <div className="min-w-[52px] rounded-xl border border-yellow-400 bg-yellow-50 px-4 py-2 text-center text-sm font-extrabold text-black">
    {qty}
  </div>

  {/* PLUS */}
  <button
    type="button"
    onClick={() => addOne(service.id)}
    className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md transition hover:scale-[1.05] hover:shadow-lg active:scale-95"
  >
    +
  </button>
</div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-sm text-gray-500">Subtotal</span>
                          <span className="text-base font-extrabold text-black">
                            €{qty * service.price}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-4 text-xs text-gray-500">
  Can’t find your exact service? Choose "Custom job / Not listed" or describe it in notes.
</p>
              </section>

              <section className="rounded-3xl border border-yellow-400 bg-white p-6 shadow-xl sm:p-8">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-3 py-1 text-xs font-semibold text-black">
                    <Mail className="h-4 w-4" />
                    Step 3 • Your details
                  </div>
                  <h2 className="mt-4 text-2xl font-extrabold text-black sm:text-3xl">
                    Contact details
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base">
                    In the next stage this form will send the request to your official email and a copy to the client.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                 <Field
  label="Full name"
  icon={<BadgeCheck className="h-4 w-4" />}
  value={client.fullName}
  onChange={(v) => setFieldValue("fullName", v)}
  onBlur={() => setFieldSuccessIfValid("fullName")}
  placeholder="Your full name"
  error={fieldErrors.fullName}
  status={fieldStatus.fullName || "default"}
/>
                 <Field
  label="Email"
  icon={<Mail className="h-4 w-4" />}
  value={client.email}
  onChange={(v) => setFieldValue("email", v)}
  onBlur={() => setFieldSuccessIfValid("email")}
  placeholder="your@email.com"
  type="email"
  error={fieldErrors.email || fieldErrors.contact}
  status={fieldStatus.email || "default"}
/>

<Field
  label="Phone / WhatsApp"
  icon={<Phone className="h-4 w-4" />}
  value={client.phone}
  onChange={(v) => setFieldValue("phone", v)}
  onBlur={() => setFieldSuccessIfValid("phone")}
  placeholder="+34 ..."
  error={fieldErrors.phone || fieldErrors.contact}
  status={fieldStatus.phone || "default"}
/>
                  <SelectField
  label="City"
  icon={<MapPin className="h-4 w-4" />}
  value={client.city}
  onChange={(v) => {
    setClient((prev) => ({
      ...prev,
      city: v,
      area: "",
      customCity: v === "My city is not listed" ? prev.customCity : "",
    }));

    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next.city;
      delete next.area;
      return next;
    });

    setFieldStatus((prev) => ({
      ...prev,
      city: v ? "success" : "default",
      area: "default",
    }));
  }}
  options={CITY_OPTIONS}
  placeholder="Choose city"
  error={!isCustomCity ? fieldErrors.city : undefined}
  status={fieldStatus.city || "default"}
/>


{client.city === "My city is not listed" && (
  <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
    <label className="mb-2 flex items-center gap-2 text-sm font-bold text-black">
      <MapPin className="h-4 w-4" />
      Write your city
    </label>

    <input
  type="text"
  value={client.customCity}
  onChange={(e) =>
    setClient((prev) => ({ ...prev, customCity: e.target.value }))
  }
  placeholder="Enter your city"
  className={`w-full rounded-xl border px-4 py-3 text-sm text-black outline-none transition
    ${formErrors.city
      ? "border-red-400 bg-red-50 focus:border-red-500"
      : "border-gray-300 focus:border-yellow-400"}
  `}
/>

{formErrors.city ? (
  <p className="mt-2 text-xs font-medium text-red-600">{formErrors.city}</p>
) : null}

<p className="mt-3 text-xs leading-6 text-gray-500">
  We’ll contact you to confirm travel time, availability and access to your location.
</p>
  </div>
)}

{!isCustomCity && hasAreaOptions && (
  <SelectField
  label={client.city === "Valencia" ? "Area / district" : "Area / neighborhood"}
  icon={<MapPin className="h-4 w-4" />}
  value={client.area}
  onChange={(v) => {
    setFieldValue("area", v);
    setFieldSuccessIfValid("area", v);
  }}
  options={selectedCityAreas}
  placeholder={
    client.city === "Valencia"
      ? "Choose area or district"
      : "Choose area or neighborhood"
  }
  error={fieldErrors.area}
  status={fieldStatus.area || "default"}
/>
)}

{!isCustomCity && !hasAreaOptions && (
  <Field
  label="Area / neighborhood"
  icon={<MapPin className="h-4 w-4" />}
  value={client.area}
  onChange={(v) => setFieldValue("area", v)}
  onBlur={() => setFieldSuccessIfValid("area")}
  placeholder="Write area, neighborhood or urbanization"
  error={fieldErrors.area}
  status={fieldStatus.area || "default"}
/>
)}

{isCustomCity && (
  <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
    <label className="mb-2 flex items-center gap-2 text-sm font-bold text-black">
      <MapPin className="h-4 w-4" />
      Area / neighborhood
    </label>

    <input
  type="text"
  value={client.area}
  onChange={(e) => setClient((prev) => ({ ...prev, area: e.target.value }))}
  placeholder="Write area, neighborhood or zone"
  className={`w-full rounded-xl border px-4 py-3 text-sm text-black outline-none transition
    ${formErrors.area
      ? "border-red-400 bg-red-50 focus:border-red-500"
      : "border-gray-300 focus:border-yellow-400"}
  `}
/>

{formErrors.area ? (
  <p className="mt-2 text-xs font-medium text-red-600">{formErrors.area}</p>
) : null}

<p className="mt-3 text-xs leading-6 text-gray-500">
  We’ll contact you to confirm travel time, availability and access to your location.
</p>
  </div>
)}

<Field
  label="House address"
  icon={<Home className="h-4 w-4" />}
  value={client.houseAddress}
  onChange={(v) => setFieldValue("houseAddress", v)}
  onBlur={() => setFieldSuccessIfValid("houseAddress")}
  placeholder="Street and building number"
  error={fieldErrors.houseAddress}
  status={fieldStatus.houseAddress || "default"}
/>

<Field
  label="Apartment number"
  icon={<Home className="h-4 w-4" />}
  value={client.apartmentNumber}
  onChange={(v) =>
    setClient((prev) => ({ ...prev, apartmentNumber: v }))
  }
  placeholder="Apartment, floor, door"
/>

<Field
  label="Extra address details"
  icon={<Home className="h-4 w-4" />}
  value={client.addressDetails}
  onChange={(v) =>
    setClient((prev) => ({ ...prev, addressDetails: v }))
  }
  placeholder="Entrance code, block, landmark, extra instructions..."
/>





                  <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
  <label className="mb-3 flex items-center gap-2 text-sm font-bold text-black">
    <Clock3 className="h-4 w-4" />
    Preferred date & time
  </label>

  {/* DATE */}
  <div className="mb-3">
  <p className="mb-2 text-xs font-semibold text-gray-500">Preferred date</p>

  <input
    type="date"
    min={minSelectableDate}
    value={client.preferredDate}
    onChange={(e) => {
  const value = e.target.value;
  setFieldValue("preferredDate", value);
}}
onBlur={() => setFieldSuccessIfValid("preferredDate")}
    
    className={`w-full rounded-xl border px-4 py-3 text-sm text-black outline-none transition appearance-none
  ${
    fieldStatus.preferredDate === "error"
      ? "border-red-400 bg-red-50 focus:border-red-500"
      : fieldStatus.preferredDate === "success"
      ? "border-green-500 bg-green-50 focus:border-green-600"
      : "border-gray-300 focus:border-yellow-400"
  }
`}
  />

  {fieldErrors.preferredDate ? (
  <p className="mt-2 text-xs font-medium text-red-600">
    {fieldErrors.preferredDate}
  </p>
) : null}
</div>

  <div>
  <p className="mb-2 text-xs font-semibold text-gray-500">Preferred time</p>

  <select
    value={client.preferredTime}
    onChange={(e) => {
  const value = e.target.value;
  setFieldValue("preferredTime", value);
}}
onBlur={() => setFieldSuccessIfValid("preferredTime")}
    
    className={`w-full rounded-xl border px-4 py-3 text-sm text-black outline-none transition appearance-none
  ${
    fieldStatus.preferredTime === "error"
      ? "border-red-400 bg-red-50 focus:border-red-500"
      : fieldStatus.preferredTime === "success"
      ? "border-green-500 bg-green-50 focus:border-green-600"
      : "border-gray-300 focus:border-yellow-400"
  }
`}
  >
    <option value="">Choose preferred time</option>
    {availableTimeOptions.map((time) => (
      <option key={time} value={time}>
        {time}
      </option>
    ))}
  </select>

  {fieldErrors.preferredTime ? (
  <p className="mt-2 text-xs font-medium text-red-600">
    {fieldErrors.preferredTime}
  </p>
) : (
  <p className="mt-3 text-xs leading-6 text-gray-500">
    {client.preferredDate === todayDateString
      ? "For today, only times at least 1 hour ahead are available."
      : "Choose your preferred arrival time."}
  </p>
)}
</div>
</div>

                  <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
                    <label className="mb-2 flex items-center gap-2 text-sm font-bold text-black">
                      <MessageSquare className="h-6 w-4" />
                      Notes
                    </label>
                    <textarea
                      value={client.notes}
                      onChange={(e) =>
                        setClient((prev) => ({ ...prev, notes: e.target.value }))
                      }
                      placeholder="Describe your job in detail (wall type, materials, photos, timing, access, etc.)"
                      className="min-h-[150px] w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-yellow-400"
                    />
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start h-fit">
  <section className="rounded-3xl border border-yellow-400 bg-white p-6 shadow-2xl sm:p-8">

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-3 py-1 text-xs font-semibold text-black">
                      <Calculator className="h-4 w-4" />
                      Live summary
                    </div>
                    <h2 className="mt-4 text-2xl font-extrabold text-black">
                      Your estimate
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      Add services on the left and your estimate will update instantly here.
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-md">
                    {currentCategory.icon}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-yellow-400 bg-yellow-50/50 p-4">
                  <div className="text-sm text-gray-600">Selected category</div>
                  <div className="mt-1 text-lg font-extrabold text-black">
                    {currentCategory.title}
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {selectedServices.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-yellow-400 bg-white p-5 text-sm leading-7 text-gray-500">
                      No services added yet. Start by choosing one or more items from the estimate builder.
                    </div>
                  ) : (
                    selectedServices.map((item) => (
  <div
    key={item.id}
    className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm"
  >
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="font-bold text-black">{item.label}</p>
        <p className="mt-1 text-xs text-gray-500">
          {item.qty} × €{item.price}
        </p>
      </div>

      <div className="flex items-start gap-3">
        <div className="text-sm font-extrabold text-black">
          €{item.subtotal}
        </div>

        <button
          type="button"
          onClick={() => setQty(item.id, 0)}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-300 bg-white text-black shadow-sm transition hover:bg-gray-50 hover:shadow-md active:scale-95"
          title="Remove item"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
))
                  )}
                </div>

                <div className="mt-8 rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-5 shadow-md space-y-2">
  
  <div className="flex justify-between text-sm text-gray-600">
    <span>Subtotal</span>
    <span>€{subtotal.toFixed(2)}</span>
  </div>

  <div className="flex justify-between text-sm text-gray-600">
    <span>IVA (21%)</span>
    <span>€{iva.toFixed(2)}</span>
  </div>

  <div className="flex justify-between text-lg font-extrabold text-black border-t border-yellow-400 pt-2">
    <span>Total</span>
    <span>€{totalWithTax.toFixed(2)}</span>
  </div>

  <p className="text-xs text-gray-500">
    Prices exclude IVA unless stated otherwise.
  </p>
</div>

                {submitStage === "build" && (
  <>
    <button
      type="button"
      onClick={handleNextStep}
      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 text-sm font-extrabold text-black shadow-lg transition hover:scale-[1.02]"
    >
      Next step: review request
      <ArrowRight className="h-4 w-4" />
    </button>

    {Object.keys(fieldErrors).length > 0 && (
  <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
    <p className="font-bold">Please fix the following before continuing:</p>
    <ul className="mt-2 space-y-1">
      {Object.entries(fieldErrors).map(([key, value]) => (
        <li key={key}>• {value}</li>
      ))}
    </ul>
  </div>
)}
  </>
)}

{submitStage === "review" && (
  <div className="mt-6 space-y-4">
    <div className="rounded-2xl border border-yellow-400 bg-yellow-50/50 p-4">
      <p className="text-sm font-bold text-black">Review your request</p>
      <p className="mt-1 text-sm text-gray-600">
        Please confirm your details before sending.
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
    Client
  </p>
  <div className="space-y-2 text-sm text-black">
  <p><span className="text-gray-500">Name:</span> <span className="font-semibold">{client.fullName || "—"}</span></p>
  <p><span className="text-gray-500">Phone:</span> <span className="font-semibold">{client.phone || "—"}</span></p>
  <p><span className="text-gray-500">Email:</span> <span className="font-semibold">{client.email || "—"}</span></p>
</div>
</div>

<div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
    Category
  </p>
  <p className="mt-2 text-sm font-semibold text-black">
    {currentCategory.title}
  </p>
</div>

<div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
    Selected services
  </p>
      <div className="mt-2 space-y-3 text-sm text-black">
        {selectedServices.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 border-b border-gray-100 pb-2"
          >
            <div className="flex flex-col">
  <span className="font-semibold text-black">
    {item.label}
  </span>
  <span className="text-xs text-gray-500">
    {item.qty} × €{item.price}
  </span>
</div>

            <span className="font-semibold text-black">
              €{item.subtotal}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-2 border-t border-gray-300 pt-4">
  <div className="flex items-center justify-between text-sm text-gray-600">
    <span>Subtotal</span>
    <span>€{subtotal.toFixed(2)}</span>
  </div>

  <div className="flex items-center justify-between text-sm text-gray-600">
    <span>IVA (21%)</span>
    <span>€{iva.toFixed(2)}</span>
  </div>

  <div className="flex items-center justify-between">
    <span className="text-sm font-bold uppercase tracking-wide text-gray-500">
      Total
    </span>

    <span className="text-xl font-extrabold text-black">
      €{totalWithTax.toFixed(2)}
    </span>
  </div>
</div>

<p className="mt-2 text-xs text-gray-500">
  Final total includes IVA.
</p>
    </div>

   <div className="mt-4 rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
    Address
  </p>

  <div className="mt-2 space-y-2">
    
    {/* MAIN LINE */}
    <p className="text-sm font-semibold text-black">
      {displayCity || "—"}, {client.area || "—"}
    </p>

    {/* STREET */}
    <p className="text-sm text-gray-700">
      {client.houseAddress || "—"}
      {client.apartmentNumber ? `, ${client.apartmentNumber}` : ""}
    </p>

    {/* EXTRA */}
    {client.addressDetails && (
      <p className="text-xs text-gray-500">
        {client.addressDetails}
      </p>
    )}

  </div>
</div>

    <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
    Schedule
  </p>

  <div className="mt-2 flex items-start gap-3">
    <Clock3 className="mt-1 h-4 w-4 text-yellow-500" />

    <p className="text-sm font-semibold text-black">
      {client.preferredDate || "—"} {client.preferredTime ? `at ${client.preferredTime}` : ""}
    </p>
  </div>
</div>

    <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        Notes
      </p>
      <p className="mt-2 text-sm text-black">
        {client.notes.trim() || "No additional notes"}
      </p>
    </div>

    <p className="text-center text-xs text-gray-500">
  No payment required. We’ll confirm everything before the visit.
</p>

{sendError && (
  <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
    {sendError}
  </div>
)}

<div className="flex gap-3">
  <button
    type="button"
    onClick={handleBackToEdit}
    disabled={isSending}
    className="flex-1 rounded-2xl border border-gray-300 bg-white py-4 text-sm font-bold text-black transition hover:bg-gray-50 hover:shadow-sm active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
  >
    Back to edit
  </button>

  <button
    type="button"
    onClick={handleConfirmSend}
    disabled={isSending}
    className="flex-1 rounded-2xl bg-yellow-400 py-4 text-sm font-extrabold text-black shadow-md transition hover:scale-[1.02] hover:shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
  >
    {isSending ? "Sending..." : "Send request"}
  </button>
</div>

</div>
)}

{submitStage === "success" && (
  <div className="mt-6 space-y-4">
    <div className="rounded-2xl border border-green-200 bg-green-50 p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-500 text-lg font-extrabold text-white shadow-sm">
          ✓
        </div>

        <div>
          <p className="text-lg font-extrabold text-black">
            Request sent successfully
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            We received your request and sent a confirmation email. We will contact you shortly to confirm the details.
          </p>

          <div className="mt-4 space-y-1 text-sm text-gray-700">
            <p>• Your request was submitted successfully</p>
            <p>• A confirmation email was sent to your inbox</p>
            <p>• We will review your details and get back to you soon</p>
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-2xl border border-yellow-400 bg-yellow-50/50 p-4 text-sm leading-6 text-gray-700">
      Need to add more details or send another request? You can create a new one anytime.
    </div>

    <button
      type="button"
      onClick={() => {
  setSubmitStage("build");
  setQuantities({});
  setFormErrors({});
  setSendError("");
  setClient({
    fullName: "",
    email: "",
    phone: "",
    city: "Valencia",
    customCity: "",
    area: "",
    houseAddress: "",
    apartmentNumber: "",
    addressDetails: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });
}}
      className="w-full rounded-2xl border border-gray-300 bg-white py-4 text-sm font-bold text-black shadow-sm transition hover:bg-gray-50 hover:shadow-md active:scale-95"
    >
      New request
    </button>
  </div>
)}
                
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default function EstimatePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <EstimatePageContent />
    </Suspense>
  );
}



function Field({
  label,
  icon,
  value,
  onChange,
  onBlur,
  placeholder,
  type = "text",
  disabled = false,
  error,
  status = "default",
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  error?: string;
  status?: "default" | "error" | "success";
}) {
  return (
    <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
      <label className="mb-2 flex items-center gap-2 text-sm font-bold text-black">
        {icon}
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition
          ${
            disabled
              ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
              : status === "error"
              ? "border-red-400 bg-red-50 text-black focus:border-red-500"
              : status === "success"
              ? "border-green-500 bg-green-50 text-black focus:border-green-600"
              : "border-gray-300 bg-white text-black focus:border-yellow-400"
          }
        `}
      />

      {error ? (
        <p className="mt-2 text-xs font-medium text-red-600">{error}</p>
      ) : null}
    </div>
  );
}

function SelectField({
  label,
  icon,
  value,
  onChange,
  options,
  placeholder,
  error,
  status = "default",
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  error?: string;
  status?: "default" | "error" | "success";
}) {
  return (
    <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
      <label className="mb-2 flex items-center gap-2 text-sm font-bold text-black">
        {icon}
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full appearance-none rounded-xl border px-4 py-3 pr-12 text-sm outline-none transition
            ${
              status === "error"
                ? "border-red-400 bg-red-50 text-black focus:border-red-500"
                : status === "success"
                ? "border-green-500 bg-green-50 text-black focus:border-green-600"
                : "border-gray-300 bg-white text-black focus:border-yellow-400"
            }`}
        >
          <option value="">{placeholder || "Select option"}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
          ▼
        </div>
      </div>

      {error ? (
        <p className="mt-2 text-xs font-medium text-red-600">{error}</p>
      ) : null}
    </div>
  );
}