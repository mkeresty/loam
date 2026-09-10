'use client'
import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { clsx } from 'clsx'
const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>>(({ className, ...props }, ref) => <CheckboxPrimitive.Root ref={ref} className={clsx('peer grid size-6 shrink-0 place-items-center rounded-[var(--loam-radius-sm)] border border-[var(--loam-ink)] bg-[var(--loam-surface)] text-[var(--loam-cream)] outline-none transition-colors duration-200 data-[state=checked]:bg-[var(--loam-ink)] focus-visible:ring-2 focus-visible:ring-[var(--loam-focus)] focus-visible:ring-offset-3 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none', className)} {...props}><CheckboxPrimitive.Indicator className="data-[state=checked]:animate-in data-[state=checked]:zoom-in-75 motion-reduce:animate-none"><Check className="size-4" strokeWidth={2.4}/></CheckboxPrimitive.Indicator></CheckboxPrimitive.Root>)
Checkbox.displayName = CheckboxPrimitive.Root.displayName
export { Checkbox }
