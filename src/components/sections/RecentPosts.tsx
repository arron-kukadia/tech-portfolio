'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PostCard } from '@/components/cards/PostCard'
import { Button } from '@/components/ui/Button'
import { fadeInView } from '@/lib/animations'
import { BlogPost } from '@/lib/types'

type RecentPostsProps = {
  posts: BlogPost[]
}

export const RecentPosts = ({ posts }: RecentPostsProps) => (
  <section className="bg-accent/30 py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div {...fadeInView()} className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Latest Posts</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Thoughts, tutorials, and insights on web development and technology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => <PostCard key={post.id} post={post} index={index} />)}
      </div>

      <motion.div {...fadeInView(0.3)} className="mt-12 text-center">
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
