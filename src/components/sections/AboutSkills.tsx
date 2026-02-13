'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { fadeUp, staggerOnMount, scaleInChild } from '@/lib/animations'

type AboutSkillsProps = {
  skills: string[]
}

export const AboutSkills = ({ skills }: AboutSkillsProps) => (
  <motion.div {...fadeUp(0.3)}>
    <h2 className="mb-6 text-2xl font-bold">Skills & Technologies</h2>
    <Card>
      <CardContent className="p-6">
        <motion.div {...staggerOnMount(0.03)} className="flex flex-wrap gap-3">
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
