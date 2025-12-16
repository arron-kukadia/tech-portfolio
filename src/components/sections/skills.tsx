'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/mock-data'
import { fadeInView, scaleInView } from '@/lib/animations'

const SkillBadge = ({ skill, index }: { skill: string; index: number }) => (
  <motion.div
    {...scaleInView(index * 0.05)}
    whileHover={{ scale: 1.05 }}
    className="px-5 py-3 rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/20 text-sm font-medium hover:border-violet-500/40 transition-colors cursor-default"
  >
    {skill}
  </motion.div>
)

export const Skills = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div {...fadeInView()} className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies I work with to bring ideas to life.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {personalInfo.skills.map((skill, index) => (
          <SkillBadge key={skill} skill={skill} index={index} />
        ))}
      </div>
    </div>
  </section>
)
