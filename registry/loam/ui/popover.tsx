'use client'
import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { clsx } from 'clsx'
const Popover=PopoverPrimitive.Root,PopoverTrigger=PopoverPrimitive.Trigger,PopoverAnchor=PopoverPrimitive.Anchor
const PopoverContent=React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>,React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>>(({className,align='center',sideOffset=10,...props},ref)=><PopoverPrimitive.Portal><PopoverPrimitive.Content ref={ref} align={align} sideOffset={sideOffset} className={clsx('z-50 w-80 rounded-[var(--loam-radius-md)] border border-[var(--loam-ink)] bg-[var(--loam-surface)] p-5 text-[var(--loam-ink)] shadow-[0_18px_50px_rgb(0_0_0/16%)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out data-[state=open]:zoom-in-95 motion-reduce:animate-none',className)} {...props}/></PopoverPrimitive.Portal>)
PopoverContent.displayName=PopoverPrimitive.Content.displayName
export { Popover,PopoverTrigger,PopoverAnchor,PopoverContent }
