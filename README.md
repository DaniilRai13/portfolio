# Daniil Rai — Portfolio

Personal portfolio of a frontend developer: services, selected projects, process and a contact form that delivers messages to Telegram.

**Stack:** Next.js 16 (App Router, Server Actions) · React 19 · TypeScript · Tailwind CSS 4

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in the values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production URL for canonical links, Open Graph, sitemap and robots. Optional on Vercel. |
| `TELEGRAM_BOT_TOKEN` | Bot token from @BotFather — the contact form sends messages through this bot. |
| `TELEGRAM_CHAT_ID` | Chat that receives the messages. |

Without the Telegram variables the form shows a friendly error and suggests email or Telegram instead.

## Project structure

```
app/                 layout, page, metadata routes (icon, OG image, sitemap, robots)
app/actions/         Server Actions (contact form)
components/layout/   header, navigation, mobile menu, footer
components/sections/ page sections: Hero, WhatIDo, Projects, About, HowIWork, Contact
components/ui/       shared UI: Button, Heading, Section, Field, Badge, Alert, Marquee…
data/                content: projects, services, about, links, site config
hooks/               client hooks (active section in navigation)
public/images/       project screenshots
```

Content lives in `data/` — to add a project, put screenshots into `public/images/projects/<id>/` and add an entry to `data/projects.data.ts`.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint
