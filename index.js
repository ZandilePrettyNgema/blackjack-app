let firstCard = getRandomCard();
let secondCard = getRandomCard();
let hasBlackJack = false;
let isAlive = false;
let sum = 0;
let cards = [];
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards");

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;

  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  isAlive = true;
  renderGame();
}

function renderGame() {
  sumEl.innerHTML = "Sum: " + sum;
  cardsEl.innerHTML = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.innerHTML += cards[i] + "  ";
  }

  if (sum <= 20) {
    message = "Do you wat to draw a new card?";
  } else if (sum === 21) {
    message = "Hooray!! You have a Blackjack";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!!";
    isAlive = false;
  }
  messageEl.innerHTML = message;
}

function newCard() {
  let newCard = getRandomCard();
  sum += newCard;
  cards.push(newCard);
  renderGame();
}
