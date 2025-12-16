'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/mock-data'
import { fadeInView, scaleInView } from '@/lib/animations'

const SkillBadge = ({ skill, index }: { skill: string; index: number }) => (
  <motion.div
    {...scaleInView(index * 0.05)}
    whileHover={{ scale: 1.05 }}
    className="cursor-default rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 px-5 py-3 text-sm font-medium transition-colors hover:border-violet-500/40"
  >
    {skill}
  </motion.div>
)

export const Skills = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div {...fadeInView()} className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Skills & Technologies</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Technologies I work with to bring ideas to life.
        </p>
      </motion.div>

      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
        {personalInfo.skills.map((skill, index) => (
          <SkillBadge key={skill} skill={skill} index={index} />
        ))}
      </div>
    </div>
  </section>
)
