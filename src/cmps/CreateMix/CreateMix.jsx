
import './CreateMix.scss'
import React, { Component } from 'react'
import { userService } from '../../services/UserService';
import { mixService } from '../../services/MixService';
import LoaderCmp from '../LoaderCmp/LoaderCmp';
import { connect } from 'react-redux';
import { addMix } from '../../store/actions/MixAction';
import { uploadImg } from '../../services/CloudService';
import imgPlaceholder from '../../assets/imgs/uploadImg.png';
import SelectGenre from '../SelectGenre/SelectGenre';
import { withRouter } from 'react-router-dom';
class _CreateMix extends Component {

    state = {
        mix: null,
        isLoading: false
    }
    componentDidMount() {
        const miniUser = userService.getMiniUser()
        const mix = mixService.getEmptyMix(miniUser)
        this.setState({ mix })
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ mix: { ...prevState.mix, [field]: value } }))
    }
    saveMix = async (ev) => {
        ev.preventDefault()
        const { mix } = this.state
        await this.props.addMix(mix)
        const id = this.props.newMix._id
        this.props.history.push(`/app/mix/${id}`)
        this.props.closeModal()
    }


    onUploadImg = async (ev) => {
        this.setState({ isLoading: true })
        try {
            const res = await uploadImg(ev);
            this.setState(prevState => ({ mix: { ...prevState.mix, imgUrl: res.url }, isLoading: false }))
        } catch (err) {
            console.log('ERROR ON IMAGE UPLOAD', err);
        }
    }

    render() {
        const { mix } = this.state
        if (!mix) return <LoaderCmp></LoaderCmp>
        return (
            <section className="create-mix">
                <button className="close-btn" onClick={this.props.closeModal}><i className="fas fa-times"></i></button>
                <h3 className="create-mix-title">Create your own mix!</h3>
                <form onSubmit={this.saveMix} className="form-mix flex column wrap">
                    <div className="upload-img-container flex column align-center">
                        <label htmlFor="imgUploader">
                            <img className="uploadImg" src={mix.imgUrl || imgPlaceholder} alt="mix" />
                        </label>
                        <input
                            hidden
                            type="file"
                            name="img-uploader"
                            id="imgUploader"
                            onChange={this.onUploadImg}
                        />
                        <div>
                            {mix.imgUrl ? '' : 'Upload Image'}
                        </div>
                    </div>
                    <label htmlFor="mixName">Name:</label>
                    <input id="mixName" type="text" onChange={this.handleChange} name="name" value={mix.name} placeholder="Enter mix name" />
                    <label htmlFor="mixGenre">Genre:</label>
                    <SelectGenre selectedVal={mix.genre} save={this.handleChange} ></SelectGenre>
                    <label htmlFor="mixDescription">Description:</label>
                    <textarea rows="3" cols="30" id="mixDescription" onChange={this.handleChange} type="text" name="description" value={mix.description} placeholder="Your description..." />
                    <button className="create-mix-btn flex justify-center">Create mix ♫</button>
                </form>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        newMix: state.mixReducer.mix,
    }
}

const mapDispatchToProps = {
    addMix
}

export const CreateMix = withRouter(connect(mapStateToProps, mapDispatchToProps)(_CreateMix))