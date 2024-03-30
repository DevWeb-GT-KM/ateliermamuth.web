import { groq } from "next-sanity";

export const PROJECTS_QUERY = groq`*[_type == "project" && defined(slug)]`;
export const PROJECTS_QUERY_BY_LANG = groq`*[_type == "project" && defined(slug) && language == $lang]`;

export const PROJECT_QUERY = groq`*[_type == "project" && language == $lang && slug.current == $slug][0]`;
