let options = ["rock", "paper", "scissors"]
let score = 0;
let playerSelection;
let computerSelection;

function computerPlay() {
  return randomOption = options[Math.floor(Math.random() * options.length)];
}

function playRound() {
  if (playerSelection == computerSelection){
    return('TIE');
  }
  else if 
  ((playerSelection == "rock" && computerSelection == "scissors") ||
  (playerSelection == "scissors" && computerSelection == "paper") ||
  (playerSelection == "paper" && computerSelection == "rock")){
    score++;
    outHand.classList.add('winner');
    return('YOU WIN');
  }
  else if 
  ((playerSelection == "scissors" && computerSelection == "rock") ||
  (playerSelection == "paper" && computerSelection == "scissors") ||
  (playerSelection == "rock" && computerSelection == "paper")) {
    cpOutHand.classList.add('winner')
    return('YOU LOSE');
  }
}

function rulesPop() {
  let x = document.getElementsByClassName("rules__container");
  if (x[0].style.display == "none") {
    x[0].style.display = "flex";
  } else {
    x[0].style.display = "none";
  }
}

document.getElementById("btn-paper").addEventListener("click", function() {
  playerSelection = 'paper';
  pickHand();
  switchScreen();
})
document.getElementById("btn-scissors").addEventListener("click", function() {
  playerSelection = 'scissors';
  pickHand();
  switchScreen();
})
document.getElementById("btn-rock").addEventListener("click", function() {
  playerSelection = 'rock';
  pickHand();
  switchScreen();
})


let result = document.getElementsByClassName("outcome");
let outHand = document.getElementById('out-hand');
let insideHand = document.getElementById('inside-hand');
let cpOutHand = document.getElementById('cpOutside');
let cpInsideHand = document.getElementById('cpInside');
let scoreElement = document.getElementById('score');

function pickHand() {
  outHand.classList.remove('scissors', 'paper', 'rock', 'winner');
  insideHand.classList.remove('hand-p', 'hand-s', 'hand-r');
  cpOutHand.classList.remove('scissors', 'paper', 'rock', 'winner');
  cpInsideHand.classList.remove('hand-p', 'hand-s', 'hand-r');

  computerSelection = computerPlay();
  result[0].innerText = playRound();

  switch (playerSelection) {
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
  
  

  outHand.classList.add(playerSelection);
  cpOutHand.classList.add(computerSelection)
  scoreElement.innerText = score
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