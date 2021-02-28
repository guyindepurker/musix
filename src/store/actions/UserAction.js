import { userService } from '../../services/UserService';

export function loadUsers() {
    return async dispatch => {
        const users = await userService.getUsers()
        dispatch({ type: 'SET_USERS', users });
        return users;
    };
}
export function login(userCred) {
    console.log('userCred in login user action:', userCred);
    return async (dispatch) => {
        try {
            const user = await userService.login(userCred)
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('err from action login:', err)
            throw err
        }
    }
}

export function signup(userCred) {
    console.log('userCred in user action:', userCred);
    return async (dispatch) => {
        try {
            const user = await userService.signup(userCred)
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('err from action signup:', err)
            throw err
        }
    }
}
export function logout() {
    console.log('do logout~!!');
    return (dispatch) => {
        try {
            userService.logout()
            dispatch({ type: 'SET_USER', user: null })
        } catch (err) {
            console.log('err from action logout:', err)
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
            console.log('err from action update,save user:', err)
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
            const userCred =  userService.guestMode()
            const user = await userService.login(userCred)
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('err from action login:', err)
            throw err
        }
    }
}
