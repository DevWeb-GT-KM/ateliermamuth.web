import { defineField, defineType } from "sanity";
import { DotIcon } from "@sanity/icons";

export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  icon: DotIcon,
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "URL",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "publicationDate",
      title: "Date de publication",
      type: "date",
    }),
    defineField({
      name: "author",
      title: "Auteur",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
    }),
    defineField({
      name: "text",
      title: "Texte",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "shareButton",
      title: "Boutton partager",
      type: "string",
    }),
    defineField({
      name: "previousButton",
      title: "Boutton précédent",
      type: "string",
    }),
    defineField({
      name: "nextButton",
      title: "Boutton suivant",
      type: "string",
    }),
  ],
});
