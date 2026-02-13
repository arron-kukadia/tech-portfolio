import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useBlogPosts, useBlogPost, useRecentBlogPosts } from './useBlogPosts'
import { createWrapper } from '@/test/test-utils'
import { mockBlogPosts, mockBlogPost } from '@/test/mocks'

vi.mock('@/lib/hygraph', () => ({
  hygraphClient: {
    request: vi.fn(),
  },
  GET_BLOG_POSTS: 'GET_BLOG_POSTS',
  GET_BLOG_POST: 'GET_BLOG_POST',
}))

import { hygraphClient } from '@/lib/hygraph'

const mockedRequest = vi.mocked(hygraphClient.request)

beforeEach(() => {
  vi.clearAllMocks()
})

describe('useBlogPosts', () => {
  it('fetches and returns all blog posts', async () => {
    mockedRequest.mockResolvedValueOnce({ posts: mockBlogPosts })

    const { result } = renderHook(() => useBlogPosts(), { wrapper: createWrapper() })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual(mockBlogPosts)
    expect(result.current.data).toHaveLength(3)
  })
})

describe('useBlogPost', () => {
  it('fetches a single blog post by slug', async () => {
    mockedRequest.mockResolvedValueOnce({ post: mockBlogPost })

    const { result } = renderHook(() => useBlogPost('getting-started-nextjs'), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual(mockBlogPost)
    expect(result.current.data?.content?.html).toContain('full blog post content')
  })

  it('returns null for non-existent post', async () => {
    mockedRequest.mockResolvedValueOnce({ post: null })

    const { result } = renderHook(() => useBlogPost('non-existent'), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toBeNull()
  })
})

describe('useRecentBlogPosts', () => {
  it('returns only the specified number of posts via select', async () => {
    mockedRequest.mockResolvedValueOnce({ posts: mockBlogPosts })

    const { result } = renderHook(() => useRecentBlogPosts(2), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toHaveLength(2)
  })

  it('defaults to 3 posts', async () => {
    mockedRequest.mockResolvedValueOnce({ posts: mockBlogPosts })

    const { result } = renderHook(() => useRecentBlogPosts(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toHaveLength(3)
  })
})
