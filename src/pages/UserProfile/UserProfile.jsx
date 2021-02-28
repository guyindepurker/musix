
import React, { Component, Fragment } from 'react'

import './UserProfile.scss'
import LoaderCmp from '../../cmps/LoaderCmp/LoaderCmp';
import _ from 'lodash'
import { utilService } from '../../services/UtilsService';
import UserEdit from '../../cmps/UserEdit/UserEdit';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class UserProfile extends Component {
    state = {
       
       isEdit:false
    }
    componentDidMount(){
    }
    toggleUserEditor = ()=>{
        this.setState(prevState=>({isEdit:!prevState.isEdit}))
    }
    get userKeys(){
        const copyUser = _.omit(this.props.user,['isAdmin','imgUrl'])
        return Object.keys(copyUser)
    }
    get currentTime(){
       return utilService.greetByTime()
    }
    render() {
        const {isEdit} = this.state
        const {user} = this.props
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
        <button onClick={this.toggleUserEditor} className="btn-primary ">Update details</button>
        </div>
        }
        const HeroProfile = ()=>{
            return   <div className="hero-profile">
            <h1 className="hero-title">Hello  {user.fullName} , {this.currentTime}!</h1>
            <p className="hero-paragraph">Welcome to your personal profile, here you can see information about you as you have updated and you can update your personal details and adjust your personal settings.
            </p>
         
            </div>
        }
        const NavBarProfile = ()=>{
            return (
                <Fragment>
                <div className="user-profile-img flex center-center">
                <img  src={user.imgUrl||'/defualtImg.jpg'} alt="user img" />
            </div>
            <ul className="clean-list nav-bar-menu-user flex column">
                <li><Link to={`/user/${user._id}`}>Settings</Link></li>
                    
                <li><Link to={`/user/${user._id}`}>Settings</Link></li>
                <li><Link to="/app/mixes">Mixes</Link></li>
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
            {isEdit&& <UserEdit toggleUserEditor={this.toggleUserEditor}></UserEdit> ||<Overview></Overview>}
            
            </main>
            </div>
            </section>)
    }
}
function mapStateToProps(state){
    return {
        user:state.userReducer.loggedInUser
    }
}
export default UserProfile = connect(mapStateToProps)(UserProfile)
