import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useProjects, useFeaturedProjects } from './useProjects'
import { createWrapper } from '@/test/test-utils'
import { mockProjects } from '@/test/mocks'

vi.mock('@/lib/hygraph', () => ({
  hygraphClient: {
    request: vi.fn(),
  },
  GET_PROJECTS: 'GET_PROJECTS',
}))

import { hygraphClient } from '@/lib/hygraph'

const mockedRequest = vi.mocked(hygraphClient.request)

beforeEach(() => {
  vi.clearAllMocks()
})

describe('useProjects', () => {
  it('fetches and returns all projects', async () => {
    mockedRequest.mockResolvedValueOnce({ projects: mockProjects })

    const { result } = renderHook(() => useProjects(), { wrapper: createWrapper() })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual(mockProjects)
    expect(result.current.data).toHaveLength(3)
  })

  it('handles empty project list', async () => {
    mockedRequest.mockResolvedValueOnce({ projects: [] })

    const { result } = renderHook(() => useProjects(), { wrapper: createWrapper() })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual([])
  })
})

describe('useFeaturedProjects', () => {
  it('returns only the first 3 projects via select', async () => {
    const fiveProjects = [
      ...mockProjects,
      { ...mockProjects[0], id: '4', title: 'Project Delta' },
      { ...mockProjects[0], id: '5', title: 'Project Epsilon' },
    ]
    mockedRequest.mockResolvedValueOnce({ projects: fiveProjects })

    const { result } = renderHook(() => useFeaturedProjects(), { wrapper: createWrapper() })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toHaveLength(3)
    expect(result.current.data![2].title).toBe('Project Gamma')
  })
})
