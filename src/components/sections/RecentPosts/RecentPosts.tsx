'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PostCard } from '@/components/cards/PostCard/PostCard'
import { Button } from '@/components/ui/Button/Button'
import { fadeInView } from '@/lib/animations'
import { BlogPost } from '@/lib/types'
import styles from './RecentPosts.module.css'

type RecentPostsProps = {
  posts: BlogPost[]
}

export const RecentPosts = ({ posts }: RecentPostsProps) => (
  <section className={styles.section}>
    <div className={styles.container}>
      <motion.div {...fadeInView()} className={styles.header}>
        <div>
          <h2 className={styles.heading}>Writing</h2>
          <p className={styles.description}>Notes on things I&apos;ve learned.</p>
        </div>
        <Button variant="ghost" className={styles.desktopLink}>
          <Link href="/blog">
            All
            <ArrowRight className={styles.icon} />
          </Link>
        </Button>
      </motion.div>

      <div className={styles.grid}>
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </div>

      <div className={styles.mobileLink}>
        <Button variant="outline">
          <Link href="/blog">
            All posts
            <ArrowRight className={styles.icon} />
          </Link>
        </Button>
      </div>
    </div>
  </section>
)
