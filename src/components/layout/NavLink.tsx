import Link from 'next/link'
import { cn } from '@/lib/utils'

type NavLinkProps = {
  href: string
  label: string
  isActive: boolean
  onClick?: () => void
  className?: string
}

export const NavLink = ({ href, label, isActive, onClick, className }: NavLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
      isActive
        ? 'text-foreground bg-accent'
        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50',
      className
    )}
  >
    {label}
  </Link>
)
