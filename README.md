# Arron Kukadia · Tech Portfolio

A bespoke portfolio built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS 4**. The site showcases projects, blog posts, experience, and skills with rich animations, a persistent dark/light theme, and data sourced from a Hygraph CMS.

## TODO

- Add tests

## Highlights

- Hero, featured projects, skills grid, blog preview, and contact CTA sections
- CMS-driven content with TanStack Query caching and graceful skeleton states
- Framer Motion animations and gradient highlights throughout the UI
- Dark/light theming persisted via a Zustand store
- Responsive layout optimized for desktop, tablet, and mobile

## Tech Stack

| Area                    | Tools                                               |
| ----------------------- | --------------------------------------------------- |
| Framework               | Next.js 16 (App Router)                             |
| Language                | TypeScript (React 19)                               |
| Styling                 | Tailwind CSS 4, custom utility classes              |
| Components & Primitives | Headless UI, custom UI kit, Radix-inspired patterns |
| State & Data            | Zustand (theme), TanStack Query (CMS data)          |
| Animation               | Framer Motion                                       |
| CMS                     | Hygraph (GraphQL)                                   |
| Icons                   | Lucide React                                        |

## Prerequisites

- Node.js **>= 20** (to match Next.js 16 requirements)
- npm (ships with Node) or another package manager

## Local Development

```bash
npm install          # install dependencies
cp .env.example .env.local  # populate with your CMS credentials
npm run dev          # start the app on http://localhost:3000
```

Available scripts:

- `npm run dev` – Next.js dev server
- `npm run build` – production build
- `npm run start` – serve the production build
- `npm run lint` – run ESLint
- `npm run format` / `npm run format:check` – Prettier with Tailwind plugin

## Environment Variables

Create a `.env.local` file in the project root containing:

| Variable                       | Required | Description                                               |
| ------------------------------ | -------- | --------------------------------------------------------- |
| `NEXT_PUBLIC_HYGRAPH_ENDPOINT` | ✅       | Hygraph Content API endpoint (Public Content API URL)     |
| `NEXT_PUBLIC_HYGRAPH_TOKEN`    | ➖       | Permanent Auth Token if your Content API requires headers |

> All GraphQL requests originate from the client via `graphql-request`. If you restrict your API, supply the token to add the `Authorization: Bearer <token>` header.

Without a valid endpoint the data hooks will fail, so set these before running the site.

## Hygraph Schema

Configure the following content models (fields can be tailored, but the API currently expects these shapes):

1. **PersonalInfo**
   - `name`, `title`, `tagline`, `bio`, `location`, `email`
   - `github`, `linkedin`, `instagram`
   - `cv` (Asset), `profileImage` (Asset)
   - `skills` (list of strings)
2. **Project**
   - `title`, `slug`, `description`, `technologies` (string list)
   - `githubUrl`, `liveUrl`, `featured` (boolean)
   - `coverImage` (Asset)
3. **Post**
   - `title`, `slug`, `excerpt`, `content` (Rich Text), `publishedAtTime`
   - `coverImage` (Asset), `tags` (string list)
4. **Experience**
   - `company`, `role`, `description` (Rich Text)
   - `startDate`, `endDate`, `current`, `technologies` (string list)

Publish at least one entry per model so TanStack Query can render hydrated sections.

## Project Structure

```
src/
├── app/                # App Router routes (home, projects, blog, about)
├── components/
│   ├── cards/          # Project, blog, and skill cards
│   ├── sections/       # Page sections (Hero, CTA, etc.)
│   └── ui/             # Buttons, badges, skeletons, etc.
├── hooks/              # Data-fetching hooks (projects, posts, experience, personal info)
├── lib/                # GraphQL client, animations, constants, helpers, types
└── store/              # Zustand stores (theme persistence)
```

## Customization Tips

1. **Branding & Content** – Update entries in Hygraph; no redeploy is required thanks to client-side queries.
2. **Colors & Typography** – Adjust Tailwind tokens in `src/app/globals.css`.
3. **Sections** – Each major section lives in `src/components/sections`. Duplicate or trim components as needed.
4. **Animations** – Tweak variants in `src/lib/animations.ts` to control motion curves and delays.

## Deployment

The project is tuned for Vercel (SSR/ISR ready):

1. Push the repo to GitHub.
2. Create a new Vercel project and import the repo.
3. Add the same environment variables (`NEXT_PUBLIC_HYGRAPH_*`).
4. Deploy — Vercel will run `npm install` + `npm run build` automatically.

You can also self-host:

```bash
npm run build
npm start   # Serves the compiled Next.js app on port 3000
```

## License

MIT
