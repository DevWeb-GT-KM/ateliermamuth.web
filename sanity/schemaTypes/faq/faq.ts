import { defineField, defineType } from "sanity";
import { DotIcon } from "@sanity/icons";

export default defineType({
  name: "faq",
  title: "Faq",
  type: "document",
  icon: DotIcon,
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
    }),
    defineField({
      name: "answer",
      title: "Réponse",
      type: "text",
    }),
    defineField({
      name: "link",
      title: "Lien",
      type: "string",
    }),
  ],
});
