import axios from 'axios';

const KEY = 'AIzaSyCd99YLCG3JGeB_q27v_jYuvYEa81IF9sY';

export const baseParams = {
    part: "snippet",
    maxResults: 10,
    key: KEY
  };
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});
