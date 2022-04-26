import { refs } from "./refs";


refs.languageIcon.addEventListener('click', changeLang);
refs.aboutText.addEventListener('click', textColor)

function changeLang(e) {
    refs.overlayLang.classList.toggle('visually-hidden')
    
}

function textColor(e) {
   let col = refs.aboutText.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`
console.log(col)
}
//==================================================================//

const fn = arr => arr.map(el => {
  const item = document.createElement('div');
  item.textContent = el;

  return item;
 });

console.log(fn(['html', 'css', 'js', 'react']));