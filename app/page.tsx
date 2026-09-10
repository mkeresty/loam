'use client';
import { ArrowRight, Asterisk, Copy, Feather, Layers3, X } from 'lucide-react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { useState } from 'react';

const installCommand = 'npx shadcn@latest add https://loam-ui.chalky-dill-5956.chatgpt.site/r/button.json';
function DemoButton({ children, quiet = false }: { children: React.ReactNode; quiet?: boolean }) {
  return <button className={quiet ? 'demo-button demo-button--quiet' : 'demo-button'}>{children}</button>;
}
export default function Home() {
  const [copied, setCopied] = useState(false);
  function copyInstall() { void navigator.clipboard.writeText(installCommand); setCopied(true); window.setTimeout(() => setCopied(false), 1600); }
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Loam home"><span className="brand-mark"><Asterisk size={18} strokeWidth={2.5}/></span><span>LOAM</span></a>
      <div className="nav-links"><a href="#components">Components</a><a href="#principles">Principles</a><a href="/r/registry.json">Registry</a></div>
      <a className="nav-cta" href="#install">Get started <ArrowRight size={15}/></a>
    </nav>
    <section className="hero shell" id="top">
      <div className="eyebrow"><span/> An open component experiment</div>
      <h1>Interfaces with<br/><em>something to say.</em></h1>
      <p className="hero-copy">A copy-paste React component library for expressive products—shaped by print, natural materials, and the satisfying physics of real objects.</p>
      <div className="hero-actions"><a className="demo-button hero-primary" href="#components">Explore components <ArrowRight size={17}/></a><a className="text-link" href="#install">Read the field notes <span>↘</span></a></div>
      <div className="specimen" aria-label="Interactive component specimen">
        <div className="specimen-note note-one">built to feel<br/>good to use <span>↙</span></div><div className="specimen-note note-two">press it!</div>
        <div className="button-stack"><DemoButton>Plant the idea <Feather size={17}/></DemoButton><DemoButton quiet>Keep exploring</DemoButton></div>
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/><Asterisk className="specimen-star" size={34}/>
      </div>
    </section>
    <section className="marquee" aria-label="Design qualities"><div>TACTILE <Asterisk/> EDITORIAL <Asterisk/> CONSIDERED <Asterisk/> ALIVE <Asterisk/> TACTILE <Asterisk/> EDITORIAL</div></section>
    <section className="components shell" id="components">
      <div className="section-heading"><div><span className="kicker">01 / THE FIRST FORMS</span><h2>Small pieces,<br/><em>distinct character.</em></h2></div><p>Familiar primitives, tuned with depth, tempo, and a point of view. Own the code. Change every detail.</p></div>
      <div className="component-grid">
        <article className="component-card butter"><div className="card-top"><span>BUTTON</span><span>01</span></div><div className="card-stage"><DemoButton>Make something <ArrowRight size={16}/></DemoButton></div><p>A satisfying press, a small invitation.</p></article>
        <article className="component-card moss"><div className="card-top"><span>CARD</span><span>02</span></div><div className="card-stage"><div className="mini-card"><span className="mini-tag">FIELD NOTE № 12</span><Feather size={26}/><h3>Leave room for<br/>the unexpected.</h3><div className="mini-line"/></div></div><p>Layered surfaces that lift when approached.</p></article>
        <article className="component-card clay"><div className="card-top"><span>DIALOG</span><span>03</span></div><div className="card-stage">
          <DialogPrimitive.Root><DialogPrimitive.Trigger asChild><DemoButton quiet>Open a thought <Layers3 size={16}/></DemoButton></DialogPrimitive.Trigger><DialogPrimitive.Portal><DialogPrimitive.Overlay className="dialog-overlay"/><DialogPrimitive.Content className="dialog-content"><DialogPrimitive.Close className="dialog-close" aria-label="Close dialog"><X size={16}/></DialogPrimitive.Close><span className="kicker">A SMALL INTERRUPTION</span><DialogPrimitive.Title>Ideas need a little room.</DialogPrimitive.Title><DialogPrimitive.Description>Loam dialogs arrive softly, keep focus where it belongs, and leave without making a scene.</DialogPrimitive.Description><DialogPrimitive.Close asChild><button className="demo-button">That feels right</button></DialogPrimitive.Close></DialogPrimitive.Content></DialogPrimitive.Portal></DialogPrimitive.Root>
        </div><p>Focused moments with a gentle entrance.</p></article>
      </div>
    </section>
    <section className="principles shell" id="principles"><div className="principle-intro"><span className="kicker">02 / UNDER THE SURFACE</span><h2>A system with<br/><em>natural rhythm.</em></h2></div><div className="principle-list">{[
      ['Depth, not decoration','Shadows describe how an object sits in space. Every layer has a reason.'],['Motion with manners','Springy where it rewards interaction. Quiet where content needs focus.'],['Warm by default','Paper, ink, moss, clay, and sun—tokens that begin somewhere human.']
    ].map(([title,copy],index)=><div className="principle" key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></section>
    <section className="install shell" id="install"><span className="kicker">03 / TAKE IT WITH YOU</span><h2>Your code.<br/><em>Your garden.</em></h2><p>Install one component at a time with the shadcn CLI. No package lock-in, no mystery layer.</p><button className="command" onClick={copyInstall} aria-label="Copy install command"><code>{installCommand}</code><span><Copy size={15}/> {copied?'Copied':'Copy'}</span></button></section>
    <footer className="shell"><a className="brand" href="#top"><span className="brand-mark"><Asterisk size={18}/></span> LOAM</a><p>Components for thoughtful digital work.</p><span>Made slowly · 2026</span></footer>
  </main>;
}
