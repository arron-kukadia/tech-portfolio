'use client'

import { useQuery } from '@tanstack/react-query'
import { hygraphClient, GET_PROJECTS } from '@/lib/hygraph'
import { Project } from '@/lib/types'
import { FIVE_MINUTES } from '@/lib/constants'

const fetchProjects = async (): Promise<Project[]> => {
  const data = await hygraphClient.request<{ projects: Project[] }>(GET_PROJECTS)
  return data.projects
}

export const useProjects = () =>
  useQuery({ queryKey: ['projects'], queryFn: fetchProjects, staleTime: FIVE_MINUTES })

export const useFeaturedProjects = () =>
  useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: FIVE_MINUTES,
    select: (data) => data.slice(0, 3),
  })
