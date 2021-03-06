
import './Login.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login, loginGuestMode } from '../../store/actions/UserAction';
class Login extends Component {
    state = {
        user: {
            email: '',
            password: '',
            fullName: ''
        }
    }

    onChange = (ev) => {
        this.setState({ user: { ...this.state.user, [ev.target.name]: ev.target.value } })
    }
    loginGuestMode = async (ev) => {
        ev.preventDefault();
        try {
            await this.props.loginGuestMode()
            this.props.history.push('/app/mix')
        } catch (err) {
            console.log('ERROR: UNABLE TO LOGIN GUEST MODE');
        }
    }

    onLogin = async (ev) => {
        ev.preventDefault();
        if (this.state.email === '') return;
        const { email, password } = this.state.user
        const emailLower = email.toLowerCase()
        const userCreds = { email:emailLower, password };
        await this.props.login(userCreds)
        this.props.history.push('/app/mix')
    }

    render() {
        const { toggleIsSignup } = this.props
        return (
            <section className="login flex column">
                <form className="login-form flex column" key="login-form">
                    Email
                    <input type="string" placeholder="Enter email" name="email" value={this.state.user.email} onChange={this.onChange}
                    ></input>
                    Password
                        <input type="password" placeholder="Enter password" name="password" value={this.state.user.password} onChange={this.onChange}
                    ></input>

                    <button type="submit" className="signup-login-btn" onClick={this.onLogin}>Login</button>
                    <button type="guest" className="signup-login-btn" onClick={this.loginGuestMode}>Try as Guest!</button>
                </form>

                <div className="signup-section flex column align-center">
                    <span className="quest">Don't you have an account yet?</span>
                    <button onClick={toggleIsSignup} className="quest-btn">Sign up now!</button>
                </div>
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
    loginGuestMode
}

export default Login = connect(mapStateToProps, mapDispatchToProps)(Login)
