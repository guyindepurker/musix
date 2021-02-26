
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup, loadUsers } from '../../store/actions/UserAction';

import './SignupForm.scss'

class SignupForm extends Component {
    state = {
        isSignup: false,
        users: null,
        isUserModalShowen: false,
        user: {
            email: '',
            password: '',
            fullName: '',
            isAdmin: false,
            imgUrl: ''
        }
    }

    async componentDidMount() {
        const users = await this.props.loadUsers()
        console.log('users:', users);
        this.setState({ users })
    }

    toggleModal = () => {
        this.setState(prevState => ({ isUserModalShowen: !prevState.isUserModalShowen }))
    }

    onChange = (ev) => {
        console.log(ev.target.name, ev.target.value);
        this.setState({ user: { ...this.state.user, [ev.target.name]: ev.target.value } })
    }

    onSignup = async (ev) => {
        ev.preventDefault();
        if (this.state.email === '' || this.state.fullName === '' || this.state.password === '') return;
        const user = this.state.users.find(user => user.email === this.state.user.email)
        if (user) {
            this.toggleModal()
            return;
        }
        const { email, fullName, password, isAdmin, imgUrl } = this.state.user;
        const userCreds = { email, fullName, password, isAdmin, imgUrl };
        await this.props.signup(userCreds);
        // this.props.history.push('/app')
    }

    render() {

        const RejectModal = () => {
            return (
                <div className="reject-modal flex column align-center justify-center" >
                    <p>This email is already exists in the system,</p>
                    <p>please register with another email</p>
                    <button className="cls-btn" onClick={this.toggleModal}>Ok</button>
                </div >
            )
        }

        const { toggleIsSignup } = this.props
        return (
            <div className="signup">
                <form className="signup-form flex column" key="sign-up-form">
                    Fullname
                    <input type="string" placeholder="Enter fullname" name="fullName" value={this.state.user.fullName} onChange={this.onChange}></input>
                    Email
                    <input type="string" placeholder="Enter email" name="email" value={this.state.user.email} onChange={this.onChange}></input>
                    Password
                    <input type="password" placeholder="Enter password" name="password" value={this.state.user.password} onChange={this.onChange}></input>
                    <button className="signup-login-btn" onClick={this.onSignup} >Sign Up to Musix</button>
                </form>

                <div className="login-section flex column align-center">
                    <span className="quest">Already have an account?</span>
                    <button onClick={toggleIsSignup} className="quest-btn" >Login</button>
                </div>
                {this.state.isUserModalShowen && <RejectModal></RejectModal>}
            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.userReducer.loggedInUser,
        users: state.userReducer.users,

    }
}

const mapDispatchToProps = {
    signup,
    loadUsers
}

export default SignupForm = connect(mapStateToProps, mapDispatchToProps)(SignupForm)
