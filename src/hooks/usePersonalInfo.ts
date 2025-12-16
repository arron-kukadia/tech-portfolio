'use client'

import { useQuery } from '@tanstack/react-query'
import { hygraphClient, GET_PERSONAL_INFO } from '@/lib/hygraph'
import { PersonalInfo } from '@/lib/types'
import { TEN_MINUTES } from '@/lib/constants'

const fetchPersonalInfo = async (): Promise<PersonalInfo | null> => {
  const data = await hygraphClient.request<{ personalInfos: PersonalInfo[] }>(GET_PERSONAL_INFO)
  return data.personalInfos[0] || null
}

export const usePersonalInfo = () =>
  useQuery({
    queryKey: ['personal-info'],
    queryFn: fetchPersonalInfo,
    staleTime: TEN_MINUTES,
  })
