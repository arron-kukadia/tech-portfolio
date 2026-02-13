'use client'

import { motion } from 'framer-motion'
import { Skeleton } from '@/components/ui/Skeleton'
import { SkillBadge } from '@/components/cards/SkillBadge'
import { usePersonalInfo } from '@/hooks/usePersonalInfo'
import { fadeInView, staggerContainer } from '@/lib/animations'

export const Skills = () => {
  const { data: info, isLoading } = usePersonalInfo()

  if (isLoading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="mx-auto mb-12 h-20 w-64" />
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
            <Skeleton className="h-12 w-24" />
            <Skeleton className="h-12 w-28" />
            <Skeleton className="h-12 w-20" />
            <Skeleton className="h-12 w-24" />
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-24" />
            <Skeleton className="h-12 w-28" />
            <Skeleton className="h-12 w-20" />
          </div>
        </div>
      </section>
    )
  }

  if (!info?.skills?.length) return null

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInView()} className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Skills & Technologies</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div {...staggerContainer(0.03)} className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
          {info.skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
