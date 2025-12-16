'use client'

import { motion } from 'framer-motion'
import { Download, MapPin, Mail, Briefcase, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { useExperience } from '@/hooks/use-experience'
import { usePersonalInfo } from '@/hooks/use-personal-info'
import { formatDateShort } from '@/lib/utils'

export const AboutPageContent = () => {
  const { data: experience, isLoading: expLoading } = useExperience()
  const { data: info, isLoading: infoLoading } = usePersonalInfo()

  if (infoLoading) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <Skeleton className="mx-auto h-16 w-64" />
            <Skeleton className="h-64 w-full" />
          </div>
        </div>
      </div>
    )
  }

  if (!info) return null

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
              About{' '}
              <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{info.tagline}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="flex-shrink-0">
                    <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 text-4xl font-bold text-white">
                      {info.name[0]}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-2 text-2xl font-bold">{info.name}</h2>
                    <p className="mb-4 font-medium text-violet-400">{info.title}</p>
                    <p className="text-muted-foreground mb-4">{info.bio}</p>
                    <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
                      {info.location && (
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {info.location}
                        </span>
                      )}
                      <span className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {info.email}
                      </span>
                    </div>
                  </div>
                </div>
                <Separator className="my-6" />
                <div className="flex flex-wrap gap-3">
                  {info.cv?.url && (
                    <Button variant="gradient" asChild>
                      <a href={info.cv.url} download>
                        <Download className="h-4 w-4" />
                        Download CV
                      </a>
                    </Button>
                  )}
                  {info.linkedin && (
                    <Button variant="outline" asChild>
                      <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </Button>
                  )}
                  {info.github && (
                    <Button variant="outline" asChild>
                      <a href={info.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <Briefcase className="h-6 w-6 text-violet-400" />
              Experience
            </h2>
            <div className="space-y-6">
              {expLoading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <Card key={i}>
                      <CardContent className="p-6">
                        <Skeleton className="mb-2 h-6 w-1/2" />
                        <Skeleton className="mb-4 h-4 w-1/3" />
                        <Skeleton className="mb-2 h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </CardContent>
                    </Card>
                  ))
                : experience?.map((exp, index) => (
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
                          <p className="text-muted-foreground mb-4">{exp.description}</p>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="mb-6 text-2xl font-bold">Skills & Technologies</h2>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3">
                  {info.skills?.map((skill: string, index: number) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.03 }}
                    >
                      <Badge
                        variant="outline"
                        className="hover:bg-accent px-4 py-2 text-sm transition-colors"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
