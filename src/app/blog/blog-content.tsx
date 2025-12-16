'use client'

import { motion } from 'framer-motion'
import { BlogListCard, BlogListSkeleton } from '@/components/cards'
import { useBlogPosts } from '@/hooks/use-blog-posts'
import { fadeUp } from '@/lib/animations'

export const BlogPageContent = () => {
  const { data: posts, isLoading } = useBlogPosts()

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            My{' '}
            <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Thoughts, tutorials, and insights on web development, programming, and technology.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-6">
          {isLoading
            ? [0, 1, 2, 3].map((i) => <BlogListSkeleton key={i} />)
            : posts?.map((post, index) => <BlogListCard key={post.id} post={post} index={index} />)}
        </div>
      </div>
    </div>
  )
}
