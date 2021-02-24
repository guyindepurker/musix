// const apiKey = 'AIzaSyBA-F0ZCU78Y0kgzgv7LmcvVEorD7dCi1o'
// import { httpService } from './HttpService';

// export const youtubeService = {
//     getSongs
// }

// function getSongs(term) {
//   return  httpService.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${apiKey}&q=${term}`)
// }
import axios from 'axios';
import { utilService } from './UtilsService';

const API_KEY = 'AIzaSyDztRVkKE-RMM_trTaVJr86X2iRBDI0MGQ'; //yuval
const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const DETAILS_URL = 'https://www.googleapis.com/youtube/v3/videos';

export const youtubeService = {
  getSongs,
  getSongDuration
}

async function getSongs(term) {
  console.log('term:', term);
  let res = await axios.get(`${SEARCH_URL}?part=snippet&videoEmbeddable=true&type=video&key=${API_KEY}&q=${term}`)
  let songs = res.data.items;
  songs = songs.map(song => _convertToSongObj(song));
  return songs
}

async function getSongDuration(youtubeId) {
  let res = await axios.get(`${DETAILS_URL}?id=${youtubeId}&part=contentDetails&key=${API_KEY}`);
  let duration = res.data.items[0].contentDetails.duration;
  duration = youtubeDurationToSeconds(duration);
  duration = utilService.showTime(duration)
  return duration
}

function youtubeDurationToSeconds(duration) {
  var hours = 0;
  var minutes = 0;
  var seconds = 0;

  // Remove PT from string ref: https://developers.google.com/youtube/v3/docs/videos#contentDetails.duration
  duration = duration.replace('PT', '');

  // If the string contains hours parse it and remove it from our duration string
  if (duration.indexOf('H') > -1) {
    let hours_split = duration.split('H');
    hours = parseInt(hours_split[0]);
    duration = hours_split[1];
  }

  // If the string contains minutes parse it and remove it from our duration string
  if (duration.indexOf('M') > -1) {
    let minutes_split = duration.split('M');
    minutes = parseInt(minutes_split[0]);
    duration = minutes_split[1];
  }

  // If the string contains seconds parse it and remove it from our duration string
  if (duration.indexOf('S') > -1) {
    let seconds_split = duration.split('S');
    seconds = parseInt(seconds_split[0]);
  }

  // Math the values to return seconds
  return (hours * 60 * 60) + (minutes * 60) + seconds;
}

function _convertToSongObj(song) {
  const songObj = {
    "title": song.snippet.title,
    "id": utilService.makeId(),
    "youtubeId": song.id.videoId,
    "imgUrl": song.snippet.thumbnails.default.url,
    "duration": ''
  }
  return songObj
}