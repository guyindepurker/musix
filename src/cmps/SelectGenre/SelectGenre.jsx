
import React from 'react'

import './SelectGenre.scss'

const SelectGenre = ({ selectedVal, save }) => {

    const genreNames = ['funk', 'pop', 'rock', 'electro', 'trance', 'techno', 'israeli', 'classic']

    return (
        <select value={selectedVal} onChange={({ target }) => save(target.name, target.value)} className="select-genre" name="genre" >
            {genreNames.map(genre => <option key={genre} value={genre}>{genre}</option>)}
        </select>
    )
}

export default SelectGenre

