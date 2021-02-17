const INITIAL_STATE = {
    loggedinUser:null
}
export function userReducer(state=INITIAL_STATE,action){
    switch (action.type) {
        case 'SET_USER':
           return {
               ...state,
               loggedinUser:action.user
           } 
           
    
        default:
            return state;
    }
}