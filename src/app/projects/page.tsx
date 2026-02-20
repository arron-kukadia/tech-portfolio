import type { Metadata } from 'next'
import { fetchProjects } from '@/lib/hygraph'
import { ProjectsPageContent } from './ProjectsPageContent/ProjectsPageContent'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web development projects.',
}

export const revalidate = 3600

const ProjectsPage = async () => {
  const projects = await fetchProjects()

  return <ProjectsPageContent projects={projects} />
}

export default ProjectsPage
