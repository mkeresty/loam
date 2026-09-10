'use client'
import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'
const RadioGroup=React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>,React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>>(({className,...props},ref)=><RadioGroupPrimitive.Root ref={ref} className={clsx('grid gap-3',className)} {...props}/>)
RadioGroup.displayName=RadioGroupPrimitive.Root.displayName
const RadioGroupItem=React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>,React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>>(({className,...props},ref)=><RadioGroupPrimitive.Item ref={ref} className={clsx('group grid size-6 place-items-center rounded-full border border-[var(--loam-ink)] bg-transparent outline-none transition-[background-color,transform] duration-300 ease-[var(--loam-ease-spring)] data-[state=checked]:bg-[var(--loam-ink)] data-[state=checked]:scale-105 active:scale-90 focus-visible:ring-2 focus-visible:ring-[var(--loam-focus)] focus-visible:ring-offset-3 disabled:opacity-50 motion-reduce:transform-none motion-reduce:transition-none',className)} {...props}><RadioGroupPrimitive.Indicator className="size-2 rounded-full bg-[var(--loam-cream)] [animation:loam-radio-in_320ms_var(--loam-ease-spring)] motion-reduce:animate-none"/><style>{`@keyframes loam-radio-in{from{transform:scale(0);opacity:0}60%{transform:scale(1.35);opacity:1}to{transform:scale(1)}}`}</style></RadioGroupPrimitive.Item>)
RadioGroupItem.displayName=RadioGroupPrimitive.Item.displayName
export { RadioGroup,RadioGroupItem }
