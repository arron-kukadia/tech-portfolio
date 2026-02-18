import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'
import { Footer } from '@/components/layout/Footer'
import { renderWithProviders } from '@/test/test-utils'
import { mockPersonalInfo } from '@/test/mocks'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

describe('Footer', () => {
  it('renders the site name', () => {
    renderWithProviders(<Footer info={mockPersonalInfo} />)

    expect(screen.getByText('Test User')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    renderWithProviders(<Footer info={mockPersonalInfo} />)

    expect(screen.getByText('Building great web experiences')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    renderWithProviders(<Footer info={mockPersonalInfo} />)

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About & Experience' })).toBeInTheDocument()
  })

  it('renders social links with correct hrefs', () => {
    renderWithProviders(<Footer info={mockPersonalInfo} />)

    expect(screen.getByLabelText('GitHub')).toHaveAttribute('href', 'https://github.com/testuser')
    expect(screen.getByLabelText('LinkedIn')).toHaveAttribute('href', 'https://linkedin.com/in/testuser')
    expect(screen.getByLabelText('Instagram')).toHaveAttribute('href', 'https://instagram.com/testuser')
    expect(screen.getByLabelText('Email')).toHaveAttribute('href', 'mailto:test@example.com')
  })

  it('renders social links with noopener noreferrer', () => {
    renderWithProviders(<Footer info={mockPersonalInfo} />)

    const githubLink = screen.getByLabelText('GitHub')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(githubLink).toHaveAttribute('target', '_blank')
  })

  it('renders copyright with current year', () => {
    renderWithProviders(<Footer info={mockPersonalInfo} />)

    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument()
  })

})

describe('Footer without personal info', () => {
  it('renders nothing when no personal info is available', () => {
    const { container } = renderWithProviders(<Footer info={null} />)

    expect(container.innerHTML).toBe('')
  })
})
