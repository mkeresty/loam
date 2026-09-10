'use client'
import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { clsx } from 'clsx'
const Popover=PopoverPrimitive.Root,PopoverTrigger=PopoverPrimitive.Trigger,PopoverAnchor=PopoverPrimitive.Anchor
const PopoverContent=React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>,React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>>(({className,align='center',sideOffset=10,...props},ref)=><><style>{`@keyframes loam-popover-in{from{opacity:0;transform:scale(.78);clip-path:inset(0 0 72% 0 round var(--loam-radius-md))}to{opacity:1;transform:scale(1);clip-path:inset(0 0 0 0 round var(--loam-radius-md))}}@keyframes loam-popover-out{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.94)}}@media(prefers-reduced-motion:reduce){.loam-popover-motion{animation-duration:1ms!important}}`}</style><PopoverPrimitive.Portal><PopoverPrimitive.Content ref={ref} align={align} sideOffset={sideOffset} className={clsx('loam-popover-motion z-50 w-80 origin-[var(--radix-popover-content-transform-origin)] rounded-[var(--loam-radius-md)] border border-[var(--loam-ink)] bg-[var(--loam-surface)] p-5 text-[var(--loam-ink)] shadow-[0_18px_50px_rgb(0_0_0/16%)] outline-none data-[state=open]:[animation:loam-popover-in_340ms_var(--loam-ease-spring)] data-[state=closed]:[animation:loam-popover-out_180ms_var(--loam-ease-out)]',className)} {...props}/></PopoverPrimitive.Portal></>)
PopoverContent.displayName=PopoverPrimitive.Content.displayName
export { Popover,PopoverTrigger,PopoverAnchor,PopoverContent }
