# Amr Sami — Portfolio

A single-page personal portfolio for Amr Sami Abd-Elsayed, built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React. The site is statically rendered during the build so the first HTML response contains the portfolio content and metadata.

## Requirements

- Node.js 22.12 or later
- pnpm 11.25.0 (the project pins this in `package.json`)

## Setup and development

```sh
pnpm install
pnpm dev
```

Vite runs on `http://localhost:3000` by default. To check TypeScript:

```sh
pnpm typecheck
```

## Production build

```sh
pnpm build
```

The build produces static, prerendered files in `dist/`. Preview the production build locally with:

```sh
pnpm preview
```

The build runs Vite's client bundle, emits a server-render bundle for the one-page app, inserts that content into `dist/index.html`, then removes the temporary server bundle.

## Replace the portrait placeholder

The hero uses a clearly labeled placeholder until Amr supplies a photograph. Add the image under `public/images/`, then set `profilePhotoSrc` in `src/data/site.ts` to its public path, for example:

```ts
profilePhotoSrc: '/images/amr-sami-portrait.jpg',
```

Use Amr's own professional photo; do not replace it with an unrelated stock portrait. The image alt text is already provided by the hero component.

## Add or update projects

Project content lives in `src/data/projects.ts`. Add an object following the `Project` type with a unique number, name, category, accurate description, contribution, listed technologies, features, highlight, and visual theme. Provide `githubUrl` or `liveUrl` only when Amr supplies a real destination; keep a missing destination as `null`. `ProjectCard` in `src/components/ProjectCard.tsx` renders each entry and identifies visual placeholders until authentic project images are added. Replace those areas only with real project screenshots or artwork supplied for that project.

Other portfolio copy is organized in `src/data/`: `site.ts`, `services.ts`, `skills.ts`, `education.ts`, `experience.ts`, and `credentials.ts`.

## Deploy to Vercel

1. Import the repository into Vercel, or install and use the Vercel CLI.
2. Use the detected Vite framework preset, with `pnpm install` for installation and `pnpm build` for the build command.
3. Set the output directory to `dist` and deploy.
4. After the public domain is known, add its canonical and absolute social-preview URLs to `index.html`. Do not use an internal Preview address as the canonical domain.

The contact section intentionally uses `mailto:` and a copy-email interaction. It does not claim to submit a message to a nonexistent backend.
