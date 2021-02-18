const apiKey = 'AIzaSyBA-F0ZCU78Y0kgzgv7LmcvVEorD7dCi1o'
import { httpService } from './HttpService';

export const youtubeService = {
    getSongs
}

function getSongs(term) {
  return  httpService.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${apiKey}&q=${term}`)
}