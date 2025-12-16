'use client'

import { useQuery } from '@tanstack/react-query'
import { hygraphClient, GET_PROJECTS } from '@/lib/hygraph'
import { mockProjects, Project } from '@/lib/mock-data'
import { FIVE_MINUTES } from '@/lib/constants'

const USE_MOCK_DATA = !process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT

const fetchProjects = async (): Promise<Project[]> => {
  if (USE_MOCK_DATA) return mockProjects
  const data = await hygraphClient.request<{ projects: Project[] }>(GET_PROJECTS)
  return data.projects
}

export const useProjects = () =>
  useQuery({ queryKey: ['projects'], queryFn: fetchProjects, staleTime: FIVE_MINUTES })

export const useFeaturedProjects = () =>
  useQuery({
    queryKey: ['projects', 'featured'],
    queryFn: async () => (await fetchProjects()).filter((p) => p.featured),
    staleTime: FIVE_MINUTES,
  })
