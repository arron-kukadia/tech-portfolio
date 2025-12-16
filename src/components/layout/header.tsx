'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavLink } from '@/components/layout/nav-link'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { useThemeStore } from '@/store/theme-store'
import { useNavigationStore } from '@/store/navigation-store'
import { personalInfo } from '@/lib/mock-data'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export const Header = () => {
  const pathname = usePathname()
  const { theme, toggleTheme } = useThemeStore()
  const { isMobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = useNavigationStore()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} isActive={pathname === item.href} />
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <Button variant="gradient" size="sm" asChild>
              <a href={personalInfo.cvUrl} download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    isActive={pathname === item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  />
                ))}
                <div className="pt-2">
                  <Button variant="gradient" size="sm" className="w-full" asChild>
                    <a href={personalInfo.cvUrl} download>
                      <Download className="h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
