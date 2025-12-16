import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const ProjectSkeleton = () => (
  <Card className="overflow-hidden">
    <Skeleton className="h-48 rounded-none" />
    <CardContent className="p-6">
      <Skeleton className="mb-2 h-6 w-3/4" />
      <Skeleton className="mb-4 h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </CardContent>
  </Card>
)

export const PostSkeleton = () => (
  <Card className="overflow-hidden">
    <Skeleton className="h-48 rounded-none" />
    <CardContent className="p-6">
      <Skeleton className="mb-2 h-6 w-3/4" />
      <Skeleton className="mb-4 h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </CardContent>
  </Card>
)
