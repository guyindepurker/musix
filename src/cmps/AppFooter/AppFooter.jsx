import './AppFooter.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function AppFooter(props) {
    if (props.mix) return null;
    return (
        <footer className="app-footer ">
            <div className="main-footer container flex wrap ">
                <div className="logo-main">
                    <NavLink className="logo-container flex" exact to="/app">
                        <i className="fab fa-spotify"></i>
                        <h1>Musix<span className="copyrights">©</span></h1>
                    </NavLink>
                </div>
                <ul className="footer-links flex column">
                    <NavLink className="home-link" exact to="/">Home</NavLink>
                    <NavLink className="mixes-link" exact to="/app/mixes">Mixes</NavLink>
                    <NavLink className="signup-link" exact to="/signup">Sign Up</NavLink>
                    <NavLink exact to="/user/52">Profile</NavLink>
                </ul>
                <div className="footer-content flex column">
                    <span className="israel"><i className="fal fa-globe-asia"></i> Israel</span>
                    <span className="copyrights">© copyrights musix 2021</span>
                </div>
            </div>
        </footer>
    )


}
function mapStateToProps(state) {
    return {
        mix: state.mixReducer.mix
    }
}

export default AppFooter = connect(mapStateToProps)(AppFooter)
