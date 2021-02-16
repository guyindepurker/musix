
import React from 'react'

import './Search.scss'

export default function Search({setSearch,placeholderTxt}) {
  
    return (
        <section className="search-cmp">
             <input type="search" onInput={(ev)=>setSearch(ev.target.value)} placeholder={placeholderTxt ? placeholderTxt :'Look for songs'} className="search-input"/>
        </section>
    )
} 
