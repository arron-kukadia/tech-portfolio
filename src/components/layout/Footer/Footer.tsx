'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si'
import { PersonalInfo } from '@/lib/types'
import styles from './Footer.module.css'

type FooterProps = {
  info: PersonalInfo | null
}

export const Footer = ({ info }: FooterProps) => {
  if (!info) return null

  const socialLinks = [
    { href: info.github, icon: SiGithub, label: 'GitHub' },
    { href: info.linkedin, icon: SiLinkedin, label: 'LinkedIn' },
    { href: info.instagram, icon: SiInstagram, label: 'Instagram' },
    { href: `mailto:${info.email}`, icon: Mail, label: 'Email' },
  ].filter((link) => link.href)

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            {info.name}
            <span className={styles.accent}>.</span>
          </Link>
          <div className={styles.socialLinks}>
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={label}
              >
                <Icon className={styles.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.tagline}>{info.tagline}</p>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {info.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
