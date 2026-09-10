import * as React from 'react'
import { clsx } from 'clsx'
const marks={seed:'●',sprout:'♧',sun:'⊹',ripple:'≋',bloom:'✤'} as const
type LoamGlyphProps=React.HTMLAttributes<HTMLSpanElement>&{name:keyof typeof marks}
const LoamGlyph=React.forwardRef<HTMLSpanElement,LoamGlyphProps>(({name,className,...props},ref)=><span ref={ref} aria-hidden="true" className={clsx('inline-grid size-[1em] place-items-center font-serif leading-none',className)} {...props}>{marks[name]}</span>)
LoamGlyph.displayName='LoamGlyph'
export { LoamGlyph, type LoamGlyphProps }
