import type { Brand } from "@/types/content";

const phoneDigits = "+919718741155";
const addressFull =
  "5/617, S-1, Sector-5 Vaishali, I.E. Sahibabad, Ghaziabad, UP – 201010";

export const brand: Brand = {
  legalName: "Green Hill Facilities Pvt Ltd",
  shortName: "Green Hill",
  tagline: "Protecting What Matters Most – People, Property & Reputation",
  foundedYear: 2017,
  cin: "U55209DL2017PTC313459",
  industry: "Security, Manpower & Facility Management Services",
  phone: {
    display: "+91-9718741155",
    href: `tel:${phoneDigits}`,
  },
  email: {
    display: "admin.greenhill@gmail.com",
    href: "mailto:admin.greenhill@gmail.com",
  },
  address: {
    line1: "5/617, S-1, Sector-5 Vaishali, I.E. Sahibabad",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    pincode: "201010",
    full: addressFull,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressFull)}`,
  },
  serviceAreas: ["Ghaziabad", "Noida", "Greater Noida", "Delhi", "Faridabad"],
  // TODO: no social profiles provided yet — populate once confirmed by client.
  social: {},
  stats: [
    { key: "years", value: "9+" },
    { key: "personnel", value: "500+" },
    { key: "clientGroups", value: "10+" },
    { key: "response", value: "24x7" },
    { key: "sectors", value: "11" },
    { key: "cities", value: "5" },
  ],
  compliance: [
    "PSARA Registered",
    "GST Registered",
    "EPFO / PF Compliant",
    "ESIC Registered",
    "Labour & Shops Licensed",
    "Insurance Covered",
  ],
  logo: {
    light: "/images/logo/logo-light.svg",
    dark: "/images/logo/logo-dark.svg",
    icon: "/images/logo/icon.svg",
  },
};

// TODO: owner/management details not available in source data — omit
// leadership section on About page until confirmed, per plan.
