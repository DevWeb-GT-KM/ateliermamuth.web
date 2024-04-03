import { defineField, defineType } from "sanity";
import service from "./service";
import { CircleIcon } from "@sanity/icons";
import { LANGUAGE_FIELD } from "../constants";

export default defineType({
  name: "services",
  title: "Services",
  type: "document",
  icon: CircleIcon,
  fields: [
    defineField({
      name: "pageTitle",
      title: "Titre de la page",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: service.name }],
        },
      ],
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
      return { ...selection, subtitle: language.toUpperCase() };
    },
  },
});
