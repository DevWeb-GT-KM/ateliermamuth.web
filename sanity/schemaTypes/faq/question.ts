import { defineField, defineType } from "sanity";

export default defineType({
  name: "question",
  title: "Question",
  type: "object",
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
