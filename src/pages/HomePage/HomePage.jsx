
import React from 'react'

import './HomePage.scss'

export default function HomePage(props) {

    const HeroHomePage = () => {
        return(
            <div className="hero-home-page">
            <div className="hero-content  flex column align-center">
                <h1 className="hero-content-title">
                    Listening is everything
            </h1>
                <h6 className="hero-content-description">Millions of songs and podcasts. No credit card needed.</h6>
                <div className="hero-content-controls">
                    <button className="btn-green">Try as guest!</button>
                    <button className="btn-green">Login</button>
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
                    <img src="http://i3.ytimg.com/vi/qy185xXA93E/hqdefault.jpg" alt="img mix" />
                    <h3 className="mix-title">The best mix ever!</h3>
                    <h5 className="mix-genre">Pop</h5>

                </div>
                <div className="lasted-mix-box flex column center-center">
                    <img src="http://i3.ytimg.com/vi/qy185xXA93E/hqdefault.jpg" alt="img mix" />
                    <h3 className="mix-title">The best mix ever!</h3>
                    <h5 className="mix-genre">Rock</h5>
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
        </section>
    )
}

