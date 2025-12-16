import type { Metadata } from 'next'
import { BlogPageContent } from './BlogPageContent'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts, tutorials, and insights on web development, programming, and technology.',
}

const BlogPage = () => <BlogPageContent />

export default BlogPage
