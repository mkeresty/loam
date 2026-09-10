import * as React from "react"
import { clsx } from "clsx"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, type, ...props }, ref) => (
  <input type={type} ref={ref} className={clsx("flex h-12 w-full rounded-none border-0 border-b border-[var(--loam-ink)] bg-transparent px-0 py-2 font-serif text-base text-[var(--loam-ink)] caret-[var(--loam-clay)] outline-none transition-[border-color,border-width] placeholder:italic placeholder:text-[var(--loam-ink-soft)] focus:border-b-2 focus:border-[var(--loam-clay)] disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none", className)} {...props} />
))
Input.displayName = "Input"
export { Input }
