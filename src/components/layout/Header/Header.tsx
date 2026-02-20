'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { NavLink } from '@/components/layout/NavLink/NavLink'
import { Button } from '@/components/ui/Button/Button'
import { NAV_ITEMS } from '@/lib/constants'
import { PersonalInfo } from '@/lib/types'
import styles from './Header.module.css'
import { MobileMenu } from './MobileMenu'

type HeaderProps = {
  info: PersonalInfo | null
}

export const Header = ({ info }: HeaderProps) => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const close = () => setMobileMenuOpen(false)

    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        close()
      }
    }

    window.addEventListener('scroll', close, { passive: true })
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', close)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <header ref={headerRef} className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            {info?.name || 'Portfolio'}
            <span className={styles.accent}>.</span>
          </Link>

          <div className={styles.desktopNav}>
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
              />
            ))}
          </div>

          <div className={styles.desktopActions}>
            {info?.cv?.url && (
              <Button variant="gradient" size="sm">
                <a href={info.cv.url} download>
                  <Download className={styles.downloadIcon} />
                  Download CV
                </a>
              </Button>
            )}
          </div>

          <div className={styles.mobileActions}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={styles.menuIcon} />
              ) : (
                <Menu className={styles.menuIcon} />
              )}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              pathname={pathname}
              cvUrl={info?.cv?.url}
              onNavigate={() => setMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
