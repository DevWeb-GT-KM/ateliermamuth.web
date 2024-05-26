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
