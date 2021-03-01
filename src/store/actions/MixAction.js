import { mixService } from '../../services/MixService';
import { socketService } from '../../services/SocketService';

export function loadMixes(filterBy) {
    return async (dispatch) => {
        try{
            const mixes = await mixService.query(filterBy)
            dispatch({ type: 'SET_MIXES', mixes })

        } catch(err){
            console.error('ERROR: CANNOT LOAD MIXES');
        }
    }
}

export function loadMix(mixId) {
    return async (dispatch) => {
        try{
            if (!mixId) {
                console.log('Not have mix id set null')
                return dispatch({ type: 'SET_MIX', mix: null })
            }
            const mix = await mixService.getById(mixId)
            dispatch({ type: 'SET_MIX', mix })

        } catch(err){
            console.error('ERROR: CANNOT LOAD MIX');
        }
    }
}
export function removeMix(mixId) {
    return async (dispatch) => {
        try{
            await mixService.remove(mixId)
            socketService.emit('mixes-update')
            dispatch({ type: 'REMOVE_MIX', mixId })

        } catch(err){
            console.error('ERROR: CANNOT REMOVE MIX');
        }
    }
}
export function addMix(mix) {
    return async (dispatch) => {
        try{
            const addMix = await mixService.save(mix)
            socketService.emit('mixes-update')
            dispatch({ type: 'ADD_MIX', mix: addMix })

        } catch(err){
            console.error('ERROR: CANNOT ADD MIX');
        }
    }
}
export function updateMix(mix) {
    return async (dispatch) => {
        try{
            const mixUpdated = await mixService.save(mix)
            socketService.emit('mix-update')
            dispatch({ type: 'UPDATE_MIX', mix: mixUpdated })

        } catch(err){
            console.error('ERROR: CANNOT UPDATE MIX');

        }
    }
}