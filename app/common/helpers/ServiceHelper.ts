export const KNOWN_SERVICE_SLUGS = [
  "design-interieur-residentiel",
  "architecture-residentielle",
  "design-interieur-commercial",
];

export const getServiceType = (slug: string): string =>
  KNOWN_SERVICE_SLUGS.includes(slug) ? slug : "default";
