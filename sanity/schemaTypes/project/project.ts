import { defineField, defineType } from "sanity";
import { DotIcon } from "@sanity/icons";
import {
  IMAGE_FIELD,
  LANGUAGE_FIELD,
  PAGE_PARTIAL_METADATA_FIELD,
} from "../constants";
import blockA from "../blocks/blockA";
import blockB from "../blocks/blockB";
import blockC from "../blocks/blockC";
import blockD from "../blocks/blockD";

export default defineType({
  name: "project",
  title: "Page d'un projet",
  type: "document",
  icon: DotIcon,
  fields: [
    defineField(PAGE_PARTIAL_METADATA_FIELD()),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Primaire", value: "primary" },
          { title: "Secondaire", value: "secondary" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    }),
    defineField({
      name: "name",
      title: "Nom du projet",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Sous-titre",
      description:
        "Est utilisé dans la composante pour changer de page (précédent, suivant)",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "URL",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
        maxLength: 96,
      },
      description:
        'Vous devez simplement cliquer sur le bouton "Generate" lorsque le nom du projet sera renseigné',
    }),
    defineField(IMAGE_FIELD("mainImage", "Image principale")),
    defineField(IMAGE_FIELD("secondaryImage", "Image secondaire")),
    defineField({
      name: "shortDescription",
      title: "Description courte",
      type: "text",
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
    }),
    defineField({
      name: "credits",
      title: "Crédits",
      type: "array",
      of: [
        {
          type: "credit",
        },
      ],
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
      title: "name",
      language: LANGUAGE_FIELD.name,
    },
    prepare(selection) {
      const { language } = selection;
      return { ...selection, subtitle: language.toUpperCase() };
    },
  },
});
