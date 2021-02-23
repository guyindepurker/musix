
import React, { Component } from 'react'
import Search from '../../cmps/Search/Search';

import './MixActions.scss'



export default function MixActions({ isLike, setSearch, pathName ,like,unLike}) {
    const { origin: publicDomain } = window.location
    const mixUrl = publicDomain + pathName
    const whatsappShareUrl = `https://api.whatsapp.com/send/?phone&text=Hi+there+check+this+great+mix+on+the+new+musixApp+${mixUrl}`
    
    return (
        <div className="mix-actions  flex space-between align-center">
            <div className="mix-controls flex align-center">
                <i className="mix-control-icon fas fa-plus-circle"></i>
                <div className="search-container-controls">
                    <Search placeholderTxt="Search songs..." setSearch={setSearch} />
                </div>
            </div>
            <div className="mix-social flex align-center">
                <i onClick={()=>isLike ? unLike() :like()} className={`mix-control-icon mix-icon-like${isLike &&'-active'} fa${isLike ? 's':'r'} fa-heart`}></i>
                <a className="clean-a" href={`https://facebook.com/sharer/sharer.php?u=${mixUrl}`}>
                    <i className="mix-control-icon fab fa-facebook"></i></a>
                <a className="clean-a" href={whatsappShareUrl}>
                    <i className="mix-control-icon fab fa-whatsapp"></i></a>
            </div>
        </div>
    )
} 
