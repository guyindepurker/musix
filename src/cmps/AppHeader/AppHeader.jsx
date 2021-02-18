
import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './AppHeader.scss'

import { useSelector } from 'react-redux';
import { CreateMix } from '../CreateMix/CreateMix';
import { times } from 'lodash';


export default function AppHeader() {

    let [showCreateMixModal, toggleCreateMix] = useState(false)

    const user = useSelector(state => state.userReducer.loggedinUser)

    return (
        <Fragment>
            <header className="app-header flex space-between align-center">
                <NavLink className="logo-container flex align-center" exact to="/app">
                    <i className="fab fa-spotify"></i>
                    <h1>Musix<span className="copyrights">©</span></h1>
                </NavLink>
                <nav className="nav-links flex align-center">
                    <NavLink className="home-link" exact to="/">Home</NavLink>
                    <NavLink className="mixes-link" exact to="/app/mixes">Mixes</NavLink>
                    {user && <span user="true" className="create-mix-cmp" onClick={() => toggleCreateMix(!showCreateMixModal)}>Create Mix</span>}
                    <NavLink className="signup-link" exact to="/signup">Sign Up</NavLink>
                    <span>|</span>
                    <div className="profile-link flex align-center">
                        <i className="far fa-user-circle"></i>
                        <NavLink exact to="/user/52">Profile</NavLink>
                    </div>
                </nav>
            </header>
            {showCreateMixModal && <CreateMix closeModal={() => toggleCreateMix(!showCreateMixModal)}></CreateMix>}
            {showCreateMixModal && <div className="back-drop-layer" onClick={()=> toggleCreateMix(!showCreateMixModal)}></div>}
        </Fragment>
    )

}

