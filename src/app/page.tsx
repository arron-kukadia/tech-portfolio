import { Hero } from '@/components/sections/hero'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { Skills } from '@/components/sections/skills'
import { RecentPosts } from '@/components/sections/recent-posts'
import { CTA } from '@/components/sections/cta'

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
