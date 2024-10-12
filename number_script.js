
let secretNumber = Math.trunc(Math.random() * 20) +1;
console.log(secretNumber)

let startScore =  20;
let currentScore = startScore;
let startHighscore = 0;
let guesses = [];

const score = document.querySelector(".score");
console.log(score);

const highscore = document.querySelector(".highscore");
console.log(highscore);

const displayMessage = document.querySelector(".message");
console.log(displayMessage);

const guess = document.querySelector(".guess");
console.log(guess);

const checkBtn = document.querySelector(".check");
console.log(checkBtn);

const againBtn = document.querySelector(".again");
console.log(againBtn)

const triedGuesses = document.querySelector(".priorguesses");

const guessFunc = () => {
    const checkGuess = parseInt(guess.value)
    guesses.push(checkGuess);

    if (isNaN(checkGuess)) {
        displayMessage.textContent = "Please put in a valid number between 1 to 20";
    } else if (checkGuess <1) {
        displayMessage.textContent = "Please put in a number between 1 to 20";
    } else if (checkGuess >20) {
        displayMessage.textContent = "Please put in a number between 1 to 20";
    } else if (checkGuess === secretNumber) {
        displayMessage.textContent = "😎😎😎Hurray you've found the secret number😎😎😎";
        if (currentScore > startHighscore) {
            highscore.textContent = currentScore;
        }
    } else {
        displayMessage.textContent = "🤡🤡🤡Try again🤡🤡🤡";
        currentScore -= 1;
        score.textContent =currentScore;
        if (currentScore <=0) {
            displayMessage.textContent ="💀💀💀GAME OVER💀💀💀"
            checkBtn.disabled = true;
            document.body.style.backgroundColor = "red";
        }
        triedGuesses.textContent = `${guesses.join(', ')}`;
    }
    console.log(checkGuess);

}

checkBtn.addEventListener("click", guessFunc);


const againBtnFunc = () => {
    secretNumber = Math.trunc(Math.random() * 20) +1;
    currentScore = startScore;
    score.textContent  = startScore;
    displayMessage.textContent = "Start guessing...";
    guess.value = "";
    document.querySelector(".number").textContent =" ";
    guesses = [];
    triedGuesses.textContent = " ";
    checkBtn.disabled = false;
    document.body.style.backgroundColor = "#222";

    console.log(againBtnFunc);
};

againBtn.addEventListener("click", againBtnFunc);




