import type { Metadata } from 'next'
import { fetchBlogPosts } from '@/lib/hygraph'
import { ISR_REVALIDATE_SECONDS } from '@/lib/constants'
import { BlogPageContent } from './BlogPageContent'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts, tutorials, and insights on web development, programming, and technology.',
}

export const revalidate = ISR_REVALIDATE_SECONDS

const BlogPage = async () => {
  const posts = await fetchBlogPosts()

  return <BlogPageContent posts={posts} />
}

export default BlogPage
