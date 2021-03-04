import { mixService } from '../../services/MixService';

export function loadMixes(filterBy) {
    return async (dispatch) => {
        try {
            const mixes = await mixService.query(filterBy)
            dispatch({ type: 'SET_MIXES', mixes })
        } catch (err) {
            console.error('ERROR: CANNOT LOAD MIXES');
            throw err;
        }
    }
}

export function loadMix(mixId) {
    return async (dispatch) => {
        try {
            if (!mixId) {
                return dispatch({ type: 'SET_MIX', mix: null })
            }
            const mix = await mixService.getById(mixId)
            dispatch({ type: 'SET_MIX', mix })
        } catch (err) {
            console.error('ERROR: CANNOT LOAD MIX');
            throw err;
        }
    }
}
export function removeMix(mixId) {
    return async (dispatch) => {
        try {
            await mixService.remove(mixId)
            dispatch({ type: 'REMOVE_MIX', mixId })
        } catch (err) {
            console.error('ERROR: CANNOT REMOVE MIX');
            throw err;
        }
    }
}
export function addMix(mix) {
    return async (dispatch) => {
        try {
            const addMix = await mixService.save(mix)
            dispatch({ type: 'ADD_MIX', mix: addMix })
        } catch (err) {
            console.error('ERROR: CANNOT ADD MIX');
            throw err;
        }
    }
}
export function updateMix(mix) {
    return async (dispatch) => {
        try {
            const mixUpdated = await mixService.save(mix)
            dispatch({ type: 'UPDATE_MIX', mix: mixUpdated })
        } catch (err) {
            console.error('ERROR: CANNOT UPDATE MIX');
            throw err;
        }
    }
}