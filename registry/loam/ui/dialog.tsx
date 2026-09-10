"use client"
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { clsx } from "clsx"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogClose = DialogPrimitive.Close
const DialogPortal = DialogPrimitive.Portal
const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(({ className, ...props }, ref) => <DialogPrimitive.Overlay ref={ref} className={clsx("fixed inset-0 z-50 bg-[rgb(25_34_28/48%)] backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out motion-reduce:animate-none", className)} {...props} />)
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ className, children, ...props }, ref) => <DialogPortal><DialogOverlay/><DialogPrimitive.Content ref={ref} className={clsx("fixed left-1/2 top-1/2 z-50 grid w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-[var(--loam-radius-lg)] border border-[var(--loam-ink)] bg-[var(--loam-cream)] p-8 text-[var(--loam-ink)] shadow-[8px_10px_0_var(--loam-ink)] duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 motion-reduce:animate-none", className)} {...props}>{children}<DialogPrimitive.Close className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-[var(--loam-line)] outline-none transition-transform hover:rotate-6 focus-visible:ring-3 focus-visible:ring-[var(--loam-focus)] motion-reduce:transform-none"><X className="size-4"/><span className="sr-only">Close</span></DialogPrimitive.Close></DialogPrimitive.Content></DialogPortal>)
DialogContent.displayName = DialogPrimitive.Content.displayName
const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={clsx("flex flex-col space-y-2 text-left", className)} {...props}/>
const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={clsx("mt-2 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} {...props}/>
const DialogTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(({ className, ...props }, ref) => <DialogPrimitive.Title ref={ref} className={clsx("font-serif text-3xl font-medium leading-none tracking-tight", className)} {...props}/>)
DialogTitle.displayName = DialogPrimitive.Title.displayName
const DialogDescription = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(({ className, ...props }, ref) => <DialogPrimitive.Description ref={ref} className={clsx("text-sm leading-relaxed text-[var(--loam-ink-soft)]", className)} {...props}/>)
DialogDescription.displayName = DialogPrimitive.Description.displayName
export { Dialog, DialogPortal, DialogOverlay, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription }
