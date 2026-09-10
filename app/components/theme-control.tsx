'use client'
import * as React from 'react'
export function ThemeControl(){const[dark,setDark]=React.useState(false);React.useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':'light'},[dark]);return <button className="docs-theme" onClick={()=>setDark(v=>!v)} aria-label={`Use ${dark?'light':'dark'} theme`}><span aria-hidden="true">{dark?'☾':'☼'}</span><b>{dark?'Night':'Day'}</b></button>}
