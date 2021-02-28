
import React, { Component } from 'react'

import './UserEdit.scss'
import { connect } from 'react-redux';
import LoaderCmp from '../LoaderCmp/LoaderCmp';
import { saveUser } from '../../store/actions/UserAction';
import { uploadImg } from '../../services/CloudService';
class UserEdit extends Component {
    state ={
        userToEdit:null,
        isLoading:false,
        errMsg:null
    }
    componentDidMount(){
       const {user} =  this.props
       this.setState({userToEdit:{...user}},()=>console.log('user editor',this.state.userToEdit))
    }
    componentWillUnmount(){
        this.setState({userToEdit:null})
    }
    handleErrMsg(msg){
        this.setState({errMsg:msg})
    }
    handleChange = ({target})=>{
        const field = target.name
        const value = target.value
        this.setState(prevState=>({userToEdit:{...prevState.userToEdit,[field]:value}}),()=>console.log(this.state))
    }
    onUploadImg = async (ev) => {
        this.setState({ isLoading: true })
        try {
            const res = await uploadImg(ev);
            this.setState(prevState => ({ userToEdit: { ...prevState.userToEdit, imgUrl: res.url }, isLoading: false }),()=>console.log('state:',this.state))

        } catch (err) {
            console.log('Cant upload your image!!', err);
        }
    }
    saveChanges = async (ev) =>{
        ev.preventDefault()
        const {userToEdit} = this.state
        if(!userToEdit.fullName){
            return this.handleErrMsg('Must fill your name!');
        }else if(userToEdit.fullName.length > 23){
            return this.handleErrMsg('Your name max characters need to be at least lower from 23 letters!');
        }else if(!userToEdit.imgUrl){
            return this.handleErrMsg('You must to upload img!');
        }
        try{

            this.handleErrMsg(null);
            await this.props.saveUser(userToEdit)
            this.props.toggleUserEditor()
        } catch(err){
            console.log('Cant save user');
            this.handleErrMsg('Some problem cant update your account try later...');
        }
    }
    render() {
        const {userToEdit,isLoading,errMsg} = this.state
        if(!userToEdit) return <LoaderCmp></LoaderCmp>
        
        return (
            
                <form onSubmit={this.saveChanges} className="user-to-edit flex column wrap center-center">
                    <label htmlFor="name">Full Name:</label>
                    <input required type="text" id="name" value={userToEdit.fullName} name="fullName" onChange={this.handleChange}/>
                    <label htmlFor="imgUploader">Avatar:</label>
                    <label htmlFor="imgUploader">
                        
                           {isLoading&& 'Upload....' || <img className="img-user" src={userToEdit.imgUrl} alt="user image" /> ||<i className="img-user-upload fas fa-cloud-upload-alt"></i>}
                        </label>
                        <input
                            hidden
                            type="file"
                            name="img-uploader"
                            id="imgUploader"
                            onChange={this.onUploadImg}
                        />
                        <h5 className="err-msg">{errMsg}</h5>
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
