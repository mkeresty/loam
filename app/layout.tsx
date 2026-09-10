import type { Metadata } from 'next';
import { DM_Sans, DM_Mono, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const mono = DM_Mono({ variable: '--font-mono', weight: ['400','500'], subsets: ['latin'] });
const serif = Cormorant_Garamond({ variable: '--font-serif', weight: ['400','500','600'], subsets: ['latin'] });
export const metadata: Metadata = { metadataBase:new URL('https://loam-ui.chalky-dill-5956.chatgpt.site'), title:'Loam — Useful things, drawn with feeling', description:'A flat, illustrated React component library shaped by field guides, independent publishing, and natural motion.', openGraph:{title:'Loam — Useful things, drawn with feeling',description:'A flat, illustrated React component library for thoughtful digital work.',type:'website'} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${sans.variable} ${mono.variable} ${serif.variable}`}>{children}</body></html>}
