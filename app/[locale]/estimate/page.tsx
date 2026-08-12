"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { CatalogService, getCatalogServices } from "@/lib/serviceCatalog";
import {
  Calculator,
  ClipboardList,
  Hammer,
  Tv,
  Fan,
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
import { ALICANTE_DISTRICTS, AVAILABLE_CITIES, BARCELONA_DISTRICTS, MADRID_DISTRICTS, marketFromCity } from "@/lib/cities";

type CategoryKey =
  | "handyman"
  | "tv-mounting"
  | "ceiling-fans"
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

type ServiceItem = CatalogService;

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

const CATEGORY_KEYS: CategoryKey[] = [
  "tv-mounting",
  "handyman",
  "ceiling-fans",
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
  handyman: {
    title: "Handyman",
    titleEs: "Handyman / Manitas",
    icon: <Hammer className="h-5 w-5" />,
    subtitle: "General home repairs, assembly, installation and maintenance.",
    subtitleEs: "Reparaciones, montaje, instalaciones y mantenimiento del hogar.",
    badge: "All-in-one",
    badgeEs: "Todo en uno",
    services: getCatalogServices("Handyman"),
  },
  "tv-mounting": {
    title: "TV Mounting",
    titleEs: "Instalación de TV",
    icon: <Tv className="h-5 w-5" />,
    subtitle: "TV installation, brackets, cable routing and clean wall setups.",
    subtitleEs: "Instalación de televisores, soportes, cables y montaje limpio.",
    badge: "Top",
    badgeEs: "Top",
    services: getCatalogServices("TV Mounting"),
  },
  "ceiling-fans": {
    title: "Ceiling Fans",
    titleEs: "Ventiladores de techo",
    icon: <Fan className="h-5 w-5" />,
    subtitle: "Installation and replacement of ceiling fans in your city.",
    subtitleEs: "Instalación y sustitución de ventiladores de techo en tu ciudad.",
    badge: "Popular",
    badgeEs: "Popular",
    services: getCatalogServices("Ceiling Fans"),
  },
  electrical: {
    title: "Electrical",
    titleEs: "Electricidad",
    icon: <Zap className="h-5 w-5" />,
    subtitle: "Lights, switches, sockets and small electrical upgrades.",
    subtitleEs: "Luces, interruptores, enchufes y pequeñas mejoras eléctricas.",
    badge: "Safe",
    badgeEs: "Seguro",
    services: getCatalogServices("Electrical"),
  },
  plumbing: {
    title: "Plumbing",
    titleEs: "Fontanería",
    icon: <Droplets className="h-5 w-5" />,
    subtitle: "Faucets, sinks, toilets and visible plumbing fixes.",
    subtitleEs: "Grifos, lavabos, inodoros y reparaciones visibles.",
    badge: "Fast",
    badgeEs: "Rápido",
    services: getCatalogServices("Plumbing"),
  },
  furniture: {
    title: "Furniture Assembly",
    titleEs: "Montaje de muebles",
    icon: <Package className="h-5 w-5" />,
    subtitle: "IKEA, wardrobes, desks, beds and move-in furniture setup.",
    subtitleEs: "IKEA, armarios, escritorios, camas y montaje de muebles.",
    badge: "Popular",
    badgeEs: "Popular",
    services: getCatalogServices("Furniture Assembly"),
  },
  drywall: {
    title: "Drywall",
    titleEs: "Pladur / paredes",
    icon: <Hammer className="h-5 w-5" />,
    subtitle: "Patching, cutouts, sanding and small wall finishing work.",
    subtitleEs: "Parches, cortes, lijado y pequeños acabados de pared.",
    badge: "Pro",
    badgeEs: "Pro",
    services: getCatalogServices("Drywall"),
  },
  repairs: {
    title: "Repairs",
    titleEs: "Reparaciones",
    icon: <Hammer className="h-5 w-5" />,
    subtitle: "Small home fixes, adjustments and practical repair work.",
    subtitleEs: "Pequeñas reparaciones, ajustes y trabajos prácticos.",
    badge: "Quick",
    badgeEs: "Rápido",
    services: getCatalogServices("Repairs"),
  },
  doors: {
    title: "Doors & Hardware",
    titleEs: "Puertas y herrajes",
    icon: <Home className="h-5 w-5" />,
    subtitle: "Handles, hinges, locks and visible door hardware fixes.",
    subtitleEs: "Manillas, bisagras, cerraduras y ajustes visibles.",
    badge: "Fix",
    badgeEs: "Fix",
    services: getCatalogServices("Doors & Hardware"),
  },
  "smart-home": {
    title: "Smart Home",
    titleEs: "Smart Home",
    icon: <Zap className="h-5 w-5" />,
    subtitle: "Cameras, doorbells, sensors and smart home device setup.",
    subtitleEs: "Cámaras, timbres, sensores y dispositivos inteligentes.",
    badge: "Smart",
    badgeEs: "Smart",
    services: getCatalogServices("Smart Home"),
  },
  kitchen: {
    title: "Kitchen",
    titleEs: "Cocina",
    icon: <Home className="h-5 w-5" />,
    subtitle: "Kitchen fittings, shelves, rails and practical installations.",
    subtitleEs: "Accesorios, estantes, barras e instalaciones de cocina.",
    badge: "Kitchen",
    badgeEs: "Cocina",
    services: getCatalogServices("Kitchen"),
  },
  bathroom: {
    title: "Bathroom",
    titleEs: "Baño",
    icon: <Droplets className="h-5 w-5" />,
    subtitle: "Mirrors, holders, cabinets and bathroom fitting work.",
    subtitleEs: "Espejos, soportes, muebles y accesorios de baño.",
    badge: "Bath",
    badgeEs: "Baño",
    services: getCatalogServices("Bathroom"),
  },
  "move-in": {
    title: "Move-In Setup",
    titleEs: "Preparación de mudanza",
    icon: <Package className="h-5 w-5" />,
    subtitle: "Apartment setup, curtains, furniture and move-in help.",
    subtitleEs: "Preparación de piso, cortinas, muebles y ayuda para mudanza.",
    badge: "Setup",
    badgeEs: "Setup",
    services: getCatalogServices("Move-In Setup"),
  },
  exterior: {
    title: "Exterior",
    titleEs: "Exterior",
    icon: <Home className="h-5 w-5" />,
    subtitle: "Outdoor work, facade items, fences and exterior fixes.",
    subtitleEs: "Trabajos exteriores, fachada, vallas y arreglos exteriores.",
    badge: "House",
    badgeEs: "Casa",
    services: getCatalogServices("Exterior"),
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
  const requestedMarket = searchParams.get("market");
  const defaultCity = requestedMarket === "madrid" ? "Madrid" : requestedMarket === "barcelona" ? "Barcelona" : requestedMarket === "alicante" ? "Alicante" : "Valencia";

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
  const [bookedTimes, setBookedTimes] = useState<string[]>([]);
  const [isAvailabilityLoading, setIsAvailabilityLoading] = useState(false);
  const [availabilityError, setAvailabilityError] = useState("");
  const orderedCategoryKeys = [
    category,
    ...CATEGORY_KEYS.filter((key) => key !== category),
  ];

  const [client, setClient] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: defaultCity,
    area: "",
    houseAddress: "",
    apartmentNumber: "",
    addressDetails: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });
  const availabilityCity = client.city;

  const CITY_AREA_OPTIONS: Record<string, string[]> = {
    Madrid: [...MADRID_DISTRICTS],
    Barcelona: [...BARCELONA_DISTRICTS],
    Alicante: [...ALICANTE_DISTRICTS],
    Valencia: ["Ciutat Vella", "Russafa", "El Pla del Remei", "La Gran Via", "Campanar", "Marxalenes", "Morvedre", "Trinitat", "Benimaclet", "Algirós", "El Cabanyal - El Canyamelar", "La Malva-rosa", "Aiora", "Amistat", "Mestalla", "Patraix", "Safranar", "Favara", "Arrancapins", "Botànic", "La Roqueta", "La Petxina", "Benicalap", "Torrefiel", "Orriols", "Sant Antoni", "Jesús", "Sant Marcel·lí", "Camí Real", "Malilla", "Monteolivete", "En Corts", "Natzaret", "Quatre Carreres", "Beniferri", "Benimàmet"],
  };

  const CITY_OPTIONS: SelectOption[] = [...AVAILABLE_CITIES];

  const TIME_OPTIONS = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

  useEffect(() => {
    if (!client.preferredDate) {
      setBookedTimes([]);
      setAvailabilityError("");
      return;
    }

    const controller = new AbortController();

    const loadAvailability = async () => {
      try {
        setIsAvailabilityLoading(true);
        setAvailabilityError("");

        const response = await fetch(
          `/api/availability?date=${encodeURIComponent(client.preferredDate)}&city=${encodeURIComponent(availabilityCity || defaultCity)}`,
          {
            cache: "no-store",
            signal: controller.signal,
          }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Failed to load availability");
        }

        setBookedTimes(
          Array.isArray(result.bookedTimes)
            ? result.bookedTimes.map((time: string) => time.slice(0, 5))
            : []
        );
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
        console.error("AVAILABILITY ERROR:", error);
        setBookedTimes([]);
        setAvailabilityError(
          isEs
            ? "No se pudo comprobar la disponibilidad. Inténtalo de nuevo."
            : "Could not check availability. Please try again."
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsAvailabilityLoading(false);
        }
      }
    };

    loadAvailability();

    return () => controller.abort();
  }, [client.preferredDate, availabilityCity, defaultCity, isEs]);

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
  const total = subtotal;

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
  const displayCity = client.city;
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
    !client.preferredDate || isAvailabilityLoading || availabilityError
      ? []
      : TIME_OPTIONS.filter((time) => {
          if (bookedTimes.includes(time)) return false;

          if (client.preferredDate === todayDateString) {
            return Number(time.split(":")[0]) >= nextAvailableHour;
          }

          return true;
        });

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
    } else {
      statuses.city = "success";
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
        iva: 0,
        total,
        locale,
        sourceUrl: window.location.href,
        market: marketFromCity(displayCity),
      };

      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (response.status === 409) {
          setSubmitStage("build");
          setClient((prev) => ({ ...prev, preferredTime: "" }));
          setFieldErrors((prev) => ({
            ...prev,
            preferredTime:
              isEs
                ? "Esta hora acaba de ser reservada. Elige otra hora."
                : "This time was just booked. Please choose another time.",
          }));
        }
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
    if (client.preferredTime && !availableTimeOptions.includes(client.preferredTime)) {
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
                      {orderedCategoryKeys.map((key) => {
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
                    {orderedCategoryKeys.map((key) => {
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
                    error={fieldErrors.city}
                    status={fieldStatus.city || "default"}
                  />

                  {hasAreaOptions && (
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

                  {!hasAreaOptions && (
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
                        disabled={
                          !client.preferredDate ||
                          isAvailabilityLoading ||
                          Boolean(availabilityError)
                        }
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
                        <option value="">
                          {isAvailabilityLoading
                            ? isEs
                              ? "Comprobando disponibilidad..."
                              : "Checking availability..."
                            : t("form.chooseTime")}
                        </option>
                        {availableTimeOptions.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>

                      {availabilityError ? (
                        <p className="mt-2 text-xs font-medium text-red-600">
                          {availabilityError}
                        </p>
                      ) : fieldErrors.preferredTime ? (
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
                  <TotalBox total={total} t={t} />
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
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold uppercase tracking-wide text-gray-500">
                              {t("summary.total")}
                            </span>

                            <span className="text-xl font-extrabold text-black">
                              €{total.toFixed(2)}
                            </span>
                          </div>
                        </div>

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
                          city: defaultCity,
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
  total,
  t,
}: {
  total: number;
  t: (key: string) => string;
}) {
  return (
    <div className="mt-6 shrink-0 rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-5 shadow-md space-y-2">
      <div className="flex justify-between text-lg font-extrabold text-black">
        <span>{t("summary.total")}</span>
        <span>€{total.toFixed(2)}</span>
      </div>
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
