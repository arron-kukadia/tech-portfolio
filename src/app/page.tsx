import { fetchPersonalInfo, fetchProjects, fetchBlogPosts } from '@/lib/hygraph'
import { ISR_REVALIDATE_SECONDS } from '@/lib/constants'
import { Hero } from '@/components/sections/Hero'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Skills } from '@/components/sections/Skills'
import { RecentPosts } from '@/components/sections/RecentPosts'
import { CTA } from '@/components/sections/CTA'

export const revalidate = ISR_REVALIDATE_SECONDS

const Home = async () => {
  const [info, projects, posts] = await Promise.all([
    fetchPersonalInfo(),
    fetchProjects(),
    fetchBlogPosts(),
  ])

  return (
    <>
      <Hero info={info} />
      <FeaturedProjects projects={projects.slice(0, 3)} />
      <Skills skills={info?.skills ?? []} />
      <RecentPosts posts={posts.slice(0, 3)} />
      <CTA info={info} />
    </>
  )
}

export default Home
