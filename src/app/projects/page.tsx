import type { Metadata } from 'next'
import { ProjectsPageContent } from './ProjectsPageContent'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my portfolio of web development projects.',
}

const ProjectsPage = () => <ProjectsPageContent />

export default ProjectsPage
