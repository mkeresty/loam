"use client"
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { clsx } from "clsx"

const Accordion = AccordionPrimitive.Root
const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(({ className, ...props }, ref) => <AccordionPrimitive.Item ref={ref} className={clsx("border-b border-[var(--loam-ink)]", className)} {...props}/>)
AccordionItem.displayName = "AccordionItem"
const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(({ className, children, ...props }, ref) => <AccordionPrimitive.Header className="flex"><AccordionPrimitive.Trigger ref={ref} className={clsx("group flex min-h-16 flex-1 items-center justify-between py-4 text-left font-serif text-xl font-medium outline-none transition-colors hover:text-[var(--loam-clay)] focus-visible:ring-2 focus-visible:ring-[var(--loam-focus)]", className)} {...props}>{children}<span className="ml-4 grid size-8 shrink-0 place-items-center rounded-full border border-[var(--loam-ink)] bg-transparent transition-colors group-hover:bg-[var(--loam-surface)]"><ChevronDown className="size-4 transition-transform duration-300 ease-[var(--loam-ease-spring)] group-data-[state=open]:rotate-180 motion-reduce:transition-none"/></span></AccordionPrimitive.Trigger></AccordionPrimitive.Header>)
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(({ className, children, ...props }, ref) => <AccordionPrimitive.Content ref={ref} className="overflow-hidden text-sm text-[var(--loam-ink-soft)] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none" {...props}><div className={clsx("pb-5 pr-12 leading-relaxed", className)}>{children}</div></AccordionPrimitive.Content>)
AccordionContent.displayName = AccordionPrimitive.Content.displayName
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
