import { error } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

const input = document.querySelector('.contryName');
const ul = document.querySelector('.js-infoContrys');

function fetchCountries(searchQuery) {
  let url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url);   
}

export default fetchCountries;
