import { type SchemaTypeDefinition } from "sanity";
import project from "./schemaTypes/project/project";
import faqs from "./schemaTypes/faq/faqs";
import faq from "./schemaTypes/faq/faq";
import blog from "./schemaTypes/blog/article";
import blogs from "./schemaTypes/blog/blog";
import contact from "./schemaTypes/contact/contact";
import aboutUs from "./schemaTypes/aboutUs/aboutUs";
import publication from "./schemaTypes/aboutUs/publication";
import employee from "./schemaTypes/aboutUs/employee";
import services from "./schemaTypes/service/services";
import service from "./schemaTypes/service/service";
import step from "./schemaTypes/service/step";
import projects from "./schemaTypes/project/projects";
import projectArchived from "./schemaTypes/project/projectArchived";
import home from "./schemaTypes/home/home";
import value from "./schemaTypes/home/value";
import values from "./schemaTypes/home/values";
import publications from "./schemaTypes/aboutUs/publications";
import contactForm from "./schemaTypes/contact/contactForm";
import footer from "./schemaTypes/footer";
import navBar from "./schemaTypes/navBar";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navBar,
    footer,
    home,
    value,
    values,
    services,
    service,
    step,
    projects,
    project,
    projectArchived,
    aboutUs,
    publications,
    publication,
    employee,
    blogs,
    blog,
    faqs,
    faq,
    contact,
    contactForm,
  ],
};
