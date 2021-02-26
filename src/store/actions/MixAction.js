import { mixService } from '../../services/MixService';

export function loadMixes(filterBy) {
    return async (dispatch) => {
        const mixes = await mixService.query(filterBy)
        dispatch({ type: 'SET_MIXES', mixes })
    }
}

export function loadMix(mixId) {
    return async (dispatch) => {
        if (!mixId) {
            console.log('Not have mix id set null')
            return dispatch({ type: 'SET_MIX', mix: null })
        }
        const mix = await mixService.getById(mixId)
        dispatch({ type: 'SET_MIX', mix })
    }
}
export function removeMix(mixId) {
    return async (dispatch) => {
        await mixService.remove(mixId)
        dispatch({ type: 'REMOVE_MIX', mixId })
    }
}
export function addMix(mix) {
    return async (dispatch) => {
        const addMix = await mixService.save(mix)
        dispatch({ type: 'ADD_MIX', mix: addMix })
    }
}
export function updateMix(mix) {
    return async (dispatch) => {
        const mixUpdated = await mixService.save(mix)
        dispatch({ type: 'UPDATE_MIX', mix: mixUpdated })
    }
}