import { defineField, defineType } from "sanity";
import { DotIcon } from "@sanity/icons";

export default defineType({
  name: "values",
  title: "Valeurs",
  type: "document",
  icon: DotIcon,
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Titre de la section",
      type: "string",
    }),
    defineField({
      name: "valuesText",
      title: "Nos valeurs en texte",
      type: "text",
    }),
    defineField({
      name: "valuesWords",
      title: "Nos valeurs en mots",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
  ],
});
