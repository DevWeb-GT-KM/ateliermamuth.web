import { defineField, defineType } from "sanity";
import { MdOutlineQuestionMark } from "react-icons/md";
import { LANGUAGE_FIELD } from "../constants";

export default defineType({
  name: "faq",
  title: "Page FAQ",
  type: "document",
  icon: MdOutlineQuestionMark,
  fields: [
    defineField({
      name: "pageTitle",
      title: "Titre de la page",
      type: "string",
    }),
    defineField({
      name: "questions",
      title: "Questions",
      type: "array",
      of: [
        {
          type: "question",
        },
      ],
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
