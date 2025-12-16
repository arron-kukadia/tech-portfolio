import Link from 'next/link'
import { cn } from '@/lib/utils'

type NavLinkProps = {
  href: string
  label: string
  isActive: boolean
  onClick?: () => void
}

export const NavLink = ({ href, label, isActive, onClick }: NavLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
      isActive ? 'text-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
    )}
  >
    {label}
  </Link>
)
