export function loadSongs(songs) {
    return (dispatch) => {
        try {
            dispatch({ type: 'SET_SONGS', songs })
        } catch (err) {
            console.error('ERROR: CANNOT LOAD SONGS');
            throw err;
        }
    }
}

export function loadSong(song) {
    return (dispatch) => {
        try {
            dispatch({ type: 'SET_SONG', song })
        } catch (err) {
            console.error('ERROR: CANNOT LOAD SONG');
            throw err;
        }
    }
}

