'use client'

import { motion } from 'framer-motion'
import { scaleInChild } from '@/lib/animations'

type SkillBadgeProps = {
  skill: string
}

export const SkillBadge = ({ skill }: SkillBadgeProps) => (
  <motion.div
    variants={scaleInChild}
    className="cursor-default rounded-xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-blue-500/10 px-5 py-3 text-sm font-medium transition-[transform,border-color] hover:scale-105 hover:border-sky-500/40"
  >
    {skill}
  </motion.div>
)
