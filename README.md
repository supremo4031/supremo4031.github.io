# Portfolio (React + Vite + Tailwind) → GitHub Pages

This repository contains a single-page portfolio site built with React, Vite, and Tailwind CSS, deployed to GitHub Pages via GitHub Actions.

## Customize content

Edit the typed config files:

- `src/content/profile.ts`
- `src/content/skills.ts`
- `src/content/experience.ts`
- `src/content/projects.ts`
- `src/content/education.ts`

## Add your resume

Place your PDF at:

- `public/resume.pdf`

The site links to it via `src/content/profile.ts` (`resumePath`).

## Local development

Prerequisite: install Node.js (v20+ recommended).

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`.

In your GitHub repo settings, ensure Pages is enabled and set to **GitHub Actions** as the source.

