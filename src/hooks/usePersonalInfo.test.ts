import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { usePersonalInfo } from './usePersonalInfo'
import { createWrapper } from '@/test/test-utils'
import { mockPersonalInfo } from '@/test/mocks'

vi.mock('@/lib/hygraph', () => ({
  hygraphClient: {
    request: vi.fn(),
  },
  GET_PERSONAL_INFO: 'GET_PERSONAL_INFO',
}))

import { hygraphClient } from '@/lib/hygraph'

const mockedRequest = vi.mocked(hygraphClient.request)

beforeEach(() => {
  vi.clearAllMocks()
})

describe('usePersonalInfo', () => {
  it('fetches and returns the first personal info entry', async () => {
    mockedRequest.mockResolvedValueOnce({ personalInfos: [mockPersonalInfo] })

    const { result } = renderHook(() => usePersonalInfo(), { wrapper: createWrapper() })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual(mockPersonalInfo)
    expect(result.current.data?.name).toBe('Test User')
  })

  it('returns null when no personal info exists', async () => {
    mockedRequest.mockResolvedValueOnce({ personalInfos: [] })

    const { result } = renderHook(() => usePersonalInfo(), { wrapper: createWrapper() })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toBeNull()
  })
})
