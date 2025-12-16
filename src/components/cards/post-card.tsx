'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { fadeInView } from '@/lib/animations'
import { BlogPost } from '@/lib/mock-data'

type PostCardProps = {
  post: BlogPost
  index?: number
}

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

export const PostCard = ({ post, index = 0 }: PostCardProps) => (
  <motion.div {...fadeInView(index * 0.1)}>
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden group h-full flex flex-col cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          {post.coverImage ? (
            <Image
              src={post.coverImage.url}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="h-full bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center">
              <span className="text-4xl font-bold text-muted-foreground/30">{post.title[0]}</span>
            </div>
          )}
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
            <Calendar className="h-4 w-4" />
            {formatDate(post.publishedAt)}
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-400 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-2">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="gradient">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  </motion.div>
)
