'use client'
import * as React from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'lucide-react'
import { clsx } from 'clsx'
const ToastProvider=ToastPrimitive.Provider
const ToastViewport=React.forwardRef<React.ElementRef<typeof ToastPrimitive.Viewport>,React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>>(({className,...props},ref)=><ToastPrimitive.Viewport ref={ref} className={clsx('fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col gap-2 p-4 sm:max-w-[390px]',className)} {...props}/>)
ToastViewport.displayName=ToastPrimitive.Viewport.displayName
const Toast=React.forwardRef<React.ElementRef<typeof ToastPrimitive.Root>,React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>>(({className,...props},ref)=><ToastPrimitive.Root ref={ref} className={clsx('group pointer-events-auto relative grid grid-cols-[1fr_auto] items-start gap-x-4 rounded-[var(--loam-radius-md)] border border-[var(--loam-ink)] bg-[var(--loam-surface)] p-5 text-[var(--loam-ink)] shadow-[0_18px_50px_rgb(0_0_0/16%)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-bottom-3 data-[state=closed]:fade-out data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] motion-reduce:animate-none',className)} {...props}/>)
Toast.displayName=ToastPrimitive.Root.displayName
const ToastTitle=React.forwardRef<React.ElementRef<typeof ToastPrimitive.Title>,React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>>(({className,...props},ref)=><ToastPrimitive.Title ref={ref} className={clsx('font-serif text-lg font-medium',className)} {...props}/>)
ToastTitle.displayName=ToastPrimitive.Title.displayName
const ToastDescription=React.forwardRef<React.ElementRef<typeof ToastPrimitive.Description>,React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>>(({className,...props},ref)=><ToastPrimitive.Description ref={ref} className={clsx('mt-1 font-serif text-sm text-[var(--loam-ink-soft)]',className)} {...props}/>)
ToastDescription.displayName=ToastPrimitive.Description.displayName
const ToastAction=React.forwardRef<React.ElementRef<typeof ToastPrimitive.Action>,React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>>(({className,...props},ref)=><ToastPrimitive.Action ref={ref} className={clsx('mt-3 justify-self-start border-b border-[var(--loam-ink)] font-mono text-[9px] uppercase tracking-[.12em]',className)} {...props}/>)
ToastAction.displayName=ToastPrimitive.Action.displayName
const ToastClose=React.forwardRef<React.ElementRef<typeof ToastPrimitive.Close>,React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>>(({className,...props},ref)=><ToastPrimitive.Close ref={ref} className={clsx('col-start-2 row-start-1 grid size-7 place-items-center rounded-full border border-[var(--loam-line)]',className)} {...props}><X className="size-3.5"/><span className="sr-only">Close</span></ToastPrimitive.Close>)
ToastClose.displayName=ToastPrimitive.Close.displayName
export { ToastProvider,ToastViewport,Toast,ToastTitle,ToastDescription,ToastAction,ToastClose }
