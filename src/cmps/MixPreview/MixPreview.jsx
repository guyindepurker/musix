
import React from 'react'

import './MixPreview.scss'

export default function MixPreview({mix}){

    return(
        <li className="mix-preview">
            <h2>{mix.name}</h2>
            <p>{mix.description}</p>
        </li>
    ) 
        
    
}


