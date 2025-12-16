'use client'

import { useQuery } from '@tanstack/react-query'
import { hygraphClient, GET_BLOG_POSTS, GET_BLOG_POST } from '@/lib/hygraph'
import { BlogPost } from '@/lib/types'
import { FIVE_MINUTES } from '@/lib/constants'

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const data = await hygraphClient.request<{ posts: BlogPost[] }>(GET_BLOG_POSTS)
  return data.posts
}

const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const data = await hygraphClient.request<{ post: BlogPost }>(GET_BLOG_POST, { slug })
  return data.post
}

export const useBlogPosts = () =>
  useQuery({ queryKey: ['blog-posts'], queryFn: fetchBlogPosts, staleTime: FIVE_MINUTES })

export const useBlogPost = (slug: string) =>
  useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => fetchBlogPost(slug),
    staleTime: FIVE_MINUTES,
  })

export const useRecentBlogPosts = (limit = 3) =>
  useQuery({
    queryKey: ['blog-posts', 'recent', limit],
    queryFn: async () => (await fetchBlogPosts()).slice(0, limit),
    staleTime: FIVE_MINUTES,
  })
