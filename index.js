console.log("The Number Guessing game");
const username = prompt("Enter your username: ");

console.log(`Welcome ${username}`);
console.log("INSTRUCTIONS: Guess a number by entering it at the prompt:");

let stage = 1;
let minNum = 1;
let maxNum = 2;
let maxStage = 5;
let guessNum;

for (let i = stage; i <= maxStage; i++) {
  // User guess number
  let userGuess = () => {
    guessNum = prompt(`Guess a Number between ${minNum} and ${maxNum}`);

    return guessNum;
  };

  // Generate Random number
  const randomNumber = (min, max) => {
    const randomNum = Math.round(Math.random() * (max - min) + 1);
    return randomNum;
  };

  userGuess = userGuess();
  rnum = randomNumber(minNum, maxNum);

  if (userGuess === rnum) {
    stage = stage + 1;
    maxNum = maxNum + 1;
    console.log(`Correct...moving to stage ${stage}`);
    continue;
  } else {
    console.log("try again...");
  }
}

console.log("Game Over!!!");
