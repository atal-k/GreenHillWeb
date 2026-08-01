export interface Brand {
  legalName: string;
  shortName: string;
  tagline: string;
  foundedYear: number;
  cin: string;
  industry: string;
  phone: {
    display: string;
    href: string;
  };
  email: {
    display: string;
    href: string;
  };
  address: {
    line1: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
    mapUrl: string;
  };
  serviceAreas: string[];
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  stats: StatItem[];
  compliance: string[];
  logo: {
    light: string;
    dark: string;
    icon: string;
  };
}

export interface StatItem {
  key: "years" | "personnel" | "clientGroups" | "response" | "sectors" | "cities";
  value: string;
}

export interface ClientRef {
  id: string;
  name: string;
  logo: string;
}

export type ServiceCategoryKey = "security" | "specialist" | "housekeeping";

export interface ServiceItemDef {
  id: string;
  icon: string;
}

export interface ServiceCategoryDef {
  id: ServiceCategoryKey;
  icon: string;
  image: string;
  items: ServiceItemDef[];
}

export type GalleryCategoryKey =
  | "deployments"
  | "training"
  | "events"
  | "clientSites";

export interface GalleryImageDef {
  id: string;
  category: GalleryCategoryKey;
  src: string;
  altKey: string;
}
