import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const BlogListSkeleton = () => (
  <Card className="overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <Skeleton className="h-48 rounded-none md:h-auto md:w-64" />
      <CardContent className="flex-1 p-6">
        <Skeleton className="mb-2 h-6 w-3/4" />
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
    </div>
  </Card>
)
