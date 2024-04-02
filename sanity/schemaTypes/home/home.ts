import { defineField, defineType } from "sanity";
import project from "../project/project";
import aboutUs from "../aboutUs/aboutUs";
import services from "../service/services";
import values from "./values";
import { CircleIcon } from "@sanity/icons";
import blog from "../blog/blog";
import projects from "../project/projects";

export default defineType({
  name: "home",
  title: "Accueil",
  type: "document",
  icon: CircleIcon,
  fields: [
    defineField({
      name: "caroussel",
      title: "Caroussel",
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
  ],
});
