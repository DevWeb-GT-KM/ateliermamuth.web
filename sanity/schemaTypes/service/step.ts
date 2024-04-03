import { defineField, defineType } from "sanity";

export default defineType({
  name: "step",
  title: "Étape",
  type: "object",
  fields: [
    defineField({
      name: "index",
      title: "Index",
      type: "string",
    }),
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
