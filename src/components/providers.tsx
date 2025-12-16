'use client'

import { ReactNode, useState, useEffect, useSyncExternalStore } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useThemeStore } from '@/store/theme-store'

const useHasMounted = () => useSyncExternalStore(() => () => {}, () => true, () => false)

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeStore()
  const hasMounted = useHasMounted()

  useEffect(() => {
    if (hasMounted) {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme)
    }
  }, [theme, hasMounted])

  return <>{children}</>
}

export const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: { staleTime: 60 * 1000, refetchOnWindowFocus: false },
    },
  }))

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  )
}
