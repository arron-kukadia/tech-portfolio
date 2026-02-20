'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Download, Mail } from 'lucide-react'
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si'
import { Button } from '@/components/ui/Button/Button'
import { fadeUp } from '@/lib/animations'
import { PersonalInfo } from '@/lib/types'
import styles from './Hero.module.css'

type HeroProps = {
  info: PersonalInfo | null
}

export const Hero = ({ info }: HeroProps) => {
  if (!info) return null

  const socialLinks = [
    { href: info.github, icon: SiGithub, label: 'GitHub' },
    { href: info.linkedin, icon: SiLinkedin, label: 'LinkedIn' },
    { href: info.instagram, icon: SiInstagram, label: 'Instagram' },
    { href: `mailto:${info.email}`, icon: Mail, label: 'Email' },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {info.profileImage?.url && (
            <motion.div {...fadeUp(0.1)} className={styles.imageWrapper}>
              <Image
                src={info.profileImage.url}
                alt={info.name}
                width={420}
                height={420}
                quality={90}
                priority
                className={styles.profileImage}
              />
            </motion.div>
          )}

          <div className={styles.textColumn}>
            <motion.p {...fadeUp()} className={styles.subtitle}>
              {info.title}
            </motion.p>

            <motion.h1 {...fadeUp(0.1)} className={styles.heading}>
              {info.name}
              <span className={styles.accent}>.</span>
            </motion.h1>

            <motion.div
              {...fadeUp(0.2)}
              className={styles.bio}
              dangerouslySetInnerHTML={{ __html: info.bioShort.html }}
            />

            <motion.div {...fadeUp(0.3)} className={styles.actions}>
              <Button variant="gradient" size="lg" className={styles.actionBtn}>
                <Link href="/projects">
                  See my work
                  <ArrowRight className={styles.socialIcon} />
                </Link>
              </Button>
              {info.cv?.url && (
                <Button variant="outline" size="lg" className={styles.actionBtn}>
                  <a href={info.cv.url} download>
                    <Download className={styles.socialIcon} />
                    CV
                  </a>
                </Button>
              )}
            </motion.div>

            <motion.div {...fadeUp(0.4)} className={styles.socialLinks}>
              {socialLinks.map(
                ({ href, icon: Icon, label }) =>
                  href && (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label={label}
                    >
                      <Icon className={styles.socialIcon} />
                    </a>
                  )
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <div className={styles.scrollArrow}>
        <ChevronDown className={styles.scrollArrowIcon} />
      </div>
    </section>
  )
}
