"use client";

import React, { useEffect, useMemo, useState } from "react";
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
    ],
  },

drywall: {
  title: "Drywall",
  icon: <Hammer className="h-5 w-5" />,
  subtitle: "Patching, cutouts, sanding and small wall finishing work.",
  badge: "Pro",
  services: [
    { id: "drywall-patch", label: "Small drywall patch", price: 35 },
    { id: "drywall-cutout", label: "Wall cutout", price: 39 },
  ],
},
repairs: {
  title: "Repairs",
  icon: <Hammer className="h-5 w-5" />,
  subtitle: "Small home fixes, adjustments and practical repair work.",
  badge: "Quick",
  services: [
    { id: "minor-fix", label: "Minor repair", price: 29 },
    { id: "adjustment", label: "Home adjustment", price: 25 },
  ],
},
doors: {
  title: "Doors & Hardware",
  icon: <Home className="h-5 w-5" />,
  subtitle: "Handles, hinges, locks and visible door hardware fixes.",
  badge: "Fix",
  services: [
    { id: "handle-fix", label: "Handle replacement", price: 25 },
    { id: "hinge-fix", label: "Hinge adjustment", price: 25 },
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
  ],
},
bathroom: {
  title: "Bathroom",
  icon: <Droplets className="h-5 w-5" />,
  subtitle: "Mirrors, holders, cabinets and bathroom fitting work.",
  badge: "Bath",
  services: [
    { id: "mirror-install", label: "Mirror installation", price: 35 },
    { id: "holder-install", label: "Holder installation", price: 25 },
  ],
},
"move-in": {
  title: "Move-In Setup",
  icon: <Package className="h-5 w-5" />,
  subtitle: "Apartment setup, curtains, furniture and move-in help.",
  badge: "Setup",
  services: [
    { id: "curtain-install", label: "Curtain installation", price: 35 },
    { id: "movein-help", label: "Move-in setup help", price: 49 },
  ],
},
exterior: {
  title: "Exterior",
  icon: <Home className="h-5 w-5" />,
  subtitle: "Outdoor work, facade items, fences and exterior fixes.",
  badge: "House",
  services: [
    { id: "exterior-fix", label: "Exterior repair", price: 49 },
    { id: "fence-fix", label: "Fence repair", price: 45 },
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

export default function EstimatePage() {
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

const categoriesPerPage = 4;
const totalCategoryPages = Math.ceil(CATEGORY_OPTIONS.length / categoriesPerPage);

const visibleCategoryOptions = CATEGORY_OPTIONS.slice(
  categoryPage * categoriesPerPage,
  categoryPage * categoriesPerPage + categoriesPerPage
);

useEffect(() => {
  const categoryIndex = CATEGORY_OPTIONS.findIndex(
    (item) => item.key === category
  );

  if (categoryIndex >= 0) {
    setCategoryPage(Math.floor(categoryIndex / 4));
  }
}, [category]);

return (

    <div className="min-h-screen bg-white text-black font-sans">
      <section className="relative px-4 py-10 sm:py-2">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute left-1/2 top-0 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-yellow-200/35 blur-3xl" />
          <div className="absolute right-8 top-24 h-[320px] w-[320px] rounded-full bg-yellow-100/70 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-7xl">
          

          

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
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
                    onChange={(v) => setClient((prev) => ({ ...prev, fullName: v }))}
                    placeholder="Your full name"
                  />

                  <Field
                    label="Email"
                    icon={<Mail className="h-4 w-4" />}
                    value={client.email}
                    onChange={(v) => setClient((prev) => ({ ...prev, email: v }))}
                    placeholder="your@email.com"
                    type="email"
                  />

                  <Field
                    label="Phone / WhatsApp"
                    icon={<Phone className="h-4 w-4" />}
                    value={client.phone}
                    onChange={(v) => setClient((prev) => ({ ...prev, phone: v }))}
                    placeholder="+34 ..."
                  />

                  <SelectField
  label="City"
  icon={<MapPin className="h-4 w-4" />}
  value={client.city}
  onChange={(v) =>
    setClient((prev) => ({
      ...prev,
      city: v,
      area: "",
      customCity: v === "My city is not listed" ? prev.customCity : "",
    }))
  }
  options={CITY_OPTIONS}
  placeholder="Choose city"
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
      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-yellow-400"
    />

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
    onChange={(v) => setClient((prev) => ({ ...prev, area: v }))}
    options={selectedCityAreas}
    placeholder={
      client.city === "Valencia"
        ? "Choose area or district"
        : "Choose area or neighborhood"
    }
  />
)}

{!isCustomCity && !hasAreaOptions && (
  <Field
    label="Area / neighborhood"
    icon={<MapPin className="h-4 w-4" />}
    value={client.area}
    onChange={(v) => setClient((prev) => ({ ...prev, area: v }))}
    placeholder="Write area, neighborhood or urbanization"
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
      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-yellow-400"
    />

    <p className="mt-3 text-xs leading-6 text-gray-500">
      We’ll contact you to confirm travel time, availability and access to your location.
    </p>
  </div>
)}

<Field
  label="House address"
  icon={<Home className="h-4 w-4" />}
  value={client.houseAddress}
  onChange={(v) =>
    setClient((prev) => ({ ...prev, houseAddress: v }))
  }
  placeholder="Street and building number"
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
      value={client.preferredDate}
      onChange={(e) =>
        setClient((prev) => ({ ...prev, preferredDate: e.target.value }))
      }
className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-yellow-400 appearance-none"/>
  </div>

  {/* TIME */}
  <div>
  <p className="mb-2 text-xs font-semibold text-gray-500">Preferred time</p>
  <select
    value={client.preferredTime}
    onChange={(e) =>
      setClient((prev) => ({ ...prev, preferredTime: e.target.value }))
    }
className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-yellow-400 appearance-none" >
    <option value="">Choose preferred time</option>
    {TIME_OPTIONS.map((time) => (
      <option key={time} value={time}>
        {time}
      </option>
    ))}
  </select>
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
                      placeholder="Add any details about the job, wall type, photos, timing or special request..."
                      className="min-h-[150px] w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-yellow-400"
                    />
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <section className="sticky top-24 rounded-3xl border border-yellow-400 bg-white p-6 shadow-2xl sm:p-8">
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

                <div className="mt-6 rounded-2xl border border-yellow-400 bg-white p-5 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-600">Estimated total</span>
                    <span className="text-2xl font-extrabold text-black">€{estimatedTotal}</span>
                  </div>
                  <p className="mt-3 text-xs leading-6 text-gray-500">
                    Final price depends on wall type, access, materials, hidden conditions and exact job scope.
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 text-sm font-extrabold text-black shadow-lg transition hover:scale-[1.02]"
                >
                  Next step: send request
                  <ArrowRight className="h-4 w-4" />
                </button>

                
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MiniStat({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-extrabold text-black">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-gray-600">{text}</p>
    </div>
  );
}

function Field({
  label,
  icon,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
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
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-yellow-400"
      />
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
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
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
    className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 pr-12 text-sm text-black outline-none transition focus:border-yellow-400"
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
    </div>
  );
}