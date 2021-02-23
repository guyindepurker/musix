export function loadSongs(songs){
    return  (dispatch) =>{
        dispatch({type:'SET_SONGS',songs})
}
}

export function loadSong(song){
    return  (dispatch) =>{
        dispatch({type:'SET_SONG',song})
}
}

