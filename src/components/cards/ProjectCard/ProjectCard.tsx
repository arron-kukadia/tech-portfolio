'use client'

import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { Badge } from '@/components/ui/Badge/Badge'
import { Button } from '@/components/ui/Button/Button'
import { Card, CardContent } from '@/components/ui/Card/Card'
import { fadeInView, fadeUp } from '@/lib/animations'
import { Project } from '@/lib/types'
import styles from './ProjectCard.module.css'

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
      <Card className={styles.card}>
        <div className={styles.imageWrap}>
          {project.coverImage ? (
            <Image
              src={project.coverImage.url}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={styles.image}
            />
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderText}>{project.title[0]}</span>
            </div>
          )}
          {isCompact && <div className={styles.overlay} />}
          {!isCompact && project.featured && (
            <div className={styles.featuredBadge}>
              <Badge variant="gradient">Featured</Badge>
            </div>
          )}
        </div>
        <CardContent className={styles.body}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={clsx(styles.description, isCompact && styles.clamp)}>
            {project.description}
          </p>
          <div className={styles.tags}>
            {technologies.map((tech) => (
              <Badge key={tech} variant="gradient">
                {tech}
              </Badge>
            ))}
            {showOverflow && (
              <Badge variant="outline">+{project.technologies.length - 3}</Badge>
            )}
          </div>
          <div className={styles.actions}>
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <SiGithub className={styles.actionIcon} />
                  Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button variant={isCompact ? 'outline' : 'gradient'} size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className={styles.actionIcon} />
                  {isCompact ? 'Live' : 'View Live'}
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
