import { refs } from './refs';
const throttle = require('lodash.throttle');
const debounce = require('lodash.debounce');

const throttledInput = debounce(onChangeInput, 3000);
refs.loginButton.addEventListener('click', onClickLogin);
refs.inputSerach.addEventListener('input', throttledInput);
refs.burgerMenu.addEventListener('click', onClickBurgerMenu);

function onClickBurgerMenu() {
  refs.backdrop.addEventListener('click', onClickBackdrop);
  refs.burgerMenuList.classList.toggle('visually-hidden');
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

const KEY = '94f78073bd334e8ab23192239222706';

function onChangeInput(e) {
  let country = e.target.value;
  const URL = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${country}`;

  const fe = fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(console.log);
}
