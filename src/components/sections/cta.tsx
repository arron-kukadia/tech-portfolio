'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/lib/mock-data'
import { fadeInView } from '@/lib/animations'

export const CTA = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div {...fadeInView()} className="max-w-3xl mx-auto text-center">
        <div className="relative p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-indigo-500/10 border border-violet-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 rounded-2xl blur-xl" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              I&apos;m currently available for freelance projects and full-time opportunities.
              If you have a project in mind or want to chat, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)
