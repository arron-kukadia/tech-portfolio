import { FeaturedProjects } from '@/components/sections/FeaturedProjects/FeaturedProjects'
import { Hero } from '@/components/sections/Hero/Hero'
import { RecentPosts } from '@/components/sections/RecentPosts/RecentPosts'
import { Skills } from '@/components/sections/Skills/Skills'
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
    </>
  )
}

export default Home
