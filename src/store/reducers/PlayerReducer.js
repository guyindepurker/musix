const INITIAL_STATE = {
    song:null,
    songs:null
}
export function playerReducer(state=INITIAL_STATE,action){
    switch (action.type) {
        case 'SET_SONG':
            console.log('action.song:', action.song)
            return {
                ...state,
                song:action.song
            }
        case 'SET_SONGS':
            return {
                ...state,
                songs:action.songs
            }      
        default:
            return state;
    }
}