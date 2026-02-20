'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/Badge/Badge'
import { Card, CardContent } from '@/components/ui/Card/Card'
import { fadeInView } from '@/lib/animations'
import { BlogPost } from '@/lib/types'
import { formatDate } from '@/lib/utils'
import styles from './PostCard.module.css'

type PostCardProps = {
  post: BlogPost
  index?: number
}

export const PostCard = ({ post, index = 0 }: PostCardProps) => (
  <motion.div {...fadeInView(index * 0.1)}>
    <Link href={`/blog/${post.slug}`}>
      <Card className={styles.card}>
        <div className={styles.imageWrap}>
          {post.coverImage ? (
            <Image
              src={post.coverImage.url}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={styles.image}
            />
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderText}>{post.title[0]}</span>
            </div>
          )}
        </div>
        <CardContent className={styles.body}>
          <div className={styles.meta}>
            <Calendar className={styles.metaIcon} />
            {formatDate(post.publishedAtTime)}
          </div>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <div className={styles.tags}>
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="gradient">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  </motion.div>
)
