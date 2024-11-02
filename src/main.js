import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchPhoto } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', searchPhoto);

async function searchPhoto(event) {
  event.preventDefault();
  gallery.innerHTML = '';

  const query = event.target.elements.query.value.trim();
  if (!query) return;

  toggleSpinner(true);

  try {
    const arrayPhoto = await fetchPhoto(query);

    toggleSpinner(false);

    if (arrayPhoto.length === 0) {
      showNoImagesMessage();
      return;
    }

    renderGallery(arrayPhoto, gallery);
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

function toggleSpinner(isVisible) {
  if (isVisible) {
    const spinner = document.createElement('span');
    spinner.classList.add('loader');
    gallery.append(spinner);
  } else {
    const spinner = document.querySelector('.loader');
    spinner.remove();
  }
}
