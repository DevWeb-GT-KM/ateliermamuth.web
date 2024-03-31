import { groq } from "next-sanity";

export const PROJECTS_QUERY_BY_LANG = groq`*[_type == "project" && defined(slug) && language == $locale]`;

export const PROJECTS_QUERY = groq`*[_type == "project" && defined(slug)]`;
export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0]`;
