let options = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

function ask() {
  playerSelection = prompt("Choose: Rock, Paper or Scissors").toLowerCase();
  while (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")) {
    playerSelection = prompt("Choose: Rock, Paper or Scissors").toLowerCase();
  }

  return playerSelection;
}
function computerPlay() {
  return randomOption = options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = ask();
  computerSelection = computerPlay();
  if (playerSelection == computerSelection)
  alert( `Is a Tie! Both chose ${playerSelection}`);
  else if 
  ((playerSelection == "rock" && computerSelection == "scissors") ||
  (playerSelection == "scissors" && computerSelection == "paper") ||
  (playerSelection == "paper" && computerSelection == "rock")){
    playerScore++
    alert( `You Win! ${playerSelection} beats ${computerSelection}`);
  }
  else if 
  ((playerSelection == "scissors" && computerSelection == "rock") ||
  (playerSelection == "paper" && computerSelection == "scissors") ||
  (playerSelection == "rock" && computerSelection == "paper")) {
    computerScore++
    alert( `You Lose! ${computerSelection} beats ${playerSelection}`);
  }
}

function game() {
  for(i = 0; i < 5; i++){
    playRound();
    if ((playerScore == 3) || ((i == 4) && (playerScore > computerScore))){
      return "You Won the Match!"
    }
    if ((computerScore == 3)  || ((i == 4) && (computerScore > playerScore))){
      return "You Lose the Match"
    }
    if ((i == 4) && (playerScore == computerScore)){
      return "Is a tie, nobody wins!"
    }
  }
}


console.log(game());