import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";
import { LANGUAGE_FIELD } from "../constants";

export default defineType({
  name: "blockD",
  title: "Bloc D: Texte seulement",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nom du bloc",
      type: "string",
      initialValue: "Bloc D",
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
    defineField(LANGUAGE_FIELD),
  ],
});
