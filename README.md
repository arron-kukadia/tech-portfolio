# Arron Kukadia · Tech Portfolio

A portfolio site built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. Content is managed in **Hygraph** and pages are statically generated with **ISR** (revalidated hourly).

## Tech Stack

Next.js 16 (App Router, SSG/ISR) · TypeScript · Tailwind CSS 4 · Framer Motion · Zustand · Hygraph (GraphQL) · Vitest

## Getting Started

```bash
npm install
cp .env.example .env.local   # add your Hygraph credentials
npm run dev
```

## Environment Variables

| Variable                       | Description                       |
| ------------------------------ | --------------------------------- |
| `NEXT_PUBLIC_HYGRAPH_ENDPOINT` | Hygraph Content API endpoint      |
| `NEXT_PUBLIC_HYGRAPH_TOKEN`    | Permanent Auth Token (if required)|

## Scripts

| Command              | Description              |
| -------------------- | ------------------------ |
| `npm run dev`        | Start dev server         |
| `npm run build`      | Production build         |
| `npm run start`      | Serve production build   |
| `npm run test`       | Run tests                |
| `npm run lint`       | Run ESLint               |
| `npm run format`     | Format with Prettier     |

## Deployment

Optimized for Vercel — push to GitHub, import the repo, add env vars, and deploy.

## License

MIT
