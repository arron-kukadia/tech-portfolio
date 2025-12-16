import type { Metadata } from 'next'
import { hygraphClient, GET_BLOG_POST } from '@/lib/hygraph'
import { BlogPost } from '@/lib/types'
import { BlogPostContent } from './blog-post-content'

type Props = {
  params: Promise<{ slug: string }>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params
  const data = await hygraphClient.request<{ post: BlogPost | null }>(GET_BLOG_POST, { slug })

  if (!data.post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: data.post.title,
    description: data.post.excerpt,
  }
}

const BlogPostPage = async ({ params }: Props) => {
  const { slug } = await params
  return <BlogPostContent slug={slug} />
}

export default BlogPostPage
