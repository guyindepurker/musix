import { userService } from '../../services/UserService';

export function login(userCred){
    return async (dispatch) =>{
        try{
            const user = await userService.login(userCred)
            dispatch({type:'SET_USER',user})
        } catch (err){
            console.log('err from action login:', err)
            throw err
        }
    }
}

export function signup(userCred){
    return async (dispatch) =>{
        try{
            const user = await userService.signup(userCred)
            dispatch({type:'SET_USER',user})
        } catch (err){
            console.log('err from action signup:', err)

            throw err
        }
    }
}
export function logout(){
    return async (dispatch) =>{
        try{
             await userService.logout()
            dispatch({type:'SET_USER',user:null})
        } catch (err){
            console.log('err from action logout:', err)
            throw err
        }
    }
}

export function saveUser(user){
    return async (dispatch) =>{
        try{
            const savedUser = await userService.save(user)
            dispatch({type:'SET_USER',user:savedUser})
        } catch (err){
            console.log('err from action update,save user:', err)
            throw err
        }
    }
}
export function getMiniUser(){
    const user = userService.getMiniUser()
    if(!user) throw new Error('Not have a logged in user')
    return user
}

export function loginGuestMode() {
    return async (dispatch) =>{
        try{
            const user = await userService.guestMode()
            dispatch({type:'SET_USER',user})
        } catch (err){
            console.log('err from action login:', err)
            throw err
        }
    }
}
