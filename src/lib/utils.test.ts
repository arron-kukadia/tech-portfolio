import { describe, it, expect } from 'vitest'
import { cn, formatDate, formatDateShort, formatDateLong } from './utils'

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('px-4', 'py-2')).toBe('px-4 py-2')
  })

  it('resolves Tailwind conflicts by keeping the last value', () => {
    expect(cn('px-4', 'px-8')).toBe('px-8')
  })

  it('handles conditional classes', () => {
    expect(cn('base', false && 'hidden', 'extra')).toBe('base extra')
  })

  it('handles undefined and null values', () => {
    expect(cn('base', undefined, null, 'extra')).toBe('base extra')
  })
})

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
