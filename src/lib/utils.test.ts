import { describe, it, expect } from 'vitest'
import { formatDate, formatDateShort, formatDateLong } from './utils'

describe('formatDate', () => {
  const iso = '2025-01-15T10:00:00Z'

  it('formats with default options (day, short month, year)', () => {
    const result = formatDate(iso)
    expect(result).toContain('Jan')
    expect(result).toContain('2025')
    expect(result).toContain('15')
  })

  it('accepts custom options', () => {
    const result = formatDate(iso, { year: 'numeric' })
    expect(result).toBe('2025')
  })
})

describe('formatDateShort', () => {
  it('returns month and year only', () => {
    const result = formatDateShort('2025-06-20T00:00:00Z')
    expect(result).toBe('Jun 2025')
  })
})

describe('formatDateLong', () => {
  it('returns full date with long month name', () => {
    const result = formatDateLong('2025-01-15T10:00:00Z')
    expect(result).toContain('January')
    expect(result).toContain('2025')
    expect(result).toContain('15')
  })
})
