import type { Metadata } from 'next'
import { fetchBlogPost, fetchBlogPosts } from '@/lib/hygraph'
import { BlogPostContent } from './BlogPostContent'

type Props = {
  params: Promise<{ slug: string }>
}

export const revalidate = 3600

export const generateStaticParams = async () => {
  const posts = await fetchBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params
  const post = await fetchBlogPost(slug)

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
  const post = await fetchBlogPost(slug)

  return <BlogPostContent post={post} />
}

export default BlogPostPage
