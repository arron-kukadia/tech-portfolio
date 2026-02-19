'use client'

import { motion } from 'framer-motion'
import { AboutProfileCard } from '@/components/sections/AboutProfileCard'
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline'
import { AboutSkills } from '@/components/sections/AboutSkills'
import { Experience, PersonalInfo } from '@/lib/types'
import { fadeUp } from '@/lib/animations'

type AboutPageContentProps = {
  info: PersonalInfo | null
  experience: Experience[]
}

export const AboutPageContent = ({ info, experience }: AboutPageContentProps) => {
  if (!info) return null

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp()} className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
              About{' '}
              <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{info.tagline}</p>
          </motion.div>

          <AboutProfileCard info={info} />
          <ExperienceTimeline experience={experience} />
          {info.skills?.length > 0 && <AboutSkills skills={info.skills} />}
        </div>
      </div>
    </div>
  )
}
