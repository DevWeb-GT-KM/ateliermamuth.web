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
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "pronounLabel",
      title: "Pronom étiquette",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "nameLabel",
      title: "Nom étiquette",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "contactInformationTitle",
      title: "Informations de contact titre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "emailLabel",
      title: "Courriel étiquette",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "projectAddressLabel",
      title: "Adresse du projet étiquette",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "phoneNumberLabel",
      title: "Numéro de téléphone étiquette",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "projectTypeTitle",
      title: "Type de projet titre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "projectNatureSubtitle",
      title: "Nature du projet sous-titre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "projectTypeSubtitle",
      title: "Type de projet sous-titre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "budgetTitle",
      title: "Budget titre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "deadlineAvailabilityTitle",
      title: "Délai et disponibilité titre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "deadlineLabel",
      title: "Délai étiquette",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "availabilityLabel",
      title: "Disponibilité étiquette",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "moreDetailsTitle",
      title: "Plus de d'étails titre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "moreDetailsLabel",
      title: "Plus de d'étails étiquette",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "referralTitle",
      title: "Référencement titre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "referralOptions",
      title: "Options de référencement",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "referralOtherLabel",
      title: "Autre - étiquette",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "confirmationMessage",
      title: "message de confirmation",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "previousButton",
      title: "Bouton précédent",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "nextButton",
      title: "Bouton suivant",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "submitButton",
      title: "Bouton envoyer",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "backHomeButton",
      title: "Bouton retourner à l'accueil",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "errorRequired",
      title: "Erreur - champ obligatoire",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "errorEmail",
      title: "Erreur - courriel invalide",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "errorPhoneNumber",
      title: "Erreur - numéro de téléphone invalide",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "errorSubmitForm",
      title: "Erreur - envoie du formulaire",
      type: "string",
      validation: (Rule: any) => Rule.required(),
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
