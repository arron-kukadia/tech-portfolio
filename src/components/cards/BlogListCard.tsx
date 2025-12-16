'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { fadeUp } from '@/lib/animations'
import { formatDateLong } from '@/lib/utils'
import { BlogPost } from '@/lib/types'

type BlogListCardProps = {
  post: BlogPost
  index: number
}

export const BlogListCard = ({ post, index }: BlogListCardProps) => (
  <motion.div {...fadeUp(index * 0.1)}>
    <Link href={`/blog/${post.slug}`}>
      <Card className="group cursor-pointer overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-48 flex-shrink-0 overflow-hidden md:h-auto md:w-64">
            {post.coverImage ? (
              <Image
                src={post.coverImage.url}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-500/20 to-indigo-500/20">
                <span className="text-muted-foreground/30 text-4xl font-bold">{post.title[0]}</span>
              </div>
            )}
          </div>
          <CardContent className="flex flex-1 flex-col justify-between p-6">
            <div>
              <div className="text-muted-foreground mb-3 flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                {formatDateLong(post.publishedAtTime)}
              </div>
              <h2 className="mb-2 text-xl font-semibold transition-colors group-hover:text-violet-400">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">{post.excerpt}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="gradient">
                    {tag}
                  </Badge>
                ))}
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-violet-400 opacity-0 transition-opacity group-hover:opacity-100">
                Read more
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  </motion.div>
)
