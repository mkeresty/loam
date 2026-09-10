'use client'
import * as React from 'react'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import { Check,ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'
const DropdownMenu=DropdownPrimitive.Root,DropdownMenuTrigger=DropdownPrimitive.Trigger,DropdownMenuGroup=DropdownPrimitive.Group,DropdownMenuSub=DropdownPrimitive.Sub,DropdownMenuRadioGroup=DropdownPrimitive.RadioGroup
const DropdownMenuContent=React.forwardRef<React.ElementRef<typeof DropdownPrimitive.Content>,React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>>(({className,sideOffset=8,...props},ref)=><DropdownPrimitive.Portal><DropdownPrimitive.Content ref={ref} sideOffset={sideOffset} className={clsx('z-50 min-w-48 rounded-[var(--loam-radius-md)] border border-[var(--loam-ink)] bg-[var(--loam-surface)] p-1 text-[var(--loam-ink)] shadow-[0_18px_50px_rgb(0_0_0/16%)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out motion-reduce:animate-none',className)} {...props}/></DropdownPrimitive.Portal>)
DropdownMenuContent.displayName=DropdownPrimitive.Content.displayName
const item='relative flex min-h-10 cursor-default select-none items-center rounded-[var(--loam-radius-sm)] px-3 py-2 font-serif text-sm outline-none transition-colors data-[highlighted]:bg-[var(--loam-ink)] data-[highlighted]:text-[var(--loam-cream)] data-[disabled]:opacity-40'
const DropdownMenuItem=React.forwardRef<React.ElementRef<typeof DropdownPrimitive.Item>,React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>>(({className,...props},ref)=><DropdownPrimitive.Item ref={ref} className={clsx(item,className)} {...props}/>)
DropdownMenuItem.displayName=DropdownPrimitive.Item.displayName
const DropdownMenuCheckboxItem=React.forwardRef<React.ElementRef<typeof DropdownPrimitive.CheckboxItem>,React.ComponentPropsWithoutRef<typeof DropdownPrimitive.CheckboxItem>>(({className,children,...props},ref)=><DropdownPrimitive.CheckboxItem ref={ref} className={clsx(item,'pl-8',className)} {...props}><span className="absolute left-2"><DropdownPrimitive.ItemIndicator><Check className="size-4"/></DropdownPrimitive.ItemIndicator></span>{children}</DropdownPrimitive.CheckboxItem>)
DropdownMenuCheckboxItem.displayName=DropdownPrimitive.CheckboxItem.displayName
const DropdownMenuLabel=({className,...props}:React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Label>)=><DropdownPrimitive.Label className={clsx('px-3 py-2 font-mono text-[9px] uppercase tracking-[.14em] text-[var(--loam-ink-soft)]',className)} {...props}/>
const DropdownMenuSeparator=({className,...props}:React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator>)=><DropdownPrimitive.Separator className={clsx('my-1 h-px bg-[var(--loam-line)]',className)} {...props}/>
const DropdownMenuSubTrigger=React.forwardRef<React.ElementRef<typeof DropdownPrimitive.SubTrigger>,React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubTrigger>>(({className,children,...props},ref)=><DropdownPrimitive.SubTrigger ref={ref} className={clsx(item,className)} {...props}>{children}<ChevronRight className="ml-auto size-4"/></DropdownPrimitive.SubTrigger>)
DropdownMenuSubTrigger.displayName=DropdownPrimitive.SubTrigger.displayName
const DropdownMenuSubContent=React.forwardRef<React.ElementRef<typeof DropdownPrimitive.SubContent>,React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent>>(({className,...props},ref)=><DropdownPrimitive.SubContent ref={ref} className={clsx('min-w-40 rounded-[var(--loam-radius-md)] border border-[var(--loam-ink)] bg-[var(--loam-surface)] p-1 shadow-[0_18px_50px_rgb(0_0_0/16%)]',className)} {...props}/>)
DropdownMenuSubContent.displayName=DropdownPrimitive.SubContent.displayName
export { DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuGroup,DropdownMenuItem,DropdownMenuCheckboxItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuSub,DropdownMenuSubTrigger,DropdownMenuSubContent,DropdownMenuRadioGroup }
