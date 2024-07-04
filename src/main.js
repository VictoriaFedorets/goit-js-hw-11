// import getPicturesByQuery from './js/pixabay-api';
// import { showImages, cardContainer } from './js/render-functions';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

const searchForm = document.querySelector('.form');
const loader = document.querySelector('.loader');
const cardContainer = document.querySelector('.gallery');

searchForm.addEventListener('submit', handlerSearch);

function handlerSearch(event) {
  event.preventDefault();

  const queryValue = searchForm.elements.query.value.toLowerCase();

  getPicturesByQuery(queryValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        showImages(data.hits);
      }
    })
    .catch(error => {
      console.error('Fetch error: ', error);
      iziToast.error({
        message: 'Failed to fetch images. Please try again later.',
        position: 'topRight',
      });
    });
}

const API_KEY = '44763661-907А9К415КАБ9Д29К7901К7КК';

function getPicturesByQuery(q) {
  return fetch(
    `https://pixabay.com/api?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(res => {
    //res - відповідь від серверу(обєкт типу Response)
    console.log(res);

    //перевірка помилки 404(щоб попасти в блок catch)
    if (!res.ok) {
      throw new Error(res.status); //викид помилки
    }

    //json() - викликається на обєкті відповіді від серверу та парсить відповідь в звичайний обєкт, повертає проміс
    return res.json();
  });
}

function showImages(arr) {
  const markup = arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
        <a class="gallery-link href="${largeImageURL}" "> <img class="gallery-image src="${webformatURL}" alt="${tags}"/></a>
        <ul class = "gallery">
          <li>
            <h3>likes</h3>
            <p>${likes}</p>
          </li>
          <li>
            <h3>views</h3>
            <p>${views}</p>
          </li>
          <li>
            <h3>comments</h3>
            <p>${comments}</p>
          </li>
          <li>
            <h3>downloads</h3>
            <p>${downloads}</p>
          </li>
        </ul>
      
      </li>
        `;
      }
    )
    .join('');
  cardContainer.innerHTML = markup;
}

cardContainer.addEventListener('click', handlerGetImages);

// function handlerGetImages(evt) {
//   evt.preventDefault();
//   if (evt.currentTarget === evt.target) {
//     return;
//   }
//   const parent = evt.target.closest('.gallery-image');
//   const currentOriginal = parent.dataset.source;
//   const currentDescription = parent.dataset.description;

//   const instance = basicLightbox.create(`
//     <div class="modal">
//       <img class="modal-img" src="${webformatURL}" alt="${tags}" width="1112" height="640">
//     </div>
//   `);

//   instance.show();
// }
