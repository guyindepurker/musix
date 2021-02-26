
import React, { Component } from 'react'

import './UserEdit.scss'
import { connect } from 'react-redux';
import LoaderCmp from '../LoaderCmp/LoaderCmp';
import { saveUser } from '../../store/actions/UserAction';

class UserEdit extends Component {
    state ={
        userToEdit:null
    }
    componentDidMount(){
       const {user} =  this.props
       this.setState({userToEdit:{...user}},()=>console.log('user editor',this.state.userToEdit))
    }
    componentWillUnmount(){
        this.setState({userToEdit:null})
    }
    handleChange = ({target})=>{
        const field = target.name
        const value = target.value
        this.setState(prevState=>({userToEdit:{...prevState.userToEdit,[field]:value}}))
    }
    saveChanges = async (ev) =>{
        ev.preventDefault()
        const {userToEdit} = this.state
        if(!userToEdit.fullName || !userToEdit.country) return;
        await this.props.saveUser(userToEdit)
      
        this.props.toggleUserEditor()
    }
    render() {
        const userToEdit = this.state
        if(!userToEdit) return <LoaderCmp></LoaderCmp>
        return (
            
                <form onSubmit={this.saveChanges} className="user-to-edit flex column wrap">
                    <label htmlFor="name">Full Name:</label>
                    <input required type="text" id="name" value={userToEdit.fullName} name="fullName" onChange={this.handleChange}/>
                    {/* <label htmlFor="password">Password:</label>    
                    <input type="password" id="password" value={userToEdit.password}/> */}
                    <label htmlFor="country">Country:</label>    
                    <input required placeholder="Insert your country" type="text" name="country" id="country" onChange={this.handleChange} value={userToEdit.country}/>
                    <button type="submit" className="btn-primary">Save Changes</button>
                    <button type="close" onClick={this.props.toggleUserEditor} className="btn-primary">Cancel</button>
                    
                </form>
           
        )
    }
}

function mapStateToProps(state) {
    return {
      user: state.userReducer.loggedInUser
    }
  }
  const mapDispatchToProps = {
    saveUser,
}
export default UserEdit =connect(mapStateToProps,mapDispatchToProps)(UserEdit)
