import React from 'react'
import './SongList.scss'
import SongPreview from '../SongPreview/SongPreview';
import DontMatchResCmp from '../DontMatchResCmp/DontMatchResCmp';

export default function SongList({ songPlayed, songs, updateMix, isUserAdmin, loadSong, isInAddSongs, addSongToMix }) {
    return (
        <ul className="song-list clean-list flex column">
            { (songs.length === 0) && <DontMatchResCmp /> || songs.map((song, idx) => (<SongPreview loadSong={loadSong} songPlayed={songPlayed} updateMix={updateMix} key={song.id} isUserAdmin={isUserAdmin} song={song} isInAddSongs={isInAddSongs} addSongToMix={addSongToMix} idx={idx} />))}
        </ul>
    )
}
