
import React, { Component } from 'react'

import './CreateMix.scss'
import { userService } from '../../services/UserService';
import { mixService } from '../../services/MixService';
import LoaderCmp from '../LoaderCmp/LoaderCmp';
import { connect } from 'react-redux';
import { addMix } from '../../store/actions/MixAction';
class _CreateMix extends Component {
    state = {
        mix:null
    }
    componentDidMount(){
        const miniUser = userService.getMiniUser()
        const mix = mixService.getEmptyMix(miniUser)
        this.setState({mix})
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState=>({ mix:{...prevState.mix,[field]: value }}))
    }
    saveMix = async(ev)=>{
        ev.preventDefault()
        const {mix} = this.state
         await this.props.addMix(mix)
             this.props.history.push(`/app/mix/${this.props.newMix._id}`)
    }
    render() {
    const {mix}=this.state
        if(!mix) return <LoaderCmp></LoaderCmp>
        return (
            <section className="create-mix">
                <h3 className="create-mix-title">Create your own mix!</h3>
                <form onSubmit={this.saveMix} className="form-mix flex column wrap align-center">
                    <label htmlFor="mixName">Enter your mix name:</label>
                    <input id="mixName" type="text" onChange={this.handleChange} name="name" value={mix.name} placeholder="mix name" />
                    <label htmlFor="mixDescription">Enter your mix description:</label>
                    <input id="mixDescription" onChange={this.handleChange} type="text" name="description" value={mix.description} placeholder="mix name" />
                    <button>Create mix</button>
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
    addMix,
}

export const CreateMix = connect(mapStateToProps, mapDispatchToProps)(_CreateMix)