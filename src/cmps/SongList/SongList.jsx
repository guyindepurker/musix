
import React from 'react'
import './SongList.scss'
import SongPreview from '../SongPreview/SongPreview';

export default function SongList({ songs }) {
    return (
        <ul className="song-list clean-list flex column wrap">
            {songs.map(song => (<SongPreview key={song.id} song={song} />) )}
        </ul>
    )
}


