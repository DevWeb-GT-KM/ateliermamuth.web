import { defineField, defineType } from "sanity";
import { IMAGE_FIELD } from "../constants";

export default defineType({
  name: "projectArchived",
  title: "Projet archivé",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "completionYear",
      title: "Année de réalisation",
      type: "string",
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Endroit de réalisation",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Photos",
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
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
