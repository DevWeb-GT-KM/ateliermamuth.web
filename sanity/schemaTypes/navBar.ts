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
      name: "projectsLink",
      title: "Lien vers projets",
      type: "string",
    }),
    defineField({
      name: "aboutUsLink",
      title: "Lien vers atelier",
      type: "string",
    }),
    defineField({
      name: "blogLink",
      title: "Lien vers rubrique",
      type: "string",
    }),
    defineField({
      name: "servicesLink",
      title: "Lien vers services",
      type: "string",
    }),
    defineField({
      name: "contactUs",
      title: "Nous contacter",
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
        title: `Barre de navigation ${language.toUpperCase()}`,
        subtitle: language.toUpperCase(),
      };
    },
  },
});
