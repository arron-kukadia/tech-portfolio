import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const ProjectSkeleton = () => (
  <Card className="overflow-hidden">
    <Skeleton className="h-48 rounded-none" />
    <CardContent className="p-6">
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-4" />
      <Skeleton className="h-4 w-2/3" />
    </CardContent>
  </Card>
)

export const PostSkeleton = () => (
  <Card className="overflow-hidden">
    <Skeleton className="h-48 rounded-none" />
    <CardContent className="p-6">
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-4" />
      <Skeleton className="h-4 w-2/3" />
    </CardContent>
  </Card>
)
