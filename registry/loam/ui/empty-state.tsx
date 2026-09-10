import * as React from 'react'
import { clsx } from 'clsx'
import { LoamGlyph } from './glyph'
const EmptyState=({title='Nothing planted yet',description='Begin with one small thing. It can grow from there.',action,className}:React.HTMLAttributes<HTMLDivElement>&{title?:string;description?:string;action?:React.ReactNode})=><div className={clsx('grid min-h-64 place-items-center border-y border-[var(--loam-line)] px-6 py-12 text-center',className)}><div className="max-w-sm"><LoamGlyph name="sprout" className="mb-5 text-4xl text-[var(--loam-clay)]"/><h3 className="font-serif text-3xl font-medium">{title}</h3><p className="mt-3 font-serif text-sm leading-relaxed text-[var(--loam-ink-soft)]">{description}</p>{action&&<div className="mt-6">{action}</div>}</div></div>
export { EmptyState }
