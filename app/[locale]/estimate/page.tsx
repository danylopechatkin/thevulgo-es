"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
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
  labelEs: string;
  price: number;
  badge?: string;
  badgeEs?: string;
};

type CategoryConfig = {
  title: string;
  titleEs: string;
  icon: React.ReactNode;
  subtitle: string;
  subtitleEs: string;
  badge: string;
  badgeEs: string;
  services: ServiceItem[];
};

type SelectOption = string | { value: string; label: string };

const ADDON = { badge: "Add-on", badgeEs: "Extra" };
const BASE = { badge: "Base", badgeEs: "Base" };
const POPULAR = { badge: "Popular", badgeEs: "Popular" };

const CATEGORY_KEYS: CategoryKey[] = [
  "tv-mounting",
  "electrical",
  "plumbing",
  "furniture",
  "drywall",
  "repairs",
  "doors",
  "smart-home",
  "kitchen",
  "bathroom",
  "move-in",
  "exterior",
];

const CATEGORY_DATA: Record<CategoryKey, CategoryConfig> = {
  "tv-mounting": {
    title: "TV Mounting",
    titleEs: "Instalación de TV",
    icon: <Tv className="h-5 w-5" />,
    subtitle: "TV installation, brackets, cable routing and clean wall setups.",
    subtitleEs: "Instalación de televisores, soportes, cables y montaje limpio.",
    badge: "Top",
    badgeEs: "Top",
    services: [
      { id: "tv-small", label: "TV mounting up to 65”", labelEs: "Instalación de TV hasta 65”", price: 49 },
      { id: "tv-medium", label: "TV mounting from 66”", labelEs: "Instalación de TV desde 66”", price: 59 },
      { id: "soundbar", label: "Soundbar mounting", labelEs: "Instalación de barra de sonido", price: 29 },
      { id: "shelf", label: "Media shelf installation", labelEs: "Instalación de estante multimedia", price: 35 },
      { id: "raceway", label: "Cable concealment with raceway", labelEs: "Ocultar cables con canaleta", price: 25 },
      { id: "bracket-install", label: "Bracket installation only", labelEs: "Solo instalación del soporte", price: 35 },
      { id: "device-behind-tv", label: "Your device behind TV", labelEs: "Dispositivo detrás del TV", price: 29, ...ADDON },
      { id: "remove-old-tv", label: "Remove old TV", labelEs: "Retirar TV antiguo", price: 19, ...ADDON },
      { id: "inspection", label: "Visit & inspection", labelEs: "Visita e inspección", price: 49, ...BASE },
      { id: "custom-job", label: "Custom job / Not listed", labelEs: "Trabajo personalizado / No está en la lista", price: 49, ...POPULAR },
    ],
  },
  electrical: {
    title: "Electrical",
    titleEs: "Electricidad",
    icon: <Zap className="h-5 w-5" />,
    subtitle: "Lights, switches, sockets and small electrical upgrades.",
    subtitleEs: "Luces, interruptores, enchufes y pequeñas mejoras eléctricas.",
    badge: "Safe",
    badgeEs: "Seguro",
    services: [
      { id: "light-fixture", label: "Light fixture installation", labelEs: "Instalación de lámpara", price: 39 },
      { id: "ceiling-light", label: "Ceiling light installation", labelEs: "Instalación de luz de techo", price: 45 },
      { id: "wall-light", label: "Wall light / sconce installation", labelEs: "Instalación de aplique de pared", price: 35 },
      { id: "switch-replace", label: "Switch replacement", labelEs: "Cambio de interruptor", price: 25 },
      { id: "socket-replace", label: "Socket / outlet replacement", labelEs: "Cambio de enchufe / toma", price: 29 },
      { id: "dimmer-install", label: "Dimmer installation", labelEs: "Instalación de regulador", price: 35 },
      { id: "led-strip", label: "LED strip setup", labelEs: "Instalación de tira LED", price: 35 },
      { id: "smart-switch", label: "Smart switch setup", labelEs: "Instalación de interruptor inteligente", price: 39 },
      { id: "light-repair", label: "Light repair", labelEs: "Reparación de luz", price: 29 },
      { id: "socket-fix", label: "Socket repair", labelEs: "Reparación de enchufe", price: 25 },
      { id: "cable-fix", label: "Visible cable tidy-up", labelEs: "Ordenar cables visibles", price: 25 },
      { id: "replace-fixture", label: "Replace existing fixture", labelEs: "Sustituir lámpara existente", price: 35 },
      { id: "remove-old-light", label: "Remove old light", labelEs: "Retirar lámpara antigua", price: 10, ...ADDON },
      { id: "extra-light", label: "Install extra light same visit", labelEs: "Instalar luz extra en la misma visita", price: 25, ...ADDON },
      { id: "small-cable-hide", label: "Small cable tidy-up", labelEs: "Pequeño ordenado de cables", price: 15, ...ADDON },
      { id: "inspection", label: "Visit & inspection", labelEs: "Visita e inspección", price: 49, ...BASE },
      { id: "custom-job", label: "Custom job / Not listed", labelEs: "Trabajo personalizado / No está en la lista", price: 49, ...POPULAR },
    ],
  },
  plumbing: {
    title: "Plumbing",
    titleEs: "Fontanería",
    icon: <Droplets className="h-5 w-5" />,
    subtitle: "Faucets, sinks, toilets and visible plumbing fixes.",
    subtitleEs: "Grifos, lavabos, inodoros y reparaciones visibles.",
    badge: "Fast",
    badgeEs: "Rápido",
    services: [
      { id: "faucet-install", label: "Faucet installation", labelEs: "Instalación de grifo", price: 49 },
      { id: "sink-fix", label: "Sink fitting / visible fix", labelEs: "Ajuste de lavabo / reparación visible", price: 45 },
      { id: "toilet-fix", label: "Toilet repair / adjustment", labelEs: "Reparación / ajuste de inodoro", price: 49 },
      { id: "shower-head", label: "Shower head replacement", labelEs: "Cambio de alcachofa de ducha", price: 29 },
      { id: "shower-hose", label: "Shower hose replacement", labelEs: "Cambio de manguera de ducha", price: 29 },
      { id: "valve-replace", label: "Valve replacement", labelEs: "Cambio de válvula", price: 39 },
      { id: "small-leak", label: "Small visible leak fix", labelEs: "Reparación de pequeña fuga visible", price: 45 },
      { id: "silicone", label: "Silicone renewal", labelEs: "Renovación de silicona", price: 39 },
      { id: "trap-fix", label: "Sink trap fix", labelEs: "Reparación de sifón", price: 35 },
      { id: "drain-check", label: "Minor drain check", labelEs: "Revisión básica de desagüe", price: 29 },
      { id: "toilet-seat", label: "Toilet seat installation", labelEs: "Instalación de tapa de inodoro", price: 25 },
      { id: "shower-bracket", label: "Shower bracket installation", labelEs: "Instalación de soporte de ducha", price: 25 },
      { id: "remove-old-faucet", label: "Remove old faucet", labelEs: "Retirar grifo antiguo", price: 10, ...ADDON },
      { id: "seal-edges", label: "Seal edges / finish silicone", labelEs: "Sellado / acabado con silicona", price: 15, ...ADDON },
      { id: "extra-adjustment", label: "Extra fitting adjustment", labelEs: "Ajuste extra de pieza", price: 12, ...ADDON },
      { id: "inspection", label: "Visit & inspection", labelEs: "Visita e inspección", price: 49, ...BASE },
      { id: "custom-job", label: "Custom job / Not listed", labelEs: "Trabajo personalizado / No está en la lista", price: 49, ...POPULAR },
    ],
  },
  furniture: {
    title: "Furniture Assembly",
    titleEs: "Montaje de muebles",
    icon: <Package className="h-5 w-5" />,
    subtitle: "IKEA, wardrobes, desks, beds and move-in furniture setup.",
    subtitleEs: "IKEA, armarios, escritorios, camas y montaje de muebles.",
    badge: "Popular",
    badgeEs: "Popular",
    services: [
      { id: "chair", label: "Chair assembly", labelEs: "Montaje de silla", price: 19 },
      { id: "desk", label: "Desk assembly", labelEs: "Montaje de escritorio", price: 39 },
      { id: "bed", label: "Bed frame assembly", labelEs: "Montaje de cama", price: 49 },
      { id: "wardrobe", label: "Wardrobe assembly", labelEs: "Montaje de armario", price: 79 },
      { id: "dresser", label: "Chest of drawers assembly", labelEs: "Montaje de cómoda", price: 45 },
      { id: "shelf-unit", label: "Shelving / bookcase assembly", labelEs: "Montaje de estantería", price: 39 },
      { id: "tv-stand", label: "TV stand / media unit assembly", labelEs: "Montaje de mueble TV", price: 45 },
      { id: "wall-fix", label: "Furniture wall fixing", labelEs: "Fijación de mueble a pared", price: 29 },
      { id: "nightstand", label: "Nightstand assembly", labelEs: "Montaje de mesita de noche", price: 25 },
      { id: "coffee-table", label: "Coffee table assembly", labelEs: "Montaje de mesa de centro", price: 29 },
      { id: "dining-table", label: "Dining table assembly", labelEs: "Montaje de mesa de comedor", price: 45 },
      { id: "cabinet-small", label: "Small cabinet assembly", labelEs: "Montaje de armario pequeño", price: 39 },
      { id: "remove-packaging", label: "Remove packaging", labelEs: "Retirar embalaje", price: 10, ...ADDON },
      { id: "minor-leveling", label: "Minor leveling / adjustment", labelEs: "Nivelación / ajuste pequeño", price: 10, ...ADDON },
      { id: "extra-anchor", label: "Extra anchor to wall", labelEs: "Anclaje extra a pared", price: 12, ...ADDON },
      { id: "inspection", label: "Visit & inspection", labelEs: "Visita e inspección", price: 49, ...BASE },
      { id: "custom-job", label: "Custom job / Not listed", labelEs: "Trabajo personalizado / No está en la lista", price: 49, ...POPULAR },
    ],
  },
  drywall: {
    title: "Drywall",
    titleEs: "Pladur / paredes",
    icon: <Hammer className="h-5 w-5" />,
    subtitle: "Patching, cutouts, sanding and small wall finishing work.",
    subtitleEs: "Parches, cortes, lijado y pequeños acabados de pared.",
    badge: "Pro",
    badgeEs: "Pro",
    services: [
      { id: "drywall-patch-small", label: "Small drywall patch", labelEs: "Pequeño parche de pladur", price: 35 },
      { id: "drywall-patch-medium", label: "Medium drywall patch", labelEs: "Parche mediano de pladur", price: 49 },
      { id: "wall-cutout", label: "Wall cutout", labelEs: "Corte en pared", price: 39 },
      { id: "anchor-hole-repair", label: "Anchor hole repair", labelEs: "Reparación de agujeros de tacos", price: 25 },
      { id: "crack-repair", label: "Crack repair", labelEs: "Reparación de grieta", price: 29 },
      { id: "joint-touchup", label: "Joint touch-up", labelEs: "Retoque de junta", price: 29 },
      { id: "surface-sanding", label: "Surface prep / sanding", labelEs: "Preparación / lijado", price: 25 },
      { id: "paint-ready", label: "Paint-ready finish area", labelEs: "Acabado listo para pintar", price: 39 },
      { id: "small-hole-fill", label: "Small hole filling", labelEs: "Relleno de agujero pequeño", price: 19 },
      { id: "wall-skim", label: "Small skim coat area", labelEs: "Pequeño alisado de pared", price: 35 },
      { id: "old-anchor-remove", label: "Remove old anchors", labelEs: "Retirar tacos antiguos", price: 19 },
      { id: "wall-touchup", label: "Minor wall touch-up", labelEs: "Retoque pequeño de pared", price: 25 },
      { id: "extra-sanding", label: "Extra sanding", labelEs: "Lijado extra", price: 10, ...ADDON },
      { id: "small-repaint", label: "Small repaint touch-up", labelEs: "Pequeño retoque de pintura", price: 15, ...ADDON },
      { id: "hardware-remove", label: "Remove old hardware", labelEs: "Retirar herrajes antiguos", price: 10, ...ADDON },
      { id: "inspection", label: "Visit & inspection", labelEs: "Visita e inspección", price: 49, ...BASE },
      { id: "custom-job", label: "Custom job / Not listed", labelEs: "Trabajo personalizado / No está en la lista", price: 49, ...POPULAR },
    ],
  },
  repairs: {
    title: "Repairs",
    titleEs: "Reparaciones",
    icon: <Hammer className="h-5 w-5" />,
    subtitle: "Small home fixes, adjustments and practical repair work.",
    subtitleEs: "Pequeñas reparaciones, ajustes y trabajos prácticos.",
    badge: "Quick",
    badgeEs: "Rápido",
    services: [
      { id: "minor-repair-visit", label: "Minor repair visit", labelEs: "Visita para reparación menor", price: 29 },
      { id: "curtain-adjust", label: "Curtain rod adjustment", labelEs: "Ajuste de barra de cortina", price: 25 },
      { id: "shelf-refix", label: "Shelf re-fix", labelEs: "Recolocar estante", price: 25 },
      { id: "handle-repair", label: "Loose handle / fitting repair", labelEs: "Reparación de manilla / pieza suelta", price: 19 },
      { id: "silicone-fix", label: "Silicone / sealing fix", labelEs: "Arreglo de silicona / sellado", price: 25 },
      { id: "small-wall-fix", label: "Small wall fix", labelEs: "Pequeña reparación de pared", price: 25 },
      { id: "mount-correction", label: "Mounting correction / re-level", labelEs: "Corrección / nivelación", price: 29 },
      { id: "home-adjustment", label: "General home adjustment", labelEs: "Ajuste general del hogar", price: 25 },
      { id: "drawer-fix", label: "Drawer adjustment", labelEs: "Ajuste de cajón", price: 19 },
      { id: "door-stop-install", label: "Door stop installation", labelEs: "Instalación de tope de puerta", price: 19 },
      { id: "loose-fixture-fix", label: "Loose fixture fix", labelEs: "Arreglo de pieza suelta", price: 25 },
      { id: "small-refit", label: "Small re-fit / tighten", labelEs: "Pequeño ajuste / apriete", price: 19 },
      { id: "extra-small-fix", label: "Extra small fix same visit", labelEs: "Arreglo extra pequeño", price: 10, ...ADDON },
      { id: "hardware-replace", label: "Hardware replacement", labelEs: "Cambio de herraje", price: 12, ...ADDON },
      { id: "finish-adjustment", label: "Re-tightening / finishing", labelEs: "Reapriete / acabado", price: 10, ...ADDON },
      { id: "inspection", label: "Visit & inspection", labelEs: "Visita e inspección", price: 49, ...BASE },
      { id: "custom-job", label: "Custom job / Not listed", labelEs: "Trabajo personalizado / No está en la lista", price: 49, ...POPULAR },
    ],
  },
  doors: {
    title: "Doors & Hardware",
    titleEs: "Puertas y herrajes",
    icon: <Home className="h-5 w-5" />,
    subtitle: "Handles, hinges, locks and visible door hardware fixes.",
    subtitleEs: "Manillas, bisagras, cerraduras y ajustes visibles.",
    badge: "Fix",
    badgeEs: "Fix",
    services: [
      { id: "door-handle", label: "Door handle replacement", labelEs: "Cambio de manilla de puerta", price: 25 },
      { id: "hinge-adjust", label: "Hinge adjustment", labelEs: "Ajuste de bisagra", price: 25 },
      { id: "lock-replace", label: "Lock replacement (basic)", labelEs: "Cambio de cerradura básica", price: 39 },
      { id: "closer-adjust", label: "Door closer adjustment", labelEs: "Ajuste de cierrapuertas", price: 29 },
      { id: "strike-plate", label: "Strike plate adjustment", labelEs: "Ajuste de cerradero", price: 19 },
      { id: "latch-fix", label: "Latch alignment fix", labelEs: "Ajuste de pestillo", price: 25 },
      { id: "cabinet-handle", label: "Cabinet handle installation", labelEs: "Instalación de tirador", price: 19 },
      { id: "door-align", label: "Minor door alignment", labelEs: "Alineación pequeña de puerta", price: 29 },
      { id: "door-stop", label: "Door stop install", labelEs: "Instalación de tope de puerta", price: 19 },
      { id: "peephole-install", label: "Peephole installation", labelEs: "Instalación de mirilla", price: 25 },
      { id: "closet-door-fix", label: "Closet door adjustment", labelEs: "Ajuste de puerta de armario", price: 25 },
      { id: "small-lock-fix", label: "Small lock fix", labelEs: "Pequeña reparación de cerradura", price: 29 },
      { id: "remove-old-hardware", label: "Remove old hardware", labelEs: "Retirar herraje antiguo", price: 10, ...ADDON },
      { id: "extra-handle", label: "Extra handle same visit", labelEs: "Manilla extra", price: 8, ...ADDON },
      { id: "finish-adjust", label: "Small finish adjustment", labelEs: "Pequeño ajuste final", price: 10, ...ADDON },
      { id: "inspection", label: "Visit & inspection", labelEs: "Visita e inspección", price: 49, ...BASE },
      { id: "custom-job", label: "Custom job / Not listed", labelEs: "Trabajo personalizado / No está en la lista", price: 49, ...POPULAR },
    ],
  },
  "smart-home": {
    title: "Smart Home",
    titleEs: "Smart Home",
    icon: <Zap className="h-5 w-5" />,
    subtitle: "Cameras, doorbells, sensors and smart home device setup.",
    subtitleEs: "Cámaras, timbres, sensores y dispositivos inteligentes.",
    badge: "Smart",
    badgeEs: "Smart",
    services: [
      { id: "camera-setup", label: "Camera setup", labelEs: "Configuración de cámara", price: 39 },
      { id: "doorbell-setup", label: "Smart doorbell setup", labelEs: "Configuración de timbre inteligente", price: 39 },
      { id: "smart-lock", label: "Smart lock installation", labelEs: "Instalación de cerradura inteligente", price: 49 },
      { id: "sensor-setup", label: "Sensor setup", labelEs: "Configuración de sensor", price: 25 },
      { id: "smart-plug", label: "Smart plug setup", labelEs: "Configuración de enchufe inteligente", price: 19 },
      { id: "smart-switch", label: "Smart switch setup", labelEs: "Configuración de interruptor inteligente", price: 39 },
      { id: "wifi-device", label: "Wi-Fi device setup", labelEs: "Configuración de dispositivo Wi-Fi", price: 25 },
      { id: "app-pairing", label: "App connection / pairing", labelEs: "Conexión con app", price: 19 },
      { id: "indoor-camera", label: "Indoor camera install", labelEs: "Instalación de cámara interior", price: 35 },
      { id: "outdoor-camera", label: "Outdoor camera setup", labelEs: "Configuración de cámara exterior", price: 49 },
      { id: "hub-setup", label: "Smart hub setup", labelEs: "Configuración de hub inteligente", price: 35 },
      { id: "device-reset", label: "Smart device reset / reconnect", labelEs: "Reset / reconexión de dispositivo", price: 25 },
      { id: "extra-device-pair", label: "Extra device pairing", labelEs: "Emparejar dispositivo extra", price: 10, ...ADDON },
      { id: "smart-cable-tidy", label: "Cable tidy-up", labelEs: "Ordenar cables", price: 12, ...ADDON },
      { id: "remove-old-device", label: "Remove old smart device", labelEs: "Retirar dispositivo antiguo", price: 10, ...ADDON },
      { id: "inspection", label: "Visit & inspection", labelEs: "Visita e inspección", price: 49, ...BASE },
      { id: "custom-job", label: "Custom job / Not listed", labelEs: "Trabajo personalizado / No está en la lista", price: 49, ...POPULAR },
    ],
  },
  kitchen: {
    title: "Kitchen",
    titleEs: "Cocina",
    icon: <Home className="h-5 w-5" />,
    subtitle: "Kitchen fittings, shelves, rails and practical installations.",
    subtitleEs: "Accesorios, estantes, barras e instalaciones de cocina.",
    badge: "Kitchen",
    badgeEs: "Cocina",
    services: [
      { id: "kitchen-shelf", label: "Kitchen shelf install", labelEs: "Instalación de estante de cocina", price: 35 },
      { id: "kitchen-rail", label: "Kitchen rail install", labelEs: "Instalación de barra de cocina", price: 29 },
      { id: "cabinet-handle", label: "Cabinet handle installation", labelEs: "Instalación de tirador", price: 19 },
      { id: "cabinet-adjust", label: "Cabinet door adjustment", labelEs: "Ajuste de puerta de mueble", price: 25 },
      { id: "under-light", label: "Under-cabinet light install", labelEs: "Instalación de luz bajo mueble", price: 35 },
      { id: "backsplash-accessory", label: "Kitchen accessory mounting", labelEs: "Montaje de accesorio de cocina", price: 25 },
      { id: "dish-rack", label: "Dish rack installation", labelEs: "Instalación de escurridor", price: 25 },
      { id: "wall-hook", label: "Kitchen wall hooks / bar", labelEs: "Ganchos / barra de cocina", price: 19 },
      { id: "small-shelf", label: "Small spice shelf install", labelEs: "Estante pequeño para especias", price: 25 },
      { id: "bin-system", label: "Waste bin system install", labelEs: "Sistema de cubos de basura", price: 29 },
      { id: "filter-bracket", label: "Filter / bracket mounting", labelEs: "Montaje de filtro / soporte", price: 29 },
      { id: "kitchen-finish-fix", label: "Small kitchen fitting fix", labelEs: "Pequeño arreglo de cocina", price: 25 },
      { id: "extra-handle-kitchen", label: "Extra handle same visit", labelEs: "Tirador extra", price: 8, ...ADDON },
      { id: "remove-old-accessory", label: "Remove old accessory", labelEs: "Retirar accesorio antiguo", price: 10, ...ADDON },
      { id: "small-seal-finish", label: "Small seal / finish touch-up", labelEs: "Pequeño sellado / acabado", price: 10, ...ADDON },
      { id: "inspection", label: "Visit & inspection", labelEs: "Visita e inspección", price: 49, ...BASE },
      { id: "custom-job", label: "Custom job / Not listed", labelEs: "Trabajo personalizado / No está en la lista", price: 49, ...POPULAR },
    ],
  },
  bathroom: {
    title: "Bathroom",
    titleEs: "Baño",
    icon: <Droplets className="h-5 w-5" />,
    subtitle: "Mirrors, holders, cabinets and bathroom fitting work.",
    subtitleEs: "Espejos, soportes, muebles y accesorios de baño.",
    badge: "Bath",
    badgeEs: "Baño",
    services: [
      { id: "mirror-install", label: "Mirror installation", labelEs: "Instalación de espejo", price: 35 },
      { id: "holder-install", label: "Towel / paper holder install", labelEs: "Instalación de toallero / portarrollos", price: 25 },
      { id: "bath-cabinet", label: "Bathroom cabinet installation", labelEs: "Instalación de mueble de baño", price: 39 },
      { id: "shower-shelf", label: "Shower shelf install", labelEs: "Instalación de estante de ducha", price: 25 },
      { id: "soap-dispenser", label: "Soap dispenser mount", labelEs: "Montaje de dispensador", price: 19 },
      { id: "toilet-holder", label: "Toilet paper holder install", labelEs: "Instalación de portarrollos", price: 19 },
      { id: "robe-hook", label: "Robe hook installation", labelEs: "Instalación de gancho", price: 19 },
      { id: "small-seal", label: "Bathroom silicone touch-up", labelEs: "Retoque de silicona en baño", price: 25 },
      { id: "bath-light-fix", label: "Bathroom light fitting fix", labelEs: "Arreglo de luz de baño", price: 29 },
      { id: "glass-shelf", label: "Glass shelf installation", labelEs: "Instalación de estante de vidrio", price: 29 },
      { id: "mirror-adjust", label: "Mirror re-level / adjust", labelEs: "Ajuste / nivelación de espejo", price: 19 },
      { id: "bath-accessory-set", label: "Bathroom accessory set install", labelEs: "Instalación de set de accesorios", price: 39 },
      { id: "remove-old-holder", label: "Remove old holder", labelEs: "Retirar soporte antiguo", price: 10, ...ADDON },
      { id: "extra-accessory", label: "Extra accessory same visit", labelEs: "Accesorio extra", price: 8, ...ADDON },
      { id: "silicone-finish-bath", label: "Finish silicone touch-up", labelEs: "Retoque final de silicona", price: 12, ...ADDON },
      { id: "inspection", label: "Visit & inspection", labelEs: "Visita e inspección", price: 49, ...BASE },
      { id: "custom-job", label: "Custom job / Not listed", labelEs: "Trabajo personalizado / No está en la lista", price: 49, ...POPULAR },
    ],
  },
  "move-in": {
    title: "Move-In Setup",
    titleEs: "Preparación de mudanza",
    icon: <Package className="h-5 w-5" />,
    subtitle: "Apartment setup, curtains, furniture and move-in help.",
    subtitleEs: "Preparación de piso, cortinas, muebles y ayuda para mudanza.",
    badge: "Setup",
    badgeEs: "Setup",
    services: [
      { id: "curtain-install", label: "Curtain installation", labelEs: "Instalación de cortinas", price: 35 },
      { id: "blind-install", label: "Blind installation", labelEs: "Instalación de estor / persiana", price: 35 },
      { id: "shelf-install", label: "Shelf installation", labelEs: "Instalación de estante", price: 29 },
      { id: "mirror-mount", label: "Mirror mounting", labelEs: "Montaje de espejo", price: 35 },
      { id: "wall-hook-set", label: "Wall hooks / small accessories", labelEs: "Ganchos / accesorios pequeños", price: 19 },
      { id: "tv-stand-setup", label: "TV stand setup", labelEs: "Montaje de mueble TV", price: 39 },
      { id: "bed-setup", label: "Bed setup", labelEs: "Montaje de cama", price: 49 },
      { id: "desk-setup", label: "Desk setup", labelEs: "Montaje de escritorio", price: 39 },
      { id: "dresser-setup", label: "Dresser setup", labelEs: "Montaje de cómoda", price: 45 },
      { id: "basic-room-setup", label: "Basic room setup", labelEs: "Preparación básica de habitación", price: 49 },
      { id: "entryway-setup", label: "Entryway setup", labelEs: "Preparación de entrada", price: 29 },
      { id: "movein-essentials", label: "Move-in essentials install", labelEs: "Instalación de básicos de mudanza", price: 49 },
      { id: "packaging-remove", label: "Packaging removal", labelEs: "Retirar embalaje", price: 10, ...ADDON },
      { id: "extra-small-install", label: "Extra small install same visit", labelEs: "Instalación extra pequeña", price: 10, ...ADDON },
      { id: "layout-adjust", label: "Minor layout adjustment", labelEs: "Pequeño ajuste de distribución", price: 12, ...ADDON },
      { id: "inspection", label: "Visit & inspection", labelEs: "Visita e inspección", price: 49, ...BASE },
      { id: "custom-job", label: "Custom job / Not listed", labelEs: "Trabajo personalizado / No está en la lista", price: 49, ...POPULAR },
    ],
  },
  exterior: {
    title: "Exterior",
    titleEs: "Exterior",
    icon: <Home className="h-5 w-5" />,
    subtitle: "Outdoor work, facade items, fences and exterior fixes.",
    subtitleEs: "Trabajos exteriores, fachada, vallas y arreglos exteriores.",
    badge: "House",
    badgeEs: "Casa",
    services: [
      { id: "exterior-repair", label: "Exterior repair", labelEs: "Reparación exterior", price: 49 },
      { id: "fence-repair", label: "Fence repair", labelEs: "Reparación de valla", price: 45 },
      { id: "outdoor-light", label: "Outdoor light install", labelEs: "Instalación de luz exterior", price: 49 },
      { id: "house-number", label: "House number install", labelEs: "Instalación de número de casa", price: 19 },
      { id: "mailbox-mount", label: "Mailbox installation", labelEs: "Instalación de buzón", price: 29 },
      { id: "doorbell-exterior", label: "Exterior doorbell install", labelEs: "Instalación de timbre exterior", price: 29 },
      { id: "outdoor-camera", label: "Outdoor camera mount", labelEs: "Montaje de cámara exterior", price: 49 },
      { id: "wall-hook-outdoor", label: "Outdoor wall hook / bracket", labelEs: "Gancho / soporte exterior", price: 25 },
      { id: "small-gate-fix", label: "Small gate adjustment", labelEs: "Pequeño ajuste de puerta exterior", price: 35 },
      { id: "exterior-silicone", label: "Exterior sealing touch-up", labelEs: "Retoque de sellado exterior", price: 29 },
      { id: "outdoor-accessory", label: "Outdoor accessory mount", labelEs: "Montaje de accesorio exterior", price: 25 },
      { id: "small-facade-fix", label: "Small facade fix", labelEs: "Pequeño arreglo de fachada", price: 39 },
      { id: "remove-old-outdoor-item", label: "Remove old outdoor item", labelEs: "Retirar elemento exterior antiguo", price: 10, ...ADDON },
      { id: "extra-outdoor-fix", label: "Extra outdoor fix same visit", labelEs: "Arreglo exterior extra", price: 15, ...ADDON },
      { id: "weather-finish", label: "Weather finish touch-up", labelEs: "Retoque de acabado exterior", price: 12, ...ADDON },
      { id: "inspection", label: "Visit & inspection", labelEs: "Visita e inspección", price: 49, ...BASE },
      { id: "custom-job", label: "Custom job / Not listed", labelEs: "Trabajo personalizado / No está en la lista", price: 49, ...POPULAR },
    ],
  },
};

