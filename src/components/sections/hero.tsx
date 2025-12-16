'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Instagram } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/lib/mock-data'
import { fadeUp } from '@/lib/animations'

const socialLinks = [
  { href: personalInfo.github, icon: Github, label: 'GitHub' },
  { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: personalInfo.instagram, icon: Instagram, label: 'Instagram' },
]

export const Hero = () => (
  <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div {...fadeUp()}>
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-6">
            {personalInfo.title}
          </span>
        </motion.div>

        <motion.h1 {...fadeUp(0.1)} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {personalInfo.bio}
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="gradient" size="lg" asChild>
            <Link href="/projects">
              View My Work
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={personalInfo.cvUrl} download>
              <Download className="h-5 w-5" />
              Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div {...fadeUp(0.4)} className="flex gap-4 justify-center">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 rounded-xl bg-accent hover:bg-accent/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
          />
        </div>
      </motion.div>
    </div>
  </section>
)
