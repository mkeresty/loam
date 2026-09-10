"use client"
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { clsx } from "clsx"

const Tabs = TabsPrimitive.Root
const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(({ className, ...props }, ref) => <TabsPrimitive.List ref={ref} className={clsx("inline-flex min-h-12 items-center gap-1 rounded-full border border-[var(--loam-ink)] bg-[var(--loam-depth-warm)] p-1 shadow-[0_3px_0_var(--loam-ink)]", className)} {...props}/>)
TabsList.displayName = TabsPrimitive.List.displayName
const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(({ className, ...props }, ref) => <TabsPrimitive.Trigger ref={ref} className={clsx("inline-flex min-h-9 items-center justify-center rounded-full px-4 text-sm font-bold text-[var(--loam-ink)] outline-none transition-[background-color,transform,box-shadow] data-[state=active]:-translate-y-0.5 data-[state=active]:bg-[var(--loam-cream)] data-[state=active]:shadow-[0_2px_0_var(--loam-ink)] focus-visible:ring-3 focus-visible:ring-[var(--loam-focus)] disabled:pointer-events-none disabled:opacity-50 motion-reduce:transform-none motion-reduce:transition-none", className)} {...props}/>)
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName
const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(({ className, ...props }, ref) => <TabsPrimitive.Content ref={ref} className={clsx("mt-5 rounded-[var(--loam-radius-md)] border border-[var(--loam-line)] bg-[var(--loam-surface)] p-5 text-sm leading-relaxed outline-none focus-visible:ring-3 focus-visible:ring-[var(--loam-focus)]", className)} {...props}/>)
TabsContent.displayName = TabsPrimitive.Content.displayName
export { Tabs, TabsList, TabsTrigger, TabsContent }
