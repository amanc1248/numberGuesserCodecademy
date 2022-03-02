let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 8 + 1);
};

// function for compairing guesses
const compareGuesses = (humanGuess, computerGuess, currentRoundNumber) => {
  if (
    humanGuess - currentRoundNumber === computerGuess - currentRoundNumber ||
    humanGuess - currentRoundNumber < computerGuess - currentRoundNumber
  ) {
    return true;
  } else {
    return false;
  }
};

// function for updating score
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else {
    computerScore++;
  }
};

// for next round
const advanceRound = () => {
  currentRoundNumber++;
};

updateScore("human");
console.log(humanScore); // To confirm that this value increased by 1
updateScore("computer");
console.log(computerScore); // To confirm that this value increased by 1
