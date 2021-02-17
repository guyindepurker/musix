
import React from 'react'
import { NavLink } from 'react-router-dom'
import guyImg from '../../assets/imgs/guy.jfif'
import yuvalImg from '../../assets/imgs/yuval.jpg'


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
            <div className="about flex column">
                <div className="developer flex align-center ">
                    <img alt="Yuval" src={yuvalImg} />
                    <p>Yuval Beit On</p>
                    <a href="https://www.linkedin.com/in/yuvalbeiton/" > <i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/YuvalBeitOn" > <i class="fab fa-github"></i></a>
                </div>
                <div className="developer flex align-center">
                    <img alt="Hilla" src={guyImg} />
                    <p>Guy Indepurker</p>
                    <a href="https://www.linkedin.com/in/guy-indepurker-5778091a4/" > <i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/guyindepurker" > <i class="fab fa-github"></i></a>
                </div>
            </div>
        </footer>
    )


}


