import { groq } from "next-sanity";

export const PROJECTS_QUERY_BY_LANG = groq`*[_type == "project" && defined(slug) && language == $locale]`;
export const PROJECTS_QUERY = groq`*[_type == "project" && defined(slug)]`;
export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0]`;

export const ARTICLES_QUERY_BY_LANG = groq`*[_type == "article" && defined(slug) && language == $locale]`;
export const ARTICLE_QUERY = groq`*[_type == "article" && slug.current == $slug][0]`;

export const SERVICES_PAGE_QUERY = groq`*[_type == "services" && language == $locale] {
    pageTitle,
    description[],
    services[]-> {
      slug,
      name, 
      description,
      projectTypes, 
      image {asset->}
    }
  }`;
export const SERVICES_LIST_QUERY = groq`*[_type == "service" && defined(slug) && language == $locale]`;
export const SERVICE_QUERY = groq`*[_type == "service" && slug.current == $slug][0]`;
