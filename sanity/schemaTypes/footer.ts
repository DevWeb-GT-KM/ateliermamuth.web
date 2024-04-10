import { defineField, defineType } from "sanity";
import { TbLayoutNavbarExpandFilled } from "react-icons/tb";
import aboutUs from "./aboutUs/aboutUs";
import services from "./service/services";
import blog from "./blog/blog";
import projects from "./project/projects";
import faq from "./faq/faq";
import { LANGUAGE_FIELD } from "./constants";

export default defineType({
  name: "footer",
  title: "Pied de page",
  type: "document",
  icon: TbLayoutNavbarExpandFilled,
  fields: [
    defineField({
      name: "projects",
      title: "Projets",
      type: "reference",
      to: [{ type: projects.name }],
    }),
    defineField({
      name: "aboutUs",
      title: "Atelier",
      type: "reference",
      to: [{ type: aboutUs.name }],
    }),
    defineField({
      name: "blog",
      title: "Rubrique",
      type: "reference",
      to: [{ type: blog.name }],
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "reference",
      to: [{ type: services.name }],
    }),
    defineField({
      name: "faq",
      title: "Faq",
      type: "reference",
      to: [{ type: faq.name }],
    }),
    defineField({
      name: "termsAndConditions",
      title: "Termes et conditions",
      type: "string",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "string",
    }),
    defineField({
      name: "facebook",
      title: "Facebook",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Adresse courriel",
      type: "string",
    }),
    defineField({
      name: "mamuthLogo",
      title: "Logo Mamuth",
      type: "image",
    }),
    defineField({
      name: "apdiqLogo",
      title: "Logo Apdiq",
      type: "image",
    }),
    defineField({
      name: "copyright",
      title: "Droits d'auteur",
      type: "string",
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
        title: `Pied de page ${language.toUpperCase()}`,
        subtitle: language.toUpperCase(),
      };
    },
  },
});
