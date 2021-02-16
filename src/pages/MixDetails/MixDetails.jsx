
import React, { Component } from 'react'
import { connect } from 'react-redux';

import './MixDetails.scss'
import { loadMix, updateMix, removeMix } from '../../store/actions/MixAction';
import SongList from '../../cmps/SongList/SongList';
import MixHeader from '../../cmps/MixHeader';
import MixActions from '../../cmps/MixActions';


class _MixDetails extends Component {
    state = {
        filterBySong:null
    }
    componentDidMount() {
        this.loadMix()
    }

    loadMix = async () => {
        await this.props.loadMix(this.props.match.params.id)
    }
    filterBySong = (song) => {
       this.setState({filterBySong:song})
    }
    get songsToShow(){
         const {filterBySong}=this.state
         const { songs } = this.props.mix
        if(filterBySong){
            const songsToShow= songs.filter(song=>song.title.toLowerCase().includes(filterBySong.toLowerCase()))
            return songsToShow
        }
        return songs
    }
    render() {
        const { mix } = this.props
        if (!mix) return <div>Loading....</div>
        const { createdBy, songs } = mix
        return (
            <section className="mix-details">
                <div className="grid grid-header">
                    <MixHeader mix={mix} createdBy={createdBy} songs={songs} />
                </div>
                <div className="grid grid-action">
                    <MixActions setSearch={this.filterBySong} />
                </div>
                <div className="grid grid-content">
                    <SongList songs={this.songsToShow} />
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        mix: state.mixReducer.mix
    }
}
const mapDispatchToProps = {
    loadMix,
    updateMix,
    removeMix
}

export const MixDetails = connect(mapStateToProps, mapDispatchToProps)(_MixDetails)