function isCategoryKey(value: string | null): value is CategoryKey {
  return CATEGORY_KEYS.includes(value as CategoryKey);
}

function getOptionValue(option: SelectOption) {
  return typeof option === "string" ? option : option.value;
}

function getOptionLabel(option: SelectOption) {
  return typeof option === "string" ? option : option.label;
}

function EstimatePageContent() {
  const searchParams = useSearchParams();
  const t = useTranslations("estimatePage");
  const locale = useLocale();
  const isEs = locale === "es";

  const initialCategory = (() => {
    const raw = searchParams.get("category");
    return isCategoryKey(raw) ? raw : "tv-mounting";
  })();

  const [category, setCategory] = useState<CategoryKey>(initialCategory);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [submitStage, setSubmitStage] = useState<"build" | "review" | "success">("build");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [fieldStatus, setFieldStatus] = useState<Record<string, "default" | "error" | "success">>({});
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [hasTriedNext, setHasTriedNext] = useState(false);

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
    Valencia: ["Ciutat Vella", "Russafa", "El Pla del Remei", "La Gran Via", "Campanar", "Marxalenes", "Morvedre", "Trinitat", "Benimaclet", "Algirós", "El Cabanyal - El Canyamelar", "La Malva-rosa", "Aiora", "Amistat", "Mestalla", "Patraix", "Safranar", "Favara", "Arrancapins", "Botànic", "La Roqueta", "La Petxina", "Benicalap", "Torrefiel", "Orriols", "Sant Antoni", "Jesús", "Sant Marcel·lí", "Camí Real", "Malilla", "Monteolivete", "En Corts", "Natzaret", "Quatre Carreres", "Beniferri", "Benimàmet"],
    Torrent: ["Centre", "El Vedat", "Parc Central"],
    Paterna: ["Centro", "La Canyada", "Valterna", "Terramelar", "Campamento"],
    Burjassot: ["Centro", "Empalme", "Cantereria"],
    Alboraia: ["Alboraia Centre", "Port Saplaya", "La Patacona"],
    Mislata: ["Centro", "La Constitución", "El Quint"],
  };

  const CITY_OPTIONS: SelectOption[] = [
    "Valencia", "Mislata", "Xirivella", "Aldaia", "Alaquàs", "Quart de Poblet", "Manises", "Paterna", "Burjassot", "Godella", "Rocafort", "Moncada", "Tavernes Blanques", "Alboraia", "Sedaví", "Benetússer", "Alfafar", "Paiporta", "Picanya", "Torrent", "Catarroja", "Massanassa", "Silla",
    { value: "My city is not listed", label: isEs ? "Mi ciudad no está en la lista" : "My city is not listed" },
  ];

  const TIME_OPTIONS = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

  useEffect(() => {
    const raw = searchParams.get("category");
    if (isCategoryKey(raw)) {
      setCategory(raw);
      setQuantities({});
    }
  }, [searchParams]);

  const currentCategory = CATEGORY_DATA[category];
  const categoryTitle = isEs ? currentCategory.titleEs : currentCategory.title;

  const selectedServices = useMemo(() => {
    return currentCategory.services
      .filter((service) => (quantities[service.id] || 0) > 0)
      .map((service) => {
        const qty = quantities[service.id] || 0;
        return {
          ...service,
          displayLabel: isEs ? service.labelEs : service.label,
          displayBadge: isEs ? service.badgeEs || service.badge : service.badge,
          qty,
          subtotal: qty * service.price,
        };
      });
  }, [currentCategory.services, quantities, isEs]);

  const estimatedTotal = useMemo(() => selectedServices.reduce((sum, item) => sum + item.subtotal, 0), [selectedServices]);

  const subtotal = Number(estimatedTotal.toFixed(2));
  const iva = Number((subtotal * 0.21).toFixed(2));
  const totalWithTax = Number((subtotal + iva).toFixed(2));

  const setQty = (id: string, value: number) => {
    setQuantities((prev) => {
      const next = { ...prev };
      if (value <= 0) delete next[id];
      else next[id] = value;
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

  const getMadridPart = (type: string) => madridNowParts.find((part) => part.type === type)?.value || "";
  const todayDateString = `${getMadridPart("year")}-${getMadridPart("month")}-${getMadridPart("day")}`;
  const minSelectableDate = todayDateString;
  const madridCurrentHour = Number(getMadridPart("hour"));
  const madridCurrentMinute = Number(getMadridPart("minute"));
  const nextAvailableHour = madridCurrentMinute > 0 ? madridCurrentHour + 1 : madridCurrentHour;

  const availableTimeOptions =
    client.preferredDate === todayDateString
      ? TIME_OPTIONS.filter((time) => Number(time.split(":")[0]) >= nextAvailableHour)
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

  const liveErrors = useMemo(() => {
    const errors: string[] = [];

    if (!hasSelectedServices) errors.push(t("errors.selectService"));
    if (!client.fullName.trim()) errors.push(t("errors.fullName"));

    if (!hasContact) {
      errors.push(t("errors.contact"));
    } else {
      if (client.email.trim() && !isValidEmail(client.email)) errors.push(t("errors.email"));
      if (client.phone.trim() && !isValidPhone(client.phone)) errors.push(t("errors.phone"));
    }

    if (!displayCity?.trim()) errors.push(t("errors.city"));
    if (!client.area.trim()) errors.push(t("errors.area"));
    if (!client.houseAddress.trim()) errors.push(t("errors.address"));

    if (!client.preferredDate.trim()) errors.push(t("errors.date"));
    else if (client.preferredDate < todayDateString) errors.push(t("errors.pastDate"));

    if (!client.preferredTime.trim()) errors.push(t("errors.time"));
    else if (client.preferredDate === todayDateString && Number(client.preferredTime.split(":")[0]) < nextAvailableHour) errors.push(t("errors.timeToday"));
    else if (!availableTimeOptions.includes(client.preferredTime)) errors.push(t("errors.timeUnavailable"));

    return errors;
  }, [hasSelectedServices, client.fullName, client.email, client.phone, client.area, client.houseAddress, client.preferredDate, client.preferredTime, displayCity, hasContact, todayDateString, nextAvailableHour, availableTimeOptions, t]);

  const setFieldValue = (field: string, value: string) => {
    setClient((prev) => ({ ...prev, [field]: value }));

    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      if (field === "email" || field === "phone") delete next.contact;
      return next;
    });

    setFieldStatus((prev) => ({ ...prev, [field]: "default" }));
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

    setFieldStatus((prev) => ({ ...prev, [field]: isValid ? "success" : "default" }));
  };

  const validateEstimateForm = () => {
    const errors: Record<string, string> = {};
    const statuses: Record<string, "default" | "error" | "success"> = {};

    if (!hasSelectedServices) errors.services = t("errors.selectService");

    if (!client.fullName.trim()) {
      errors.fullName = t("errors.fullName");
      statuses.fullName = "error";
    } else {
      statuses.fullName = "success";
    }

    if (!hasContact) {
      errors.contact = t("errors.contact");
      statuses.email = "error";
      statuses.phone = "error";
    } else {
      if (client.email.trim()) {
        if (!isValidEmail(client.email)) {
          errors.email = t("errors.email");
          statuses.email = "error";
        } else {
          statuses.email = "success";
        }
      }

      if (client.phone.trim()) {
        if (!isValidPhone(client.phone)) {
          errors.phone = t("errors.phone");
          statuses.phone = "error";
        } else {
          statuses.phone = "success";
        }
      }
    }

    if (!displayCity?.trim()) {
      errors.city = t("errors.city");
      statuses.city = "error";
      statuses.customCity = "error";
    } else {
      if (isCustomCity) statuses.customCity = "success";
      else statuses.city = "success";
    }

    if (!client.area.trim()) {
      errors.area = t("errors.area");
      statuses.area = "error";
    } else {
      statuses.area = "success";
    }

    if (!client.houseAddress.trim()) {
      errors.houseAddress = t("errors.address");
      statuses.houseAddress = "error";
    } else {
      statuses.houseAddress = "success";
    }

    if (!client.preferredDate.trim()) {
      errors.preferredDate = t("errors.date");
      statuses.preferredDate = "error";
    } else if (client.preferredDate < todayDateString) {
      errors.preferredDate = t("errors.pastDate");
      statuses.preferredDate = "error";
    } else {
      statuses.preferredDate = "success";
    }

    if (!client.preferredTime.trim()) {
      errors.preferredTime = t("errors.time");
      statuses.preferredTime = "error";
    } else if (client.preferredDate === todayDateString) {
      const selectedHour = Number(client.preferredTime.split(":")[0]);
      if (selectedHour < nextAvailableHour) {
        errors.preferredTime = t("errors.timeToday");
        statuses.preferredTime = "error";
      } else {
        statuses.preferredTime = "success";
      }
    } else if (!availableTimeOptions.includes(client.preferredTime)) {
      errors.preferredTime = t("errors.timeUnavailable");
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
    setHasTriedNext(true);
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
        category: categoryTitle,
        services: selectedServices.map((service) => ({
          id: service.id,
          label: service.displayLabel,
          price: service.price,
          qty: service.qty,
          subtotal: service.subtotal,
          badge: service.displayBadge,
        })),
        subtotal,
        iva,
        total: totalWithTax,
        locale,
        scheduledAt:
          client.preferredDate && client.preferredTime
            ? new Date(`${client.preferredDate}T${client.preferredTime}:00+02:00`).toISOString()
            : null,
      };

      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send request");
      }

      setSubmitStage("success");
    } catch (error) {
      console.error("SEND REQUEST ERROR:", error);
      setSendError(t("errors.sendError"));
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    if (
      client.preferredDate === todayDateString &&
      client.preferredTime &&
      !availableTimeOptions.includes(client.preferredTime)
    ) {
      setClient((prev) => ({ ...prev, preferredTime: "" }));
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
                      {t("step1.badge")}
                    </div>
                    <h2 className="mt-4 text-2xl font-extrabold text-black sm:text-3xl">
                      {t("step1.title")}
                    </h2>
                    <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-yellow-700 sm:hidden">
                      {t("step1.swipe")}
                      <span aria-hidden="true">→</span>
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-md sm:flex">
                    {currentCategory.icon}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="overflow-x-auto px-1 pb-5 pt-1 sm:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex w-max snap-x snap-mandatory gap-4 pl-1 pr-6">
                      {CATEGORY_KEYS.map((key) => {
                        const active = category === key;
                        const cfg = CATEGORY_DATA[key];

                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => {
                              setCategory(key);
                              setQuantities({});
                            }}
                            className={`group w-[65vw] max-w-[300px] min-h-[220px] shrink-0 snap-start rounded-2xl border p-5 text-left transition-all duration-200 ${
                              active ? "border-yellow-500 bg-yellow-50 shadow-lg" : "border-yellow-400 bg-white"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-md">
                                {cfg.icon}
                              </div>

                              <span className="rounded-full bg-red-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                                {isEs ? cfg.badgeEs : cfg.badge}
                              </span>
                            </div>

                            <h3 className="mt-5 text-[1.5rem] leading-tight font-bold text-black">
                              {isEs ? cfg.titleEs : cfg.title}
                            </h3>

                            <p className="mt-3 text-[15px] leading-6 text-gray-600">
                              {isEs ? cfg.subtitleEs : cfg.subtitle}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
                    {CATEGORY_KEYS.map((key) => {
                      const active = category === key;
                      const cfg = CATEGORY_DATA[key];

                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => {
                            setCategory(key);
                            setQuantities({});
                          }}
                          className={`group min-h-[185px] rounded-2xl border p-4 text-left transition-all duration-200 ${
                            active ? "border-yellow-500 bg-yellow-50 shadow-sm" : "border-yellow-400 bg-white"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-sm">
                              {cfg.icon}
                            </div>

                            <span className="rounded-full bg-red-500 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-white">
                              {isEs ? cfg.badgeEs : cfg.badge}
                            </span>
                          </div>

                          <h3 className="mt-3 text-[17px] font-extrabold leading-[1.15] text-black">
                            {isEs ? cfg.titleEs : cfg.title}
                          </h3>

                          <p className="mt-2 text-[12px] leading-5 text-gray-600 line-clamp-4">
                            {isEs ? cfg.subtitleEs : cfg.subtitle}
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
                      {t("step2.badge")}
                    </div>
                    <h2 className="mt-4 text-2xl font-extrabold text-black sm:text-3xl">
                      {isEs
  ? `${t("step2.titlePrefix")} ${categoryTitle.toLowerCase()}`
  : `${categoryTitle} ${t("step2.titleSuffix")}`}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base">
                      {t("step2.description")}
                    </p>
                  </div>

                  {selectedServices.length > 0 ? (
                    <button
                      type="button"
                      onClick={clearAll}
                      className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:shadow-md hover:bg-gray-50 active:scale-95"
                    >
                      <Trash2 className="h-4 w-4" />
                      {t("step2.clearAll")}
                    </button>
                  ) : null}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                  {currentCategory.services.map((service) => {
                    const qty = quantities[service.id] || 0;
                    const serviceLabel = isEs ? service.labelEs : service.label;
                    const serviceBadge = isEs ? service.badgeEs || service.badge : service.badge;

                    return (
                      <div
                        key={service.id}
                        className="rounded-2xl border border-yellow-400 bg-white p-5 shadow-md transition-all duration-200 hover:shadow-xl hover:scale-[1.01]"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-lg font-extrabold text-black">{serviceLabel}</h3>
                            {serviceBadge ? (
                              <span className="mt-2 inline-flex rounded-full bg-yellow-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-yellow-700">
                                {serviceBadge}
                              </span>
                            ) : null}
                          </div>

                          <div className="rounded-full bg-yellow-50 px-3 py-1 text-sm font-extrabold text-yellow-600">
                            €{service.price}
                          </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between gap-4">
                          <div className="text-sm text-gray-600">{t("step2.startingPrice")}</div>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => removeOne(service.id)}
                              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 bg-white text-black shadow-sm transition hover:shadow-md active:scale-95"
                            >
                              −
                            </button>

                            <div className="min-w-[52px] rounded-xl border border-yellow-400 bg-yellow-50 px-4 py-2 text-center text-sm font-extrabold text-black">
                              {qty}
                            </div>

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
                          <span className="text-sm text-gray-500">{t("step2.subtotal")}</span>
                          <span className="text-base font-extrabold text-black">€{qty * service.price}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-4 text-xs text-gray-500">{t("step2.customNote")}</p>
              </section>

              <section className="rounded-3xl border border-yellow-400 bg-white p-6 shadow-xl sm:p-8">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-3 py-1 text-xs font-semibold text-black">
                    <Mail className="h-4 w-4" />
                    {t("step3.badge")}
                  </div>
                  <h2 className="mt-4 text-2xl font-extrabold text-black sm:text-3xl">
                    {t("step3.title")}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base">
                    {t("step3.description")}
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field
                    label={t("form.fullName")}
                    icon={<BadgeCheck className="h-4 w-4" />}
                    value={client.fullName}
                    onChange={(v) => setFieldValue("fullName", v)}
                    onBlur={() => setFieldSuccessIfValid("fullName")}
                    placeholder={t("form.fullName")}
                    error={fieldErrors.fullName}
                    status={fieldStatus.fullName || "default"}
                  />

                  <Field
                    label={t("form.email")}
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
                    label={t("form.phone")}
                    icon={<Phone className="h-4 w-4" />}
                    value={client.phone}
                    onChange={(v) => setFieldValue("phone", v)}
                    onBlur={() => setFieldSuccessIfValid("phone")}
                    placeholder="+34 ..."
                    error={fieldErrors.phone || fieldErrors.contact}
                    status={fieldStatus.phone || "default"}
                  />

                  <SelectField
                    label={t("form.city")}
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
                    placeholder={t("form.chooseCity")}
                    error={!isCustomCity ? fieldErrors.city : undefined}
                    status={fieldStatus.city || "default"}
                  />

                  {client.city === "My city is not listed" && (
                    <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
                      <label className="mb-2 flex items-center gap-2 text-sm font-bold text-black">
                        <MapPin className="h-4 w-4" />
                        {t("form.customCity")}
                      </label>

                      <input
                        type="text"
                        value={client.customCity}
                        onChange={(e) => setFieldValue("customCity", e.target.value)}
                        onBlur={() => setFieldSuccessIfValid("customCity")}
                        placeholder={t("form.enterCity")}
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-black outline-none transition ${
                          fieldErrors.city || fieldStatus.customCity === "error"
                            ? "border-red-400 bg-red-50 focus:border-red-500"
                            : fieldStatus.customCity === "success"
                            ? "border-green-500 bg-green-50 focus:border-green-600"
                            : "border-gray-300 focus:border-yellow-400"
                        }`}
                      />

                      {fieldErrors.city ? (
                        <p className="mt-2 text-xs font-medium text-red-600">{fieldErrors.city}</p>
                      ) : null}

                      <p className="mt-3 text-xs leading-6 text-gray-500">
                        {isEs
                          ? "Te contactaremos para confirmar el desplazamiento, disponibilidad y acceso a tu ubicación."
                          : "We’ll contact you to confirm travel time, availability and access to your location."}
                      </p>
                    </div>
                  )}

                  {!isCustomCity && hasAreaOptions && (
                    <SelectField
                      label={client.city === "Valencia" ? t("form.area") : t("form.areaNeighborhood")}
                      icon={<MapPin className="h-4 w-4" />}
                      value={client.area}
                      onChange={(v) => {
                        setFieldValue("area", v);
                        setFieldSuccessIfValid("area", v);
                      }}
                      options={selectedCityAreas}
                      placeholder={client.city === "Valencia" ? t("form.chooseArea") : t("form.chooseAreaNeighborhood")}
                      error={fieldErrors.area}
                      status={fieldStatus.area || "default"}
                    />
                  )}

                  {!isCustomCity && !hasAreaOptions && (
                    <Field
                      label={t("form.areaNeighborhood")}
                      icon={<MapPin className="h-4 w-4" />}
                      value={client.area}
                      onChange={(v) => setFieldValue("area", v)}
                      onBlur={() => setFieldSuccessIfValid("area")}
                      placeholder={t("form.writeArea")}
                      error={fieldErrors.area}
                      status={fieldStatus.area || "default"}
                    />
                  )}

                  {isCustomCity && (
                    <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
                      <label className="mb-2 flex items-center gap-2 text-sm font-bold text-black">
                        <MapPin className="h-4 w-4" />
                        {t("form.areaNeighborhood")}
                      </label>

                      <input
                        type="text"
                        value={client.area}
                        onChange={(e) => setFieldValue("area", e.target.value)}
                        onBlur={() => setFieldSuccessIfValid("area")}
                        placeholder={t("form.writeArea")}
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-black outline-none transition ${
                          fieldErrors.area
                            ? "border-red-400 bg-red-50 focus:border-red-500"
                            : fieldStatus.area === "success"
                            ? "border-green-500 bg-green-50 focus:border-green-600"
                            : "border-gray-300 focus:border-yellow-400"
                        }`}
                      />

                      {fieldErrors.area ? (
                        <p className="mt-2 text-xs font-medium text-red-600">{fieldErrors.area}</p>
                      ) : null}

                      <p className="mt-3 text-xs leading-6 text-gray-500">
                        {isEs
                          ? "Te contactaremos para confirmar el desplazamiento, disponibilidad y acceso a tu ubicación."
                          : "We’ll contact you to confirm travel time, availability and access to your location."}
                      </p>
                    </div>
                  )}

                  <Field
                    label={t("form.houseAddress")}
                    icon={<Home className="h-4 w-4" />}
                    value={client.houseAddress}
                    onChange={(v) => setFieldValue("houseAddress", v)}
                    onBlur={() => setFieldSuccessIfValid("houseAddress")}
                    placeholder={t("form.addressPlaceholder")}
                    error={fieldErrors.houseAddress}
                    status={fieldStatus.houseAddress || "default"}
                  />

                  <Field
                    label={t("form.apartmentNumber")}
                    icon={<Home className="h-4 w-4" />}
                    value={client.apartmentNumber}
                    onChange={(v) => setClient((prev) => ({ ...prev, apartmentNumber: v }))}
                    placeholder={t("form.apartmentPlaceholder")}
                  />

                  <Field
                    label={t("form.addressDetails")}
                    icon={<Home className="h-4 w-4" />}
                    value={client.addressDetails}
                    onChange={(v) => setClient((prev) => ({ ...prev, addressDetails: v }))}
                    placeholder={t("form.addressDetailsPlaceholder")}
                  />

                  <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
                    <label className="mb-3 flex items-center gap-2 text-sm font-bold text-black">
                      <Clock3 className="h-4 w-4" />
                      {t("form.preferredDateTime")}
                    </label>

                    <div className="mb-3">
                      <p className="mb-2 text-xs font-semibold text-gray-500">{t("form.preferredDate")}</p>

                      <input
                        type="date"
                        min={minSelectableDate}
                        value={client.preferredDate}
                        onChange={(e) => setFieldValue("preferredDate", e.target.value)}
                        onBlur={() => setFieldSuccessIfValid("preferredDate")}
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-black outline-none transition appearance-none ${
                          fieldStatus.preferredDate === "error"
                            ? "border-red-400 bg-red-50 focus:border-red-500"
                            : fieldStatus.preferredDate === "success"
                            ? "border-green-500 bg-green-50 focus:border-green-600"
                            : "border-gray-300 focus:border-yellow-400"
                        }`}
                      />

                      {fieldErrors.preferredDate ? (
                        <p className="mt-2 text-xs font-medium text-red-600">{fieldErrors.preferredDate}</p>
                      ) : null}
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-semibold text-gray-500">{t("form.preferredTime")}</p>

                      <select
                        value={client.preferredTime}
                        onChange={(e) => setFieldValue("preferredTime", e.target.value)}
                        onBlur={() => setFieldSuccessIfValid("preferredTime")}
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-black outline-none transition appearance-none ${
                          fieldStatus.preferredTime === "error"
                            ? "border-red-400 bg-red-50 focus:border-red-500"
                            : fieldStatus.preferredTime === "success"
                            ? "border-green-500 bg-green-50 focus:border-green-600"
                            : "border-gray-300 focus:border-yellow-400"
                        }`}
                      >
                        <option value="">{t("form.chooseTime")}</option>
                        {availableTimeOptions.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>

                      {fieldErrors.preferredTime ? (
                        <p className="mt-2 text-xs font-medium text-red-600">{fieldErrors.preferredTime}</p>
                      ) : (
                        <p className="mt-3 text-xs leading-6 text-gray-500">
                          {client.preferredDate === todayDateString ? t("form.todayTimeNote") : t("form.normalTimeNote")}
                          <br />
                          <span className="text-gray-400">{t("form.localTimeNote")}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
                    <label className="mb-2 flex items-center gap-2 text-sm font-bold text-black">
                      <MessageSquare className="h-6 w-4" />
                      {t("form.notes")}
                    </label>

                    <textarea
                      value={client.notes}
                      onChange={(e) => setClient((prev) => ({ ...prev, notes: e.target.value }))}
                      placeholder={t("form.notesPlaceholder")}
                      className="min-h-[150px] w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-yellow-400"
                    />
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <section className="rounded-3xl border border-yellow-400 bg-white p-6 shadow-2xl sm:p-8 lg:h-[calc(100vh-7rem)] lg:flex lg:flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-3 py-1 text-xs font-semibold text-black">
                      <Calculator className="h-4 w-4" />
                      {t("summary.badge")}
                    </div>
                    <h2 className="mt-4 text-2xl font-extrabold text-black">{t("summary.title")}</h2>
                    <p className="mt-2 text-sm text-gray-600 lg:whitespace-nowrap">{t("summary.description")}</p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-md">
                    {currentCategory.icon}
                  </div>
                </div>

                {submitStage === "build" && (
                  <div className="mt-4 rounded-2xl border border-yellow-400 bg-yellow-50/40 p-4 shadow-sm">
                    <p className="text-xs text-gray-600">{t("summary.selectedCategory")}</p>
                    <p className="text-sm font-bold text-black">{categoryTitle}</p>
                  </div>
                )}

                {submitStage === "build" && (
                  <div className="mt-6 flex-1 min-h-0 overflow-y-auto pr-2 space-y-3">
                    {selectedServices.length === 0 ? (
                      <div className="flex min-h-[150px] w-full items-center rounded-2xl border border-dashed border-yellow-400 bg-white p-5 text-sm leading-7 text-gray-500">
                        {t("summary.empty")}
                      </div>
                    ) : (
                      selectedServices.map((item) => (
                        <div key={item.id} className="rounded-2xl border border-yellow-400 bg-white px-4 py-3 shadow-sm">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="font-bold text-black">{item.displayLabel}</p>
                              <p className="mt-1 text-xs text-gray-500">
                                {item.qty} × €{item.price}
                              </p>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="text-sm font-extrabold text-black">€{item.subtotal}</div>

                              <button
                                type="button"
                                onClick={() => setQty(item.id, 0)}
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-300 bg-white text-black shadow-sm transition hover:bg-gray-50 hover:shadow-md active:scale-95"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}

                {submitStage === "build" && (
                  <TotalBox subtotal={subtotal} iva={iva} totalWithTax={totalWithTax} t={t} />
                )}

                {submitStage === "build" && (
  <div className="mt-6">
    {!hasTriedNext || liveErrors.length === 0 ? (
      <button
        type="button"
        onClick={handleNextStep}
        className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-extrabold text-black shadow-lg transition ${
          hasSelectedServices
            ? "bg-yellow-400 hover:scale-[1.02]"
            : "bg-yellow-300 hover:bg-yellow-400"
        }`}
      >
        {t("summary.next")}
        <ArrowRight className="h-4 w-4" />
      </button>
    ) : (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-red-600">
        <p className="text-sm font-bold">{t("errors.fixTitle")}</p>

        <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-sm lg:grid-cols-2">
          {liveErrors.map((error, index) => (
            <li key={index} className="leading-5">
              • {error}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
)}
                {submitStage === "review" && (
                  <>
                    <div className="mt-6 max-h-[70vh] flex-1 overflow-y-auto pr-2 space-y-4">
                      <div className="rounded-2xl border border-yellow-400 bg-yellow-50/50 p-4">
                        <p className="text-sm font-bold text-black">{t("review.title")}</p>
                        <p className="mt-1 text-sm text-gray-600">{t("review.description")}</p>
                      </div>

                      <ReviewCard title={t("review.client")}>
                        <p>
                          <span className="text-gray-500">{t("review.name")}:</span>{" "}
                          <span className="font-semibold">{client.fullName || "—"}</span>
                        </p>
                        <p>
                          <span className="text-gray-500">{t("review.phone")}:</span>{" "}
                          <span className="font-semibold">{client.phone || "—"}</span>
                        </p>
                        <p>
                          <span className="text-gray-500">{t("review.email")}:</span>{" "}
                          <span className="font-semibold">{client.email || "—"}</span>
                        </p>
                      </ReviewCard>

                      <ReviewCard title={t("review.category")}>
                        <p className="font-semibold text-black">{categoryTitle}</p>
                      </ReviewCard>

                      <ReviewCard title={t("review.selectedServices")}>
                        <div className="space-y-3">
                          {selectedServices.map((item) => (
                            <div key={item.id} className="flex items-center justify-between gap-3 border-b border-gray-100 pb-2">
                              <div className="flex flex-col">
                                <span className="font-semibold text-black">{item.displayLabel}</span>
                                <span className="text-xs text-gray-500">
                                  {item.qty} × €{item.price}
                                </span>
                              </div>

                              <span className="font-semibold text-black">€{item.subtotal}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 space-y-2 border-t border-gray-300 pt-4">
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>{t("summary.subtotal")}</span>
                            <span>€{subtotal.toFixed(2)}</span>
                          </div>

                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>{t("summary.iva")}</span>
                            <span>€{iva.toFixed(2)}</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold uppercase tracking-wide text-gray-500">
                              {t("summary.total")}
                            </span>

                            <span className="text-xl font-extrabold text-black">
                              €{totalWithTax.toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <p className="mt-2 text-xs text-gray-500">
                          {isEs ? "El total final incluye IVA." : "Final total includes IVA."}
                        </p>
                      </ReviewCard>

                      <ReviewCard title={t("review.address")}>
                        <p className="font-semibold text-black">
                          {displayCity || "—"}, {client.area || "—"}
                        </p>

                        <p className="text-gray-700">
                          {client.houseAddress || "—"}
                          {client.apartmentNumber ? `, ${client.apartmentNumber}` : ""}
                        </p>

                        {client.addressDetails && (
                          <p className="text-xs text-gray-500">{client.addressDetails}</p>
                        )}
                      </ReviewCard>

                      <ReviewCard title={t("review.schedule")}>
                        <div className="flex items-start gap-3">
                          <Clock3 className="mt-1 h-4 w-4 text-yellow-500" />

                          <p className="font-semibold text-black">
                            {client.preferredDate || "—"}{" "}
                            {client.preferredTime ? `${isEs ? "a las" : "at"} ${client.preferredTime}` : ""}
                          </p>
                        </div>
                      </ReviewCard>

                      <ReviewCard title={t("review.notes")}>
                        <p className="text-black">{client.notes.trim() || t("review.noNotes")}</p>
                      </ReviewCard>

                      <p className="text-center text-xs text-gray-500">{t("review.noPayment")}</p>

                      {sendError && (
                        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                          {sendError}
                        </div>
                      )}
                    </div>

                   <div className="mt-6 shrink-0 pb-4">
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={handleBackToEdit}
                          disabled={isSending}
                          className="flex-1 rounded-2xl border border-gray-300 bg-white py-4 text-sm font-bold text-black transition hover:bg-gray-50 hover:shadow-sm active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {t("review.back")}
                        </button>

                        <button
                          type="button"
                          onClick={handleConfirmSend}
                          disabled={isSending}
                          className="flex-1 rounded-2xl bg-yellow-400 py-4 text-sm font-extrabold text-black shadow-md transition hover:scale-[1.02] hover:shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isSending ? t("review.sending") : t("review.send")}
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {submitStage === "success" && (
                  <div className="mt-6 flex flex-1 flex-col justify-center space-y-4">
                    <div className="rounded-2xl border border-green-200 bg-green-50 p-5 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-500 text-lg font-extrabold text-white shadow-sm">
                          ✓
                        </div>

                        <div>
                          <p className="text-lg font-extrabold text-black">{t("success.title")}</p>

                          <p className="mt-2 text-sm leading-6 text-gray-600">{t("success.description")}</p>

                          <div className="mt-4 space-y-1 text-sm text-gray-700">
                            <p>• {t("success.point1")}</p>
                            <p>• {t("success.point2")}</p>
                            <p>• {t("success.point3")}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-yellow-400 bg-yellow-50/50 p-4 text-sm leading-6 text-gray-700">
                      {t("success.note")}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitStage("build");
                        setQuantities({});
                        setFormErrors({});
                        setFieldErrors({});
                        setFieldStatus({});
                        setSendError("");
                        setHasTriedNext(false);
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
                      {t("success.newRequest")}
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

function TotalBox({
  subtotal,
  iva,
  totalWithTax,
  t,
}: {
  subtotal: number;
  iva: number;
  totalWithTax: number;
  t: (key: string) => string;
}) {
  return (
    <div className="mt-6 shrink-0 rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-5 shadow-md space-y-2">
      <div className="flex justify-between text-sm text-gray-600">
        <span>{t("summary.subtotal")}</span>
        <span>€{subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-sm text-gray-600">
        <span>{t("summary.iva")}</span>
        <span>€{iva.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-lg font-extrabold text-black border-t border-yellow-400 pt-2">
        <span>{t("summary.total")}</span>
        <span>€{totalWithTax.toFixed(2)}</span>
      </div>

      <p className="text-xs text-gray-500">{t("summary.pricesNote")}</p>
    </div>
  );
}

function ReviewCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{title}</p>
      <div className="mt-2 space-y-2 text-sm text-black">{children}</div>
    </div>
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
        className={`w-full rounded-xl border px-4 py-3 text-base outline-none transition ${
          disabled
            ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
            : status === "error"
            ? "border-red-400 bg-red-50 text-black focus:border-red-500"
            : status === "success"
            ? "border-green-500 bg-green-50 text-black focus:border-green-600"
            : "border-gray-300 bg-white text-black focus:border-yellow-400"
        }`}
      />

      {error ? <p className="mt-2 text-xs font-medium text-red-600">{error}</p> : null}
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
  options: SelectOption[];
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
          className={`w-full appearance-none rounded-xl border px-4 py-3 pr-12 text-base outline-none transition ${
            status === "error"
              ? "border-red-400 bg-red-50 text-black focus:border-red-500"
              : status === "success"
              ? "border-green-500 bg-green-50 text-black focus:border-green-600"
              : "border-gray-300 bg-white text-black focus:border-yellow-400"
          }`}
        >
          <option value="">{placeholder || "Select option"}</option>
          {options.map((option) => (
            <option key={getOptionValue(option)} value={getOptionValue(option)}>
              {getOptionLabel(option)}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
          ▼
        </div>
      </div>

      {error ? <p className="mt-2 text-xs font-medium text-red-600">{error}</p> : null}
    </div>
  );
}