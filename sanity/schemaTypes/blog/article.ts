import { defineField, defineType } from "sanity";
import { DotIcon } from "@sanity/icons";

import blockA from "../blocks/blockA";
import blockB from "../blocks/blockB";
import blockC from "../blocks/blockC";
import blockD from "../blocks/blockD";
import {
  IMAGE_FIELD,
  LANGUAGE_FIELD,
  PAGE_PARTIAL_METADATA_FIELD,
} from "../constants";

export default defineType({
  name: "article",
  title: "Page d'un article",
  type: "document",
  icon: DotIcon,
  fields: [
    defineField(PAGE_PARTIAL_METADATA_FIELD()),
    defineField({
      name: "slug",
      title: "URL",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField(IMAGE_FIELD("mainImage", "Image")),
    defineField({
      name: "subtitle",
      title: "Sous-titre",
      description:
        "Est utilisé dans la composante pour changer de page (précédent, suivant)",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Auteur",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "publicationDate",
      title: "Date de publication",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "contentBlocks",
      title: "Blocs de contenu",
      type: "array",
      of: [
        {
          type: blockA.name,
        },
        {
          type: blockB.name,
        },
        {
          type: blockC.name,
        },
        {
          type: blockD.name,
        },
      ],
      description:
        "Blocs qui s'afficheront après la description principale. Il est possible de changer l'ordre d'affichage en déplaçant les items dans la liste.",
    }),
    defineField(LANGUAGE_FIELD),
  ],
  preview: {
    select: {
      title: "title",
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
