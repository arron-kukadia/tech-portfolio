'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, MapPin, Mail } from 'lucide-react'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { Button } from '@/components/ui/Button/Button'
import { Card, CardContent } from '@/components/ui/Card/Card'
import { Separator } from '@/components/ui/Separator/Separator'
import { fadeUp } from '@/lib/animations'
import { PersonalInfo } from '@/lib/types'
import styles from './AboutProfileCard.module.css'

type AboutProfileCardProps = {
  info: PersonalInfo
}

export const AboutProfileCard = ({ info }: AboutProfileCardProps) => (
  <motion.div {...fadeUp(0.1)} className={styles.wrapper}>
    <Card>
      <CardContent className={styles.body}>
        <div className={styles.layout}>
          <div className={styles.imageWrap}>
            {info.profileImage?.url ? (
              <Image
                src={info.profileImage.url}
                alt={info.name}
                width={128}
                height={128}
                sizes="128px"
                quality={85}
                className={styles.profileImage}
              />
            ) : (
              <div className={styles.fallbackImage}>
                {info.name[0]}
              </div>
            )}
          </div>
          <div className={styles.info}>
            <h2 className={styles.name}>{info.name}</h2>
            <p className={styles.title}>{info.title}</p>
            <div
              className={styles.bio}
              dangerouslySetInnerHTML={{ __html: info.bio.html }}
            />
            <div className={styles.details}>
              {info.location && (
                <span className={styles.detail}>
                  <MapPin className={styles.detailIcon} />
                  {info.location}
                </span>
              )}
              <span className={styles.detail}>
                <Mail className={styles.detailIcon} />
                {info.email}
              </span>
            </div>
          </div>
        </div>
        <Separator className={styles.separator} />
        <div className={styles.actions}>
          {info.cv?.url && (
            <Button variant="gradient" asChild>
              <a href={info.cv.url} download>
                <Download className={styles.actionIcon} />
                Download CV
              </a>
            </Button>
          )}
          {info.linkedin && (
            <Button variant="outline" asChild>
              <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
                <SiLinkedin className={styles.actionIcon} />
                LinkedIn
              </a>
            </Button>
          )}
          {info.github && (
            <Button variant="outline" asChild>
              <a href={info.github} target="_blank" rel="noopener noreferrer">
                <SiGithub className={styles.actionIcon} />
                GitHub
              </a>
            </Button>
          )}
          {info.email && (
            <Button variant="outline" asChild>
              <a href={`mailto:${info.email}`}>
                <Mail className={styles.actionIcon} />
                Email
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  </motion.div>
)
