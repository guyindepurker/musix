
import React, { Component } from 'react'

import './MixList.scss'
import MixPreview from '../MixPreview/MixPreview';

export default function MixList({mixes,title}){

 return (
     <ul className="mix-list clean-list">
            {title && <h2>{title}</h2>}
              {mixes.map(mix=>{
                return( <MixPreview key={mix._id} mix={mix} /> )
            })}
          
     </ul>
 )
}

