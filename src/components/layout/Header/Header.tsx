'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { NavLink } from '@/components/layout/NavLink/NavLink'
import { Button } from '@/components/ui/Button/Button'
import { NAV_ITEMS } from '@/lib/constants'
import { PersonalInfo } from '@/lib/types'
import styles from './Header.module.css'

type HeaderProps = {
  info: PersonalInfo | null
}

export const Header = ({ info }: HeaderProps) => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
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
              <Button variant="gradient" size="sm" asChild>
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
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={styles.mobileMenu}
            >
              <div className={styles.mobileMenuContent}>
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    isActive={pathname === item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  />
                ))}
                {info?.cv?.url && (
                  <div className={styles.mobileMenuCvWrap}>
                    <Button variant="gradient" size="sm" className={styles.mobileMenuCv} asChild>
                      <a href={info.cv.url} download>
                        <Download className={styles.downloadIcon} />
                        Download CV
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
