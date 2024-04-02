import { defineField, defineType } from "sanity";
import { DotIcon } from "@sanity/icons";

export default defineType({
  name: "publication",
  title: "Parution",
  type: "document",
  icon: DotIcon,
  fields: [
    defineField({
      name: "mediaName",
      title: "Nom du média",
      type: "string",
    }),
    defineField({
      name: "publicationDate",
      title: "Date de parution",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Lien vers la parution",
      type: "string",
    }),
  ],
});
