import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const PostNotFound = () => (
  <div className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button variant="gradient" asChild>
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    </div>
  </div>
)
