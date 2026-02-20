import { screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { PostCard } from '@/components/cards/PostCard/PostCard'
import { mockBlogPosts } from '@/test/mocks'
import { renderWithProviders } from '@/test/test-utils'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children }: Record<string, unknown>) => <div>{children as React.ReactNode}</div>,
  },
}))

vi.mock('next/image', () => ({
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: Record<string, unknown>) => (
    <img alt={props.alt as string} src={props.src as string} />
  ),
}))

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

describe('PostCard', () => {
  const post = mockBlogPosts[0]

  it('renders post title and excerpt', () => {
    renderWithProviders(<PostCard post={post} />)

    expect(screen.getByText('Getting Started with Next.js')).toBeInTheDocument()
    expect(
      screen.getByText('A comprehensive guide to building apps with Next.js.')
    ).toBeInTheDocument()
  })

  it('renders formatted date', () => {
    renderWithProviders(<PostCard post={post} />)

    expect(screen.getByText(/15 Jan 2025/)).toBeInTheDocument()
  })

  it('renders tags (limited to 3)', () => {
    renderWithProviders(<PostCard post={post} />)

    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Tutorial')).toBeInTheDocument()
  })

  it('links to the correct blog post slug', () => {
    renderWithProviders(<PostCard post={post} />)

    const link = screen.getByRole('link', { name: /getting started with next\.js/i })
    expect(link).toHaveAttribute('href', '/blog/getting-started-nextjs')
  })

  it('renders cover image when provided', () => {
    renderWithProviders(<PostCard post={post} />)

    const img = screen.getByAltText('Getting Started with Next.js')
    expect(img).toHaveAttribute('src', 'https://example.com/nextjs.jpg')
  })

  it('renders fallback initial when no cover image', () => {
    renderWithProviders(<PostCard post={mockBlogPosts[1]} />)

    expect(screen.getByText('T')).toBeInTheDocument()
  })
})
