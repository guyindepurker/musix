
import React, { Component } from 'react'
import { Link } from 'react-router-dom';


import './MixList.scss'
import MixPreview from '../MixPreview/MixPreview';

export default function MixList({ mixes }) {

    return (
        <ul className="mix-list clean-list flex wrap justify-center container">
            {mixes.map(mix => {
                return (
                    <Link to={`/app/mix/${mix._id}`} key={mix._id}><MixPreview key={mix._id} mix={mix} /></Link>)
            })}
        </ul>
    )
}


