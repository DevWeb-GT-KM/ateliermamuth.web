import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projet",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom du projet",
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
  ],
  preview: {
    select: {
      title: "title",
      name: "name",
    },
    prepare(selection) {
      const { name } = selection;
      return { ...selection, title: name }; // Adjusted to match the expected structure
    },
  },
});
