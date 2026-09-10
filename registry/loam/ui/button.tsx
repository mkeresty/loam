import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--loam-ink)] px-5 text-sm font-bold outline-none transition-[transform,box-shadow,filter] duration-200 ease-[var(--loam-ease-spring)] focus-visible:ring-3 focus-visible:ring-[var(--loam-focus)] focus-visible:ring-offset-3 disabled:pointer-events-none disabled:opacity-50 motion-reduce:transform-none motion-reduce:transition-none",
  { variants: {
      variant: {
        primary: "bg-[var(--loam-moss)] text-[var(--loam-cream)] shadow-[0_4px_0_var(--loam-depth-dark),0_10px_20px_rgb(35_49_39/20%)] -translate-y-0.5 hover:-translate-y-1 hover:-rotate-1 hover:brightness-105 hover:shadow-[0_6px_0_var(--loam-depth-dark),0_14px_24px_rgb(35_49_39/18%)] active:translate-y-0.5 active:rotate-0 active:shadow-[0_1px_0_var(--loam-depth-dark),0_4px_8px_rgb(35_49_39/14%)]",
        quiet: "bg-[var(--loam-cream)] text-[var(--loam-ink)] shadow-[0_4px_0_var(--loam-depth-warm),0_10px_20px_rgb(35_49_39/12%)] -translate-y-0.5 hover:-translate-y-1 hover:rotate-1 active:translate-y-0.5 active:rotate-0 active:shadow-[0_1px_0_var(--loam-depth-warm)]",
        clay: "bg-[var(--loam-clay)] text-[var(--loam-ink)] shadow-[0_4px_0_var(--loam-clay-dark)] -translate-y-0.5 hover:-translate-y-1 active:translate-y-0.5 active:shadow-[0_1px_0_var(--loam-clay-dark)]"
      },
      size: { sm: "min-h-9 px-4 text-xs", default: "min-h-11 px-5", lg: "min-h-13 px-7 text-base" }
    }, defaultVariants: { variant: "primary", size: "default" }
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => <button ref={ref} className={clsx(buttonVariants({ variant, size }), className)} {...props} />)
Button.displayName = "Button"
export { Button, buttonVariants }
