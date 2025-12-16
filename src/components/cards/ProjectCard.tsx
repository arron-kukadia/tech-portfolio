'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { fadeInView, fadeUp } from '@/lib/animations'
import { Project } from '@/lib/types'

type ProjectCardProps = {
  project: Project
  index?: number
  variant?: 'compact' | 'full'
}

export const ProjectCard = ({ project, index = 0, variant = 'compact' }: ProjectCardProps) => {
  const isCompact = variant === 'compact'
  const animation = isCompact ? fadeInView(index * 0.1) : fadeUp(index * 0.1)
  const technologies = isCompact ? project.technologies.slice(0, 3) : project.technologies
  const showOverflow = isCompact && project.technologies.length > 3

  return (
    <motion.div {...animation}>
      <Card className="group flex h-full flex-col overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          {project.coverImage ? (
            <Image
              src={project.coverImage.url}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-violet-500/20 to-indigo-500/20">
              <span className="text-muted-foreground/30 text-4xl font-bold">{project.title[0]}</span>
            </div>
          )}
          {isCompact && (
            <div className="from-background/80 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          )}
          {!isCompact && project.featured && (
            <div className="absolute top-3 right-3">
              <Badge variant="gradient">Featured</Badge>
            </div>
          )}
        </div>
        <CardContent className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-violet-400">
            {project.title}
          </h3>
          <p className={`text-muted-foreground mb-4 text-sm ${isCompact ? 'line-clamp-2' : ''} flex-1`}>
            {project.description}
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="gradient">
                {tech}
              </Badge>
            ))}
            {showOverflow && (
              <Badge variant="outline">+{project.technologies.length - 3}</Badge>
            )}
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
              <Button variant={isCompact ? 'outline' : 'gradient'} size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  {isCompact ? 'Live' : 'Live Demo'}
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
