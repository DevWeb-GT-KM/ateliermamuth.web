import { defineField, defineType } from "sanity";

export default defineType({
  name: "publication",
  title: "Parution",
  type: "object",
  fields: [
    defineField({
      name: "mediaName",
      title: "Nom du média",
      type: "string",
    }),
    defineField({
      name: "publicationDate",
      title: "Date de parution",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Lien vers la parution",
      type: "string",
    }),
  ],
});
