import { defineField, defineType } from "sanity";
import step from "./step";
import { DotIcon } from "@sanity/icons";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: DotIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nom du service",
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
      name: "stepsTitle",
      title: "Titre des étapes",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
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
      name: "steps",
      title: "Étapes",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: step.name }],
        },
      ],
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
    }),
  ],
});
