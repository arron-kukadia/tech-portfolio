import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import { fetchPersonalInfo } from '@/lib/hygraph'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Arron | Senior Frontend Software Engineer',
    template: '%s | Arron',
  },
  description:
    "I'm a Senior Frontend Software Engineer with 5+ years building high-impact web and mobile apps in React and React Native with TypeScript. Proven track record leading feature delivery, driving architectural improvements, and mentoring engineers. Strong focus on performance, UI/UX, developer experience, and product-first engineering.",
  keywords: [
    'Senior Frontend Software Engineer',
    'Web Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: 'Arron' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Arron Portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const RootLayout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const info = await fetchPersonalInfo()

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col`}
      >
        <ThemeProvider>
          <Header info={info} />
          <main className="flex-1 pt-16">{children}</main>
          <Footer info={info} />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
