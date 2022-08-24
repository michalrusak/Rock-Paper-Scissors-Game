const options = document.querySelectorAll('.option');
const userPointsSpan = document.querySelector('.user-point');
const compPointsSpan = document.querySelector('.comp-point');
const resultText = document.querySelector('.result-text');
const userChoiceSpan = document.querySelector('.user-choice');
const compChoiceSpan = document.querySelector('.comp-choice');
const playAgainBtn = document.querySelector('.play-again');
const restartBtn = document.querySelector('.restart');
const resultDiv = document.querySelector('.result')

const choices = ['rock', 'paper', 'scissors'];

let userPoint = 0;
let userChoice = "";
let compPoint = 0;
let compChoice = "";
let winner = '';

function init () {
    userPointsSpan.innerHTML = userPoint;
    compPointsSpan.innerHTML = compPoint;
}

window.onload = init();

function game (e) {
    options.forEach((option) => {
        option.classList.remove('active')
    })

    this.classList.add('active')

    userChoice = e.target.dataset.option;
    compSelect();  
}

function compSelect () {
    const index = Math.floor(Math.random()*choices.length);
    compChoice = choices[index];
    checkResult();
}


function checkResult () {
    if(userChoice === 'rock' && compChoice === 'scissors' || userChoice === 'paper' && compChoice === 'rock' || userChoice === 'scissors' && compChoice === 'paper'){
        winner = 'You won!';
        userPoint++;
    }
    else if(userChoice === compChoice){
        winner = 'Draw!'
    }
    else{
        winner = 'You lost!';
        compPoint++;
    }
    init();
    render();
    
}

function render () {
    resultDiv.classList.remove('none')
    resultText.innerHTML = winner;
    resultText.classList.remove('red')
    resultText.classList.remove('grey')
    if(winner === 'Draw!'){
        resultText.classList.add('grey')
    }
    if(winner === 'You lost!'){
        resultText.classList.add('red')
    }
    userChoiceSpan.innerHTML = userChoice;
    compChoiceSpan.innerHTML = compChoice;
}

options.forEach((option) => {
    option.addEventListener('click', game)
})

function restart () {
    location.reload();
}

function playAgain () {
    resultDiv.classList.add('none');
    options.forEach((option) => {
        option.classList.remove('active')
    })
}

restartBtn.addEventListener('click', restart);
playAgainBtn.addEventListener('click', playAgain);