import type { TestimonialRef } from "@/types/content";

/**
 * Org names are proper nouns — locale-agnostic, sourced verbatim from
 * company records. Quote text, attributed role and sector all need
 * translation and live in messages/{locale}.json under
 * `home.testimonials.items.{id}`.
 */
export const testimonials: TestimonialRef[] = [
  { id: "windsorParadise", orgName: "Windsor Paradise" },
  { id: "guptaHotelsGroup", orgName: "Gupta Hotels Group" },
  { id: "chronicleGroup", orgName: "Chronicle Group" },
  { id: "lotusShrishtiRwa", orgName: "Lotus Shrishti RWA" },
];
