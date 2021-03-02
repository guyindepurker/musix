
import React from 'react'

import './HomePage.scss'
import { connect } from 'react-redux';
import { loginGuestMode } from '../../store/actions/UserAction';
import guyImg from '../../assets/imgs/guy.jfif'
import yuvalImg from '../../assets/imgs/yuval.jpg'
function HomePage(props) {
   
    async function loginGuestMode() {
       try{
        await props.loginGuestMode()
        props.history.push('/app/mix')
       }catch (err){
           console.log('unbale to login as a guest');
       }
    }
    const HeroHomePage = () => {
        return(
            <div className="hero-home-page">
            <div className="hero-content  flex wrap column center-center">
                <h1 className="hero-content-title">
                    Listening is everything
                    
            </h1>
                <h6 className="hero-content-description">Millions of songs and podcasts. No credit card needed.</h6>
                <div className="hero-content-controls flex center-center wrap">
                    <button onClick={()=>loginGuestMode()} className="btn-green">Try as guest!</button>
                    <button onClick={()=>props.history.push('/signup')} className="btn-green">Login</button>
                </div>
            </div>

        </div>
        )
    }
    const LastedMix = () =>{
        return(
            <div className="lasted-mixes">
            <h2 className="lasted-mix-title">Lasted mix</h2>
            <div className="lasted-mix-container container flex wrap center-center ">
                <div className="lasted-mix-box flex column center-center">
                    <img src="http://res.cloudinary.com/yuvalbeiton/image/upload/v1614525260/Scorpion_by_Drake_bhx2xx.jpg" alt="img mix" />
                    <h3 className="mix-title">Drake - New Album</h3>
                    <h5 className="mix-genre">Pop</h5>

                </div>
                <div className="lasted-mix-box flex column center-center">
                    <img src="https://res.cloudinary.com/yuvalbeiton/image/upload/v1614524678/edb5f5ee508095cd84d5ca2a12629bbc.822x822x1_xazqbk.png" alt="img mix" />
                    <h3 className="mix-title">Maluma - The Hits</h3>
                    <h5 className="mix-genre">Latin</h5>
                </div>
            </div>
        </div>
        )
    }
    const FeatureHomePage =()=>{
        return (
            <div className="features">
            <div className="features-container">
                <h2 className="title-feature">Make the most of Musix</h2>
                <div className="feature-content flex wrap center-center">
                    <div className="feature-box feature-box-1">
                        <h3 className="feature-box-title">Manage your account
</h3>
                        <p className="feature-box-paragraph"><span>Edit your profile, change your password,</span> <span>and update your payment information.</span>

                        </p>
                        <h6 className="feature-box-link">Manage account</h6>
                    </div>
                    <div className="feature-box feature-box-2">
                        <h3 className="feature-box-title">Get our free app
</h3>
                        <p className="feature-box-paragraph"><span>Seamlessly listen to music you love. </span>
                            <span>Download the Spotify app for your computer.</span></p>
                        <h6 className="feature-box-link">Download desktop app</h6>
                    </div>
                    <div className="feature-box feature-box-3">
                        <h3 className="feature-box-title">Listen on the web
</h3>
                        <p className="feature-box-paragraph"><span>To play and share music without the app,</span><span> all within your browser, go to</span></p>
                        <h6 className="feature-box-link">Start listen</h6>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    return (
        <section className="home-page">
        <HeroHomePage />
        <LastedMix />
        <FeatureHomePage />
        <div className="developer-box ">
            <h2 className="developer-title">About the developers</h2>
            <div className="flex center-center wrap">
                 <div className="developer flex center-center">
                    <img alt="Guy" src={guyImg} />
                    <p>Guy Indepurker</p>
                    <a href="https://www.linkedin.com/in/guy-indepurker-5778091a4/" > <i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/guyindepurker" > <i className="fab fa-github"></i></a>
                </div>
        <div className="developer flex center-center">
                    <img alt="Yuval" src={yuvalImg} />
                    <p>Yuval Beit On</p>
                    <a href="https://www.linkedin.com/in/yuvalbeiton/" > <i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/YuvalBeitOn" > <i className="fab fa-github"></i></a>
                </div> 
            </div>
            </div>
        </section>
    )
}

const mapDispatchToProps = {
    loginGuestMode
}
export default connect(undefined,mapDispatchToProps)(HomePage)