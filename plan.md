# Amr Sami Portfolio — Implementation Plan

## Product approach

Build a single-route, static portfolio for Amr Sami Abd-Elsayed using React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React. The supplied brief is the source of truth for all copy, skill lists, dates, contributions, and links. No backend is needed: the contact path uses `mailto:` plus a clipboard action, and unknown project URLs remain visibly marked as “link to be added” rather than becoming invented links.

The page will be pre-rendered to static HTML during the Vite build so that the first response contains meaningful portfolio copy and metadata without requiring a crawler to execute JavaScript. A small server-render entry and post-build script will replace the built root mount with rendered markup; the browser entry will hydrate that markup for interactions. The static output is `dist/`, suitable for Vercel static hosting. Canonical and absolute social-preview URLs will be omitted until Amr supplies a real public domain; page title, description, and Open Graph fields that do not require an unknown domain will still be present.

The only portrait and project-preview areas will be explicitly labeled, replaceable placeholders. Image search surfaced commercial/watermarked stock textures rather than a suitable freely reusable asset, so the site will use a subtle CSS paper-grain treatment instead of importing questionable stock imagery. This preserves the brief's instruction not to fabricate identity photography or project screenshots.

## Design system

- **Design Movement:** Contemporary editorial minimalism with print-inspired Swiss magazine structure and the quiet materiality of architectural portfolios.
- **Core Principles:** Use typography as the primary visual; organize content with asymmetry and clear editorial pacing; keep surfaces restrained and information precise; give interactive elements discreet but unmistakable feedback.
- **Color Philosophy:** Warm paper grounds the page without sterile white; near-black text provides strong contrast; clay/rust is a focused human accent for status, numbering, and key calls to action; fine warm-gray borders organize content without enclosing everything in cards. Tokens follow the supplied values: `#F5F3EE`, `#171717`, `#77736C`, `#C56B45`, `#D8D4CC`, and `#FFFFFF`.
- **Layout Paradigm:** A wide, left-aligned editorial canvas with a compact sticky header, generous section breaks, narrow reading columns, and staggered/asymmetric project and information layouts. At small widths, side-by-side compositions become purposeful stacked sequences rather than compressed desktop grids.
- **Signature Elements:** Small uppercase marginal labels with index numbers; thin rules that connect the page's sections; an offset portrait placeholder with a rust-toned registration mark and caption.
- **Interaction Philosophy:** Links and controls reveal state through underline, arrow direction, or a restrained color shift; mobile navigation closes after selection; copy-email shows a short accessible confirmation; no interaction pretends to send data to a nonexistent service.
- **Animation:** Short opacity/vertical reveals and small directional transitions using Framer Motion. Reduce or remove motion when `prefers-reduced-motion` is active. Avoid scroll-jank and continuous movement; do not rely on animation to communicate content.
- **Typography System:** Playfair Display for display headings and DM Sans for body and interface text, with system fallbacks. Use fluid `clamp()` sizing, strong contrast between display and body sizes, and comfortable line lengths.
- **Brand Essence:** A Cairo-based developer portfolio for international clients and teams seeking thoughtful, responsive web products; **considered, capable, collaborative**.
- **Brand Voice:** Direct, specific, and quietly confident. Example lines: “Building digital experiences that make a difference.” and “Have a project in mind? Let's build something meaningful.”
- **Wordmark & Logo:** A custom typographic lockup, “AMR SAMI.”, paired with a small offset clay square/registration mark; use the initials treatment as an inline SVG/site favicon rather than a default icon font.
- **Signature Brand Color:** Clay rust `#C56B45`, used sparingly for small marks and key actions.

## Page content and behavior

Implement the sticky responsive navigation; hero and replaceable portrait frame; About introduction and four-item information grid; five differentiated services; four project case studies (CareOs, GameTech, FINDORA CRM, ExoNeural) with truthful role, technology, feature, and deployment details; grouped skills without proficiency bars; concise education timeline; training experiences explicitly distinguished from employment; six certifications without invented dates/scores; Arabic/English proficiency; contact close with working email and social URLs; and footer with a dynamic year.

Use reusable `ProjectCard`, section heading, link/button, and navigation components. Project records live in data files and feed the project section. Add accessible labels and alt text to placeholders, focus-visible styles, keyboard-operable mobile navigation, semantic landmarks/headings, and visible non-link labels for unknown project destinations. Preserve all requested distinctions: CareOs bilingual features and frontend leadership; GameTech is not described as having a MERN backend; FINDORA's real-estate CRM scope and listed stack; ExoNeural's NASA Space Apps Cairo badge and stated deployments; ITI, TAG SiS, and OrbScope are training experiences.

## Project structure

```text
public/
  favicon.svg
  manus-routes.json
src/
  components/       Navbar, Footer, Button/Link, SectionHeading, ProjectCard, Reveal
  sections/         Hero, About, Services, Projects, Skills, Education, Experience,
                    Certifications, Languages, Contact
  data/             projects, skills, education, experience, certifications
  assets/           local site assets only; user's future portrait has a documented path
  App.tsx           semantic one-page composition
  entry-client.tsx  hydration and client-side interactions
  entry-server.tsx  static render entry
  index.css         tokens, typography, responsive layout and motion preferences
scripts/
  prerender.mjs     inject server-rendered app into built index.html
index.html          SEO metadata, font hints and hydration root
vite.config.ts      React and Tailwind integration
README.md           setup, commands, replacing portrait, project updates, Vercel deployment
plan.md             approved design and implementation approach
TODO.md             outcome criteria copied from the supplied brief
```

## Build workflow and constraints

Pin the pnpm version in `package.json` and keep lifecycle-script permissions in the checked-in pnpm workspace configuration before installing dependencies. Use only the requested frontend dependencies plus narrowly scoped build tooling. Implement meaningful static HTML and one root route; declare `/manus-routes.json` before starting Vite. Register TypeScript diagnostics through the project's Webdev runtime configuration before the first application-code batch. Run the development service on configured port 3000, check readiness over HTTP, and inspect the rendered desktop/mobile layouts. Run TypeScript diagnostics and the production build, confirm the prerendered HTML and route manifest, and correct defects found. Do not add a server, database, fake contact form, external image assets, or guessed canonical/public URLs. Provide Vercel setup and static output instructions in the README.