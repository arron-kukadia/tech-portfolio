import type { Metadata } from 'next'
import { BlogPageContent } from './blog-content'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts, tutorials, and insights on web development, programming, and technology.',
}

export default function BlogPage() {
  return <BlogPageContent />
}
