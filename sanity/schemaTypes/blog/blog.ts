import { defineField, defineType } from "sanity";
import blog from "./article";
import { MdOutlineFormatListNumberedRtl } from "react-icons/md";
import { LANGUAGE_FIELD, PAGE_METADATA_FIELD } from "../constants";

export default defineType({
  name: "blog",
  title: "Page des articles",
  type: "document",
  icon: MdOutlineFormatListNumberedRtl,
  fields: [
    defineField(PAGE_METADATA_FIELD()),
    defineField({
      name: "pageTitle",
      title: "Titre de la page",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "articles",
      title: "Articles",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: blog.name }],
        },
      ],
      validation: (Rule: any) => Rule.required(),
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
