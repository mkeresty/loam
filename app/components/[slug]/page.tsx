import { notFound } from 'next/navigation'
import Link from 'next/link'
import { components,componentBySlug } from '../../../lib/components'
import { ComponentPreview } from '../preview'
import { ThemeControl } from '../theme-control'

export function generateStaticParams(){return components.map(([slug])=>({slug}))}

export default async function ComponentPage({params}:{params:Promise<{slug:string}>}){
  const{slug}=await params
  const item=componentBySlug(slug)
  if(!item)notFound()
  const[,name,description]=item
  const command=`npx shadcn@latest add mkeresty/loam/${slug}`
  return <main>
    <nav className="nav shell"><Link className="brand" href="/"><span className="brand-flower">✵</span>LOAM</Link><div className="docs-nav-actions"><Link href="/components">All components</Link><ThemeControl/></div></nav>
    <article className="docs-detail shell">
      <header><span className="kicker">COMPONENT / {slug.toUpperCase()}</span><h1>{name}</h1><p>{description} Own the source, adjust the details, and keep the interaction legible.</p></header>
      <section className="preview-frame"><div className="preview-label"><span>INTERACTIVE SPECIMEN</span><span>TRY EVERY STATE</span></div><div className="preview-stage"><ComponentPreview slug={slug}/></div></section>
      <div className="docs-columns"><section><span className="kicker">INSTALL</span><code>{command}</code><Link className="registry-source" href={`/r/${slug}.json`}>View registry source ↗</Link></section><section><span className="kicker">MOTION</span><p>Motion describes state, respects reduced-motion preferences, and never changes the control’s footprint.</p></section><section><span className="kicker">ACCESSIBILITY</span><p>Built on semantic controls or Radix primitives with keyboard behavior, focus management, and clear state.</p></section><section><span className="kicker">VARIANTS</span><p>Default is flat. Quiet removes fill. Seasonal adds one contextual accent. Elevated depth is reserved for overlays.</p></section></div>
      <nav className="docs-next"><Link href="/components">← Component index</Link><Link href={`/components/${components[(components.findIndex(x=>x[0]===slug)+1)%components.length][0]}`}>Next specimen →</Link></nav>
    </article>
  </main>
}
