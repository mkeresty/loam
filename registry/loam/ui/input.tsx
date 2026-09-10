import * as React from "react"
import { clsx } from "clsx"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, type, ...props }, ref) => (
  <input type={type} ref={ref} className={clsx("flex h-12 w-full rounded-[var(--loam-radius-md)] border border-[var(--loam-ink)] bg-[var(--loam-surface)] px-4 py-2 text-sm text-[var(--loam-ink)] shadow-[0_3px_0_var(--loam-depth-warm)] outline-none transition-[transform,box-shadow] placeholder:text-[var(--loam-ink-soft)] focus:-translate-y-0.5 focus:shadow-[0_5px_0_var(--loam-depth-warm),0_10px_20px_rgb(35_49_39/10%)] focus-visible:ring-3 focus-visible:ring-[var(--loam-focus)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transform-none motion-reduce:transition-none", className)} {...props} />
))
Input.displayName = "Input"
export { Input }
