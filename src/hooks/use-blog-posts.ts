'use client'

import { useQuery } from '@tanstack/react-query'
import { hygraphClient, GET_BLOG_POSTS, GET_BLOG_POST } from '@/lib/hygraph'
import { mockBlogPosts, BlogPost } from '@/lib/mock-data'

const USE_MOCK_DATA = !process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  if (USE_MOCK_DATA) return mockBlogPosts
  const data = await hygraphClient.request<{ posts: BlogPost[] }>(GET_BLOG_POSTS)
  return data.posts
}

const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
  if (USE_MOCK_DATA) return mockBlogPosts.find((p) => p.slug === slug) || null
  const data = await hygraphClient.request<{ post: BlogPost }>(GET_BLOG_POST, { slug })
  return data.post
}

export const useBlogPosts = () =>
  useQuery({ queryKey: ['blog-posts'], queryFn: fetchBlogPosts, staleTime: 1000 * 60 * 5 })

export const useBlogPost = (slug: string) =>
  useQuery({ queryKey: ['blog-post', slug], queryFn: () => fetchBlogPost(slug), staleTime: 1000 * 60 * 5 })

export const useRecentBlogPosts = (limit = 3) =>
  useQuery({
    queryKey: ['blog-posts', 'recent', limit],
    queryFn: async () => (await fetchBlogPosts()).slice(0, limit),
    staleTime: 1000 * 60 * 5,
  })
