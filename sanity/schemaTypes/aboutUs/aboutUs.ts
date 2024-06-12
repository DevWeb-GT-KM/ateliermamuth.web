import { defineField, defineType } from "sanity";
import { FaShop } from "react-icons/fa6";
import publications from "./publications";
import { LANGUAGE_FIELD, IMAGE_FIELD, PAGE_METADATA_FIELD } from "../constants";

export default defineType({
  name: "aboutUs",
  title: "Page atelier",
  type: "document",
  icon: FaShop,
  fields: [
    defineField(PAGE_METADATA_FIELD()),
    defineField({
      name: "pageTitle",
      title: "Titre de la page",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Description courte",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField(IMAGE_FIELD()),
    defineField({
      name: "employees",
      title: "Employés",
      type: "array",
      of: [
        {
          type: "employee",
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "publications",
      title: "Parutions",
      type: "reference",
      to: [{ type: publications.name }],
      validation: (Rule: any) => Rule.required(),
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
