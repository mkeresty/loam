"use client"
import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { clsx } from "clsx"

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root ref={ref} className={clsx("peer inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border border-[var(--loam-ink)] bg-[var(--loam-surface)] p-1 outline-none transition-colors duration-200 ease-[var(--loam-ease-spring)] data-[state=checked]:bg-[var(--loam-moss)] focus-visible:ring-2 focus-visible:ring-[var(--loam-focus)] focus-visible:ring-offset-3 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none", className)} {...props}>
    <SwitchPrimitive.Thumb className="pointer-events-none block size-5 rounded-full border border-[var(--loam-ink)] bg-[var(--loam-cream)] transition-transform duration-200 ease-[var(--loam-ease-spring)] data-[state=checked]:translate-x-6 motion-reduce:transition-none" />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName
export { Switch }
