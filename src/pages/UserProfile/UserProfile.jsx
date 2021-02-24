
import React, { Component, Fragment } from 'react'

import './UserProfile.scss'
import LoaderCmp from '../../cmps/LoaderCmp/LoaderCmp';
import _ from 'lodash'
import { utilService } from '../../services/UtilsService';
class UserProfile extends Component {
    state = {
        user:null,
       
    }
    componentDidMount(){
        this.loadUser1()
    }
    loadUser1 = ()=>{
        const user = {
            fullName: 'Orly Amdadi',
            userName: 'orly@amdadi.com',
            isAdmin: true
        } 
        this.setState({user})
    }
    get userKeys(){
        const copyUser = _.omit(this.state.user,'isAdmin')
        return Object.keys(copyUser)
    }
    get currentTime(){
       return utilService.greetByTime()
    }
    render() {
        const {user} = this.state
        if(!user) return <LoaderCmp></LoaderCmp>
       const UserPreview = () =>{
            return (
                <ul className="clean-list user-list-details flex column ">
                    {this.userKeys.map(key=><li key={key} className="user-preview flex "><span>{_.lowerCase(key)}</span><h4 className="user-value">{user[key]}</h4></li>)}
                </ul>
            )
        }
        const Overview = () =>{
            return <div className="details-container  flex column">
            <h3>Overview</h3>
        <UserPreview></UserPreview>
        <button className="btn-primary ">Update details</button>
        </div>
        }
        const HeroProfile = ()=>{
            return   <div className="hero-profile">
            <h1 className="hero-title">Hello  {user.fullName} , {this.currentTime}!</h1>
            <p className="hero-paragraph">Welcome to your own secret profilem
            here you can update your settings and see your overview.
            </p>
         
            </div>
        }
        const NavBarProfile = ()=>{
            return (
                <Fragment>
                <div className="user-profile-img flex center-center">
                <img  src="/defualtImg.jpg" alt="" srcset=""/>
            </div>
            <ul className="clean-list nav-bar-menu-user flex column">
                <li><a href="#">Overview</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Mixes</a></li>
            </ul>
            </Fragment>
            )
        }
        return (
        <section className="user-profile ">
            <div className="user-profile-grid-container">
            <header className="header-profile">
              <HeroProfile></HeroProfile>
            </header>
            <nav className="nav-bar-profile">
            <NavBarProfile></NavBarProfile>
            </nav>
            <main className="main-content">
            <Overview></Overview>
            </main>
            </div>
            </section>)
    }
}

export default UserProfile
