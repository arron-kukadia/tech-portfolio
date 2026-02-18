import type { Metadata } from 'next'
import { fetchProjects } from '@/lib/hygraph'
import { ISR_REVALIDATE_SECONDS } from '@/lib/constants'
import { ProjectsPageContent } from './ProjectsPageContent'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my portfolio of web development projects.',
}

export const revalidate = ISR_REVALIDATE_SECONDS

const ProjectsPage = async () => {
  const projects = await fetchProjects()

  return <ProjectsPageContent projects={projects} />
}

export default ProjectsPage
