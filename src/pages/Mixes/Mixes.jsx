
import React, { Component } from 'react'
import { connect } from 'react-redux'

import MixList from '../../cmps/MixList/MixList'
import { loadMixes } from '../../store/actions/MixAction'

import './Mixes.scss'
import Search from '../../cmps/Search';

class _Mixes extends Component {

    state = {
        filterBy: null,

    }
    componentDidMount() {
        this.loadMixes()
    }
    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            this.setState({ filterBy: this.props.location.search }, this.loadMixes)
        }
    }

    loadMixes = async () => {
        await this.props.loadMixes(this.state.filterBy)
    }

    get genresNames() {
        return ['all mixes', 'funk', 'pop', 'rock', 'electro', 'trance', 'techno', 'israeli', 'classic']
    }

    render() {
        const { mixes } = this.props
        if (!mixes) return <div>Loading...</div>

        const GenresNames = () => {
            return (
                <ul className="genres-names-list clean-list flex container space-around">
                    {this.genresNames.map((name, idx) => {
                        return (
                            <li onClick={() => this.props.history.push((idx === 0) ? `mixes` : `mixes?genre=${name}`)} className="genre-name" key={name}>
                                {name}
                            </li>
                        )
                    })}
                </ul>
            )
        }

        return (
            <section className="mixes">
                <div className="search-container">
                <Search />
                </div>
                <GenresNames />
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
export const Mixes = connect(mapStateToProps, mapDispatchToProps)(_Mixes)
