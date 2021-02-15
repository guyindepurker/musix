const INITIAL_STATE = {
    mixes:null,
    mix:null
}
export function mixReducer(state=INITIAL_STATE,action){
    switch (action.type) {
        case 'SET_MIXES':
            return {
                ...state,
                mixes:action.mixes
            }
        case 'SET_MIX':
            return {
                ...state,
                mix:action.mix
            }
        case 'REMOVE_MIX':
            return {
                ...state,
                mixes:state.mixes.filter(mix=>mix._id !== action.mixId)
            }
        case 'ADD_MIX':
            return {
                ...state,
                mixes:[...state.mixes,action.mix]
            }
        case 'UPDATE_MIX':
            return {
                ...state,
                mixes:state.mixes.map(mix=>(mix._id === action.mix._id) ? action.mix : mix),
                mix:action.mix

            }
        default:
            return state;
    }
}