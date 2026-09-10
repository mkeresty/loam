import * as React from 'react'
import { clsx } from 'clsx'
const Divider=({label,className,...props}:React.HTMLAttributes<HTMLDivElement>&{label?:string})=><div role="separator" className={clsx('flex items-center gap-3 text-[var(--loam-ink-soft)]',className)} {...props}><span className="h-px flex-1 bg-[var(--loam-line)]"/>{label&&<span className="font-mono text-[9px] uppercase tracking-[.16em]">{label}</span>}<span className="h-px flex-1 bg-[var(--loam-line)]"/></div>
export { Divider }
