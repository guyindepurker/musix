
import React, { Component, Fragment } from 'react'
import Search from '../../cmps/Search/Search';
import AddSongs from '../AddSongs/AddSongs';

import './MixActions.scss'

export default class MixActions extends Component {
    state = {
        isAddSongsModalShowen: false
    }

    toggleAddSongsModal = () => {
        this.setState(prevState => ({ isAddSongsModalShowen: !prevState.isAddSongsModalShowen }))
    }

    render() {
        const { isAddSongsModalShowen } = this.state
        const {setSearch, addSongToMix} = this.props
        return (
            <Fragment>
                <div className="mix-actions  flex space-between align-center">
                    <div className="mix-controls flex align-center">
                        <button className="toggle-add-songs-btn">
                            <i className="fas fa-plus" onClick={this.toggleAddSongsModal}></i>
                        </button>
                        <div className="search-container-controls">
                            <Search placeholderTxt="Search songs..." setSearch={setSearch} />
                        </div>
                    </div>
                    <div className="mix-social flex align-center">
                        <i className="mix-control-icon mix-icon-like far fa-heart"></i>
                        {/* this is active like btn <i className="mix-control-icon mix-icon-like mix-icon-like-active fas fa-heart"></i> */}
                        <i className="mix-control-icon fab fa-facebook"></i>
                        <i className="mix-control-icon fab fa-whatsapp"></i>
                    </div>
                </div>
                {isAddSongsModalShowen && <AddSongs addSongToMix={addSongToMix}></AddSongs>}
                {isAddSongsModalShowen && <div className="back-drop-layer" onClick={this.toggleAddSongsModal}></div>}

            </Fragment>
        )
    }
}
