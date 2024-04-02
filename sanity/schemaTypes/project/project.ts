import { defineField, defineType } from "sanity";
import { DotIcon } from "@sanity/icons";

export default defineType({
  name: "project",
  title: "Projet",
  type: "document",
  icon: DotIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "URL",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "shortDescription",
      title: "Description courte",
      type: "text",
    }),
    defineField({
      name: "entrepreneurLabel",
      title: "Entrepreneur étiquette",
      type: "string",
    }),
    defineField({
      name: "entrepreneur",
      title: "Entrepreneur",
      type: "string",
    }),
    defineField({
      name: "cabinetMakerLabel",
      title: "Ébéniste étiquette",
      type: "string",
    }),
    defineField({
      name: "cabinetMaker",
      title: "Ébéniste",
      type: "string",
    }),
    defineField({
      name: "budgetLabel",
      title: "Budget étiquette",
      type: "string",
    }),
    defineField({
      name: "budget",
      title: "Budget",
      type: "string",
    }),
    defineField({
      name: "photographerLabel",
      title: "Photographe étiquette",
      type: "string",
    }),
    defineField({
      name: "photographer",
      title: "Photographe",
      type: "string",
    }),
    defineField({
      name: "architectLabel",
      title: "Architecte étiquette",
      type: "string",
    }),
    defineField({
      name: "architect",
      title: "Architecte",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
      language: "language",
    },
    prepare(selection) {
      const { language } = selection;
      return { ...selection, subtitle: language.toUpperCase() };
    },
  },
});
