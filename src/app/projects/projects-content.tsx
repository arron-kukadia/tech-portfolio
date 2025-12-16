'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ProjectSkeleton } from '@/components/cards'
import { useProjects } from '@/hooks/use-projects'
import { fadeUp } from '@/lib/animations'
import { Project } from '@/lib/types'

const ProjectPageCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div {...fadeUp(index * 0.1)}>
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        {project.coverImage ? (
          <Image
            src={project.coverImage.url}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="h-full bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center">
            <span className="text-4xl font-bold text-muted-foreground/30">{project.title[0]}</span>
          </div>
        )}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="gradient">Featured</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <h2 className="text-xl font-semibold mb-2 group-hover:text-violet-400 transition-colors">
          {project.title}
        </h2>
        <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
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
        <motion.div {...fadeUp()} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of projects I&apos;ve built, from side projects to professional work.
            Each represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? [0, 1, 2, 3, 4, 5].map((i) => <ProjectSkeleton key={i} />)
            : projects?.map((project, index) => (
                <ProjectPageCard key={project.id} project={project} index={index} />
              ))}
        </div>
      </div>
    </div>
  )
}
