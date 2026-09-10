import { clsx } from 'clsx'
import { LoaderCircleIcon } from '@animateicons/react/lucide/loader-circle-icon'
const Loader=({className,label='Gathering'}:{className?:string;label?:string})=><span role="status" className={clsx('inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.14em]',className)}><span className="grid size-5 place-items-center animate-spin motion-reduce:animate-none"><LoaderCircleIcon size={20} isAnimated={false}/></span>{label}</span>
export { Loader }
