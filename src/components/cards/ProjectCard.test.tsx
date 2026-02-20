import { screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { mockProjects } from '@/test/mocks'
import { renderWithProviders } from '@/test/test-utils'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

vi.mock('next/image', () => ({
  default: (props: any) => <img {...props} />,
}))

describe('ProjectCard', () => {
  const project = mockProjects[0]

  it('renders project title and description', () => {
    renderWithProviders(<ProjectCard project={project} />)

    expect(screen.getByText('Project Alpha')).toBeInTheDocument()
    expect(screen.getByText('A full-stack web application built with Next.js.')).toBeInTheDocument()
  })

  it('renders technology badges', () => {
    renderWithProviders(<ProjectCard project={project} variant="full" />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Prisma')).toBeInTheDocument()
  })

  it('limits technologies to 3 in compact variant with overflow badge', () => {
    renderWithProviders(<ProjectCard project={project} variant="compact" />)

    expect(screen.getByText('+1')).toBeInTheDocument()
  })

  it('renders GitHub link when githubUrl is provided', () => {
    renderWithProviders(<ProjectCard project={project} />)

    const githubLink = screen.getByRole('link', { name: /code/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test/alpha')
    expect(githubLink).toHaveAttribute('target', '_blank')
  })

  it('renders live demo link when liveUrl is provided', () => {
    renderWithProviders(<ProjectCard project={project} />)

    const liveLink = screen.getByRole('link', { name: /live/i })
    expect(liveLink).toHaveAttribute('href', 'https://alpha.example.com')
  })

  it('does not render GitHub link when githubUrl is missing', () => {
    const projectWithoutGithub = { ...mockProjects[2] }
    renderWithProviders(<ProjectCard project={projectWithoutGithub} />)

    expect(screen.queryByText('Code')).not.toBeInTheDocument()
  })

  it('renders cover image when provided', () => {
    renderWithProviders(<ProjectCard project={project} />)

    const img = screen.getByAltText('Project Alpha')
    expect(img).toHaveAttribute('src', 'https://example.com/alpha.jpg')
  })

  it('renders fallback initial when no cover image', () => {
    renderWithProviders(<ProjectCard project={mockProjects[1]} />)

    expect(screen.getByText('P')).toBeInTheDocument()
  })

  it('shows Featured badge in full variant when project is featured', () => {
    renderWithProviders(<ProjectCard project={project} variant="full" />)

    expect(screen.getByText('Featured')).toBeInTheDocument()
  })
})
