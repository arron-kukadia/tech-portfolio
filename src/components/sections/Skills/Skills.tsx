'use client'

import { motion } from 'framer-motion'
import { SkillBadge } from '@/components/cards/SkillBadge/SkillBadge'
import { fadeInView, staggerContainer } from '@/lib/animations'
import styles from './Skills.module.css'

type SkillsProps = {
  skills: string[]
}

export const Skills = ({ skills }: SkillsProps) => {
  if (!skills.length) return null

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div {...fadeInView()} className={styles.header}>
          <h2 className={styles.heading}>Toolbox</h2>
          <p className={styles.description}>What I reach for day-to-day.</p>
        </motion.div>

        <motion.div {...staggerContainer(0.03)} className={styles.badges}>
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
