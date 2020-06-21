const containerElement = document.querySelector('.container')
const rulesElement = document.querySelector('.container__rules')
const modalOverlayElement = document.querySelector('.modal__overlay')
const closeElement = document.querySelector('.modal__closeIcon')

const rulesElementEvent = () => {containerElement.classList.toggle('container--isActive')};

//MODAL EVENTS
rulesElement.addEventListener('click', rulesElementEvent);
closeElement.addEventListener('click', rulesElementEvent);
modalOverlayElement.addEventListener('click', rulesElementEvent);