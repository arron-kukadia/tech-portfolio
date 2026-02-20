import type { Metadata } from 'next'
import { fetchPersonalInfo, fetchExperience } from '@/lib/hygraph'
import { AboutPageContent } from './AboutPageContent/AboutPageContent'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about my background, experience, and the technologies I work with.',
}

export const revalidate = 3600

const AboutPage = async () => {
  const [info, experience] = await Promise.all([fetchPersonalInfo(), fetchExperience()])

  return <AboutPageContent info={info} experience={experience} />
}

export default AboutPage
