'use client'

import { useQuery } from '@tanstack/react-query'
import { hygraphClient, GET_EXPERIENCE } from '@/lib/hygraph'
import { Experience } from '@/lib/types'
import { FIVE_MINUTES } from '@/lib/constants'

const fetchExperience = async (): Promise<Experience[]> => {
  const data = await hygraphClient.request<{ experiences: Experience[] }>(GET_EXPERIENCE)
  return data.experiences
}

export const useExperience = () =>
  useQuery({ queryKey: ['experience'], queryFn: fetchExperience, staleTime: FIVE_MINUTES })
