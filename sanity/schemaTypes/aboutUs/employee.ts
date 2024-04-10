import { defineField, defineType } from "sanity";

export default defineType({
  name: "employee",
  title: "Employé",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Nom et prénom",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Rôle",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Adresse courriel",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
    }),
  ],
});
