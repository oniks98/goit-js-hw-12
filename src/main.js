import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchData } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');

form.addEventListener('submit', searchImages);

function searchImages(event) {
  event.preventDefault();
  galleryList.innerHTML = '';

  const searchData = event.target.elements.query.value.trim();
  if (searchData === '') return;

  showSpinner();

  fetchData(searchData)
    .then(responseData => {
      deleteSpinner();
      if (responseData.hits.length === 0) {
        showNoImagesMessage();
        return;
      }
      renderGallery(responseData.hits, galleryList);
    })
    .catch(error => {
      deleteSpinner();
      showServerErrorMessage();
    });

  form.reset();
}

function showNoImagesMessage() {
  iziToast.show({
    message:
      '❌ Sorry, there are no images matching your search query. Please try again!',
    messageColor: 'white',
    messageSize: '18',
    backgroundColor: 'red',
    position: 'topRight',
    timeout: 2000,
  });
}

function showServerErrorMessage() {
  iziToast.show({
    message: '❌ Sorry, there was a server error. Please try again later!',
    messageColor: 'white',
    messageSize: '18',
    backgroundColor: 'red',
    position: 'topRight',
    timeout: 2000,
  });
}

function showSpinner() {
  const spinner = document.createElement('span');
  spinner.classList.add('loader');
  galleryList.append(spinner);
}

function deleteSpinner() {
  const spinner = document.querySelector('.loader');
  if (spinner) {
    spinner.remove();
  }
}
