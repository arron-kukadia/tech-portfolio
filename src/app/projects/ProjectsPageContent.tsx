'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { CardSkeleton } from '@/components/cards/skeletons/CardSkeleton'
import { useProjects } from '@/hooks/useProjects'
import { fadeUp } from '@/lib/animations'

export const ProjectsPageContent = () => {
  const { data: projects, isLoading } = useProjects()

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            My{' '}
            <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            A collection of projects I&apos;ve built, from side projects to professional work. Each
            represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            projects?.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} variant="full" />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
