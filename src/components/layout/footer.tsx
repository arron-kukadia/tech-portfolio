import Link from 'next/link'
import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react'
import { personalInfo } from '@/lib/mock-data'

const socialLinks = [
  { href: personalInfo.github, icon: Github, label: 'GitHub' },
  { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: personalInfo.instagram, icon: Instagram, label: 'Instagram' },
  { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
]

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export const Footer = () => (
  <footer className="border-t border-border/50 bg-background/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs">{personalInfo.tagline}</p>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-sm">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {footerLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-sm">Connect</h4>
          <div className="flex gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-accent hover:bg-accent/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border/50">
        <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
          Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js & TailwindCSS
        </p>
        <p className="text-center text-sm text-muted-foreground mt-2">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)
