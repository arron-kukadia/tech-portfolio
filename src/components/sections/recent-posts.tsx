'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PostCard, PostSkeleton } from '@/components/cards'
import { useRecentBlogPosts } from '@/hooks/use-blog-posts'
import { fadeInView } from '@/lib/animations'

export const RecentPosts = () => {
  const { data: posts, isLoading } = useRecentBlogPosts(3)

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInView()} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest Posts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? [0, 1, 2].map((i) => <PostSkeleton key={i} />)
            : posts?.map((post, index) => <PostCard key={post.id} post={post} index={index} />)}
        </div>

        <motion.div {...fadeInView(0.3)} className="text-center mt-12">
          <Button variant="gradient" size="lg" asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
