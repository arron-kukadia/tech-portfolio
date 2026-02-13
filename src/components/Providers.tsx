'use client'

import { ReactNode, useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useThemeStore } from '@/store/themeStore'
import { ONE_MINUTE } from '@/lib/constants'

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeStore()

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  return <>{children}</>
}

export const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: ONE_MINUTE, refetchOnWindowFocus: false },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  )
}
