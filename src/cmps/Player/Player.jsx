
import React, { Component, Fragment } from 'react'
import './Player.scss'
import { connect } from 'react-redux';
import { loadSong, loadSongs } from '../../store/actions/PlayerAction';
import LoaderCmp from '../LoaderCmp/LoaderCmp';
import YouTube from 'react-youtube';
import { utilService } from '../../services/UtilsService';
class Player extends Component {
    gInterval
    state = {
        volume: 5,
        isPlaying: false,
        youtubePlayer: null,
        timeLeft: 0,
        videoUrl: ''

    }

    componentDidUpdate(prevState) {
        const { youtubePlayer, isPlaying } = this.state
        if (youtubePlayer && isPlaying) {
            this.gInterval = setInterval(() => {
                let time = youtubePlayer.getCurrentTime()
                this.setState({ timeLeft: time })
            }, 1000)
        } else if (prevState.isPlaying !== isPlaying) {
            clearInterval(this.gInterval)
        }
    }
    onReady = (event) => {
        // event.target.playVideo();
        event.target.pauseVideo();
        this.setState(prevState => ({ isPlaying: !prevState.isPlaying, youtubePlayer: event.target }))

    }

    toggleIsPlaying = () => {
        this.setState(prevState => ({ isPlaying: !prevState.isPlaying }))
    }

    changeSong = (action) => {
        const { song, songs, loadSong } = this.props
        let idx = songs.findIndex(currSong => currSong.id === song.id)
        let songsLength = songs.length - 1
        if (idx >= songsLength) idx = -1
        if (action === 'next') {
            const nextSong = songs[idx + 1]
            loadSong(nextSong)
        } else {
            if (idx === 0) idx = songs.length;
            if (idx === -1) idx = 1;
            const prevSong = songs[idx - 1]
            loadSong(prevSong)
        }
        this.toggleIsPlaying()
    }

    changeVolume = ({ target }) => {
        const { youtubePlayer } = this.state
        this.setState({ volume: target.value }, () => {
            console.log('this.state.volume:', this.state.volume)
            youtubePlayer.setVolume(this.state.volume)
        })
    }

    handleSong = (action) => {
        const { youtubePlayer } = this.state
        if (action === 'pause') {
            youtubePlayer.pauseVideo()
            clearInterval(this.gInterval)
        } else {
            youtubePlayer.playVideo()
        }
        this.toggleIsPlaying()
    }

    changeTime = ({ target }) => {
        // TO FIX 
        const value = target.value
        const { youtubePlayer } = this.state
        youtubePlayer.seekTo(value)
    }

    get timeLeft() {
        const { timeLeft } = this.state
        if (timeLeft === 0) return '00:00'
        return utilService.showTime(timeLeft)
    }

    render() {
        const opts = {
            height: '0',
            width: '0',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };
        const { song } = this.props
        const { isPlaying, duration, timeLeft } = this.state

        if (!song) return <LoaderCmp></LoaderCmp>
        return (
            <Fragment>
                <section className="player flex align-center space-between">
                    <div className="volume-container flex align-center">
                        <i className="fas fa-volume"></i>
                        <input
                            className="volume-slider"
                            type="range"
                            value={this.volume}
                            min="0"
                            step="1"
                            max="100"
                            onChange={this.changeVolume}
                        />
                    </div>

                    <div className="song-control flex column align-center">
                        <div className="btns-player-control flex space-around">
                            <button className="shuffle"><i className="fas fa-random"></i></button>
                            <button onClick={() => this.changeSong('prev')} className="prev-song-btn"><i className="fas fa-arrow-to-left"></i></button>
                            <button onClick={() => isPlaying ? this.handleSong('pause') : this.handleSong('play')} className="play-song-btn"><i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i></button>
                            <button onClick={() => this.changeSong('next')} className="next-song-btn"><i className="fas fa-arrow-to-right"></i></button>
                        </div>

                        <div className="song-duration-slider flex align-center">
                            <span className="count-time">{this.timeLeft}</span>
                            <input
                                className="duration-slider"
                                type="range"
                                name="played"
                                value={timeLeft}
                                min="0"
                                max={duration}
                                onChange={this.changeTime}
                            />
                            <span className="song-duration">{song.duration}</span>
                        </div>
                    </div>

                    <div className="song-container flex align-center">
                        <button className="like-song"><i className="far fa-heart"></i></button>
                        <span className="song-name">{song.title}</span>
                        <img className="song-img" src={song.imgUrl} alt="song-img"></img>
                    </div>
                </section>
                <div className="youtube-player">
                    <YouTube videoId={song.youtubeId} opts={opts} onReady={this.onReady} />
                </div>
            </Fragment>
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





