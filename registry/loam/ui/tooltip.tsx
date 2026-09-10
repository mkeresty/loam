'use client'
import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { clsx } from 'clsx'
const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger
const TooltipContent = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>>(({ className, sideOffset = 8, ...props }, ref) => <TooltipPrimitive.Portal><style>{`@keyframes loam-tooltip-in{from{opacity:0;transform:translateY(4px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}@media(prefers-reduced-motion:reduce){.loam-tooltip-motion{animation:none!important}}`}</style><TooltipPrimitive.Content ref={ref} sideOffset={sideOffset} className={clsx('loam-tooltip-motion z-50 max-w-64 rounded-[var(--loam-radius-sm)] border border-[var(--loam-ink)] bg-[var(--loam-ink)] px-3 py-2 font-serif text-sm leading-snug text-[var(--loam-paper)] [animation:loam-tooltip-in_240ms_var(--loam-ease-spring)]', className)} {...props}/></TooltipPrimitive.Portal>)
TooltipContent.displayName = TooltipPrimitive.Content.displayName
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
