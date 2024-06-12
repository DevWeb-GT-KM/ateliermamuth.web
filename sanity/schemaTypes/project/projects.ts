import { defineField, defineType } from "sanity";
import project from "./project";
import { MdOutlineFormatListNumberedRtl } from "react-icons/md";
import { LANGUAGE_FIELD, PAGE_METADATA_FIELD } from "../constants";

export default defineType({
  name: "projects",
  title: "Page des projets",
  type: "document",
  icon: MdOutlineFormatListNumberedRtl,
  fields: [
    defineField(PAGE_METADATA_FIELD()),
    defineField({
      name: "pageTitle",
      title: "Titre de la page",
      type: "string",
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "archiveSectionTitle",
      title: "Titre de la section archives",
      type: "string",
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
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
