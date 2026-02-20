'use client'

import { motion } from 'framer-motion'
import { AboutProfileCard } from '@/components/sections/AboutProfileCard/AboutProfileCard'
import { AboutSkills } from '@/components/sections/AboutSkills/AboutSkills'
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline/ExperienceTimeline'
import { fadeUp } from '@/lib/animations'
import { Experience, PersonalInfo } from '@/lib/types'
import styles from './AboutPageContent.module.css'

type AboutPageContentProps = {
  info: PersonalInfo | null
  experience: Experience[]
}

export const AboutPageContent = ({ info, experience }: AboutPageContentProps) => {
  if (!info) return null

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <motion.div {...fadeUp()} className={styles.header}>
            <h1 className={styles.heading}>About</h1>
            <p className={styles.description}>{info.tagline}</p>
          </motion.div>

          <AboutProfileCard info={info} />
          <ExperienceTimeline experience={experience} />
          {info.skills?.length > 0 && <AboutSkills skills={info.skills} />}
        </div>
      </div>
    </div>
  )
}
