'use client'
import * as React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { clsx } from 'clsx'
type MotionIconProps = { children: React.ReactNode; className?: string; label?: string; motion?: 'tilt'|'turn'|'press'|'none' }
const MotionIcon = React.forwardRef<HTMLSpanElement, MotionIconProps>(({ children, className, label, motion: gesture='tilt' }, ref) => { const reduced=useReducedMotion(); const hover=gesture==='turn'?{rotate:12}:gesture==='press'?{y:1,scale:.94}:gesture==='tilt'?{rotate:-7,y:-1}:{}; return <motion.span ref={ref} aria-hidden={label?undefined:true} aria-label={label} className={clsx('inline-grid size-[1em] shrink-0 place-items-center [&>svg]:size-full',className)} whileHover={reduced?undefined:hover} whileTap={reduced?undefined:{scale:.9}} transition={{type:'spring',stiffness:420,damping:22}}>{children}</motion.span> })
MotionIcon.displayName='MotionIcon'
export { MotionIcon, type MotionIconProps }
