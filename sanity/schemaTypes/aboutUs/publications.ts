import { defineField, defineType } from "sanity";
import { DotIcon } from "@sanity/icons";
import publication from "./publication";

export default defineType({
  name: "publications",
  title: "Parutions",
  type: "document",
  icon: DotIcon,
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
          type: "reference",
          to: [{ type: publication.name }],
        },
      ],
    }),
  ],
});
