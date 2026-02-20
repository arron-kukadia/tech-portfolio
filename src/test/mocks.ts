import { BlogPost, Project, Experience, PersonalInfo } from '@/lib/types'

export const mockPersonalInfo: PersonalInfo = {
  name: 'Test User',
  title: 'Senior Frontend Engineer',
  tagline: 'Building great web experiences',
  bio: { html: '<p>A passionate developer with 5+ years of experience.</p>' },
  bioShort: { html: '<p>A passionate developer.</p>' },
  location: 'London, UK',
  email: 'test@example.com',
  linkedin: 'https://linkedin.com/in/testuser',
  github: 'https://github.com/testuser',
  instagram: 'https://instagram.com/testuser',
  cv: { url: 'https://example.com/cv.pdf' },
  profileImage: { url: 'https://example.com/photo.jpg' },
  skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS'],
}

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Project Alpha',
    slug: 'project-alpha',
    description: 'A full-stack web application built with Next.js.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Prisma'],
    githubUrl: 'https://github.com/test/alpha',
    liveUrl: 'https://alpha.example.com',
    coverImage: { url: 'https://example.com/alpha.jpg' },
    featured: true,
  },
  {
    id: '2',
    title: 'Project Beta',
    slug: 'project-beta',
    description: 'A mobile app built with React Native.',
    technologies: ['React Native', 'TypeScript'],
    githubUrl: 'https://github.com/test/beta',
    featured: false,
  },
  {
    id: '3',
    title: 'Project Gamma',
    slug: 'project-gamma',
    description: 'An open source CLI tool.',
    technologies: ['Node.js', 'TypeScript'],
    liveUrl: 'https://gamma.example.com',
    featured: true,
  },
]

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    slug: 'getting-started-nextjs',
    excerpt: 'A comprehensive guide to building apps with Next.js.',
    publishedAtTime: '2025-01-15T10:00:00Z',
    coverImage: { url: 'https://example.com/nextjs.jpg' },
    tags: ['Next.js', 'React', 'Tutorial'],
  },
  {
    id: '2',
    title: 'TypeScript Best Practices',
    slug: 'typescript-best-practices',
    excerpt: 'Essential TypeScript patterns every developer should know.',
    publishedAtTime: '2025-02-20T10:00:00Z',
    tags: ['TypeScript', 'Best Practices'],
  },
  {
    id: '3',
    title: 'Building Design Systems',
    slug: 'building-design-systems',
    excerpt: 'How to build scalable design systems with React.',
    publishedAtTime: '2025-03-10T10:00:00Z',
    coverImage: { url: 'https://example.com/design.jpg' },
    tags: ['Design Systems', 'React'],
  },
]

export const mockBlogPost: BlogPost = {
  ...mockBlogPosts[0],
  content: {
    html: '<p>This is the full blog post content.</p><pre><code>const x = 1;</code></pre>',
  },
}

export const mockExperience: Experience[] = [
  {
    id: '1',
    company: 'Tech Corp',
    role: 'Senior Frontend Engineer',
    description: {
      html: '<ul><li>Led frontend architecture redesign</li><li>Mentored junior developers</li></ul>',
    },
    startDate: '2023-01-01T00:00:00Z',
    current: true,
    technologies: ['React', 'TypeScript', 'Next.js'],
  },
  {
    id: '2',
    company: 'Startup Inc',
    role: 'Frontend Developer',
    description: { html: '<p>Built the core product from scratch.</p>' },
    startDate: '2021-06-01T00:00:00Z',
    endDate: '2022-12-31T00:00:00Z',
    current: false,
    technologies: ['React', 'JavaScript'],
  },
]
