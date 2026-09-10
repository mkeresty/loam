'use client'
import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@animateicons/react/lucide/check-icon'
import { clsx } from 'clsx'
const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>>(({ className, ...props }, ref) => <CheckboxPrimitive.Root ref={ref} className={clsx('peer grid size-6 shrink-0 place-items-center rounded-[var(--loam-radius-sm)] border border-[var(--loam-ink)] bg-[var(--loam-surface)] text-[var(--loam-cream)] outline-none transition-colors duration-200 data-[state=checked]:bg-[var(--loam-ink)] focus-visible:ring-2 focus-visible:ring-[var(--loam-focus)] focus-visible:ring-offset-3 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none', className)} {...props}><CheckboxPrimitive.Indicator className="data-[state=checked]:animate-in data-[state=checked]:zoom-in-50 motion-reduce:animate-none"><CheckIcon size={16} duration={0.45}/></CheckboxPrimitive.Indicator></CheckboxPrimitive.Root>)
Checkbox.displayName = CheckboxPrimitive.Root.displayName
export { Checkbox }
