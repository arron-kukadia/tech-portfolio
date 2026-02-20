'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge/Badge'
import { Card, CardContent } from '@/components/ui/Card/Card'
import { fadeUp, staggerOnMount, scaleInChild } from '@/lib/animations'
import styles from './AboutSkills.module.css'

type AboutSkillsProps = {
  skills: string[]
}

export const AboutSkills = ({ skills }: AboutSkillsProps) => (
  <motion.div {...fadeUp(0.3)}>
    <h2 className={styles.heading}>Skills & Technologies</h2>
    <Card>
      <CardContent className={styles.body}>
        <motion.div {...staggerOnMount(0.03)} className={styles.badges}>
          {skills.map((skill) => (
            <motion.div key={skill} variants={scaleInChild}>
              <Badge variant="gradient">{skill}</Badge>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  </motion.div>
)
