'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { Badge } from '@/components/ui/Badge/Badge'
import { Button } from '@/components/ui/Button/Button'
import { Card, CardContent } from '@/components/ui/Card/Card'
import { fadeUp } from '@/lib/animations'
import { Project } from '@/lib/types'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  project: Project
  index?: number
}

export const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {

  return (
    <motion.div {...fadeUp(index * 0.1)}>
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
        </div>
        <CardContent className={styles.body}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>
            {project.description}
          </p>
          <div className={styles.tags}>
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="gradient">
                {tech}
              </Badge>
            ))}
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
              <Button variant="gradient" size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className={styles.actionIcon} />
                  View Live
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
