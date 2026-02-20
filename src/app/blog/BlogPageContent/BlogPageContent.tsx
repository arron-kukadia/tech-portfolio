'use client'

import { motion } from 'framer-motion'
import { BlogListCard } from '@/components/cards/BlogListCard/BlogListCard'
import { fadeUp } from '@/lib/animations'
import { BlogPost } from '@/lib/types'
import styles from './BlogPageContent.module.css'

type BlogPageContentProps = {
  posts: BlogPost[]
}

export const BlogPageContent = ({ posts }: BlogPageContentProps) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <motion.div {...fadeUp()} className={styles.header}>
        <h1 className={styles.heading}>Blog</h1>
        <p className={styles.description}>
          Writing about what I&apos;m learning, building, and thinking about.
        </p>
      </motion.div>

      <div className={styles.list}>
        {posts.map((post, index) => <BlogListCard key={post.id} post={post} index={index} />)}
      </div>
    </div>
  </div>
)
