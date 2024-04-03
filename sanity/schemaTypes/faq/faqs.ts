import { defineField, defineType } from "sanity";
import { CircleIcon } from "@sanity/icons";

export default defineType({
  name: "faqs",
  title: "Faqs",
  type: "document",
  icon: CircleIcon,
  fields: [
    defineField({
      name: "pageTitle",
      title: "Titre de la page",
      type: "string",
    }),
    defineField({
      name: "questions",
      title: "Questions",
      type: "array",
      of: [
        {
          type: "faq",
        },
      ],
    }),
  ],
});
