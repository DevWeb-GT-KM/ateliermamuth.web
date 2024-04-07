import { defineField, defineType } from "sanity";
import { TbLayoutNavbarCollapseFilled } from "react-icons/tb";
import aboutUs from "./aboutUs/aboutUs";
import services from "./service/services";
import blog from "./blog/blog";
import projects from "./project/projects";
import { LANGUAGE_FIELD } from "./constants";

export default defineType({
  name: "navBar",
  title: "Barre de navigation",
  type: "document",
  icon: TbLayoutNavbarCollapseFilled,
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
      name: "mamuthLogo",
      title: "Logo Mamuth",
      type: "image",
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
        title: `Barre de navigation ${language.toUpperCase()}`,
        subtitle: language.toUpperCase(),
      };
    },
  },
});
