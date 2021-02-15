
import React, { Component } from 'react'

import './SignUp.scss'

class SignUp extends Component {
    state ={
        isSignup:false,
    }
    render() {

        const Login = () => {
            return (
                <div className="login flex column">
                    <form className="login-form flex column">
                        Username
                    <input type="string" placeholder="Enter username"></input>
                    Password
                    <input type="password" placeholder="Enter password"></input>
                        <button className="signup-login-btn">Login</button>
                    </form>

                    <div className="signup-section flex column align-center">
                        <span className="quest">Don't you have an account yet?</span>
                        <button onClick={()=>this.setState({isSignup:true})} className="quest-btn">Sign up now!</button>
                    </div>
                </div>

            )
        }


        const Signup = () => {
            return (
                <div className="signup">
                    <form className="signup-form flex column">
                        Fullname
                    <input type="string" placeholder="Enter fullname"></input>
                    Email
                    <input type="string" placeholder="Enter email"></input>
                    Password
                    <input type="password" placeholder="Enter password"></input>
                        <button className="signup-login-btn" >Sign Up to Musix</button>
                    </form>

                    <div className="login-section flex column align-center">
                        <span className="quest">Already have an account?</span>
                        <button onClick={()=>this.setState({isSignup:false})} className="quest-btn" >Login</button>
                    </div>
                </div>

            )
        }
        const {isSignup}=this.state 
        return (
            <section className="sign-up flex column align-center">
                <div className="facebook-login">
                    <button className="facebook-btn">Continue with Facebook</button>
                </div>
                <div className="sepertor-container flex align-center">
                    <span class="separator-line"></span>Or<span class="separator-line"></span>
                </div>
                {!isSignup&&<Login></Login> || isSignup&&<Signup></Signup>}
            </section>

        )
    }
}

export default SignUp
