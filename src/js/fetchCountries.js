import updateCountriesMarkup from './updateCountriesMarkup';

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };
  fetch(url, options)
    .then(response => response.json())
    .then(updateCountriesMarkup)
    .catch(error => console.log(error));
}

export default fetchCountries;
