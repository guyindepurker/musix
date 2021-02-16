
import React, { Component } from 'react'
import { connect } from 'react-redux';

import './MixDetails.scss'
import { loadMix, updateMix, removeMix, loadMixes } from '../../store/actions/MixAction';
import SongList from '../../cmps/SongList/SongList';
import MixHeader from '../../cmps/MixHeader';
import MixActions from '../../cmps/MixActions';
import LoaderCmp from '../../cmps/LoaderCmp/LoaderCmp';


class _MixDetails extends Component {
    state = {
        filterBySong:null
    }
    componentDidMount() {
        this.loadMix()
        console.log('user:',this.props.user);
        
    }

    loadMix = async () => {
        await this.props.loadMix(this.props.match.params.id)
        if(!this.props.mixes){
            await this.props.loadMixes()
        }
    }
    updateMix = async (key,value) =>{
        console.log('key,value:', key,value)
        const copyMix = {...this.props.mix}
        copyMix[key] = value
        try{
            await this.props.updateMix(copyMix)
        }catch (err){
            console.log('ERR',err);
        }
    }
    removeSong = (id) =>{
        const copyMix = {...this.props.mix}
       let {songs} = copyMix
       let updatedSongs = songs.filter(song=>song.id!==id)
       this.updateMix('songs',updatedSongs)
    }
  

    removeMix=async (mixId)=>{
        const {removeMix,history,loadMixes} = this.props
       try{
           await removeMix(mixId)
           await loadMixes()
           history.push('/app/mix')
       }catch (err){
           console.log('ERR',err);
       }
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
        const { mix,user } = this.props
        if (!mix) return <LoaderCmp></LoaderCmp>
        const { createdBy, songs } = mix
        return (
            <section className="mix-details">
                <div className="grid grid-header">
                    <MixHeader user={user} updateMix={this.updateMix} removeMix={this.removeMix} mix={mix} createdBy={createdBy} songs={songs} />
                </div>
                <div className="grid grid-action">
                    <MixActions setSearch={this.filterBySong} />
                </div>
                <div className="grid grid-content">
                    <SongList isUserAdmin={(user._id===createdBy._id || user.isAdmin)} updateMix={this.removeSong} songs={this.songsToShow} />
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        mix: state.mixReducer.mix,
        mixes: state.mixReducer.mixes,
        user:state.userReducer.loggedinUser

    }
}
const mapDispatchToProps = {
    loadMix,
    updateMix,
    removeMix,
    loadMixes
}

export const MixDetails = connect(mapStateToProps, mapDispatchToProps)(_MixDetails)

