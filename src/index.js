import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  searchForm: document.querySelector('.search-form'),
  galleryContainer: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const searchQuery = e.currentTarget.elements.query.value;
  console.log(searchQuery);
  const url = `https://pixabay.com/api/?key=32864904-b6288e88ba25c4e5501969a64&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`;

  fetch(url)
    .then(r => r.json())
    .then(console.log());
}
