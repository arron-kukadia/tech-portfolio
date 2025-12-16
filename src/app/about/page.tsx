import type { Metadata } from 'next'
import { AboutPageContent } from './about-content'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about my background, experience, and the technologies I work with.',
}

const AboutPage = () => <AboutPageContent />

export default AboutPage
