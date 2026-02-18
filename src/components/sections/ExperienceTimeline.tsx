'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { fadeUp } from '@/lib/animations'
import { formatDateShort } from '@/lib/utils'
import { Experience } from '@/lib/types'

type ExperienceTimelineProps = {
  experience: Experience[]
}

export const ExperienceTimeline = ({ experience }: ExperienceTimelineProps) => (
  <motion.div {...fadeUp(0.2)} className="mb-12">
    <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
      <Briefcase className="h-6 w-6 text-violet-400" />
      Experience
    </h2>
    <div className="space-y-6">
      {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-violet-500 to-indigo-500" />
              <CardContent className="p-6 pl-8">
                <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="font-medium text-violet-400">{exp.company}</p>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    {formatDateShort(exp.startDate)} -{' '}
                    {exp.current ? 'Present' : formatDateShort(exp.endDate!)}
                  </div>
                </div>
                <div
                  className="text-muted-foreground mb-4 text-sm [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_p]:mb-2"
                  dangerouslySetInnerHTML={{ __html: exp.description.html }}
                />
                <div className="flex flex-wrap gap-2">
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
