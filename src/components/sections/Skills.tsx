'use client'

import { motion } from 'framer-motion'
import { SkillBadge } from '@/components/cards/SkillBadge'
import { fadeInView, staggerContainer } from '@/lib/animations'

type SkillsProps = {
  skills: string[]
}

export const Skills = ({ skills }: SkillsProps) => {
  if (!skills.length) return null

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
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
