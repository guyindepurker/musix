
import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './AppHeader.scss'

import { useSelector,useDispatch } from 'react-redux';
import { CreateMix } from '../CreateMix/CreateMix';

import { logout } from '../../store/actions/UserAction';

export default function AppHeader() {

    let [showCreateMixModal, toggleCreateMix] = useState(false)
    let [showNavOption,toggleNavOpt] = useState(false)
    const user = useSelector(state => state.userReducer.loggedinUser)
    const dispatch = useDispatch()
    const ProfileNavOption = ()=>{
        return (
            <div className="nav-profile-option absolute">
                <div className="profile-btn"><NavLink exact to={`/user/${user._id}`}>Profile</NavLink></div>
                <div className="profile-btn btn-logout" onClick={()=>dispatch(logout())}>logout</div>  
            </div>
        )
    }
    const HeaderGuest = () => {
        return (
            <Fragment>
                <NavLink className="home-link" exact to="/">Home</NavLink>
                <NavLink className="signup-link" exact to="/signup">Sign Up</NavLink>
            </Fragment>
        )
    }
    const HeaderUser = () => {
        return (
            <Fragment>
                <NavLink className="mixes-link" exact to="/app/mixes">Mixes</NavLink>
                <span user="true" className="create-mix-cmp" onClick={() => toggleCreateMix(!showCreateMixModal)}>Create Mix</span>
                <span>|</span>
                <div className="profile-link relative flex align-center">
                    <i onClick={()=>toggleNavOpt(!showNavOption)} className="far fa-user-circle"></i>
                   {showNavOption&& <ProfileNavOption />}
                </div>
            </Fragment>
        )
    }
    const CreatMixModel = ()=>{
        return (
            <Fragment>
                {showCreateMixModal && <CreateMix closeModal={() => toggleCreateMix(!showCreateMixModal)}></CreateMix>}
            {showCreateMixModal && <div className="back-drop-layer" onClick={() => toggleCreateMix(!showCreateMixModal)}></div>}
            </Fragment>

        )
    }
    return (
        <Fragment>
            <header className="app-header flex space-between align-center">
                <NavLink className="logo-container flex align-center" exact to={user ? '/app' : '/'}>
                    <i className="fab fa-spotify"></i>
                    <h1>Musix<span className="copyrights">©</span></h1>
                </NavLink>
                <nav className="nav-links flex align-center">
                {user&& <HeaderUser /> || <HeaderGuest />}
                </nav>
            </header>

            <CreatMixModel />
        </Fragment>
    )

}

