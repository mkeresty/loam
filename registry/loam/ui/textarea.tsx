import * as React from 'react'
import { clsx } from 'clsx'
const Textarea=React.forwardRef<HTMLTextAreaElement,React.ComponentProps<'textarea'>>(({className,...props},ref)=><textarea ref={ref} className={clsx('min-h-28 w-full resize-y rounded-[var(--loam-radius-md)] border border-[var(--loam-ink)] bg-transparent px-4 py-3 font-serif text-base leading-7 text-[var(--loam-ink)] caret-[var(--loam-clay)] outline-none transition-colors placeholder:italic placeholder:text-[var(--loam-ink-soft)] focus:border-[var(--loam-clay)] disabled:opacity-50 motion-reduce:transition-none',className)} {...props}/>)
Textarea.displayName='Textarea'
export { Textarea }
