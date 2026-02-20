import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button/Button'
import styles from './PostNotFound.module.css'

export const PostNotFound = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Post Not Found</h1>
        <p className={styles.description}>
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button variant="gradient">
          <Link href="/blog">
            <ArrowLeft className={styles.icon} />
            Back to Blog
          </Link>
        </Button>
      </div>
    </div>
  </div>
)
