
import React from 'react'
import './SongList.scss'
import SongPreview from '../SongPreview/SongPreview';
import DontMatchResCmp from '../DontMatchResCmp/DontMatchResCmp';

export default function SongList({ songs,updateMix ,isUserAdmin,loadSong}) {
    console.log('songs:', songs)
    console.log('songs length:', songs.length)
    return (
        <ul className="song-list clean-list flex column">
            { (songs.length ===0) && <DontMatchResCmp />||songs.map((song, idx) => (<SongPreview  loadSong={loadSong} updateMix={updateMix} key={song.id} isUserAdmin={isUserAdmin} song={song} idx={idx} />) )  }
        </ul>   
    )
}


