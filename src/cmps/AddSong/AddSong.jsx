
// import React, { Component } from 'react'

// import './AddSong.scss'

// class AddSong extends Component {

//     render() {

//     }
// }

// export default AddSong
import React, { Component } from 'react'
import Search from '../Search'
import './AddSong.scss'
import { youtubeService } from '../../services/YoutubeService';
import SongList from '../SongList/SongList';

class AddSong extends Component {

    state = {
        searchTerm: '',
        songs:null
    }

    handleInputChange = (ev) => {
        this.setState({ searchTerm: ev.target.value })
    }

    getSongs = async () => {
        const { searchTerm } = this.state;
        if(!searchTerm) return;
        const songs = await youtubeService.getSongs(searchTerm);
        console.log('songs youtube:', songs)
        if (!songs) return;
        this.setState({ songs });
    }

    render() {
        const { songs } = this.state
        const { addSongToMix,closeModal } = this.props
        return (
            <section className="add-song flex column align-center">
                <i onClick={closeModal} className="fas close-btn fa-times"></i>
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


export default AddSong