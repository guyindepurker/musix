
import React, { Component } from 'react'
// import ReactPlayer from 'react-player/youtube'
import './Player.scss'

class Player extends Component {


    state = {
        volume: 0.75
    }

    handleVolumeChange = ({ target }) => {
        this.setState({ volume: target.value })
    }

    render() {
        const song = {
            "title": "Earth, Wind & Fire - September",
            "id": "mUkffgfiLjooxs",
            "youtubeId": "Gs069dndIYk",
            "imgUrl": "http://i3.ytimg.com/vi/Gs069dndIYk/maxresdefault.jpg",
            "duration": "3:35"
        }

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
                        <button className="prev-song-btn"><i className="fas fa-arrow-to-left"></i></button>
                        <button className="play-song-btn"><i className="fas fa-play"></i></button>
                        <button className="next-song-btn"><i className="fas fa-arrow-to-right"></i></button>
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

export default Player
