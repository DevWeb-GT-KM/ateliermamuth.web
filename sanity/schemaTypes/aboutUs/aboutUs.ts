import { defineField, defineType } from "sanity";
import { CircleIcon } from "@sanity/icons";
import publications from "./publications";
import { LANGUAGE_FIELD } from "../constants";

export default defineType({
  name: "aboutUs",
  title: "Atelier",
  type: "document",
  icon: CircleIcon,
  fields: [
    defineField({
      name: "pageTitle",
      title: "Titre de la page",
      type: "string",
    }),
    defineField({
      name: "shortDescription",
      title: "Description courte",
      type: "text",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
    }),
    defineField({
      name: "employees",
      title: "Employés",
      type: "array",
      of: [
        {
          type: "employee",
        },
      ],
    }),
    defineField({
      name: "publications",
      title: "Parutions",
      type: "reference",
      to: [{ type: publications.name }],
    }),
    defineField(LANGUAGE_FIELD),
  ],
  preview: {
    select: {
      title: "pageTitle",
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
