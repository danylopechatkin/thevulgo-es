import type { ValenciaGuide } from "./guides";

export const GUIDE_REVIEWED_AT = "2026-08-11";
export const GUIDE_REVIEWED_LABEL = "August 11, 2026";

const categoryDetails: Record<
  string,
  { readTime: string; localNote: string; quoteFactors: string[] }
> = {
  "TV & walls": {
    readTime: "5 min read",
    localNote:
      "For Valencia condos, include elevator, concierge and permitted-work-hour details with the wall and TV photos.",
    quoteFactors: [
      "TV model, size, VESA pattern and weight",
      "Wall surface, bracket type and cable plan",
      "Number of screens, soundbars or devices",
    ],
  },
  Furniture: {
    readTime: "5 min read",
    localNote:
      "For Valencia condo work, a product link, box count and building-access details make the request much easier to plan.",
    quoteFactors: [
      "Exact product model and number of boxes",
      "Quantity of items and required wall anchoring",
      "Room access, elevator booking and final placement",
    ],
  },
  "Fixtures & repairs": {
    readTime: "4 min read",
    localNote:
      "A wide image of the room plus a close image of the wall, hardware or damage gives the clearest Spanish estimate request.",
    quoteFactors: [
      "Product dimensions, weight and supplied hardware",
      "Wall or surface material and visible condition",
      "Quantity, access and any building restrictions",
    ],
  },
  Planning: {
    readTime: "4 min read",
    localNote:
      "Valencia and GTA access varies by building, so include your area, parking or loading notes and preferred appointment window.",
    quoteFactors: [
      "Wide and close photos with measurements",
      "A numbered task list and product links",
      "Spanish area, access and building rules",
    ],
  },
  "Smart home": {
    readTime: "5 min read",
    localNote:
      "For connected devices, include the exact product model, proposed location and any condo or landlord approval needed for mounting.",
    quoteFactors: [
      "Device model, instructions and mounting hardware",
      "Power method, surface and intended placement",
      "Number of devices and site-access conditions",
    ],
  },
  "Commercial setup": {
    readTime: "5 min read",
    localNote:
      "For Valencia small-business work, send a prioritised list and access hours so installation can be planned around operations.",
    quoteFactors: [
      "Task list, quantities and product information",
      "Access hours, loading and site contact details",
      "Wall conditions and any business-critical deadlines",
    ],
  },
};

const serviceSlugsByCategory: Record<string, string[]> = {
  "TV & walls": [
    "tv-mounting-toronto",
    "full-motion-tv-mount-installation-toronto",
    "soundbar-mounting-toronto",
  ],
  Furniture: [
    "furniture-assembly-toronto",
    "ikea-furniture-assembly-toronto",
    "wardrobe-assembly-toronto",
  ],
  "Fixtures & repairs": [
    "shelf-installation-toronto",
    "drywall-hole-repair-toronto",
    "doors-hardware-toronto",
  ],
  Planning: [
    "home-repairs-toronto",
    "move-in-setup-toronto",
    "small-commercial-handyman-toronto",
  ],
  "Smart home": [
    "smart-home-installation-toronto",
    "security-camera-mounting-toronto",
    "wifi-networking-toronto",
  ],
  "Commercial setup": [
    "small-commercial-handyman-toronto",
    "retail-display-installation-toronto",
    "office-furniture-assembly-toronto",
  ],
};

export function getGuideEditorial(guide: ValenciaGuide) {
  const fallback = categoryDetails.Planning;
  const detail = categoryDetails[guide.category] ?? fallback;
  return {
    ...detail,
    serviceSlugs: serviceSlugsByCategory[guide.category] ?? serviceSlugsByCategory.Planning,
  };
}
