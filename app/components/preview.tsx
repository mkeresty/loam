'use client'
import * as React from 'react'
import { Button } from '../../registry/loam/ui/button'
import { Input } from '../../registry/loam/ui/input'
import { Textarea } from '../../registry/loam/ui/textarea'
import { Checkbox } from '../../registry/loam/ui/checkbox'
import { RadioGroup,RadioGroupItem } from '../../registry/loam/ui/radio-group'
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from '../../registry/loam/ui/select'
import { Popover,PopoverContent,PopoverTrigger } from '../../registry/loam/ui/popover'
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from '../../registry/loam/ui/tooltip'
import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger } from '../../registry/loam/ui/dropdown-menu'
import { Toast,ToastClose,ToastDescription,ToastProvider,ToastTitle,ToastViewport } from '../../registry/loam/ui/toast'
import { EmptyState } from '../../registry/loam/ui/empty-state'
import { Loader } from '../../registry/loam/ui/loader'
import { Divider } from '../../registry/loam/ui/divider'
import { LoamGlyph } from '../../registry/loam/ui/glyph'

export function ComponentPreview({slug}:{slug:string}){
  const[toastOpen,setToastOpen]=React.useState(false)
  if(slug==='input')return <Input placeholder="Something worth remembering…"/>
  if(slug==='textarea')return <Textarea placeholder="Write the longer version here…"/>
  if(slug==='checkbox')return <label className="check-line"><Checkbox defaultChecked/><span>Keep this note</span></label>
  if(slug==='radio-group')return <RadioGroup defaultValue="field">{['field','garden','archive'].map(x=><label className="radio-line" key={x}><RadioGroupItem value={x}/><span>{x}</span></label>)}</RadioGroup>
  if(slug==='select')return <Select><SelectTrigger><SelectValue placeholder="Choose a season"/></SelectTrigger><SelectContent>{['Spring','Summer','Autumn','Winter'].map(x=><SelectItem key={x} value={x.toLowerCase()}>{x}</SelectItem>)}</SelectContent></Select>
  if(slug==='popover')return <Popover><PopoverTrigger asChild><Button variant="quiet">Open field note</Button></PopoverTrigger><PopoverContent><b className="font-serif text-xl">Nearby context</b><p className="mt-2 font-serif text-sm text-[var(--loam-ink-soft)]">Enough information to continue without leaving the work.</p></PopoverContent></Popover>
  if(slug==='tooltip')return <TooltipProvider><Tooltip><TooltipTrigger asChild><Button variant="quiet">Hover for a note</Button></TooltipTrigger><TooltipContent>A small clarification, kept close.</TooltipContent></Tooltip></TooltipProvider>
  if(slug==='dropdown-menu')return <DropdownMenu><DropdownMenuTrigger asChild><Button variant="quiet">Open actions</Button></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuLabel>Field note</DropdownMenuLabel><DropdownMenuSeparator/><DropdownMenuItem>Rename</DropdownMenuItem><DropdownMenuItem>Move to archive</DropdownMenuItem><DropdownMenuItem>Make a copy</DropdownMenuItem></DropdownMenuContent></DropdownMenu>
  if(slug==='toast')return <ToastProvider><Button onClick={()=>setToastOpen(false)||requestAnimationFrame(()=>setToastOpen(true))}>Save observation</Button><Toast open={toastOpen} onOpenChange={setToastOpen}><div><ToastTitle>Observation saved</ToastTitle><ToastDescription>The field note is safe in your collection.</ToastDescription></div><ToastClose/></Toast><ToastViewport/></ToastProvider>
  if(slug==='empty-state')return <EmptyState action={<Button>Plant the first note</Button>}/>
  if(slug==='loader')return <Loader/>
  if(slug==='divider')return <Divider label="A new chapter"/>
  if(slug==='glyph')return <div className="flex gap-8 text-4xl"><LoamGlyph name="seed"/><LoamGlyph name="sprout"/><LoamGlyph name="sun"/><LoamGlyph name="ripple"/><LoamGlyph name="bloom"/></div>
  return <Button>{slug==='motion-icon'?'Gesture with me':`Try ${slug}`}</Button>
}
