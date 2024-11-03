import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchPhoto } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.button-load-more');

const boxLoader = document.querySelector('.box-loader');

let querylocalStorage = localStorage.getItem('key-query') || '';
let page = 1;
let query;

form.addEventListener('submit', searchPhoto);
loadMoreButton.addEventListener('click', searchPhoto);

async function searchPhoto(event) {
  event.preventDefault();

  // Збереження або отримання значення пошукового запиту
  if (event.target.elements) {
    query = event.target.elements.query.value.trim();
  } else {
    query = querylocalStorage;
  }

  if (!query) {
    form.reset();
    return;
  }

  if (querylocalStorage !== query) {
    gallery.innerHTML = '';
    page = 1;
  }

  localStorage.setItem('key-query', query);
  querylocalStorage = localStorage.getItem('key-query');

  // Приховуємо кнопку "Load More" під час завантаження
  loadMoreButton.style.display = 'none';
  // await new Promise(resolve => requestAnimationFrame(resolve));

  toggleSpinner(true);

  try {
    const response = await fetchPhoto(query, page);
    const arrayPhoto = response.data.hits;
    const totalHits = response.data.totalHits;

    toggleSpinner(false);

    if (arrayPhoto.length === 0) {
      showNoImagesMessage();
      form.reset();
      return;
    } else {
      renderGallery(arrayPhoto, gallery);
      page += 1;

      // Показуємо кнопку "Load More", якщо є ще що завантажувати
      const elementsGallery = gallery.querySelectorAll('.gallery-image_item');
      if (elementsGallery.length < totalHits) {
        loadMoreButton.style.display = 'block';
      } else {
        showEndSearchMessage();
      }
    }
  } catch (error) {
    toggleSpinner(false);
    showServerErrorMessage();
  }

  form.reset();
}

function showNoImagesMessage() {
  iziToast.show({
    message:
      '❌ Sorry, there are no images matching your search query. Please try again!',
    color: 'red',
    position: 'topRight',
    timeout: 3000,
  });
}

function showServerErrorMessage() {
  iziToast.show({
    message: '❌ Sorry, there was a server error. Please try again later!',
    color: 'red',
    position: 'topRight',
    timeout: 3000,
  });
}

function showEndSearchMessage() {
  iziToast.show({
    message: "We're sorry, but you've reached the end of search results.",
    color: 'red',
    position: 'topRight',
    timeout: 3000,
  });
}

function toggleSpinner(isVisible) {
  if (isVisible) {
    const spinner = document.createElement('span');
    spinner.classList.add('loader');
    boxLoader.append(spinner);
  } else {
    const spinner = document.querySelector('.loader');
    if (spinner) spinner.remove();
  }
}
