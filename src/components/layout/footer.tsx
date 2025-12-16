'use client'

import Link from 'next/link'
import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react'
import { usePersonalInfo } from '@/hooks/use-personal-info'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export const Footer = () => {
  const { data: info } = usePersonalInfo()

  if (!info) return null

  const socialLinks = [
    { href: info.github, icon: Github, label: 'GitHub' },
    { href: info.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: info.instagram, icon: Instagram, label: 'Instagram' },
    { href: `mailto:${info.email}`, icon: Mail, label: 'Email' },
  ].filter((link) => link.href)

  return (
    <footer className="border-border/50 bg-background/50 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link
              href="/"
              className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-xl font-bold text-transparent"
            >
              {info.name}
            </Link>
            <p className="text-muted-foreground max-w-xs text-sm">{info.tagline}</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/80 text-muted-foreground hover:text-foreground flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-border/50 mt-12 border-t pt-8">
          <p className="text-muted-foreground flex items-center justify-center gap-1 text-center text-sm">
            Built with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> using Next.js &
            TailwindCSS
          </p>
          <p className="text-muted-foreground mt-2 text-center text-sm">
            © {new Date().getFullYear()} {info.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
