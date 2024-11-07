import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchPhoto } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.button-load-more');
const boxLoader = document.querySelector('.box-loader');

let query = localStorage.getItem('key-query') || '';
let page = 1;
let isFirstLoad = true;
const perPage = 15;

form.addEventListener('submit', submitForm);
loadMoreButton.addEventListener('click', loadMore);

function submitForm(event) {
  event.preventDefault();

  const newQuery = event.target.elements.query.value.trim();

  if (!newQuery) {
    form.reset();
    gallery.innerHTML = '';
    toggleButton(loadMoreButton, false);
    return;
  }

  if (query !== newQuery) {
    query = newQuery;
    localStorage.setItem('key-query', query);
    gallery.innerHTML = '';
    page = 1;
    isFirstLoad = true;
  }

  performSearchPhoto();
}

function loadMore() {
  performSearchPhoto();
}

async function performSearchPhoto() {
  toggleButton(loadMoreButton, false);
  toggleSpinner(true);

  try {
    const response = await fetchPhoto(query, page);
    const arrayPhoto = response.data.hits;
    const totalHits = response.data.totalHits;

    toggleSpinner(false);

    if (arrayPhoto.length === 0) {
      showMessage(
        '❌ Sorry, there are no images matching your search query. Please try again!'
      );
      form.reset();
      return;
    } else {
      renderGallery(arrayPhoto, gallery);
      createPagination(totalHits);
      scrollOnLoad();
      page += 1;
    }
  } catch (error) {
    toggleSpinner(false);
    showMessage('❌ Sorry, there was a server error. Please try again later!');
  }

  form.reset();
}

function showMessage(message) {
  iziToast.show({
    message,
    color: 'red',
    position: 'topRight',
    timeout: 2000,
  });
}

function createPagination(totalHits) {
  if (perPage * page < totalHits) {
    toggleButton(loadMoreButton, true);
  } else {
    showMessage("We're sorry, but you've reached the end of search results.");
  }
}

function toggleButton(button, isVisible) {
  button.style.display = isVisible ? 'block' : 'none';
}

function toggleSpinner(isVisible) {
  boxLoader.style.display = isVisible ? 'block' : 'none';
}

// function scrollOnLoad() {
//   if (!isFirstLoad) {
//     const cardGallery = document.querySelector('.gallery-image_item');
//     const cardGalleryHeight = cardGallery.getBoundingClientRect().height;

//     window.scrollBy({
//       top: cardGalleryHeight * 2,
//       behavior: 'smooth',
//     });
//   }
//   isFirstLoad = false;
// }
/////////////////////////////////////////////////////////////////////
// це для себе
// Варіант з підгонкою края картки до края браузера:
// прокручуємо так, щоб верхня частина першої картки потрібного рядка
// (індекс cardIndex) співпадала з верхнім краєм вікна браузера

let rowIndex = 5; // Індекс для потрібного рядка

function scrollOnLoad() {
  if (!isFirstLoad) {
    const cards = document.querySelectorAll('.gallery-image_item');

    // індекс картки, з якої починається потрібний рядок
    const cardIndex = rowIndex * 3;

    if (cards.length > cardIndex) {
      cards[cardIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      rowIndex += 5;
    }
  }
  isFirstLoad = false;
}
///////////////////////////////////////////////////////////////////////////
