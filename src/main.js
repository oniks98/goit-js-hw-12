import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import './js/pixabay-api.js';
import './js/render-functions.js';

const form = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');

let qSearchParams = '';
let lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
  widthRatio: 0.9,
  heightRatio: 0.9,
});

form.addEventListener('submit', searchImages);

function searchImages(event) {
  event.preventDefault();
  galleryList.innerHTML = '';

  qSearchParams = event.target.elements.query.value;
  if (qSearchParams === '') return;

  showLoadingImagesMessage();

  fetchImages()
    .then(images => {
      closeLoadingImagesMessage();
      if (images.hits.length === 0) {
        showNoImagesMessage();
        return;
      }
      renderImages(images);
    })
    .catch(error => {
      closeLoadingImagesMessage();
      showNoImagesMessage();
    });

  form.reset();
}

function fetchImages() {
  const searchParams = new URLSearchParams({
    key: '46722048-aff8075d188208e090c3b0c14',
    q: qSearchParams,
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

function renderImages(images) {
  const markup = images.hits
    .map(image => {
      return `<li class="gallery-image_item">
                     <a href="${image.largeImageURL}" class="gallery-link">
              <img src="${image.webformatURL}" alt="${image.tags}" />
            </a>
         <ul class="gallery-image_caption">
            <li>
            <p class="image-caption_text">Likes</p>
            <p class="image-caption_number">${image.likes} </p>
            </li>
            <li>
            <p class="image-caption_text">Views</p>
            <p class="image-caption_number">${image.views}</p>
            </li>
            <li>
            <p class="image-caption_text">Comments</p>
            <p class="image-caption_number">${image.comments}</p>
            </li>
            <li>
            <p class="image-caption_text">Downloads</p>
            <p class="image-caption_number">${image.downloads}</p>
            </li>
          </ul>
        </li>`;
    })
    .join('');

  galleryList.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

function showNoImagesMessage() {
  iziToast.show({
    message:
      '❌ Sorry, there are no images matching your search query. Please try again!',
    messageColor: 'white',
    messageSize: '18',
    backgroundColor: 'red',
    position: 'topRight',
    timeout: 3000,
  });
}

function showLoadingImagesMessage() {
  iziToast.show({
    message: 'Loading images, please wait...',
    messageColor: 'black',
    messageSize: '18',
    position: 'center',
    timeout: false,
    close: true,
    progressBar: true,
  });
}

function closeLoadingImagesMessage() {
  iziToast.hide({}, document.querySelector('.iziToast'));
}
