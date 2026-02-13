'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download, MapPin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Separator } from '@/components/ui/Separator'
import { fadeUp } from '@/lib/animations'
import { PersonalInfo } from '@/lib/types'

type AboutProfileCardProps = {
  info: PersonalInfo
}

export const AboutProfileCard = ({ info }: AboutProfileCardProps) => (
  <motion.div {...fadeUp(0.1)} className="mb-12">
    <Card>
      <CardContent className="p-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex-shrink-0">
            {info.profileImage?.url ? (
              <Image
                src={info.profileImage.url}
                alt={info.name}
                width={128}
                height={128}
                sizes="128px"
                quality={85}
                className="h-32 w-32 rounded-2xl object-cover"
              />
            ) : (
              <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 text-4xl font-bold text-white">
                {info.name[0]}
              </div>
            )}
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
)
