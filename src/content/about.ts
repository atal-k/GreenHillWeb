import type { HighlightStat, IconRef } from "@/types/content";

/**
 * Structural data only — all display copy lives in messages/{locale}.json
 * under matching `about.*` keys. Icon values are lucide-react component
 * names, resolved at render time via a local icon map in each component.
 */

export const storyHighlights: HighlightStat[] = [
  { id: "incorporated", value: "2017", icon: "FileCheck2" },
  { id: "regionalFocus", value: "NCR", icon: "MapPin" },
  { id: "inHouseStaff", value: "100%", icon: "Users" },
];

export const coreValues: IconRef[] = [
  { id: "integrity", icon: "ShieldCheck" },
  { id: "discipline", icon: "ListChecks" },
  { id: "accountability", icon: "ClipboardCheck" },
  { id: "responsiveness", icon: "Siren" },
  { id: "compliance", icon: "ScrollText" },
  { id: "partnership", icon: "Handshake" },
];

export const differentiators: IconRef[] = [
  { id: "verifiedTrained", icon: "UserCheck" },
  { id: "independentAudits", icon: "SearchCheck" },
  { id: "opsDesk", icon: "Headset" },
  { id: "statutoryCompliance", icon: "FileCheck2" },
];

export const clientBenefits: IconRef[] = [
  { id: "zeroLegalLiability", icon: "Scale" },
  { id: "singlePointContact", icon: "IdCard" },
  { id: "predictableCosts", icon: "Receipt" },
];

export const sectorsServed: IconRef[] = [
  { id: "corporateIt", icon: "Building2" },
  { id: "realEstate", icon: "Building" },
  { id: "hospitality", icon: "BedDouble" },
  { id: "healthcare", icon: "HeartPulse" },
  { id: "education", icon: "GraduationCap" },
  { id: "residential", icon: "Home" },
  { id: "retail", icon: "ShoppingBag" },
  { id: "banking", icon: "Landmark" },
  { id: "industrial", icon: "Factory" },
  { id: "warehousing", icon: "Warehouse" },
  { id: "events", icon: "PartyPopper" },
];

export const complianceDetails: IconRef[] = [
  { id: "companiesAct", icon: "FileText" },
  { id: "gst", icon: "Receipt" },
  { id: "esic", icon: "HeartHandshake" },
  { id: "epfo", icon: "Wallet" },
  { id: "labourShops", icon: "ScrollText" },
  { id: "psara", icon: "ShieldCheck" },
  { id: "policeVerified", icon: "BadgeCheck" },
  { id: "insurance", icon: "Umbrella" },
  { id: "zeroClientLiability", icon: "Scale" },
];
