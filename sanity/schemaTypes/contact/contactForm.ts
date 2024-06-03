import { defineField, defineType } from "sanity";
import { MdOutlineEmail } from "react-icons/md";
import { LANGUAGE_FIELD, PAGE_METADATA_FIELD } from "../constants";

export default defineType({
  name: "contactForm",
  title: "Page formulaire contact",
  type: "document",
  icon: MdOutlineEmail,
  fields: [
    defineField(PAGE_METADATA_FIELD()),
    defineField({
      name: "personalInformationTitle",
      title: "Informations personnelles titre",
      type: "string",
    }),
    defineField({
      name: "pronounLabel",
      title: "Pronom étiquette",
      type: "string",
    }),
    defineField({
      name: "nameLabel",
      title: "Nom étiquette",
      type: "string",
    }),
    defineField({
      name: "contactInformationTitle",
      title: "Informations de contact titre",
      type: "string",
    }),
    defineField({
      name: "emailLabel",
      title: "Courriel étiquette",
      type: "string",
    }),
    defineField({
      name: "phoneNumberLabel",
      title: "Numéro de téléphone étiquette",
      type: "string",
    }),
    defineField({
      name: "projectTypeTitle",
      title: "Type de projet titre",
      type: "string",
    }),
    defineField({
      name: "projectNatureSubtitle",
      title: "Nature du projet sous-titre",
      type: "string",
    }),
    defineField({
      name: "projectNatures",
      title: "Natures du projet",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "projectTypeSubtitle",
      title: "Type de projet sous-titre",
      type: "string",
    }),
    defineField({
      name: "projectTypes",
      title: "Types de projet",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "budgetTitle",
      title: "Budget titre",
      type: "string",
    }),
    defineField({
      name: "budgetRanges",
      title: "Fourchettes de budget",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "moreDetailsTitle",
      title: "Plus de d'étails titre",
      type: "string",
    }),
    defineField({
      name: "moreDetailsLabel",
      title: "Plus de d'étails étiquette",
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
      name: "submitButton",
      title: "Bouton envoyer",
      type: "string",
    }),
    defineField({
      name: "backHomeButton",
      title: "Bouton retourner à l'accueil",
      type: "string",
    }),
    defineField({
      name: "errorRequired",
      title: "Erreur - champ obligatoire",
      type: "string",
    }),
    defineField({
      name: "errorEmail",
      title: "Erreur - courriel invalide",
      type: "string",
    }),
    defineField({
      name: "errorPhoneNumber",
      title: "Erreur - numéro de téléphone invalide",
      type: "string",
    }),
    defineField({
      name: "errorSubmitForm",
      title: "Erreur - envoie du formulaire",
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
