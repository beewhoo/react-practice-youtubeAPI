import axios from 'axios';

const KEY = 'AIzaSyBhOI_lelgaJffk03C-5l-i8ZtB7bra-Xk';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
          part: 'snippet',
          maxResults: 5,
          key: KEY

          }

});
