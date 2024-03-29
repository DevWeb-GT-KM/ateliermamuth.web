import { groq } from "next-sanity";

export const PROJECTS_QUERY = groq`*[_type == "project" && defined(slug)]`;

export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0]`;
