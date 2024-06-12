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

const LOAD_PAGE_METADATA = `
  metadata {
    metaTitle,
    metaDescription
  }
`;

export const SITEMAP_SLUGS_FR_QUERY = groq`*[defined(slug) && language == "fr"] {
  _type,
  slug,
  _updatedAt
}`;

export const HOME_PAGE_METADATA_QUERY_BY_LANG = groq`*[_type == "home" && language == $locale] {
  metadata {
    metaDescription
  }
 }`;
export const PROJECTS_PAGE_METADATA_QUERY_BY_LANG = groq`*[_type == "projects" && language == $locale] { ${LOAD_PAGE_METADATA} }`;
export const PROJECT_PAGE_METADATA_QUERY_BY_LANG = groq`*[_type == "project" && language == $locale && slug.current == $slug][0] {
  name,
  metadata {
    metaDescription
  }
 }`;
export const ABOUT_US_PAGE_METADATA_QUERY_BY_LANG = groq`*[_type == "aboutUs" && language == $locale] { ${LOAD_PAGE_METADATA} }`;
export const BLOG_PAGE_METADATA_QUERY_BY_LANG = groq`*[_type == "blog" && language == $locale] { ${LOAD_PAGE_METADATA} }`;
export const ARTICLE_PAGE_METADATA_QUERY_BY_LANG = groq`*[_type == "article" && language == $locale && slug.current == $slug][0] {
  title,
  metadata {
    metaDescription
  }
 }`;
export const CONTACT_PAGE_METADATA_QUERY_BY_LANG = groq`*[_type == "contact" && language == $locale] { ${LOAD_PAGE_METADATA} }`;
export const CONTACT_FORM_PAGE_METADATA_QUERY_BY_LANG = groq`*[_type == "contactForm" && language == $locale] { ${LOAD_PAGE_METADATA} }`;
export const FAQ_PAGE_METADATA_QUERY_BY_LANG = groq`*[_type == "faq" && language == $locale] { ${LOAD_PAGE_METADATA} }`;
export const SERVICES_PAGE_METADATA_QUERY_BY_LANG = groq`*[_type == "services" && language == $locale] { ${LOAD_PAGE_METADATA} }`;
export const SERVICE_PAGE_METADATA_QUERY_BY_LANG = groq`*[_type == "service" && language == $locale && slug.current == $slug][0] {
  name,
  metadata {
    metaDescription
  }
 }`;

export const PROJECTS_QUERY_BY_LANG = groq`*[_type == "project" && language == $locale && defined(slug)]`;

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

export const PROJECTS_PAGE_QUERY = groq`*[_type == "projects" && language == $locale]{
  pageTitle,
  projects[]->{
    type,
    mainImage{ asset-> },
    projectTypes,
    name,
    shortDescription,
    slug
  },
  archiveSectionTitle,
  projectsArchived[]{
    completionYear,
    projectTypes,
    name,
    location,
    images[]{
      asset->
    }
  }
}`;

export const BLOG_QUERY_BY_LANG = groq`*[_type == "blog" && language == $locale] {
  pageTitle,
  articles[]-> {
      title, 
      slug,
      description,
      mainImage {
        alt,
        asset->,
        hotspot
      }
    },
}`;

export const SERVICES_PAGE_QUERY = groq`*[_type == "services" && language == $locale] {
    pageTitle,
    description[],
    services[]-> {
      slug,
      name, 
      description,
      projectTypes, 
      img {
        alt,
        asset->,
        hotspot
      }
    },
    projectSectionTitle
  }`;

export const CONTACT_PAGE_QUERY = groq`*[_type == "contact" && language == $locale] {
    pageTitle,
    addressLabel,
    address,
    telephoneLabel,
    telephone,
    faq,
    img {
      alt,
      asset->,
      hotspot
    }
  }`;

export const CONTACT_FORM_PAGE_QUERY = groq`*[_type == "contactForm" && language == $locale] {
  submitButton,
  backHomeButton,
  previousButton,
  errorRequired,
  errorEmail,
  errorPhoneNumber,
  errorSubmitForm,
  confirmationMessage,
  nextButton,
  personalInformationTitle,
  pronounLabel,
  nameLabel,
  contactInformationTitle,
  emailLabel,
  phoneNumberLabel,
  projectTypeTitle,
  projectTypeSubtitle,
  projectTypes[],
  projectNatureSubtitle,
  projectNatures[],
  budgetTitle,
  budgetRanges[],
  moreDetailsTitle,
  moreDetailsLabel
}`;

export const FAQ_PAGE_QUERY = groq`*[_type == "faq" && language == $locale]{
    pageTitle,
    questions[]{
      question,
      answer,
      link
    },
}`;

export const SERVICES_LIST_QUERY = groq`*[_type == "service" && defined(slug) && language == $locale]`;
export const SERVICE_QUERY = groq`*[_type == "service" && language == $locale && slug.current == $slug][0]`;

export const ABOUT_US_PAGE_QUERY_BY_LANG = groq`*[_type == "aboutUs" && language == $locale]{
  pageTitle,
  shortDescription,
  img {
    alt,
    asset->,
    hotspot
  },
  description,
  employees[]{
    name,
    role,
    email,
    description,
    img {
      alt,
      asset->,
      hotspot
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
      slug,
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
      type,
      mainImage{ asset-> },
      projectTypes,
      name,
      shortDescription,
      slug
    }
  },
  blog->{
    pageTitle,
    articles[]->{
      title,
      description,
      slug,
      mainImage {
        alt,
        asset->,
        hotspot
      }
    }
  }
}`;

export const NAV_BAR_BY_LANG = groq`*[_type == "navBar" && language == "fr"]{
  projectsLink,
  servicesLink,
  blogLink,
  aboutUsLink,
  contactUs
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
    services->{
      pageTitle,
      services[]->{
        name,
        slug
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
