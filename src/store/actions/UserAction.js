import { userService } from '../../services/UserService';

export function loadUsers() {
    return async dispatch => {
        try {
            const users = await userService.getUsers()
            dispatch({ type: 'SET_USERS', users });
            return users;
        } catch (err) {
            console.error('ERROR: CANNOT LOAD USERS');
            throw err;

        }
    };
}
export function login(userCred) {
 
    return async (dispatch) => {
        try {
            const user = await userService.login(userCred)
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.error('ERROR: CANNOT LOGIN USER');
            throw err
        }
    }
}

export function signup(userCred) {
  
    return async (dispatch) => {
        try {
            const user = await userService.signup(userCred)
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.error('ERROR: CANNOT SIGNUP USER');
            throw err
        }
    }
}
export function logout() {
    
    return (dispatch) => {
        try {
            userService.logout()
            dispatch({ type: 'SET_USER', user: null })
        } catch (err) {
            console.error('ERROR: CANNOT LOGOUT USER');
            throw err
        }
    }
}

export function saveUser(user) {
    return async (dispatch) => {
        try {
            const savedUser = await userService.save(user)
            dispatch({ type: 'SET_USER', user: savedUser })
        } catch (err) {
            console.error('ERROR: CANNOT SAVE USER');
            throw err
        }
    }
}
export function getMiniUser() {
    const user = userService.getMiniUser()
    if (!user) throw new Error('Not have a logged in user')
    return user
}

export function loginGuestMode() {
    return async (dispatch) => {
        try {
            const userCred = userService.guestMode()
            const user = await userService.login(userCred)
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.error('ERROR: CANNOT LOGIN GUEST MODE');
            throw err
        }
    }
}
