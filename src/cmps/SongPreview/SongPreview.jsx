
import React from 'react'

import './SongPreview.scss'

export default function SongPreview({ song,updateMix,isUserAdmin }) {

    return (
        <li className="song-preview flex space-between">
            <div className="song-details flex align-center">
                <i className="song-preview-icon fas fa-play"></i>
                <img className="img-song" src={song.imgUrl} alt="img song" />
                <span className="song-name">{song.title}</span>
                <span className="song-duration">{song.duration}</span>
            </div>
            <div className="song-controls flex align-center">
               {isUserAdmin&&<i onClick={()=>updateMix(song.id)} className="song-preview-icon fas fa-trash-alt"></i>} 
            </div>
        </li>
    )
}
