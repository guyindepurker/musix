
import React, { Component } from 'react'
import Search from '../Search'
import './AddSongs.scss'
import { youtubeService } from '../../services/YoutubeService';
import SongList from '../SongList/SongList';

class AddSongs extends Component {

    state = {
        searchTerm: ''
    }

    handleInputChange = (ev) => {
        this.setState({ searchTerm: ev.target.value })
    }

    getSongs = async () => {
        const { searchTerm } = this.state;
        const songs = await youtubeService.getSongs(searchTerm);
        if (!songs) return;
        this.setState({ songs });
    }

    render() {
        const { songs } = this.state
        const { addSongToMix } = this.props
        return (
            <section className="add-songs flex column align-center">
                <div className="search-container flex">
                    <input className="search-input" type="search" onInput={this.handleInputChange} placeholder="search songs..." />
                    <button className="search-btn" onClick={this.getSongs}>Search</button>
                </div>
                {songs &&
                    <div className="song-list-container">
                        <SongList songs={songs} isInAddSongs={true} addSongToMix={addSongToMix}></SongList>
                    </div>
                }
            </section>
        )
    }
}


export default AddSongs
