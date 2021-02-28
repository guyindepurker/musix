
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type.
jQuery.noConflict();
$( document ).ready(function() {
    console.log( "ready!" );
    const duration = $('.ytp-time-duration').text()
    const title=$('h1.ytd-video-primary-info-renderer').text()
    const youtubeId = getYoutubeId()
    const song ={
        id:makeId(),
        title,
        duration,
        youtubeId,
        imgUrl:getImgUrl(youtubeId)
    }

    console.log('jquery song',song)
   
});

function getYoutubeId(){
    let strId = window.location.search
    let index = strId.indexOf('=')
    let id = strId.slice(index+1,strId.length)
    return id
}

function getImgUrl(id){
    return `http://i3.ytimg.com/vi/${id}/hqdefault.jpg`
}

function makeId(length = 11) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}