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
      name: "projectTypes",
      title: "Types de projet",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
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
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),
    defineField({
      name: "credits",
      title: "Crédits",
      type: "array",
      of: [
        {
          type: "credit",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      language: "language",
    },
  },
});
