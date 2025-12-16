'use client'

import { forwardRef, ComponentRef, ComponentPropsWithoutRef } from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cn } from '@/lib/utils'

type SeparatorProps = ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>

const Separator = forwardRef<ComponentRef<typeof SeparatorPrimitive.Root>, SeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = 'Separator'

export { Separator }
