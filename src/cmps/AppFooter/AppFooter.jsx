
import React from 'react'
import { NavLink } from 'react-router-dom'

import guyImg from '../../assets/imgs/guy.jfif'
import yuvalImg from '../../assets/imgs/yuval.jpg'


import './AppFooter.scss'
import { useSelector, connect } from 'react-redux';

 function AppFooter(props) {
   if(props.mix) return null; 
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
            <div className="about flex column">
                <div className="developer flex align-center justify-center">
                    <img alt="Yuval" src={yuvalImg} />
                    <p>Yuval Beit On</p>
                    <a href="https://www.linkedin.com/in/yuvalbeiton/" > <i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/YuvalBeitOn" > <i className="fab fa-github"></i></a>
                </div>
                <div className="developer flex align-center justify-center">
                    <img alt="Guy" src={guyImg} />
                    <p>Guy Indepurker</p>
                    <a href="https://www.linkedin.com/in/guy-indepurker-5778091a4/" > <i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/guyindepurker" > <i className="fab fa-github"></i></a>
                </div>
            </div>
            
                <span className="copyrights">© copyrights musix 2021 <span><i className="fal fa-globe-asia"></i> Israel</span></span>
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
