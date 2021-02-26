
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../../cmps/Login/Login';
import SignupForm from '../../cmps/SignupForm/SignupForm';
import { login, signup } from '../../store/actions/UserAction';


import './SignUp.scss'

class SignUp extends Component {
    state = {
        isSignup: false,
    }

    toggleIsSignup = () => {
        this.setState(prevState => ({ isSignup: !prevState.isSignup }))
    }

    render() {
        const { isSignup } = this.state
        return (
            <section className="sign-up flex column align-center">
                <div className="facebook-login">
                    <button className="facebook-btn">Continue with Facebook</button>
                </div>
                <div className="sepertor-container flex align-center">
                    <span className="separator-line"></span>Or<span className="separator-line"></span>
                </div>
                {!isSignup && <Login toggleIsSignup={this.toggleIsSignup}></Login>
                    || isSignup && <SignupForm toggleIsSignup={this.toggleIsSignup}></SignupForm>
                }
            </section>

        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.userReducer.loggedInUser,
    }
}

const mapDispatchToProps = {
    login,
    signup
}

export default SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp)
