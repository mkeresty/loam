import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--loam-ink)] px-5 text-sm font-bold outline-none transition-[transform,background-color,color] duration-200 ease-[var(--loam-ease-spring)] focus-visible:ring-2 focus-visible:ring-[var(--loam-focus)] focus-visible:ring-offset-3 disabled:pointer-events-none disabled:opacity-50 motion-reduce:transform-none motion-reduce:transition-none active:translate-y-0.5",
  { variants: {
      variant: {
        primary: "bg-[var(--loam-moss)] text-[var(--loam-cream)] hover:-translate-y-px",
        quiet: "bg-transparent text-[var(--loam-ink)] hover:-translate-y-px hover:bg-[var(--loam-surface)]",
        clay: "bg-[var(--loam-clay)] text-[var(--loam-cream)] hover:-translate-y-px"
      },
      size: { sm: "min-h-9 px-4 text-xs", default: "min-h-11 px-5", lg: "min-h-13 px-7 text-base" }
    }, defaultVariants: { variant: "primary", size: "default" }
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => <button ref={ref} className={clsx(buttonVariants({ variant, size }), className)} {...props} />)
Button.displayName = "Button"
export { Button, buttonVariants }
