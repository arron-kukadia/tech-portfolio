import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Providers } from '@/components/providers'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
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
  description: 'I\'m a Senior Frontend Software Engineer with 5+ years building high-impact web and mobile apps in React and React Native with TypeScript. Proven track record leading feature delivery, driving architectural improvements, and mentoring engineers. Strong focus on performance, UI/UX, developer experience, and product-first engineering.',  keywords: [
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
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className="dark" suppressHydrationWarning>
    <body
      className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
    >
      <Providers>
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </Providers>
    </body>
  </html>
)

export default RootLayout
