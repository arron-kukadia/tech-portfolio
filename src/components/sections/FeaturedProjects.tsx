'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { Button } from '@/components/ui/Button'
import { fadeInView } from '@/lib/animations'
import { Project } from '@/lib/types'

type FeaturedProjectsProps = {
  projects: Project[]
}

export const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => (
  <section className="bg-accent/30 py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div {...fadeInView()} className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Featured Projects</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          A selection of my recent work that showcases my skills and passion for building great
          products.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <motion.div {...fadeInView(0.3)} className="mt-12 text-center">
        <Button variant="gradient" size="lg" asChild>
          <Link href="/projects">
            View All Projects
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </div>
  </section>
)
