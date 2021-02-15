
import React from 'react'

import './MixPreview.scss'

export default function MixPreview({ mix }) {

    return (
        <li className="mix-preview flex column">
            <img className="mix-img" src={mix.imgUrl} alt="mix-img"></img>
            <h2 className="mix-name">{mix.name}</h2>
            <p className="mix-desc">{mix.description}</p> 
            {/* singers names */}
            <div className="details-container flex">
                <p className="mix-likes"><i class="fas fa-heart"></i>{mix.likes}</p>
                <p className="mix-views"><i class="far fa-eye"></i>{mix.views}</p>
            </div>
        </li>
    )


}


