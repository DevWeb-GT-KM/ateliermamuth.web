import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";
import { CAROUSEL_FIELD, LANGUAGE_FIELD } from "../constants";

export default defineType({
  name: "blockB",
  title: "Bloc B: Texte + Bloc format paysage 100% largeur",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nom du bloc",
      type: "string",
      initialValue: "Bloc B",
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
    }),
    defineField({
      name: "block",
      title: "Bloc d'images",
      type: "object",
      fields: [
        {
          ...CAROUSEL_FIELD(),
        },
      ],
    }),
    defineField(LANGUAGE_FIELD),
  ],
});
