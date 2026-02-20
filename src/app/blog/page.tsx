import type { Metadata } from 'next'
import { fetchBlogPosts } from '@/lib/hygraph'
import { BlogPageContent } from './BlogPageContent/BlogPageContent'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts, tutorials, and insights on web development, programming, and technology.',
}

export const revalidate = 3600

const BlogPage = async () => {
  const posts = await fetchBlogPosts()

  return <BlogPageContent posts={posts} />
}

export default BlogPage
