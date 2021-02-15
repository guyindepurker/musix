
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import MixList from '../../cmps/MixList/MixList'
import { loadMixes } from '../../store/actions/MixAction'

import './Mixes.scss'

class _Mixes extends Component {

    state = {
        filterBy: null
    }
    componentDidMount() {
        this.loadMixes()
    }

    loadMixes = async () => {
        await this.props.loadMixes(this.state.filterBy)
        console.log('mixes:', this.props.mixes);
    }

    get genresNames() {
        const { mixes } = this.props
        let genresNames = []
        mixes.forEach(mix => (!genresNames.includes(mix.genre)) && genresNames.push(mix.genre));
        console.log('genresNames:', genresNames);
        return genresNames;
    }

    render() {
        const { mixes } = this.props
        if (!mixes) return <div>Loading...</div>

        const GenresNames = () => {
            return (
                <ul className="genres-names-list clean-list flex container space-around">
                    {this.genresNames.map(name => {
                        return (
                            <Link to={`mixes?genre=${name}`} key={name}>
                                <li className="genre-name" key={name}>
                                    {name}
                                </li>
                            </Link>)
                    })}
                </ul>
            )
        }

        return (
            <section className="mixes">
                <GenresNames></GenresNames>
                <MixList mixes={mixes}></MixList>
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
export const Mixes = connect(mapStateToProps, mapDispatchToProps)(_Mixes)
