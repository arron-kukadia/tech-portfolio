import type { Metadata } from 'next'
import { fetchPersonalInfo, fetchExperience } from '@/lib/hygraph'
import { ISR_REVALIDATE_SECONDS } from '@/lib/constants'
import { AboutPageContent } from './AboutPageContent'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about my background, experience, and the technologies I work with.',
}

export const revalidate = ISR_REVALIDATE_SECONDS

const AboutPage = async () => {
  const [info, experience] = await Promise.all([
    fetchPersonalInfo(),
    fetchExperience(),
  ])

  return <AboutPageContent info={info} experience={experience} />
}

export default AboutPage
