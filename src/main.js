import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');

form.addEventListener('submit', searchImages);

function searchImages(event) {
  event.preventDefault();
  galleryList.innerHTML = '';

  const qSearchParams = event.target.elements.query.value.trim();
  if (qSearchParams === '') return;

  showLoaderSpinner();

  setTimeout(() => {
    //секундочку погратися спінером
    fetchImages(qSearchParams)
      .then(images => {
        removeLoaderSpinner();
        if (images.hits.length === 0) {
          showNoImagesMessage();
          return;
        }
        renderImages(images, galleryList);
      })
      .catch(error => {
        removeLoaderSpinner();
        showServerErrorMessage();
      });

    form.reset();
  }, 1000);
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

function showLoaderSpinner() {
  const loaderSpinner = document.createElement('span');
  loaderSpinner.classList.add('loader');
  galleryList.append(loaderSpinner);
}

function removeLoaderSpinner() {
  const loaderSpinner = document.querySelector('.loader');
  if (loaderSpinner) {
    loaderSpinner.remove();
  }
}
