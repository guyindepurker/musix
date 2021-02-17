
import React, { Component } from 'react'
import ReactPlayer from 'react-player/youtube'
import './Player.scss'

class Player extends Component {

    render() {
        return (

            <ReactPlayer 
            className="player"
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
            volume={1}
            muted={false}
          
            />
        )


    }
}

export default Player
