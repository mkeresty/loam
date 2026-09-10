"use client"
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { clsx } from "clsx"

const Tabs = TabsPrimitive.Root
const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(({ className, children, style, ...props }, ref) => {
  const listRef = React.useRef<React.ElementRef<typeof TabsPrimitive.List>>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const count = React.Children.count(children)

  React.useImperativeHandle(ref, () => listRef.current as React.ElementRef<typeof TabsPrimitive.List>)
  React.useEffect(() => {
    const list = listRef.current
    if (!list) return
    const update = () => {
      const tabs = Array.from(list.querySelectorAll('[role="tab"]'))
      const next = tabs.findIndex((tab) => tab.getAttribute('data-state') === 'active')
      if (next >= 0) setActiveIndex(next)
    }
    update()
    const observer = new MutationObserver(update)
    observer.observe(list, { attributes: true, subtree: true, attributeFilter: ['data-state'] })
    return () => observer.disconnect()
  }, [])

  return <TabsPrimitive.List ref={listRef} className={clsx("relative inline-grid min-h-12 items-center rounded-full border border-[var(--loam-ink)] bg-[var(--loam-surface)] p-1", className)} style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))`, ...style }} {...props}>
    <span aria-hidden="true" className="pointer-events-none absolute bottom-1 left-1 top-1 rounded-full bg-[var(--loam-ink)] transition-transform duration-300 ease-[var(--loam-ease-spring)] motion-reduce:transition-none" style={{ width: `calc((100% - 8px) / ${count})`, transform: `translateX(${activeIndex * 100}%)` }}/>
    {children}
  </TabsPrimitive.List>
})
TabsList.displayName = TabsPrimitive.List.displayName
const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(({ className, ...props }, ref) => <TabsPrimitive.Trigger ref={ref} className={clsx("relative z-10 inline-flex min-h-9 items-center justify-center rounded-full px-4 text-sm font-bold text-[var(--loam-ink)] outline-none transition-colors duration-300 ease-[var(--loam-ease-spring)] data-[state=active]:text-[var(--loam-cream)] focus-visible:ring-2 focus-visible:ring-[var(--loam-focus)] disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none", className)} {...props}/>)
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName
const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(({ className, ...props }, ref) => <TabsPrimitive.Content ref={ref} className={clsx("mt-5 rounded-[var(--loam-radius-md)] border border-[var(--loam-line)] bg-[var(--loam-surface)] p-5 text-sm leading-relaxed outline-none focus-visible:ring-3 focus-visible:ring-[var(--loam-focus)]", className)} {...props}/>)
TabsContent.displayName = TabsPrimitive.Content.displayName
export { Tabs, TabsList, TabsTrigger, TabsContent }
