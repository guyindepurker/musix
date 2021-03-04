
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { loadMixes } from '../../store/actions/MixAction'
import './MusixApp.scss'
import _ from 'lodash'
import MixList from '../../cmps/MixList/MixList';
import { Link } from 'react-router-dom'
import LoaderCmp from '../../cmps/LoaderCmp/LoaderCmp';
class _MusixApp extends Component {
    state = {
        filterBy: null,
        mixesByGenre: null
    }
    componentDidMount() {
        this.loadMixes()
    }
    
    loadMixes = async () => {
        await this.props.loadMixes(this.state.filterBy)
        this.mixByGenre()
    }
    mixByGenre = () => {
        const { mixes } = this.props
        const mixesByGenre = mixes.reduce((acc, mix) => {
            if (!acc[mix.genre]) acc[mix.genre] = []
            acc[mix.genre].push(mix)
            return acc
        }, {})
        this.setState({ mixesByGenre })
    }
    get genresNames() {
        const genresNames = Object.keys(this.state.mixesByGenre).sort()
        const filterGenres = genresNames.filter(name=> (name !== 'latin' && name !== 'pop'))
        const genres = ['latin','pop',...filterGenres]      
        return genres
    }

    render() {
        const { mixesByGenre } = this.state
        if (!mixesByGenre) return <LoaderCmp></LoaderCmp>
        const MixGenres = () => {
            return (this.genresNames.map(name => {
                return (
                    <div key={name} className="mix-genre-container flex column container">
                        <div className="mix-genre-header flex space-between align-center">
                            {name && <h3 className="heading-tertiary">{name}</h3>}
                            <Link to={`/app/mixes?genre=${name}`}><span className="show-more-btn">Show more<i className="show-more-icon fas fa-arrow-right"></i></span></Link>
                        </div>
                        <div className="genre-list-content">
                            <MixList key={name} mixes={mixesByGenre[name]} />
                        </div>
                    </div>)
            }))
        }
        return (
            <section className="musix-app">
                <MixGenres />
            </section>
        )
    }
}
function mapStateToProps(state) {
    return {
        mixes: state.mixReducer.mixes,
    }
}
const mapDispatchToProps = {
    loadMixes
}
export const MusixApp = connect(mapStateToProps, mapDispatchToProps)(_MusixApp)
