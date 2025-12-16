'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ProjectSkeleton } from '@/components/cards/skeletons/ProjectSkeleton'
import { useProjects } from '@/hooks/use-projects'
import { fadeUp } from '@/lib/animations'
import { Project } from '@/lib/types'

const ProjectPageCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div {...fadeUp(index * 0.1)}>
    <Card className="group flex h-full flex-col overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        {project.coverImage ? (
          <Image
            src={project.coverImage.url}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-violet-500/20 to-indigo-500/20">
            <span className="text-muted-foreground/30 text-4xl font-bold">{project.title[0]}</span>
          </div>
        )}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="gradient">Featured</Badge>
          </div>
        )}
      </div>
      <CardContent className="flex flex-1 flex-col p-6">
        <h2 className="mb-2 text-xl font-semibold transition-colors group-hover:text-violet-400">
          {project.title}
        </h2>
        <p className="text-muted-foreground mb-4 flex-1 text-sm">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="gradient">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="gradient" size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

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
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </>
          ) : (
            projects?.map((project, index) => (
              <ProjectPageCard key={project.id} project={project} index={index} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
