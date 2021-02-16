
import React,{Component} from 'react'

import './MixHeader.scss'

// export default function MixHeader({ mix, createdBy, songs,removeMix }) {
//     let isEdit = false
//     console.log('isEdit:', isEdit)
//     const toggleEdit = () =>{
//         isEdit = !isEdit
//         console.log('isEdit:', isEdit)
//     }
//     return (
       
//     )
// }

class MixHeader extends Component {
    state = {
        isEdit:false,
        genreNames:[ 'funk', 'pop', 'rock', 'electro', 'trance', 'techno', 'israeli', 'classic']
    }
    toggleEdit=()=>{
        this.setState(prevState=>({isEdit:!prevState.isEdit}))
    }
    save = (key,value) =>{
     const {updateMix}  = this.props
    updateMix(key,value)
    this.toggleEdit()
    }
    render() {
        const { mix, createdBy, songs,removeMix } = this.props
        const {isEdit,genreNames} = this.state

        const SelectGenre = ({selectedVal}) =>{
            return (
                <select value={selectedVal} onChange={({target})=>this.save(target.name,target.value)} className="select-genre"  name="genre" >
                    {genreNames.map(genre=><option key={genre} value={genre}>{genre}</option>)}
                </select>
            )
        }
        return (
            <div className="mix-header flex wrap relative">
            <img className="img-mix" src={mix.imgUrl} alt="mix img" />
            <div className="mix-header-content flex column ">
                <div className="btn-controls-container absolute flex column">
            <i onClick={()=>removeMix(mix._id)} className="btn-delete  icon fas fa-trash-alt"></i>
                <i onClick={()=>this.toggleEdit()} className="btn-edit-icon icon fas fa-pen"></i>
                </div>
                <h2 contentEditable={isEdit} onBlur={(ev)=>this.save('name',ev.target.innerText)} suppressContentEditableWarning={true}  className={`mix-name ${isEdit&&'editable'}`}>{mix.name}</h2>
                <h3 contentEditable={isEdit} onBlur={(ev)=>this.save('description',ev.target.innerText)} suppressContentEditableWarning={true} className={`mix-description ${isEdit&&'editable'}`}>{mix.description}</h3>
                <h4 className="mix-created-by"><span>created by:</span>{createdBy.fullName}</h4>
                <div className="mix-genre">{!isEdit && mix.genre||<SelectGenre selectedVal={mix.genre} />}</div>
                <p className="mix-info ">
                    <span className="mix-likes">{mix.likes} Likes</span>
                    <span className="mix-number-songs"> , {songs.length} songs</span>
                    <span className="mix-number-views">, {mix.views} Views.</span>
                </p>
            </div>
        </div>
        )
    }
}

export default MixHeader