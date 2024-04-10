import { defineField, defineType } from "sanity";
import { IoIosPeople } from "react-icons/io";
import { LANGUAGE_FIELD } from "../constants";

export default defineType({
  name: "contact",
  title: "Page contact",
  type: "document",
  icon: IoIosPeople,
  fields: [
    defineField({
      name: "pageTitle",
      title: "Titre de la page",
      type: "string",
    }),
    defineField({
      name: "addressLabel",
      title: "Adresse étiquette",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Adresse",
      type: "string",
    }),
    defineField({
      name: "telephoneLabel",
      title: "Téléphone étiquette",
      type: "string",
    }),
    defineField({
      name: "telephone",
      title: "Téléphone",
      type: "string",
    }),
    defineField({
      name: "faq",
      title: "Faq",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
    }),
    defineField(LANGUAGE_FIELD),
  ],
  preview: {
    select: {
      title: "pageTitle",
      language: LANGUAGE_FIELD.name,
    },
    prepare(selection) {
      const { language } = selection;
      return {
        ...selection,
        subtitle: language.toUpperCase(),
      };
    },
  },
});
