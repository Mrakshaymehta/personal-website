<div align="center">

# akshay.dev — Personal Portfolio

**A modern, developer-themed portfolio for Akshay Mehta** — Software Engineer building across frontend, backend, and AI.

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

[**Live Demo**](#) · [**Report Bug**](https://github.com/Mrakshaymehta/personal-website/issues) · [**LinkedIn**](https://www.linkedin.com/in/akshay-mehta-6234a2230/)

</div>

---

## ✨ Overview

A single-page portfolio designed to *look like a developer built it* — not just describe one. It pairs a clean, dark, glassmorphic UI with deliberate software-engineering motifs: a code-editor hero, an interactive terminal, IDE window chrome, and a VS Code–style status bar.

Built with the exact stack used in production at work — **Next.js, TypeScript, and Tailwind CSS** — so the site itself is a working sample of the skills it lists.

## 🚀 Features

- 🖥️ **Code-editor hero** — an `akshay.ts` window with real syntax highlighting, line numbers, and a blinking cursor.
- ⌨️ **Typewriter roles** — animated cycling of *Full-Stack · Backend · AI/LLM · Frontend* titles.
- 🐚 **Interactive terminal** — type `help`, `about`, `projects`, `skills`, `resume`, and more (with command history via ↑/↓ and an easter egg or two).
- 📊 **VS Code–style status bar** — fixed footer with branch, error count, encoding, and an "available for work" indicator.
- 🪟 **IDE-themed project cards** — each project framed as an editor tab (`saathi.tsx`, `hireflow.tsx`) with traffic-light chrome.
- 📄 **Skills as code** — the tech stack rendered as a syntax-highlighted `stack.ts` file.
- 🧩 **Terminal-style section headings** — every section reads like a shell command (`$ cat about.md`).
- 📥 **One-click resume download** — served straight from `/public`.
- 🎬 **Scroll-reveal animations** — smooth entrance transitions powered by Framer Motion.
- 📱 **Fully responsive** + **SEO-ready** — Open Graph tags, semantic markup, and a mobile nav.

## 🛠️ Tech Stack

| Layer       | Tools                                              |
| ----------- | ------------------------------------------------- |
| Framework   | [Next.js 14](https://nextjs.org/) (App Router)    |
| Language    | [TypeScript](https://www.typescriptlang.org/)     |
| Styling     | [Tailwind CSS](https://tailwindcss.com/)          |
| Animation   | [Framer Motion](https://www.framer.com/motion/)   |
| Icons       | [lucide-react](https://lucide.dev/)               |
| Deployment  | [Vercel](https://vercel.com/)                     |

## 📦 Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# clone
git clone https://github.com/Mrakshaymehta/personal-website.git
cd personal-website

# install dependencies
npm install

# start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the local development server   |
| `npm run build` | Create an optimized production build  |
| `npm run start` | Serve the production build locally    |
| `npm run lint`  | Run ESLint                            |

## 🗂️ Project Structure

```
personal-website/
├── app/
│   ├── layout.tsx        # Fonts, metadata, SEO
│   ├── page.tsx          # Section composition
│   └── globals.css       # Theme tokens & utilities
├── components/
│   ├── Nav.tsx           # Sticky nav + mobile menu
│   ├── Hero.tsx          # Code-editor hero
│   ├── CodeWindow.tsx    # Syntax-highlighted akshay.ts
│   ├── Typewriter.tsx    # Animated role text
│   ├── About.tsx
│   ├── Experience.tsx    # Animated timeline
│   ├── Projects.tsx      # IDE-style project cards
│   ├── Skills.tsx        # Skills as a stack.ts file
│   ├── Terminal.tsx      # Interactive command line
│   ├── Contact.tsx
│   ├── StatusBar.tsx     # VS Code–style footer bar
│   ├── Footer.tsx
│   ├── Section.tsx       # Reusable section wrapper
│   └── Reveal.tsx        # Scroll-reveal animation helper
├── lib/
│   └── data.ts           # ← single source of truth for all content
└── public/
    └── Akshay-Mehta-Resume.pdf
```

## ✏️ Customization

All content lives in one file: [`lib/data.ts`](lib/data.ts). Update your profile, stats, experience, projects, and skills there — no need to touch the components.

To update the résumé, replace [`public/Akshay-Mehta-Resume.pdf`](public/) with a new file of the same name.

## ▲ Deployment

This project is optimized for [Vercel](https://vercel.com/):

1. Push your changes to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Click **Deploy** — Next.js is auto-detected; no configuration required.

Every push to `main` then triggers an automatic production deployment.

## 📫 Contact

**Akshay Mehta** — Software Engineer (Frontend · Backend · AI)

- 📧 Email: [mrakshaymehta007@gmail.com](mailto:mrakshaymehta007@gmail.com)
- 💼 LinkedIn: [akshay-mehta](https://www.linkedin.com/in/akshay-mehta-6234a2230/)
- 🐙 GitHub: [@Mrakshaymehta](https://github.com/Mrakshaymehta)

---

<div align="center">
<sub>Built with Next.js &amp; Tailwind CSS · Designed &amp; coded in Bengaluru, India</sub>
</div>
