
function makeId(length = 11) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
function findMatchLowerCase(key,value){
    key = key.toLowerCase()
    value = value.toLowerCase()
    return key.includes(value)
}
function showTime(seconds) {
    var mins;
    var secs;
    if (seconds >= 60) {
        mins = (parseInt(seconds / 60)).toString();
        secs = (parseInt(seconds - mins * 60)).toString().padStart(2, '0');
    } else {
        mins = '00';
        secs = (parseInt(seconds)).toString().padStart(2, '0');
    }
    return `${mins}:${secs}`
}

function greetByTime(value='Good') {
    const hour = new Date().getHours()
    let massage= ''
    if(hour<12){
        massage=`${value} morning`
    }else if(hour<17){
        massage=`${value} afternoon`
    }else {
        massage=`${value} evening`
    }
    return massage
}

export const utilService = {
    makeId,
    getRandomInt,
    findMatchLowerCase,
    showTime,
    greetByTime
}