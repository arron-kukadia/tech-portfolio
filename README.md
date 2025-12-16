# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a sleek dark theme, smooth animations, and CMS integration ready.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **CMS**: Hygraph (optional)
- **Icons**: Lucide React

## Features

- Responsive design optimized for all devices
- Dark/Light theme toggle with persistence
- Projects showcase with filtering
- Blog with individual post pages
- Experience timeline
- Skills display
- CV download button
- Social media links (LinkedIn, GitHub, Instagram)
- SEO optimized with meta tags
- Smooth page transitions and animations

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Hygraph CMS Setup (Optional)

To use Hygraph for managing content:

1. Create a free account at [hygraph.com](https://hygraph.com)
2. Create a new project
3. Set up the following models:
   - **Project**: title, slug, description, technologies, githubUrl, liveUrl, coverImage, featured
   - **Post**: title, slug, excerpt, content, publishedAt, coverImage, tags
   - **Experience**: company, role, description, startDate, endDate, current, technologies

4. Create a `.env.local` file:

```
NEXT_PUBLIC_HYGRAPH_ENDPOINT=your_hygraph_content_api_endpoint
```

Without the Hygraph endpoint, the site uses mock data automatically.

## Customization

Update your personal info in `src/lib/mock-data.ts`:

- Name and title
- Bio and tagline
- Social media links
- Skills list
- Email and location

Replace `public/cv.pdf` with your actual CV.

## Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or build for production:

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/
│   ├── layout/         # Header, Footer
│   ├── sections/       # Page sections (Hero, Skills, etc.)
│   └── ui/             # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utilities and data
└── store/              # Zustand stores
```

## License

MIT
