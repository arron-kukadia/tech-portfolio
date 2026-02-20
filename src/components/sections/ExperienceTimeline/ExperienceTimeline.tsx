'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/Badge/Badge'
import { Card, CardContent } from '@/components/ui/Card/Card'
import { fadeUp } from '@/lib/animations'
import { Experience } from '@/lib/types'
import { formatDateShort } from '@/lib/utils'
import styles from './ExperienceTimeline.module.css'

type ExperienceTimelineProps = {
  experience: Experience[]
}

export const ExperienceTimeline = ({ experience }: ExperienceTimelineProps) => (
  <motion.div {...fadeUp(0.2)} className={styles.wrapper}>
    <h2 className={styles.sectionHeading}>
      <Briefcase className={styles.sectionIcon} />
      Experience
    </h2>
    <div className={styles.list}>
      {experience.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card className={styles.card}>
            <div className={styles.accent} />
            <CardContent className={styles.cardBody}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <div className={styles.date}>
                  <Calendar className={styles.dateIcon} />
                  {formatDateShort(exp.startDate)} -{' '}
                  {exp.current ? 'Present' : formatDateShort(exp.endDate!)}
                </div>
              </div>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: exp.description.html }}
              />
              <div className={styles.tags}>
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="gradient">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </motion.div>
)
