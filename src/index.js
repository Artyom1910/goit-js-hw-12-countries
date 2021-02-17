import './styles.css';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import refs from './js/refs';

refs.searchInput.addEventListener(
  'input',
  debounce(() => {
    const inputValue = refs.searchInput.value;
    refs.countriesContainer.innerHTML = '';
    if (inputValue.trim()) {
      fetchCountries(inputValue);
    }
  }, 500),
);
