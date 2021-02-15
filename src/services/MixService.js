import { httpService } from './HttpService'

export const mixService = {
    query,
    getById,
    remove,
    save
}
function query() {
    return httpService.get('mix');
}

function getById(mixId) {
    return httpService.get(`mix/${mixId}`);
}

function remove(mixId) {
    return httpService.delete(`mix/${mixId}`);
}

function save(mix) {
    const savedmix = mix._id ? _update(mix) : _add(mix);
    return savedmix;
}

async function _add(mix) {
    return httpService.post(`mix/`, mix);
}

async function _update(mix) {
    return httpService.put(`mix/${mix._id}`, mix);
}
