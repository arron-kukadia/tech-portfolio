'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Instagram } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { usePersonalInfo } from '@/hooks/use-personal-info'
import { fadeUp } from '@/lib/animations'

export const Hero = () => {
  const { data: info, isLoading } = usePersonalInfo()

  const socialLinks = [
    { href: info?.github, icon: Github, label: 'GitHub' },
    { href: info?.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: info?.instagram, icon: Instagram, label: 'Instagram' },
  ]

  if (isLoading) {
    return (
      <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="mx-auto mb-6 h-10 w-48" />
          <Skeleton className="mx-auto mb-6 h-16 w-96" />
          <Skeleton className="mx-auto mb-8 h-20 w-full max-w-2xl" />
        </div>
      </section>
    )
  }

  if (!info) return null

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div {...fadeUp()}>
            <span className="mb-6 inline-block rounded-full bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400">
              {info.title}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {info.name}
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg sm:text-xl"
          >
            {info.bio}
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="mb-12 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button variant="gradient" size="lg" asChild>
              <Link href="/projects">
                View My Work
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            {info.cv?.url && (
              <Button variant="outline" size="lg" asChild>
                <a href={info.cv.url} download>
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </Button>
            )}
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="flex justify-center gap-4">
            {socialLinks.map(
              ({ href, icon: Icon, label }) =>
                href && (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent hover:bg-accent/80 text-muted-foreground hover:text-foreground flex h-12 w-12 items-center justify-center rounded-xl transition-all hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                )
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <div className="border-muted-foreground/30 flex h-10 w-6 items-start justify-center rounded-full border-2 p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="bg-muted-foreground/50 h-1.5 w-1.5 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
