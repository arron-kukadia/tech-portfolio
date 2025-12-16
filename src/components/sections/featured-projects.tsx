'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProjectCard, ProjectSkeleton } from '@/components/cards'
import { useFeaturedProjects } from '@/hooks/use-projects'
import { fadeInView } from '@/lib/animations'

export const FeaturedProjects = () => {
  const { data: projects, isLoading } = useFeaturedProjects()

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInView()} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work that showcases my skills and passion for building great products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? [0, 1, 2].map((i) => <ProjectSkeleton key={i} />)
            : projects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
        </div>

        <motion.div {...fadeInView(0.3)} className="text-center mt-12">
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
}
