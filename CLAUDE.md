# Atelier Mamuth — Web

Site vitrine pour Atelier Mamuth, agence créative. Next.js 14 + Sanity CMS + next-intl (FR).

## Stack

- **Framework**: Next.js 14.2.4 (App Router, React 18, TypeScript 5 strict)
- **CMS**: Sanity 3 — Studio monté sur `/studio`, contenu en FR/EN via document-internationalization
- **i18n**: next-intl 3 — locale par défaut `fr`, prefix toujours présent (ex. `/fr/projets`)
- **Styles**: SCSS + styled-components — variables globales injectées via `next.config.mjs`
- **Forms**: react-hook-form + EmailJS (formulaire de contact multi-étapes)
- **Animations**: framer-motion, react-animate-height
- **Tests**: Jest + Testing Library (jsdom)

## Commandes

```bash
npm run dev      # dev sur http://localhost:3000
npm run build    # build production
npm run lint     # ESLint
npm test         # Jest
```

## Structure clé

```
app/
  [locale]/          # Routes localisées (fr/...)
    components/      # Composants de page (aboutUs, blog, projects, services…)
    layout.tsx       # Providers (PageOverlay, Services, CookiesConsent)
    page.tsx         # Page d'accueil
  common/            # Partagé global
    components/      # NavBar, Footer, blocks réutilisables, inputs, animations
    contexts/        # ContactForm, CookiesConsent, Services
    hooks/           # useCookiesConsent, useService
    services/        # cookieService, gtmCookieConsentService
    helpers/         # FormInputValidationHelper, ImageHelper, TextHelper
    models/          # TypeScript interfaces/configs
    scss/            # _variables.scss, common.scss (importés globalement)
  studio/            # Sanity Studio route (layout + [[...index]])
  api/               # draft mode & disable-draft
sanity/
  schemaTypes/       # Schemas Sanity (27 types)
  env.ts             # projectId, dataset, apiVersion
tests/               # Tests Jest
```

## Alias de chemin

`@/*` → `./app/*` (défini dans `tsconfig.json`)

## Routing localisé

| Page           | Route FR              |
|----------------|-----------------------|
| Accueil        | `/fr`                 |
| Projets        | `/fr/projets/[slug]`  |
| Services       | `/fr/services/[slug]` |
| À propos       | `/fr/a-propos`        |
| Blogue         | `/fr/blogue/[slug]`   |
| Contact        | `/fr/contact`         |
| Formulaire     | `/fr/formulaire-contact` |
| FAQ            | `/fr/faq`             |

## Patterns importants

### Fetching de données Sanity
- Server Components uniquement — `loadQuery()` de `@sanity/react-loader`
- Deux perspectives : `"published"` (prod) ou `"previewDrafts"` (draft mode)
- Queries filtrées par `$locale` (ex. `BY_LANG`)
- Pattern container + preview : `PageContainer.tsx` / `PageContainerPreview.tsx`

### Draft Mode / Live Visual Editing
- Activé via `/api/draft`, désactivé via `/api/disable-draft`
- `LiveVisualEditing.tsx` dans `app/common/components/`
- Le composant Preview est rendu conditionnellement si `draftMode().isEnabled`

### Images
- `next-sanity-image` + `@sanity/image-url`
- CDN Sanity autorisé dans `next.config.mjs`
- Support hotspot pour images responsives

### Formulaire de contact (multi-étapes)
- `ContactFormContext` gère l'état global du formulaire
- 3 étapes : PersonalInformation → ProjectType → ContactInformation
- Envoi via EmailJS

### Cookies & Consentement
- Interface `cookieService` / `gtmCookieConsentService`
- Stockage avec `universal-cookie`
- Compatible GTM

## Sanity Studio

- URL locale : `http://localhost:3000/studio`
- Plugins : structureTool, presentationTool, media, visionTool, document-internationalization
- 27 schémas : navBar, footer, home, values, services, service, projects, project, aboutUs, publications, article, blog, faq, contact, contactForm, blocks (A-D), etc.

## Variables d'environnement

Fichier `.env.local` requis avec :
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_READ_TOKEN` (pour le draft mode)
