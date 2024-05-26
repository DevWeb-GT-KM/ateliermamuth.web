import { groq } from "next-sanity";

const LOAD_BLOCK_REFERENCES = `contentBlocks[] {
  ...,
  leftBlock {
    images[] {
      img {
        alt,
        asset->,
        hotspot
      }
    }
  },
  rightBlock {
    images[] {
      img {
        alt,
        asset->,
        hotspot
      }
    }
  },
  block {
    images[] {
      img {
        alt,
        asset->,
        hotspot
      }
    }
  }
}`;

export const PROJECTS_QUERY_BY_LANG = groq`*[_type == "project" && defined(slug) && language == $locale]`;
export const PROJECTS_QUERY = groq`*[_type == "project" && defined(slug)]`;

export const PROJECT_QUERY_BY_LANG = groq`*[_type == "project" && language == $locale && slug.current == $slug][0] {
  _createdAt,
  slug,
  name,
  subtitle,
  mainImage {
    alt,
    asset->,
    hotspot
  },
  secondaryImage {
    alt,
    asset->,
    hotspot
  },
  ${LOAD_BLOCK_REFERENCES},
  shortDescription,
  projectTypes,
  credits,
  "previousProject": coalesce(*[_type == "project" && defined(slug) && language == $locale && slug.current != ^.slug.current && _createdAt <= ^._createdAt] | order(_createdAt desc)[0], *[_type == "project" && defined(slug) && language == $locale && slug.current != ^.slug.current] | order(_createdAt desc)[0]) { slug, name, subtitle, mainImage { alt, asset->, hotspot } },
  "nextProject": coalesce(*[_type == "project" && defined(slug) && language == $locale && slug.current != ^.slug.current && _createdAt >= ^._createdAt] | order(_createdAt asc)[0], *[_type == "project" && defined(slug) && language == $locale && slug.current != ^.slug.current] | order(_createdAt asc)[0]) { slug, name, subtitle, mainImage { alt, asset->, hotspot } }
}`;

export const ARTICLES_QUERY_BY_LANG = groq`*[_type == "article" && defined(slug) && language == $locale]`;
export const ARTICLE_QUERY_BY_LANG = groq`*[_type == "article" && language == $locale && slug.current == $slug][0] {
  ...,
  mainImage {
    alt,
    asset->,
    hotspot
  },
  ${LOAD_BLOCK_REFERENCES},
  "previousArticle": coalesce(*[_type == "article" && defined(slug) && language == $locale && slug.current != ^.slug.current && publicationDate <= ^.publicationDate] | order(publicationDate desc)[0], *[_type == "article" && defined(slug) && language == $locale && slug.current != ^.slug.current] | order(publicationDate desc)[0]) { slug, title, subtitle, mainImage { alt, asset->, hotspot } },
  "nextArticle": coalesce(*[_type == "article" && defined(slug) && language == $locale && slug.current != ^.slug.current && publicationDate >= ^.publicationDate] | order(publicationDate asc)[0], *[_type == "article" && defined(slug) && language == $locale && slug.current != ^.slug.current] | order(publicationDate asc)[0]) { slug, title, subtitle, mainImage { alt, asset->, hotspot } }
}`;

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

export const HOME_PAGE_QUERY_BY_LANG = groq`*[_type == "home" && language == $locale] {
  carousel[]->{
      mainImage { asset->, hotspot, alt },
      projectTypes,
      name,
      shortDescription,
      slug
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
