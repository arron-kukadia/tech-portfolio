'use client'

import { Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'

type ThemeToggleProps = {
  theme: string
  onToggle: () => void
}

export const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => (
  <Button variant="ghost" size="icon" onClick={onToggle} aria-label="Toggle theme">
    {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
  </Button>
)
