import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
  widthRatio: 0.9,
  heightRatio: 0.9,
});

export function renderImages(images, galleryList) {
  const markup = images.hits
    .map(
      image =>
        `<li class="gallery-image_item">
            <a href="${image.largeImageURL}" class="gallery-link">
              <img src="${image.webformatURL}" alt="${image.tags}"/>
            </a>
            <ul class="gallery-image_caption">
              <li>
                <p class="image-caption_text">Likes</p>
                <p class="image-caption_number">${image.likes}</p>
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
        </li>`
    )
    .join('');

  galleryList.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}
