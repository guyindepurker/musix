
import React from 'react'

import './MixHeader.scss'

export default function MixHeader({ mix, createdBy, songs }) {
    return (
        <div className="mix-header flex wrap">
            <img className="img-mix" src={mix.imgUrl} alt="mix img" />
            <div className="mix-header-content flex column">
                <h2 className="mix-name">{mix.name}</h2>
                <h3 className="mix-description">{mix.description}</h3>
                <h4 className="mix-created-by"><span>created by:</span>{createdBy.fullName}</h4>
                <h5 className="mix-genre">{mix.genre}</h5>
                <p className="mix-info ">
                    <span className="mix-likes">{mix.likes} Likes</span>
                    <span className="mix-number-songs"> , {songs.length} songs</span>
                    <span className="mix-number-views">, {mix.views} Views.</span>
                </p>
            </div>
        </div>
    )
}
