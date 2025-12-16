'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { fadeInView } from '@/lib/animations'
import { BlogPost } from '@/lib/types'
import { formatDate } from '@/lib/utils'

type PostCardProps = {
  post: BlogPost
  index?: number
}

export const PostCard = ({ post, index = 0 }: PostCardProps) => (
  <motion.div {...fadeInView(index * 0.1)}>
    <Link href={`/blog/${post.slug}`}>
      <Card className="group flex h-full cursor-pointer flex-col overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          {post.coverImage ? (
            <Image
              src={post.coverImage.url}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-violet-500/20 to-indigo-500/20">
              <span className="text-muted-foreground/30 text-4xl font-bold">{post.title[0]}</span>
            </div>
          )}
        </div>
        <CardContent className="flex flex-1 flex-col p-6">
          <div className="text-muted-foreground mb-3 flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4" />
            {formatDate(post.publishedAtTime)}
          </div>
          <h3 className="mb-2 line-clamp-2 text-xl font-semibold transition-colors group-hover:text-violet-400">
            {post.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2 flex-1 text-sm">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
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
