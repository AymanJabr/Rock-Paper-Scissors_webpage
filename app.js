let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

main();

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  if (userChoice == computerChoice) {
    draw();
  } else if (userChoice == "p") {
    if (computerChoice == "s") {
      lose("Paper", "Scissors");
    } else {
      win("Paper", "Rock");
    }
  } else if (userChoice == "s") {
    if (computerChoice == "r") {
      lose("Scissors", "Rock");
    } else {
      win("Scissors", "Paper");
    }
  } else {
    if (computerChoice == "p") {
      lose("Rock", "Paper");
    } else {
      win("Rock", "Scissors");
    }
  }
}


function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = userChoice + " beats " + computerChoice + "!";
  document.getElementById(getUserChoice(userChoice)).classList.add('green-glow');
  setTimeout( function() {
      document.getElementById(getUserChoice(userChoice)).classList.remove('green-glow');
  },400);
}
function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = userChoice + " loses to " + computerChoice + "!";
    document.getElementById(getUserChoice(userChoice)).classList.add('red-glow'); setTimeout(function () {
        document.getElementById(getUserChoice(userChoice)).classList.remove('red-glow');
    }, 400);
}
function draw() {
    result_div.innerHTML = "It's a draw.";
    document.getElementById(getUserChoice(userChoice)).classList.add('blue-glow'); setTimeout(function () {
        document.getElementById(getUserChoice(userChoice)).classList.remove('blue-glow');
    }, 400);
}


function getUserChoice(word){
    if(word == "Rock") return 'r';
    if(word == "Paper") return 'p';
    return 's'
}