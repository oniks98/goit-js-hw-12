function fetchPhoto(query) {
  const searchParams = new URLSearchParams({
    key: '46722048-aff8075d188208e090c3b0c14',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchPhoto };
