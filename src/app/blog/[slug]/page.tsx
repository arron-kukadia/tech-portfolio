import type { Metadata } from 'next'
import { mockBlogPosts } from '@/lib/mock-data'
import { BlogPostContent } from './blog-post-content'

type Props = {
  params: Promise<{ slug: string }>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params
  const post = mockBlogPosts.find((p) => p.slug === slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

const BlogPostPage = async ({ params }: Props) => {
  const { slug } = await params
  return <BlogPostContent slug={slug} />
}

export default BlogPostPage
