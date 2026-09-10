import * as React from 'react'
import { clsx } from 'clsx'
const Textarea=React.forwardRef<HTMLTextAreaElement,React.ComponentProps<'textarea'>>(({className,...props},ref)=><textarea ref={ref} className={clsx('min-h-28 w-full resize-y border-0 border-b border-[var(--loam-ink)] bg-[repeating-linear-gradient(transparent,transparent_31px,var(--loam-line)_32px)] px-0 py-1 font-serif text-base leading-8 text-[var(--loam-ink)] caret-[var(--loam-clay)] outline-none transition-[border-color,border-width] placeholder:italic placeholder:text-[var(--loam-ink-soft)] focus:border-b-2 focus:border-[var(--loam-clay)] disabled:opacity-50 motion-reduce:transition-none',className)} {...props}/>)
Textarea.displayName='Textarea'
export { Textarea }
