import { defineField, defineType } from "sanity";
import { CircleIcon } from "@sanity/icons";
import aboutUs from "./aboutUs/aboutUs";
import services from "./service/services";
import blog from "./blog/blog";
import projects from "./project/projects";

export default defineType({
  name: "navBar",
  title: "Barre de navigation",
  type: "document",
  icon: CircleIcon,
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
  ],
});
