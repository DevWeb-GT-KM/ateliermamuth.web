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
    },
    projectSectionTitle
  }`;
export const SERVICES_LIST_QUERY = groq`*[_type == "service" && defined(slug) && language == $locale]`;
export const SERVICE_QUERY = groq`*[_type == "service" && slug.current == $slug][0]`;

export const ABOUT_US_PAGE_QUERY = groq`*[_type == "aboutUs"]{
  pageTitle,
  shortDescription,
  image{
    asset->
  },
  description,
  employees[]{
    name,
    role,
    email,
    description,
    image{
    asset->
    }
  },
  publications->{
    sectionTitle,
    publications[]{
        mediaName,
        publicationDate,
        link
    }
  }
}`;

export const HOME_PAGE_QUERY_BY_LANG = groq`*[_type == "home" && language == $locale] {
  carousel[]->{
      mainImage { asset-> },
      projectTypes,
      name,
      shortDescription
  },
  aboutUs->{
    pageTitle,
    shortDescription,
    publications->{
      sectionTitle,
      publications[]{
        mediaName,
        publicationDate,
        link
      }
    }
  },
  services->{
    pageTitle,
    services[]->{
      name,
      description,
      projectTypes
    }
  },
  values->{
    sectionTitle,
    valuesWords
  },
  projects->{
    pageTitle,
    projects[]->{
      mainImage{ asset-> },
      projectTypes,
      name,
      shortDescription
    }
  },
  blog->{
    pageTitle,
    articles[]->{
      title,
      description
    }
  }
}`;

export const FOOTER_QUERY_BY_LANG = groq`*[_type == "footer" && language == $locale] {
    projects->{
      pageTitle,
    },
    aboutUs->{
      pageTitle,
      shortDescription
    },
    blog->{
      pageTitle
    },
    faq->{
        pageTitle
    },
    socialMedias[]{
        mediaName,
        link
      },
    termsAndConditions,
    services->{
      pageTitle,
      services[]->{
        name
      }
    },
    contact->{
      pageTitle
    },
    email,
    apdiqLogo{
      asset->{
        url
      }
    }
  }`;
