import { defineField, defineType } from "sanity";
import { AiOutlineBlock } from "react-icons/ai";
import { LANGUAGE_FIELD } from "../constants";

export default defineType({
  name: "values",
  title: "Bloc valeurs",
  type: "document",
  icon: AiOutlineBlock,
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
    defineField(LANGUAGE_FIELD),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      language: LANGUAGE_FIELD.name,
    },
    prepare(selection) {
      const { language } = selection;
      return {
        ...selection,
        subtitle: language.toUpperCase(),
      };
    },
  },
});
