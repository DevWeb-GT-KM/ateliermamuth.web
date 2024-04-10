import { defineField, defineType } from "sanity";
import { MdOutlineEmail } from "react-icons/md";
import service from "../service/service";
import { LANGUAGE_FIELD } from "../constants";

export default defineType({
  name: "contactForm",
  title: "Page formulaire contact",
  type: "document",
  icon: MdOutlineEmail,
  fields: [
    defineField({
      name: "nameLabel",
      title: "Nom étiquette",
      type: "string",
    }),
    defineField({
      name: "pronoun",
      title: "Pronom",
      type: "string",
    }),
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
    }),
    defineField({
      name: "contactLabel",
      title: "Contact étiquette",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Adresse courriel",
      type: "string",
    }),
    defineField({
      name: "phoneNumber",
      title: "Numéro de téléphone",
      type: "string",
    }),
    defineField({
      name: "projectTypeLabel",
      title: "Type de projet étiquette",
      type: "string",
    }),
    defineField({
      name: "projectsType",
      title: "Type de projet",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: service.name }],
        },
      ],
    }),
    defineField({
      name: "budgetRangeLabel",
      title: "Fourchette de budget étiquette",
      type: "string",
    }),
    defineField({
      name: "budgetRanges",
      title: "Fourchette de budget",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "moreDetailsLabel",
      title: "Plus de d'étails étiquette",
      type: "string",
    }),
    defineField({
      name: "moreDetails",
      title: "Plus de d'étails",
      type: "string",
    }),
    defineField({
      name: "confirmationMessage",
      title: "message de confirmation",
      type: "string",
    }),
    defineField({
      name: "previousButton",
      title: "Bouton précédent",
      type: "string",
    }),
    defineField({
      name: "nextButton",
      title: "Bouton suivant",
      type: "string",
    }),
    defineField({
      name: "sendButton",
      title: "Bouton envoyer",
      type: "string",
    }),
    defineField(LANGUAGE_FIELD),
  ],
  preview: {
    select: {
      language: LANGUAGE_FIELD.name,
    },
    prepare(selection) {
      const { language } = selection;
      return {
        ...selection,
        title: `Formulaire contact ${language.toUpperCase()}`,
        subtitle: language.toUpperCase(),
      };
    },
  },
});
