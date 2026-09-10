'use client'
import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'
const RadioGroup=React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>,React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>>(({className,...props},ref)=><RadioGroupPrimitive.Root ref={ref} className={clsx('grid gap-3',className)} {...props}/>)
RadioGroup.displayName=RadioGroupPrimitive.Root.displayName
const RadioGroupItem=React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>,React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>>(({className,...props},ref)=><RadioGroupPrimitive.Item ref={ref} className={clsx('grid size-6 place-items-center rounded-full border border-[var(--loam-ink)] bg-transparent outline-none transition-colors data-[state=checked]:bg-[var(--loam-ink)] focus-visible:ring-2 focus-visible:ring-[var(--loam-focus)] focus-visible:ring-offset-3 disabled:opacity-50',className)} {...props}><RadioGroupPrimitive.Indicator className="size-2 rounded-full bg-[var(--loam-cream)] data-[state=checked]:animate-in data-[state=checked]:zoom-in-50 motion-reduce:animate-none"/></RadioGroupPrimitive.Item>)
RadioGroupItem.displayName=RadioGroupPrimitive.Item.displayName
export { RadioGroup,RadioGroupItem }
