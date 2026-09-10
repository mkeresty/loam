"use client"
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@animateicons/react/lucide/chevron-down-icon"
import { clsx } from "clsx"

const Accordion = AccordionPrimitive.Root
const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(({ className, ...props }, ref) => <AccordionPrimitive.Item ref={ref} className={clsx("border-b border-[var(--loam-ink)]", className)} {...props}/>)
AccordionItem.displayName = "AccordionItem"
const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(({ className, children, ...props }, ref) => <AccordionPrimitive.Header className="flex"><AccordionPrimitive.Trigger ref={ref} className={clsx("group flex min-h-16 flex-1 items-center justify-between py-4 text-left font-serif text-xl font-medium outline-none transition-colors hover:text-[var(--loam-clay)] focus-visible:bg-[var(--loam-surface)]", className)} {...props}>{children}<span className="ml-4 grid size-8 shrink-0 place-items-center rounded-full border border-[var(--loam-ink)] bg-transparent transition-transform duration-300 ease-[var(--loam-ease-spring)] group-hover:-rotate-6 group-data-[state=open]:rotate-180 motion-reduce:transform-none motion-reduce:transition-none"><ChevronDownIcon size={16} duration={0.55}/></span></AccordionPrimitive.Trigger></AccordionPrimitive.Header>)
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(({ className, children, ...props }, ref) => <AccordionPrimitive.Content ref={ref} className="grid grid-rows-[0fr] opacity-0 text-sm text-[var(--loam-ink-soft)] transition-[grid-template-rows,opacity] duration-400 ease-[var(--loam-ease-spring)] data-[state=open]:grid-rows-[1fr] data-[state=open]:opacity-100 motion-reduce:transition-none" {...props}><div className="min-h-0 overflow-hidden"><div className={clsx("pb-5 pr-12 leading-relaxed", className)}>{children}</div></div></AccordionPrimitive.Content>)
AccordionContent.displayName = AccordionPrimitive.Content.displayName
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
