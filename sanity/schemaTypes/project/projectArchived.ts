import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectArchived",
  title: "Projet archivé",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
    }),
    defineField({
      name: "completionYear",
      title: "Année de réalisation",
      type: "string",
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
      name: "location",
      title: "Endroit de réalisation",
      type: "string",
    }),
    defineField({
      name: "images",
      title: "Photos",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});
