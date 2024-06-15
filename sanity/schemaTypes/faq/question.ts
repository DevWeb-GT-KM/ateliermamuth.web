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
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Réponse",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
