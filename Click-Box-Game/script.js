const gameArea = document.getElementById('game-area');
const box = document.getElementById('box');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreValue = document.getElementById('score-value');
const timerValue = document.getElementById('timer-value');
const finalScore = document.getElementById('final-score');
const finalScoreValue = document.getElementById('final-score-value');

let score = 0;
let timeLeft = 30;
let gameInterval;
let colorInterval;
let moveInterval;

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreValue.textContent = score;
    timerValue.textContent = timeLeft;
    startBtn.classList.add('hidden');
    restartBtn.classList.add('hidden');
    finalScore.classList.add('hidden');
    
    startGameplay();
}

function startGameplay() {
    box.classList.remove('hidden');
    gameInterval = setInterval(updateGame, 1000);
    colorInterval = setInterval(changeBoxColor, 1000);
    moveInterval = setInterval(moveBox, 2000);
    moveBox();
}

function updateGame() {
    timeLeft--;
    timerValue.textContent = timeLeft;

    if (timeLeft <= 0) {
        endGame();
    }
}

function moveBox() {
    const maxX = gameArea.clientWidth - box.clientWidth;
    const maxY = gameArea.clientHeight - box.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    box.style.left = `${randomX}px`;
    box.style.top = `${randomY}px`;
}

function changeBoxColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = "#" + randomColor;
}

function clickBox() {
    score++;
    scoreValue.textContent = score;
    moveBox();
}

function endGame() {
    clearInterval(gameInterval);
    clearInterval(colorInterval);
    clearInterval(moveInterval);
    box.classList.add('hidden');
    restartBtn.classList.remove('hidden');
    finalScore.classList.remove('hidden');
    finalScoreValue.textContent = score;
}

box.addEventListener('click', clickBox);
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);