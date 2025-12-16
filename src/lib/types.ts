export type Project = {
  id: string
  title: string
  slug: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  coverImage?: { url: string }
  featured: boolean
}

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content?: { html: string }
  publishedAtTime: string
  coverImage?: { url: string }
  tags: string[]
}

export type Experience = {
  id: string
  company: string
  role: string
  description: { html: string }
  startDate: string
  endDate?: string
  current: boolean
  technologies: string[]
}

export type PersonalInfo = {
  name: string
  title: string
  tagline: string
  bio: string
  location: string
  email: string
  linkedin: string
  github: string
  instagram: string
  cv?: { url: string }
  profileImage?: { url: string }
  skills: string[]
}
