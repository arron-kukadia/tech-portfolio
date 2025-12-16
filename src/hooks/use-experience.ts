'use client'

import { useQuery } from '@tanstack/react-query'
import { hygraphClient, GET_EXPERIENCE } from '@/lib/hygraph'
import { mockExperience, Experience } from '@/lib/mock-data'

const USE_MOCK_DATA = !process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT

const fetchExperience = async (): Promise<Experience[]> => {
  if (USE_MOCK_DATA) return mockExperience
  const data = await hygraphClient.request<{ experiences: Experience[] }>(GET_EXPERIENCE)
  return data.experiences
}

export const useExperience = () =>
  useQuery({ queryKey: ['experience'], queryFn: fetchExperience, staleTime: 1000 * 60 * 5 })
