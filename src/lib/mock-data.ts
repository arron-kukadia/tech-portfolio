import { Project, BlogPost, Experience, PersonalInfo } from './types'

export type { Project, BlogPost, Experience, PersonalInfo }

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    description:
      'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for scalability and performance.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    },
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    slug: 'task-management-app',
    description:
      'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
    githubUrl: 'https://github.com/username/taskmanager',
    liveUrl: 'https://taskmanager-demo.vercel.app',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    },
    featured: true,
  },
  {
    id: '3',
    title: 'AI Content Generator',
    slug: 'ai-content-generator',
    description:
      'An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy using OpenAI GPT models.',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'React', 'TailwindCSS'],
    githubUrl: 'https://github.com/username/ai-content',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    },
    featured: true,
  },
  {
    id: '4',
    title: 'Fitness Tracking Dashboard',
    slug: 'fitness-tracking-dashboard',
    description:
      'A comprehensive fitness tracking application with workout logging, progress visualization, and personalized recommendations.',
    technologies: ['Vue.js', 'Firebase', 'Chart.js', 'PWA'],
    githubUrl: 'https://github.com/username/fitness-tracker',
    liveUrl: 'https://fitness-demo.vercel.app',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
    },
    featured: false,
  },
  {
    id: '5',
    title: 'Real Estate Marketplace',
    slug: 'real-estate-marketplace',
    description:
      'A property listing platform with advanced search filters, virtual tours, and mortgage calculator integration.',
    technologies: ['Next.js', 'Supabase', 'Mapbox', 'Cloudinary'],
    githubUrl: 'https://github.com/username/realestate',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    },
    featured: false,
  },
  {
    id: '6',
    title: 'Weather Analytics Platform',
    slug: 'weather-analytics',
    description:
      'A data visualization dashboard for weather patterns with historical analysis and predictive modeling.',
    technologies: ['D3.js', 'Python', 'Flask', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/weather-analytics',
    liveUrl: 'https://weather-analytics.vercel.app',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    },
    featured: false,
  },
]

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications with Modern Patterns',
    slug: 'building-scalable-react-apps',
    excerpt:
      'Learn how to structure your React applications for scalability using compound components, custom hooks, and state management best practices.',
    content: {
      html: '<p>In this comprehensive guide, we will explore modern patterns for building scalable React applications...</p>',
    },
    publishedAt: '2024-01-15T10:00:00Z',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    },
    tags: ['React', 'JavaScript', 'Architecture'],
  },
  {
    id: '2',
    title: 'The Complete Guide to TypeScript Generics',
    slug: 'typescript-generics-guide',
    excerpt:
      'Master TypeScript generics with practical examples and real-world use cases that will level up your type-safety game.',
    content: {
      html: '<p>TypeScript generics are one of the most powerful features of the language...</p>',
    },
    publishedAt: '2024-01-08T10:00:00Z',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
    },
    tags: ['TypeScript', 'JavaScript', 'Tutorial'],
  },
  {
    id: '3',
    title: 'Optimizing Next.js Applications for Performance',
    slug: 'nextjs-performance-optimization',
    excerpt:
      'Discover techniques to optimize your Next.js applications including image optimization, code splitting, and caching strategies.',
    content: {
      html: '<p>Performance is crucial for modern web applications...</p>',
    },
    publishedAt: '2023-12-20T10:00:00Z',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    tags: ['Next.js', 'Performance', 'Web Development'],
  },
  {
    id: '4',
    title: 'Introduction to Headless CMS with Hygraph',
    slug: 'headless-cms-hygraph',
    excerpt:
      'Learn how to integrate Hygraph (formerly GraphCMS) into your Next.js application for flexible content management.',
    content: {
      html: '<p>Headless CMS solutions have revolutionized content management...</p>',
    },
    publishedAt: '2023-12-10T10:00:00Z',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop',
    },
    tags: ['CMS', 'Hygraph', 'Next.js'],
  },
]

export const mockExperience: Experience[] = [
  {
    id: '1',
    company: 'Tech Innovations Inc.',
    role: 'Senior Frontend Developer',
    description:
      'Led the frontend development team in building scalable web applications. Implemented design systems, improved performance by 40%, and mentored junior developers.',
    startDate: '2022-03-01',
    current: true,
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
  },
  {
    id: '2',
    company: 'Digital Solutions Ltd.',
    role: 'Full Stack Developer',
    description:
      'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to deliver pixel-perfect implementations.',
    startDate: '2020-06-01',
    endDate: '2022-02-28',
    current: false,
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: '3',
    company: 'StartUp Hub',
    role: 'Junior Developer',
    description:
      'Started my professional journey building MVPs for early-stage startups. Gained experience in agile methodologies and rapid prototyping.',
    startDate: '2019-01-01',
    endDate: '2020-05-31',
    current: false,
    technologies: ['JavaScript', 'React', 'Firebase', 'CSS'],
  },
]

export const personalInfo = {
  name: 'Arron',
  title: 'Full Stack Developer',
  tagline: 'Building digital experiences that matter',
  bio: 'I am a passionate full-stack developer with expertise in building modern, scalable web applications. I love turning complex problems into simple, elegant solutions.',
  location: 'London, UK',
  email: 'arronkukadia1@gmail.com',
  linkedin: 'https://uk.linkedin.com/in/arron-kukadia',
  github: 'https://github.com/arron-kukadia',
  instagram: 'https://www.instagram.com/ak1photography',
  cvUrl: '/cv.pdf',
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'GraphQL',
    'Docker',
    'AWS',
    'TailwindCSS',
  ],
}
