import * as React from "react"
import { clsx } from "clsx"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, interactive = false, ...props }, ref) => <div ref={ref} className={clsx(
  "rounded-[var(--loam-radius-lg)] border border-[var(--loam-ink)] bg-[var(--loam-surface)] text-[var(--loam-ink)] shadow-[4px_5px_0_var(--loam-ink)]",
  interactive && "transition-[transform,box-shadow] duration-300 ease-[var(--loam-ease-spring)] hover:-translate-y-1 hover:-rotate-[.35deg] hover:shadow-[7px_9px_0_var(--loam-ink)] motion-reduce:transform-none motion-reduce:transition-none",
  className
)} {...props} />)
Card.displayName = "Card"
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={clsx("flex flex-col space-y-1.5 p-6", className)} {...props} />)
CardHeader.displayName = "CardHeader"
const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => <h3 ref={ref} className={clsx("font-serif text-2xl font-medium leading-none tracking-tight", className)} {...props} />)
CardTitle.displayName = "CardTitle"
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => <p ref={ref} className={clsx("text-sm leading-relaxed text-[var(--loam-ink-soft)]", className)} {...props} />)
CardDescription.displayName = "CardDescription"
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={clsx("p-6 pt-0", className)} {...props} />)
CardContent.displayName = "CardContent"
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={clsx("flex items-center p-6 pt-0", className)} {...props} />)
CardFooter.displayName = "CardFooter"
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, type CardProps }
