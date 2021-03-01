import io from 'socket.io-client';
const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/'
    : '//localhost:3030'

var socket;
console.log('socket setup!');
socket = io(BASE_URL,{reconnection:false})
export const socketService = {
    terminate,
    on,
    off,
    emit,
    setup
}


function setup() {

    
}
function terminate() {
    socket = null;
}

function on(eventName, cb) {
    socket.on(eventName, cb)
}

function off(eventName, cb) {
    socket.off(eventName, cb)
}

function emit(eventName, data) {
    socket.emit(eventName, data)
}