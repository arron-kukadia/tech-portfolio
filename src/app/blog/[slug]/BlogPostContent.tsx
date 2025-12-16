'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowLeft, Tag } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { BlogPostSkeleton } from '@/components/cards/skeletons/BlogPostSkeleton'
import { PostNotFound } from '@/components/cards/PostNotFound'
import { useBlogPost } from '@/hooks/use-blog-posts'
import { fadeUp } from '@/lib/animations'
import { formatDateLong } from '@/lib/utils'

type BlogPostContentProps = {
  slug: string
}

export const BlogPostContent = ({ slug }: BlogPostContentProps) => {
  const { data: post, isLoading } = useBlogPost(slug)

  if (isLoading) return <BlogPostSkeleton />
  if (!post) return <PostNotFound />

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="mx-auto max-w-3xl">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="text-muted-foreground mb-4 flex items-center gap-4 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDateLong(post.publishedAtTime)}
            </span>
          </div>

          <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">{post.title}</h1>

          <div className="mb-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="gradient" className="flex items-center gap-1">
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>

          {post.coverImage && (
            <div className="relative mb-8 h-64 overflow-hidden rounded-xl sm:h-80 lg:h-96">
              <Image
                src={post.coverImage.url}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <article className="prose prose-lg dark:prose-invert prose-violet max-w-none">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
            ) : (
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg">{post.excerpt}</p>
                <p className="text-muted-foreground">
                  This is a placeholder for the full blog post content. When connected to Hygraph
                  CMS, the rich text content will be displayed here with proper formatting, code
                  blocks, images, and more.
                </p>
                <p className="text-muted-foreground">
                  The content would typically include sections covering the main topic in depth,
                  with code examples, best practices, and practical tips for implementation.
                </p>
              </div>
            )}
          </article>
        </motion.div>
      </div>
    </div>
  )
}
