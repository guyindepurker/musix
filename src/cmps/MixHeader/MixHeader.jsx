
import React, { Component } from 'react'
import SelectGenre from '../SelectGenre/SelectGenre'


import './MixHeader.scss'
class MixHeader extends Component {
    state = {
        isEdit: false
    }
    toggleEdit = () => {
        if (this.props.user.isAdmin || this.props.createdBy._id === this.props.user._id) {
            this.setState(prevState => ({ isEdit: !prevState.isEdit }))
        }
    }
    save = (key, value) => {
        const { updateMix } = this.props
        updateMix(key, value)
        this.toggleEdit()
    }
    render() {
        const { mix, createdBy, songs, removeMix, user } = this.props
        const { isEdit } = this.state

        return (
            <div className="mix-header flex relative">
                <img className="img-mix" src={mix.imgUrl} alt="mix img" />
                <div className="mix-header-content flex column ">
                    <h2 contentEditable={isEdit} onBlur={(ev) => this.save('name', ev.target.innerText)} suppressContentEditableWarning={true} className={`mix-name ${isEdit && 'editable'}`}>{mix.name}</h2>
                    <h3 contentEditable={isEdit} onBlur={(ev) => this.save('description', ev.target.innerText)} suppressContentEditableWarning={true} className={`mix-description ${isEdit && 'editable'}`}>{mix.description}</h3>
                    <h4 className="mix-created-by"><span>created by:</span>{createdBy.fullName}</h4>
                    <div className="mix-genre">{!isEdit && mix.genre || <SelectGenre selectedVal={mix.genre} save={this.save}></SelectGenre>}</div>
                    <p className="mix-info ">
                        <span className="mix-likes">{mix.likes} Likes</span>
                        <span className="mix-number-songs"> , {songs.length} songs</span>
                        <span className="mix-number-views">, {mix.views} Views.</span>
                    </p>
                </div>
                {(user._id === createdBy._id || user.isAdmin) &&
                    <div className="btn-controls-container flex column">
                        <i onClick={() => removeMix(mix._id)} className="btn-delete  icon fas fa-times"></i>
                        <i onClick={() => this.toggleEdit()} className="btn-edit-icon icon fas fa-pen"></i>
                    </div>}
            </div>
        )
    }
}

export default MixHeader