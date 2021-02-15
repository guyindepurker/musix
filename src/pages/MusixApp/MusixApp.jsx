
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadMixes } from '../../store/actions/MixAction'
import './MusixApp.scss'

class _MusixApp extends Component {
    state={
        filterBy:null
    }
    componentDidMount(){
        this.loadMixes()
    }
    loadMixes=async()=>{
       await this.props.loadMixes(this.state.filterBy)
       console.log('mixes:',this.props.mixes);
    }
    sortMixesNames=()=>{
        const mixes = this.props
        console.log('mixes:', mixes)
        // let sortMix = []
        // mixes.forEach(mix => {
        //     sortMix.includes(mix.genre)
        // });
    }
    render() {
        return (<section className="musix-app">
            I am the mix playlist


            </section>)
    }
}
function mapStateToProps(state){
    return {
        mixes:state.mixReducer.mixes
    }
}
const mapDispatchToProps = {
    loadMixes
}
export const MusixApp = connect(mapStateToProps,mapDispatchToProps)(_MusixApp)
