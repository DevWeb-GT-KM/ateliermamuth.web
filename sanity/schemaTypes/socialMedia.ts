import { defineField, defineType } from "sanity";

export default defineType({
  name: "socialMedia",
  title: "Média social",
  type: "object",
  fields: [
    defineField({
      name: "mediaName",
      title: "Nom du médias",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Lien",
      type: "text",
    }),
  ],
});
