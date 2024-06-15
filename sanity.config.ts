/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { documentInternationalization } from "@sanity/document-internationalization";
import { media } from "sanity-plugin-media";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { ENGLISH_LOCALE, FRENCH_LOCALE } from "./navigation";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    vercelDeployTool(),
    structureTool(),
    media(),
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
    documentInternationalization({
      supportedLanguages: [
        { id: FRENCH_LOCALE, title: "Français" },
        { id: ENGLISH_LOCALE, title: "English" },
      ],
      languageField: "language",
      schemaTypes: [
        "navBar",
        "footer",
        "home",
        "values",
        "services",
        "service",
        "projects",
        "project",
        "aboutUs",
        "publications",
        "article",
        "blog",
        "faq",
        "contact",
        "contactForm",
      ],
    }),
  ],
});
