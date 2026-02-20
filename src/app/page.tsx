import { CTA } from '@/components/sections/CTA'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Hero } from '@/components/sections/Hero'
import { RecentPosts } from '@/components/sections/RecentPosts'
import { Skills } from '@/components/sections/Skills'
import { fetchPersonalInfo, fetchProjects, fetchBlogPosts } from '@/lib/hygraph'

export const revalidate = 3600

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
