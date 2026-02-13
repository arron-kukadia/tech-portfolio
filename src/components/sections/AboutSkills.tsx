'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { fadeUp } from '@/lib/animations'

type AboutSkillsProps = {
  skills: string[]
}

export const AboutSkills = ({ skills }: AboutSkillsProps) => (
  <motion.div {...fadeUp(0.3)}>
    <h2 className="mb-6 text-2xl font-bold">Skills & Technologies</h2>
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.03 }}
            >
              <Badge variant="gradient">{skill}</Badge>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
)
