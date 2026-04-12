import { defineField, defineType } from "sanity";
import { AiOutlineStar } from "react-icons/ai";
import { LANGUAGE_FIELD } from "../constants";

export default defineType({
  name: "reviews",
  title: "Bloc avis",
  type: "document",
  icon: AiOutlineStar,
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Titre de la section",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "reviews",
      title: "Avis",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Nom",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            }),
            defineField({
              name: "comment",
              title: "Commentaire",
              type: "text",
              validation: (Rule: any) => Rule.required(),
            }),
            defineField({
              name: "score",
              title: "Score",
              type: "number",
              options: {
                list: [
                  { title: "1", value: 1 },
                  { title: "1.5", value: 1.5 },
                  { title: "2", value: 2 },
                  { title: "2.5", value: 2.5 },
                  { title: "3", value: 3 },
                  { title: "3.5", value: 3.5 },
                  { title: "4", value: 4 },
                  { title: "4.5", value: 4.5 },
                  { title: "5", value: 5 },
                ],
                layout: "dropdown",
              },
              validation: (Rule: any) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "score",
            },
            prepare({ title, subtitle }: { title: string; subtitle: number }) {
              const full = Math.floor(subtitle ?? 0);
              const half = (subtitle ?? 0) % 1 !== 0 ? "½" : "";
              return {
                title,
                subtitle: "★".repeat(full) + half,
              };
            },
          },
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
    prepare(selection: any) {
      const { language } = selection;
      return {
        ...selection,
        subtitle: language?.toUpperCase(),
      };
    },
  },
});
