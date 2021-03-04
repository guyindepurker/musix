import './MixPreview.scss'
import React from 'react'

export default function MixPreview({ mix }) {
    return (
        <li className="mix-preview flex column">
            <img className="mix-img" src={mix.imgUrl} alt="mix-img"></img>
            <h2 className="mix-name">{mix.name}</h2>
            <p className="mix-desc">{mix.description}</p>
            <div className="details-container flex">
                <p className="mix-likes"><i className="fas fa-heart"></i>{mix.likes}</p>
                <p className="mix-views"><i className="far fa-eye"></i>{mix.views}</p>
            </div>
        </li>
    )


}


