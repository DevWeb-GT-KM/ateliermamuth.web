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
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "valuesText",
      title: "Nos valeurs en texte",
      type: "text",
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
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
