# Javed Yasin: Developer Portfolio

A responsive, SEO-friendly portfolio built with Next.js (App Router), TypeScript and Tailwind CSS.

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS 4, Lucide React. No database and no backend of its own.

## Prerequisites

Node.js 20 or newer and npm.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Checks and production build

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## Project structure

```
app/            layout, page, robots, sitemap, global styles
components/     Header, Hero, About, Skills, Projects, Contact, ContactForm, Footer, Button, Section
config/site.ts      personal details, links, SEO, CV, WhatsApp, form endpoint
config/skills.ts    skills and their levels
config/projects.ts  project data (screenshots go in public/projects)
config/profile.ts   experience, education, services and work process
public/         favicon and static files (CV goes here)
```

## Update your information

Edit `config/site.ts` (name, bio, email, links, location). Components read from this file.

### Add a project

Add an object to `config/projects.ts`. Fields: `title`, `description`, `category`, `stack`, and optionally `live`, `repo`, `year`, `featured`. A missing `live` or `repo` hides that button. Set `placeholder: true` on sample entries: they are never shown on the site. Filter buttons appear automatically for categories that have projects.

### Edit skills

Edit `config/skills.ts`. Each skill has a `level` (`Core`, `Working Knowledge`, `Currently Exploring`) and `enabled`. Only enabled skills are published. Check the levels and make sure each one is true for you.

### Add a CV

Copy the PDF into `public/` (for example `public/Javed-Yasin-CV.pdf`) and set `cvPath: '/Javed-Yasin-CV.pdf'` in `config/site.ts`. Use a CV without your date of birth, gender or phone number. Until `cvPath` is set, the Download CV button is hidden.

### WhatsApp

Set `whatsappNumber` in `config/site.ts` as international digits only (for example `923001234567`). While it is empty, WhatsApp is hidden everywhere. Your number becomes public when you set it.

## Contact form

The form posts to [FormSubmit](https://formsubmit.co), which emails each message to `javedyasin396@gmail.com`. No account is needed, but the address must be activated once:

1. Send one message from the form (or any first message).
2. Open the "Activate Form" email that FormSubmit sends to that inbox (check Spam) and click the link.

After that, messages arrive in your inbox. Until activation, the form shows an honest "could not be sent" error. To use a different service (for example Formspree), set `NEXT_PUBLIC_FORM_ENDPOINT` in `.env.local`. The success message appears only after the service confirms success. A hidden honeypot field is included against bots.

## Domain and SEO

Set `NEXT_PUBLIC_SITE_URL` (for example `https://javedyasin.dev`) to enable the canonical URL, the sitemap and structured data URL. Until then the sitemap is empty.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel choose Add New, Project, import the repository (framework is detected as Next.js).
3. Add `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_FORM_ENDPOINT` under Environment Variables.
4. Deploy. Add your custom domain under Settings, Domains.
