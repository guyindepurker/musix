
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './AppHeader.scss'

class AppHeader extends Component {

    render() {
        return (<header className="header">
            <h1>Musix</h1>
            <nav>
                <NavLink exact to="/">Home page</NavLink>
                <NavLink exact to="/app">Musix</NavLink>
                <NavLink exact to="/app/mixes">Mixes</NavLink>
                <NavLink exact to="/user/52">User profile</NavLink>
                <NavLink exact to="/app/mix/356656">Mix details</NavLink>
                <NavLink exact to="/signup">Sign up</NavLink>
            </nav>
        </header>)
    }
}

export default AppHeader
