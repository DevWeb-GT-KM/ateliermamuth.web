import { defineField, defineType } from "sanity";
import project from "./project";
import { CircleIcon } from "@sanity/icons";
import { LANGUAGE_FIELD } from "../constants";

export default defineType({
  name: "projects",
  title: "Projets",
  type: "document",
  icon: CircleIcon,
  fields: [
    defineField({
      name: "pageTitle",
      title: "Titre de la page",
      type: "string",
    }),
    defineField({
      name: "projects",
      title: "Projets",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: project.name }],
        },
      ],
    }),
    defineField({
      name: "archiveSectionTitle",
      title: "Titre de la section archives",
      type: "string",
    }),
    defineField({
      name: "projectsArchived",
      title: "Projets archivés",
      type: "array",
      of: [
        {
          type: "projectArchived",
        },
      ],
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
      return { ...selection, subtitle: language.toUpperCase() };
    },
  },
});
