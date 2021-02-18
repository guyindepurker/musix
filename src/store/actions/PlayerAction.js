export function loadSongs(songs){
    return  (dispatch) =>{
       const firstSong = songs[0]
       if(firstSong){
        dispatch({type:'SET_SONG',song:firstSong})
       }
        dispatch({type:'SET_SONGS',songs})
}
}

export function loadSong(song){
    return  (dispatch) =>{
        dispatch({type:'SET_SONG',song})
}
}

