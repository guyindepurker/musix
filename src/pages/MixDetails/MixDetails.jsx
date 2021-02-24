
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import './MixDetails.scss'
import { loadMix, updateMix, removeMix, loadMixes } from '../../store/actions/MixAction';
import SongList from '../../cmps/SongList/SongList';
import MixHeader from '../../cmps/MixHeader';
import MixActions from '../../cmps/MixActions';
import LoaderCmp from '../../cmps/LoaderCmp/LoaderCmp';
import { utilService } from '../../services/UtilsService';
import Player from '../../cmps/Player/Player';
import { loadSongs, loadSong } from '../../store/actions/PlayerAction';
import { userService } from '../../services/UserService';
import { youtubeService } from '../../services/YoutubeService';
class _MixDetails extends Component {
    state = {
        filterBySong: null
    }
    componentDidMount() {
        this.loadMix()


    }
    componentWillUnmount() {
        this.props.loadMix(undefined)
    }

    loadMix = async () => {
        await this.props.loadMix(this.props.match.params.id)
        this.props.loadSongs(this.props.mix.songs)
        this.props.loadSong(this.props.mix.songs[0])
        if (!this.props.mixes) {
            await this.props.loadMixes()
        }
    }
    likeByUser = () => {
        const copyMix = { ...this.props.mix }
        const miniUser = userService.getMiniUser()
        const { likedByUsers } = copyMix
        const isLike = likedByUsers.find(user => user._id === miniUser._id)
        if (isLike) return;
        let likes = [...likedByUsers, miniUser]
        this.updateMix('likedByUsers', likes)
    }
    unLikeByUser = () => {
        const copyMix = { ...this.props.mix }
        const miniUser = userService.getMiniUser()
        const { likedByUsers } = copyMix
        const likes = likedByUsers.filter(user => user._id !== miniUser._id)
        this.updateMix('likedByUsers', likes)
    }
    updateMix = async (key, value) => {
        const copyMix = { ...this.props.mix }
        copyMix[key] = value
        try {
            await this.props.updateMix(copyMix)
        } catch (err) {
            console.log('ERR', err);
        }
    }
    removeSong = (id) => {
        const copyMix = { ...this.props.mix }
        let { songs } = copyMix
        let updatedSongs = songs.filter(song => song.id !== id)
        this.updateMix('songs', updatedSongs)
    }
    addSongToMix = async (song) => {
        console.log('song in addSongToMix<<<<<', song);
        const copyMix = { ...this.props.mix }
        const isAlreadyInMix = copyMix.songs.find(currSong => currSong.youtubeId === song.youtubeId)
        if (isAlreadyInMix) return;
        song.duration = await youtubeService.getSongDuration(song.youtubeId)
        const songs = [...copyMix.songs, song]
        this.updateMix('songs', songs)
    }
    loadSongToPlayer = (song) => {
        this.props.loadSong(song)
    }
    removeMix = async (mixId) => {
        const { removeMix, history, loadMixes } = this.props
        try {
            await removeMix(mixId)
            await loadMixes()
            history.push('/app/mix')
        } catch (err) {
            console.log('ERR', err);
        }
    }

    filterBySong = (song) => {
        this.setState({ filterBySong: song })
    }
    get songsToShow() {
        const { filterBySong } = this.state
        const { songs } = this.props.mix
        if (filterBySong) {
            const songsToShow = songs.filter(song => utilService.findMatchLowerCase(song.title, filterBySong))
            return songsToShow
        }
        return songs
    }
    get isLike() {
        const { mix, user } = this.props
        const isLike = mix.likedByUsers.some(lUser => lUser._id === user._id)
        return isLike
    }
    render() {
        const { mix, user, songPlayed } = this.props
        if (!mix) return <LoaderCmp></LoaderCmp>
        const { createdBy, songs } = mix
        return (

            <section className="mix-details">
                <div className="grid grid-header">
                    <MixHeader user={user} updateMix={this.updateMix} removeMix={this.removeMix} mix={mix} createdBy={createdBy} songs={songs} />
                </div>
                <div className="grid grid-action">
                    <MixActions isLike={this.isLike} like={this.likeByUser} unLike={this.unLikeByUser} pathName={this.props.history.location.pathname} setSearch={this.filterBySong} addSongToMix={this.addSongToMix} />
                </div>
                <div className="grid grid-content">
                    <SongList songPlayed={songPlayed || null} loadSong={this.loadSongToPlayer} isUserAdmin={(user._id === createdBy._id || user.isAdmin)} updateMix={this.removeSong} songs={this.songsToShow} />
                </div>
                <div className=" grid-player">
                    <Player></Player>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        mix: state.mixReducer.mix,
        mixes: state.mixReducer.mixes,
        user: state.userReducer.loggedinUser,
        songPlayed: state.playerReducer.song,
    }
}
const mapDispatchToProps = {
    loadMix,
    updateMix,
    removeMix,
    loadMixes,
    loadSongs,
    loadSong
}

export const MixDetails = connect(mapStateToProps, mapDispatchToProps)(_MixDetails)

