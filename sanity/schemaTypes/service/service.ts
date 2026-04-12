import { defineField, defineType } from "sanity";
import { DotIcon } from "@sanity/icons";
import {
  LANGUAGE_FIELD,
  IMAGE_FIELD,
  PAGE_PARTIAL_METADATA_FIELD,
} from "../constants";

export default defineType({
  name: "service",
  title: "Page d'un service",
  type: "document",
  icon: DotIcon,
  fields: [
    defineField(PAGE_PARTIAL_METADATA_FIELD()),
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
          type: "step",
        },
      ],
    }),
    defineField({
      name: "projectsCta",
      title: "Appel à l'action — Projets",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Titre",
          type: "string",
        },
        {
          name: "buttonLabel",
          title: "Nom du bouton",
          type: "string",
        },
      ],
    }),
    defineField(IMAGE_FIELD()),
    defineField(LANGUAGE_FIELD),
  ],
  preview: {
    select: {
      title: "name",
      language: LANGUAGE_FIELD.name,
    },
    prepare(selection) {
      const { language } = selection;
      return { ...selection, subtitle: language.toUpperCase() };
    },
  },
});
