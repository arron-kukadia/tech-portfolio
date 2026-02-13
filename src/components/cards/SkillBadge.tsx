'use client'

import { motion } from 'framer-motion'
import { scaleInChild } from '@/lib/animations'

type SkillBadgeProps = {
  skill: string
}

export const SkillBadge = ({ skill }: SkillBadgeProps) => (
  <motion.div
    variants={scaleInChild}
    className="cursor-default rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 px-5 py-3 text-sm font-medium transition-all hover:scale-105 hover:border-violet-500/40"
  >
    {skill}
  </motion.div>
)
