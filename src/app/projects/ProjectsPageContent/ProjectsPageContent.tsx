'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/cards/ProjectCard/ProjectCard'
import { fadeUp } from '@/lib/animations'
import { Project } from '@/lib/types'
import styles from './ProjectsPageContent.module.css'

type ProjectsPageContentProps = {
  projects: Project[]
}

export const ProjectsPageContent = ({ projects }: ProjectsPageContentProps) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <motion.div {...fadeUp()} className={styles.header}>
        <h1 className={styles.heading}>Projects</h1>
        <p className={styles.description}>
          My side projects.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  </div>
)
