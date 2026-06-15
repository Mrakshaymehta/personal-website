# Akshay Mehta — Portfolio

A modern, single-page developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** — dark theme, glassmorphism, gradient accents
- **Framer Motion** — scroll-reveal & entrance animations
- **lucide-react** — icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing your content

All content lives in one file: [`lib/data.ts`](lib/data.ts). Update your profile, experience, projects, and skills there — no need to touch the components.

## Add your résumé

Drop your PDF at `public/Akshay-Mehta-Resume.pdf` so the **Resume** buttons work. (The repo includes a placeholder.)

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Deploy — zero config needed.

Optionally update `metadataBase` in [`app/layout.tsx`](app/layout.tsx) to your real domain.

## Structure

```
app/
  layout.tsx      # fonts, metadata, SEO
  page.tsx        # section composition
  globals.css     # theme + utilities
components/        # Nav, Hero, About, Experience, Projects, Skills, Contact, Footer
lib/data.ts        # ← single source of truth for all content
```
