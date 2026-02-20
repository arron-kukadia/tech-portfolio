'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ProjectCard } from '@/components/cards/ProjectCard/ProjectCard'
import { Button } from '@/components/ui/Button/Button'
import { fadeInView } from '@/lib/animations'
import { Project } from '@/lib/types'
import styles from './FeaturedProjects.module.css'

type FeaturedProjectsProps = {
  projects: Project[]
}

export const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => (
  <section className={styles.section}>
    <div className={styles.container}>
      <motion.div {...fadeInView()} className={styles.header}>
        <div>
          <h2 className={styles.heading}>Selected work</h2>
          <p className={styles.description}>Things I&apos;ve built recently.</p>
        </div>
        <Button variant="ghost" className={styles.desktopLink}>
          <Link href="/projects">
            All
            <ArrowRight className={styles.icon} />
          </Link>
        </Button>
      </motion.div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className={styles.mobileLink}>
        <Button variant="outline">
          <Link href="/projects">
            All projects
            <ArrowRight className={styles.icon} />
          </Link>
        </Button>
      </div>
    </div>
  </section>
)
