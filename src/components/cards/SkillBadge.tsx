'use client'

import { motion } from 'framer-motion'
import { scaleInView } from '@/lib/animations'

type SkillBadgeProps = {
  skill: string
  index: number
}

export const SkillBadge = ({ skill, index }: SkillBadgeProps) => (
  <motion.div
    {...scaleInView(index * 0.05)}
    whileHover={{ scale: 1.05 }}
    className="cursor-default rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 px-5 py-3 text-sm font-medium transition-colors hover:border-violet-500/40"
  >
    {skill}
  </motion.div>
)
