'use client'

import { ReactNode, useEffect } from 'react'
import { useThemeStore } from '@/store/themeStore'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeStore()

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  return <>{children}</>
}
