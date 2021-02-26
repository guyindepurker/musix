
// import React from 'react'

// import './SongPreview.scss'

// export default function SongPreview({ songPlayed,song, updateMix, isUserAdmin, idx,loadSong }) {
//     let number = idx + 1;
//     const isMatch = songPlayed?.id === song.id 
//     return (
//         <li className="song-preview flex space-between">
//             <div onClick={()=>loadSong(song)} className={`song-details flex align-center ${isMatch&&'played-song' || ''}`}>
//                 <span className="song-number">{number}</span>
//                 <i className="song-preview-icon fas fa-play"></i>
//                 <img className="img-song" src={song.imgUrl} alt="img song" />
//                 <span className="song-name">{song.title}</span>
//                 <span className="song-duration">{song.duration}</span>
//             </div>
//             <div className="song-controls flex align-center">
//                 {isUserAdmin && <i onClick={() => updateMix(song.id)} className="song-preview-icon fas fa-trash-alt"></i>}
//             </div>
//         </li>
//     )
// }
import React, { Fragment } from 'react'

import './SongPreview.scss'


export default function SongPreview({ songPlayed,song, updateMix, isUserAdmin, idx, loadSong, isInAddSongs, addSongToMix }) {
    let number = idx + 1;
    const isMatch = songPlayed?.id === song.id 
    
    return (
        <section className="song-preview-container flex align-center">
            <li className="song-preview flex space-between">
                <div onClick={() => isInAddSongs ? addSongToMix(song) : loadSong(song)} className={`song-details flex align-center ${isMatch&&'played-song' || ''}`}>
                    {!isInAddSongs && <span className="song-number">{number}</span>}
                    {!isInAddSongs && <i className="song-preview-icon fas fa-play"></i>}
                    <img className="img-song" src={song.imgUrl} alt="img song" />
                    <span className="song-name">{song.title}</span>
                    <span className="song-duration">{song.duration}</span>
                </div>
                <div className="song-controls flex align-center">
                    {!isInAddSongs && isUserAdmin && <i onClick={() => updateMix(song.id)} className="song-preview-icon fas fa-trash-alt"></i>}
                </div>
            </li>
            {isInAddSongs && <button className="add-song-btn" onClick={() => addSongToMix(song)}><i className="fas fa-plus"></i></button>}
        </section>

    )
}
