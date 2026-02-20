'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge/Badge'
import { Card, CardContent } from '@/components/ui/Card/Card'
import { fadeUp } from '@/lib/animations'
import { BlogPost } from '@/lib/types'
import { formatDateLong } from '@/lib/utils'
import styles from './BlogListCard.module.css'

type BlogListCardProps = {
  post: BlogPost
  index: number
}

export const BlogListCard = ({ post, index }: BlogListCardProps) => (
  <motion.div {...fadeUp(index * 0.1)}>
    <Link href={`/blog/${post.slug}`}>
      <Card className={styles.card}>
        <div className={styles.layout}>
          <div className={styles.imageWrap}>
            {post.coverImage ? (
              <Image
                src={post.coverImage.url}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 256px"
                className={styles.image}
              />
            ) : (
              <div className={styles.placeholder}>
                <span className={styles.placeholderText}>{post.title[0]}</span>
              </div>
            )}
          </div>
          <CardContent className={styles.body}>
            <div>
              <div className={styles.meta}>
                <Calendar className={styles.metaIcon} />
                {formatDateLong(post.publishedAtTime)}
              </div>
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.excerpt}>{post.excerpt}</p>
            </div>
            <div className={styles.footer}>
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="gradient">
                    {tag}
                  </Badge>
                ))}
              </div>
              <span className={styles.readMore}>
                Read more
                <ArrowRight className={styles.readMoreIcon} />
              </span>
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  </motion.div>
)
