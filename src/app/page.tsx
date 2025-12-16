import { Hero } from '@/components/sections/Hero'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Skills } from '@/components/sections/Skills'
import { RecentPosts } from '@/components/sections/RecentPosts'
import { CTA } from '@/components/sections/CTA'

const Home = () => (
  <>
    <Hero />
    <FeaturedProjects />
    <Skills />
    <RecentPosts />
    <CTA />
  </>
)

export default Home
