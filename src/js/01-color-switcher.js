const dataStart = document.querySelector('[data-start]');
const dataStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;


dataStart.addEventListener('click', onStart);
dataStop.addEventListener('click', onStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStart() {
  timerId = setInterval(getBgColor, 1000);

  dataStart.toggleAttribute('disabled');
}

function onStop() {
  clearInterval(timerId);

  dataStart.removeAttribute('disabled');
}


function getBgColor() {
  let hexColor = getRandomHexColor();
  body.style.backgroundColor = hexColor;
}

