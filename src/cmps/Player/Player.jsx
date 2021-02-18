
import React, { Component } from 'react'
// import ReactPlayer from 'react-player/youtube'
import './Player.scss'
import { connect } from 'react-redux';
import { loadSong, loadSongs } from '../../store/actions/PlayerAction';
import LoaderCmp from '../LoaderCmp/LoaderCmp';

class Player extends Component {


    state = {
        volume: 0.75
    }

    handleVolumeChange = ({ target }) => {
        this.setState({ volume: target.value })
    }
    changeSong = (action) => {
        const { song, songs, loadSong } = this.props
        let idx = songs.findIndex(currSong => currSong.id === song.id)
        let songsLength = songs.length -1       
        if ( idx >= songsLength) idx = -1
        if (action === 'next') {
            const nextSong = songs[idx + 1]
            loadSong(nextSong)
        } else {
            if(idx===0) idx = songs.length;
            if(idx===-1) idx = 1;
            const prevSong = songs[idx - 1]
            loadSong(prevSong)
        }
    }

    render() {
        const { song } = this.props
        if (!song) return <LoaderCmp></LoaderCmp>
        return (
            <section className="player flex align-center space-between">

                <div className="volume-container">
                    <i className="fas fa-volume"></i>
                    <input
                        className="volume-slider"
                        type="range"
                        value={this.volume}
                        min={0}
                        step={0.05}
                        max={1}
                        onChange={this.handleVolumeChange}
                    />
                </div>

                <div className="song-control flex column align-center">
                    <div className="btns-player-control flex space-around">
                        <button className="shuffle"><i className="fas fa-random"></i></button>
                        <button onClick={() => this.changeSong('prev')} className="prev-song-btn"><i className="fas fa-arrow-to-left"></i></button>
                        <button className="play-song-btn"><i className="fas fa-play"></i></button>
                        <button onClick={() => this.changeSong('next')} className="next-song-btn"><i className="fas fa-arrow-to-right"></i></button>
                    </div>
                    <div className="song-duration-slider">
                        <span className="count-time"></span>
                        <input
                            className="duration-slider"
                            type="range"
                            name="played"
                        />
                        <span className="song-duration"></span>
                    </div>
                </div>

                <div className="song-container flex align-center">
                    <button className="like-song"><i className="far fa-heart"></i></button>
                    <span className="song-name">{song.title}</span>
                    <img className="song-img" src={song.imgUrl} alt="song-img"></img>
                </div>

            </section>
        )


    }
}

function mapStateToProps(state) {
    return {
        song: state.playerReducer.song,
        songs: state.playerReducer.songs,
    }
}
const mapDispatchToProps = {
    loadSong,
    loadSongs
}


export default Player = connect(mapStateToProps, mapDispatchToProps)(Player)





