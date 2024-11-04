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
let isFirstLoad = true;
let perPage = 15;

form.addEventListener('submit', searchPhoto);
loadMoreButton.addEventListener('click', searchPhoto);

async function searchPhoto(event) {
  event.preventDefault();

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
    isFirstLoad = true;
  }

  localStorage.setItem('key-query', query);
  querylocalStorage = localStorage.getItem('key-query');

  toggleButton(loadMoreButton, false);
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
      handleScroll();

      if (perPage * page < totalHits) {
        toggleButton(loadMoreButton, true);
      } else {
        showEndSearchMessage();
      }

      page += 1;
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
    timeout: 2000,
  });
}

function showServerErrorMessage() {
  iziToast.show({
    message: '❌ Sorry, there was a server error. Please try again later!',
    color: 'red',
    position: 'topRight',
    timeout: 2000,
  });
}

function showEndSearchMessage() {
  iziToast.show({
    message: "We're sorry, but you've reached the end of search results.",
    color: 'red',
    position: 'topRight',
    timeout: 2000,
  });
}

function handleScroll() {
  if (!isFirstLoad) {
    const cardGallery = document.querySelector('.gallery-image_item');
    const cardGalleryHeight = cardGallery.getBoundingClientRect().height;

    window.scrollBy({
      top: cardGalleryHeight * 2,
      behavior: 'smooth',
    });
  }
  isFirstLoad = false;
}

function toggleButton(button, isVisible) {
  button.style.display = isVisible ? 'block' : 'none';
}

function toggleSpinner(isVisible) {
  boxLoader.style.display = isVisible ? 'block' : 'none';
}
