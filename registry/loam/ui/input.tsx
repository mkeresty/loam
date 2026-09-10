import * as React from "react"
import { clsx } from "clsx"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, type, ...props }, ref) => (
  <input type={type} ref={ref} className={clsx("flex h-12 w-full rounded-[var(--loam-radius-md)] border border-[var(--loam-ink)] bg-[var(--loam-surface)] px-4 py-2 text-sm text-[var(--loam-ink)] outline-none transition-[border-color,background-color] placeholder:text-[var(--loam-ink-soft)] focus:border-[var(--loam-clay)] focus:bg-[var(--loam-paper)] focus-visible:ring-2 focus-visible:ring-[var(--loam-focus)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none", className)} {...props} />
))
Input.displayName = "Input"
export { Input }
