
import React, { Component, Fragment } from 'react'
// import ReactPlayer from 'react-player/youtube'
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

    }

    componentDidUpdate({ song }, prevState) {
        if (!this.props.song || !song) return
        if (song.title !== this.props.song.title && !this.state.isPlaying) {
            this.toggleIsPlaying()
        }
    }
    onReady = (event) => {
        console.log('ready')
        event.target.playVideo();
        console.log('event.target:', event.target)
        if (!this.state.isPlaying) {
            this.toggleIsPlaying()
        }
        this.setState({ youtubePlayer: event.target }, this.getTimeLeft)

    }
    componentWillUnmount() {
        clearInterval(this.gInterval);
    }
    getTimeLeft = () => {
        const { youtubePlayer, isPlaying } = this.state
        if (youtubePlayer) {
            console.log('im in the get');
            this.gInterval = setInterval(() => {
                let time = youtubePlayer.getCurrentTime()
                console.log('i am in the getter!', this.duration);
                if (this.duration === time) {
                    this.changeSong('next');
                }
                this.setState({ timeLeft: time }, () => console.log('time left state =', this.state.timeLeft))
            }, 1000)
        }
    }

    toggleIsPlaying = () => {
        this.setState(prevState => ({ isPlaying: !prevState.isPlaying }), () => console.log('SetState Toggle IsLoading', this.state.isPlaying))
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
        if (!this.state.isPlaying) {
            this.toggleIsPlaying()
        }
        this.setState({ timeLeft: 0 })

    }

    changeVolume = ({ target }) => {
        const { youtubePlayer } = this.state
        this.setState({ volume: target.value }, () => {
            youtubePlayer.setVolume(this.state.volume)
        })
    }

    handleSong = (action) => {
        const { youtubePlayer } = this.state
        if (action === 'pause') {
            youtubePlayer.pauseVideo()
            this.toggleIsPlaying()
        } else {
            youtubePlayer.playVideo()
            this.toggleIsPlaying()
        }
    }

    changeTime = ({ target }) => {

        const value = target.value
        const { youtubePlayer } = this.state
        this.setState({ timeLeft: value }, () => {
            youtubePlayer.seekTo(this.state.timeLeft)
        })
    }

    get timeLeft() {
        const { timeLeft } = this.state
        if (timeLeft === 0 || !timeLeft) return '00:00'
        return utilService.showTime(timeLeft)
    }
    get duration() {
        const { youtubePlayer } = this.state
        if (!youtubePlayer) return 0
        return youtubePlayer.getDuration();
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
        const { isPlaying, timeLeft } = this.state
        if (!song) return null
        console.log('duration:', this.duration);
        return (
            <Fragment>
                <section className="player flex align-center space-between">
                    <div className="volume-container flex align-center">
                        <i className="fas grey-icon fa-volume"></i>
                        <input
                            className="slider-duration  volume-slider"
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

                            <button onClick={() => this.changeSong('prev')} className="prev-song-btn"><i className="fas fa-arrow-to-left"></i></button>
                            <button onClick={() => isPlaying ? this.handleSong('pause') : this.handleSong('play')} className="play-song-btn flex center-center"><i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i></button>
                            <button onClick={() => this.changeSong('next')} className="next-song-btn"><i className="fas fa-arrow-to-right"></i></button>
                        </div>
                        <div className="song-duration-slider flex align-center">
                            <span className="grey-icon count-time">{this.timeLeft}</span>
                            <input
                                className="slider-duration  volume-slider"
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
                                <button onClick={() => isPlaying ? this.handleSong('pause') : this.handleSong('play')} className="play-song-btn flex center-center"><i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i></button>
                                <button onClick={() => this.changeSong('next')} className="next-song-btn"><i className="fas fa-arrow-to-right"></i></button>
                            </div>
                            <div className="song-duration-slider flex align-center">
                                <span className="grey-icon count-time">{this.timeLeft}</span>
                                <input
                                    className="slider-duration duration-slider"
                                    type="range"
                                    name="played"
                                    value={timeLeft}
                                    min="0"
                                    max={this.duration}
                                    onChange={this.changeTime}
                                />
                                <span className="grey-icon song-duration">{song.duration}</span>
                            </div>
                        </div>

                        <div className="song-container flex align-center">
                            <button className="like-song"><i className="far fa-heart"></i></button>
                            <span className="song-name">{song.title}</span>
                            <img className="song-img" src={song.imgUrl} alt="song-img"></img>
                        </div>
                    </div>
                </section>
                <YouTube videoId={song.youtubeId} opts={opts} onReady={this.onReady} />
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





