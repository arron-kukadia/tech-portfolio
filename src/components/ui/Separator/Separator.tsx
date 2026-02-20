'use client'

import { forwardRef, ComponentRef, ComponentPropsWithoutRef } from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import clsx from 'clsx'
import styles from './Separator.module.css'

type SeparatorProps = ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>

const Separator = forwardRef<ComponentRef<typeof SeparatorPrimitive.Root>, SeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={clsx(
        styles.separator,
        orientation === 'horizontal' ? styles.horizontal : styles.vertical,
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = 'Separator'

export { Separator }
