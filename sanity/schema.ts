import { type SchemaTypeDefinition } from "sanity";
import projectSchema from "./schemaTypes/project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema],
};
