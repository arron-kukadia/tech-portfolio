import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useExperience } from './useExperience'
import { createWrapper } from '@/test/test-utils'
import { mockExperience } from '@/test/mocks'

vi.mock('@/lib/hygraph', () => ({
  hygraphClient: {
    request: vi.fn(),
  },
  GET_EXPERIENCE: 'GET_EXPERIENCE',
}))

import { hygraphClient } from '@/lib/hygraph'

const mockedRequest = vi.mocked(hygraphClient.request)

beforeEach(() => {
  vi.clearAllMocks()
})

describe('useExperience', () => {
  it('fetches and returns experience entries', async () => {
    mockedRequest.mockResolvedValueOnce({ experiences: mockExperience })

    const { result } = renderHook(() => useExperience(), { wrapper: createWrapper() })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual(mockExperience)
    expect(result.current.data).toHaveLength(2)
    expect(result.current.data![0].role).toBe('Senior Frontend Engineer')
  })

  it('handles empty experience list', async () => {
    mockedRequest.mockResolvedValueOnce({ experiences: [] })

    const { result } = renderHook(() => useExperience(), { wrapper: createWrapper() })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual([])
  })
})
