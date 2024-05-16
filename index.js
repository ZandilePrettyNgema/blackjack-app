let firstCard = 5;
let secondCard = 7;
let hasBlackJack = false;
let isAlive = true;
let sum = firstCard + secondCard + 9;
console.log(sum);

if (sum <= 20) {
  console.log("Do you wat to draw a new card?");
} else if (sum === 21) {
  console.log("Hooray!! You have a Blackjack");
  hasBlackJack = true;
} else {
  console.log("You are out of the game");
  isAlive = false;
}
console.log(isAlive);
