import type { ServiceCategoryDef } from "@/types/content";

/**
 * Structural data only — display copy lives in messages/{locale}.json under
 * `services.categories.{id}` and `services.categories.{id}.items.{itemId}`.
 * `icon` values are lucide-react component names, resolved at render time.
 */
export const serviceCategories: ServiceCategoryDef[] = [
  {
    id: "security",
    icon: "ShieldCheck",
    image: "/images/services/security-guard/cover.webp",
    items: [
      { id: "corporate", icon: "Building2" },
      { id: "industrial", icon: "Factory" },
      { id: "residential", icon: "Home" },
      { id: "hotel", icon: "BedDouble" },
      { id: "hospital", icon: "HeartPulse" },
      { id: "school", icon: "GraduationCap" },
    ],
  },
  {
    id: "specialist",
    icon: "ShieldAlert",
    image: "/images/services/specialist-security/cover.webp",
    items: [
      { id: "qrt", icon: "Siren" },
      { id: "night", icon: "Moon" },
      { id: "event", icon: "PartyPopper" },
      { id: "bouncer", icon: "UserCheck" },
      { id: "vip", icon: "Crown" },
    ],
  },
  {
    id: "housekeeping",
    icon: "Sparkles",
    image: "/images/services/housekeeping/cover.webp",
    items: [
      { id: "frontDesk", icon: "ConciergeBell" },
      { id: "parking", icon: "SquareParking" },
      { id: "technical", icon: "Wrench" },
    ],
  },
];
