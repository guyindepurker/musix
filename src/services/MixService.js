import { httpService } from './HttpService'

export const mixService = {
    query,
    getById,
    remove,
    save,
    getEmptyMix
}
function query(filterBy=null) {
    if(filterBy){
        return httpService.get(`mix${filterBy}`);
    }
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
function getEmptyMix(miniUser,name='New Mix',description='Mix description') {
    const mix ={
        name,
        description,
        genre: 'funk',
        views: 0,
        imgUrl: 'https://i.ytimg.com/vi/aIHF7u9Wwiw/default.jpg',
        likes: 0,
        createdBy:miniUser,
        tags: [],
        likedByUsers: [],
        songs:[]
    }
    return mix
}

