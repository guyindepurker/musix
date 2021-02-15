
import React from 'react'

import './Search.scss'

export default function Search(props) {
  
   function hendleInput(txt) {
       console.log('search for:',txt);
   } 
    return (
        <section className="search-cmp">
             <input type="search" onInput={(ev)=>hendleInput(ev.target.value)} placeholder="Look for songs" className="search-input"/>
        </section>
    )
} 
