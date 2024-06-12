import { defineField, defineType } from "sanity";
import { IMAGE_FIELD } from "../constants";

export default defineType({
  name: "employee",
  title: "Employé",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Nom et prénom",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Rôle",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Adresse courriel",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField(IMAGE_FIELD()),
  ],
});
