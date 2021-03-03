import './AppHeader.scss'
import React, { Fragment, useState } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { CreateMix } from '../CreateMix/CreateMix';
import { logout } from '../../store/actions/UserAction';

function AppHeader(props) {
    let [showCreateMixModal, toggleCreateMix] = useState(false)
    let [showNavOption, toggleNavOpt] = useState(false)
    let [showNavMobile, toggleNavMobile] = useState(false)
    const user = useSelector(state => state.userReducer.loggedInUser)
    const dispatch = useDispatch()
    const handleNavOption = (action) => {
        toggleNavOpt(false)
        if (action === 'profile') {
            return props.history.push(`/user/${user._id}`)
        } else if (action === 'logout') {
            return dispatch(logout())
        }
    }
    const onToggleNavMobile = () => {
        toggleNavMobile(!showNavMobile)
    }

    const ProfileNavOption = () => {
        return (
            <Fragment>
                <div className="nav-profile-option absolute">
                    <div className="profile-btn flex wrap space-around align-center" onClick={() => handleNavOption('profile')}><i className="fal icon fa-user-alt"></i> Profile</div>
                    <div className="profile-btn btn-logout flex wrap space-around align-center" onClick={() => handleNavOption('logout')}><i className="fad fa-sign-out"></i> logout</div>
                </div>

            </Fragment>
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
                {!showNavMobile && <span>|</span>}
                <div className={`profile-link relative flex ${showNavMobile ? 'center-center' : 'align-center'}`}>
                    <i onClick={() => toggleNavOpt(!showNavOption)} className="far fa-user-circle"></i>
                    {showNavOption && <ProfileNavOption />}
                </div>
            </Fragment>
        )
    }
    const CreatMixModel = () => {
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

                <i onClick={onToggleNavMobile} className={`far icon-hamburger fa-${showNavMobile ? 'times' : 'bars'}`}></i>
                <nav className="nav-links flex align-center" style={{ display: showNavMobile && 'flex' }}>
                    {user && <HeaderUser /> || <HeaderGuest />}
                </nav>

            </header>
            {showNavMobile && <div className="back-drop-layer" onClick={() => toggleNavMobile(false)}></div>}
            {showNavOption && <div className="back-drop-layer" onClick={() => toggleNavOpt(false)}></div>}
            <CreatMixModel />
        </Fragment>
    )

}

export default AppHeader = withRouter(AppHeader)