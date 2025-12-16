'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePersonalInfo } from '@/hooks/use-personal-info'
import { fadeInView } from '@/lib/animations'

export const CTA = () => {
  const { data: info } = usePersonalInfo()

  if (!info) return null

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInView()} className="mx-auto max-w-3xl text-center">
          <div className="relative rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-indigo-500/10 p-8 sm:p-12">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-indigo-500/5 blur-xl" />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Let&apos;s Work Together</h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-xl">
                I&apos;m currently available for freelance projects and full-time opportunities. If
                you have a project in mind or want to chat, feel free to reach out!
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button variant="gradient" size="lg" asChild>
                  <a href={`mailto:${info.email}`}>
                    <Mail className="h-5 w-5" />
                    Get in Touch
                  </a>
                </Button>
                {info.linkedin && (
                  <Button variant="outline" size="lg" asChild>
                    <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
