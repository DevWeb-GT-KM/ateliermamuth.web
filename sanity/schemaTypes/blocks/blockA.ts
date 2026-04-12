import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";
import { CAROUSEL_FIELD, LANGUAGE_FIELD } from "../constants";

export default defineType({
  name: "blockA",
  title:
    "Bloc A: Texte + Bloc de gauche = format paysage 75% largeur + Bloc de droite = format portrait 25% largeur.",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nom du bloc",
      type: "string",
      initialValue: "Bloc A",
    }),
    defineField({
      name: "text",
      title: "Texte",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "leftBlock",
      title: "Bloc de gauche",
      type: "object",
      fields: [
        {
          ...CAROUSEL_FIELD(),
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "rightBlock",
      title: "Bloc de droite",
      type: "object",
      fields: [
        {
          ...CAROUSEL_FIELD(),
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "reverse",
      title: "Inverser (75% à droite, 25% à gauche)",
      type: "boolean",
      initialValue: false,
    }),
    defineField(LANGUAGE_FIELD),
  ],
});
