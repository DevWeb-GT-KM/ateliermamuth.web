import { defineField, defineType } from "sanity";
import { TbLayoutNavbarExpandFilled } from "react-icons/tb";
import aboutUs from "./aboutUs/aboutUs";
import services from "./service/services";
import blog from "./blog/blog";
import projects from "./project/projects";
import faq from "./faq/faq";
import { LANGUAGE_FIELD } from "./constants";
import contact from "./contact/contact";

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
      name: "blog",
      title: "Rubrique",
      type: "reference",
      to: [{ type: blog.name }],
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
      name: "contact",
      title: "Nous contacter",
      type: "reference",
      to: [{ type: contact.name }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "cookies",
      title: "Cookies",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "faq",
      title: "Faq",
      type: "reference",
      to: [{ type: faq.name }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "socialMedias",
      title: "Médias sociaux",
      type: "array",
      of: [{ type: "socialMedia" }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Adresse courriel",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "apdiqLogo",
      title: "Logo Apdiq",
      type: "image",
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
        title: `Pied de page ${language.toUpperCase()}`,
        subtitle: language.toUpperCase(),
      };
    },
  },
});
