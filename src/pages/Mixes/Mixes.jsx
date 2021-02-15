
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadMixes } from '../../store/actions/MixAction'

import './Mixes.scss'

class _Mixes extends Component {

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

    render() {
        return (
            <section className="mixes-list">

            </section>
        )
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
export const Mixes = connect(mapStateToProps,mapDispatchToProps)(_Mixes)
