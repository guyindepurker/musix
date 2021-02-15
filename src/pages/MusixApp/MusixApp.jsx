
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadMixes } from '../../store/actions/MixAction'
import './MusixApp.scss'
import _ from 'lodash'
import MixList from '../../cmps/MixList/MixList';
class _MusixApp extends Component {
    state = {
        filterBy: null,
    
    }
    componentDidMount() {
        this.loadMixes()
    }
    loadMixes = async () => {
        await this.props.loadMixes(this.state.filterBy)
       
    }
    mixesByGenre = async() => {
        // await this.loadMixes()
        const { mixes } = this.props
        console.log('mixes:', mixes)
        const mixesByGenre = mixes.reduce((acc, mix) => {
            if (!acc[mix.genre]) acc[mix.genre] = []
            acc[mix.genre].push(mix)
            return acc
        }, {})
        
        return mixesByGenre
    }
    get genresNames() {
        return Object.keys(this.mixesByGenre())
    }
   
    render() {
        const {mixes} = this.props
        if (!this.props.mixes) return <div>Loading...</div>
        return (
            <section className="musix-app">
                <MixList mixes={mixes} /> 
            </section>
        )
    }
}
function mapStateToProps(state) {
    return {
        mixes: state.mixReducer.mixes
    }
}
const mapDispatchToProps = {
    loadMixes
}
export const MusixApp = connect(mapStateToProps, mapDispatchToProps)(_MusixApp)
