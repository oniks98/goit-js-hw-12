// import axios from 'axios';

// async function fetchPhoto(query, page) {
//   const response = await axios.get('https://pixabay.com/api/', {
//     params: {
//       key: '46722048-aff8075d188208e090c3b0c14',
//       q: query,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: 'true',
//       page,
//       per_page: 15,
//     },
//   });
//   return response;
// }

// export { fetchPhoto };

let query = localStorage.getItem('key-query') || ''; // Получаем значение из localStorage при загрузке
let page = 1;
let totalHits = 0;
let isFirstLoad = true;

form.addEventListener('submit', onFormSubmit);
loadMoreButton.addEventListener('click', onLoadMore);

function onFormSubmit(event) {
  event.preventDefault();
  const newQuery = event.target.elements.query.value.trim();

  if (!newQuery) return;

  if (query !== newQuery) resetSearch(newQuery);
  performSearch();
}

function onLoadMore() {
  performSearch();
}

async function performSearch() {
  toggleButton(loadMoreButton, false);
  toggleSpinner(true);

  try {
    const response = await fetchPhoto(query, page);
    const images = response.data.hits;
    totalHits = response.data.totalHits;

    toggleSpinner(false);

    if (images.length === 0 && page === 1) {
      showNoImagesMessage();
      return;
    }

    renderGallery(images, gallery);
    updatePage();
    handleScroll(images.length);

    if (page * 15 < totalHits) {
      toggleButton(loadMoreButton, true);
    } else {
      showEndSearchMessage();
    }
  } catch (error) {
    toggleSpinner(false);
    showServerErrorMessage();
  }
}

function resetSearch(newQuery) {
  query = newQuery;
  localStorage.setItem('key-query', query); // Сохраняем новый запрос в localStorage
  page = 1;
  gallery.innerHTML = '';
  isFirstLoad = true;
}
