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
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle } from '../../registry/loam/ui/card'
import { Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger } from '../../registry/loam/ui/dialog'
import { Switch } from '../../registry/loam/ui/switch'
import { Tabs,TabsContent,TabsList,TabsTrigger } from '../../registry/loam/ui/tabs'
import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from '../../registry/loam/ui/accordion'
import { MotionIcon } from '../../registry/loam/ui/motion-icon'
import { ArrowRight } from 'lucide-react'

export function ComponentPreview({slug}:{slug:string}){
  const[toastOpen,setToastOpen]=React.useState(false)
  if(slug==='button')return <div className="preview-variants"><Button>Primary action</Button><Button variant="quiet">Quiet action</Button><Button variant="clay">Seasonal action</Button><Button disabled>Unavailable</Button></div>
  if(slug==='card')return <div className="preview-variants"><Card className="max-w-sm"><CardHeader><CardTitle>Field note № 12</CardTitle><CardDescription>Static by default, with no decorative elevation.</CardDescription></CardHeader><CardContent><p className="font-serif">Leave room for the unexpected.</p></CardContent><CardFooter><span className="kicker">ARCHIVE / SPRING</span></CardFooter></Card><Card interactive className="max-w-sm"><CardHeader><CardTitle>Interactive variant</CardTitle><CardDescription>A small contact response is explicitly requested.</CardDescription></CardHeader></Card></div>
  if(slug==='dialog')return <Dialog><DialogTrigger asChild><Button variant="quiet">Open a thought</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Ideas need a little room.</DialogTitle><DialogDescription>A focused interruption that arrives softly and manages focus correctly.</DialogDescription></DialogHeader><DialogFooter><Button>Continue</Button></DialogFooter></DialogContent></Dialog>
  if(slug==='switch')return <div className="state-stack"><label><span>Garden sounds</span><Switch defaultChecked/></label><label><span>Automatic archive</span><Switch/></label><label><span>Unavailable</span><Switch disabled/></label></div>
  if(slug==='tabs')return <Tabs defaultValue="seed"><TabsList><TabsTrigger value="seed">Seed</TabsTrigger><TabsTrigger value="tend">Tend</TabsTrigger><TabsTrigger value="grow">Grow</TabsTrigger></TabsList><TabsContent value="seed">Begin with the smallest useful thing.</TabsContent><TabsContent value="tend">Return often and adjust with care.</TabsContent><TabsContent value="grow">Let the system expand naturally.</TabsContent></Tabs>
  if(slug==='accordion')return <Accordion type="single" collapsible defaultValue="first"><AccordionItem value="first"><AccordionTrigger>Why copy the code?</AccordionTrigger><AccordionContent>So every detail remains yours to understand and reshape.</AccordionContent></AccordionItem><AccordionItem value="second"><AccordionTrigger>Does motion adapt?</AccordionTrigger><AccordionContent>Yes. Reduced-motion preferences are respected.</AccordionContent></AccordionItem></Accordion>
  if(slug==='motion-icon')return <div className="preview-variants text-2xl"><MotionIcon motion="tilt"><ArrowRight/></MotionIcon><MotionIcon motion="turn"><LoamGlyph name="bloom"/></MotionIcon><MotionIcon motion="press"><LoamGlyph name="seed"/></MotionIcon></div>
  if(slug==='input')return <Input placeholder="Something worth remembering…"/>
  if(slug==='textarea')return <Textarea placeholder="Write the longer version here…"/>
  if(slug==='checkbox')return <label className="check-line"><Checkbox defaultChecked/><span>Keep this note</span></label>
  if(slug==='radio-group')return <RadioGroup defaultValue="field">{['field','garden','archive'].map(x=><label className="radio-line" key={x}><RadioGroupItem value={x}/><span>{x}</span></label>)}</RadioGroup>
  if(slug==='select')return <Select><SelectTrigger><SelectValue placeholder="Choose a season"/></SelectTrigger><SelectContent>{['Spring','Summer','Autumn','Winter'].map(x=><SelectItem key={x} value={x.toLowerCase()}>{x}</SelectItem>)}</SelectContent></Select>
  if(slug==='popover')return <Popover><PopoverTrigger asChild><Button variant="quiet">Open field note</Button></PopoverTrigger><PopoverContent><b className="font-serif text-xl">Nearby context</b><p className="mt-2 font-serif text-sm text-[var(--loam-ink-soft)]">Enough information to continue without leaving the work.</p></PopoverContent></Popover>
  if(slug==='tooltip')return <TooltipProvider><Tooltip><TooltipTrigger asChild><Button variant="quiet">Hover for a note</Button></TooltipTrigger><TooltipContent>A small clarification, kept close.</TooltipContent></Tooltip></TooltipProvider>
  if(slug==='dropdown-menu')return <DropdownMenu><DropdownMenuTrigger asChild><Button variant="quiet">Open actions</Button></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuLabel>Field note</DropdownMenuLabel><DropdownMenuSeparator/><DropdownMenuItem>Rename</DropdownMenuItem><DropdownMenuItem>Move to archive</DropdownMenuItem><DropdownMenuItem>Make a copy</DropdownMenuItem></DropdownMenuContent></DropdownMenu>
  if(slug==='toast')return <ToastProvider><Button onClick={()=>{setToastOpen(false);requestAnimationFrame(()=>setToastOpen(true))}}>Save observation</Button><Toast open={toastOpen} onOpenChange={setToastOpen}><div><ToastTitle>Observation saved</ToastTitle><ToastDescription>The field note is safe in your collection.</ToastDescription></div><ToastClose/></Toast><ToastViewport/></ToastProvider>
  if(slug==='empty-state')return <EmptyState action={<Button>Plant the first note</Button>}/>
  if(slug==='loader')return <Loader/>
  if(slug==='divider')return <Divider label="A new chapter"/>
  if(slug==='glyph')return <div className="flex gap-8 text-4xl"><LoamGlyph name="seed"/><LoamGlyph name="sprout"/><LoamGlyph name="sun"/><LoamGlyph name="ripple"/><LoamGlyph name="bloom"/></div>
  return <Button>{slug==='motion-icon'?'Gesture with me':`Try ${slug}`}</Button>
}
