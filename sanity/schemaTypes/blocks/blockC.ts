import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";
import { CAROUSEL_FIELD, LANGUAGE_FIELD } from "../constants";

export default defineType({
  name: "blockC",
  title: "Bloc C: Texte + 2 blocs format carrés",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nom du bloc",
      type: "string",
      initialValue: "Bloc C",
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
    defineField(LANGUAGE_FIELD),
  ],
});
