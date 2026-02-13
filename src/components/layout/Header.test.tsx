import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from '@/components/layout/Header'
import { renderWithProviders } from '@/test/test-utils'
import { mockPersonalInfo } from '@/test/mocks'

const mockPathname = '/'

vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname,
}))

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children }: Record<string, unknown>) => <div>{children as React.ReactNode}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

vi.mock('@/hooks/usePersonalInfo', () => ({
  usePersonalInfo: () => ({ data: mockPersonalInfo, isLoading: false }),
}))

describe('Header', () => {
  it('renders the site name from personal info', () => {
    renderWithProviders(<Header />)

    expect(screen.getByText('Test User')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    renderWithProviders(<Header />)

    expect(screen.getAllByRole('link', { name: 'Home' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Projects' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Blog' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'About & Experience' }).length).toBeGreaterThan(0)
  })

  it('renders Download CV link when CV url exists', () => {
    renderWithProviders(<Header />)

    const cvLinks = screen.getAllByRole('link', { name: /download cv/i })
    expect(cvLinks.length).toBeGreaterThan(0)
    expect(cvLinks[0]).toHaveAttribute('href', 'https://example.com/cv.pdf')
  })

  it('renders theme toggle buttons (desktop + mobile)', () => {
    renderWithProviders(<Header />)

    const toggleButtons = screen.getAllByLabelText('Toggle theme')
    expect(toggleButtons).toHaveLength(2)
  })

  it('renders mobile menu toggle button', () => {
    renderWithProviders(<Header />)

    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Header />)

    const menuButton = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(menuButton)

    expect(screen.getByRole('button', { name: 'Toggle menu' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Home' }).length).toBeGreaterThanOrEqual(2)
  })
})
