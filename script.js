const randNum = document.getElementById("randomnum");
let userName = document.getElementById("username");
let stageValue = document.getElementById("stage");
let minValue = document.getElementById("minnum");
let maxValue = document.getElementById("maxnum");
const inputNumber = document.getElementById("inputnumber");
const button = document.getElementById("clickbutton");
let error = document.getElementById("error");
let goodGuess = document.getElementById("goodguess");
let generateRandomNum;

let person;
let stage = 1;
let correctCount = 0;
let randomNum;

minValue = 1;
maxValue = 2;

minValue.innerHTML = 1;
maxValue.innerHTML = 2;

userName.innerHTML = person;
stageValue.innerHTML = stage;

person = prompt("Enter your username");

// Function to check if guess is correct and increase correctCount
const guess = () => {
  if (randomNum === parseInt(inputNumber.value)) {
    randNum.style.display = "block";
    goodGuess.style.display = "block";

    setTimeout(() => {
      goodGuess.style.display = "none";
    }, 2000);
    // correctCount++;
    stageValue.innerHTML = stage + 1;
    increseGameStage();
  } else {
    goodGuess.style.display = "block";
    goodGuess.innerHTML = "Sorry try again...";

    setTimeout(() => {
      randNum.style.display = "none";
      goodGuess.style.display = "none";
      inputNumber.value = " ";
    }, 2000);
  }
};

// Function to change stage based on correctCount
const increseGameStage = () => {
  if (stage === 2) {
    maxValue.innerHTML = "3";
    inputNumber.value = " ";
    randNum.style.display = "none";
  }

  if (stage === 3) {
    maxValue.innerHTML = "5";
    inputNumber.value = " ";
    randNum.style.display = "none";
  }

  if (stage === 4) {
    maxValue.innerHTML = "7";
    inputNumber.value = " ";
    randNum.style.display = "none";
  }
};

// Function to generate random number on click of button
button.addEventListener("click", () => {
  // Check that input field is not empty
  if (
    inputNumber.value == null ||
    inputNumber.value == "undefine" ||
    inputNumber.value == "" ||
    inputNumber.value == NaN
  ) {
    error.innerHTML = "You must enter a number within the accepted range";
    error.style.display = "block";
    setTimeout(() => {
      error.style.display = "none";
    }, 2000);

    return;
  }
  generateRandomNum = (maxNum, minNum) => {
    randomNum = Math.round(Math.random() * (maxNum - minNum) + minNum);
    console.log(randomNum, parseInt(inputNumber.value));
    randNum.innerHTML = randomNum;
    guess();
  };

  generateRandomNum(parseInt(minValue), parseInt(maxValue));
});
