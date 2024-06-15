import { defineField, defineType } from "sanity";

export default defineType({
  name: "credit",
  title: "Crédit",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Étiquette",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "value",
      title: "Valeur",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
