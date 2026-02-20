'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowLeft, Tag } from 'lucide-react'
import { PostNotFound } from '@/components/cards/PostNotFound/PostNotFound'
import { Badge } from '@/components/ui/Badge/Badge'
import { Button } from '@/components/ui/Button/Button'
import { fadeUp } from '@/lib/animations'
import { BlogPost } from '@/lib/types'
import { formatDateLong } from '@/lib/utils'
import styles from './BlogPostContent.module.css'

type BlogPostContentProps = {
  post: BlogPost | null
}

export const BlogPostContent = ({ post }: BlogPostContentProps) => {
  if (!post) return <PostNotFound />

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <motion.div {...fadeUp()} className={styles.inner}>
          <Button variant="ghost" asChild className={styles.backBtn}>
            <Link href="/blog">
              <ArrowLeft className={styles.backIcon} />
              Back to Blog
            </Link>
          </Button>

          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <Calendar className={styles.metaIcon} />
              {formatDateLong(post.publishedAtTime)}
            </span>
          </div>

          <h1 className={styles.heading}>{post.title}</h1>

          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="gradient" className={styles.tagBadge}>
                <Tag className={styles.tagIcon} />
                {tag}
              </Badge>
            ))}
          </div>

          {post.coverImage && (
            <div className={styles.coverWrap}>
              <Image
                src={post.coverImage.url}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
                className={styles.coverImage}
              />
            </div>
          )}

          <article className={styles.article}>
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
            ) : (
              <p className={styles.fallback}>{post.excerpt}</p>
            )}
          </article>
        </motion.div>
      </div>
    </div>
  )
}
