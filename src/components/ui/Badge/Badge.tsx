import { HTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Badge.module.css'

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'gradient'

type BadgeProps = HTMLAttributes<HTMLDivElement> & {
  variant?: BadgeVariant
}

const variantMap: Record<BadgeVariant, string> = {
  default: styles.default,
  secondary: styles.secondary,
  destructive: styles.destructive,
  outline: styles.outline,
  gradient: styles.gradientBadge,
}

const Badge = ({ className, variant = 'default', ...props }: BadgeProps) => (
  <div className={clsx(styles.badge, variantMap[variant], className)} {...props} />
)

export { Badge, type BadgeProps }
