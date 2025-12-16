"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogPost } from "@/hooks/use-blog-posts";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

type BlogPostContentProps = {
  slug: string;
};

export function BlogPostContent({ slug }: BlogPostContentProps) {
  const { data: post, isLoading } = useBlogPost(slug);

  if (isLoading) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-10 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/4 mb-8" />
            <Skeleton className="h-64 w-full mb-8 rounded-xl" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Button variant="gradient" asChild>
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="gradient"
                className="flex items-center gap-1"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>

          {post.coverImage && (
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src={post.coverImage.url}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <article className="prose prose-lg dark:prose-invert prose-violet max-w-none">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
            ) : (
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">{post.excerpt}</p>
                <p className="text-muted-foreground">
                  This is a placeholder for the full blog post content. When
                  connected to Hygraph CMS, the rich text content will be
                  displayed here with proper formatting, code blocks, images,
                  and more.
                </p>
                <p className="text-muted-foreground">
                  The content would typically include sections covering the main
                  topic in depth, with code examples, best practices, and
                  practical tips for implementation.
                </p>
              </div>
            )}
          </article>
        </motion.div>
      </div>
    </div>
  );
}
