import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const formatDate = (dateString: string, options?: Intl.DateTimeFormatOptions) =>
  new Date(dateString).toLocaleDateString(
    'en-GB',
    options ?? { day: 'numeric', month: 'short', year: 'numeric' }
  )

export const formatDateShort = (dateString: string) =>
  formatDate(dateString, { month: 'short', year: 'numeric' })

export const formatDateLong = (dateString: string) =>
  formatDate(dateString, { day: 'numeric', month: 'long', year: 'numeric' })
