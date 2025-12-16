"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogPosts } from "@/hooks/use-blog-posts";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogPageContent() {
  const { data: posts, isLoading } = useBlogPosts();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Thoughts, tutorials, and insights on web development, programming,
            and technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <Skeleton className="h-48 md:h-auto md:w-64 rounded-none" />
                    <CardContent className="p-6 flex-1">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-2/3" />
                    </CardContent>
                  </div>
                </Card>
              ))
            : posts?.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="overflow-hidden group cursor-pointer">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative h-48 md:h-auto md:w-64 flex-shrink-0 overflow-hidden">
                          {post.coverImage ? (
                            <Image
                              src={post.coverImage.url}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <div className="h-full w-full bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center">
                              <span className="text-4xl font-bold text-muted-foreground/30">
                                {post.title[0]}
                              </span>
                            </div>
                          )}
                        </div>
                        <CardContent className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                              <Calendar className="h-4 w-4" />
                              {formatDate(post.publishedAt)}
                            </div>
                            <h2 className="text-xl font-semibold mb-2 group-hover:text-violet-400 transition-colors">
                              {post.title}
                            </h2>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.map((tag) => (
                                <Badge key={tag} variant="gradient">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <span className="text-violet-400 flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                              Read more
                              <ArrowRight className="h-4 w-4" />
                            </span>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
        </div>
      </div>
    </div>
  );
}
