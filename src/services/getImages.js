// import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32945740-80b175842033a392f7f7e7674';

export function getImages(searchText, page = 1) {
  return fetch(
    `${BASE_URL}?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`No images or photos of ${searchText}`));
  });
}
