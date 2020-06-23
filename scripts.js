const containerElement = document.querySelector('.container');
const rulesElement = document.querySelector('.container__rules');
const modalOverlayElement = document.querySelector('.modal__overlay');
const closeElement = document.querySelector('.modal__closeIcon');
const gameContentElement = document.querySelector('.gameContent');
const gameChoiceElements = document.querySelectorAll('.gameContent__gameChoice');
const gameChoicesArray = ['paper', 'scissors', 'rock'];

const getRandomNumber = () => Math.floor((Math.random() * 3) + 0);
const rulesModalEvent = () => containerElement.classList.toggle('container--isActive');
const gameChoiceEvent = (event) => {
    const data = event.target.dataset.choice;
    const randomChoice = gameChoicesArray[getRandomNumber()];

    gameContentElement.classList.add('gameContent--isActive');
    event.target.classList.add('gameContent__gameChoice--isActive');
    console.log('the choice is:', event.target);
    console.log('the random choice is:', randomChoice);
    //TODO: finish the UI part of 
    //selecting game choice
    //loading before computer selects his choice
    //show the computer's selection with success or fail
    //start using javascript
    //update the score
    //save data to the localstorage
};

//MODAL EVENTS
rulesElement.addEventListener('click', rulesModalEvent);
closeElement.addEventListener('click', rulesModalEvent);
modalOverlayElement.addEventListener('click', rulesModalEvent);

//GAME CHOICES
gameChoiceElements.forEach(item => {
    item.addEventListener('click', gameChoiceEvent);
});