export const LANGUAGE_FIELD = {
  name: "language",
  type: "string",
  readOnly: true,
  hidden: true,
};

export const IMAGE_FIELD = (name?: string, title?: string) => {
  return {
    name: name ?? "img",
    title: title ?? "Image",
    type: "image",
    options: {
      hotspot: true,
    },
    fields: [
      {
        type: "text",
        name: "alt",
        title: "Texte alternatif",
      },
    ],
  };
};

export const CAROUSEL_FIELD = () => {
  return {
    name: "images",
    title: "Image(s)",
    description:
      "Lorsqu'il y a plus qu'une image dans la liste, ça devient un carrousel.",
    type: "array",
    of: [
      {
        type: "object",
        fields: [
          {
            ...IMAGE_FIELD(),
          },
        ],
      },
    ],
  };
};

export const PAGE_METADATA_FIELD = () => {
  return {
    name: "metadata",
    title: "Métadonnées",
    description: "Pour les résultats de recherches (SEO)",
    type: "object",
    fields: [
      {
        name: "metaTitle",
        title: "Méta titre",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "metaDescription",
        title: "Méta description",
        type: "text",
        validation: (Rule: any) => Rule.required(),
      },
    ],
    validation: (Rule: any) => Rule.required(),
  };
};

export const PAGE_PARTIAL_METADATA_FIELD = () => {
  return {
    name: "metadata",
    title: "Métadonnées",
    description: "Pour les résultats de recherches (SEO)",
    type: "object",
    fields: [
      {
        name: "metaDescription",
        title: "Méta description",
        type: "text",
        validation: (Rule: any) => Rule.required(),
      },
    ],
    validation: (Rule: any) => Rule.required(),
  };
};
