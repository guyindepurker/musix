const INITIAL_STATE = {
    loggedInUser: null,
    users: null
}
export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                loggedInUser: action.user
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        default:
            return state;
    }
}