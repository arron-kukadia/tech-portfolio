import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type SkeletonProps = HTMLAttributes<HTMLDivElement>

const Skeleton = ({ className, ...props }: SkeletonProps) => (
  <div className={cn('bg-muted animate-pulse rounded-md', className)} {...props} />
)

export { Skeleton }
