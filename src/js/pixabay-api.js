import axios from 'axios';

function fetchPhoto(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '46722048-aff8075d188208e090c3b0c14',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(response => response.data.hits);
}

export { fetchPhoto };
