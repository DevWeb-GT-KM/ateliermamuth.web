import { defineField, defineType } from "sanity";
import project from "../project/project";
import aboutUs from "../aboutUs/aboutUs";
import services from "../service/services";
import values from "./values";
import reviews from "./reviews";
import { CiHome } from "react-icons/ci";
import blog from "../blog/blog";
import projects from "../project/projects";
import { LANGUAGE_FIELD, PAGE_METADATA_FIELD } from "../constants";

export default defineType({
  name: "home",
  title: "Page accueil",
  type: "document",
  icon: CiHome,
  fields: [
    defineField(PAGE_METADATA_FIELD()),
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
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "aboutUs",
      title: "Atelier",
      type: "reference",
      to: [{ type: aboutUs.name }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "reference",
      to: [{ type: services.name }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "values",
      title: "Nos valeurs",
      type: "reference",
      to: [{ type: values.name }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "projects",
      title: "Projets",
      type: "reference",
      to: [{ type: projects.name }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "blog",
      title: "Rubrique",
      type: "reference",
      to: [{ type: blog.name }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "reviews",
      title: "Avis",
      type: "reference",
      to: [{ type: reviews.name }],
      validation: (Rule: any) => Rule.required(),
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
