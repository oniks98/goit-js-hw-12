import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchPhoto } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', searchPhoto);

function searchPhoto(event) {
  event.preventDefault();
  gallery.innerHTML = '';

  const query = event.target.elements.query.value.trim();
  if (query === '') return;

  showSpinner();

  fetchPhoto(query)
    .then(response => {
      deleteSpinner();
      if (response.hits.length === 0) {
        showNoImagesMessage();
        return;
      }
      renderGallery(response.hits, gallery);
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
  gallery.append(spinner);
}

function deleteSpinner() {
  const spinner = document.querySelector('.loader');
  if (spinner) {
    spinner.remove();
  }
}
