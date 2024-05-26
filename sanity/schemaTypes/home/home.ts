import { defineField, defineType } from "sanity";
import project from "../project/project";
import aboutUs from "../aboutUs/aboutUs";
import services from "../service/services";
import values from "./values";
import { CiHome } from "react-icons/ci";
import blog from "../blog/blog";
import projects from "../project/projects";
import { LANGUAGE_FIELD } from "../constants";

export default defineType({
  name: "home",
  title: "Page accueil",
  type: "document",
  icon: CiHome,
  fields: [
    defineField({
      name: "carousel",
      title: "Carrousel",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: project.name }],
        },
      ],
    }),
    defineField({
      name: "aboutUs",
      title: "Atelier",
      type: "reference",
      to: [{ type: aboutUs.name }],
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "reference",
      to: [{ type: services.name }],
    }),
    defineField({
      name: "values",
      title: "Nos valeurs",
      type: "reference",
      to: [{ type: values.name }],
    }),
    defineField({
      name: "projects",
      title: "Projets",
      type: "reference",
      to: [{ type: projects.name }],
    }),
    defineField({
      name: "blog",
      title: "Rubrique",
      type: "reference",
      to: [{ type: blog.name }],
    }),
    defineField(LANGUAGE_FIELD),
  ],
  preview: {
    select: {
      language: LANGUAGE_FIELD.name,
    },
    prepare(selection) {
      const { language } = selection;
      return {
        ...selection,
        title: `Page accueil ${language.toUpperCase()}`,
        subtitle: language.toUpperCase(),
      };
    },
  },
});
