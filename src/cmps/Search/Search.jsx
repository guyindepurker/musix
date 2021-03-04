
import React from 'react'
import './Search.scss'

export default function Search({ setSearch, placeholderTxt }) {
    return (
        <section className="search-cmp">
            <i className="fal fa-search"></i>
            <input type="search" onInput={(ev) => setSearch(ev.target.value)} placeholder={placeholderTxt ? placeholderTxt : 'Search songs...'} className="search-input" />
        </section>
    )
} 
