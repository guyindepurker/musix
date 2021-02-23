
import React from 'react'
import './SongList.scss'
import SongPreview from '../SongPreview/SongPreview';
import DontMatchResCmp from '../DontMatchResCmp/DontMatchResCmp';

export default function SongList({ songPlayed,songs,updateMix ,isUserAdmin,loadSong}) {
    return (
        <ul className="song-list clean-list flex column">
            { (songs.length ===0) && <DontMatchResCmp />||songs.map((song, idx) => (<SongPreview songPlayed={songPlayed}  loadSong={loadSong} updateMix={updateMix} key={song.id} isUserAdmin={isUserAdmin} song={song} idx={idx} />) )  }
        </ul>   
    )
}


