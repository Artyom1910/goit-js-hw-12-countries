import countriesTemplate from '../templates/countries.hbs';
import countriesTemplateFew from '../templates/countriesFew.hbs';
import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import refs from './refs';

function updateCountriesMarkup(countries) {
  if (!countries.length) {
    error({
      text: 'Ups! Can`t find any matches! Please try again)',
      type: 'info',
      delay: 1500,
      hide: true,
    });
    return;
  }

  if (countries.length > 10) {
    error({
      text: 'Too many matches found. Please entert a more specific query!',
      type: 'info',
      delay: 1500,
      hide: true,
    });
  }

  if (countries.length === 1) {
    MarkupTemplate(countries);
    return;
  }

  if (countries.length > 1 && countries.length <= 10) {
    MarkupTemplateFew(countries);
    return;
  }
}

function MarkupTemplateFew(countries) {
  const markupFew = countriesTemplateFew(countries);
  refs.countriesContainer.insertAdjacentHTML('beforeend', markupFew);
}

function MarkupTemplate(countries) {
  const markup = countriesTemplate(countries);
  refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
