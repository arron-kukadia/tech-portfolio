'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { NavLink } from '@/components/layout/NavLink/NavLink'
import { Button } from '@/components/ui/Button/Button'
import { NAV_ITEMS } from '@/lib/constants'
import styles from './MobileMenu.module.css'

type MobileMenuProps = {
  pathname: string
  cvUrl?: string
  onNavigate: () => void
}

export const MobileMenu = ({ pathname, cvUrl, onNavigate }: MobileMenuProps) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.2 }}
    className={styles.menu}
  >
    <div className={styles.content}>
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          isActive={pathname === item.href}
          onClick={onNavigate}
        />
      ))}
      {cvUrl && (
        <div className={styles.cvWrap}>
          <Button variant="gradient" size="sm" className={styles.cv} asChild>
            <a href={cvUrl} download>
              <Download className={styles.downloadIcon} />
              Download CV
            </a>
          </Button>
        </div>
      )}
    </div>
  </motion.div>
)
