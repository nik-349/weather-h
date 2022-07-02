import { refs } from './refs';
const throttle = require('lodash.throttle');
const debounce = require('lodash.debounce');
const Handlebars = require('handlebars');
import templateWeather from '../template/template.hbs';

const throttledInput = debounce(onChangeInput, 3000);
refs.loginButton.addEventListener('click', onClickLogin);
refs.inputSerach.addEventListener('input', throttledInput);
refs.burgerMenu.addEventListener('click', onClickBurgerMenu);
refs.searchButton.addEventListener('click', onClickButtonSearch);
refs.searchButtonIp.addEventListener('click', onClickButtonIp);

function onClickButtonSearch() {
  refs.inputSerach.classList.toggle('visually-hidden');
}

function onClickBurgerMenu() {
  refs.backdrop.addEventListener('click', onClickBackdrop);
  refs.burgerMenuList.classList.toggle('visually-hidden');
  refs.burgerExit.classList.toggle('visually-hidden');
  refs.burgerIn.classList.toggle('visually-hidden');
}

function onClickLogin() {
  refs.backdrop.addEventListener('click', onClickBackdrop);
  refs.singIn.classList.toggle('visually-hidden');
}

function onClickBackdrop(event) {
  if (event.currentTarget !== event.target) {
    return;
  }
  onClickLogin();
}

// /astronomy.json - закат восход

const KEY = '94f78073bd334e8ab23192239222706';

function onClickButtonIp() {
  const URL = `http://api.weatherapi.com/v1/ip.json?key=${KEY}&q=auto:ip`;

  const fe = fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(renderWeather);
}

function onChangeInput(e) {
  let country = e.target.value;
  const URL = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${country}&aqi=yes`;

  const fe = fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(renderWeather);
}

function renderWeather(weather) {
  const markup = templateWeather(weather);
  refs.moduleDay.innerHTML = markup;
}
