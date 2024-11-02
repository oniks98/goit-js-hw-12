import axios from 'axios';

async function fetchPhoto(query) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '46722048-aff8075d188208e090c3b0c14',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  });
  return response.data.hits;
}

export { fetchPhoto };
