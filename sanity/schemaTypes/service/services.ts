import { defineField, defineType } from "sanity";
import service from "./service";
import { CircleIcon } from "@sanity/icons";

export default defineType({
  name: "services",
  title: "Services",
  type: "document",
  icon: CircleIcon,
  fields: [
    defineField({
      name: "pageTitle",
      title: "Titre de la page",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: service.name }],
        },
      ],
    }),
  ],
});
