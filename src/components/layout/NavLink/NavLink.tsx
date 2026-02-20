import Link from 'next/link'
import clsx from 'clsx'
import styles from './NavLink.module.css'

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
    aria-current={isActive ? 'page' : undefined}
    className={clsx(styles.link, isActive && styles.active, className)}
  >
    {label}
  </Link>
)
