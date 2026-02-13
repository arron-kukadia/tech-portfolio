'use client'

import { motion } from 'framer-motion'
import { Skeleton } from '@/components/ui/Skeleton'
import { AboutProfileCard } from '@/components/sections/AboutProfileCard'
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline'
import { AboutSkills } from '@/components/sections/AboutSkills'
import { useExperience } from '@/hooks/useExperience'
import { usePersonalInfo } from '@/hooks/usePersonalInfo'
import { fadeUp } from '@/lib/animations'

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
          <motion.div {...fadeUp()} className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
              About{' '}
              <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{info.tagline}</p>
          </motion.div>

          <AboutProfileCard info={info} />
          <ExperienceTimeline experience={experience} isLoading={expLoading} />
          {info.skills?.length > 0 && <AboutSkills skills={info.skills} />}
        </div>
      </div>
    </div>
  )
}
