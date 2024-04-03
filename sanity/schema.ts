import { type SchemaTypeDefinition } from "sanity";
import project from "./schemaTypes/project/project";
import faq from "./schemaTypes/faq/faq";
import question from "./schemaTypes/faq/question";
import article from "./schemaTypes/blog/article";
import blog from "./schemaTypes/blog/blog";
import contact from "./schemaTypes/contact/contact";
import aboutUs from "./schemaTypes/aboutUs/aboutUs";
import publication from "./schemaTypes/aboutUs/publication";
import employee from "./schemaTypes/aboutUs/employee";
import services from "./schemaTypes/service/services";
import service from "./schemaTypes/service/service";
import projects from "./schemaTypes/project/projects";
import credit from "./schemaTypes/project/credit";
import projectArchived from "./schemaTypes/project/projectArchived";
import home from "./schemaTypes/home/home";
import values from "./schemaTypes/home/values";
import publications from "./schemaTypes/aboutUs/publications";
import contactForm from "./schemaTypes/contact/contactForm";
import footer from "./schemaTypes/footer";
import navBar from "./schemaTypes/navBar";
import step from "./schemaTypes/service/step";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navBar,
    footer,
    home,
    values,
    services,
    service,
    step,
    projects,
    project,
    credit,
    projectArchived,
    aboutUs,
    publications,
    publication,
    employee,
    blog,
    article,
    question,
    faq,
    contact,
    contactForm,
  ],
};
