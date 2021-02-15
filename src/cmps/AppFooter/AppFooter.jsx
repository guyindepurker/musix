
import React from 'react'
import { NavLink } from 'react-router-dom'

import './AppFooter.scss'

export default function AppFooter() {


    return (
        <footer className="app-footer flex">
            <NavLink className="logo-container flex" exact to="/app">
                <i className="fab fa-spotify"></i>
                <h1>Musix<span className="copyrights">©</span></h1>
            </NavLink>
            <ul className="footer-links flex column">
                <NavLink className="home-link" exact to="/">Home</NavLink>
                <NavLink className="mixes-link" exact to="/app/mixes">Mixes</NavLink>
                <NavLink className="signup-link" exact to="/signup">Sign Up</NavLink>
                <NavLink exact to="/user/52">Profile</NavLink>
            </ul>
            <div className="footer-content flex column">
                <span><i className="fal fa-globe-asia"></i> Israel</span>
                <span className="copyrights">© copyrights musix 2021</span>
            </div>
        </footer>
    )


}


