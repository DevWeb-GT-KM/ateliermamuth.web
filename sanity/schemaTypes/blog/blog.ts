import { defineField, defineType } from "sanity";
import blog from "./article";
import { CircleIcon } from "@sanity/icons";

export default defineType({
  name: "blog",
  title: "Rubrique",
  type: "document",
  icon: CircleIcon,
  fields: [
    defineField({
      name: "pageTitle",
      title: "Titre de la page",
      type: "string",
    }),
    defineField({
      name: "articles",
      title: "Articles",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: blog.name }],
        },
      ],
    }),
  ],
});
