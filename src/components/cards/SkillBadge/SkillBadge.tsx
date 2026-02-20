'use client'

import { motion } from 'framer-motion'
import { scaleInChild } from '@/lib/animations'
import styles from './SkillBadge.module.css'

type SkillBadgeProps = {
  skill: string
}

export const SkillBadge = ({ skill }: SkillBadgeProps) => (
  <motion.div variants={scaleInChild} className={styles.badge}>
    {skill}
  </motion.div>
)
