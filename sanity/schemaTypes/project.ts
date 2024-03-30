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
    defineField({
      // should match 'languageField' plugin configuration setting, if customized
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      name: "name",
      language: "language",
    },
    prepare(selection) {
      const { name, language } = selection;
      return { ...selection, title: name, subtitle: language.toUpperCase() }; // Adjusted to match the expected structure
    },
  },
});
