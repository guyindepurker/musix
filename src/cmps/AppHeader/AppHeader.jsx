
import React from 'react'
import { NavLink } from 'react-router-dom'
import './AppHeader.scss'

export default function AppHeader() {

    return (
        <header className="app-header flex space-between align-center">
            <NavLink className="logo-container flex align-center" exact to="/">
                <i className="fab fa-spotify"></i>
                <h1>Musix<span className="copyrights">©</span></h1>
            </NavLink>
            <nav className="nav-links flex align-center">
                <NavLink className="mixes-link" exact to="/app/mixes">Mixes</NavLink>
                <NavLink className="signup-link" exact to="/signup">Sign Up</NavLink>
                <span>|</span>
                <div className="profile-link flex align-center">
                    <i className="far fa-user-circle"></i>
                    <NavLink exact to="/user/52">Profile</NavLink>
                </div>
            </nav>
        </header>
    )

}

