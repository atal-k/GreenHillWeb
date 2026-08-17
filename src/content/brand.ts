import type { Brand, BranchAddress } from "@/types/content";

const phoneDigits = "+919718741155";

function branch(branch: Omit<BranchAddress, "full" | "mapUrl">): BranchAddress {
  const full = `${branch.line1}, ${branch.city}, ${branch.state} – ${branch.pincode}`;
  return {
    ...branch,
    full,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(full)}`,
  };
}

const branches: BranchAddress[] = [
  branch({
    id: "delhi",
    name: "Delhi Office",
    line1: "WZ-510A, UGF, Flat No-101, Palam Village, Palam",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110045",
    isPrimary: true,
  }),
  branch({
    id: "ghaziabad",
    name: "Ghaziabad Office",
    line1: "5/617, S-1, Sector-5, Vaishali",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    pincode: "201010",
  }),
  branch({
    id: "noida",
    name: "Noida Office",
    line1: "B-113, Ground Floor, Sector-2",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: "201301",
  }),
];

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
  branches,
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
