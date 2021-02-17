
import React, { Component } from 'react'
import Search from '../../cmps/Search/Search';

import './MixActions.scss'



export default function MixActions({ mix ,setSearch}) {
    return (
        <div className="mix-actions flex space-between align-center">
            <div className="mix-controls flex align-center">
                <i className="mix-control-icon fas fa-plus-circle"></i>
                <div className="search-container-controls">
                    <Search placeholderTxt="Look for songs here" setSearch={setSearch} />
                </div>
            </div>
            <div className="mix-social flex align-center">
                <i className="mix-control-icon mix-icon-like far fa-heart"></i>
                {/* this is active like btn <i className="mix-control-icon mix-icon-like mix-icon-like-active fas fa-heart"></i> */}
                <i className="mix-control-icon fab fa-facebook"></i>
                <i className="mix-control-icon fab fa-whatsapp"></i>
            </div>
        </div>
    )
} 
