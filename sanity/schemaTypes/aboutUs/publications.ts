import { defineField, defineType } from "sanity";
import { AiOutlineBlock } from "react-icons/ai";
import { LANGUAGE_FIELD } from "../constants";

export default defineType({
  name: "publications",
  title: "Bloc parutions",
  type: "document",
  icon: AiOutlineBlock,
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Titre de la section",
      type: "string",
    }),
    defineField({
      name: "publications",
      title: "Parutions",
      type: "array",
      of: [
        {
          type: "publication",
        },
      ],
    }),
    defineField(LANGUAGE_FIELD),
  ],
  preview: {
    select: {
      title: "sectionTitle",
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
