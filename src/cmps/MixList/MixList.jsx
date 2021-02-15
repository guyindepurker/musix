
import React, { Component } from 'react'

import './MixList.scss'
import MixPreview from '../MixPreview/MixPreview';

export default function MixList({mixes}){

 return (
     <ul className="mix-list clean-list">
              {mixes.map(mix=>{
                return( <MixPreview key={mix._id} mix={mix} /> )
            })}
          
     </ul>
 )
}

