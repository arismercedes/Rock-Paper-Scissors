let options = ["rock", "paper", "scissors"]
let score = 0;
let playerSelection;
let computerSelection;

function computerPlay() {
  return randomOption = options[Math.floor(Math.random() * options.length)];
}

function playRound() {
  if (playerSelection == computerSelection)
  
  return('TIE');
  else if 
  ((playerSelection == "rock" && computerSelection == "scissors") ||
  (playerSelection == "scissors" && computerSelection == "paper") ||
  (playerSelection == "paper" && computerSelection == "rock")){
    score++;
    return('YOU WIN');
  }
  else if 
  ((playerSelection == "scissors" && computerSelection == "rock") ||
  (playerSelection == "paper" && computerSelection == "scissors") ||
  (playerSelection == "rock" && computerSelection == "paper")) {
    return('YOU LOSE');
  }
}

// function game() {
//   for(i = 0; i < 5; i++){
//     playRound();
//     if ((playerScore == 3) || ((i == 4) && (playerScore > computerScore))){
//       return "You Won the Match!"
//     }
//     if ((computerScore == 3)  || ((i == 4) && (computerScore > playerScore))){
//       return "You Lose the Match"
//     }
//     if ((i == 4) && (playerScore == computerScore)){
//       return "Is a tie, nobody wins!"
//     }
//   }
// }

function rulesPop() {
  let x = document.getElementsByClassName("rules__container");
  if (x[0].style.display == "none") {
    x[0].style.display = "flex";
  } else {
    x[0].style.display = "none";
  }
}

function pickHand(hand) {
  let result = document.getElementsByClassName("outcome");
  let outHand = document.getElementById('out-hand');
  let insideHand = document.getElementById('inside-hand');
  let cpOutHand = document.getElementById('cpOutside');
  let cpInsideHand = document.getElementById('cpInside');
  let scoreElement = document.getElementById('score');

  playerSelection = hand;
  computerSelection = computerPlay();
  result[0].innerText = playRound();

  switch (hand) {
    case 'paper':
      insideHand.classList.add('hand-p');
      break;
    case 'scissors':
      insideHand.classList.add('hand-s');
      break;
    case 'rock':
      insideHand.classList.add('hand-r');
      break;
  }

  switch (computerSelection) {
    case 'paper':
      cpInsideHand.classList.add('hand-p');
      break;
    case 'scissors':
      cpInsideHand.classList.add('hand-s');
      break;
    case 'rock':
      cpInsideHand.classList.add('hand-r');
      break;
  }
  
 
  

  
  outHand.classList.add(hand);
  cpOutHand.classList.add(computerSelection)
  scoreElement.innerText = score
  console.log(playerSelection);
  console.log(computerSelection);
  delete computerSelection;
  console.log(computerSelection);
  console.log(playRound());

  let x = document.getElementsByClassName("selection__trio");
  let y = document.getElementsByClassName("result__wrapper");

  if (x[0].style.display == "none") {
    x[0].style.display = "flex";
  } else {
    x[0].style.display = "none";
  }

  if (y[0].style.display == "flex") {
    y[0].style.display = "none";
  } else {
    y[0].style.display = "flex";
  }
}

function switchScreen() {
  let x = document.getElementsByClassName("selection__trio");
  let y = document.getElementsByClassName("result__wrapper");

  if (x[0].style.display == "none") {
    x[0].style.display = "flex";
  } else {
    x[0].style.display = "none";
  }

  if (y[0].style.display == "flex") {
    y[0].style.display = "none";
  } else {
    y[0].style.display = "flex";
  }
}