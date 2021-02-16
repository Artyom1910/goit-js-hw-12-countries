import updateCountriesMarkup from './updateCountriesMarkup';

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(updateCountriesMarkup)
    .catch(
      error({
        error: 'server error'
      }),
    );
}

export default fetchCountries;
